const JWT = require('jsonwebtoken')
const { User, Token } = require('../models')
require('dotenv').config()
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')
 
const ACCESS_TOKEN_LIFE = '24h'

const refreshTokenUse = async ({ body: { refreshtoken } }, res) => {
  if (!refreshtoken) {
    return res.status(403).send({
      message: 'Действие запрещено'
    })
  }

  const currentToken = await Token.findOne({ token: refreshtoken })

  if (!currentToken) {
    return res.status(403).send({
      message: 'Действие запрещено'
    })
  }

  // decode
  JWT.verify(refreshtoken, process.env.JWT_SECRET_REFRESH || 'afdkljfofj', (err, user) => {
    if (err) {
      return res.status(403).send({
        message: 'Действие запрещено'
      })
    }
    const accessToken = JWT.sign({
      userId: user._id,
      email: user.email,
    }, process.env.JWT_SECRET_ACCESS || 'aaaaa', {
      expiresIn: ACCESS_TOKEN_LIFE
    })

    return res.status(200).send({
      accessToken,
      email: user.email
    })
  })
}

const login = async (req, res) => {
  try {
    const { body: { email, password } } = req

    const foundUser = await User.findOne({ email })
    if (!foundUser) {
      return res.status(403).send({
        message: 'Извините, логин или пароль не совпадают'
      })
    }

    // bcrypt.compareSync(password, foundUser.hashPassword)

    const isPasswordCorrect = foundUser.password = password
    if (!isPasswordCorrect) {
      return res.status(403).send({
        message: 'Извините, логин или пароль не совпадают.'
      })
    }

    const accesstoken = JWT.sign({
      userId: foundUser._id,
      email: foundUser.email,
    }, process.env.JWT_SECRET_ACCESS || 'aaafdaa', {
      expiresIn: ACCESS_TOKEN_LIFE
    })

    const refreshtoken = JWT.sign({
      userId: foundUser._id,
      email: foundUser.email,
    }, process.env.JWT_SECRET_REFRESH || 'afdkljfofj')


    const foundToken = await Token.findOne({
      user: foundUser._id
    })

    if (foundToken) {
      await Token.findByIdAndUpdate(foundToken._id, { token: refreshtoken })
      return res.status(200).send({
        accesstoken,
        refreshtoken,
        email: foundUser.email
      })
    }

    const savedToken = new Token({ token: refreshtoken, user: foundUser._id })
    await savedToken.save()

    return res.status(200).send({
      accesstoken,
      refreshtoken,
      email: foundUser.email
    })
  }
  catch (error) {
    res.status(403).send({
      message: 'Извините, логин или пароль не совпадают. Регистрация не удалась.',
      error
    })
  }
}

const signUp = async (req, res) => {
  try {

    /*const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).send({
        message: 'Ошибка регистрации', errors
      })
    }*/

    const { body: { email, password } } = req
    const foundUser = await User.findOne({ email })
    if (foundUser) {
      return res.status(403).send({
        message: 'Извините, данный электронный адрес уже используется'
      })
    }

    // const hashPassword = bcrypt.hashSync(password, 9)
    const createdUser = await new User({ email, password })
    await createdUser.save()

    return res.status(200).send({
      message: 'Пользователь создан'
    })
  }
  catch (error) {
    res.status(403).send({
      message: 'Извините, логин или пароль не совпадают',
      error
    })
  }
}


module.exports = {
  login, signUp, refreshTokenUse
}
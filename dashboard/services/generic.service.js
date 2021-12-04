import axios from './axiosClient.service'

export default class GenericService {
  constructor({ url, name }) {
    this.url = url
    this.name = name
  }
  async fetchAll() {
    try {
      const { data } = await axios.get(`${this.url}/`)
      return data
    } catch (e) {
      throw {
        e,
        err: true,
        message: `something wrong`,
      }
    }
  }
  async fetchOne(id) {
    try {
      const { data } = await axios.get(`${this.url}/${id}`)
      return data
    } catch (e) {
      throw {
        e,
        err: true,
        message: `something wrong`,
      }
    }
  }
  async create(payload) {
    try {
      const { data } = await axios.post(`${this.url}/`, payload)
      return data
    } catch (e) {
      throw {
        e,
        err: true,
        message: `something wrong`,
      }
    }
  }
  async update(id, payload) {
    try {
      const { data } = await axios.put(`${this.url}/${id}`, payload)
      return data
    } catch (e) {
      throw {
        e,
        err: true,
        message: `something wrong`,
      }
    }
  }
  async delete(id) {
    try {
      await axios.delete(`${this.url}/${id}`)
    } catch (e) {
      throw {
        e,
        err: true,
        message: `something wrong`,
      }
    }
  }
}

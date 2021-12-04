const { genericCrud } = require('./generic.controller');
const { Category } = require('../models');

const relations = {
  getAll: 'products',
  get: 'products',
}

module.exports = {
  ...genericCrud(Category, relations),
};
const { genericCrud } = require('./generic.controller');
const { Product } = require('../models');

const relations = {
  get: 'category',
  getAll: 'category',
}

module.exports = {
  ...genericCrud(Product, relations),
};
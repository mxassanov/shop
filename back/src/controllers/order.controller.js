const { genericCrud } = require('./generic.controller');
const { Order } = require('../models');


module.exports = {
  ...genericCrud(Order),
};
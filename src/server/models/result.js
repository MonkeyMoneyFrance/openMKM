const mongoose = require('mongoose'), Model = mongoose.model;
const result = require('../schemas/result.js')

module.exports = Model("Result", result)

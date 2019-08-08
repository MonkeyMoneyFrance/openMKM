const mongoose = require('mongoose'), Model = mongoose.model;
const match = require('../schemas/match.js')

module.exports = Model("Match", match)

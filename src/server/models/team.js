const mongoose = require('mongoose'), Model = mongoose.model;
const team = require('../schemas/team.js')

module.exports = Model("Team", team)

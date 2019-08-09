const mongoose = require('mongoose'), Model = mongoose.model;
const game = require('../schemas/game.js')

module.exports = Model("Game", game)

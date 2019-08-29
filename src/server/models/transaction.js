const mongoose = require('mongoose'), Model = mongoose.model;
const transaction = require('../schemas/transaction.js')


module.exports = Model("Transaction", transaction)

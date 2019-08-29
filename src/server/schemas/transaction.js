const mongoose = require('mongoose'),
Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

module.exports = new Schema({
      to: {type:ObjectId,required:true},
      from:{type:ObjectId,required:true},
      std_currency:{type:String},
      mlc:{type:String},
      createdAt:{type:Date},
  },{timestamps:true})

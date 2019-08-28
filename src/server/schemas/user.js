const mongoose = require('mongoose'),
Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

module.exports = new Schema({
      firstName: {type:String,required:true},
      lastName:{type:String,required:true},
      address:{type:String},
      phone:{type:String},
  },{timestamps:true})

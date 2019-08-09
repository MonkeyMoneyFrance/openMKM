const mongoose = require('mongoose'),
Schema = mongoose.Schema;
ObjectId = Schema.Types.ObjectId;

module.exports = new Schema({
      firstName: {type:String,required:true},
      lastName:{type:String,required:true},
      licence:{type:String},
      teams:[{
        teamId:String,
      }],
  },{timestamps:true})

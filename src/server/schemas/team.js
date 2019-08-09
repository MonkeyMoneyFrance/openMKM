const mongoose = require('mongoose'),
Schema = mongoose.Schema;
ObjectId = Schema.Types.ObjectId;
//
module.exports = new Schema(
  {
      teamId : {type:String,required:true},
      teamName : {type:String,required:true},
      sport : {type:String,required:true},
      category : {type:String,required:true},
      division : {type:String,required:true},

  },
  {timestamps:true})

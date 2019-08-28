const mongoose = require('mongoose'),
Schema = mongoose.Schema,
ObjectId = Schema.Types.ObjectId;
//
module.exports = new Schema(
  {
      playedAt: {type:Date,required:true},
      status : {type:String,required:true,default:0},
      teams : [{teamId:{type:String,required:true},score:String}],
      sport : {type:String,required:true},
      category : {type:String,required:true},
      division : {type:String,required:true},

  },
  {timestamps:true})

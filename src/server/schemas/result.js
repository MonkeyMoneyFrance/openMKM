const mongoose = require('mongoose'),
Schema = mongoose.Schema;
ObjectId = Schema.Types.ObjectId;

module.exports = new Schema({

  main:{
    date:Date,
    referePresent:Boolean,
    refereeId:String,
    status:Number,
    division:String

  },
  signatures:{
    teamA:[{
      _id:String,
      date:Date
    }],
    teamB:[{
      _id:String,
      date:Date
    }],
    referee:[{
      _id:String,
      date:Date
    }]
  },
  teamA:{
    _id:String,
    players:[{_id:String}],
    result:Number,
    before:String,
    started:String,
    after:String,
    coachPresent:Boolean,
    coachId:String,
  },
  teamB:{
    _id:String,
    players:[{_id:String}],
    result:Number,
    before:String,
    started:String,
    after:String,
    coachPresent:Boolean,
    coachId:String,
  }
},{timestamps:true})

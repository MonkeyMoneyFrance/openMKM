const mongoose = require('mongoose'),
Schema = mongoose.Schema;
// ObjectId = Schema.Types.ObjectId;
//
module.exports = new Schema({
        email: {
            type: String, required: true,
            trim: true, unique: true,
            match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        },
        password : {type: String, required: true},
        userId : {type:ObjectId,required:true,unique:true},
        admin: {type:Boolean,default:false}
  },{timestamps:true})

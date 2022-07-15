const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/CMS')

const Schema=mongoose.Schema
const signupSchema=new Schema({
    name:String,
    email:String,
    password:String
});

var SignupData=mongoose.model('signupdata',signupSchema)
module.exports=SignupData;
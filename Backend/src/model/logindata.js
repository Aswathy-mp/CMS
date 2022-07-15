const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/CMS')

const Schema=mongoose.Schema
const loginSchema=new Schema({
    name:String,
    email:String,
    password:String
});

var LoginData=mongoose.model('logindata',loginSchema)
module.exports=LoginData;
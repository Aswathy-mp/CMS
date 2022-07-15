const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/CMS')

const Schema=mongoose.Schema
const signupSchema=new Schema({
    name:{type:String,required:true},
    email:{type:String,unique:true},
    userrole:{type:String,required:true},
    password:{type:String,required:true},
});

var SignupData=mongoose.model('signupdata',signupSchema)
module.exports=SignupData;
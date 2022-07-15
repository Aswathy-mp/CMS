const express = require('express');
const userdata = express.Router();
const SignupData=require('../model/signupdata');
const LoginData=require('../model/logindata');

userdata.post('/signup',(req,res)=>{
    console.log('signup called')
    const signupdata=new SignupData({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    signupdata.save();
});

userdata.post('/login',(req,res)=>{
    console.log('login called')
    const logindata=new LoginData({
        email:req.body.email,
        password:req.body.password
    })
    logindata.save();
})

module.exports=userdata;
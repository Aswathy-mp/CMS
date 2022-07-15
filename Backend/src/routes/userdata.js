const express = require('express');
const userdata = express.Router();
const SignupData=require('../model/signupdata');
const LoginData=require('../model/logindata');
const jwt=require('jsonwebtoken')

userdata.post('/signup',(req,res)=>{
    console.log('signup called')
    const signupdata=new SignupData({
        name:req.body.name,
        email:req.body.email,
        userrole:req.body.userrole,
        password:req.body.password
    })
    signupdata.save().then(()=>{
        res.json({success:true,message:'You have successfully registered'})
    })
    .catch((err)=>{
        if(err.code ===11000){
            return res.json({ success: false, message: "Email id already exists" })
        }
        else{
            return res.json({ success: false, message: "Authentication Failed" })
        }
    })
});

userdata.post('/login',(req,res)=>{
    console.log('login called')
    const logindata=new LoginData({
        email:req.body.email,
        password:req.body.password
    })
    SignupData.find({email:req.body.email}).exec()
    .then((result)=>{
       if(result.length<1){
        return res.json({ success: false, message: "user not found" })
       }
       user=result[0]
       if(req.body.password==user.password){
          var userrole=user.userrole;
          var username=user.name;
          var useremail=user.email
          let payload={userid:user._id}
          const token=jwt.sign(payload,'Aswathy')
          return res.json({ success: true, message: "Login successful",userrole:userrole,token:token,username:username,useremail:useremail})
       }
       else{
        return res.json({ success: false, message: "Password not matched" })
       }
       
    })
    
});

userdata.get('/getlogin',(req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    LoginData.find().then((logindata)=>{
        console.log(logindata)
        res.send(logindata)
    });
});

userdata.get('/getsignup',(req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    LoginData.find().then((signupdata)=>{
        console.log(signupdata)
        res.send(signupdata)
    });
});

module.exports=userdata;
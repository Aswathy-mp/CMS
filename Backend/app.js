const express =require('express');
const bodyparser=require('body-parser');
const cors =require('cors')
const userdata=require('./src/routes/userdata')
const SignupData=require('./src/model/signupdata')
var app=new express();

app.use(cors());
app.use(bodyparser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user',userdata)


const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`Our library app is running on port ${PORT}`);
});
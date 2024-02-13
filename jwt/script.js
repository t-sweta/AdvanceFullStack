const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const path = require("path");
// const mongoose = require("mongoose");
const User = require("./models/user");
const bcrypt = require("bcrypt");
const {createWebToken,verifyToken} = require("./auth/auth")
const cookieParser = require("cookie-parser");
app.use(express.static(path.join(__dirname,"static")));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser);
app.use(express.json());
app.set("view engine",'hbs');
app.get("/",verifyToken,(req,res)=>{
  res.render("home");
})
app.post("/signup",async(req,res)=>{
  const {email,password} = req.body;
  let hashPassword = await bcrypt.hash(password,saltRounds);
  
  let newUser = new User({email,password:hashPassword});
  await newUser.save();
  res.json(newUser);
})
app.post("/login",async (req,res)=>{
  const {email,password} = req.body;
  let user = await User.findOne({email});
  if(!user) return ress.send("No user found");
  bcrypt.compare(password,user.password).then(function(result){
    if(result){
      let token = createWebToken(user.toJSON());
      res.cookie("token",token);
      res.json(token);
    }
  })
})
app.get("/signup",(req,res)=>{
  res.render("signup");
})
app.get("/login",(req,res)=>{
  res.render("login");
})
mongoose.connect("mongodp://127.0.0.1:27017/g26jwt".then(()=>{
  app.listen(23345,()=>{
    console.log("server statrted");
  })
}))
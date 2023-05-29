const express =require("express")
const cookieParser = require("cookie-parser")
const path = require("path")

const app=express();

if(process.env.NODE_ENV !== "production"){
    require("dotenv").config({path:"backend/config/config.env"});
}


//using middleware
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb',extended:true}))
app.use(cookieParser())

//importing routes
const post=require("./routes/post")
const user=require("./routes/user")

//using routes
app.use("/api/v1",user)
app.use("/api/v1",post)



module.exports = app;
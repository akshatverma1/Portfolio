const express = require("express");
const app = express();

let port = 1111;

app.listen(port,(req,res)=>{
    console.log("port is this = "+port);
})

app.get("https://www.akshat.life/projects",(req,res)=>{
    res.render("project.ejs");
})
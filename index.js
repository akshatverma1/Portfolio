const express = require("express");
const app = express();

let port = 1111;

app.listen(port,(req,res)=>{
    console.log("port is this = "+port);
})

app.get("/projects",(req,res)=>{
    res.addListener("click",()=>{
        let j ="https://github.com/akshatverma1";
        location.href=j;
    })
})
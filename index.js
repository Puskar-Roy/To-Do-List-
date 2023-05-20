const express = require("express");
const  bodyParser = require("body-parser");
const ejs = require('ejs');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

// app.use(express.static("public"));



var user_resposnse = "";
var items =[];

app.get("/",(req,res)=>{
    res.render("list",{name:items})
})

app.post("/",(req,res)=>{
    user_resposnse = req.body.input;
    items.push(user_resposnse);
    res.redirect("/")
})

app.listen(3000,()=>{
    console.log("Server Start")
})
const express = require("express");
const app= express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/bmi.html");
})

app.post("/",function(req,res){
var n1=Number(req.body.height);
var n2= Number(req.body.weight);
var n3= n1/(n2*n2);
res.send("your bmi is "+n3);
})

app.listen(3001,function(){
    console.log("server is running on port number 3001");
})

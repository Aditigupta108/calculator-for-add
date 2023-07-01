const express=require("express");
const bodyparser=require("body-parser");
const app=express();
app.use(bodyparser.urlencoded({extended:true}));//it is the includation of html inputs
app.listen(3000,function(){
    console.log("hye");
});
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
    const num1=Number(req.body.n1);
    const num2=Number(req.body.n2);
    const output=num1+num2;
    
    res.send("the summation of numbers is:"+ output);
});
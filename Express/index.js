const express=require("express")
const app=express()

app.get("/",function(req,res){
    res.end("HomePage")
})
app.get("/contact-us",function(req,res){
    res.end("You can contact me at my email address")
})
app.get("/tweet",function(req,res){
    res.end("Here are your Tweets")
})
app.post("/tweet",function(req,res){
    res.status(201).end("Tweet created successfully")
})
app.listen(8000,()=>{console.log(`Server running 8000 port `)})
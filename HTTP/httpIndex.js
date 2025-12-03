const http=require("http")
const server=http.createServer(function(req,res){
  console.log("Incoming requests")
  console.log(req.headers)
})
server.listen(8000,()=>{console.log(`Server running on 8000 port`)})
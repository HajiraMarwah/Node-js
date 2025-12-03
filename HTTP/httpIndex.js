const http=require("http")
const server=http.createServer(function(req,res){
  console.log(`Incoming requests [${Date.now()}]`)
  // console.log(req.headers)
  // console.log(req.method)
  console.log(req.url)
  // res.writeHead(201)
  // res.end("OK!!!")
  // res.end(`Hey you  can accept ${req.headers['accept-language']}`)
  switch(req.url){
    case '/':
      res.writeHead(201)
      return res.end(`HomePage`)
    case '/contact-us':
      res.writeHead(201)
      return res.end(`Contact me at hajiranadia12@gmail.com`)
    case '/about':
      res.writeHead(201)
      return res.end("I am a software engineer")
    default:
      res.writeHead(200)
      return res.end("You are lost")
  }
})
server.listen(8000,()=>{console.log(`Server running on 8000 port`)})
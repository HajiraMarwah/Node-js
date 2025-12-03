//to get typings first npm init -y,npm i @types/node(bindings)
const http=require("http")
const server=http.createServer(function(req,res){ // createSErver takes callback function and returns access req and res
    console.log("I got incoming request")
    // can do db operations
    res.writeHead(200) //sets  headers sending 200 response(success)
    res.end("Thanks for visiting my server")
}) 
server.listen(8000,()=>{console.log(`HTTP server is up and running on 8000 port`)}) //opens 8000 port(port is physica)


// A server has one IP address (e.g., 10.2.3.4),
//  but multiple services can run on it, each using a different port.
//   If Node.js uses port 3000, no other service can use that port,
//    and you access it using 10.2.3.4:3000.
// driver code where utlizes all functionality
const ChatRoom=require("./chatRoom.js")

//create chatRoom instance
const chat=new ChatRoom()

//event listener who listens from this chat
chat.on("join",(user)=>{
    console.log(`${user} has joined the chat`)
})
chat.on("message",(user,message)=>{
   console.log(`${user}:${message}`)
})
chat.on("leave",(user)=>{
    console.log(`${user} has left the chat`)
})

//simulating the chat
chat.join("Alice")
chat.join("Bob")

chat.sendMessage("Alice","Hey Bob,Hello to everyone")
chat.sendMessage("Bob","Hey Alice,Hello to everyone")

chat.leave("Alice")
chat.sendMessage("Alice","This message wont be sent")
chat.leave("Bob")

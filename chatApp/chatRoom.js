//include all functionality
const EventEmitter=require("events")
class ChatRoom extends EventEmitter{
    constructor(){
        super()

        //want to collect all users(only active users)
        this.users=new Set() //Set used when whichkeeps all unique values
    }

    // join functionality of adding user
    join(user){
        this.users.add(user)
        this.emit("join",user)
    }

    //when user wants to send message
    sendMessage(user,message){
       //user should only send message if he is active user
       if(this.users.has(user)){
        this.emit("message",user,message)
       }else{
        console.log(`${user} is not in chat`)
       }
    }

    //when user leaves
    leave(user){
        if(this.users.has(user)){
            this.users.delete(user)
            this.emit("leave",user)
        }else{
            console.log(`${user} is not in chat`)
        }
    }
}
module.exports=ChatRoom
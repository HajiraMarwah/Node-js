const EventEmitter=require("events")
const eventEmitter=new EventEmitter()

eventEmitter.on("greet",(username)=>{
    console.log(`Hello ${username} welcome to node js`)
})

eventEmitter.on("greet",(username)=>{
    console.log(`Hey ${username} Welcome!`)
})

eventEmitter.once("pushnotify",()=>{
    console.log("Event runs only once")
})

//to emit the events
eventEmitter.emit("greet","hajira")
eventEmitter.emit("greet","Ilham")
eventEmitter.emit("pushnotify")
eventEmitter.emit("pushnotify") // runs only once it wont twice

const myListener=()=>{console.log("I am test listenr")}
eventEmitter.on("test",myListener)
eventEmitter.emit("test")
eventEmitter.emit("test") 
//remove listenersss
eventEmitter.removeListener("test",myListener)
eventEmitter.emit("test")  //wont run

console.log(eventEmitter.listeners("greet")) //tells how many fucntion are created greet in array
console.log(eventEmitter.listeners("test")) //comes empty array as we have removed
console.log(eventEmitter.listeners("pushnotify")) // once() removes the listener immediately to get i need to console log it befor emitting the event

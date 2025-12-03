const EventEmitter=require("events")
const eventEmiter=new EventEmitter()
eventEmiter.on("error",(err)=>{
    console.log(`Error Ocuured ${err.message}`)
})
eventEmiter.emit("error",new Error("Something went wrong"))

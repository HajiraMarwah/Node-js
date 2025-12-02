const fs=require("node:fs")  // require(built-in) i am requiring this fs module all code of fs is transferred to fs variable,variable name can be of anything
// console.log(fs)

//synchrous-non-
const content=fs.readFileSync("info.txt","utf-8") //give path of file i want and in which code you want to read 
console.log(content) 


const contents=fs.writeFileSync("info.txt","hey","utf-8") //overwite
console.log(contents)

const contentAppend=fs.appendFileSync("info.txt","/n/nHello","utf-8")
console.log(contentAppend)

// make directory
// fs.mkdirSync("games")

//want differnt directory inside games include recursive
fs.mkdirSync("games/cards/hero",{recursive:true})

//can remove directory
fs.rmdirSync("games/cards/hero")   //a gets removed
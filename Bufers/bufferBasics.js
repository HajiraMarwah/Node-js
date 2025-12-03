// when converting between buffers and strings character 
// coding must be specified if not utf-8 used as default

const {Buffer} =require("buffer")
const buf=Buffer.alloc(4) //used to allocate a memory to us(4 bytes) have initialized memory
console.log(buf)

// to access first
console.log(buf[1])

const bufStr=Buffer.from("Hello Hajira")
console.log(bufStr) //<Buffer 48 65 6c 6c 6f 20 48 61 6a 69 72 61>
console.log(bufStr.toString())

const bufTwo=Buffer.allocUnsafe(10)  //it doesnt clean memory like alloc means you might have some garbage value will not override the value
console.log(bufTwo)

const buffs=Buffer.alloc(10)
buffs.write("Hello")
console.log(buffs.toString())

const bufStrs=Buffer.from("Hajira Marwah")
console.log(bufStrs.toString())
console.log(bufStrs.toString("utf-8",0,4)) //in utf-8 need start from 0 index and end till 4 index(exlusive)

//maniulate
const bufHajira=Buffer.from("Hajira") 
console.log(bufHajira) // <Buffer 48 61 6a 69 72 61>
bufHajira[0]=0x4A
console.log(bufHajira) // <Buffer 4a 61 6a 69 72 61>
console.log(bufHajira.toString()) //Jajira

//concat
const buf1=Buffer.from("Hajira")
const buf2=Buffer.from("Marwah")
const merged=Buffer.concat([buf1,buf2])
console.log(merged)
console.log(merged.toString())
console.log(merged.length)

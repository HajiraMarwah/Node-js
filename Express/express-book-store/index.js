const express=require("express")
const app=express()
const PORT=8000
//In memory DB
const books=[
    {id:1,title:"Book One",authot:"Author one"},
    {id:2,title:"Book Two",authot:"Author two"},
    {id:3,title:"Book Three",authot:"Author three"}
]

//Routes
app.get('/books',(req,res)=>{
    //we can set our own custom headers
    res.setHeader('x-haj','hajira marwah')
    res.json(books)
})

app.get('/books/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    if(isNaN(id))
        return res.status(400).json({error:`Book with ${id} is not a number`})
    const book=books.find((e)=>e.id==id)
    if(!book) return res.status(404).json({error:`Book with ${id} does not exist`})
    return res.json(book)
})
app.listen(PORT,()=>console.log(`HTTP server running on Port ${PORT}`))
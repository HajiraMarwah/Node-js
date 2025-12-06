const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 8000;

// In memory DB
const books = [
    { id: 1, title: "Book One", author: "Author one" },
    { id: 2, title: "Book Two", author: "Author two" },
    { id: 3, title: "Book Three", author: "Author three" }
];
function loggerMiddleware(req, res, next)  {
    const log = `[${Date.now()}] ${req.method} ${req.path}\n`;
    fs.appendFileSync("logs.txt", log + "\n", "utf-8");
    next();
}

// Middlewares
//this runs first for every request-parses json body
app.use(express.json());

// Middleware A
//runs second (runs for every request)
app.use((req, res, next) => {
    console.log("I am Middleware A");
    next(); //goes to next middleware
});

// Middleware B
//runs 3rd (runs for every request)
app.use((req, res, next) => {
    console.log("I am middlware B");
    next(); //goes to next middleware
});

// Logging middleware
//runs 4th and writes into logs.txt(runs for every request)
app.use(loggerMiddleware);


// Routes
app.get('/books', (req, res) => {
    res.setHeader('x-haj', 'hajira marwah');
    res.json(books);
});

app.get('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id))
        return res.status(400).json({ error: `Book with ${id} is not a number` });

    const book = books.find((e) => e.id === id);
    if (!book)
        return res.status(404).json({ error: `Book with ${id} does not exist` });

    return res.json(book);
});

app.post('/books', (req, res) => {
    const { title, author } = req.body;

    if (!title)
        return res.status(400).json({ error: "Title is required" });

    if (!author)
        return res.status(400).json({ error: "Author is required" });

    const id = books.length + 1;
    const book = { id, title, author };

    books.push(book);
    return res.status(201).json({ message: `Book created successfully, ${id}` });
});

app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id))
        return res.status(400).json({ error: `ID must be a number` });

    const indexToDelete = books.findIndex((e) => e.id === id);

    if (indexToDelete < 0)
        return res.status(400).json({ error: `Book with id ${id} does not exist` });

    books.splice(indexToDelete, 1);
    return res.status(200).json({ message: "Book deleted" });
});

app.listen(PORT, () => console.log(`HTTP server running on Port ${PORT}`));

//Summary
// | Step | Component        | Runs For      | Always Runs? |
// | ---- | ---------------- | ------------- | ------------ |
// | 1    | express.json     | all requests  | ✔            |
// | 2    | Middleware A     | all requests  | ✔            |
// | 3    | Middleware B     | all requests  | ✔            |
// | 4    | loggerMiddleware | all requests  | ✔            |
// | 5    | Route Handler    | matched route | ❌            |

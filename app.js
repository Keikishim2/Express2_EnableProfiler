const express = require('express');
const app = express();
const port = process.env.PORT || 8000;


app.use(express.json());
app.use((req, res, next) => {
    console.log('I made it to Village88!');
    next();
})

app.get('/', (req, res)=>{
    res.json({ message: 'Hello, Kei!' });
});
app.listen(8000, () =>{
    console.log('Listening to port 8000');
})
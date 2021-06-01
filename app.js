const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');


app.use(express.json());

const checkKei = (req, res, next) => {
    const name = req.body.name

    if (name === 'Kei'){
        res.json({error: 'Congratulations! You made it, Kei!'});
    }else{
        next();
    }
};

app.use((req, res, next) => {
    console.log('I made it to Village88!');
    next();
})
app.post('/', checkKei, (req, res) => {
    res.send('You logged in!')
})
app.set('views', path.join(__dirname, 'views'));
app.set('view_engine', 'ejs');


app.get('/', (req, res)=> {
    res.json({ message: 'Hello, Kei!' });
});
app.listen(8000, () => {
    console.log('Listening to port 8000');
})
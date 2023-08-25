const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    // console.log(req.params)
    const num = 99;
    res.send(`<h1>${num} Bottles of beer on the wall </h1> <a href='/98'a> Take one down, pass it around </a>`);
});
app.get('/:number_of_bottles', (req, res) => {
    const {number_of_bottles} = req.params
    
    const nextBot = number_of_bottles - 1

    if (nextBot === -1) {
        res.send(`<h1>${number_of_bottles} Bottles of beer on the wall </h1> <a href='/'a> Home</a>`);
  } else {
    res.send(`<h1>${number_of_bottles} Bottles of beer on the wall </h1> <a href='/${nextBot}' a> Take one down, pass it around </a>`);
  }
});

app.listen(port, () => {
    console.log('listening');
});


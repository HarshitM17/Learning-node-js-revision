// Below are the learning of express
const express = require('express');
const app = express();


app.get('',(req,res)=>{
    res.send('Hello this is my first msg');

})

app.get('/ress',(req,res)=>{
    console.log("This is the passed name--->> "+ req.query.name)
    res.send('Welcome '+req.query.name);

})

app.get('/about',(req,res)=>{
    res.send('Hello this is about page');
    
})

app.listen(3001);
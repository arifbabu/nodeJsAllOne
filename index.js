const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nodeAllOne')
.then(()=> console.log("MongoDB Connected!"))
.catch(()=> console.log("Not Connected MongoDB!"))

const testRouter = require('./routes/test.router');
const studentRouter = require('./routes/student.router');


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'ejs');


app.get('/hi', (req, res)=>{
    res.render('index');
})

app.use('/api', testRouter);
app.use('/api/student', studentRouter);





app.listen(9000, ()=>{
    console.log("Server is Running!")
})







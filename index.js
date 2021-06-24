// use the schema to add data to the DB

const express = require('express');
const mongoose = require('mongoose');
const { getMaxListeners } = require('./models/user');
const User = require('./models/user');
const router = require('./routes');
const userRouter = require('./routes');



const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/users', userRouter);

mongoose.connect('mongodb://localhost:27017/signup', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.get('/', (req, res) => {
    res.status(200).send('Hello world!');
});
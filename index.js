// use the schema to add data to the DB

const express = require('express');
const express = require('mongoose');
const User = require('./models/user');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/signup', {
    useNewUrlParser: true
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

app.get('/', (req, res) => {
    res.send('Hello world!');
})
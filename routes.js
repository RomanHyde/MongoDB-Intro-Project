const express = require('express');
const router = express.Router();
const User = require('./models/user');

router.get('/', async (req, res) => {
    const users = await User.find({});
    // res.status(200).render('login');
    // res.status(200).send('Hello World!');
    res.status(200).json(users);
});

// post user first and then confirm
router.post('/',(req,res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let user = new User({
        name : name,
        email : email,
        password : password
        });
    user.save();
    res.status(201).send('I created a thing!');
});

module.exports = router;
const express = require('express');
const router = express.Router();

const User = require('../models/user')
router.post('/signup', (req,res,next) => {
    let user = new User;
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password
    console.log(req.body)

    User.findOne({ email: req.body.email}, (err, person) => {
        console.log(person)
        if(person) {
            res.json({
                success: false,
                message: 'Account with that email already exists'
            });
        } else {
            user.save((err, newUser) => {
                res.json(newUser.toJSON())
            });
        }
    });
});

router.post('/login', (req,res,next) => {
    const {email , password} = req.body
    User.findOne({ email}, (err, user) => {
        if(!user || !user.comparePassword(password)){
            return res.status(403).json({
                success: false,
                message: 'Email or Password incorrect'
            })
        }
        res.json(user.toJSON())
    })
})

module.exports = router;
const express = require('express');

const {
    loginController,
    registerController
}= require('../Controllers/userController');

//router object

const router = express.Router();


//routers
//POST || Login USer

router.post('/login',loginController);


//Post || register user

router.post('/register',registerController);

module.exports= router;
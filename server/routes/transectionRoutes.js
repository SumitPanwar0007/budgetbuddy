const express= require('express');
const { addTransection, getAllTransection,editTransection,deleteTransection } = require('../Controllers/transectionCtrl');


//router objects

const router= express.Router();

//routes

//add transection POST method

router.post('/add-transection',addTransection);

//get transection
router.post('/get-transection',getAllTransection);

//Edit transecion
router.post('/edit-transection',editTransection);

//Delete Transection
router.post('/delete-transection',deleteTransection);

module.exports= router;
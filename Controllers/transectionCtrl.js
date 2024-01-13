const moment = require('moment/moment');
const transectionModel = require('../models/transectionModel')


const getAllTransection=async (req,res)=>{
    try{
        const {frequency,selectDate,type}= req.body;
        const transections = await transectionModel.find({
            ...(frequency !=='custom'?{ 
                 date:{
                $gt:moment().subtract(Number(frequency),'d').toDate()
                }} :
                { date:{
                    $gte:selectDate[0],
                    $lte:selectDate[1]
                } }
                ),

                ...(type !=='all' &&{type}  ),
                
                user_id:req.body.user_id});
        res.status(200).json(transections)

    }
    catch(error){
        console.log(error);
        res.status(500).json(error);
    }
};

const addTransection=async (req,res)=>{
    try{
        const newTransection = new transectionModel(req.body);
        await newTransection.save();
        res.status(201).send("Transection Created");

    }
    catch(error){
        console.log(error)
        res.status(500).json(error)
    }
};

//edit callback
const editTransection= async(req,res)=>{
    try{
        await transectionModel.findOneAndUpdate(
            {
                _id:req.body.transectionId
            },
            req.body.payload
        );
        res.status(200).send("Edit Successfully")

    }
    catch(error){
        console.log(error)
        res.status(500).json(error)
    }

}

//delete cllback
const deleteTransection=async( req,res)=>{
    try{
        await transectionModel.findOneAndDelete(
            {
                _id :req.body.transectionId
            }
        );
        res.status(200).send("Deleted Successfully")

    }
    catch(error){
        console.log(error)
        res.status(400).json(error);
    }

}

module.exports= {getAllTransection,addTransection,editTransection,deleteTransection}
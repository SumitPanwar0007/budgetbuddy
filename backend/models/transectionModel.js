const mongoose= require('mongoose');

const transectionSchema=new mongoose.Schema({
    user_id:{

        type:String,
        required:true,
    },
    amount:{
        type:Number,
        required:[true,'amount is required']
    },
    type:{
        type:String,
        required:[true,"type is required"]
    },
    category:{
        type:String,
        requires:[true,'category is required']
    },
    refrence:{
        type:String,
    },
    description:{
        type:String,
        requires:[true,'description is required']
    },
    date:{
        type:Date,
        requires:[true,"data is required"]
    }
},
{timestamps:true}
);

const transectionModel= mongoose.model('transections',transectionSchema);



//export
module.exports= transectionModel;
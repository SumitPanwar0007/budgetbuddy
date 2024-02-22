const mongoose = require('mongoose');

//schema design

const userSchema= new mongoose.Schema({
    name:{type:String,
        required:[true,'name is required']
    },
    email:{
        type:String,
        required :[true,"email id is required"]
    },
    password:{
        type: String ,
        required:[true ,"password is requierd"],
    },
   
},
{timestamps:true}
)

//define mongoose model

const userModel= mongoose.model('user',userSchema);

//export
module.exports=userModel


const mongoose = require('mongoose')

const connectDb = async ()=>{
    try{
        console.log(process.env.MONGO_URL)
        await mongoose.connect("mongodb+srv://spgcloud31:GzhKmYNoUubnxU99@cluster0.shvcphm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log(`server running on  ${mongoose.connection.host}`)
    }
    catch(error){
        console.log(error,"this is the error ");
    }

}

module.exports= connectDb;
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors= require('cors');
const connectDb = require('./Config/connectDb');
const userRoutes = require('./routes/userRoutes')
const userTransection=require('./routes/transectionRoutes')
// const path=require("path")


//configure the env file

dotenv.config();

//rest object
const app = express();


//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors());

//routes

//user routes
app.use("/users",userRoutes);

// transection routes
app.use("/transection",userTransection)

//static files
app.use(express.static(path.join(__dirname),"./client/build"));

app.get("*", function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
});



//portss
const PORT =  process.env.PORT ||8081

//databse call

connectDb();

//listen


try {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
} catch (error) {
    console.error(`Error starting the server: ${error.message}`);
}
const express=require("express");
const app=express();
require("dotenv").config();
const mongod=require("mongoose")
const bodyPerser=require("body-parser")
const courseRouter=require("./route/controller")

app.use(bodyPerser.json())
app.use("",courseRouter)


//for connect with db by this approces....

mongod.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("Connected to MongoDB");
  }).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

//for start the server---
app.listen(process.env.PORT,()=>{
    console.log("Server Is runnig...");
});


// get the first requet by get method....
// app.get("/test",(req,res)=>{
//     res.send("Ok Server is runnig on 2000 port in our node js,")
// });



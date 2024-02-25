const mongoose=require("mongoose")


const Course=mongoose.Schema({
    courseName:String,
    courseDetails:String,
    coursePrice:Number,
    active:Boolean,
});

module.exports=mongoose.model("courses",Course)
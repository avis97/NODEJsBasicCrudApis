const express=require("express")
const Course=require("../models/course")
const route=express.Router();



//get all course-->>

route.get("/courses", async (req,res)=>{
    try{
    const allCourse= await Course.find();
    res.json(allCourse);
    }catch(error){
        res.json(error);
    }
});

//get a single course by id--> 

route.get("/:courseId",async (req,res) =>{

    const courseId=req.params.courseId;
    try{
        const cs= await Course.findById(courseId);
        res.json(cs);
    }catch(error){
        res.json("Course Are Not Present!!");
    }
});

//create a new course or add a new course-->

route.post("/create",async (req,res)=>{

    const newCourse=await Course.create(req.body);
    res.json(newCourse);
});

//delete a course in database-->

route.delete("/delete/:courseId",async (req,res) => {

       await Course.deleteOne({"_id":req.params.courseId});
       res.status(200).json({
           "massege":"delete done"
       })
});

// update o course in database--->>>

route.put("/update/:courseId",async (req,res)=>{
    
        const courseId=req.params.courseId;
        try{
            const course= await Course.updateOne(
                {
                    "_id":courseId
                },
                req.body
            )
            res.json(course);
        }catch(error){
            res.json("Course Are Not Present in our database");
        }
});

module.exports=route
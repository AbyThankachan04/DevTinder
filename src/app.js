const express = require("express")
const mongoose = require("./config/database")
const app = express()
const userModel = require("./models/user")

app.post("/signup", async (req,res)=>{
    const userObj = new userModel({
        firstName:"sachin",
        lastName:"tendulkar",
        password:"ron@123",
        age:"90",
        city:"portugal"
    })
    try{
        await userObj.save()
        res.send("user added successfully")
    }catch (error){
        res.status(400).send(error)
    }
    
})

mongoose.connectDB().then(()=>{
    console.log("mongodb connection estabilshed")
    app.listen(7777,()=>{
            console.log("listening  to port 7777")
    })
}).catch(()=>{
    console.log("error connection failed")
})

// app.listen(7777,()=>{
//     console.log("listening  to port 7777")
// })

const {adminAuth, userAuth} = require("./middlewares/auth")
app.use("/admin", adminAuth)

/**
 * order of the routes is very important 
 * eg: if the "/" is placed before any of the routes then no other routes will trigerred
 */


app.use("/test",(req, res)=>{
    res.send("test from test nodemon----------")
})
// app.use("/",(req, res)=>{ // its like a wild card route
//     res.send("empty slash")
// })
// app.use("/hello",(req, res)=>{
//     res.send("hello-")
// })

app.get("/user",(req, res,next)=>{
    next()
    res.send({id:1, name:'killadi'})
},(req,res,next)=>{
next()
},(req,res,next)=>{
res.send("response 3")
})

app.get("/admin/login",(req, res,next)=>{
    res.send("admin logged")
})
app.get("/user/login",userAuth,(req, res,next)=>{
    res.send("user logged")
})

app.get("/getData",(req, res,next)=>{
    throw new Error("asdsadsads")
})

app.get("/getUser",(req, res,next)=>{
    /**
     *  try catch block can be used for specific errors.
     */
    try {
        throw new Error("User fetching failed"); 
    } catch (error) {
        console.log("user error", error)
        res.status(500).send(error.message)
    }
})

/**
 * wildcard route, if our application breaks , below route will handle it
 * keep this route in the end , order matters
 */
app.use("/",userAuth,(err,req, res,next)=>{
    if(err){
        console.log("error", err);
        res.status(500).send("Internal Server Error")
        
    }
})
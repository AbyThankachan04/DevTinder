const express = require("express")

const app = express()

app.listen(7777,()=>{
    console.log("listening  to port 7777")
})

/**
 * order of the routes is very important 
 * eg: if the "/" is placed before any of the routes then no other routes will trigerred
 */


app.use("/test",(req, res)=>{
    res.send("test from test nodemon----------")
})
app.use("/",(req, res)=>{ // its like a wild card route
    res.send("empty slash")
})
app.use("/hello",(req, res)=>{
    res.send("hello-")
})
require('dotenv').config()
// console.log("Om Namo Narayanaya !!!!");
const express=require('express')
const app=express()
const port=3000

app.get("/",(req,res)=>{
    res.send("Hare Krishna")
})

app.get("/instagram",(req,res)=>{
    res.send("Instagram server here")
})

app.get("/login",(req,res)=>{
    res.send("You are logged in successfully :)")
})

app.get("/Youtube",(req,res)=>{
    res.send("Universal Teacher")
})

// app.listen(port,()=>{
//     console.log("I am there with you SRIKANTH...Just remember me ,where thing will go fine. just belive!!!")
// })

app.listen(process.env.PORT,()=>{                                    //for port busy purpose
    console.log("I am there with you SRIKANTH...Just remember me ,where thing will go fine. just belive!!!")
})
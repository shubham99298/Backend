const express=require('express');

require('dotenv').config();
const app=express();


app.listen(process.env.PORT,()=>{
    console.log(`server started on port ${process.env.PORT}`)
});

app.get('/',(req,res)=>{
    res.send("hello world !");
})
app.get('/twitter',(req,res)=>{
    res.send("twitter here");
})
app.get('/login',(req,res)=>{
    res.send("<h2>heyy</h2>");
})


const express=require('express');
const mongoose=require('mongoose');
const router = require("./routes/book-routes");
const cors=require('cors');

const USERNAME=process.env.USERNAME;
const PASSWORD=process.env.PASSWORD;


mongoose.connect(`mongodb+srv://admin:oYthd58wbF2EZ3rj@cluster0.vdh6f.mongodb.net/?retryWrites=true&w=majority`).then(()=>console.log("Database connected successfully")).then(()=>{app.listen(5000)}).catch((err)=>console.log(err));

const app=express();

//MiddleWares

app.use(express.json());
app.use(cors());
// app.get("/",function(req,res){
//     res.send("This is our starting app")
// })

app.use("/books",router)
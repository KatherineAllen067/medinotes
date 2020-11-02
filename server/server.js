// require('dotenv').config()
// const express = require("express");
// // const mongoose = require("mongoose");
// const app = express();
// const cors = require("cors");
// const notes = require('./routes/notes.js');
// const quiz = require('./routes/quiz.js');
// const bodyparser = require("body-parser");
// const jwt =require('jsonwebtoken');
// //middleware for cors
// app.use(cors());
// //for posting to data sets
// app.use(express.json());
// app.use(bodyparser.json());

// const authorize =(req, res, next)=>{
//     console.log(req.headers)
//     if(!req.headers.authorization)return res.status(401).json({success: false, message :"request denied please provided auth header"});

//     if(req.headers.authorization.indexOf('Bearer')=== -1) return res.status(401).json({sucess:false, message:'this request requires a Bearer token'});

//     const authToken = req.headers.authorization.split(' ')[1];
//     jwt.verify(authToken, process.env.JWT_SECRET, (err, decoded)=>{
//         if(err){
//             console.log(authToken, process.env.JWT_SECRET)
//             console.log('there is an error with verify')
//             return res.status(401).json({sucess:false, message:'token is invalid'});
//         }
//         req.jwtDecoded=decoded;
//         next();
//     });
// }

// //fake DB of two user profiles for demo
// const users ={
//     Emily:{
//         username:'Emily',
//         password:'5678'
//     },
//     Liam:{
//         username:'Liam',
//         password:'4321'
//     }
// }

// //login endpoint
// app.post('/login', (req, res)=>{
//     const { username, password } =req.body;
//     const user = users[username];
//     if(!user)return res.status(403).json
//     ({ sucess:false, message:'user not found'})
//     if(user && user.password === password){
//     const token = jwt.sign(
//             {
//                 name:user.name,
//                 exp: Date.now()+500000,
//                 username,
//                 loginTime:Date.now()
//             },
//             //from .env file
//             process.env.JWT_SECRET
//         );
//         return res.status(200).json({ token });
//     }else{
//         return res.status(403).json({sucess:false, message:'username or password is wrong'})
//     }
// });

// //endpoint for notes
// app.use('/notes', authorize, notes);

// //endpoints for quiz no auth needed
// app.use("/quiz", quiz)

// app.listen(8080, ()=>{
//     console.log('medinotes listening on 8080');
// });

require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const notes = require('./routes/notes.js');
const quiz = require('./routes/quiz.js');
const bodyparser = require("body-parser");
const jwt =require('jsonwebtoken');

//middleware for cors
app.use(cors());

//for posting to data sets
app.use(express.json());
app.use(bodyparser.json());

//DB configure
const db= require("./config/keys").mongoURI;

//connect to Mongo
mongoose
.connect(db)
.then(()=> console.log('MongoDB Connected...'))
    .catch(err=>console.log('there is an error in connection', err))

const port = process.env.PORT || 8080;

app.listen(port, ()=>console.log(`server started on port ${port}`))

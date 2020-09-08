const express = require("express");
const app = express();
const cors = require("cors");
const notes = require('./notes/notes.json');
const quiz = require('./quiz/quiz.json');
const bodyparser = require("body-parser");
const jwt =require('jsonwebtoken');
//middleware for cors
app.use(cors());

const authorize =(req, res, next)=>{
    if(!req.headers.authorization)return res.status(401).json
    ({success: false, message :"request denied please provided auth header"});

    if(req.headers.authorization.indexOf('Bearer')=== -1) return res.status(401).json
    ({sucess:false, message:'this request requires a Bearer token'});

    const authToken = requ.header.authorization.split(' ')[1];
    jwt.verify(authToken, process.env.JWT_SECRET, (err, decode)=>{
        if(err)return res.status(401).json({sucess:false, message:'token is invalid'});

        req.jwtDecoded=decoded;
        next();
    });
}

const users ={
    Emily:{
        name:'Emily',
        password:'1234'
    },
    Liam:{
        name:'Liam',
        password:'4321'
    }
}

//login endpoint
app.post('/login', (req, res)=>{
    const { username, password } =req.body;

    const user = user[username];
    if(!user)return res.status(403).json
    ({ sucess:false, message:'user not found'})
    if(user && user.password === password){
        const token = jwt.sign(
            {
                name:user.name,
                exp: Date.now()+500000,
                username,
                loginTime:Date.new()
            },
            //need to get this secret JWT in the .env file
            process.env.JWT_SECRET
        );
        return res.status(200).json({ token });
    }else{
        return res.status(403).json({sucess:false, message:'username or password is wrong'})
    }
});

//protected notes route
app.get('/notes', notes,  authorize, (req, res)=>{
    res.json({
        tokenInfo: req.jwtDecoded,
        information:{
            notes: 'user notes'
        }
    });
});

//for posting to data sets
app.use(express.json());
app.use(bodyparser.json());

//endpoints for quiz and notes
app.use("/quiz", quiz);

//user A 1234, user B 4321

app.listen(8080, ()=>{
    console.log('medinotes listening on 8080');
});
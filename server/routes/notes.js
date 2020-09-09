const express = require("express");
const router = express.Router();
let notes = require("../notes/notes.json");
const { v4: uuidv4 } = require("uuid");


//     "id": "1",
//     "username": "Emily",
//     "date": "May 3 2018",
//     "practitioner": "Dr.Wilson",
//     "note": """

//get notes endpoint
router.get("/", (req, res)=>{
  res.status(200).json(
        notes.map(n=>({
            id: n.id,
            username: n.username,
            date:n.date,
            practitioner:n.practitioner,
            note:n.note
        }))
    )
})

//post notes endpoint
router.post("/add", (req, res)=>{
    console.log('req body', req.body);
    const newNote ={
        ...req.body,
        id: uuidv4(),
    };
    notes.push(newNote);
    res.status(201).json(notes);
})

//edit notes endpoint front-end click for each note element

//delete notes endpoint


module.exports = router;
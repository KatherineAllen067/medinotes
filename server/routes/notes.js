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
router.post("/", (req, res)=>{
    console.log('req body', req.body);
    const newNote = {
        ...req.body,
        id: uuidv4(),
        date: Date.now(),
    };
    notes.push(newNote);
    res.status(201).json(notes);
})

//edit notes endpoint front-end click for each note element
router.put("/:id", (req, res)=>{
    console.log('req body', req.body);
    editted= notes.find(note=> note.id == req.params.id);
    let username = req.body.name;
    let practitioner = req.body.practitioner;
    let note = req.body.note;
    let date = req.body.date;
    eddited.username = username;
    edditted.practitioner = practitioner;
    edditted.note = note;
    eddited.date= date;
    res.status(200).json(notes);
});

//delete notes endpoint
router.delete("/:id", (req,res)=>{
    console.log(req.params.id);
    for (var i =0; i < notes.length; i++){
        if (notes[i].id == req.params.id){
            notes.splice(i, 1);
        }
    }
    res.status(200).json(notes);
})

module.exports = router;
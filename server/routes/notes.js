const express = require("express");
const router = express.Router();
let notes = require("../notes/notes.json");
const { v4: uuidv4 } = require("uuid");

//get notes endpoint
router.get("/", (req, res)=>{
let activeUser = req.jwtDecoded.username;
  res.status(200).json(
    notes.filter(n=> {
        return n.username === activeUser
    }));
});

//post notes endpoint
router.post("/", (req, res)=>{
    let activeUser = req.jwtDecoded.username;
    console.log('req body', req.body);
    const newNote = {
        ...req.body,
        id: uuidv4(),
        username: activeUser,
        date: Date.now(),
    };
    notes.push(newNote);
    res.status(201).json(notes.filter(n=>{
        return n.username === activeUser
    }));
})

//edit notes endpoint front-end click for each note element
router.put("/:id", (req, res)=>{
    let activeUser = req.jwtDecoded.username;
    console.log('req body', req.body);
    edit= notes.find(note=> note.id == req.params.id);
    let note = req.body.note;
    edit.note = note;
    res.status(200).json(
        notes.filter(n=> {
            return n.username === activeUser
        }));
});

//delete notes endpoint
router.delete("/:id", (req,res)=>{
    let activeUser = req.jwtDecoded.username;
    console.log(req.params.id);
    for (var i =0; i < notes.length; i++){
        if (notes[i].id == req.params.id){
            notes.splice(i, 1);
        }
    }
    res.status(200).json(
        notes.filter(n=> {
            return n.username === activeUser
        }));
})

module.exports = router;
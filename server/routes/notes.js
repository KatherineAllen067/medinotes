const express = require("express");
const router = express.Router();
let notes = require("../notes/notes.json");
const { v4: uuidv4 } = require("uuid");
//get notes endpoint
router.get("/", (req, res)=>{
    res.status(200).json(
        notes.map(n=>({
            id: n.id,
            date:n.date,
            practitioner:n.practitioner,
            note:n.note
        }))
    )
})
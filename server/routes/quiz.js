const express = require("express");
const router = express.Router();
let quiz = require("../quiz/quiz.json");

//get quiz data endpoint
router.get("/", (req, res)=>{
    res.status(200).json(
        quiz.map(q=>({
            id:q.id,
            practitioner:q.practitioner,
            description:q.description
        })))
});
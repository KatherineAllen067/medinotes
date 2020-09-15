const express = require("express");
const router = express.Router();
let quiz = require("../quiz/quiz.json");

//get quiz data endpoint
router.get("/", (req, res)=>{
    res.status(200).json(quiz)
});

//get quiz answer endpoint
router.get("/:id", (req, res)=>{
    console.log('id to find', req.params.id)
    res.status(200).json(quiz.filter(q =>q.id === req.params.id ))
});

module.exports = router;
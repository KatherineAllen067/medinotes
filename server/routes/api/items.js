const express = require("express");
const router = express.Router();

//bring in item Model
const Item = require('../../Models/Item');


//router @GET api/items all items
router.get('/', (req, res)=>{
    Item.find()
        .sort({date: -1})
        .then(items => res.json(items))
});



module.exports = router;
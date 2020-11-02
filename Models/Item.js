const mongoose = require('mongoose');
const { true } = require('tap');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name:{
        type: String,
        require:true
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);
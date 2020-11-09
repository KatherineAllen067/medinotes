const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    }
});
//export the model to bring into other files
module.exports = Item = mongoose.model('item', ItemSchema);
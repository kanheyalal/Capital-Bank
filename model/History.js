const mongoose = require('mongoose');

const history = new mongoose.Schema({
    sender: {
        type: String,
        required: true, 
    },
    reciever: {
        type: String,
        required: true, 
    },
    amount: {
        type: Number,
        required: true 
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true 
    }
});

const History = new mongoose.model('history', history);

module.exports = History;
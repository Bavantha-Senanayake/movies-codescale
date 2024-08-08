const mongoose = require('mongoose'); 

const movieArray = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    
    },
    year:{
        type: Number,
        required: true,
    },
    genre:{
        type: String,
        required: true,
    },
    director:{
        type: String,
        required: true,
    }
    
});


// Declare the Schema of sub object
const watchlistSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    
    },
    year:{
        type: Number,
        required: true,
    },
    genre:{
        type: String,
        required: true,
    },
    director:{
        type: String,
        required: true,
    }
    
});
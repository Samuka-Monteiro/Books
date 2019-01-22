const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Book = new mongoose.Schema({
    title: {type: String, required: true},
    genre: {type: String, required: true},
    author: {type: String, required: true},
    publisher: {type: String, required: false},
    pages: {type: String, required: false},
    img: {type: String, required: true},
    description: {type: String, required: true},
    
    created_at: {type: Date, default: Date.now},
    update_at: {type: Date, default: Date.now}
})

module.exports = mongoose.model('book', Book)
require('../model/book')
const mongoose = require('mongoose')
const TaskBook = mongoose.model('book')


//GET ALL BOOKS
const getAll = (req, res) =>{
    TaskBook.find((err, task)=>{
        if(err)
            res.send({success: false})
        res.send(task)
    })
}

//GET ONE SPECIFIC BOOK
const getOneById = (req, res) => {
    TaskBook.find({_id: req.params._id}, (err, task)=>{
        if(err)
            res.send({success: false})
        res.send(task)
    })
}

//ADD ONE BOOK
const addBook= (req, res) => {
    const add = new TaskBook(req.body)
    console.log(req.body)
    add.save((err, task)=>{
        if(err)
            res.send({success: false})
        res.send(task)
        
    })
}

//EDIT ONE BOOK
const editOneBook = (req, res) => {
    req.body.update_at = new Date()
    TaskBook.findOneAndUpdate({_id: req.params._id}, req.body, {new: true},  (err, task)=>{
        if(err)
            res.send({success: false})
        res.json(task)
                
    })
}

//DELETE ONE BOOK
const deleteOneBook = (req, res) => {
    TaskBook.remove({_id: req.params._id}, (err, task)=>{
        if(err)
            res.send({success: false})
        res.send({success: true})
    })
}
exports.controler = {
    getAll,
    getOneById,
    addBook,
    editOneBook,
    deleteOneBook
};



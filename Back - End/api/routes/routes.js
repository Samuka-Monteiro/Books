const router = require('express').Router()
const books = require('../controller/books')

//GET ALL BOOKS
router.get('/books', books.controler.getAll)

//GET ONE SPECIFIC BOOK
router.get('/books/:_id', books.controler.getOneById)

//ADD ONE BOOK
router.post('/books', books.controler.addBook)

//EDIT ONE BOOK
router.put('/books/:_id', books.controler.editOneBook)

//DELETE ONE BOOK
router.delete('/books/:_id', books.controler.deleteOneBook)


module.exports = router
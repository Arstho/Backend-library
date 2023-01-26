const {
    Router
} = require("express");
const router = Router();
const {
    booksController
} = require("../controllers/books.controller");

router.post("/admin/books", booksController.addBook);
router.get("/admin/books", booksController.getAllBooks);
router.get("/admin/books/genres", booksController.getBooksByGenre);
router.get("/admin/books/:id", booksController.getBookById);
router.patch("/admin/books/:id", booksController.patchBookById);
router.delete("/admin/books/:id", booksController.deleteBookById);



module.exports = router;
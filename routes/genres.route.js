const {
    Router
} = require("express");
const {
    genresController
} = require("../controllers/genres.controller");
const router = Router();

router.post("/admin/genres", genresController.addGenre);
router.get("/admin/genres", genresController.getAllGenres);
router.delete("/admin/genres/:id", genresController.deleteGenreById);


module.exports = router;
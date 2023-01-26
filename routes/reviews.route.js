const {
    Router
} = require("express");
const {
    reviewsController
} = require("../controllers/reviews.controller");
const router = Router();


router.get("/reviews", reviewsController.getReview);
router.post("/reviews", reviewsController.addReview);
router.delete("/reviews/:id", reviewsController.deleteReviewById);

module.exports = router;
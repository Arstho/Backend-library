const Review = require("../models/Review.model")

module.exports.reviewsController = {
    getReview: async (req, res) => {
        try {
            const getReview = await Review.find({}).populate({
                path: "nameOfReviewer",
                select: "name"
            }).populate({
                path: "book",
                select: "name"
            });
            return res.json(getReview)
        } catch (error) {
            console.log(error.message)
        }
    },

    deleteReviewById: async (req, res) => {
        try {
            const deleteReview = await Review.findByIdAndDelete(req.params.id)
            return res.json(deleteReview);
        } catch (error) {
            console.log(error.message)
        }
    },

    addReview: async (req, res) => {
        try {
            const addReview = await Review.create(req.params.id, {
                text: req.body.text,
                nameOfReviewer: req.body.nameOfReviewer,
                reviewedBook: req.body.reviewedBook
            });
            return res.json(addReview)
        } catch (error) {
            console.log(error.message)
        }
    },

};
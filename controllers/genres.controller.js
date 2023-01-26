const Genre = require("../models/Genre.model")

module.exports.genresController = {
  getAllGenres: async (req, res) => {
    try {
      const getGenres = await Genre.find({});
      return res.json(getGenres)
    } catch (error) {
      console.log(error.message)
    }
  },

  addGenre: async (req, res) => {
    try {
      const addGenre = await Genre.create({
        name: req.body.name
      });
      return res.json(addGenre)
    } catch (error) {
      console.log(error.message);
    }
  },

  deleteGenreById: async (req, res) => {
    try {
      const deleteGenreById = await Genre.findByIdAndDelete(req.params.id)
      return res.json(deleteGenreById)
    } catch (error) {
      console.log(error.message)
    }
  },
};
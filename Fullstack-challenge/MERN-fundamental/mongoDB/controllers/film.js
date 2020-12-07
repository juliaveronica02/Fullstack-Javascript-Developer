const { response } = require("express")
const FilmSchema = require("../models/Filmschema")

module.exports = ({
    createMovie: (req,res) => {
        FilmSchema.create({
            title: req.body.title,
            release: req.body.release,
            playing: req.body.playing,
            genre: req.body.genre
        }) .then(result => res.json(result))
        .catch(err => res.json(err))
    },
    getAllData: (req, res) => {
        FilmSchema.find({})
        .then(result => res.json(result))
        .catch(err => res.json(err))
    },
    getDataById: (req, res) => {
        FilmSchema.findById(req.params.movieId)
        .then(result => res.json(result))
        .catch(err => res.json(err))
    },
    deleteById: (req, res) => {
        FilmSchema.findByIdAndRemove(req.params.movieId)
        .then(result => res.json(result))
        .catch(err => res.json(err))
    },
    updateById: (req, res) => {
        FilmSchema.findByIdAndUpdate(req.params.movieId,{
            title: req.body.title,
            release: req.body.release,
            playing: req.body.playing,
            genre: req.body.genre
        })
        .then(result => res.json(result))
        .catch(err => res.json(err))
    }
})
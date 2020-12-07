const express = require("express")
const film = require("../controllers/film")
const router = express.Router()
const Film = require("../controllers/film")

router.post('/create', Film.createMovie)
router.get("/show", film.getAllData)
router.get("/show/:movieId", film.getDataById)
router.delete("/delete/:movieId", Film.deleteById)
router.put("/update/:movieId", film.updateById)

module.exports = router
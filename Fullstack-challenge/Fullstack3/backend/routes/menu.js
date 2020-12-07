const express = require("express")
const router = express.Router()
const menuController = require("../Controllers/Menu")

router.post("/create", menuController.create)
router.get("/show", menuController.getAllData)
router.delete("/delete/:menuId", menuController.deleteDataById)

module.exports = router
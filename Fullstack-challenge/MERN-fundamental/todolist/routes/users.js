var express = require('express');
var router = express.Router();
const Task = require("../Controllers/todo")

router.post("/create", Task.createTodo)
router.get("/show", Task.getAllTask)
router.put("/edit/:taskId", Task.updateTask)

module.exports = router;

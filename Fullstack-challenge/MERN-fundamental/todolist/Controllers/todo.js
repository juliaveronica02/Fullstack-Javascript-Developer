const mongoose = require("mongoose")
const Task = require("../models/todoListModels")

module.exports = ({
    createTodo: (req, res) => {
        var newTask = new Task(req.body)
        newTask.save(function(err,task){
            if(err) res.send(err)
            res.json(task)
        })
    },
    getAllTask: (req,res) => {
        Task.find({})
        .then(result => res.json(result))
        .catch(err => res.json(err))
    },
    updateTask: (req,res) => {
        Task.findByIdAndUpdate(req.params.taskId,
            req.body, {new:true}, function(err, task){
                if(err) res.send(err)
                res.json(task)
            }
        )
    }
})
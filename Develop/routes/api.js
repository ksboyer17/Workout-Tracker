const router = router = require("express").Router();
const workout = require("../models/workout")

applicationCache.post("api/workouts", function (req, res){
    workout.find()
    .then (data => res.json(data))
    .catch(err => {
        res.json(err)
    })
})
const router = require("express").Router();
const Workout = require("../models/Workout")


//get find Workout

router.get("/api/workouts", function (req, res){
    Workout.find().sort({day:"desc"}).limit(7)
    .then (data => res.json(data))
    .catch(err => {
        res.json(err)
    })
})

router.get("/api/workouts/:id", ({body,params}, res)=>{
    Workout.findOne(
       { where: {_id:params.id}},
    ). then (data => res.json(data))
    .catch(err => {
        res.json(err)
    })
})


//post create Workout
router.post("/api/workouts", function (req, res){
    Workout.create(req.body)
    .then(data => res.json(data))
    .catch(err => {
        res.json(err)
    })
})
//put route findbyidandupdate
router.put("/api/workouts/:id", ({body,params}, res)=>{
    Workout.findbyidandupdate(
       { where: {id:params.id}},
       body
    ). then (data => res.json(data))
    .catch(err => {
        res.json(err)
    })
})

module.exports = router;
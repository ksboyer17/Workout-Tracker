const router = require("express").Router();
const Workout = require("../models/Workout")


//get find Workout

router.get("/api/workouts", function (req, res){
    Workout.aggregate([
        {
            $addFields:{
                totalDuration: {
                    $sum: '$exercises.duration'
                }
            }
        }

    ]).then()
})

router.get("/api/:id", ({body,params}, res)=>{
    Workout.findOne(
       { where: {_id:params.id}},
    ). then (data => res.json(data))
    .catch(err => {
        res.json(err)
    })
})


//post create Workout
router.post("/", function (req, res){
    Workout.create(req.body)
    .then(data => res.json(data))
    .catch(err => {
        res.json(err)
    })
})
//put route findbyidandupdate
router.put("/:id", ({body,params}, res)=>{
    Workout.findByIdAndUpdate(
       { where: {id:params.id}},
       body
    ). then (data => res.json(data))
    .catch(err => {
        res.json(err)
    })
})

module.exports = router;
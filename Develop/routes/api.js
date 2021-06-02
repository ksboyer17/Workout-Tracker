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

    ]).then((allWorkouts)=> {
        res.json(allWorkouts)
    })
    .catch(err => {
        res.json(err)
    })
})

router.get("/api/workouts", function (req, res){
    Workout.aggregate([
        {
            $addFields:{
                totalWeight: {
                    $sum: '$exercises.weight'
                }
            }
        }

    ]).then((allWorkouts)=> {
        res.json(allWorkouts)
    })
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
// router.put("api/workouts/:id", ({body,params}, res)=>{
//     Workout.findByIdAndUpdate(
//        { where: {id:params.id}},
//        body
//     ). then (data => res.json(data))
//     .catch(err => {
//         res.json(err)
//     })
// })


router.put("api/workouts/:id", ({body,params}, res)=>{
    console.log("I am the body",body);
    console.log("I am the params",params);
    Workout.findByIdAndUpdate(
        params.id,
        {$push: {exercises:body}},
        {new:true,runValidators:true}
    ).then (data => res.json(data))
    .catch(err => {
        res.json(err)
    })
})


module.exports = router;
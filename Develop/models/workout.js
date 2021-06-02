const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
      day: {
    type: Date,
    default: Date.now
  },  
      exercises:[{
        type: {type:String},
        name: String,
        duration: Number,
        weight: Number,
        reps: Number ,
        sets: Number,
        distance: Number
      }
    ]
  },
  // {
  //   // toJSON:{
  //   //   virtuals: true
  // }
// }
);

  // workoutSchema.virtual("TotalDuration").get(function(){
  //   return this.exercises.reduce(function(sum,exercise){
  //     return sum + exercise.duration
  //   },0)
  // })

  // workoutSchema.virtual("TotalWeight").get(function(){
  //   return this.exercises.reduce(function(sum,exercise){
  //     return sum + exercise.weight
  //   },0)
  // })

  const Workout = mongoose.model('Workout', workoutSchema);

  module.exports = Workout;
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const skillSchema = new Schema({
  Name: String,
  Level: String, 
  Speed: String,
  Easy: Boolean
}
)
//Ask what "skill" is doing
const Skill = mongoose.model("Skill", skillSchema)

export{
  Skill
}
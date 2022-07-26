import mongoose from 'mongoose'

const assignmentSchema = new mongoose.Schema({
  name: String,
  dueDate: Date,
  estTime: Number,
  completed: Boolean
},{
  timestamps: true,
})

const profileSchema = new mongoose.Schema({
  email: { type: String, required: true, lowercase: true, unique: true },
  name: String,
  photo: { type: String },
  assignments: [assignmentSchema]
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }

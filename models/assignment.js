import mongoose from 'mongoose'

const assignmentSchema = new mongoose.Schema({
  name: String,
  dueDate: Date,
  estTime: Number,
  completed: Boolean
},{
  timestamps: true,
})

const Assignment = mongoose.model('Assignment', assignmentSchema)

export { Assignment }

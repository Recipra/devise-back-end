import { Profile } from "../models/profile.js"

function index(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    res.status(200).json(profile.assignments)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function create(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    profile.assignments.push(req.body)
    profile.save()
    res.json(profile.assignments[(profile.assignments.length - 1)])
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function deleteAssignment(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    profile.assignments.remove({_id: req.params.assignmentId})
    profile.save()
    res.status(200).json(profile.assignments)
  })
  .catch (err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function update(req, res) {
  // console.log('THIS FIRED')
  console.log('THIS FIRED', req.body)
  Profile.findById(req.params.id)
  .then(profile => {
    profile.assignments.forEach(assignment => {
      if (assignment._id === req.params.assignmentId) {
        assignment.name = req.body.name
        assignment.dueDate = req.body.dueDate
        assignment.estTime = req.body.estTime
        profile.save()
        res.status(200).json(profile.assignments)
      }
    })
  })
  .catch (err => {
    console.log(err)
    res.status(500).json(err)
  })
}

export {
  index,
  create,
  update,
  deleteAssignment as delete
}
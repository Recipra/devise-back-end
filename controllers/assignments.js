import { Profile } from "../models/profile.js"

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

export {
  create
}
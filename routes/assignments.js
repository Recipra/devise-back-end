import { Router } from 'express'
import * as assignmentsCtrl from '../controllers/assignments.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/:id', checkAuth, assignmentsCtrl.index)
router.post('/:id', checkAuth, assignmentsCtrl.create)
router.delete('/:id/:assignmentId', checkAuth, assignmentsCtrl.delete)

export { router }

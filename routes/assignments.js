import { Router } from 'express'
import * as assignmentsCtrl from '../controllers/assignments.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
// router.get('/', checkAuth, assignmentsCtrl.index)
router.post('/:id', checkAuth, assignmentsCtrl.create)

export { router }

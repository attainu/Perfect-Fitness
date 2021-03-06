const passport = require('passport')
const { Router } = require('express')
const router = Router()
const { registerTrainer,
        deletePFTrainer } = require('../../controllers/apiControllers/trainerApiController')
const { check } = require('express-validator')

router.post('/add/trainer', [ 
    check('name', 'Name is required').not().isEmpty(),
    check('name', 'Name should contain atleast Three characters').isLength({min: 3}),
    check('email', 'Email is required').not().isEmpty(),
    check('email', 'Invalid Email').isEmail(),
    check('perEmail', 'Personal Email is required').not().isEmpty(),
    check('perEmail', 'Invalid Personal Email').isEmail(),
    check('password', 'password is required').not().isEmpty(),
    check('password', 'Password should be of atleast 4 charaters').isLength({min: 4}) 
], passport.authenticate('jwt', {session: false}), registerTrainer)
router.delete('/delete/trainer/:trainerId', passport.authenticate('jwt', {session: false}), deletePFTrainer)
module.exports = router
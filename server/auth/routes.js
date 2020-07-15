const router = require('express').Router()
const authController = require('./controllers')

router.post('/login', authController.login)


router.get('/:id', authController.getCurrentUserData)
router.get('/friends/:id', authController.getUserFriendsData)


module.exports = router;

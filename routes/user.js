const express = require('express')
const { create_user, get_users } = require('../contoller/user')
const router  = express.Router()



router.route('/create/user/data').post(create_user)
router.route('/get/users').get(get_users)






module.exports = router
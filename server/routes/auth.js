const router = require('express').Router()
const {verify,login,loginAdmin} = require('../controllers/auth')
const verifyToken = require('../middlewares/authentication')



// @route GET api/auth
// @desc Check if user is logged in
// @access Public
router.get('/', verifyToken, async(req, res) => {await verify(req, res)})

// @route POST api/auth/users/login
// @desc Login user
// @access Public
router.post('/users/login',async(req, res) => {await login(req, res)})

// @route POST api/auth/admins/login
// @desc Login admin
// @access Public
router.post('/admins/login',async(req, res) => {await loginAdmin(req, res)})

module.exports = router


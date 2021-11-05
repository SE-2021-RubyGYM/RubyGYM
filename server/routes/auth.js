const router = require('express').Router()
const {verify,createUser,login} = require('../controllers/auth')
const verifyToken = require('../middlewares/authentication')


// @route POST api/auth/create_user
// @desc Create new user
// @access Private
router.post('/create_user',async(req, res) => {await createUser(req, res)})

// @route GET api/auth
// @desc Check if user is logged in
// @access Public
router.get('/', verifyToken, async(req, res) => {await verify(req, res)})

// @route POST api/auth/login
// @desc Login user
// @access Public
router.post('/login',async(req, res) => {await login(req, res)})

module.exports = router


const router = require('express').Router()
const {verifyAdmin,verifyCoach} = require('../controllers/auth')
const {createUser,getUsers,getUserById,updateUserById,deleteUserById,
    changePassword,changeUserAssessment,changeUserInfos,getUsersByCoach,
    getMyInfos} = require('../controllers/users')
const verifyToken = require('../middlewares/authentication')


// @route POST api/users
// @desc Create new user
// @access Private
router.post('/',verifyToken,verifyAdmin,async(req, res) => {await createUser(req, res)})


// @route GET api/users
// @desc Get all users
// @access Private
router.get('/',verifyToken,verifyAdmin,async(req, res) => {await getUsers(req, res)})

// @route GET api/users/:id
// @desc Get user by id
// @access Private
router.get('/:id',verifyToken,verifyAdmin,async(req, res) => {await getUserById(req, res)})

// @route PUT api/users/:id
// @desc Update user by id
// @access Private
router.put('/:id',verifyToken,verifyAdmin,async(req, res) => {await updateUserById(req, res)})

// @route DELETE api/users/:id
// @desc Delete user by id
// @access Private
router.delete('/:id',verifyToken,verifyAdmin,async(req, res) => {await deleteUserById(req, res)})

// @route PUT api/users/:id/change_password
// @desc Change password of an user by id
// @access Private
router.put('/:id/change_password',verifyToken,async(req, res) => {await changePassword(req, res)})

// @route PUT api/users/:id/assess
// @desc assess an user by id
// @access Private
router.put('/:id/assess',verifyToken,verifyCoach,async(req, res) => {await changeUserAssessment(req, res)})

// @route PUT api/users/:id/change_info
// @desc change user's infomations by id
// @access Private
router.put('/:id/change_info',verifyToken,async(req, res) => {await changeUserInfos(req, res)})

// @route GET api/users/get_by_coach
// @desc Get all users of a coach
// @access Private
router.get('/get_by_coach',verifyToken,verifyCoach,async(req, res) => {await getUsersByCoach(req, res)})

// @route GET api/users/:id/my_info
// @desc Get information of an users by his credential
// @access Private
router.get('/:id/my_info',verifyToken,async(req, res) => {await getMyInfos(req, res)})


module.exports = router


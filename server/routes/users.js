const router = require("express").Router();
const { verifyAdmin } = require("../controllers/admins");
const { verifyCoach } = require("../controllers/coachs");
const {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  changePassword,
  changeUserAssessment,
  changeUserInfos,
  getUsersByCoach,
  getMyInfos,
  verify,
  login,
} = require("../controllers/users");
const verifyToken = require("../middlewares/authentication");

// @route GET api/users/auth
// @desc Check if user is logged in
// @access Public
router.get("/auth", verifyToken, async (req, res) => {
  await verify(req, res);
});

// @route POST api/users/login
// @desc Login user
// @access Public
router.post("/login", async (req, res) => {
  await login(req, res);
});

// @route POST api/users
// @desc Create new user
// @access Private
router.post("/", async (req, res) => {
  await createUser(req, res);
});

// router.post('/',verifyToken,verifyAdmin,async(req, res) => {await createUser(req, res)})

// @route GET api/users
// @desc Get all users
// @access Private
router.get("/", async (req, res) => {
  await getUsers(req, res);
});

// router.get('/',verifyToken,verifyAdmin,async(req, res) => {await getUsers(req, res)})

// @route GET api/users/:id
// @desc Get user by id
// @access Private
// router.get('/:id',verifyToken,verifyAdmin,async(req, res) => {await getUserById(req, res)})
router.get("/:id", async (req, res) => {
  await getUserById(req, res);
});

// @route PUT api/users/:id
// @desc Update user by id
// @access Private
router.put("/:id", verifyToken, verifyAdmin, async (req, res) => {
  await updateUserById(req, res);
});

// @route DELETE api/users/:id
// @desc Delete user by id
// @access Private
router.delete("/:id", verifyToken, verifyAdmin, async (req, res) => {
  await deleteUserById(req, res);
});

// @route PUT api/users/:id/change_password
// @desc Change password of an user by id
// @access Private
router.put("/:id/change_password", verifyToken, async (req, res) => {
  await changePassword(req, res);
});

// @route PUT api/users/:id/assess
// @desc assess an user by id
// @access Private
router.put("/:id/assess", verifyToken, verifyCoach, async (req, res) => {
  await changeUserAssessment(req, res);
});

// @route PUT api/users/:id/change_info
// @desc change user's infomations by id
// @access Private
router.put("/:id/change_info", verifyToken, async (req, res) => {
  await changeUserInfos(req, res);
});

// @route GET api/users/get_by_coach
// @desc Get all users of a coach
// @access Private
router.get("/get_by_coach", verifyToken, verifyCoach, async (req, res) => {
  await getUsersByCoach(req, res);
});

// @route GET api/users/:id/my_info
// @desc Get information of an users by his credential
// @access Private
router.get("/:id/my_info", verifyToken, async (req, res) => {
  await getMyInfos(req, res);
});

module.exports = router;

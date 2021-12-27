const router = require("express").Router();
const { verifyAdmin } = require("../controllers/admins");
const {
  createCoach,
  getCoachs,
  getCoachById,
  updateCoachById,
  deleteCoachById,
  changePassword,
  changeCoachAssessment,
  changeCoachInfos,
  getCoachsByCoach,
  getMyInfos,
  verifyCoach,
  login,
} = require("../controllers/coachs");
const verifyToken = require("../middlewares/authentication");

// @route GET api/coachs/auth
// @desc Check if coach is logged in
// @access Public
router.get("/auth", verifyToken, verifyCoach, async (req, res) => {
  await verifyCoach(req, res);
});

// @route POST api/coachs/login
// @desc Login coach
// @access Public
router.post("/login", async (req, res) => {
  await login(req, res);
});

// @route POST api/coachs
// @desc Create new coach
// @access Private
router.post("/", async (req, res) => {
  await createCoach(req, res);
});

// router.post('/',verifyToken,verifyAdmin,async(req, res) => {await createCoach(req, res)})

// @route GET api/coachs
// @desc Get all coachs
// @access Private
router.get("/", async (req, res) => {
  await getCoachs(req, res);
});

// router.get('/',verifyToken,verifyAdmin,async(req, res) => {await getCoachs(req, res)})

// @route GET api/coachs/:id
// @desc Get coach by id
// @access Private
// router.get('/:id',verifyToken,verifyAdmin,async(req, res) => {await getCoachById(req, res)})
router.get("/:id", async (req, res) => {
  await getCoachById(req, res);
});

// @route PUT api/coachs/:id
// @desc Update coach by id
// @access Private
router.put("/:id", verifyToken, verifyAdmin, async (req, res) => {
  await updateCoachById(req, res);
});

// @route DELETE api/coachs/:id
// @desc Delete coach by id
// @access Private
router.delete("/:id", verifyToken, verifyAdmin, async (req, res) => {
  await deleteCoachById(req, res);
});

// @route PUT api/coachs/:id/change_password
// @desc Change password of an coach by id
// @access Private
router.put("/:id/change_password", verifyToken, async (req, res) => {
  await changePassword(req, res);
});

// @route PUT api/coachs/:id/change_info
// @desc change coach's infomations by id
// @access Private
router.put("/:id/change_info", verifyToken, async (req, res) => {
  await changeCoachInfos(req, res);
});

// @route GET api/coachs/:id/my_info
// @desc Get information of an coachs by his credential
// @access Private
router.get("/:id/my_info", verifyToken, async (req, res) => {
  await getMyInfos(req, res);
});

module.exports = router;

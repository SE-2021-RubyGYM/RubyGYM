const router = require("express").Router();
const {
  verifyCoach
} = require("../controllers/coachs");
const verifyToken = require("../middlewares/authentication");
const {updateCalendars, getCalendarsOfCoach, getCalendarsOfUser, deleteCalendar, refreshCalendars} = require("../controllers/calendars");

// @access Private
router.post("/update_calendars",verifyToken,verifyCoach, async (req, res) => {
  await updateCalendars(req, res);
});

// @access Private
router.post("/refresh_calendars",verifyToken,verifyCoach, async (req, res) => {
  await refreshCalendars(req, res);
});

// @access Private
router.delete("/delete_calendars",verifyToken,verifyCoach, async (req, res) => {
  await deleteCalendar(req, res);
});


// @access Private
router.get("/",verifyToken,verifyCoach, async (req, res) => {
  await getCalendarsOfCoach(req, res);
});

// @access Private
router.get("/:id",verifyToken,verifyCoach, async (req, res) => {
    await getCalendarsOfUser(req, res);
  });

module.exports = router;

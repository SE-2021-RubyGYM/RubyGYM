const Calendar = require("../models/calendars");
const Coach = require("../models/coachs");
const User = require("../models/users");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

module.exports = {
  // create new calendar if not exist and update it if exist
  updateCalendars: async (req, res) => {
    if(!req.position || (req.position != "Administrator" && req.position != "HR" && req.position != "Coach")) {
        return res
        .status(401)
        .json({ success: false, message: 'Unauthorized',result: null  })
    }
    const coachId = req.userId
    const { startTime, endTime, startTimezone, endTimezone, isAllDay, subject, userId, description, recurrenceRule, recurrenceID, recurrenceException, ID } =
      req.body;

    if (!startTime || !endTime || (isAllDay == null) || !subject || !userId) {
      return res.status(400).json({
        success: false,
        message: "Missing information(s)" + startTime + " " + endTime + " "+ isAllDay + " "+ subject + " "+ userId,
        result: null,
      });
    }

    const query = {coachId: coachId, userId: userId, startTime: startTime, endTime: endTime },
      update = { startTime, endTime, startTimezone, endTimezone, isAllDay, subject, userId, description, recurrenceRule, recurrenceID, recurrenceException, ID },
      options = { upsert: true, new: true, setDefaultsOnInsert: true };
    try {
      
      Calendar.findOneAndUpdate(query, update, options, function(error, result) {
        if (error) return res.status(400).json({
          success: false,
          message: "error",
          result: error.message,
        })
        else {
          if(result._id != ID) {
            result.ID = result._id
            result.save()
          }

  
          return res.json({
            success: true,
            message: "API OK",
            result: result,
          });
        }
    
        // do something with the document
      });
      
    } catch (error) {
      console.log(error);
      return res.status(510).json({
        success: false,
        message: "Internal server error",
        result: null,
      });
    }
  },
  refreshCalendars: async (req, res) => {
    if(!req.position || (req.position != "Administrator" && req.position != "HR" && req.position != "Coach")) {
        return res
        .status(401)
        .json({ success: false, message: 'Unauthorized',result: null  })
    }
    const coachId = req.userId;
    const newCalendars = req.body;
    let result = [];
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
      let deleted = await Calendar.deleteMany({coachId: coachId}, {session: session})
      for (const calendar of newCalendars) {
        let { startTime, endTime, startTimezone, endTimezone, isAllDay, subject, userId, description, recurrenceRule, recurrenceID, recurrenceException, ID } =
          calendar;
        if (!startTime || !endTime || (isAllDay == null) || !subject || !userId) {
          console.log("Missing information(s)");
          await session.abortTransaction();
          session.endSession();
          return res.status(400).json({
            success: false,
            message: "Missing information(s)" + startTime + " " + endTime + " "+ isAllDay + " "+ subject + " "+ userId,
            result: null,
          });
        }
        if(!mongoose.isValidObjectId(ID)){ 
          ID = mongoose.Types.ObjectId()
        }
        let tempCalendar = new Calendar({
          _id: ID,
          startTime,
          endTime,
          startTimezone,
          endTimezone,
          isAllDay,
          subject,
          userId,
          description,
          recurrenceRule,
          recurrenceID,
          recurrenceException,
          ID,
          coachId
        });
        
        await tempCalendar.save({ session: session });
        result.push(tempCalendar);
        

        

      };
      await session.commitTransaction();
      session.endSession();
      return res.json({
        success: true,
        message: "API OK",
        result: result,
      });
    }
    catch (error) {
      await session.abortTransaction();
      session.endSession();
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        result: null,
      });
    }
  },
  deleteCalendar : async (req, res) => {
    if(!req.position || (req.position != "Administrator" && req.position != "HR" && req.position != "Coach")) {
        return res
        .status(401)
        .json({ success: false, message: 'Unauthorized',result: null  })
    }
    const coachId = req.userId
    const { startTime, endTime, isAllDay, subject, userId, ID } =
      req.body;

    if (!startTime || !endTime || (isAllDay == null) || !subject || !userId) {
      return res.status(400).json({
        success: false,
        message: "Missing information(s)" + startTime + " " + endTime + " "+ isAllDay + " "+ subject + " "+ userId,
        result: null,
      });
    }

    try {
      
      Calendar.deleteOne({coachId, userId,startTime, endTime, isAllDay, subject }, function(error) {
        if (error) return res.status(400).json({
          success: false,
          message: "error",
          result: error.message,
        })
        else {
  
          return res.json({
            success: true,
            message: "API OK",
            result: null,
          });
        }
    
      });
      
      
    } catch (error) {
      console.log(error);
      return res.status(510).json({
        success: false,
        message: "Internal server error",
        result: null,
      });
    }
  },

  // get all coachs, only done by Admins or Sales or HR
  getCalendarsOfCoach: async (req, res) => {
    if(!req.position || (req.position != "Administrator" && req.position != "HR" && req.position != "Coach")) {
      return res
      .status(401)
      .json({ success: false, message: 'Unauthorized',result: null  })
    }
    try {
      const coachId = req.userId
      const existingCoach = await Coach.findById(coachId, "-password").exec();
      if (!existingCoach) {
        return res.status(404).json({
          success: false,
          message: "Coach not found",
          result: null,
        });
      }
      const calendars = await Calendar.find({coachId})
      return res.json({ success: true, message: "API OK", result: calendars });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        result: null,
      });
    }
  },

  
  getCalendarsOfUser: async (req, res) => {
    if(!req.position || (req.position != "Administrator" && req.position != "HR" && req.position != "Coach")) {
      return res
      .status(401)
      .json({ success: false, message: 'Unauthorized',result: null  })
    }
    const userId = req.params.id;
    try {
      const user = await User.findById(userId, "-password").exec();
      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "User not found", result: null });
      }
      
      const calendars = await Calendar.find({userId})
      return res.json({ success: true, message: "API OK", result: calendars });

    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        result: null,
      });
    }
  },
};

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Calendars = new Schema({
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  startTimezone: {
    type: String,
  },
  endTimezone : {
    type: String,
  },
  
  isAllDay: {
    type: Boolean,
    required: true,
  },
  subject: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  coachId: {
    type: String,
    required: true
    // ref: 'Coachs'
  },
  description: {
    type: String
  },
  recurrenceRule: {
    type: String
  },
  recurrenceID : {
    type: String
  },
  recurrenceException: {
    type: String
  },
  createAt: {
    type: String,
    // default: Date.now
  },
  updateAt: {
    type: String,
    // default: Date.now
  }
});

module.exports = mongoose.model("Calendars", Calendars);

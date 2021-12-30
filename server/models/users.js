const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Users = new Schema({
  name: {
    type: String,
    // minLength: 2,
    maxLength: 127,
  },
  username: {
    type: String,
    required: true,
    // minLength: 6,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    // minLength: 6,
    // match: [/0\d{5,10}$/, 'Please fill a valid phone number']
  },
  password: {
    type: String,
    required: true,
  },
  birthDay: {
    type: Date,
  },
  gender: {
    type: String,
    // enum : ['Male', 'Female'],
    // default: 'Male'
  },
  coach: {
    type: String,
    // ref: 'Coachs'
  },
  referralCode: {
    type: String,
    required: true,
    unique: true,
  },
  assessment: {
    type: String,
    minLength: 3,
    maxLength: 255,
    default: "Trống",
  },
  height: {
    type: String,
    min: 10,
    max: 365,
  },
  weight: {
    type: String,
    min: 5,
    max: 365,
  },
  paymentDay: {
    type: String,
    // default: Date.now
  },
  createAt: {
    type: String,
    // default: Date.now
  },
  updateAt: {
    type: String,
    // default: Date.now
  },
  aim: {
    type: String,
  },
});

module.exports = mongoose.model("Users", Users);

// const Users = new Schema({
//     name: {
//         type: String,
//         minLength: 2,
//         maxLength:127
//     },
//     username: {
// 		type: String,
// 		required: true,
//         minLength: 6,
// 		unique: true
// 	},
//     phone:{
//         type: String,
//         required: true,
//         minLength: 6,
//         match: [/0\d{5,10}$/, 'Please fill a valid phone number']
//     },
// 	password: {
// 		type: String,
// 		required: true
// 	},
//     birthDay:{
//         type: Date
//     },
//     gender: {
// 		type: String,
//         enum : ['Male', 'Female'],
//         default: 'Male'
// 	},
//     coach: {
//         type:Schema.Types.ObjectId,
//         ref: 'Coachs'
//     },
//     referralCode:{
//         type: String,
// 		required: true,
// 		unique: true
//     },
//     assessment:{
//         type: String,
//         minLength: 3,
//         maxLength: 255
//     },
//     height:{
//         type: Number,
//         min: 10,
//         max:365
//     },
//     weight:{
//         type: Number,
//         min: 5,
//         max:365
//     },
//     paymentDay:{
//         type: Date,
//         default: Date.now
//     },
//     createAt: {
//         type: Date,
//         default: Date.now
//     },
//     updateAt: {
//         type: Date,
//         default: Date.now
//     },

// });

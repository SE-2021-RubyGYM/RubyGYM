const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Admins = new Schema({
    name: {
        type: String, 
        minLength: 2, 
        maxLength:127
    },
    username: {
		type: String,
		required: true,
        minLength: 6,
		unique: true
	},
    phone:{
        type: String,
        required: true,
        minLength: 6,
        match: [/0\d{5,10}$/, 'Please fill a valid phone number']
    },
	password: {
		type: String,
		required: true
	},
    birthDay:{
        type: Date
    },
    gender: {
		type: String,
        enum : ['Male', 'Female'],
        default: 'Male'
	},
    position: {
        type: String,
        enum : ['Administrator', 'HR', 'Sales manager'],
        default: 'Sales manager'
    },
    createAt: {
        type: Date, 
        default: Date.now
    },
    updateAt: {
        type: Date, 
        default: Date.now
    },
    
    
});

module.exports = mongoose.model('Admins', Admins);
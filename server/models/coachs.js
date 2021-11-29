const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Coachs = new Schema({
    name: {
        type: String, 
        minLength: 2, 
        maxLength:127
    },
    birthDay:{
        type: Date
    },
    username: {
		type: String,
		required: true,
        minLength: 6,
		unique: true
	},
    password: {
		type: String,
		required: true
	},
    phone:{
        type: String,
        required: true,
        minLength: 6,
        match: [/0\d{5,10}$/, 'Please fill a valid phone number']
    },
    gender: {
		type: String,
        enum : ['Male', 'Female'],
        default: 'Male'
	},
    bio: {
        type: String, 
        minLength: 16, 
        maxLength:511
    },
    image: {
        type: String, 
        default:"https://pic.onlinewebfonts.com/svg/img_264570.png"
    },
    major: {
        type:String,
        enum: ['LesMills', 'Yoga', 'Dance', 'Huấn luyện cá nhân', 'Kickfit/MMA', 'Group Fitness']
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

module.exports = mongoose.model('Coachs', Coachs);
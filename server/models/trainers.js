const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Trainers = new Schema({
    name: {
        type: String, 
        minLength: 2, 
        maxLength:127
    },
    age: {
        type: Number, 
        min: 18, 
        max:65
    },
    gender: Boolean,
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

module.exports = mongoose.model('Trainers', Trainers);
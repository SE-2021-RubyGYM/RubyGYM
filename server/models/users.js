const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Users = new Schema({
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
	password: {
		type: String,
		required: true
	},
    age: {
        type: Number, 
        min: 18, 
        max:65
    },
    gender: Boolean,
    trainer: {
        type:Schema.Types.ObjectId,
        ref: 'Trainers'
    },
    paymentDay:{
        type: Date, 
        default: Date.now
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

module.exports = mongoose.model('Users', Users);
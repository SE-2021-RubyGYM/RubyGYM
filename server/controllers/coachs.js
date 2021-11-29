const Coach = require('../models/coachs')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')

module.exports = {
    verifyCoach: async (req, res, next) => {
        try {
            const coach = await Coach.findById(req.userId).select('-password')
            if (!coach)
                return res.status(401).json({ success: false, message: 'Unauthorized',result: null  })
            req.position = "Coach"
            next()
        } catch (error) {
            console.log(error)
            return res.status(500).json({ success: false, message: 'Internal server error',result: null })
        }
    },
}
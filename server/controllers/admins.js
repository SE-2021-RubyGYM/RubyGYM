const Admin = require('../models/admins')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')

module.exports = {

    // verify admin
    verifyAdmin: async (req, res, next) => {
        try {
            const admin = await Admin.findById(req.userId).select('-password')
            if (!admin)
                return res.status(401).json({ success: false, message: 'Unauthorized',result: null  })
            req.position = admin.position
            next()
        } catch (error) {
            console.log(error)
            return res.status(500).json({ success: false, message: 'Internal server error',result: null })
        }
    },

    // login admin
    loginAdmin:async (req, res) => {
        const { username, password } = req.body
    
        // Simple validation
        if (!username || !password)
            return res
                .status(400)
                .json({ success: false, message: 'Missing username and/or password',result: null })
    
        try {
            // Check for existing user
            const admin = await Admin.findOne({ username })
            if (!admin)
                return res
                    .status(400)
                    .json({ success: false, message: 'Incorrect username or password',result: null })
    
            // Username found
            const passwordValid = await argon2.verify(admin.password, password)
            if (!passwordValid)
                return res
                    .status(400)
                    .json({ success: false, message: 'Incorrect username or password',result: null })
    
            // All good
            // Return token
            const accessToken = jwt.sign(
                { userId: admin._id },
                process.env.ACCESS_TOKEN_SECRET
            )
    
            res.json({
                success: true,
                message: 'API OK',
                result: accessToken
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ success: false, message: 'Internal server error',result: null })
        }
    },

    verifyAdminMe: async (req, res) => {
        // if (!req.position || req.position != "Coach") {
        //   return res
        //     .status(401)
        //     .json({ success: false, message: "Unauthorized", result: null });
        // }
        try {
          const admin = await Admin.findById(req.userId).select("-password");
          if (!admin)
            return res
              .status(401)
              .json({ success: false, message: "Unauthorized", result: null });
          return res.status(200).json({
            success: true,
            message: "API OK",
            result: admin,
          });
          
        } catch (error) {
          console.log(error);
          return res.status(500).json({
            success: false,
            message: "Internal server error",
            result: null,
          });
        }
      },
}
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')

const User = require('../models/users')

module.exports = {
    verify: async (req, res) => {
        try {
            const user = await User.findById(req.userId).select('-password')
            if (!user)
                return res.status(400).json({ success: false, message: 'User not found' })
            res.json({ success: true, user })
        } catch (error) {
            console.log(error)
            res.status(500).json({ success: false, message: 'Internal server error' })
        }
    },
    createUser: async(req,res)=> {
        const {username, password, name, gender, age,paymentDay} = req.body
    
        if (!username || !password || !name){
            return res
                .status(400)
                .json({success:false,message:'Missing information(s)'})
        }
    
        try{
            // Check for existing user
            const user = await User.findOne({username})
    
            if(user){
                return res
                .status(400)
                .json({success:false,message:'Username is already exist'})  
            }

        // All good
        const hashedPassword = await argon2.hash(password)
        const newUser = new User({username, password: hashedPassword,name,gender, age,paymentDay})
        await newUser.save()

        res.json({
			success: true,
			message: 'User created successfully'
		})
        }catch(error){
            console.log(error)
            res.status(500).json({ success: false, message: 'Internal server error' })
        }
        
    },
    login:async (req, res) => {
        const { username, password } = req.body
    
        // Simple validation
        if (!username || !password)
            return res
                .status(400)
                .json({ success: false, message: 'Missing username and/or password' })
    
        try {
            // Check for existing user
            const user = await User.findOne({ username })
            if (!user)
                return res
                    .status(400)
                    .json({ success: false, message: 'Incorrect username or password' })
    
            // Username found
            const passwordValid = await argon2.verify(user.password, password)
            if (!passwordValid)
                return res
                    .status(400)
                    .json({ success: false, message: 'Incorrect username or password' })
    
            // All good
            // Return token
            const accessToken = jwt.sign(
                { userId: user._id },
                process.env.ACCESS_TOKEN_SECRET
            )
    
            res.json({
                success: true,
                message: 'User logged in successfully',
                accessToken
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ success: false, message: 'Internal server error' })
        }
    }
}
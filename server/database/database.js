const mongoose = require('mongoose')
require('dotenv').config()


const connectDB = async () => {
    try {
		await mongoose.connect(
			// `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ruby-gym.5wubg.mongodb.net/ruby-gym?retryWrites=true&w=majority`,
			// {
			// 	useNewUrlParser: true,
			// 	useUnifiedTopology: true
			// }
			"mongodb://localhost:27017/rubyGym"
		)

		console.log('MongoDB connected')
	} catch (error) {
		console.log(error.message)
		process.exit(1)
	}
}
module.exports = {connectDB}
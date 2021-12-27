const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const advSchema = new Schema({
  // _id: { type: Number },
  creator: {
    type: String,
    // required: [true, "Thiếu thông tin người tạo quảng cáo"],
  },
  title: { type: String },
  view: { type: Number, default: 0 },
  time: { type: String },
  picture: { type: String },
  content: { 
    type: String, 
    // required: [true, "Thiếu nội dung quảng cáo"] 
  },
});
module.exports = mongoose.model("advertises", advSchema);

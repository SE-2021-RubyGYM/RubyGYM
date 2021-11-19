const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const advSchema = new Schema({
  creator: {
    type: String,
    required: [true, "Thiếu thông tin người tạo quảng cáo"],
  },
  picture: {
    type: String,
  },
  content: {
    type: String,
    required: [true, "Thiếu nội dung quảng cáo"],
  },
});

module.exports = mongoose.model("advertises", advSchema);

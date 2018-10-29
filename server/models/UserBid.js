const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userBidSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  datePosted: { type: Date, default: Date.now},
  dateRequested: { type: Date, default: Date.now},
  address:{type: String, required: true},
  UserID:{type: String, required: true}
});

const UserBid = mongoose.model("UserBid", userBidSchema);

module.exports = UserBid;

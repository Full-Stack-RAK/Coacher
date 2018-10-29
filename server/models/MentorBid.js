const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mentorBidSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  dateBid: { type: Date, default: Date.now},
  accepted: {type: Boolean, default: false},
  user_ID: 
});

const MentorBid = mongoose.model("MentorBid", mentorBidSchema);

module.exports = MentorBid;

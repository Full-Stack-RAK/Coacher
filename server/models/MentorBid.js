const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mentorBidSchema = new Schema({
  userID: {type: String, required: true },
  mentorID: {type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  dateBid: { type: Date, default: Date.now},
  userAccepted: {type: Boolean, default: false}
});

const MentorBid = mongoose.model("MentorBid", mentorBidSchema);

module.exports = MentorBid;

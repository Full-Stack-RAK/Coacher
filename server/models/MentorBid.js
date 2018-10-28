const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mentorSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  dateBid: { type: Date, default: Date.now},
  accepted: {type: Boolean, default: false},
});

const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;

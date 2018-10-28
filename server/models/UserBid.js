const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mentorSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  datePosted: { type: Date, default: Date.now},
  dateRequested: { type: Date, required: true},
  address:{type: String, required: true}
});

const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;

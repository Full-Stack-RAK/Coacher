const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mentorSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;

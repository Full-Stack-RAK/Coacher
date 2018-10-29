const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/coacherDB"
);

const userBidSeed = [
  {
    name: "Kenny",
    email: "kenster@gmail.com",
    datePosted: new Date(Date.now()),
    bidTitle: "Soccer",
    dateRequested: new Date(Date.now()),
    address: "Park",
    UserID: "5bd754800a23b156885a0452"
  }
];

db.UserBid
  .remove({})
  .then(() => db.UserBid.collection.insertMany(userBidSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

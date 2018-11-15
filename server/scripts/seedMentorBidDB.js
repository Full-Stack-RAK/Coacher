const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/coacherDB"
);

const mentorBidSeed = [
    {
        name: "Viet",
        email: "MadLad@gmail.com",
        userID: "5bd754800a23b156885a0452",
        mentorID: "5bd753e25b1708588002cfd1",
        userAccepted: false
    },
    {
        name: "Randy",
        email: "RandalTheVandal@gmail.com",
        userID: "5bd754800a23b156885a0452",
        mentorID: "5bd753e25b1708588002cfd0",
        userAccepted: false
    }
];

db.MentorBid
    .remove({})
    .then(() => db.MentorBid.collection.insertMany(mentorBidSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
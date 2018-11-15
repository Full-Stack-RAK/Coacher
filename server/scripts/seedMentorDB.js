const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/coacherDB"
);

const mentorSeed = [
    {
        name: "Randy",
        email: "RandalTheVandal@gmail.com",
        date: new Date(Date.now()),
        password: "12345"
    },
    {
        name: "Viet",
        email: "MadLad@gmail.com",
        date: new Date(Date.now()),
        password: "abcde"
    }
];

db.Mentor
    .remove({})
    .then(() => db.Mentor.collection.insertMany(mentorSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
const router = require("express").Router();
const userRoutes = require("./user");
const mentorRoutes = require("./mentor");
const userBidRoutes = require("./userBid");
const mentorBidRoutes = require("./mentorBid");


router.use("/users", userRoutes);
router.use("/mentors", mentorRoutes);
router.use("/userBid", userBidRoutes);
router.use("/mentorBid", mentorBidRoutes);

module.exports = router;

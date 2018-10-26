const router = require("express").Router();
const userRoutes = require("./user");
const mentorRoutes = require("./mentor");


router.use("/users", userRoutes);
router.use("/mentors", mentorRoutes);

module.exports = router;

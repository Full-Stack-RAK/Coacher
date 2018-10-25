const router = require("express").Router();
const userRoutes = require("./user");
const mentorRoutes = require("./mentor");


router.use("/user", userRoutes);
router.use("/mentor", mentorRoutes);

module.exports = router;

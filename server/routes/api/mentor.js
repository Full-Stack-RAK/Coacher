const router = require("express").Router();
const mentorController = require("../../controllers/mentorController");


router.route("/")
  .get(mentorController.findAll)
  .post(mentorController.create);


router
  .route("/:id")
  .get(mentorController.findById)
  .put(mentorController.update)
  .delete(mentorController.remove);

module.exports = router;

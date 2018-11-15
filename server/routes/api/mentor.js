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

router
  .route("/name/:name")
  .get(mentorController.findByName)

module.exports = router;

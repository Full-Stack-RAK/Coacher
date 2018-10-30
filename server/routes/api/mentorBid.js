const router = require("express").Router();
const mentorBidController = require("../../controllers/mentorBidController");


router.route("/")
  .get(mentorBidController.findAll)
  .post(mentorBidController.create);


router
  .route("/:id")
  .get(mentorBidController.findById)
  .put(mentorBidController.update)
  .delete(mentorBidController.remove);

module.exports = router;

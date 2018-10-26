const router = require("express").Router();
const userBidController = require("../../controllers/userBidController");


router.route("/")
  .get(userBidController.findAll)
  .post(userBidController.create);


router
  .route("/:id")
  .get(userBidController.findById)
  .put(userBidController.update)
  .delete(userBidController.remove);

module.exports = router;

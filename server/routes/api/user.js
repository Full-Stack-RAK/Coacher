const router = require("express").Router();
const userController = require("../../controllers/userController");


router.route("/")
  .get(userController.findAll)
  .post(userController.create);


router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

router
  .route("/:name")
  .get(userController.findByName)


module.exports = router;

const Router = require("express");
const router = new Router();
const { userController } = require("../controller");

router.get("/user/:id", userController.getUser);
router.get("/users", userController.getUsers);
router.post("/user", userController.createUser);
router.put("/user", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

module.exports = router;

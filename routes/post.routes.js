const { Router } = require("express");
const { postController } = require("../controller");
const router = Router();

router.get("/post", postController.getPostByUser);
router.post("/post", postController.createPost);

module.exports = router;

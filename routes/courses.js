const express = require("express");
const router = express.Router();

const courseHandler = require("./handler/courses");
const verifyToken = require("../middleware/verifyToken");
const can = require("../middleware/permission");

router.get("/:id", courseHandler.get);
router.get("/", courseHandler.getAll);

router.post("/", verifyToken, can("admin"), courseHandler.create);
router.put("/:id", verifyToken, can("admin"), courseHandler.update);
router.delete("/:id", verifyToken, can("admin"), courseHandler.destroy);

module.exports = router;

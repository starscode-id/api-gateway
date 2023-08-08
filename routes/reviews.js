const express = require("express");
const router = express.Router();
const reviewsHandlers = require("./handler/reviews");

router.post("/", reviewsHandlers.create);
router.put("/:id", reviewsHandlers.update);
router.delete("/:id", reviewsHandlers.destroy);

module.exports = router;

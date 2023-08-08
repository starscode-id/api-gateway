const express = require("express");
const router = express.Router();
const mentorsHandlers = require("./handler/mentors");

router.get("/", mentorsHandlers.getAll);
router.get("/:id", mentorsHandlers.get);
router.post("/", mentorsHandlers.create);
router.put("/:id", mentorsHandlers.update);
router.delete("/:id", mentorsHandlers.destroy);
module.exports = router;

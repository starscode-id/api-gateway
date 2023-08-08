const express = require("express");
const router = express.Router();
const myCoursesHandlers = require("./handler/myCourses");

router.post("/", myCoursesHandlers.create);
router.get("/", myCoursesHandlers.get);
module.exports = router;

require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const courseRouter = require("./routes/courses");
const mediaRouter = require("./routes/media");
const ordersPaymentRouter = require("./routes/ordersPayment");
const refreshTokenRouter = require("./routes/refreshTokens");
const mentorsRouter = require("./routes/mentors");
const chaptersRouter = require("./routes/chapters");
const lessonsRouter = require("./routes/lessons");
const imageCoursesRouter = require("./routes/image-courses");
const myCoursesRouter = require("./routes/mycourses");
const reviewsRouter = require("./routes/reviews");
const webhookRouter = require("./routes/webhook");

const verifyToken = require("./middleware/verifyToken");
const can = require("./middleware/permission");
const app = express();

app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/course", courseRouter);

app.use("/chapters", verifyToken, can("admin"), chaptersRouter);
app.use("/lessons", verifyToken, can("admin"), lessonsRouter);
app.use("/media", verifyToken, can("admin", "student"), mediaRouter);
app.use("/order", verifyToken, can("admin", "student"), ordersPaymentRouter);
app.use("/refresh-tokens", refreshTokenRouter);
app.use("/mentors", verifyToken, can("admin"), mentorsRouter);
app.use("/image-courses", verifyToken, can("admin"), imageCoursesRouter);
app.use("/my-courses", verifyToken, can("admin", "student"), myCoursesRouter);
app.use("/reviews", verifyToken, can("admin", "student"), reviewsRouter);
app.use("/webhook", webhookRouter);

module.exports = app;

const router = require("express").Router();
const authRoutes = require("./auth");
const spotRoutes = require("./spot");
//const profileRoutes = require("./profile");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", authRoutes);
// router.use("/profile", profileRoutes);
router.use("/spots", spotRoutes);

module.exports = router;

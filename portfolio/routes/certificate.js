var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("certificate", { title: "Certificates" });
});
module.exports = router;

var express = require("express");
var router = express.Router();
const path = require("path");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mahmood Ahmed" });
});
router.get("/downloadResume", (req, res) => {
  const pdfFilePath = path.join(__dirname, "../public/Mahmood Ahmed.pdf");
  res.download(pdfFilePath, "Mahmood Ahmed.pdf");
});
module.exports = router;

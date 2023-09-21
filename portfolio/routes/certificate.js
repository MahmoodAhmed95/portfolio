var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("certificate", { title: "Certificates" });
});
router.get("/GoogleSysAdmin", function (req, res, next) {
  res.render("GoogleSysAdmin");
});
router.get("/GoogleTechnical", function (req, res, next) {
  res.render("GoogleTechnical");
});
router.get("/CEH", function (req, res, next) {
  res.render("CEH");
});
router.get("/WebDevelopment", function (req, res, next) {
  res.render("WebDevelopment");
});
router.get("/JavaIntermediate", function (req, res, next) {
  res.render("JavaIntermediate");
});
router.get("/IntroductionToSQL", function (req, res, next) {
  res.render("IntroductionToSQL");
});
router.get("/IntroductionToJavaScript", function (req, res, next) {
  res.render("IntroductionToJavaScript");
});
router.get("/IntroductionToCss", function (req, res, next) {
  res.render("IntroductionToCss");
});
router.get("/IntroductionToHtml", function (req, res, next) {
  res.render("IntroductionToHtml");
});
router.get("/transport", function (req, res, next) {
  res.render("transport");
});
router.get("/Injaz", function (req, res, next) {
  res.render("Injaz");
});
router.get("/IntroductionToPython", function (req, res, next) {
  res.render("IntroductionToPython");
});
router.get("/IntroductionToJava", function (req, res, next) {
  res.render("IntroductionToJava");
});
router.get("/EmployabilitySkills", function (req, res, next) {
  res.render("EmployabilitySkills");
});
module.exports = router;

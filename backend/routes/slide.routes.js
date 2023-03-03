const express = require("express");
const router = express.Router();

const slideController = require("../controllers/slide.controller");

router.post("/create", slideController.addSlide);
router.get("/", slideController.getSlides);

module.exports = router;

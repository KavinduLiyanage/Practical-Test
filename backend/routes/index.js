const { Router: expressRouter } = require("express");
const router = expressRouter();

// slide routes
const slideRouter = require("./slide.routes");
router.use("/carousel", slideRouter);

module.exports = router;

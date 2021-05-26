const router = require("express").Router();
const views = require("./views/index");

router.use("/",views);

module.exports = router;
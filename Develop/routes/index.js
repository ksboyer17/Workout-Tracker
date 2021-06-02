const router = require("express").Router();
const views = require("./views/index");
const api = require("./api");


router.use("/",views);
router.use("/",api);

module.exports = router;
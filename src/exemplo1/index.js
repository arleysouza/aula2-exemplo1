const router = require("express").Router();
const Matematica = require("./a");
const {somar, subtrair} = new Matematica();
const pow = require("./b");

router.use("/sum", somar);
router.use("/diff", subtrair);
router.use("/pow", pow);

module.exports = router;
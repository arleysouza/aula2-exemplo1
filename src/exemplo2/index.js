const router = require("express").Router();
const {dia, mes} = require("./c");

router.use("/dia", (_,res) => res.send(dia+"") );
router.use("/mes", (_,res) => res.send(mes) );

module.exports = router;
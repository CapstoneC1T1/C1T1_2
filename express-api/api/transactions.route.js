const express = require("./../node_modules/express");
//const transactionCtrl = require("./transactionsCtrl.controller.js");

const router = express.Router();

router.route("/").get((req, res)=> res.send("hello"));

//export default router
module.exports = router;

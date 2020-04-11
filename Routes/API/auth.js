const express = require("express");
const router = express.Router();

//@route    GET api/Auth
//@desc     User Route
//@access   Public
router.get("/", (req, res) => res.send("Auth Route"));

module.exports = router;

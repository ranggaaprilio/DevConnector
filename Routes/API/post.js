const express = require("express");
const router = express.Router();

//@route    GET api/Post
//@desc     User Route
//@access   Public
router.get("/", (req, res) => res.send("Post Route"));

module.exports = router;

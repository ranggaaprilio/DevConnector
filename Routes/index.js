const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
   return res.status(200).send("server is up and running")
  });

module.exports = router;
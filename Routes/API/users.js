const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

//Model
const User = require("../../model/User");

//@route    POST api/users
//@desc     Register USer
//@access   Public
router.post(
  "/",
  [
    check("name", "Name Is Required").not().isEmpty(),
    check("email", "Please Include a valid Email").isEmail(),
    check(
      "password",
      "Please Enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res
        .status(400)
        .json({ status: false, timestamp: Date.now(), error: err.array() });
    }

    const { name, email, password } = req.body;

    try {
      //see if user exist
      console.log("Users", User);
      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ errors: [{ message: "User Already exists" }] });
      }

      //get user Gravatar
      const avatar = gravatar.url(email, {
        s: "200", //size
        r: "pg", //reading
        d: "mm", //default image
      });

      //inisialisasi to Model Mongo
      user = new User({
        name,
        email,
        avatar,
        password,
      });
      //encrypt password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);
      await user.save();

      //return jsonwebtoken

      res.send("User Registered");
    } catch (error) {
      console.log(error.message);
      res.status(500).send("server Error");
    }
  }
);

module.exports = router;

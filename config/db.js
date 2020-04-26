const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDB Is Connected");
  } catch (error) {
    console.log("error Connection", error.message);
    //if Error Connect
    process.exit(1);
  }
};

module.exports = connectDB;

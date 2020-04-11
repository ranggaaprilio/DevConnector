const express = require("express");
const app = express();
const connectDB = require("./config/db");

//Connect DB
connectDB();

// init middleware Body Pharser
app.use(express.json({ extended: false }));

// root Route
app.get("/", (req, res) => res.send("Server is Already Running"));

// define route
app.use("/api/users", require("./Routes/API/users"));
app.use("/api/auth", require("./Routes/API/auth"));
app.use("/api/post", require("./Routes/API/post"));
app.use("/api/profile", require("./Routes/API/profile"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT} `);
});

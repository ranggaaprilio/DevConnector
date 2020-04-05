const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Server is Already Running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT} `);
});

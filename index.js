const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./.env" });

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "all operating systems" });
});


app.listen(PORT, console.log(`servidor corriendo en el Puerto : ${PORT}`));

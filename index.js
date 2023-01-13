const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./.env" });

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/joyas", (req, res) => {
  //devuelve TODAS las joyas
  try {
    
  } catch (error) {
    
  }
  res.json({ message: "all operating systems" });
});

app.get("/joyas/filtro", async (req, res) => {
  //devuelve las joyas filtradas por precio min max, categoria y metal
  try {
    
  } catch (error) {
    
  }
  res.json()
})

app.listen(PORT, console.log(`servidor corriendo en el Puerto : ${PORT}`));

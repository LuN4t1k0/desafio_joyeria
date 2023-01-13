const express = require("express");
const app = express();
const cors = require("cors");
const { getAllJewels } = require("./controller/inventory");
const { formatHATEOAS } = require('./helpers/hateoas')

require("dotenv").config({ path: "./.env" });

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

/* Una ruta que devuelve todas las joyas de la base de datos. */
app.get("/joyas", async (req, res) => {
  try {
    const queryStrings = req.query;

    const jewels = await getAllJewels(queryStrings);
    
    const HATEOAS = await formatHATEOAS(jewels, queryStrings)
    res.status(200).json(HATEOAS);
  } catch (error) {}
});

app.get("/joyas/filtro", async (req, res) => {
  //devuelve las joyas filtradas por precio min max, categoria y metal
  try {
  } catch (error) {}
  res.json();
});

app.get("*", (req, res) => {
  res
    .status(404)
    .json({ message: "the path you are trying to access does not exist" });
});

app.listen(PORT, console.log(`servidor corriendo en el Puerto : ${PORT}`));

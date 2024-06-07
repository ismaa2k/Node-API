const express = require("express");
require("dotenv").config();
const app = express();
const port = 3001;
const connectToDatabase = require("./bdd.js");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const annonceRoutes = require("./routes/annonceRoutes");

let db;

async function startServer() {
  try {
    db = await connectToDatabase();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use((req, res, next) => {
      req.db = db;
      next();
    });

    app.use("/api/users", userRoutes);
    app.use("/api/annonces", annonceRoutes);
    app.use("/savoirplus/:id", annonceRoutes);

    app.use("/", require("./routes/htmlroute"));

    app.listen(port, () => {
      console.log(`CoDrive à l'écoute sur le port ${port}`);
    });
  } catch (error) {
    console.error("Impossible de démarrer le serveur:", error);
  }
}

app.get("/api/annonces", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const annonces = await db.collection("annonces").find().toArray();
    res.json(annonces);
  } catch (error) {
    console.error("Erreur lors de la récupération des annonces:", error);
    res.status(500).json({ message: "Erreur interne du serveur" });
  }
});

const { ObjectId } = require("mongodb");

app.get("/savoirplus/:id", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const id = req.params.id;

    if (!ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ message: "L'identifiant fourni n'est pas valide." });
    }

    const annonces = await db
      .collection("annonces")
      .findOne({ _id: new ObjectId(id) });
    if (annonces) {
      const htmlString = `
        <div>
          <h2>${annonces.villed}</h2>
          <p>${annonces.villea}</p>
          <p>Prix: ${annonces.prix} €</p>
        </div>

    <script src='./script.js'>

    </script>

      `;
      res.send(htmlString);
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des annonces:", error);
    res.status(500).json({ message: "Erreur interne du serveur" });
  }
});

startServer();

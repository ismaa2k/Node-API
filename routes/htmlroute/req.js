const express = require("express");
const router = express.Router();

router.get("/homepage", async (req, res) => {
  const db = req.db;
  try {
    const data = await db.collection("somecollection").find({}).toArray();
    res.json(data);
  } catch (error) {
    res.status(500).send("Erreur lors de la récupération des données.");
  }
});

router.get("/register", async (req, res) => {
  const db = req.db;
  try {
    const data = await db.collection("somecollection").find({}).toArray();
    res.json(data);
  } catch (error) {
    res.status(500).send("Erreur lors de la récupération des données.");
  }
});

router.get("/login", async (req, res) => {
  const db = req.db;
  try {
    const data = await db.collection("somecollection").find({}).toArray();
    res.json(data);
  } catch (error) {
    res.status(500).send("Erreur lors de la récupération des données.");
  }
});

router.get("/recompenses", async (req, res) => {
  const db = req.db;
  try {
    const data = await db.collection("somecollection").find({}).toArray();
    res.json(data);
  } catch (error) {
    res.status(500).send("Erreur lors de la récupération des données.");
  }
});

const { ObjectId } = require("mongodb");
router.get("/savoirplus/:id", async (req, res) => {
  const db = req.db;
  const id = req.params.id;

  try {
    const data = await db
      .collection("annonces")
      .findOne({ _id: new ObjectId(id) });
    if (data) {
      res.json(data);
    } else {
      res.status(404).send("Annonce non trouvée.");
    }
  } catch (error) {
    res.status(500).send("Erreur lors de la récupération des données.");
  }
});

router.get("/chatbot", async (req, res) => {
  const db = req.db;
  try {
    const data = await db.collection("somecollection").find({}).toArray();
    res.json(data);
  } catch (error) {
    res.status(500).send("Erreur lors de la récupération des données.");
  }
});

router.get("/annonce", async (req, res) => {
  const db = req.db;
  try {
    const data = await db.collection("somecollection").find({}).toArray();
    res.json(data);
  } catch (error) {
    res.status(500).send("Erreur lors de la récupération des données.");
  }
});

module.exports = router;

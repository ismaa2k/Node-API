const express = require("express");
const router = express.Router();
const connectToDatabase = require("../bdd.js");
const Annonce = require("../models/annonce");

router.post("/register", async (req, res) => {
  const { villed, villea, depart, prix, place } = req.body;

  try {
    const db = await connectToDatabase();
    const annonceCollection = db.collection("annonces");
    const newAnnonce = {
      villed,
      villea,
      depart,
      prix,
      place,
    };

    await annonceCollection.insertOne(newAnnonce);
    res.status(201).json(newAnnonce);
  } catch (err) {
    console.error("Erreur lors de la création de l'annonce :", err);
    res
      .status(500)
      .json({ message: "Erreur lors de la création de l'annonce" });
  }
});

module.exports = router;

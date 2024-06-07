const express = require("express");
const router = express.Router();
const connectToDatabase = require("../bdd.js");
const User = require("../models/user");

router.post("/register", async (req, res) => {
  const { nom, prenom, age, email, password } = req.body;

  try {
    const db = await connectToDatabase();
    const usersCollection = db.collection("utilisateurs");
    const newUser = {
      nom,
      prenom,
      age,
      email,
      password,
    };

    await usersCollection.insertOne(newUser);
    res.status(201).json(newUser);
  } catch (err) {
    console.error("Erreur lors de l'enregistrement de l'utilisateur :", err);
    res
      .status(500)
      .json({ message: "Erreur lors de l'ajout de l'utilisateur" });
  }
});

module.exports = router;

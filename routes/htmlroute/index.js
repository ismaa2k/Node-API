const path = require("path");
const router = require("express").Router();

// HomePage
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/HomePage/index.html"));
});

// HomePage
router.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/register/index.html"));
});

// Login
router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/login/index.html"));
});

//Recompenses
router.get("/recompenses", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/Recompenses/index.html"));
});

//savoirplus
router.get("/savoirplus/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/EnSavoirPlus/index.html"));
});

//ChatBot
router.get("/chatbot", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/ChatBot/index.html"));
});

//Création annonce
router.get("/annonce", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/Annonce/index.html"));
});




// // 404 Not Found
// router.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../../frontend/HomePage/index.html"));
// });

module.exports = router;

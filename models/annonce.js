const mongoose = require("mongoose");

const annonceSchema = new mongoose.Schema({
  villed: {
    type: String,
    required: true,
  },
  villea: {
    type: String,
    required: true,
  },
  depart: {
    type: String,
    required: true,
  },
  prix: {
    type: Number,
    required: true,
  },
  place: {
    type: Number,
    required: true,
  },
});

const Annonce = mongoose.model("Annonce", annonceSchema);

module.exports = Annonce;

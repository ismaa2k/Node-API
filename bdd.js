const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://admin:codrive@clustercodrive.vik2ibq.mongodb.net/";
const dbName = "CoDrive";
let client = new MongoClient(url);

async function connectToDatabase() {
  try {
    await client.connect();
    const db = client.db(dbName);
    console.log("Connexion à la base de données établie.");
    return db;
  } catch (error) {
    console.error("Erreur lors de la connexion à la base de données:", error);
    return null;
  }
}

module.exports = connectToDatabase;

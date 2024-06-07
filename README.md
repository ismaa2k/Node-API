# 🚗 CoDrive 🚗

**CoDrive** est une application web de covoiturage qui permet aux utilisateurs de s'inscrire, de créer des annonces de covoiturage et de consulter les offres disponibles. Cette application est développée avec Node.js, Express et MongoDB.

## Fonctionnalités

- **Inscription d'un Utilisateur** : Permet aux nouveaux utilisateurs de s'inscrire avec leur nom, âge, email et mot de passe.
- **Créer une Annonce** : Les utilisateurs peuvent créer des annonces de covoiturage en spécifiant les villes de départ et d'arrivée, la date de départ, le prix et les places disponibles.
- **Voir les Annonces** : Les utilisateurs peuvent consulter toutes les annonces de covoiturage disponibles.

## Installation

1. **Cloner le Dépôt** :

   ```bash
   git clone <url-du-dépôt>
   cd project_node-s-api
   ```

2. **Installer les Dépendances** :

   ```bash
   npm install
   ```

3. **Configurer les Variables d'Environnement** :
   
   Créez un fichier `.env` dans le répertoire racine et ajoutez les variables d'environnement nécessaires :

   ```plaintext
   MONGODB_URI=<votre_chaîne_de_connexion_mongodb>
   PORT=3001
   ```

4. **Démarrer l'Application** :

   ```bash
   npm run dev
   ```

5. **Ouvrir dans le Navigateur** :
   Ouvrez votre navigateur et accédez à `http://localhost:3001` pour voir l'application en action.

## Utilisation

### Inscription d'un Utilisateur

1. Envoyez une requête `POST` à `/api/users/register` avec les champs suivants :
   - `nom`: Nom de l'utilisateur
   - `prenom`: Prénom de l'utilisateur
   - `age`: Âge de l'utilisateur
   - `email`: Email de l'utilisateur
   - `password`: Mot de passe de l'utilisateur

2. Exemple de corps JSON pour la requête :

   ```json
   {
     "nom": "Doe",
     "prenom": "John",
     "age": 30,
     "email": "john.doe@example.com",
     "password": "securepassword123"
   }
   ```

### Créer une Annonce

1. Envoyez une requête `POST` à `/api/annonces/register` avec les champs suivants :
   - `villed`: Ville de départ
   - `villea`: Ville d'arrivée
   - `depart`: Date de départ (format: AAAA-MM-JJ)
   - `prix`: Prix par place
   - `place`: Nombre de places disponibles

2. Exemple de corps JSON pour la requête :

   ```json
   {
     "villed": "Paris",
     "villea": "Lyon",
     "depart": "2023-12-25",
     "prix": 50,
     "place": 3
   }
   ```

### Voir les Annonces

1. Envoyez une requête `GET` à `/api/annonces` pour récupérer toutes les annonces de covoiturage disponibles.

## Structure du Projet

```plaintext
Node-API/
│
├── node_modules/
│
│
├── frontend/
│   ├── Annonce/
│   └── index.html
│   ├── ChatBot/
│   └── index.html
│   ├── EnSavoirPls/
│   └── index.html
│   ├── HomePage/
│   └── index.html
│   └── style.css
│   ├── Login/
│   └── index.html
│   └── style.css
│   ├── Recompenses/
│   └── style.css
│   ├── Register/
│   └── index.html
│   └── style.css
│
├── routes/
│   ├── htmlroute/
│   └── index.js
│   └── req.js
│   ├── annonceRoutes.js
│   ├── userRoutes.js
│
├── models/
│   └── annonce.js
│   └── user.js
│
├── script/
│   └── script.sh
│
│
├── main.js
├── bdd.js
├── script.js
├── .env
├── package-lock.json
├── package.json
└── README.md
```

## Technologies Utilisées

- **Node.js** : Runtime JavaScript.
- **Express** : Framework web pour Node.js.
- **MongoDB** : Base de données NoSQL.
- **Mongoose** : Outil de modélisation d'objets MongoDB.
- **Nodemon** : Utilitaire qui surveille les modifications du code et redémarre automatiquement le serveur.

---

Voilà **CoDrive** ! Si vous avez des questions ou des suggestions, n'hésitez pas à les partager. 🚗✨

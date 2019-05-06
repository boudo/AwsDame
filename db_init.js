const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// URL de connexion
// Standard URI format: mongodb://[dbuser:dbpassword@]host:port/dbname, details set in .env
var url = 'mongodb://'+process.env.USER+':'+process.env.PASS+'@'+process.env.HOST+':'+process.env.PORT;

// Nom de la Base de Donnée
const dbName = 'AwsDame';

// Creer un new MongoClient
const client = new MongoClient(url);

// Utilisation de la methode connect pour se connecter a la base de donnée
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  // TOUS LES INSERTION ET AUTRES (creation de table etc...)
  
  
  // Ne fermez la connexion que lorsque votre application se termine.
  client.close();
});
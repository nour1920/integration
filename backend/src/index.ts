import { MongoClient } from "mongodb"; 
const express = require('express');
const cors = require('cors');
const bodyParser= require('body-parser');

async function start() {
  try {
    const app = express();
    const mongo = await MongoClient.connect('mongodb://127.0.0.1:27017/jobhive');
    await mongo.connect();
    app.db = mongo.db();

    // Enable CORS
    app.use(cors());

    // Use body parser middleware
    app.use(bodyParser.json({ limit: '500kb' }));

    // Routes
    app.use('/CondidatProfil', require('./CondidatProfils/routes/CondidatProfil'));
    app.use('/CompanyProfil', require('./CompanyProfils/routes/CompanyProfil'));
    app.use('/jobOffres', require('./offres/job/routes/jobOffres'));

    // Start server
    app.listen(3002, () => {
      console.log('Server is running on port 3002');
    });
  } catch (error) {
    console.log(error);
  }
}

start();
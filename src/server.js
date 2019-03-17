const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const COMPANIES_DATA = path.join(__dirname, './data/companies.json');
const SERVICES_DATA = path.join(__dirname, './data/services.json');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/companies', (req, res) => {
  fs.readFile(COMPANIES_DATA, (err, data) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.json(JSON.parse(data));
  });
});

app.get('/api/services', (req, res) => {
  fs.readFile(SERVICES_DATA, (err, data) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.json(JSON.parse(data));
  });
});

app.listen(3000, () => console.log('App is listening on port 3000!'));

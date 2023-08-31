const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../html/about.html'));
});

app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, '../html/contact-me.html'));
});

app.use(function (req, res) {
  res.status(404).sendFile(path.join(__dirname, '../html/404.html'));
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

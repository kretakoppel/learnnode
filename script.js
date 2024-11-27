import express from 'express';
import nunjucks from 'nunjucks';
import fs from 'fs';
const app = express();
const port = 3000;

nunjucks.configure('views', {
  autoescape: true,
  express: app
});


app.get('/', (req, res) => {
  res.render('index.njk');
});

app.get('/about', (req, res) => {
  res.render('about.njk');
});

app.get('/form', (req, res) => {
  res.render('form.njk');
});

app.get('/answer', (req, res) => {
    res.render('answer.njk', req.query);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
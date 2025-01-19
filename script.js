import express from 'express';
import fs from 'fs';
import nunjucks from 'nunjucks';

const app = express();
const port = 3000

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

app.get('/square', (req, res) => {
    res.render('square.njk');
});

app.get('/squareanswer', (req, res) => {
    let a = req.query.a;
    let answer = {
        S: Math.pow(a, 2),
        a: a,
        V: Math.pow(a, 3),
        P: 4 * a,
    };
    res.render('squareanswer.njk', answer);
});

app.get('/circle', (req, res) => {
    res.render('circle.njk');
});

app.get('/circleanswer', (req, res) => {
    let a = req.query.a;
    let answer = {
        S: Math.pow(a, 2),
        a: a,
        V: Math.pow(a, 3),
        P: 4 * a,
    };
    res.render('circleanswer.njk', answer);
});

app.get('/pythagoras', (req, res) => {
    res.render('pythagoras.njk');
});

app.get('/pythagorasanswer', (req, res) => {
    let a = req.query.a;
    let answer = {
        S: Math.pow(a, 2),
        a: a,
        V: Math.pow(a, 3),
        P: 4 * a,
    };
    res.render('pythagorasanswer.njk', answer);
});

  app.listen(port, () => {
    console.log(`example app listening on port http://localhost:${port}`)
  });
  
import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(import.meta.dirname + '/views/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(import.meta.dirname + '/views/about.html');
});

app.get('/hello', (req, res) => {
    res.sendFile(import.meta.dirname + '/views/about.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
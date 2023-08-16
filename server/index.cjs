const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(path.join('', 'dist')));
app.get(`/*`, function (_, res) {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

const port = process.env.PORT || 80;
app.listen(port);
console.log("run on: http://localhost:" + port);

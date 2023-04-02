const express = require('express');

const app = express();
const port = 3000;
const fs = require('fs');
const template = require('./lib/template.js');

app.get('/', (req, res) => {
  fs.readdir('./data', (error, filelist) => {
    const title = 'Welcome';
    const description = 'Hello, Node.js';
    const list = template.list(filelist);
    const html = template.HTML(
      title,
      list,
      `<h2>${title}</h2>${description}`,
      '<a href="/create">create</a>',
    );
    res.send(html);
  });
});

app.get('/page', (req, res) => {
  res.send('/page');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require('express');

const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');
const sanitizeHtml = require('sanitize-html');
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

app.get('/page/:pageId', (req, res) => {
  fs.readdir('./data', (error, filelist) => {
    const filteredId = path.parse(req.params.pageId).base;
    fs.readFile(`data/${filteredId}`, 'utf8', (err, description) => {
      const title = req.params.pageId;
      const sanitizedTitle = sanitizeHtml(title);
      const sanitizedDescription = sanitizeHtml(description, {
        allowedTags: ['h1'],
      });
      const list = template.list(filelist);
      const html = template.HTML(
        sanitizedTitle,
        list,
        `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
        ` <a href="/create">create</a>
          <a href="/update?id=${sanitizedTitle}">update</a>
          <form action="delete_process" method="post">
            <input type="hidden" name="id" value="${sanitizedTitle}">
            <input type="submit" value="delete">
          </form>`,
      );
      res.send(html);
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

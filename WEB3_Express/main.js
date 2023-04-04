const express = require('express');

const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const bodyParser = require('body-parser');
const compression = require('compression');
const sanitizeHtml = require('sanitize-html');
const template = require('./lib/template.js');

app.use(express.static('src'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
// app.use(function(req, res, next) {
//   fs.readdir('./data', function(error, filelist){
//     req.list = filelist;
//     next();
//   });
// });
app.get('*', (req, res, next) => {
  fs.readdir('./data', (error, filelist) => {
    req.list = filelist;
    next();
  });
});

app.get('/', (req, res) => {
  const title = 'Welcome';
  const description = 'Hello, Node.js';
  const list = template.list(req.list);
  const html = template.HTML(
    title,
    list,
    `<h2>${title}</h2>${description}
    <img src="/images/coding.jpg" style="width:300px; display:block; margin-top:10px;">
    `,
    '<a href="/create">create</a>',
  );
  res.send(html);
});

app.get('/page/:pageId', (req, res, next) => {
  const filteredId = path.parse(req.params.pageId).base;
  fs.readFile(`data/${filteredId}`, 'utf8', (err, description) => {
    if (err) {
      next(err);
    } else {
      const title = req.params.pageId;
      const sanitizedTitle = sanitizeHtml(title);
      const sanitizedDescription = sanitizeHtml(description, {
        allowedTags: ['h1'],
      });
      const list = template.list(req.list);
      const html = template.HTML(
        sanitizedTitle,
        list,
        `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
        ` <a href="/create">create</a>
          <a href="/update/${sanitizedTitle}">update</a>
          <form action="/delete_process" method="post">
            <input type="hidden" name="id" value="${sanitizedTitle}">
            <input type="submit" value="delete">
          </form>`,
      );
      res.send(html);
    }
  });
});

app.get('/create', (req, res) => {
  const title = 'WEB - create';
  const list = template.list(req.list);
  const html = template.HTML(title, list, `
      <form action="/create_process" method="post">
        <p><input type="text" name="title" placeholder="title"></p>
        <p>
          <textarea name="description" placeholder="description"></textarea>
        </p>
        <p>
          <input type="submit">
        </p>
      </form>
    `, '');
  res.send(html);
});

app.post('/create_process', (req, res) => {
  const post = req.body;
  const { title } = post;
  const { description } = post;
  fs.writeFile(`data/${title}`, description, 'utf8', (err) => {
    res.writeHead(302, { Location: `/?id=${title}` });
    res.end();
  });
});

app.get('/update/:pageId', (req, res) => {
  const filteredId = path.parse(req.params.pageId).base;
  fs.readFile(`data/${filteredId}`, 'utf8', (err, description) => {
    const title = req.params.pageId;
    const list = template.list(req.list);
    const html = template.HTML(
      title,
      list,
      `
        <form action="/update_process" method="post">
          <input type="hidden" name="id" value="${title}">
          <p><input type="text" name="title" placeholder="title" value="${title}"></p>
          <p>
            <textarea name="description" placeholder="description">${description}</textarea>
          </p>
          <p>
            <input type="submit">
          </p>
        </form>
        `,
      `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`,
    );
    res.send(html);
  });
});

app.post('/update_process', (req, res) => {
  const post = req.body;
  const { id } = post;
  const { title } = post;
  const { description } = post;
  fs.rename(`data/${id}`, `data/${title}`, (error) => {
    fs.writeFile(`data/${title}`, description, 'utf8', (err) => {
      res.redirect(`/?id=${title}`);
    });
  });
});

app.post('/delete_process', (req, res) => {
  const post = req.body;
  const { id } = post;
  const filteredId = path.parse(id).base;
  fs.unlink(`data/${filteredId}`, (error) => {
    res.redirect('/');
  });
});

app.use((req, res) => {
  res.status(404).send('Sorry cant find that!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

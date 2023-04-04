const express = require('express');

const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');
const sanitizeHtml = require('sanitize-html');
const qs = require('querystring');
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
          <a href="/update/${sanitizedTitle}">update</a>
          <form action="/delete_process" method="post">
            <input type="hidden" name="id" value="${sanitizedTitle}">
            <input type="submit" value="delete">
          </form>`,
      );
      res.send(html);
    });
  });
});

app.get('/create', (req, res) => {
  fs.readdir('./data', (error, filelist) => {
    const title = 'WEB - create';
    const list = template.list(filelist);
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
});

app.post('/create_process', (req, res) => {
  let body = '';
  req.on('data', (data) => {
    body += data;
  });
  req.on('end', () => {
    const post = qs.parse(body);
    const { title } = post;
    const { description } = post;
    fs.writeFile(`data/${title}`, description, 'utf8', (err) => {
      res.writeHead(302, { Location: `/?id=${title}` });
      res.end();
    });
  });
});

app.get('/update/:pageId', (req, res) => {
  fs.readdir('./data', (error, filelist) => {
    const filteredId = path.parse(req.params.pageId).base;
    fs.readFile(`data/${filteredId}`, 'utf8', (err, description) => {
      const title = req.params.pageId;
      const list = template.list(filelist);
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
});

app.post('/update_process', (req, res) => {
  let body = '';
  req.on('data', (data) => {
    body += data;
  });
  req.on('end', () => {
    const post = qs.parse(body);
    const { id } = post;
    const { title } = post;
    const { description } = post;
    fs.rename(`data/${id}`, `data/${title}`, (error) => {
      fs.writeFile(`data/${title}`, description, 'utf8', (err) => {
        res.redirect(`/?id=${title}`);
      });
    });
  });
});

app.post('/delete_process', (req, res) => {
  let body = '';
  req.on('data', (data) => {
    body += data;
  });
  req.on('end', () => {
    const post = qs.parse(body);
    const { id } = post;
    const filteredId = path.parse(id).base;
    fs.unlink(`data/${filteredId}`, (error) => {
      res.redirect('/');
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

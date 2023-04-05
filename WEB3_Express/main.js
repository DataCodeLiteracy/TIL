const express = require('express');

const app = express();
const port = 3000;
const fs = require('fs');
const qs = require('querystring');
const bodyParser = require('body-parser');
const compression = require('compression');
const template = require('./lib/template.js');
const topicRouter = require('./routes/topic.js');

app.use(express.static('src'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.get('*', (req, res, next) => {
  fs.readdir('./data', (error, filelist) => {
    req.list = filelist;
    next();
  });
});

app.use('/topic', topicRouter);

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
    '<a href="/topic/create">create</a>',
  );
  res.send(html);
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

const express = require('express');

const app = express();
const port = 3000;
const fs = require('fs');
const bodyParser = require('body-parser');
const compression = require('compression');

const helmet = require('helmet');

app.use(helmet());

const indexRouter = require('./routes/index.js');
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

app.use('/', indexRouter);
app.use('/topic', topicRouter);

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

const http = require("http");
const fs = require("fs");
const url = require("url");

const templateHTML = (title, list, body) => `
    <!doctype html>
    <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
          ${list}
          ${body}
      </body>
    </html>
  `;

const checkList = (fileList) => {
  let list = "<ol>";
  let i = 0;
  while (i < fileList.length) {
    list += `<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`;
    i++;
  }
  return list;
  list += "</ol>";
};

const app = http.createServer((request, response) => {
  const _url = request.url;
  const queryData = url.parse(_url, true).query;
  const { pathname } = url.parse(_url, true);

  if (pathname === "/") {
    if (queryData.id === undefined) {
      fs.readdir("./data", (err, fileList) => {
        const title = "Welcome";
        const description = "Hello! Node.js!";
        const list = checkList(fileList);
        const template = templateHTML(
          title,
          list,
          `<h2>${title}</h2><p>${description}</p>`
        );
        response.writeHead(200);
        response.end(template);
      });
    } else {
      const title = queryData.id;
      fs.readdir("./data", (err, fileList) => {
        fs.readFile(`data/${title}`, "utf8", (err, description) => {
          const list = checkList(fileList);
          const template = templateHTML(
            title,
            list,
            `<h2>${title}</h2><p>${description}</p>`
          );
          response.writeHead(200);
          response.end(template);
        });
      });
    }
  } else {
    response.writeHead(404);
    response.end("Not Found!");
  }
});
app.listen(5500);

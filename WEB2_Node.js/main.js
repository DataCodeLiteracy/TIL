const http = require("http");
const fs = require("fs");
const url = require("url");

const templateHTML = (title, list, body) => {
  return `
    <!doctype html>
    <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        ${list}
        <a href="/create">create</a>
        ${body}
      </body>
    </html>
  `;
};

const checkList = (fileList) => {
  let list = "<ol>";
  let i = 0;
  while (i < fileList.length) {
    list += `<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`;
    i++;
  }
  list += "</ol>";
  return list;
};

const app = http.createServer(function (request, response) {
  let _url = request.url;
  let queryData = url.parse(_url, true).query;
  let pathname = url.parse(_url, true).pathname;

  if (pathname === "/") {
    if (queryData.id === undefined) {
      fs.readdir("./data", (err, fileList) => {
        let title = "Welcome";
        let description = "Hello! Node.js!";
        let list = checkList(fileList);
        const template = templateHTML(
          title,
          list,
          `<h2>${title}</h2><p>${description}</p>`
        );
        response.writeHead(200);
        response.end(template);
      });
    } else {
      fs.readdir("./data", (err, fileList) => {
        fs.readFile(`data/${queryData.id}`, "utf8", (err, description) => {
          let title = queryData.id;
          let list = checkList(fileList);
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
  } else if (pathname === "/create") {
    fs.readdir("./data", (err, fileList) => {
      let title = "WEB - create";
      let list = checkList(fileList);
      const template = templateHTML(
        title,
        list,
        `
          <form action="http://localhost:3000/process_create" method="post">
            <p>
              <input type="text" name="title" placeholder="title">
            </p>
            <p>
              <textarea name="description" placeholder="description"></textarea>
            </p>
            <p>
              <input type="submit">
            </p>
          </form>
        `
      );
      response.writeHead(200);
      response.end(template);
    });
  } else {
    response.writeHead(404);
    response.end("Not Found!");
  }
});
app.listen(5500);

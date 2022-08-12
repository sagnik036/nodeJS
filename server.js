// http module

const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer((req, res) => {
  console.log("request has been made from the browser to the server ");
  console.log(req.method);
  console.log("path : " + req.url);
  let path = "./views/index.html";
  res.setHeader("Content-Type", "text/html");
  //    res.write('<h1>hi this is just a demo </h1>');`

  switch (req.url) {
    case "/":
      res.statusCode = 200;
      path = "./views/index.html";
      break;
    case "/about":
      res.statusCode = 301;
      res.setHeader("Location", "/samir");
      res.end();
      break;
    case "/samir":
      res.statusCode = 200;
      path = "./views/about.html";
      break;
    default:
      path = "./views/404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, fileData) => {
    if (err) {
      console.log(err);
    } else {
      res.write(fileData);
      console.log("nothing")
      res.end();
    }
  });
});

server.listen(port, "localhost", () => {
  console.log("server is listening on port : " + port);
});

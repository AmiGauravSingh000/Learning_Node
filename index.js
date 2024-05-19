const http = require("http");
const fs = require("fs");
const mobile = fs.readFileSync("mobile.html", "utf-8");
const laptop = fs.readFileSync("laptop.html", "utf-8");
const home = fs.readFileSync("home.html", "utf-8");
const errorfile = fs.readFileSync("error.html", "utf-8");
const products = JSON.parse(fs.readFileSync("products.json", "utf-8"));
const items = products.products[0];
const server = http.createServer((req, res) => {
  console.log(items);
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(home);
      break;
    case "/mobiles":
     const changedMobile =  mobile
        .replace("Mobile Name", items.title)
        .replace("DESC", items.description)
        .replace('IMG_URL', items.thumbnail); 
      res.setHeader("Content-Type", "text/html");
      res.end(changedMobile);
      break;
    case "/laptops":
      res.setHeader("Content-Type", "text/html");
      res.end(laptop);
      break;
    default:
      res.setHeader("Content-Type", "text/html");
      res.end(errorfile);
  }
});

server.listen(8080);

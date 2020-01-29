const fs = require("fs");
const path = require("path");

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    /*sauvegarde de products dans un repertoire data nomme products.json */

    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    /* lecture du contenu via fs si il existe pas on le crer vide */

    fs.readFile(p, (err, filecontent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(filecontent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    /*sauvegarde de products dans un repertoire data nomme products.json */

    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, filecontent) => {
      if (err) {
        cb([]);
      }
      /* on parse car products .json est un tableau */
      cb(JSON.parse(filecontent));
    });
  }
};

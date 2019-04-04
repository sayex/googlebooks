var db = require("../models");

module.exports = (app) => {
  app.get("/api/books", (req, res) => {
    db.Books.find({})
    .then((dbBooks) => {
      res.json(dbBooks);
    })
    .catch((err) => {
      res.json(err);
    });
  });

  app.post("/api/books", (req, res) => {
    db.Books.create(req.body).then((dbBooks) => {
      res.json(dbBooks);
    })
    .catch((err) => {
        res.json(err);
      });
  });

  app.delete("/api/books/:id", function(req, res) {
    db.Books.deleteOne({_id: req.params.id })
      .then((dbBooks) => {
        res.json(dbBooks);
      })
      .catch(function(err) {
        res.json(err);
      });
  });
};

let Repository = require("../models/Repository");

module.exports = (req, res, next) => {
  let { id } = req.params;

  let exists = Repository.find((e) => e.id === id);

  if (typeof exists === "undefined") {
    return res.status(400).send({ error: "This Repository does not exist" });
  }

  next();
};

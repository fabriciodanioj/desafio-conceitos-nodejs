let Repository = require("../models/Repository");

module.exports = {
  async create(req, res) {
    let { id } = req.params;

    Repository.find((e) => {
      if (e.id === id) {
        e.likes = e.likes + 1;
      }
    });

    const repo = Repository.find((e) => e.id === id);

    return res.status(200).send(repo);
  },
};

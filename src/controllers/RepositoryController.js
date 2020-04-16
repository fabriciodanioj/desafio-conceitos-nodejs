let Repository = require("../models/Repository");

const { uuid } = require("uuidv4");

module.exports = {
  create(req, res) {
    let { title, url, techs } = req.body;

    let repository = {
      id: uuid(),
      title,
      url,
      techs,
      likes: 0,
    };

    Repository.push(repository);

    return res.send(repository);
  },
  show(req, res) {
    return res.send(Repository);
  },
  update(req, res) {
    let { id } = req.params;
    let { title, url, techs } = req.body;

    Repository.find((e) => {
      if (e.id === id) {
        e.title = title ? title : e.title;
        e.url = url ? url : e.url;
        e.techs = techs ? techs : e.techs;
      }
    });

    const repo = Repository.find((e) => e.id === id);

    return res.status(200).send(repo);
  },
  destroy(req, res) {
    let { id } = req.params;

    repo = Repository.findIndex((e) => e.id === id);

    Repository.splice(repo, 1);

    return res.status(204).send();
  },
};

const { Router } = require("express");

const routes = Router();

const { LikeController, RepositoryController } = require("./controllers");
const { VerifyIfRepoExists } = require("./Middlewares");

routes.post("/repositories", RepositoryController.create);

routes.get("/repositories", RepositoryController.show);

routes.put(
  "/repositories/:id",
  VerifyIfRepoExists,
  RepositoryController.update
);

routes.delete(
  "/repositories/:id",
  VerifyIfRepoExists,
  RepositoryController.destroy
);

routes.post("/repositories/:id/like", VerifyIfRepoExists, LikeController.create);

module.exports = routes;

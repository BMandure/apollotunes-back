import express from "express";
import { getSongs } from "../services/routes";

const routes = express.Router();

routes.get("/all-songs", (_, res) => {
  res.send(getSongs());
});

routes.get("/all-albums", (_, res) => {
  res.send("Get all albums");
});

routes.get("/all-artists", (_, res) => {
  res.send("Get all artists");
});

routes.get("/all-users", (_, res) => {
  res.send("Get all users");
});

routes.post("/", (_, res) => {
  res.send("POST Test at '/'");
});

export default routes;

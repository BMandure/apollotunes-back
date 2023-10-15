import express from "express";
import { getSongs } from "../services/routes";

const routes = express.Router();

routes.get("/", (_, res) => {
  res.send(getSongs());
});

routes.post("/", (_, res) => {
  res.send("Prueba post /");
});

export default routes;

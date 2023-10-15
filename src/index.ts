import express from "express";
import routes from "./routes/index";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/ping", (_, res) => {
  console.log("Someone pinged here");
  res.send("pong");
});

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server Running on port: ${PORT}`);
});

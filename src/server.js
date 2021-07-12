import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3333;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const routes = express.Router();

app.use(express.json());
app.use("/public", express.static("./public/"));
app.use(cors());
app.use(routes);

const root = { root: __dirname };

routes.get("/", (request, response) => {
  response.sendFile("./views/index.html", root);
});

routes.get("/users", (request, response) => {
  response.sendFile("./views/users.html", root);
});

app.listen(port, () => {
  console.log(`>>> Server started on port: http://localhost:${port}`);
});

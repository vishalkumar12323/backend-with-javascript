import "dotenv/config";
import fs from "fs";
import cors from "cors";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import express from "express";
import bodyParser from "body-parser";
import users from "./users.json" assert { type: "json" };

const app = express();
const port = process.env.PORT || 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/create-user", (req, res) => {
  const { name, age } = req.body;
  const id = users.length + 1;

  fs.writeFile(
    path.join(__dirname, "users.json"),
    JSON.stringify([...users, { id, name, age }]),
    "utf-8",
    (err, data) => {
      if (data) console.log(data);
      if (err) console.log(err);
    }
  );

  fs.readFile(path.join(__dirname, "users.json"), "utf-8", (err, data) => {
    if (err) console.log(err);
    if (data) {
      res.status(200).json({ status: "ok", users: JSON.parse(data) });
    }
  });
  // fs.writeFileSync(
  //   path.join(__dirname, "users.json"),
  //   JSON.stringify([...users, { id, name, age }]),
  //   "utf-8"
  // );
  // const allUsers = fs.readFileSync(path.join(__dirname, "users.json"), "utf-8");
  // res.json({
  //   message: "User created successfully",
  //   users: JSON.parse(allUsers),
  // });
});
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

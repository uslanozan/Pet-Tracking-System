import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors()); 

const users = [];

app.post("/api/register", (req, res) => {
  const { username, email, password } = req.body;

  users.push({ username, email, password });

  console.log("User registered:", { username, email });
  res.status(201).json({ message: "User registered successfully!" });
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username && u.password === password);
  if (user) {
    res.json({ message: "Login successful!", user });
  } else {
    res.status(401).json({ message: "Invalid username or password." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// TEST
app.get("/", (req, res) => {
  res.send("Backend Running ✅");
});

// SIGNUP
app.post("/signup", (req, res) => {
  console.log("Signup HIT");

  const { email, password, role } = req.body;

  res.json({
    message: "Signup Success ✅",
    user: { email, role }
  });
});

app.listen(5000, () => {
  console.log("Server started on 5000 🚀");
});
// LOGIN
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  console.log("Login HIT");

  // abhi simple logic (no DB)
  if (!email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  // dummy check (later improve karenge)
  if (email === "admin@gmail.com" && password === "123456") {
    return res.json({
      message: "Login success",
      role: "admin",
      token: "fake-jwt-token"
    });
  }

  return res.json({
    message: "Login success",
    role: "user",
    token: "fake-jwt-token"
  });
});
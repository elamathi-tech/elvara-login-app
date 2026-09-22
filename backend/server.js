const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const user = {
  email: "test@elvara.com",
  password: "123456"
};

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if(email === user.email && password === user.password) {
    res.status(200).json({
      message: "Login successful"
    });
  } else {
    res.status(401).json({
      message: "Invalid email or password"
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
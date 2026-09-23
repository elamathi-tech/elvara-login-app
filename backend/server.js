require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const user = {
  email: process.env.LOGIN_EMAIL,
  passwordHash: process.env.LOGIN_PASSWORD_HASH
};

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if(email !== user.email ) {
    return res.status(401).json({
      message: "Invalid email or password"
    });
  }
   
  const passwordMatch = await bcrypt.compare(
    password,
    user.passwordHash
  );

  if(passwordMatch){
    return res.status(200).json({
      message: "Login successful"
    });
  }

  res.status(401).json({
    message: "Invalid email or password"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
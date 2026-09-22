import { useState } from "react";
import axios from "axios";
import "./Login.css";
import Dashboard from "./Dashboard";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showDashboard, setShowDashboard] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (email.trim() === ""){
      setError("Please enter your email");
      return;
    }

    if (!email.includes("@") || !email.includes(".")){
      setError("Please enter a valid email address");
      return;
    }

    if (password.trim() === ""){
      setError("Please enter your password");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true); 

      const response = await axios.post("https://elvara-login-app.onrender.com/login", {
        email: email,
        password: password
      });

      console.log(response.data);
      setShowDashboard(true);

    } catch(error) {
        console.log(error);

        setLoading(false);

        if (error.response) {
          setError(error.response.data.message);
        } else {
          setError("Something went wrong. Please try again.");
        }
    }
  };

  if (showDashboard) {
    return <Dashboard />;
  }

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>ELVARA</h1>
        <p className="login-subtitle">Welcome Back</p>
        <p className="login-description">
          Sign in to continue to your account
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default Login;
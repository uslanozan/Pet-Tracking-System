import React, { useState } from "react";
import pets from "./assets/pets.jpg";
import AddAnimal from "./AddAnimal";
// import "./css/FormStyles.css"; // Import the consolidated CSS file

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  // Dummy user credentials
  const dummyUser = {
    username: "testuser",
    password: "testpassword",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === dummyUser.username && password === dummyUser.password) {
      setIsLoggedIn(true);
      setError("");
      alert("Login successful!");
    } else {
      setError("Invalid username or password.");
    }
  };

  if (isLoggedIn) {
    return (
      <div className="container" style={{ backgroundImage: `url('${pets}')` }}>
        <AddAnimal />
        <button className="logout-button" onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="container" style={{ backgroundImage: `url('${pets}')` }}>
      <div className="form-container">
        <h2 className="heading">Pet Tracking System</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-group">
            <label htmlFor="username" className="label">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="label">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="button">Login</button>
        </form>
        <div className="test-account">
          <h4>Test Account</h4>
          <p><strong>Username:</strong> testuser</p>
          <p><strong>Password:</strong> testpassword</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
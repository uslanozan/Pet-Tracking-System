import React, { useState } from "react";
import pets from "./assets/pets.jpeg";
import AddAnimal from "./AddAnimal";
// import "./css/FormStyles.css"; // Import the consolidated CSS file

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const loginData = {
      username,
      password,
    };
  
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const result = await response.json();
      console.log("Login successful:", result);
      alert("Login successful!");
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed. Please try again.");
    }
  };

  if (isLoggedIn) {
    return (
      <div className="container" style={{ backgroundImage: `url('${pets}')` }}>
        <AddAnimal />
        <button className="logout-button" path="/" onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      </div>
    );
  }
  else {
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
        </div>
      </div>
    );
  }
}

export default Login;
import React, { useState } from "react";
import pets from "./assets/pets.jpeg";
// import "./css/FormStyles.css"; // Import the consolidated CSS file

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const registerData = { username, email, password };

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });

      if (response.ok) {
        const result = await response.json();
        setIsRegistered(true);
        console.log("Registration successful:", result);
        alert("Registration successful!");
      } else {
        throw new Error(`Error: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again.");
    }
  };

  if (isRegistered) {
    return (
      <div className="container" style={{ backgroundImage: `url('${pets}')` }}>
        <div className="success-message">
          <h2>Welcome, {username}!</h2>
          <p>Your registration was successful.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ backgroundImage: `url('${pets}')` }}>
      <div className="form-container">
        <h2 className="heading">Register for Pet Tracking System</h2>
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
            <label htmlFor="email" className="label">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="Enter your email"
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
          <button type="submit" className="button">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
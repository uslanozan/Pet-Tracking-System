import React, { useState } from "react";
import pets from "./assets/pets.jpg";
import AddAnimal from "./AddAnimal";

function Login (){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);


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
  
      if (response.ok) {
      const result = await response.json();
      setIsLoggedIn(true);
      console.log("Login successful:", result);
      alert("Login successful!");
      }
      else {
        throw new Error(`Error: ${response.statusText}`);
      }
      
      
      
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed. Please try again.");
    }
  };
  
  
  if (isLoggedIn) {
    return (
      <div style={{
        ...styles.container,
        backgroundImage: `url('${pets}')`, 
      }}>
        <AddAnimal />
        <button onClick={() => setIsLoggedIn(false)}
          >Logout</button>
      </div>)};

  return (
    <div
      style={{
        ...styles.container,
        backgroundImage: `url('${pets}')`, 
      }}
    >
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Pet Tracking System</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="username" style={styles.label}>
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              placeholder="Enter your username"
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: 0,
    padding: 0,
  },
  formContainer: {
    width: "100%",
    maxWidth: "400px",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    marginBottom: "5px",
    fontSize: "14px",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    padding: "10px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default Login;

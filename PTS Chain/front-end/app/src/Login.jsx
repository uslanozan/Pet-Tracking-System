import React, { useState } from "react";
import pets from "./assets/pets.jpeg";
import AddAnimal from "./AddAnimal";
import "./css/styles.css";
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


  return(
      <>
      {isLoggedIn ? (
        <div className="container"  style={{ backgroundImage: `url('${pets}')` }}>
        <AddAnimal/>
        <button  path="/" className="button" onClick={()=> setIsLoggedIn(false)}>
          Logout
        </button>
      </div>
        ) : (<div className="container" style={{ backgroundImage: `url('${pets}')` }}>
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
      </div>)

      }
      
      </>

  )

}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
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
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};


export default Login;
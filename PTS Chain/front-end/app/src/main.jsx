// filepath: src/main.jsx or wherever you import CSS
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/styles.css"; // Updated import

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
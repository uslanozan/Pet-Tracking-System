// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import AddAnimal from "./AddAnimal";
import EditAnimal from "./EditAnimal";


function App() {
  const [animals, setAnimals] = useState(() => {
    const storedAnimals = localStorage.getItem("animals");
    return storedAnimals ? JSON.parse(storedAnimals) : [];
  });

  useEffect(() => {
    localStorage.setItem("animals", JSON.stringify(animals));
  }, [animals]);

  const addAnimal = (newAnimal) => {
    setAnimals((prevAnimals) => [...prevAnimals, newAnimal]);
  };

  const editAnimal = (updatedAnimal) => {
    setAnimals((prevAnimals) =>
      prevAnimals.map((animal) =>
        animal.id === updatedAnimal.id ? updatedAnimal : animal
      )
    );
  };

  const deleteAnimal = (id) => {
    setAnimals((prevAnimals) => prevAnimals.filter((animal) => animal.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={<Dashboard animals={animals} deleteAnimal={deleteAnimal} />}
        />
        <Route
          path="/add-pet"
          element={<AddAnimal addAnimal={addAnimal} animals={animals} />}
        />
        <Route
          path="/edit-pet/:id"
          element={<EditAnimal animals={animals} editAnimal={editAnimal} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
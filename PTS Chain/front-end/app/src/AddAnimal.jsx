import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/styles.css";

const AddAnimal = ({ addAnimal, animals }) => {
  const [formData, setFormData] = useState({
    animalName: "",
    species: "",
    age: "",
    additionalInfo: "",
    addedBy: "0xYourAddress", // Replace with the actual user address if available
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.animalName || !formData.species || !formData.age) {
      alert("Please fill in all required fields.");
      return;
    }

    // Auto-generate a unique ID
    const newId = animals.length > 0 ? Math.max(...animals.map(a => a.id)) + 1 : 1;

    const newAnimal = {
      id: newId,
      name: formData.animalName,
      species: formData.species,
      age: Number(formData.age),
      additionalInfo: formData.additionalInfo,
      addedBy: formData.addedBy,
      timestamp: new Date().toLocaleString(),
    };

    // Check for duplicate ID (optional since auto-generated)
    const duplicate = animals.find((animal) => animal.id === newId);
    if (duplicate) {
      alert("A pet with this ID already exists. Please try again.");
      return;
    }

    addAnimal(newAnimal);
    alert("Animal added successfully!");
    
    // Reset form
    setFormData({
      animalName: "",
      species: "",
      age: "",
      additionalInfo: "",
      addedBy: "0xYourAddress",
    });
    
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <h2 className="heading">Add a New Pet</h2>
      <form className="animal-form" onSubmit={handleSubmit}>
        <label>
          Animal Name:
          <input
            type="text"
            name="animalName"
            value={formData.animalName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Species:
          <input
            type="text"
            name="species"
            value={formData.species}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Additional Info:
          <input
            type="text"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            // Optional: Not required
          />
        </label>

        <label>
          Added By:
          <input
            type="text"
            name="addedBy"
            value={formData.addedBy}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="button">
          Add Animal
        </button>
      </form>
    </div>
  );
};

export default AddAnimal;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/styles.css";
import "./AddAnimal.css"

const AddAnimal = () => {
  const [formData, setFormData] = useState({
    animalName: "",
    ownerName: "",
    ownerAddress: "",
    shelterName: "",
    animalPhoto: null,
    animalType: "",
    animalAge: "",
    animalGender: "",
    vaccinesDone: "",
    animalIllnesses: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    // Append form data for submission
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      const response = await fetch("http://localhost:5000/api/add-animal", {
        method: "POST",
        body: data, // Send FormData
      });

      if (!response.ok) {
        throw new Error("Failed to submit animal data.");
      }

      const result = await response.json();
      alert("Animal added successfully!");
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add the animal. Please try again.");
    }
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
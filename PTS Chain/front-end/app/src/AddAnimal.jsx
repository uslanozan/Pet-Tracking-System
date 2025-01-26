import React, { useState } from "react";
import "./AddAnimal.css"; // Include a CSS file for styling

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
      [name]: files ? files[0] : value, // Handle file input separately
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
    <div className="add-animal-page">
      <h1>Add an Animal</h1>
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
          Owner Name:
          <input
            type="text"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Owner Address:
          <input
            type="text"
            name="ownerAddress"
            value={formData.ownerAddress}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Shelter Name:
          <input
            type="text"
            name="shelterName"
            value={formData.shelterName}
            onChange={handleChange}
          />
        </label>

        <label>
          Animal Photo:
          <input
            type="file"
            name="animalPhoto"
            accept="image/*"
            onChange={handleChange}
          />
        </label>

        <label>
          Animal Type:
          <input
            type="text"
            name="animalType"
            value={formData.animalType}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Animal Age:
          <input
            type="number"
            name="animalAge"
            value={formData.animalAge}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Animal Gender:
          <select
            name="animalGender"
            value={formData.animalGender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>

        <label>
          Vaccines Done:
          <textarea
            name="vaccinesDone"
            value={formData.vaccinesDone}
            onChange={handleChange}
            placeholder="E.g., Rabies, Distemper"
          />
        </label>

        <label>
          Animal Illnesses:
          <textarea
            name="animalIllnesses"
            value={formData.animalIllnesses}
            onChange={handleChange}
            placeholder="E.g., Allergy, Genetic diseases"
          />
        </label>

        <button type="submit">Add Animal</button>
      </form>
    </div>
  );
};

export default AddAnimal;

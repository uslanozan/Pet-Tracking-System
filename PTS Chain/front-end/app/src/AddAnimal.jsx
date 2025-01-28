import React, { useState } from "react";
import "./css/styles.css";
import "./AddAnimal.css"

const AddAnimal = () => {
  const [formData, setFormData] = useState({
    animalName: "",
    species: "",
    age: "",
    ownerName: "",
    ownerPhone: "",
    ownerAddress: "",
    shelterName: "",
    gender: "",
    weight: "",
    height: "",
    illnesses: "",
    vaccines: "",
    additionalInfo: "",
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
          Owner Phone:
          <input
            type="text"
            name="ownerPhone"
            value={formData.ownerPhone}
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
            required
          />
        </label>

        <label>
          Gender:
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Weigth (kg):
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Height (cm):
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Illnesses:
          <input
            type="text"
            name="illnesses"
            value={formData.illnesses}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Vaccines:
          <input
            type="text"
            name="vaccines"
            value={formData.vaccines}
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

        <button type="submit" className="button">
          Add Animal
        </button>
      </form>
    </div>
  );
};

export default AddAnimal;
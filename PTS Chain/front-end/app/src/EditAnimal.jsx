import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./css/styles.css";

const EditAnimal = ({ animals, editAnimal }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    animalName: "",
    species: "",
    age: "",
    addedBy: "",
    timestamp: "",
  });

  useEffect(() => {
    const animalToEdit = animals.find((animal) => animal.id === Number(id));
    if (animalToEdit) {
      setFormData(animalToEdit);
    } else {
      alert("Pet not found!");
      navigate("/dashboard");
    }
  }, [id, animals, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedAnimal = {
      ...formData,
      id: Number(formData.id),
      age: Number(formData.age),
      timestamp: new Date().toLocaleString(),
    };
    editAnimal(updatedAnimal);
    alert("Animal updated successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <h2 className="heading">Edit Pet</h2>
      <form className="animal-form" onSubmit={handleSubmit}>
        <label>
          ID:
          <input
            type="number"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
            disabled
          />
        </label>

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
          Update Animal
        </button>
      </form>
    </div>
  );
};

export default EditAnimal;
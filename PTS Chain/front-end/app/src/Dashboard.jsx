import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/styles.css";
import "./css/ChatBot.css"
import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";

const Dashboard = ({ animals, deleteAnimal }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredAnimals = animals.filter(
    (animal) =>
      animal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      animal.species.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEdit = (id) => {
    navigate(`/edit-pet/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this pet?")) {
      deleteAnimal(id);
    }
  };

  const [chatHistory, setChatHistory] = useState([]);

  return (
    <div className="container">
      <h2 className="heading">Pet Tracking Dashboard</h2>
      <div className="dashboard-controls">
        <input
          type="text"
          placeholder="Search by Name or Species"
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
        {/* The Add Pet button is now in the Navbar */}
      </div>
      <div className="dashboard-content">
        <table className="animal-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Species</th>
              <th>Age</th>
              <th>Added By</th>
              <th>Timestamp</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAnimals.length > 0 ? (
              filteredAnimals.map((animal) => (
                <tr key={animal.id}>
                  <td>{animal.id}</td>
                  <td>{animal.name}</td>
                  <td>{animal.species}</td>
                  <td>{animal.age}</td>
                  <td>{animal.addedBy}</td>
                  <td>{animal.timestamp}</td>
                  <td>
                    <button
                      className="button edit-button"
                      onClick={() => handleEdit(animal.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="button delete-button"
                      onClick={() => handleDelete(animal.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No pets found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {/* Chatbot Div */}
        <br />
        <br />

        <div className="chatbot-popup">
          <div className="chat-header">
            {/* Chatbot Header */}
            <div className="header-info">
              <ChatbotIcon />
              <h2 className="logo-text">Chatbot</h2>
            </div>
            <button className="material-symbols-rounded">keyboard_arrow_down</button>
          </div>


          {/* Chatbot Body */}
          <div className="chat-body">
            <div className="message bot-message">
              <ChatbotIcon />
              <p className="message-text">Hey There ! <br /> How Can I Help You ?</p>
            </div>

            {/* Render the chat history dynamically */}
            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}

            {/* Chatbot Footer */}
            <div className="chat-footer">
              <ChatForm setChatHistory={setChatHistory} />
            </div>
          </div>




        </div>


      </div>
    </div>
  );
};

export default Dashboard;
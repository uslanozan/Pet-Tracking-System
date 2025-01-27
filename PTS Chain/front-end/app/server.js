import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import multer from "multer";
import {ethers} from "ethers";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import hre from "hardhat";

const app = express();
const PORT = 5000;
const upload = multer({ dest: "uploads/" });
const AnimalTrackingAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const __filename = fileURLToPath(import.meta.url); // Current file path
const __dirname = path.dirname(__filename); // Current directory path

app.use(bodyParser.json());
app.use(cors()); 

const users = [];

app.post("/api/register", (req, res) => {
  const { username, email, password } = req.body;

  users.push({ username, email, password });

  console.log("User registered:", { username, email });
  res.status(201).json({ message: "User registered successfully!" });
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username && u.password === password);
  if (user) {
    res.json({ message: "Login successful!", user });
  } else {
    res.status(401).json({ message: "Invalid username or password." });
  }
});

const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545"); // Connect to Hardhat node
const privateKey = "0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6"; // Replace with the private key of the account
const wallet = new ethers.Wallet(privateKey, provider);

// Load contract ABI and address
const contractABI = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./src/artifacts/contracts/AnimalTracking.sol/AnimalTracking.json"),"utf-8")).abi; // Update path as needed
const contractAddress = AnimalTrackingAddress; // Replace with deployed contract address
const contract = new ethers.Contract(contractAddress, contractABI, wallet);

app.post("/api/add-animal", upload.single("animalPhoto"), async (req, res) => {
  const { body, file } = req;

  try {
    // Animal data from request body
    const { animalName, ownerName, ownerAddress, shelterName } = body;

    console.log("Animal Data:", body);
    console.log("Uploaded File:", file);

    // Example: Read photo file as binary if needed
    const photoBuffer = fs.readFileSync(file.path);

    // Call the addAnimal function on the blockchain
    const tx = await contract.addAnimal(1, "Osman", "Zeynep", 222, "Shelter");

    // Wait for the transaction to be mined
    await tx.wait();

    console.log("Transaction Hash:", tx.hash);

    // Cleanup uploaded file
    fs.unlinkSync(file.path);

    res.json({ message: "Animal added to the blockchain successfully!", transactionHash: tx.hash });
    const transaction = await provider.getTransaction(tx.hash);
    console.log(transaction);

  } catch (error) {
    console.error("Error adding animal:", error);
    res.status(500).json({ error: "Failed to add animal to the blockchain." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import multer from "multer";
import {ethers} from "ethers";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5000;
const upload = multer({ dest: "uploads/" });
const AnimalTrackingAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545"); 
const privateKey = "0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6"; 
const wallet = new ethers.Wallet(privateKey, provider);


const contractABI = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./src/artifacts/contracts/AnimalTracking.sol/AnimalTracking.json"),"utf-8")).abi; // Update path as needed
const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"; 
const contract = new ethers.Contract(contractAddress, contractABI, wallet);
app.post("/api/add-animal", upload.single("animalPhoto"), async (req, res) => {
  const { body, file } = req;

  try {
    const { 
      animalName,
      species,
      age,
      ownerName,
      ownerPhone,
      ownerAddress,
      shelterName,
      gender,
      weight,
      height,
      illnesses,
      vaccines,
      additionalInfo,
    } = body;

    console.log("Animal Data:", body);
    
    const tx = await contract.addAnimal(
      animalName,
      species,
      age,
      ownerName,
      ownerPhone,
      ownerAddress,
      shelterName,
      gender,
      weight,
      height,
      illnesses,
      vaccines,
      additionalInfo);


    await tx.wait();

    res.json({ message: "Animal added to the blockchain successfully!", transactionHash: tx.hash });
    
    
    
    

  } catch (error) {
    console.error("Error adding animal:", error);
    res.status(500).json({ error: "Failed to add animal to the blockchain." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

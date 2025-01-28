import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/styles.css";
import { ethers } from "ethers";

const Dashboard = ({}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [decodedAnimals, setDecodedAnimals] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const mockDecodedData = [
    ];
    setDecodedAnimals(mockDecodedData);
    listTransactions()
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  const filteredAnimals = decodedAnimals.filter(
    (animal) =>
      animal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      animal.species.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleEdit = (id) => {
    navigate(`/edit-pet/${id}`);
  };

  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
const contractABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "species",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "age",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "ownerName",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "ownerPhone",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "ownerAddress",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "shelterName",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "gender",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "weight",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "height",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "illnesses",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "vaccines",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "addedBy",
          "type": "address"
        }
      ],
      "name": "AnimalAdded",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_species",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_age",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_ownerName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_ownerPhone",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_ownerAddress",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_shelterName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_gender",
          "type": "string"
        },
        {
          "internalType": "uint32",
          "name": "_weight",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "_height",
          "type": "uint32"
        },
        {
          "internalType": "string",
          "name": "_illnesses",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_vaccines",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_additionalInfo",
          "type": "string"
        }
      ],
      "name": "addAnimal",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "animalIds",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "animals",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "species",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "age",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "ownerName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "ownerPhone",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "ownerAddress",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "shelterName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "gender",
          "type": "string"
        },
        {
          "internalType": "uint32",
          "name": "weight",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "height",
          "type": "uint32"
        },
        {
          "internalType": "string",
          "name": "illnesses",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "vaccines",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "additionalInfo",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "addedBy",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "animalId",
          "type": "uint256"
        }
      ],
      "name": "getAnimal",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "species",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "age",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "ownerName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "ownerPhone",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "ownerAddress",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "shelterName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "gender",
              "type": "string"
            },
            {
              "internalType": "uint32",
              "name": "weight",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "height",
              "type": "uint32"
            },
            {
              "internalType": "string",
              "name": "illnesses",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "vaccines",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "additionalInfo",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "addedBy",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "internalType": "struct AnimalTracking.Animal",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAnimalCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getNextId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];


  

async function listTransactions() {
    try {
        const blockNumber = await provider.getBlockNumber();
        console.log("Current Block Number:", blockNumber);

        const iface = new ethers.Interface(contractABI);
        const array = [];
        for (let i = blockNumber; i >= 1; i--) {
            const block = await provider.getBlock(i);
                const transaction = await provider.getTransaction(block.transactions[0]);
                    try {
                        const decodedData = iface.decodeFunctionData("addAnimal", transaction.data);
                        const decodedArray = decodedData.toArray(); 
                        const animal = {
                          name: decodedArray[0],
                          species: decodedArray[1],
                          age: decodedArray[2].toString(),
                          ownerName: decodedArray[3],
                          ownerPhone: decodedArray[4],
                          ownerAddress: decodedArray[5],
                          shelterName: decodedArray[6],
                          gender: decodedArray[7],
                          weight: decodedArray[8].toString(),
                          height: decodedArray[9].toString(),
                          illnesses: decodedArray[10],
                          vaccines: decodedArray[11],
                          additionalInfo: decodedArray[12],
                      };
                        console.log(animal);
                        array.push(animal);
                    } catch (decodeError) {
                        console.error("Failed to decode transaction data:", decodeError);
                    }
        }
        setDecodedAnimals(array);
    } catch (error) {
        console.error("Error listing transactions:", error);
    }
}

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
      </div>
      <table className="animal-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Species</th>
            <th>Age</th>
            <th>Owner Name</th>
            <th>Owner Phone</th>
            <th>Owner Address</th>
            <th>Shelter Name</th>
            <th>Gender</th>
            <th>Weight</th>
            <th>Height</th>
            <th>Illnesses</th>
            <th>Vaccines</th>
            <th>Additional Info</th>
          </tr>
        </thead>
        <tbody>
          {filteredAnimals.length > 0 ? (
            filteredAnimals.map((animal) => (
              <tr key={animal.id}>
                <td>{animal.name}</td>
                <td>{animal.species}</td>
                <td>{animal.age}</td>
                <td>{animal.ownerName}</td>
                <td>{animal.ownerPhone}</td>
                <td>{animal.ownerAddress}</td>
                <td>{animal.shelterName}</td>
                <td>{animal.gender}</td>
                <td>{animal.weight}</td>
                <td>{animal.height}</td>
                <td>{animal.illnesses}</td>
                <td>{animal.vaccines}</td>
                <td>{animal.additionalInfo}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="15" className="text-center">
                No pets found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;

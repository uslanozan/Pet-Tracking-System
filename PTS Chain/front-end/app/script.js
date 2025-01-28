import { ethers } from "ethers";

// Replace with your provider URL
const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

// Replace with your deployed contract address and ABI
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

        for (let i = blockNumber; i >= 1; i--) {
            const block = await provider.getBlock(i);

            // Loop through transaction hashes in the block
            for (const txHash of block.transactions) {
                const transaction = await provider.getTransaction(txHash);

                // Check if the transaction is sent to the contract address
                if (transaction.to && transaction.to.toLowerCase() === contractAddress.toLowerCase()) {

                    // Decode the input data
                    try {
                        const decodedData = iface.decodeFunctionData("addAnimal", transaction.data);
                        console.log("Decoded Data:", decodedData.toArray());
                    } catch (decodeError) {
                        console.error("Failed to decode transaction data:", decodeError);
                    }
                }
            }
        }
    } catch (error) {
        console.error("Error listing transactions:", error);
    }
}

listTransactions();






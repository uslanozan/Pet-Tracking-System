const hre = require("hardhat");
import hre from "hardhat";

async function main() {
    const animalTrackingAddress = "YOUR_CONTRACT_ADDRESS_HERE";
    const AnimalTracking = await hre.ethers.getContractAt("AnimalTracking", animalTrackingAddress);

    const tx = await AnimalTracking.addAnimal(1, "Lion", "Panthera leo", 5, "King of the jungle");
    const receipt = await tx.wait();

    console.log("Animal added! Transaction hash:", receipt.transactionHash);
    console.log("Block number:", receipt.blockNumber);
    console.log("Logs:", receipt.logs);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

import { ethers, run } from "hardhat";

async function main() {
    // Compile contracts
    await run("compile");

    // Get the Contract Factory
    const AnimalTracking = await ethers.getContractFactory("AnimalTracking");

    // Deploy the contract
    const animalTracking = await AnimalTracking.deploy();

    // Wait for deployment to complete
    await animalTracking.deployed();

    console.log(`AnimalTracking deployed to: ${animalTracking.address}`);
}

// Handle errors and execute the deployment
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

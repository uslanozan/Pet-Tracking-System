
import {buildModule} from "@nomicfoundation/hardhat-ignition/modules";

module.exports = buildModule("AnimalTracking", (m) => {
    // Define the deployment steps
    const animalTracking = m.contract("AnimalTracking");

    // Return the module
    return { animalTracking };
});


import {buildModule} from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("AnimalTrackingModule", (m) => {

  const animalTracking = m.contract("AnimalTracking", []);

  return { animalTracking };
});

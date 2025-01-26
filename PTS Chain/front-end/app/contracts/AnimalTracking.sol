// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract AnimalTracking {
    struct Animal {
        uint256 id; // Unique identifier for the animal
        string name; // Name of the animal
        string species; // Species of the animal
        uint256 age; // Age of the animal
        string additionalInfo; // Additional metadata about the animal
        address addedBy; // Address of the user who added the animal
        uint256 timestamp; // Time when the animal was added
    }

    // Mapping to store animals by their unique ID
    mapping(uint256 => Animal) public animals;

    // Array to store all animal IDs for iteration
    uint256[] public animalIds;

    // Event to notify when a new animal is added
    event AnimalAdded(uint256 indexed id, string name, string species, address indexed addedBy);

    /**
     * @dev Adds a new animal to the tracking system.
     * @param _id The unique identifier for the animal.
     * @param _name The name of the animal.
     * @param _species The species of the animal.
     * @param _age The age of the animal.
     * @param _additionalInfo Additional metadata about the animal.
     */
    function addAnimal(
        uint256 _id,
        string memory _name,
        string memory _species,
        uint256 _age,
        string memory _additionalInfo
    ) public {
        require(animals[_id].id == 0, "Animal with this ID already exists");

        // Create a new animal record
        animals[_id] = Animal({
            id: _id,
            name: _name,
            species: _species,
            age: _age,
            additionalInfo: _additionalInfo,
            addedBy: msg.sender,
            timestamp: block.timestamp
        });

        animalIds.push(_id);

        // Emit an event for the addition of the new animal
        emit AnimalAdded(_id, _name, _species, msg.sender);
    }

    /**
     * @dev Gets the total number of animals in the tracking system.
     * @return The number of animals added.
     */
    function getAnimalCount() public view returns (uint256) {
        return animalIds.length;
    }

    /**
     * @dev Retrieves an animal's details by its ID.
     * @param _id The unique identifier for the animal.
     * @return The animal's details.
     */
    function getAnimal(uint256 _id) public view returns (Animal memory) {
        require(animals[_id].id != 0, "Animal not found");
        return animals[_id];
    }
}

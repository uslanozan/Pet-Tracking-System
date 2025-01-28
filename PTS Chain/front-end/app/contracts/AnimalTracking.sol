// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract AnimalTracking {
    struct Animal {
        uint256 id; // Unique ID for the animal
        string name; // Name of the animal
        string species; // Species of the animal
        uint256 age; // Age of the animal
        string ownerName; // Name of the owner
        string ownerPhone; // Phone number of the owner
        string ownerAddress; // Address of the owner
        string shelterName; // Name of the shelter
        string gender; // gender of the animal
        uint32 weight; // weight of the animal in kg
        uint32 height; // height of the animal in cm
        string illnesses; // List of illnesses the animal has
        string vaccines; // List of vaccines the animal has received
        string additionalInfo; // Additional metadata about the animal
        address addedBy; // Address of the user who added the animal
        uint256 timestamp; // Time when the animal was added
    }


     uint256 private _nextId;
    // Mapping to store animals by their unique ID
    mapping(uint256 => Animal) public animals;

    // Array to store all animal IDs for iteration
    uint256[] public animalIds;

    // Event to notify when a new animal is added
    event AnimalAdded(
    uint256 indexed id,
    string name, 
    string species, 
    uint256 age, 
    string ownerName,
    string ownerPhone,
    string ownerAddress,
    string shelterName,
    string gender,
    uint32 weight,
    uint32 height,
    string illnesses,
    string vaccines,
    address indexed addedBy);


    constructor() {
        _nextId = 1; // Initialize the counter
    }
    /**
     * @dev Adds a new animal to the tracking system.
     * @param _name The name of the animal.
     * @param _species The species of the animal.
     * @param _age The age of the animal.
     * @param _ownerName The name of the owner.
     * @param _ownerPhone The phone number of the owner.
     * @param _ownerAddress The address of the owner.
     * @param _shelterName The name of the shelter.
     * @param _gender Gender of the animal.
     * @param _weight Weight of the animal in kg.
     * @param _height Height of the animal in cm.
     * @param _illnesses List of illnesses the animal has.
     * @param _vaccines List of vaccines the animal has received.
     * @param _additionalInfo Additional metadata about the animal.
     */
    function addAnimal(
        string memory _name,
        string memory _species,
        uint256 _age,
        string memory _ownerName,
        string memory _ownerPhone,
        string memory _ownerAddress,
        string memory _shelterName,
        string memory _gender,
        uint32 _weight,
        uint32 _height,
        string memory _illnesses,
        string memory _vaccines,
        string memory _additionalInfo
    ) public {
        uint256 animalId = _nextId;

        // Create a new animal record
        animals[animalId] = Animal({
            id: animalId,
            name: _name,
            species: _species,
            age: _age,
            ownerName: _ownerName,
            ownerPhone: _ownerPhone,
            ownerAddress: _ownerAddress,
            shelterName: _shelterName,
            gender: _gender,
            weight: _weight,
            height: _height,
            illnesses: _illnesses,
            vaccines: _vaccines,
            additionalInfo: _additionalInfo,
            addedBy: msg.sender,
            timestamp: block.timestamp
        });
        
        animalIds.push(animalId);

        // Emit an event for the addition of the new animal
        emit AnimalAdded(animalId,
         _name,
         _species, 
         _age,
        _ownerName,
        _ownerPhone,
        _ownerAddress,
        _shelterName,
        _gender,
        _weight,
        _height,
        _illnesses,
        _vaccines,
         msg.sender);
        _nextId++; // Increment the counter for the next ID
    }

   
    function getAnimalCount() public view returns (uint256) {
        return animalIds.length;
    }
    
    function getNextId() public view returns (uint256) {
        return _nextId;
    }

    /**
     * @dev Retrieves an animal's details by its ID.
     * @param animalId The unique identifier for the animal.
     * @return The animal's details.
     */
    function getAnimal(uint256 animalId) public view returns (Animal memory) {
        require(animals[animalId].id != 0, "Animal not found");
        return animals[animalId];
    }
}

# Modifiers

## Visibilities

- public
- internal

## State mutability

- view
- pure
- payable

```sol
pragma solidity 0.5.1;

contract MyContract {
    uint256 public peopleCount = 0;
    mapping(uint == Person) public people;


    struct Person {
        uint  id;
        string _firstName;
        string _lastName;
    }

    function addPerson(string memory _firstName, string memory _lastName) public {
        people(peopleCount) = Person(peopleCount, _firstName, _lastName);
    }
    function incrementCount() internal {
        peopleCount += 1;
    }
}
```

## Custom Modifiers

```sol
pragma solidity 0.5.1;

contract MyContract {
    uint256 public peopleCount = 0;
    mapping(uint == Person) public people;

    address owner; // An address/ account on the network

    modifier onlyOwner() {
        require(msg.sender == owner);
        // msg object holds meta data about the smart contract
        // msg.sender tells us the person calling the function in the contract
        // The require function makes sure that the expression in it evaluates to true;
    }

    struct Person {
        uint  id;
        string _firstName;
        string _lastName;
    }
    constructor () public {
        owner = msg.sender;
    }
    function addPerson(string memory _firstName, string memory _lastName) public onlyOwner {
        people(peopleCount) = Person(peopleCount, _firstName, _lastName);
    }
    function incrementCount() internal {
        peopleCount += 1;
    }
}
```

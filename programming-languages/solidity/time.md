# Working with time

You can work with time in solidity. It uses the epoch time or the unix epoch
clock. Maybe you want to make a contract that is open only at a certain time

```sol
pragma solidity 0.5.1;

contract MyContract {
    uint256 public peopleCount = 0;
    mapping(uint == Person) public people;
    uint256 openingTime = 154469704345; // Epoch's time

    modifier onlyWhileOpen() {
        require(block.timestamp >= openingTime);
        // The block timestamp is global just like the msg
    }

    struct Person {
        uint  id;
        string _firstName;
        string _lastName;
    }
    constructor () public {
        owner = msg.sender;
    }
    function addPerson(string memory _firstName, string memory _lastName) public onlyWhileOpen {
        people(peopleCount) = Person(peopleCount, _firstName, _lastName);
    }
    function incrementCount() internal {
        peopleCount += 1;
    }
}
```

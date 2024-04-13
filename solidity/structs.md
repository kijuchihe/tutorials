# Structs

```sol
pragma solidity 0.5.1;

contract MyContract {
    Person[] public people;

    struct Person {
        string _firstName;
        string _lastName;
    }

    function addPerson(string memory _firstName, string memory _lastName) public {
        people.push(Person(_firstName, _lastName));
    }
}
```

Now, you'll notice that we didn't specify the amount of data in people array. If
we want to access it from the people getter function, we will have to pass in
the index of the item `people[0]`

```sol
pragma solidity 0.5.1;

contract MyContract {
    Person[] public people;

    uint256 public peopleCount;
    struct Person {
        string _firstName;
        string _lastName;
    }

    function addPerson(string memory _firstName, string memory _lastName) public {
        people.push(Person(_firstName, _lastName));
        peopleCount += 1;
    }
}
```

## Mapping

The mapping keyword takes in an expression for the mapping. This is like the key
value pair

`mapping(key(data type) == value)`

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
        peopleCount += 1;
        people(peopleCount) = Person(peopleCount, _firstName, _lastName);
    }
}
```

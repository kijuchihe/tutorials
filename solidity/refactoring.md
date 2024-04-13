# Refactoring our Code

## Removing the getter function

Solidity actually has a getter function for our global variables. We just need
to declare the variable as public;

### Former code

```sol
pragma solidity ^0.5.1;

contract myContract {
    string value; //This value is a global variable in this contract
    // It will be stored on the blockchain

    constructor () public {
        value = "my_value"
    }

    function get() public view returns(string memory) {
        return value;
    }

    function set(string memory _value) public {
        value = _value;
    }
}
```

### New code

```sol
pragma solidity ^0.5.1;

contract myContract {
    string public value;

    constructor () public {
        value = "my_value"
    }

    function set(string memory _value) public {
        value = _value;
    }
}
```

## Setting Default Value

Even though our constructor function can be really helpful, there's no need if
we just want to define a variable

### Former Code

```sol
pragma solidity ^0.5.1;

contract myContract {
    string public value;

    constructor () public {
        value = "my_value"
    }

    function set(string memory _value) public {
        value = _value;
    }
}
```

### New Code

```sol
pragma solidity ^0.5.1;

contract myContract {
    string public value = "myValue";

    function set(string memory _value) public {
        value = _value;
    }
}
```

## Constants

Constants are set if you don't want your state (global) variables to change

### Former Code Without Constants

```sol
pragma solidity ^0.5.1;

contract myContract {
    string public value;

    function set(string memory _value) public {
        value = _value;
    }
}
```

### New Code with Constants

```sol
pragma solidity ^0.5.1;

contract myContract {
    string public constant value = "myValue";

    // function set(string memory _value) public {
    //     value = _value;
    // }
    // That set function has to be removed since we can't change the value now
}
```

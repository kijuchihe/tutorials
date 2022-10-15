# Data Types

```sol
pragma solidity ^0.5.1;

contract myContract {
    string public constant value = "myValue";
    bool public myBool = true;
    int public myInt = -1;
    uint public myUint = 1;
}
```

## Specifying the byte size of the data types

```sol
pragma solidity ^0.5.1;

contract myContract {
    int public myInt = -1;
    uint public myUint = 1;
    uint8 public muUint8 = 8;
    uint256 public muUint256 = 99999;
}
```

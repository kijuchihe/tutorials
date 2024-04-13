# Introduction to solidity

According to the docs, solidity is a **_contract oriented_**, high-level
programming language for implementing smart contracts. It was influenced bt C++,
Python and JavaScript and is designed to target the Ethereum Virtual Machine
(EVM)

Solidity Files have the file extension of **.sol**.

The best way to start writing solidity is on the remix website,
<https://remix.ehereum.org>

## First File

> myContract.sol

```sol
pragma solidity ^0.4.24; // Declaring the version of solidity
```

## What is a smart contract?

A smart contract is code that gets executed on the blockchain (ethereum in this
case, since we use solidity programming language).

The smart contract is like a micro service on the web that will be accessible to
everybody on the blockchain. They'll be able to use it and work with it, read
and write data with it. It's not just a class or an object. It's something that
is publicly accessible

```sol
pragma solidity ^0.4.24

contract myContract {
    string value; //This value is a global variable in this contract
    // It will be stored on the blockchain

    // function get() {
    //     return value;
    // }

    function get() public returns(string) { //The public tells solidity that the function in this smart contract
    // Can be called by anyone who has access to the contract.
    // We are therefore making the visibility to public
        return value;
    }
}
```

> In the new versions of solidity, if you are not going to change a value, when
> creating a function to return that value, we should use the **_view_** keyword
> on the function

```sol
pragma solidity ^0.4.24

contract myContract {
    string value; //This value is a global variable in this contract
    // It will be stored on the blockchain

    // function get() {
    //     return value;
    // }

    function get() public view returns(string) {
        return value;
    }
}
```

## Setting functions

```sol
pragma solidity ^0.4.24

contract myContract {
    string value; //This value is a global variable in this contract
    // It will be stored on the blockchain

    // function get() {
    //     return value;
    // }

    function get() public view returns(string) {
        return value;
    }

    function set(string _value) public {
        value = _value;
    }
}
```

## Constructor Functions

These are functions that will be called when the smart contract is instantiated
for creating a new contract

```sol
pragma solidity ^0.4.24

contract myContract {
    string value; //This value is a global variable in this contract
    // It will be stored on the blockchain

    constructor () public {
        value = "my_value"
    }

    function get() public view returns(string) {
        return value;
    }

    function set(string _value) public {
        value = _value;
    }
}
```

## Further modifications

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

Notice the memory keyword that was added

## Understanding

The ethereum blockchain is made up of bundles of records that are chained
together into blocks that make up the blockchain. Usually, each transaction has
a transaction receipt

# Blockchain

## Keywords used in the blockchain

- gas: This refers to the cost necessary to perform a transaction on the network

## Properties

- Traceability: All transactions on recorded on the blockchain are traceable
- Immutability: All transactions recorded on the blockchain are immutable

Because of the above properties, the blockchain is very good for storing
immutable data. For example, suppose you have a will and you want to ensure that
its content is unaltered after you have passed on. You can perform a hash on the
will and store the hash of the will on the blockchain. Incase there is any doubt
on the authenticity of the will, a check can be made on the blockchain to verify
that the hash of the will matches that stored earlier on the blockchain

Another use-case for the blockchain is in intellectual property protection.
Instead of storing hashes of a will, you can store hashes of maybe a book you
wrote or the lyrics of your song. If you feel that your book has been copied
illegally, he/she can use the blockchain as the proof of existence of his
original work.

Now, to store data on the blockchain, we use smart contracts

A smart contract is basically a program stored on the blockchain that runs on
the blockchain when specific conditions predetermined or predefined are met. A
smart contract allows you to store data on the blockchain as well as perform
transactions on accounts on the blockchain

When we say storing data, it usually means storing hashes. This is because
storing data on the blockchain can be very expensive. A definite value can't be
given for the price but as at early 2020, the price of storing 1MB of data was
about $17,000(US)

## Smart Contract Example

Writing a smart contract to allow book makers to store hashes of their books on
the ethereum blockchain

You can use the remix IDE at <https://remix.ethereum.org/>

> copyrights.sol

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

contract ProofOfExistence {
    // This sets the owner of the smart contract at deployment
    address owner = msg.sender;
    // Store the hash of the strings ---
    mapping (bytes32 => bool) private proofs;

    // Store a proof of existence in the contract state
    // Private functions are going to be called within the function and not by an external user
    function storeProof(bytes32 _proof) private {
        // Use the hash as the key and we set the value to true
        proofs[_proof] = true;
    }

    // Calculate and store the proof for a document
    // Public functions (one with the public post fix can be called by anyone accessing the contract
    // The memory keyword tells solidity to create a temporary storage to store the variable
    // It also reduces the cost of using the contract
    function notarize(string memory _document) public {
        require(msg.sender == owner, "Only the owner of this contract can notarize a string")
        // call storeProof() withe the hash of the string
        storeProof(proofFor(_document));
    }

    // Helper function to get a document's sha256
    // Takes in a string and returns the hash of the string

    // A pure function means that it does not interact with the state variables
    // That is, it neither reads nor writes
    function proofFor(string memory _document) private pure returns (bytes32) {
        // Converts the string to a bytes array and then hashes it
        return sha256(bytes(_document));
    }

    // Check if a document has been notarized
    function checkDocument(string memory _document) public view returns (bool) {
        // Use the hash of the string and check the proofs mapping object
        return proofs[proofFor(_document)];
    }
}
```

> Now, making the above to accept payment (payment to check whether the value is
> valid)

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

contract ProofOfExistence {
    address owner = msg.sender;
    mapping (bytes32 => bool) private proofs;

    //Define an event
    event Document(address _from, string _text, bool _valid)

    function storeProof(bytes32 _proof) private {
        proofs[_proof] = true;
    }

    function notarize(string memory _document) public {
        require(msg.sender == owner, "Only the owner of this contract can notarize a string")
        storeProof(proofFor(_document));
    }

    function proofFor(string memory _document) private pure returns (bytes32) {
        return sha256(bytes(_document));
    }

    // Change the mutability state from view to payable
    // The payable tells solidity that the function requires payment from the caller of the function
    // Payable also takes a gas fee, hence it makes the function a transaction
    function checkDocument(string memory _document) public payable returns (bool) {
        // msg.value represents the amount of data sent to the function
        // wei is a unit
        // Ether is another unit that can be used
        require(msg.value == 100 wei, "This service requires a fee of 100wei");


        // Transfer the money to the owner
        payable(owner).transfer(msg.value);
        // the transfer method is very important
        // This is because, ethers sent to the contract remain in the contract.
        // You must manually transfer these funds to an external account
        // Else, the ethers will be stuck in that smart contract
        // There's just no way to bring it out

        // Since this function is now a transaction, returning data won't return data to the caller directly
        // To return data to the caller, we use events
        emit Document(msg.sender, _document, proofs[proofFor(_document)]);
        return proofs[proofFor(_document)];
    }
}
```

> From the above, we can say the following

- view and pure function postfixes are known as state mutability og a function.
  Both pure and view functions do not incur gas fees when called i.e. they do
  not have any charge for the transaction when called

## This to note on the remix ide

When working with the remix IDE, having deployed your smart contract, or if
interacting with a deployed smart contract

- Orange buttons: Indicate that calling the function requires you to pay a gas
  fee
- Blue buttons: indicate that calling the function is free
- Red buttons: indicate that calling the function requires a gas fee in addition
  to other amounts needed by the contract

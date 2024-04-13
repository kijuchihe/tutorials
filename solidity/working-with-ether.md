# Working with ether

```sol
pragma solidity 0.5.1;

contract MyContract {
    mapping(address == uint) public balances;
    address payable wallet;

    constructor (address _wallet) public {
        wallet = _wallet
    }
    function buyToken() public payable {
        // Buy a token
        balances[msg.sender] += 1;
        wallet.transfer(msg.value);
        // Send ether to a wallet
    }
}
```

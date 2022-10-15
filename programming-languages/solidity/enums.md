# Enums

An enum is an enumerated list that allows us to keep track of a set list of
things in our contract

```sol
contract MyContract {
    enum State {Waiting, Ready, Activate}
    State public state;
    // Enums are 0 indexed

    constructor() public {
        state = State.Waiting;
    }

    function activate() public {
        state = State.Active
    }

    function isActive() public view returns(bool) {
        return state == State.Active
    }
}
```

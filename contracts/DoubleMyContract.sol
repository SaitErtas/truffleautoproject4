// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.9.0;

contract DoubleMyContract {
    uint256 public balance; //State variable
    uint256 public balance1; //State variable

    // call this function to send a response
    function SendResponse(uint256 _amount) public {
        balance = _amount * 2;
        balance1 = 50;
    }
}

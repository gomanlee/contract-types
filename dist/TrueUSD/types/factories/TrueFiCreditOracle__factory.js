"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrueFiCreditOracle__factory = void 0;
var ethers_1 = require("ethers");
var TrueFiCreditOracle__factory = /** @class */ (function (_super) {
    __extends(TrueFiCreditOracle__factory, _super);
    function TrueFiCreditOracle__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    TrueFiCreditOracle__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    TrueFiCreditOracle__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    TrueFiCreditOracle__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TrueFiCreditOracle__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TrueFiCreditOracle__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return TrueFiCreditOracle__factory;
}(ethers_1.ContractFactory));
exports.TrueFiCreditOracle__factory = TrueFiCreditOracle__factory;
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "newCreditUpdatePeriod",
                type: "uint256",
            },
        ],
        name: "CreditUpdatePeriodChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        name: "EligibleUntilTimeChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "newGracePeriod",
                type: "uint256",
            },
        ],
        name: "GracePeriodChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "newManager",
                type: "address",
            },
        ],
        name: "ManagerChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newMaxBorrowerLimit",
                type: "uint256",
            },
        ],
        name: "MaxBorrowerLimitChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint8",
                name: "newScore",
                type: "uint8",
            },
        ],
        name: "ScoreChanged",
        type: "event",
    },
    {
        inputs: [],
        name: "claimOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "creditUpdatePeriod",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "eligibleUntilTime",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "gracePeriod",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "isInitialized",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "manager",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "maxBorrowerLimit",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "pendingOwner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "score",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "newCreditUpdatePeriod",
                type: "uint256",
            },
        ],
        name: "setCreditUpdatePeriod",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
        ],
        name: "setEligibleForDuration",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "newGracePeriod",
                type: "uint256",
            },
        ],
        name: "setGracePeriod",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "setIneligible",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newManager",
                type: "address",
            },
        ],
        name: "setManager",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "newMaxBorrowerLimit",
                type: "uint256",
            },
        ],
        name: "setMaxBorrowerLimit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "setOnHold",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "uint8",
                name: "newScore",
                type: "uint8",
            },
        ],
        name: "setScore",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "status",
        outputs: [
            {
                internalType: "enum ITrueFiCreditOracle.Status",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b506114e8806100206000396000f3fe608060405234801561001057600080fd5b50600436106101775760003560e01c80638129fc1c116100d8578063da3b539d1161008c578063e30c397811610066578063e30c39781461046f578063f2f6596014610477578063f2fde38b1461049457610177565b8063da3b539d146103e3578063db2ebdad14610416578063df73f94b1461045257610177565b8063a06db7dc116100bd578063a06db7dc14610375578063cee249f61461037d578063d0ebdbe7146103b057610177565b80638129fc1c146103655780638da5cb5b1461036d57610177565b80634e71e0c81161012f578063639d68bb11610114578063639d68bb14610292578063645b8b1b146102c5578063776f38431461031c57610177565b80634e71e0c8146102515780635446951c1461025957610177565b80633ac4a841116101605780633ac4a841146101b25780634519cc72146101ed578063481c6a751461022057610177565b80631c5691a71461017c578063392e53cd14610196575b600080fd5b6101846104c7565b60408051918252519081900360200190f35b61019e6104cd565b604080519115158252519081900360200190f35b6101eb600480360360408110156101c857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356104d6565b005b6101eb6004803603602081101561020357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610584565b610228610631565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101eb61064d565b6101eb6004803603604081101561026f57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610755565b610184600480360360208110156102a857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610870565b6102f8600480360360208110156102db57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610882565b6040518082600281111561030857fe5b60ff16815260200191505060405180910390f35b61034f6004803603602081101561033257600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610908565b6040805160ff9092168252519081900360200190f35b6101eb61091d565b610228610a71565b610184610a8d565b6101eb6004803603602081101561039357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610a93565b6101eb600480360360208110156103c657600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610b2e565b610184600480360360208110156103f957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610ca4565b6101eb6004803603604081101561042c57600080fd5b50803573ffffffffffffffffffffffffffffffffffffffff16906020013560ff16610cb6565b6101eb6004803603602081101561046857600080fd5b5035610e47565b610228610f13565b6101eb6004803603602081101561048d57600080fd5b5035610f2f565b6101eb600480360360208110156104aa57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610ffb565b60395481565b60005460ff1690565b6104de6110d3565b60335473ffffffffffffffffffffffffffffffffffffffff90811691161461056757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6105808261057b428463ffffffff6110d716565b611152565b5050565b61058c6110d3565b60335473ffffffffffffffffffffffffffffffffffffffff90811691161461061557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b61062e8161057b603a54426111b390919063ffffffff16565b50565b60375473ffffffffffffffffffffffffffffffffffffffff1681565b60345473ffffffffffffffffffffffffffffffffffffffff1633146106bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806114516028913960400191505060405180910390fd5b60345460335460405173ffffffffffffffffffffffffffffffffffffffff92831692909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a360348054603380547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff841617909155169055565b60375473ffffffffffffffffffffffffffffffffffffffff1633146107c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d8152602001806113f6602d913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821660009081526038602052604090205460395461080f91849161057b919061080a90429063ffffffff6110d716565b61122a565b73ffffffffffffffffffffffffffffffffffffffff8216600081815260366020908152604091829020849055815184815291517f041df3cbbbe58c3698f3e86992fab0d8dae4621dad126a19179b0830f4644cd69281900390910190a25050565b60366020526000908152604090205481565b73ffffffffffffffffffffffffffffffffffffffff81166000908152603860205260408120544210156108b757506000610903565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260386020526040902054603a546108f190429063ffffffff6111b316565b10156108ff57506001610903565b5060025b919050565b60356020526000908152604090205460ff1681565b600054610100900460ff16806109365750610936611241565b80610944575060005460ff16155b610999576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611423602e913960400191505060405180910390fd5b600054610100900460ff161580156109ff57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b610a0833611247565b603780547fffffffffffffffffffffffff000000000000000000000000000000000000000016331790556228de806039556203f480603a55801561062e57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b60335473ffffffffffffffffffffffffffffffffffffffff1690565b603a5481565b610a9b6110d3565b60335473ffffffffffffffffffffffffffffffffffffffff908116911614610b2457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b61062e8142611152565b610b366110d3565b60335473ffffffffffffffffffffffffffffffffffffffff908116911614610bbf57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116610c2b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a815260200180611479603a913960400191505060405180910390fd5b6037805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff0000000000000000000000000000000000000000909116811790915560408051918252517f198db6e425fb8aafd1823c6ca50be2d51e5764571a5ae0f0f21c6812e45def0b9181900360200190a150565b60386020526000908152604090205481565b60375473ffffffffffffffffffffffffffffffffffffffff163314610d26576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d8152602001806113f6602d913960400191505060405180910390fd5b60008160ff1611610d82576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806113ca602c913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216600090815260386020526040902054603954610dc791849161057b919061080a90429063ffffffff6110d716565b73ffffffffffffffffffffffffffffffffffffffff821660008181526035602052604080822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff861690811790915590519092917f6f738e5caa984202ad1f23dac3912cbecc4635cab65476ab4b3a6b433706227691a35050565b610e4f6110d3565b60335473ffffffffffffffffffffffffffffffffffffffff908116911614610ed857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60398190556040805182815290517f5f93a7064b8ab88bb1e52d522e0d5569ce06990ce364b583caa8acac17971bb29181900360200190a150565b60345473ffffffffffffffffffffffffffffffffffffffff1690565b610f376110d3565b60335473ffffffffffffffffffffffffffffffffffffffff908116911614610fc057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b603a8190556040805182815290517fcc2c34a1adf0911114053f75b51b2b1f8fc9ef9e25f0a5f12f210032b5b0a1b29181900360200190a150565b6110036110d3565b60335473ffffffffffffffffffffffffffffffffffffffff90811691161461108c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b603480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b3390565b60008282018381101561114b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b73ffffffffffffffffffffffffffffffffffffffff8216600081815260386020908152604091829020849055815184815291517fdeeb0f8014cf2286e8760667c4f4aeb69feb090ba7ef0502c26abf622dcaa9f69281900390910190a25050565b60008282111561122457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b60008183101561123a578161114b565b5090919050565b303b1590565b600054610100900460ff16806112605750611260611241565b8061126e575060005460ff16155b6112c3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611423602e913960400191505060405180910390fd5b600054610100900460ff1615801561132957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b603380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff84169081179091556040516000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3801561058057600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055505056fe5472756546694372656469744f7261636c653a2053636f72652063616e6e6f742062652073657420746f20305472756546694372656469744f7261636c653a2043616c6c6572206973206e6f7420746865206d616e61676572436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a65644f776e61626c653a2063616c6c6572206973206e6f74207468652070656e64696e67206f776e65725472756546694372656469744f7261636c653a2043616e6e6f7420736574206e6577206d616e6167657220746f207a65726f2061646472657373a26469706673582212200325f2d4f1f29a143a3bb3fb1848cab47b34a223f187844eece2ebd1d6d535c764736f6c634300060a0033";
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
exports.MockPoolFactory__factory = void 0;
var ethers_1 = require("ethers");
var MockPoolFactory__factory = /** @class */ (function (_super) {
    __extends(MockPoolFactory__factory, _super);
    function MockPoolFactory__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    MockPoolFactory__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    MockPoolFactory__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    MockPoolFactory__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    MockPoolFactory__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    MockPoolFactory__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return MockPoolFactory__factory;
}(ethers_1.ContractFactory));
exports.MockPoolFactory__factory = MockPoolFactory__factory;
var _abi = [
    {
        inputs: [],
        name: "getSupportedPools",
        outputs: [
            {
                internalType: "contract ITrueFiPool2[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ITrueFiPool2",
                name: "pool",
                type: "address",
            },
        ],
        name: "isSupportedPool",
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
        inputs: [
            {
                internalType: "contract ITrueFiPool2",
                name: "_pool",
                type: "address",
            },
        ],
        name: "supportPool",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "supportedPools",
        outputs: [
            {
                internalType: "contract ITrueFiPool2",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "supportedPoolsTVL",
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
];
var _bytecode = "0x608060405234801561001057600080fd5b506105a4806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063ec2b4e3611610050578063ec2b4e36146100f9578063fb3f90aa14610140578063fde94d1e1461018657610067565b80632bc75d331461006c5780638b450aba146100a1575b600080fd5b61009f6004803603602081101561008257600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166101a0565b005b6100a9610214565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156100e55781810151838201526020016100cd565b505050509050019250505060405180910390f35b61012c6004803603602081101561010f57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610283565b604080519115158252519081900360200190f35b61015d6004803603602081101561015657600080fd5b503561029e565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61018e6102d2565b60408051918252519081900360200190f35b600080546001810182559080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6060600080548060200260200160405190810160405280929190818152602001828054801561027957602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff16815260019091019060200180831161024e575b5050505050905090565b73ffffffffffffffffffffffffffffffffffffffff16151590565b600081815481106102ab57fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b600080805b6000548110156104ed576104e3600082815481106102f157fe5b60009182526020918290200154604080517f7dc0d1d0000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff90921692637dc0d1d092600480840193829003018186803b15801561036057600080fd5b505afa158015610374573d6000803e3d6000fd5b505050506040513d602081101561038a57600080fd5b50516000805473ffffffffffffffffffffffffffffffffffffffff90921691632cd4aaba9190859081106103ba57fe5b60009182526020918290200154604080517fb8615071000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff9092169263b861507192600480840193829003018186803b15801561042957600080fd5b505afa15801561043d573d6000803e3d6000fd5b505050506040513d602081101561045357600080fd5b5051604080517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b1681526004810192909252516024808301926020929190829003018186803b1580156104aa57600080fd5b505afa1580156104be573d6000803e3d6000fd5b505050506040513d60208110156104d457600080fd5b5051839063ffffffff6104f316565b91506001016102d7565b50905090565b60008282018381101561056757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b939250505056fea26469706673582212209d2319a54a0731fe9b188059cfe22f110c65d27061c59a2b679f5faf33b68a8b64736f6c634300060a0033";

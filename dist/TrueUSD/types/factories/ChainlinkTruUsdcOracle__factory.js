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
exports.ChainlinkTruUsdcOracle__factory = void 0;
var ethers_1 = require("ethers");
var ChainlinkTruUsdcOracle__factory = /** @class */ (function (_super) {
    __extends(ChainlinkTruUsdcOracle__factory, _super);
    function ChainlinkTruUsdcOracle__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    ChainlinkTruUsdcOracle__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    ChainlinkTruUsdcOracle__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    ChainlinkTruUsdcOracle__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ChainlinkTruUsdcOracle__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ChainlinkTruUsdcOracle__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return ChainlinkTruUsdcOracle__factory;
}(ethers_1.ContractFactory));
exports.ChainlinkTruUsdcOracle__factory = ChainlinkTruUsdcOracle__factory;
var _abi = [
    {
        inputs: [],
        name: "getLatestTruPrice",
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
        name: "token",
        outputs: [
            {
                internalType: "contract IERC20WithDecimals",
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
                internalType: "uint256",
                name: "tokenAmount",
                type: "uint256",
            },
        ],
        name: "tokenToTru",
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
                internalType: "uint256",
                name: "tokenAmount",
                type: "uint256",
            },
        ],
        name: "tokenToUsd",
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
                internalType: "uint256",
                name: "truAmount",
                type: "uint256",
            },
        ],
        name: "truToToken",
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
var _bytecode = "0x608060405234801561001057600080fd5b50600080546001600160a01b0319167326929b85fe284eeab939831002e1928183a10fb11790556104d5806100466000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80632cb90b4d116100505780632cb90b4d146100a35780632cd4aaba146100c0578063fc0c546a146100dd57610067565b806320fa6dba1461006c578063256a99051461009b575b600080fd5b6100896004803603602081101561008257600080fd5b503561010e565b60408051918252519081900360200190f35b6100896101f7565b610089600480360360208110156100b957600080fd5b50356102a2565b610089600480360360208110156100d657600080fd5b50356102d4565b6100e56102f1565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6000806101196102f1565b73ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561015e57600080fd5b505afa158015610172573d6000803e3d6000fd5b505050506040513d602081101561018857600080fd5b50519050600061019b600a83900a6102d4565b905060006101b76101aa6101f7565b869063ffffffff61030916565b90506101ee826101e2600a86900a6101d685606463ffffffff61030916565b9063ffffffff61030916565b9063ffffffff61037c16565b95945050505050565b60008054604080517ffeaf968c0000000000000000000000000000000000000000000000000000000081529051839273ffffffffffffffffffffffffffffffffffffffff169163feaf968c9160048083019260a0929190829003018186803b15801561026257600080fd5b505afa158015610276573d6000803e3d6000fd5b505050506040513d60a081101561028c57600080fd5b5060200151905061029c816103fd565b91505090565b6000806102ae836102d4565b90506102cd60646101e26102c06101f7565b849063ffffffff61037c16565b9392505050565b60006102eb8264e8d4a5100063ffffffff61030916565b92915050565b73a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4890565b600082610318575060006102eb565b8282028284828161032557fe5b04146102cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061045d6021913960400191505060405180910390fd5b60008082116103ec57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b8183816103f557fe5b049392505050565b600080821215610458576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061047e6022913960400191505060405180910390fd5b509056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77436861696e6c696e6b5472754f7261636c653a2075696e7420756e646572666c6f77a26469706673582212202eb1eb763e5e7114abf76da12691920343e8ca8ab7a3be001895668998508a9964736f6c634300060a0033";

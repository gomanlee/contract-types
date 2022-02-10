"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IERC3156FlashBorrower__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "initiator",
                type: "address",
            },
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "fee",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "onFlashLoan",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var IERC3156FlashBorrower__factory = /** @class */ (function () {
    function IERC3156FlashBorrower__factory() {
    }
    IERC3156FlashBorrower__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IERC3156FlashBorrower__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IERC3156FlashBorrower__factory.abi = _abi;
    return IERC3156FlashBorrower__factory;
}());
exports.IERC3156FlashBorrower__factory = IERC3156FlashBorrower__factory;

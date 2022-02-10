"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IERC1271__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "hash",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "isValidSignature",
        outputs: [
            {
                internalType: "bytes4",
                name: "magicValue",
                type: "bytes4",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var IERC1271__factory = /** @class */ (function () {
    function IERC1271__factory() {
    }
    IERC1271__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IERC1271__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IERC1271__factory.abi = _abi;
    return IERC1271__factory;
}());
exports.IERC1271__factory = IERC1271__factory;
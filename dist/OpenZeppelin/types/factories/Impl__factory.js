"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Impl__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        name: "version",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
var Impl__factory = /** @class */ (function () {
    function Impl__factory() {
    }
    Impl__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Impl__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Impl__factory.abi = _abi;
    return Impl__factory;
}());
exports.Impl__factory = Impl__factory;
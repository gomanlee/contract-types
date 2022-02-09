"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VatLike__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "dai",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "hope",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
];
var VatLike__factory = /** @class */ (function () {
    function VatLike__factory() {
    }
    VatLike__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    VatLike__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    VatLike__factory.abi = _abi;
    return VatLike__factory;
}());
exports.VatLike__factory = VatLike__factory;
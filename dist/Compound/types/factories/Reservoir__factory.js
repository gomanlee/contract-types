"use strict";
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
exports.Reservoir__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "dripRate_",
                type: "uint256",
            },
            {
                internalType: "contract EIP20Interface",
                name: "token_",
                type: "address",
            },
            {
                internalType: "address",
                name: "target_",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        constant: false,
        inputs: [],
        name: "drip",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "dripRate",
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
        constant: true,
        inputs: [],
        name: "dripStart",
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
        constant: true,
        inputs: [],
        name: "dripped",
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
        constant: true,
        inputs: [],
        name: "target",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "token",
        outputs: [
            {
                internalType: "contract EIP20Interface",
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b5060405161052c38038061052c8339818101604052606081101561003357600080fd5b5080516020820151604090920151436000908155600192909255600280546001600160a01b039485166001600160a01b031991821617909155600380549490921693169290921790915560045561049d8061008f6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806388a91a8a1461006757806395f632b3146100815780639f678cca14610089578063d326159214610091578063d4b8399214610099578063fc0c546a146100bd575b600080fd5b61006f6100c5565b60408051918252519081900360200190f35b61006f6100cb565b61006f6100d1565b61006f6102c9565b6100a16102cf565b604080516001600160a01b039092168252519081900360200190f35b6100a16102de565b60005481565b60045481565b600254604080516370a0823160e01b815230600482015290516000926001600160a01b031691839183916370a08231916024808301926020929190829003018186803b15801561012057600080fd5b505afa158015610134573d6000803e3d6000fd5b505050506040513d602081101561014a57600080fd5b50516001546000805460045460035460408051808201909152601281527164726970546f74616c206f766572666c6f7760701b60208201529596509394919390926001600160a01b03909116914391906101a9908790878503906102ed565b905060006101e382866040518060400160405280601381526020017264656c74614472697020756e646572666c6f7760681b8152506103a0565b905060006101f189836103fa565b9050600061022487836040518060400160405280600c81526020016b1d185d5d1bdb1bd9da58d85b60a21b815250610413565b9050806004819055508a6001600160a01b031663a9059cbb87846040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050602060405180830381600087803b15801561028d57600080fd5b505af11580156102a1573d6000803e3d6000fd5b505050506040513d60208110156102b757600080fd5b50919b50505050505050505050505090565b60015481565b6003546001600160a01b031681565b6002546001600160a01b031681565b6000836102fc57506000610399565b8383028385828161030957fe5b041483906103955760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561035a578181015183820152602001610342565b50505050905090810190601f1680156103875780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5090505b9392505050565b600081848411156103f25760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561035a578181015183820152602001610342565b505050900390565b600081831161040a57508161040d565b50805b92915050565b600083830182858210156103955760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561035a57818101518382015260200161034256fea265627a7a72315820d87d5d5c3f0b0f1b255e4692dbd20ec09c4ed32bbda3eddd6cb66f78b6138a4d64736f6c63430005100032";
var isSuperArgs = function (xs) { return xs.length > 1; };
var Reservoir__factory = /** @class */ (function (_super) {
    __extends(Reservoir__factory, _super);
    function Reservoir__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        _this.contractName = "Reservoir";
        return _this;
    }
    Reservoir__factory.prototype.deploy = function (dripRate_, token_, target_, overrides) {
        return _super.prototype.deploy.call(this, dripRate_, token_, target_, overrides || {});
    };
    Reservoir__factory.prototype.getDeployTransaction = function (dripRate_, token_, target_, overrides) {
        return _super.prototype.getDeployTransaction.call(this, dripRate_, token_, target_, overrides || {});
    };
    Reservoir__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Reservoir__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Reservoir__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Reservoir__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Reservoir__factory.bytecode = _bytecode;
    Reservoir__factory.abi = _abi;
    return Reservoir__factory;
}(ethers_1.ContractFactory));
exports.Reservoir__factory = Reservoir__factory;

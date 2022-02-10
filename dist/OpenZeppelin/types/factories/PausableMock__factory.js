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
exports.PausableMock__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "Paused",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "Unpaused",
        type: "event",
    },
    {
        inputs: [],
        name: "count",
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
        name: "drasticMeasure",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "drasticMeasureTaken",
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
        name: "normalProcess",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "pause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "paused",
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
        name: "unpause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b5060008060006101000a81548160ff02191690831515021790555060008060016101000a81548160ff02191690831515021790555060006001819055506105b58061005c6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806376657b8e1161005b57806376657b8e146100c85780638456cb59146100e65780639958f045146100f0578063e7651d7a146100fa5761007d565b806306661abd146100825780633f4ba83a146100a05780635c975abb146100aa575b600080fd5b61008a610104565b6040516100979190610371565b60405180910390f35b6100a861010a565b005b6100b2610114565b6040516100bf91906103a7565b60405180910390f35b6100d061012a565b6040516100dd91906103a7565b60405180910390f35b6100ee61013d565b005b6100f8610147565b005b6101026101ab565b005b60015481565b61011261020d565b565b60008060009054906101000a900460ff16905090565b600060019054906101000a900460ff1681565b6101456102ae565b565b61014f610114565b61018e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101859061041f565b60405180910390fd5b6001600060016101000a81548160ff021916908315150217905550565b6101b3610114565b156101f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ea9061048b565b60405180910390fd5b60016000815480929190610206906104da565b9190505550565b610215610114565b610254576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161024b9061041f565b60405180910390fd5b60008060006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa610297610350565b6040516102a49190610564565b60405180910390a1565b6102b6610114565b156102f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ed9061048b565b60405180910390fd5b60016000806101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610339610350565b6040516103469190610564565b60405180910390a1565b600033905090565b6000819050919050565b61036b81610358565b82525050565b60006020820190506103866000830184610362565b92915050565b60008115159050919050565b6103a18161038c565b82525050565b60006020820190506103bc6000830184610398565b92915050565b600082825260208201905092915050565b7f5061757361626c653a206e6f7420706175736564000000000000000000000000600082015250565b60006104096014836103c2565b9150610414826103d3565b602082019050919050565b60006020820190508181036000830152610438816103fc565b9050919050565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b60006104756010836103c2565b91506104808261043f565b602082019050919050565b600060208201905081810360008301526104a481610468565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006104e582610358565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610518576105176104ab565b5b600182019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061054e82610523565b9050919050565b61055e81610543565b82525050565b60006020820190506105796000830184610555565b9291505056fea2646970667358221220e4ddafaea489615a0b2975de64d7fb990ff13d34d1e89a715520a9e4e209f20564736f6c63430008090033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var PausableMock__factory = /** @class */ (function (_super) {
    __extends(PausableMock__factory, _super);
    function PausableMock__factory() {
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
        _this.contractName = "PausableMock";
        return _this;
    }
    PausableMock__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    PausableMock__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    PausableMock__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    PausableMock__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    PausableMock__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    PausableMock__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    PausableMock__factory.bytecode = _bytecode;
    PausableMock__factory.abi = _abi;
    return PausableMock__factory;
}(ethers_1.ContractFactory));
exports.PausableMock__factory = PausableMock__factory;
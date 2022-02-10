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
exports.SafeMathMock__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        name: "addMemoryCheck",
        outputs: [
            {
                internalType: "uint256",
                name: "mem",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "divMemoryCheck",
        outputs: [
            {
                internalType: "uint256",
                name: "mem",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "a",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "b",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "errorMessage",
                type: "string",
            },
        ],
        name: "divWithMessage",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "a",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "b",
                type: "uint256",
            },
        ],
        name: "doAdd",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "a",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "b",
                type: "uint256",
            },
        ],
        name: "doDiv",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "a",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "b",
                type: "uint256",
            },
        ],
        name: "doMod",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "a",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "b",
                type: "uint256",
            },
        ],
        name: "doMul",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "a",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "b",
                type: "uint256",
            },
        ],
        name: "doSub",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "modMemoryCheck",
        outputs: [
            {
                internalType: "uint256",
                name: "mem",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "a",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "b",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "errorMessage",
                type: "string",
            },
        ],
        name: "modWithMessage",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "mulMemoryCheck",
        outputs: [
            {
                internalType: "uint256",
                name: "mem",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "subMemoryCheck",
        outputs: [
            {
                internalType: "uint256",
                name: "mem",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "a",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "b",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "errorMessage",
                type: "string",
            },
        ],
        name: "subWithMessage",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "a",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "b",
                type: "uint256",
            },
        ],
        name: "tryAdd",
        outputs: [
            {
                internalType: "bool",
                name: "flag",
                type: "bool",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "a",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "b",
                type: "uint256",
            },
        ],
        name: "tryDiv",
        outputs: [
            {
                internalType: "bool",
                name: "flag",
                type: "bool",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "a",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "b",
                type: "uint256",
            },
        ],
        name: "tryMod",
        outputs: [
            {
                internalType: "bool",
                name: "flag",
                type: "bool",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "a",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "b",
                type: "uint256",
            },
        ],
        name: "tryMul",
        outputs: [
            {
                internalType: "bool",
                name: "flag",
                type: "bool",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "a",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "b",
                type: "uint256",
            },
        ],
        name: "trySub",
        outputs: [
            {
                internalType: "bool",
                name: "flag",
                type: "bool",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50610e9e806100206000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80639f5cec89116100a2578063dcc721d211610071578063dcc721d21461035a578063fb1191981461038a578063fb24c860146103ba578063fb999ded146103d8578063fc0ce503146103f657610116565b80639f5cec89146102ab578063a155bd62146102db578063a29962b11461030b578063c460ae041461033c57610116565b80636f91e802116100e95780636f91e802146101dd578063736ecb18146101fb5780637e86d25c1461022c578063869f602f1461024a578063884557bf1461027a57610116565b80633449b5fb1461011b57806338dc08671461014b5780636281efa41461017c5780636c7ac637146101ad575b600080fd5b61013560048036038101906101309190610ab4565b610426565b6040516101429190610b32565b60405180910390f35b61016560048036038101906101609190610b4d565b61043c565b604051610173929190610ba8565b60405180910390f35b61019660048036038101906101919190610b4d565b610454565b6040516101a4929190610ba8565b60405180910390f35b6101c760048036038101906101c29190610b4d565b61046c565b6040516101d49190610b32565b60405180910390f35b6101e5610480565b6040516101f29190610b32565b60405180910390f35b61021560048036038101906102109190610b4d565b6104c0565b604051610223929190610ba8565b60405180910390f35b6102346104d8565b6040516102419190610b32565b60405180910390f35b610264600480360381019061025f9190610b4d565b610518565b6040516102719190610b32565b60405180910390f35b610294600480360381019061028f9190610b4d565b61052c565b6040516102a2929190610ba8565b60405180910390f35b6102c560048036038101906102c09190610ab4565b610544565b6040516102d29190610b32565b60405180910390f35b6102f560048036038101906102f09190610ab4565b61055a565b6040516103029190610b32565b60405180910390f35b61032560048036038101906103209190610b4d565b610570565b604051610333929190610ba8565b60405180910390f35b610344610588565b6040516103519190610b32565b60405180910390f35b610374600480360381019061036f9190610b4d565b6105c8565b6040516103819190610b32565b60405180910390f35b6103a4600480360381019061039f9190610b4d565b6105dc565b6040516103b19190610b32565b60405180910390f35b6103c26105f0565b6040516103cf9190610b32565b60405180910390f35b6103e0610630565b6040516103ed9190610b32565b60405180910390f35b610410600480360381019061040b9190610b4d565b610670565b60405161041d9190610b32565b60405180910390f35b6000610433848484610684565b90509392505050565b60008061044984846106e6565b915091509250929050565b600080610461848461071d565b915091509250929050565b60006104788383610771565b905092915050565b60008060209050604051915060005b818110156104b4576104a2600180610787565b50806104ad90610c00565b905061048f565b50816040510391505090565b6000806104cd848461079d565b915091509250929050565b60008060209050604051915060005b8181101561050c576104fa6001806107d4565b508061050590610c00565b90506104e7565b50816040510391505090565b60006105248383610787565b905092915050565b60008061053984846107ea565b915091509250929050565b6000610551848484610819565b90509392505050565b600061056784848461086e565b90509392505050565b60008061057d84846108d0565b915091509250929050565b60008060209050604051915060005b818110156105bc576105aa6001806108f8565b50806105b590610c00565b9050610597565b50816040510391505090565b60006105d4838361090e565b905092915050565b60006105e883836107d4565b905092915050565b60008060209050604051915060005b818110156106245761061260018061090e565b508061061d90610c00565b90506105ff565b50816040510391505090565b60008060209050604051915060005b8181101561066457610652600180610771565b508061065d90610c00565b905061063f565b50816040510391505090565b600061067c83836108f8565b905092915050565b600080831182906106cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c29190610cd1565b60405180910390fd5b508284816106dc576106db610cf3565b5b0490509392505050565b60008060008314156106fe5760008091509150610716565b60018385816107105761070f610cf3565b5b06915091505b9250929050565b600080600084141561073657600160009150915061076a565b600083850290508385828161074e5761074d610cf3565b5b041461076157600080925092505061076a565b60018192509250505b9250929050565b6000818361077f9190610d22565b905092915050565b600081836107959190610d56565b905092915050565b60008060008314156107b557600080915091506107cd565b60018385816107c7576107c6610cf3565b5b04915091505b9250929050565b600081836107e29190610d87565b905092915050565b6000806000838501905084811015610809576000809250925050610812565b60018192509250505b9250929050565b6000838311158290610861576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108589190610cd1565b60405180910390fd5b5082840390509392505050565b600080831182906108b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ac9190610cd1565b60405180910390fd5b508284816108c6576108c5610cf3565b5b0690509392505050565b600080838311156108e757600080915091506108f1565b6001838503915091505b9250929050565b600081836109069190610de1565b905092915050565b6000818361091c9190610e12565b905092915050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61094b81610938565b811461095657600080fd5b50565b60008135905061096881610942565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6109c182610978565b810181811067ffffffffffffffff821117156109e0576109df610989565b5b80604052505050565b60006109f3610924565b90506109ff82826109b8565b919050565b600067ffffffffffffffff821115610a1f57610a1e610989565b5b610a2882610978565b9050602081019050919050565b82818337600083830152505050565b6000610a57610a5284610a04565b6109e9565b905082815260208101848484011115610a7357610a72610973565b5b610a7e848285610a35565b509392505050565b600082601f830112610a9b57610a9a61096e565b5b8135610aab848260208601610a44565b91505092915050565b600080600060608486031215610acd57610acc61092e565b5b6000610adb86828701610959565b9350506020610aec86828701610959565b925050604084013567ffffffffffffffff811115610b0d57610b0c610933565b5b610b1986828701610a86565b9150509250925092565b610b2c81610938565b82525050565b6000602082019050610b476000830184610b23565b92915050565b60008060408385031215610b6457610b6361092e565b5b6000610b7285828601610959565b9250506020610b8385828601610959565b9150509250929050565b60008115159050919050565b610ba281610b8d565b82525050565b6000604082019050610bbd6000830185610b99565b610bca6020830184610b23565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610c0b82610938565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610c3e57610c3d610bd1565b5b600182019050919050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c83578082015181840152602081019050610c68565b83811115610c92576000848401525b50505050565b6000610ca382610c49565b610cad8185610c54565b9350610cbd818560208601610c65565b610cc681610978565b840191505092915050565b60006020820190508181036000830152610ceb8184610c98565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610d2d82610938565b9150610d3883610938565b925082821015610d4b57610d4a610bd1565b5b828203905092915050565b6000610d6182610938565b9150610d6c83610938565b925082610d7c57610d7b610cf3565b5b828206905092915050565b6000610d9282610938565b9150610d9d83610938565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610dd657610dd5610bd1565b5b828202905092915050565b6000610dec82610938565b9150610df783610938565b925082610e0757610e06610cf3565b5b828204905092915050565b6000610e1d82610938565b9150610e2883610938565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e5d57610e5c610bd1565b5b82820190509291505056fea2646970667358221220245cdb7d0c4c0cd96bb7acc7527f8419ad08f6494b7237e5d6b771cc9d6459b764736f6c63430008090033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var SafeMathMock__factory = /** @class */ (function (_super) {
    __extends(SafeMathMock__factory, _super);
    function SafeMathMock__factory() {
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
        _this.contractName = "SafeMathMock";
        return _this;
    }
    SafeMathMock__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    SafeMathMock__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    SafeMathMock__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    SafeMathMock__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    SafeMathMock__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    SafeMathMock__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    SafeMathMock__factory.bytecode = _bytecode;
    SafeMathMock__factory.abi = _abi;
    return SafeMathMock__factory;
}(ethers_1.ContractFactory));
exports.SafeMathMock__factory = SafeMathMock__factory;

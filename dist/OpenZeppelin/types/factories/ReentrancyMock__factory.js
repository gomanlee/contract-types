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
exports.ReentrancyMock__factory = void 0;
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
        inputs: [],
        name: "callback",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ReentrancyAttack",
                name: "attacker",
                type: "address",
            },
        ],
        name: "countAndCall",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "n",
                type: "uint256",
            },
        ],
        name: "countLocalRecursive",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "n",
                type: "uint256",
            },
        ],
        name: "countThisRecursive",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "counter",
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
var _bytecode = "0x608060405234801561001057600080fd5b506001600081905550600060018190555061086b806100306000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063083b27321461005c57806361bc221a146100665780638c5344fa1461008457806396ffa690146100a0578063b672ad8b146100bc575b600080fd5b6100646100d8565b005b61006e610138565b60405161007b9190610496565b60405180910390f35b61009e600480360381019061009991906104e2565b61013e565b005b6100ba60048036038101906100b591906104e2565b6102f0565b005b6100d660048036038101906100d1919061057f565b610370565b005b6002600054141561011e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161011590610609565b60405180910390fd5b600260008190555061012e610462565b6001600081905550565b60015481565b60026000541415610184576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017b90610609565b60405180910390fd5b600260008190555060008111156102e55761019d610462565b60003073ffffffffffffffffffffffffffffffffffffffff166001836101c39190610658565b6040516024016101d39190610496565b6040516020818303038152906040527f8c5344fa000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505060405161025d9190610706565b6000604051808303816000865af19150503d806000811461029a576040519150601f19603f3d011682016040523d82523d6000602084013e61029f565b606091505b50509050806102e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102da90610769565b60405180910390fd5b505b600160008190555050565b60026000541415610336576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032d90610609565b60405180910390fd5b600260008190555060008111156103655761034f610462565b61036460018261035f9190610658565b6102f0565b5b600160008190555050565b600260005414156103b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ad90610609565b60405180910390fd5b60026000819055506103c6610462565b60007f083b2732f78169bfaad6b407fa338cc97d697ed69d3915a18239cc111d51a40290508173ffffffffffffffffffffffffffffffffffffffff16630a2df1ed826040518263ffffffff1660e01b815260040161042491906107c4565b600060405180830381600087803b15801561043e57600080fd5b505af1158015610452573d6000803e3d6000fd5b5050505050600160008190555050565b600180600082825461047491906107df565b92505081905550565b6000819050919050565b6104908161047d565b82525050565b60006020820190506104ab6000830184610487565b92915050565b600080fd5b6104bf8161047d565b81146104ca57600080fd5b50565b6000813590506104dc816104b6565b92915050565b6000602082840312156104f8576104f76104b1565b5b6000610506848285016104cd565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061053a8261050f565b9050919050565b600061054c8261052f565b9050919050565b61055c81610541565b811461056757600080fd5b50565b60008135905061057981610553565b92915050565b600060208284031215610595576105946104b1565b5b60006105a38482850161056a565b91505092915050565b600082825260208201905092915050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b60006105f3601f836105ac565b91506105fe826105bd565b602082019050919050565b60006020820190508181036000830152610622816105e6565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006106638261047d565b915061066e8361047d565b92508282101561068157610680610629565b5b828203905092915050565b600081519050919050565b600081905092915050565b60005b838110156106c05780820151818401526020810190506106a5565b838111156106cf576000848401525b50505050565b60006106e08261068c565b6106ea8185610697565b93506106fa8185602086016106a2565b80840191505092915050565b600061071282846106d5565b915081905092915050565b7f5265656e7472616e63794d6f636b3a206661696c65642063616c6c0000000000600082015250565b6000610753601b836105ac565b915061075e8261071d565b602082019050919050565b6000602082019050818103600083015261078281610746565b9050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6107be81610789565b82525050565b60006020820190506107d960008301846107b5565b92915050565b60006107ea8261047d565b91506107f58361047d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561082a57610829610629565b5b82820190509291505056fea2646970667358221220e94c3777736b0523515a9398c551e633603438fbdef4db028197ced6817dafe864736f6c63430008090033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var ReentrancyMock__factory = /** @class */ (function (_super) {
    __extends(ReentrancyMock__factory, _super);
    function ReentrancyMock__factory() {
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
        _this.contractName = "ReentrancyMock";
        return _this;
    }
    ReentrancyMock__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    ReentrancyMock__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    ReentrancyMock__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ReentrancyMock__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ReentrancyMock__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ReentrancyMock__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ReentrancyMock__factory.bytecode = _bytecode;
    ReentrancyMock__factory.abi = _abi;
    return ReentrancyMock__factory;
}(ethers_1.ContractFactory));
exports.ReentrancyMock__factory = ReentrancyMock__factory;
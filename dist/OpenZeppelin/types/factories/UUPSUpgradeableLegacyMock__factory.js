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
exports.UUPSUpgradeableLegacyMock__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "AdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address",
            },
        ],
        name: "BeaconUpgraded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "Upgraded",
        type: "event",
    },
    {
        inputs: [],
        name: "current",
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
        name: "decrement",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "increment",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "proxiableUUID",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "reset",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newImplementation",
                type: "address",
            },
        ],
        name: "upgradeTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newImplementation",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "upgradeToAndCall",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
var _bytecode = "0x60a06040523073ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff1681525034801561004357600080fd5b50608051610f6b61005f60003960006101930152610f6b6000f3fe6080604052600436106100705760003560e01c806352d1902d1161004e57806352d1902d146100d15780639fa6a6e3146100fc578063d09de08a14610127578063d826f88f1461013e57610070565b80632baeceb7146100755780633659cfe61461008c5780634f1ef286146100b5575b600080fd5b34801561008157600080fd5b5061008a610155565b005b34801561009857600080fd5b506100b360048036038101906100ae91906108f1565b610161565b005b6100cf60048036038101906100ca9190610a64565b61017f565b005b3480156100dd57600080fd5b506100e661018f565b6040516100f39190610ad9565b60405180910390f35b34801561010857600080fd5b50610111610248565b60405161011e9190610b0d565b60405180910390f35b34801561013357600080fd5b5061013c610259565b005b34801561014a57600080fd5b50610153610265565b005b61015f6000610271565b565b61017c816040518060200160405280600081525060006102cd565b50565b61018b828260006102cd565b5050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161461021f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161021690610bab565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b905090565b6000610254600061049e565b905090565b61026360006104ac565b565b61026f60006104c2565b565b600081600001549050600081116102bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b490610c17565b60405180910390fd5b6001810382600001819055505050565b60006102d76104cf565b90506102e284610526565b6000835111806102ef5750815b15610300576102fe84846105df565b505b600061032e7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd914360001b61060c565b90508060000160009054906101000a900460ff166104975760018160000160006101000a81548160ff0219169083151502179055506103fa85836040516024016103789190610c46565b6040516020818303038152906040527f3659cfe6000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506105df565b5060008160000160006101000a81548160ff0219169083151502179055506104206104cf565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161461048d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048490610cd3565b60405180910390fd5b61049685610616565b5b5050505050565b600081600001549050919050565b6001816000016000828254019250508190555050565b6000816000018190555050565b60006104fd7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b610665565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61052f8161066f565b61056e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056590610d65565b60405180910390fd5b8061059b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b610665565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60606106048383604051806060016040528060278152602001610f0f60279139610692565b905092915050565b6000819050919050565b61061f8161075f565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b6000819050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b606061069d8461066f565b6106dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d390610df7565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff16856040516107049190610e91565b600060405180830381855af49150503d806000811461073f576040519150601f19603f3d011682016040523d82523d6000602084013e610744565b606091505b5091509150610754828286610818565b925050509392505050565b6107688161066f565b6107a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079e90610d65565b60405180910390fd5b806107d47f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b610665565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6060831561082857829050610878565b60008351111561083b5782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086f9190610eec565b60405180910390fd5b9392505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006108be82610893565b9050919050565b6108ce816108b3565b81146108d957600080fd5b50565b6000813590506108eb816108c5565b92915050565b60006020828403121561090757610906610889565b5b6000610915848285016108dc565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61097182610928565b810181811067ffffffffffffffff821117156109905761098f610939565b5b80604052505050565b60006109a361087f565b90506109af8282610968565b919050565b600067ffffffffffffffff8211156109cf576109ce610939565b5b6109d882610928565b9050602081019050919050565b82818337600083830152505050565b6000610a07610a02846109b4565b610999565b905082815260208101848484011115610a2357610a22610923565b5b610a2e8482856109e5565b509392505050565b600082601f830112610a4b57610a4a61091e565b5b8135610a5b8482602086016109f4565b91505092915050565b60008060408385031215610a7b57610a7a610889565b5b6000610a89858286016108dc565b925050602083013567ffffffffffffffff811115610aaa57610aa961088e565b5b610ab685828601610a36565b9150509250929050565b6000819050919050565b610ad381610ac0565b82525050565b6000602082019050610aee6000830184610aca565b92915050565b6000819050919050565b610b0781610af4565b82525050565b6000602082019050610b226000830184610afe565b92915050565b600082825260208201905092915050565b7f555550535570677261646561626c653a206d757374206e6f742062652063616c60008201527f6c6564207468726f7567682064656c656761746563616c6c0000000000000000602082015250565b6000610b95603883610b28565b9150610ba082610b39565b604082019050919050565b60006020820190508181036000830152610bc481610b88565b9050919050565b7f436f756e7465723a2064656372656d656e74206f766572666c6f770000000000600082015250565b6000610c01601b83610b28565b9150610c0c82610bcb565b602082019050919050565b60006020820190508181036000830152610c3081610bf4565b9050919050565b610c40816108b3565b82525050565b6000602082019050610c5b6000830184610c37565b92915050565b7f45524331393637557067726164653a207570677261646520627265616b73206660008201527f7572746865722075706772616465730000000000000000000000000000000000602082015250565b6000610cbd602f83610b28565b9150610cc882610c61565b604082019050919050565b60006020820190508181036000830152610cec81610cb0565b9050919050565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b6000610d4f602d83610b28565b9150610d5a82610cf3565b604082019050919050565b60006020820190508181036000830152610d7e81610d42565b9050919050565b7f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60008201527f6e74726163740000000000000000000000000000000000000000000000000000602082015250565b6000610de1602683610b28565b9150610dec82610d85565b604082019050919050565b60006020820190508181036000830152610e1081610dd4565b9050919050565b600081519050919050565b600081905092915050565b60005b83811015610e4b578082015181840152602081019050610e30565b83811115610e5a576000848401525b50505050565b6000610e6b82610e17565b610e758185610e22565b9350610e85818560208601610e2d565b80840191505092915050565b6000610e9d8284610e60565b915081905092915050565b600081519050919050565b6000610ebe82610ea8565b610ec88185610b28565b9350610ed8818560208601610e2d565b610ee181610928565b840191505092915050565b60006020820190508181036000830152610f068184610eb3565b90509291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220d8c8b7c24abc1fa3983f6d24d8c8f0eb4681fdac301a1e1bbd0d6600048461c964736f6c63430008090033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var UUPSUpgradeableLegacyMock__factory = /** @class */ (function (_super) {
    __extends(UUPSUpgradeableLegacyMock__factory, _super);
    function UUPSUpgradeableLegacyMock__factory() {
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
        _this.contractName = "UUPSUpgradeableLegacyMock";
        return _this;
    }
    UUPSUpgradeableLegacyMock__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    UUPSUpgradeableLegacyMock__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    UUPSUpgradeableLegacyMock__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    UUPSUpgradeableLegacyMock__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    UUPSUpgradeableLegacyMock__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    UUPSUpgradeableLegacyMock__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    UUPSUpgradeableLegacyMock__factory.bytecode = _bytecode;
    UUPSUpgradeableLegacyMock__factory.abi = _abi;
    return UUPSUpgradeableLegacyMock__factory;
}(ethers_1.ContractFactory));
exports.UUPSUpgradeableLegacyMock__factory = UUPSUpgradeableLegacyMock__factory;

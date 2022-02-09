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
exports.ComptrollerV6Storage__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        constant: true,
        inputs: [],
        name: "_borrowGuardianPaused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "_mintGuardianPaused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "accountAssets",
        outputs: [
            {
                internalType: "contract CToken",
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
        name: "admin",
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
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "allMarkets",
        outputs: [
            {
                internalType: "contract CToken",
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
        name: "borrowCapGuardian",
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
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "borrowCaps",
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
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "borrowGuardianPaused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "closeFactorMantissa",
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
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "compAccrued",
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
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "compBorrowSpeeds",
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
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "compBorrowState",
        outputs: [
            {
                internalType: "uint224",
                name: "index",
                type: "uint224",
            },
            {
                internalType: "uint32",
                name: "block",
                type: "uint32",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "compBorrowerIndex",
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
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "compContributorSpeeds",
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
        name: "compRate",
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
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "compSpeeds",
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
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "compSupplierIndex",
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
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "compSupplySpeeds",
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
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "compSupplyState",
        outputs: [
            {
                internalType: "uint224",
                name: "index",
                type: "uint224",
            },
            {
                internalType: "uint32",
                name: "block",
                type: "uint32",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "comptrollerImplementation",
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
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "lastContributorBlock",
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
        name: "liquidationIncentiveMantissa",
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
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "markets",
        outputs: [
            {
                internalType: "bool",
                name: "isListed",
                type: "bool",
            },
            {
                internalType: "uint256",
                name: "collateralFactorMantissa",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "isComped",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "maxAssets",
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
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "mintGuardianPaused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "oracle",
        outputs: [
            {
                internalType: "contract PriceOracle",
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
        name: "pauseGuardian",
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
        name: "pendingAdmin",
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
        name: "pendingComptrollerImplementation",
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
        name: "seizeGuardianPaused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "transferGuardianPaused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50610809806100206000396000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c80638e8f294b1161010f578063ca0af043116100a2578063e6653f3d11610071578063e6653f3d1461051d578063e875544614610525578063f4a433c01461052d578063f851a44014610553576101e5565b8063ca0af04314610495578063cc7ebdc4146104c3578063dce15449146104e9578063dcfbc0c714610515576101e5565b8063ac0b0bb7116100de578063ac0b0bb714610431578063b21be7fd14610439578063bb82aa5e14610467578063bea6b8b81461046f576101e5565b80638e8f294b146103b357806394b2294b146103fb578063986ab83814610403578063aa90075414610429576101e5565b806352d84d1e11610187578063731f0c2b11610156578063731f0c2b146103575780637dc0d1d01461037d57806387f76303146103855780638c57804e1461038d576101e5565b806352d84d1e146102a05780636aa875b5146102bd5780636b79c38d146102e35780636d154ea514610331576101e5565b806326782247116101c3578063267822471461024e5780633c94786f146102565780634a584432146102725780634ada90af14610298576101e5565b80631d7b33d7146101ea57806321af45691461022257806324a3d62214610246575b600080fd5b6102106004803603602081101561020057600080fd5b50356001600160a01b031661055b565b60408051918252519081900360200190f35b61022a61056d565b604080516001600160a01b039092168252519081900360200190f35b61022a61057c565b61022a61058b565b61025e61059a565b604080519115158252519081900360200190f35b6102106004803603602081101561028857600080fd5b50356001600160a01b03166105aa565b6102106105bc565b61022a600480360360208110156102b657600080fd5b50356105c2565b610210600480360360208110156102d357600080fd5b50356001600160a01b03166105e9565b610309600480360360208110156102f957600080fd5b50356001600160a01b03166105fb565b604080516001600160e01b03909316835263ffffffff90911660208301528051918290030190f35b61025e6004803603602081101561034757600080fd5b50356001600160a01b0316610625565b61025e6004803603602081101561036d57600080fd5b50356001600160a01b031661063a565b61022a61064f565b61025e61065e565b610309600480360360208110156103a357600080fd5b50356001600160a01b031661066e565b6103d9600480360360208110156103c957600080fd5b50356001600160a01b0316610698565b6040805193151584526020840192909252151582820152519081900360600190f35b6102106106be565b6102106004803603602081101561041957600080fd5b50356001600160a01b03166106c4565b6102106106d6565b61025e6106dc565b6102106004803603604081101561044f57600080fd5b506001600160a01b03813581169160200135166106ec565b61022a610709565b6102106004803603602081101561048557600080fd5b50356001600160a01b0316610718565b610210600480360360408110156104ab57600080fd5b506001600160a01b038135811691602001351661072a565b610210600480360360208110156104d957600080fd5b50356001600160a01b0316610747565b61022a600480360360408110156104ff57600080fd5b506001600160a01b038135169060200135610759565b61022a61078e565b61025e61079d565b6102106107ad565b6102106004803603602081101561054357600080fd5b50356001600160a01b03166107b3565b61022a6107c5565b600f6020526000908152604090205481565b6015546001600160a01b031681565b600a546001600160a01b031681565b6001546001600160a01b031681565b600a54600160a01b900460ff1681565b60166020526000908152604090205481565b60065481565b600d81815481106105cf57fe5b6000918252602090912001546001600160a01b0316905081565b601a6020526000908152604090205481565b6010602052600090815260409020546001600160e01b03811690600160e01b900463ffffffff1682565b600c6020526000908152604090205460ff1681565b600b6020526000908152604090205460ff1681565b6004546001600160a01b031681565b600a54600160b01b900460ff1681565b6011602052600090815260409020546001600160e01b03811690600160e01b900463ffffffff1682565b60096020526000908152604090208054600182015460039092015460ff91821692911683565b60075481565b60176020526000908152604090205481565b600e5481565b600a54600160b81b900460ff1681565b601260209081526000928352604080842090915290825290205481565b6002546001600160a01b031681565b60186020526000908152604090205481565b601360209081526000928352604080842090915290825290205481565b60146020526000908152604090205481565b6008602052816000526040600020818154811061077257fe5b6000918252602090912001546001600160a01b03169150829050565b6003546001600160a01b031681565b600a54600160a81b900460ff1681565b60055481565b60196020526000908152604090205481565b6000546001600160a01b03168156fea265627a7a72315820ddda790ff37aba21b92440ab777843bcdd6a857f2ed97c716ed20525728fef0564736f6c63430005100032";
var isSuperArgs = function (xs) { return xs.length > 1; };
var ComptrollerV6Storage__factory = /** @class */ (function (_super) {
    __extends(ComptrollerV6Storage__factory, _super);
    function ComptrollerV6Storage__factory() {
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
        _this.contractName = "ComptrollerV6Storage";
        return _this;
    }
    ComptrollerV6Storage__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    ComptrollerV6Storage__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    ComptrollerV6Storage__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ComptrollerV6Storage__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ComptrollerV6Storage__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ComptrollerV6Storage__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ComptrollerV6Storage__factory.bytecode = _bytecode;
    ComptrollerV6Storage__factory.abi = _abi;
    return ComptrollerV6Storage__factory;
}(ethers_1.ContractFactory));
exports.ComptrollerV6Storage__factory = ComptrollerV6Storage__factory;

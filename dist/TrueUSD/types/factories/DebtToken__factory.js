"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
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
exports.DebtToken__factory = void 0;
var ethers_1 = require("ethers");
var DebtToken__factory = /** @class */ (function (_super) {
    __extends(DebtToken__factory, _super);
    function DebtToken__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    DebtToken__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    DebtToken__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    DebtToken__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    DebtToken__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    DebtToken__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return DebtToken__factory;
}(ethers_1.ContractFactory));
exports.DebtToken__factory = DebtToken__factory;
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [],
        name: "Liquidated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "burnedAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "redeemedAmount",
                type: "uint256",
            },
        ],
        name: "Redeemed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "repayer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "repaidAmount",
                type: "uint256",
            },
        ],
        name: "Repaid",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
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
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "balance",
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
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "balanceOf",
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
        name: "borrower",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "debt",
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
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
            },
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256",
            },
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ITrueFiPool2",
                name: "_pool",
                type: "address",
            },
            {
                internalType: "address",
                name: "_holder",
                type: "address",
            },
            {
                internalType: "address",
                name: "_borrower",
                type: "address",
            },
            {
                internalType: "address",
                name: "_liquidator",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_debt",
                type: "uint256",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "isInitialized",
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
        name: "isLiquidated",
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
        name: "liquidate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "liquidator",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "pool",
        outputs: [
            {
                internalType: "contract ITrueFiPool2",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "redeem",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "redeemed",
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
        name: "repaid",
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
        inputs: [
            {
                internalType: "address",
                name: "_sender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "repay",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_sender",
                type: "address",
            },
        ],
        name: "repayInFull",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "token",
        outputs: [
            {
                internalType: "contract ERC20",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
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
        inputs: [
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "version",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b506120b8806100206000396000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c806370a08231116100f9578063db006a7511610097578063f7013ef611610071578063f7013ef614610520578063fbb27dce14610573578063fc0c546a1461057b578063ff3be79614610583576101b9565b8063db006a75146104c0578063dd62ed3e146104dd578063e231bff014610518576101b9565b806395d89b41116100d357806395d89b411461043e578063a457c2d714610446578063a9059cbb1461047f578063b69ef8a8146104b8576101b9565b806370a08231146103d0578063780f9e37146104035780637df1f1b914610436576101b9565b806323b872dd11610166578063392e53cd11610140578063392e53cd1461037f57806339509351146103875780634046ebae146103c057806354fd4d50146103c8576101b9565b806323b872dd1461031657806328a0702514610359578063313ce56714610361576101b9565b806316f0115b1161019757806316f0115b146102a257806318160ddd146102d357806322867d78146102db576101b9565b806306fdde03146101be578063095ea7b31461023b5780630dca59c114610288575b600080fd5b6101c661058b565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102005781810151838201526020016101e8565b50505050905090810190601f16801561022d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102746004803603604081101561025157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610640565b604080519115158252519081900360200190f35b61029061065d565b60408051918252519081900360200190f35b6102aa610663565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61029061067f565b610314600480360360408110156102f157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610685565b005b6102746004803603606081101561032c57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135610693565b61031461073b565b61036961085d565b6040805160ff9092168252519081900360200190f35b6102746108dd565b6102746004803603604081101561039d57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356108e6565b6102aa610947565b610369610963565b610290600480360360208110156103e657600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610968565b6103146004803603602081101561041957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610990565b6102aa6109b6565b6101c66109d7565b6102746004803603604081101561045c57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610a56565b6102746004803603604081101561049557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610ad1565b610290610ae5565b610314600480360360208110156104d657600080fd5b5035610af4565b610290600480360360408110156104f357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610c03565b610290610c3b565b610314600480360360a081101561053657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135821691604082013581169160608101359091169060800135610c41565b610290610e64565b6102aa610e80565b610274610eeb565b60368054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106355780601f1061060a57610100808354040283529160200191610635565b820191906000526020600020905b81548152906001019060200180831161061857829003601f168201915b505050505090505b90565b600061065461064d610ef4565b8484610ef8565b50600192915050565b60395481565b603b5473ffffffffffffffffffffffffffffffffffffffff1681565b60355490565b61068f828261103f565b5050565b60006106a0848484611129565b610730846106ac610ef4565b61072b85604051806060016040528060288152602001611f4d6028913973ffffffffffffffffffffffffffffffffffffffff8a166000908152603460205260408120906106f7610ef4565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002054919063ffffffff61130716565b610ef8565b5060015b9392505050565b603d5460ff1615610797576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180611f026026913960400191505060405180910390fd5b603a5473ffffffffffffffffffffffffffffffffffffffff163314610807576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180611fa36027913960400191505060405180910390fd5b603d80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556040517f1ca61d77c5004794e60ba2f0231bc2954f00134d9524266c00e042857db9aeb090600090a1565b6000610867610e80565b73ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156108ac57600080fd5b505afa1580156108c0573d6000803e3d6000fd5b505050506040513d60208110156108d657600080fd5b5051905090565b60005460ff1690565b60006106546108f3610ef4565b8461072b8560346000610904610ef4565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff6113b816565b603a5473ffffffffffffffffffffffffffffffffffffffff1681565b600190565b73ffffffffffffffffffffffffffffffffffffffff1660009081526033602052604090205490565b6109b3816109ae61099f610e64565b6039549063ffffffff61142c16565b61103f565b50565b603854610100900473ffffffffffffffffffffffffffffffffffffffff1681565b60378054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106355780601f1061060a57610100808354040283529160200191610635565b6000610654610a63610ef4565b8461072b8560405180606001604052806025815260200161205e6025913960346000610a8d610ef4565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff61130716565b6000610654610ade610ef4565b8484611129565b6000610aef6114a3565b905090565b610afc6114a3565b811115610b54576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180611f286025913960400191505060405180910390fd5b80610b5d61067f565b821415610b6f57610b6c6114a3565b90505b603c54610b82908263ffffffff6113b816565b603c55610b8f3383611529565b610bbf3382610b9c610e80565b73ffffffffffffffffffffffffffffffffffffffff16919063ffffffff61167f16565b604080513381526020810184905280820183905290517ff3a670cd3af7d64b488926880889d08a8585a138ff455227af6737339a1ec2629181900360600190a15050565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260346020908152604080832093909416825291909152205490565b603c5481565b600054610100900460ff1680610c5a5750610c5a611711565b80610c68575060005460ff16155b610cbd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611f75602e913960400191505060405180910390fd5b600054610100900460ff16158015610d2357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b610d976040518060400160405280601181526020017f547275654669204465627420546f6b656e0000000000000000000000000000008152506040518060400160405280600481526020017f4445425400000000000000000000000000000000000000000000000000000000815250611717565b603b805473ffffffffffffffffffffffffffffffffffffffff8089167fffffffffffffffffffffffff00000000000000000000000000000000000000009283161790925560388054878416610100027fffffffffffffffffffffff0000000000000000000000000000000000000000ff909116179055603a8054928616929091169190911790556039829055610e2d858361187f565b8015610e5c57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b505050505050565b6000610aef603c54610e746114a3565b9063ffffffff6113b816565b603b54604080517ffc0c546a000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163fc0c546a916004808301926020929190829003018186803b1580156108ac57600080fd5b603d5460ff1681565b3390565b73ffffffffffffffffffffffffffffffffffffffff8316610f64576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806120106024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610fd0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611e676022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260346020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b61104a61099f610e64565b8111156110a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d815260200180611ed5602d913960400191505060405180910390fd5b6110d48230836110b0610e80565b73ffffffffffffffffffffffffffffffffffffffff1692919063ffffffff6119be16565b6040805173ffffffffffffffffffffffffffffffffffffffff841681526020810183905281517f0516911bcc3a0a7412a44601057c0a0a1ec628bde049a84284bc428866534488929181900390910190a15050565b73ffffffffffffffffffffffffffffffffffffffff8316611195576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180611feb6025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611201576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180611e226023913960400191505060405180910390fd5b61120c83838361170c565b61125c81604051806060016040528060268152602001611e896026913973ffffffffffffffffffffffffffffffffffffffff8616600090815260336020526040902054919063ffffffff61130716565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260336020526040808220939093559084168152205461129e908263ffffffff6113b816565b73ffffffffffffffffffffffffffffffffffffffff80841660008181526033602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156113b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561137557818101518382015260200161135d565b50505050905090810190601f1680156113a25780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60008282018381101561073457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60008282111561149d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b60006114ad610e80565b73ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156108ac57600080fd5b73ffffffffffffffffffffffffffffffffffffffff8216611595576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611fca6021913960400191505060405180910390fd5b6115a18260008361170c565b6115f181604051806060016040528060228152602001611e456022913973ffffffffffffffffffffffffffffffffffffffff8516600090815260336020526040902054919063ffffffff61130716565b73ffffffffffffffffffffffffffffffffffffffff831660009081526033602052604090205560355461162a908263ffffffff61142c16565b60355560408051828152905160009173ffffffffffffffffffffffffffffffffffffffff8516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905261170c908490611a59565b505050565b303b1590565b600054610100900460ff16806117305750611730611711565b8061173e575060005460ff16155b611793576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611f75602e913960400191505060405180910390fd5b600054610100900460ff161580156117f957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b825161180c906036906020860190611d89565b508151611820906037906020850190611d89565b50603880547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166012179055801561170c57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055505050565b73ffffffffffffffffffffffffffffffffffffffff821661190157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b61190d6000838361170c565b603554611920908263ffffffff6113b816565b60355573ffffffffffffffffffffffffffffffffffffffff8216600090815260336020526040902054611959908263ffffffff6113b816565b73ffffffffffffffffffffffffffffffffffffffff831660008181526033602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6040805173ffffffffffffffffffffffffffffffffffffffff80861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd00000000000000000000000000000000000000000000000000000000179052611a53908590611a59565b50505050565b6060611abb826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611b319092919063ffffffff16565b80519091501561170c57808060200190516020811015611ada57600080fd5b505161170c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612034602a913960400191505060405180910390fd5b6060611b408484600085611b48565b949350505050565b606082471015611ba3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180611eaf6026913960400191505060405180910390fd5b611bac85611d03565b611c1757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b60208310611c8157805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101611c44565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611ce3576040519150601f19603f3d011682016040523d82523d6000602084013e611ce8565b606091505b5091509150611cf8828286611d09565b979650505050505050565b3b151590565b60608315611d18575081610734565b825115611d285782518084602001fd5b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181815284516024840152845185939192839260440191908501908083836000831561137557818101518382015260200161135d565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611dca57805160ff1916838001178555611df7565b82800160010185558215611df7579182015b82811115611df7578251825591602001919060010190611ddc565b50611e03929150611e07565b5090565b61063d91905b80821115611e035760008155600101611e0d56fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c44656274546f6b656e3a20526570617920616d6f756e74206d6f7265207468616e20756e70616964206465627444656274546f6b656e3a2044656274206d757374206e6f74206265206c69717569646174656444656274546f6b656e3a20496e73756666696369656e742072657061696420616d6f756e7445524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a656444656274546f6b656e3a2043616c6c6572206973206e6f7420746865206c697175696461746f7245524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f20616464726573735361666545524332303a204552433230206f7065726174696f6e20646964206e6f74207375636365656445524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220de64eb711e6d026b45dbf2eaff68b1a0a0d78b075f4cd7957d51892e3d6f772564736f6c634300060a0033";

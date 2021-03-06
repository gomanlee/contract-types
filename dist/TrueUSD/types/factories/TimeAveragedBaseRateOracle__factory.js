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
exports.TimeAveragedBaseRateOracle__factory = void 0;
var ethers_1 = require("ethers");
var TimeAveragedBaseRateOracle__factory = /** @class */ (function (_super) {
    __extends(TimeAveragedBaseRateOracle__factory, _super);
    function TimeAveragedBaseRateOracle__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    TimeAveragedBaseRateOracle__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    TimeAveragedBaseRateOracle__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    TimeAveragedBaseRateOracle__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TimeAveragedBaseRateOracle__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TimeAveragedBaseRateOracle__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return TimeAveragedBaseRateOracle__factory;
}(ethers_1.ContractFactory));
exports.TimeAveragedBaseRateOracle__factory = TimeAveragedBaseRateOracle__factory;
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract SpotBaseRateOracle",
                name: "newSpotOracle",
                type: "address",
            },
        ],
        name: "SpotBaseRateOracleChanged",
        type: "event",
    },
    {
        inputs: [],
        name: "BUFFER_SIZE",
        outputs: [
            {
                internalType: "uint16",
                name: "",
                type: "uint16",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "asset",
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
        name: "bufferSize",
        outputs: [
            {
                internalType: "uint16",
                name: "",
                type: "uint16",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint16",
                name: "numberOfValues",
                type: "uint16",
            },
        ],
        name: "calculateAverageAPY",
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
        name: "claimOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "cooldownTime",
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
        name: "getMonthlyAPY",
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
        name: "getTotalsBuffer",
        outputs: [
            {
                internalType: "uint256[366]",
                name: "",
                type: "uint256[366]",
            },
            {
                internalType: "uint256[366]",
                name: "",
                type: "uint256[366]",
            },
            {
                internalType: "uint16",
                name: "",
                type: "uint16",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getWeeklyAPY",
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
        name: "getYearlyAPY",
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
                internalType: "contract SpotBaseRateOracle",
                name: "_spotOracle",
                type: "address",
            },
            {
                internalType: "address",
                name: "_asset",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_cooldownTime",
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
        name: "isOffCooldown",
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
        name: "owner",
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
        name: "pendingOwner",
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
        inputs: [
            {
                internalType: "contract SpotBaseRateOracle",
                name: "newSpotOracle",
                type: "address",
            },
        ],
        name: "setSpotOracle",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "spotOracle",
        outputs: [
            {
                internalType: "contract SpotBaseRateOracle",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalsBuffer",
        outputs: [
            {
                internalType: "uint16",
                name: "currIndex",
                type: "uint16",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "update",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b506112bc806100206000396000f3fe608060405234801561001057600080fd5b506004361061016b5760003560e01c80638da5cb5b116100cd578063e30c397811610081578063e52cfda611610066578063e52cfda614610354578063f2fde38b1461035c578063fe0061161461038f5761016b565b8063e30c39781461032b578063e44098a2146103335761016b565b8063a2e62045116100b2578063a2e6204514610313578063b319c6b71461031b578063d25f29a6146103235761016b565b80638da5cb5b146103035780639c2c770b1461030b5761016b565b8063392e53cd1161012457806354ae27011161010957806354ae2701146102ae5780635fc5e179146102b657806381fee5b9146102e95761016b565b8063392e53cd1461028a5780634e71e0c8146102a65761016b565b806304be5e591161015557806304be5e59146101975780631794bb3c1461021457806338d52e0f146102595761016b565b80624e394e1461017057806301dd70b71461018f575b600080fd5b610178610397565b6040805161ffff9092168252519081900360200190f35b61017861039d565b61019f6103a8565b6040518084612dc080838360005b838110156101c55781810151838201526020016101ad565b505050509050018361016e60200280838360005b838110156101f15781810151838201526020016101d9565b505050509050018261ffff1661ffff168152602001935050505060405180910390f35b6102576004803603606081101561022a57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135909116906040013561043c565b005b6102616105be565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6102926105da565b604080519115158252519081900360200190f35b6102576105e3565b6102926106eb565b610257600480360360208110156102cc57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610729565b6102f1610833565b60408051918252519081900360200190f35b610261610844565b610178610860565b610257610866565b6102f1610a55565b610261610a5b565b610261610a77565b6102f16004803603602081101561034957600080fd5b503561ffff16610a93565b6102f1610c86565b6102576004803603602081101561037257600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610c92565b6102f1610d6a565b61016e81565b6103145461ffff1681565b6103b06110ec565b6103b86110ec565b6103145460408051612dc081019091526000916038916101a69161ffff16908361016e8282826020028201915b8154815260200190600101908083116103e557505060408051612dc081019182905294975086935061016e9250905082845b8154815260200190600101908083116104175750505050509150925092509250909192565b600054610100900460ff16806104555750610455610d77565b80610463575060005460ff16155b6104b8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806111bf602e913960400191505060405180910390fd5b600054610100900460ff1615801561051e57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b61052733610d7d565b6035805473ffffffffffffffffffffffffffffffffffffffff8087167fffffffffffffffffffffffff00000000000000000000000000000000000000009283161790925560368054928616929091169190911790556037829055426101a66000015580156105b857600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b50505050565b60365473ffffffffffffffffffffffffffffffffffffffff1681565b60005460ff1690565b60345473ffffffffffffffffffffffffffffffffffffffff163314610653576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806112316028913960400191505060405180910390fd5b60345460335460405173ffffffffffffffffffffffffffffffffffffffff92831692909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a360348054603380547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff841617909155169055565b6103145460009081906101a69061ffff1661016e811061070757fe5b0154905061072060375482610f0090919063ffffffff16565b42101591505090565b610731610f7d565b60335473ffffffffffffffffffffffffffffffffffffffff9081169116146107ba57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6035805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff0000000000000000000000000000000000000000909116811790915560408051918252517f48566fb4d91e8cf90cf9241f1647d6d178223caeb440ec0ab2e9178b0cfb03149181900360200190a150565b600061083f6007610a93565b905090565b60335473ffffffffffffffffffffffffffffffffffffffff1690565b61016e90565b61086e6106eb565b6108c3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611259602e913960400191505060405180910390fd5b6103145461ffff1660006108d5610860565b61ffff168260010161ffff16816108e857fe5b603554603654604080517f37cef79100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff928316600482015290519490930694506000939116916337cef791916024808301926020929190829003018186803b15801561096557600080fd5b505afa158015610979573d6000803e3d6000fd5b505050506040513d602081101561098f57600080fd5b505190504260006109bb6101a661ffff871661016e81106109ac57fe5b0154839063ffffffff610f8116565b90506109f06109d0848363ffffffff610ff816565b603861ffff881661016e81106109e257fe5b01549063ffffffff610f0016565b603861ffff861661016e8110610a0257fe5b0155816101a661ffff861661016e8110610a1857fe5b0155505061031480547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00001661ffff93909316929092179091555050565b60375481565b60355473ffffffffffffffffffffffffffffffffffffffff1681565b60345473ffffffffffffffffffffffffffffffffffffffff1690565b6000808261ffff1611610af1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260458152602001806111596045913960600191505060405180910390fd5b610af9610860565b61ffff168261ffff1610610b58576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604c81526020018061110d604c913960600191505060405180910390fd5b6103145461ffff166000610b6a610860565b61ffff1684610b77610860565b84010361ffff1681610b8557fe5b0690506101a661ffff821661016e8110610b9b57fe5b0154610c025760008261ffff1611610bfe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260448152602001806111ed6044913960600191505060405180910390fd5b5060005b6000610c3b603861ffff841661016e8110610c1957fe5b0154603861ffff861661016e8110610c2d57fe5b01549063ffffffff610f8116565b90506000610c6a6101a661ffff851661016e8110610c5557fe5b01546101a661ffff871661016e8110610c2d57fe5b9050610c7c828263ffffffff61106b16565b9695505050505050565b600061083f601e610a93565b610c9a610f7d565b60335473ffffffffffffffffffffffffffffffffffffffff908116911614610d2357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b603480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b600061083f61016d610a93565b303b1590565b600054610100900460ff1680610d965750610d96610d77565b80610da4575060005460ff16155b610df9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806111bf602e913960400191505060405180910390fd5b600054610100900460ff16158015610e5f57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b603380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff84169081179091556040516000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a38015610efc57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050565b600082820183811015610f7457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b90505b92915050565b3390565b600082821115610ff257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b60008261100757506000610f77565b8282028284828161101457fe5b0414610f74576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061119e6021913960400191505060405180910390fd5b60008082116110db57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b8183816110e457fe5b049392505050565b60405180612dc0016040528061016e90602082028036833750919291505056fe54696d65417665726167656442617365526174654f7261636c653a204e756d626572206f662076616c7565732073686f756c64206265206c657373207468616e206275666665722073697a6554696d65417665726167656442617365526174654f7261636c653a204e756d626572206f662076616c7565732073686f756c642062652067726561746572207468616e2030536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a656454696d65417665726167656442617365526174654f7261636c653a2043616e6e6f742075736520627566666572206265666f726520616e79207570646174652063616c6c4f776e61626c653a2063616c6c6572206973206e6f74207468652070656e64696e67206f776e657254696d65417665726167656442617365526174654f7261636c653a20427566666572206f6e20636f6f6c646f776ea264697066735822122025c290b41594cbcd7ad50ca2d264c211aac8f7656cdfca7236aa9773fa6362bc64736f6c634300060a0033";

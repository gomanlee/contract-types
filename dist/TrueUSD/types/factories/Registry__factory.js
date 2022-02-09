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
exports.Registry__factory = void 0;
var ethers_1 = require("ethers");
var Registry__factory = /** @class */ (function (_super) {
    __extends(Registry__factory, _super);
    function Registry__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    Registry__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    Registry__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    Registry__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Registry__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Registry__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return Registry__factory;
}(ethers_1.ContractFactory));
exports.Registry__factory = Registry__factory;
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
                indexed: true,
                internalType: "address",
                name: "who",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "attribute",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "notes",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "adminAddr",
                type: "address",
            },
        ],
        name: "SetAttribute",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "oldManager",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newManager",
                type: "address",
            },
        ],
        name: "SetManager",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "attribute",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "contract IRegistryClone",
                name: "subscriber",
                type: "address",
            },
        ],
        name: "StartSubscription",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "attribute",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "contract IRegistryClone",
                name: "subscriber",
                type: "address",
            },
        ],
        name: "StopSubscription",
        type: "event",
    },
    {
        inputs: [],
        name: "claimOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_who",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "_attribute",
                type: "bytes32",
            },
        ],
        name: "getAttribute",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
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
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_who",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "_attribute",
                type: "bytes32",
            },
        ],
        name: "getAttributeAdminAddr",
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
                internalType: "address",
                name: "_who",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "_attribute",
                type: "bytes32",
            },
        ],
        name: "getAttributeTimestamp",
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
                name: "_who",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "_attribute",
                type: "bytes32",
            },
        ],
        name: "getAttributeValue",
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
                name: "_who",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "_attribute",
                type: "bytes32",
            },
        ],
        name: "hasAttribute",
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
                internalType: "address payable",
                name: "_to",
                type: "address",
            },
        ],
        name: "reclaimEther",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
        ],
        name: "reclaimToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_who",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "_attribute",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "_value",
                type: "uint256",
            },
            {
                internalType: "bytes32",
                name: "_notes",
                type: "bytes32",
            },
        ],
        name: "setAttribute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_who",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "_attribute",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "_value",
                type: "uint256",
            },
        ],
        name: "setAttributeValue",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_attribute",
                type: "bytes32",
            },
            {
                internalType: "contract IRegistryClone",
                name: "_syncer",
                type: "address",
            },
        ],
        name: "subscribe",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_attribute",
                type: "bytes32",
            },
        ],
        name: "subscriberCount",
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
                internalType: "bytes32",
                name: "_attribute",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "_startIndex",
                type: "uint256",
            },
            {
                internalType: "address[]",
                name: "_addresses",
                type: "address[]",
            },
        ],
        name: "syncAttribute",
        outputs: [],
        stateMutability: "nonpayable",
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
        inputs: [
            {
                internalType: "bytes32",
                name: "_attribute",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "_index",
                type: "uint256",
            },
        ],
        name: "unsubscribe",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50611481806100206000396000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c806388ee39cc116100b2578063e01709bc11610081578063e30c397811610066578063e30c397814610481578063f2fde38b14610489578063fdac9ff7146104bc5761011b565b8063e01709bc146103cc578063e23c5063146104485761011b565b806388ee39cc1461031d5780638da5cb5b146103585780639a6a30a414610360578063a32d7697146103935761011b565b80634e71e0c8116100ee5780634e71e0c81461022d5780636ca060721461023557806371b6d6ea146102975780637338c25c146102d05761011b565b8063015aeda714610120578063100ad9f114610167578063163f66911461019657806340f745661461020a575b600080fd5b6101656004803603608081101561013657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602081013590604081013590606001356104fb565b005b6101846004803603602081101561017d57600080fd5b50356106d8565b60408051918252519081900360200190f35b6101cf600480360360408110156101ac57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356106ea565b60408051948552602085019390935273ffffffffffffffffffffffffffffffffffffffff909116838301526060830152519081900360800190f35b6101656004803603604081101561022057600080fd5b5080359060200135610767565b6101656109af565b61026e6004803603604081101561024b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610a69565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b610184600480360360408110156102ad57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610aa1565b610309600480360360408110156102e657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610ad9565b604080519115158252519081900360200190f35b6101656004803603604081101561033357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610b10565b61026e610cdf565b6101656004803603602081101561037657600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610cfb565b610165600480360360408110156103a957600080fd5b508035906020013573ffffffffffffffffffffffffffffffffffffffff16610dc7565b610165600480360360608110156103e257600080fd5b81359160208101359181019060608101604082013564010000000081111561040957600080fd5b82018360208201111561041b57600080fd5b8035906020019184602083028401116401000000008311171561043d57600080fd5b509092509050610ede565b6101846004803603604081101561045e57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356110ab565b61026e6110e0565b6101656004803603602081101561049f57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166110fc565b610165600480360360608110156104d257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602081013590604001356111c9565b610505833361139c565b61050e57600080fd5b6040805160808101825283815260208082018481523383850181815242606080870191825273ffffffffffffffffffffffffffffffffffffffff8c811660008181526002808a528b82208f83528a52908b902099518a55965160018a0155935195880180547fffffffffffffffffffffffff000000000000000000000000000000000000000016969091169590951790945551600390950194909455845188815292830187905282850186905293517f7f467fc85b3c9db1144a5f705bcb37dcd17e760ed57b1921186f50b51000c3a19281900390910190a3600083815260036020526040902080545b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810190156106d05781818154811061062d57fe5b6000918252602082200154604080517ff5be438900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a81166004830152602482018a9052604482018990529151919092169263f5be4389926064808201939182900301818387803b1580156106b357600080fd5b505af11580156106c7573d6000803e3d6000fd5b505050506105f8565b505050505050565b60009081526003602052604090205490565b6000806000806106f8611424565b5050505073ffffffffffffffffffffffffffffffffffffffff928316600090815260026020818152604080842095845294815291849020845160808101865281548082526001830154948201859052928201549096169486018590526003015460609095018590529490939150565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107ed57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79204f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b60008281526003602052604090205480821061080857600080fd5b600083815260036020526040902080548390811061082257fe5b600091825260208220015460405173ffffffffffffffffffffffffffffffffffffffff9091169185917fb2323eec35dc99548462ae5379857df730d727775c28ed24e05697645c39031f9190a3600083815260036020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83019081106108ab57fe5b600091825260208083209091015485835260039091526040909120805473ffffffffffffffffffffffffffffffffffffffff90921691849081106108eb57fe5b600091825260208083209190910180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff949094169390931790925584815260039091526040902080548061095257fe5b60008281526020902081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055019055505050565b60015473ffffffffffffffffffffffffffffffffffffffff1633146109d357600080fd5b6001546000805460405173ffffffffffffffffffffffffffffffffffffffff93841693909116917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a360018054600080547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff841617909155169055565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260026020818152604080842094845293905291902001541690565b73ffffffffffffffffffffffffffffffffffffffff919091166000908152600260209081526040808320938352929052206003015490565b73ffffffffffffffffffffffffffffffffffffffff9190911660009081526002602090815260408083209383529290522054151590565b60005473ffffffffffffffffffffffffffffffffffffffff163314610b9657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79204f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905160009173ffffffffffffffffffffffffffffffffffffffff8516916370a0823191602480820192602092909190829003018186803b158015610c0657600080fd5b505afa158015610c1a573d6000803e3d6000fd5b505050506040513d6020811015610c3057600080fd5b5051604080517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301526024820184905291519293509085169163a9059cbb916044808201926020929091908290030181600087803b158015610cae57600080fd5b505af1158015610cc2573d6000803e3d6000fd5b505050506040513d6020811015610cd857600080fd5b5050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff163314610d8157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79204f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b60405173ffffffffffffffffffffffffffffffffffffffff8216904780156108fc02916000818181858888f19350505050158015610dc3573d6000803e3d6000fd5b5050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610e4d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79204f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000828152600360209081526040808320805460018101825590845291832090910180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff85169081179091559051909184917f1b268da283b6794e2e7cb16ebd9e4bbcfad6ae81d2321f9c2e281f9f53167a739190a35050565b600084815260036020526040902080545b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8101908510156106d0576000828281548110610f2857fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169050835b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810190156110a4576000868683818110610f8557fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1690508273ffffffffffffffffffffffffffffffffffffffff1663f5be4389828b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008e8152602001908152602001600020600001546040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281526020019350505050600060405180830381600087803b15801561108657600080fd5b505af115801561109a573d6000803e3d6000fd5b5050505050610f4e565b5050610eef565b73ffffffffffffffffffffffffffffffffffffffff919091166000908152600260209081526040808320938352929052205490565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff16331461118257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79204f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6111d3823361139c565b6111dc57600080fd5b60408051608081018252828152600060208083018281523384860181815242606080880191825273ffffffffffffffffffffffffffffffffffffffff8c811680895260028089528b8a208e8b528952988b902099518a55955160018a0155925196880180547fffffffffffffffffffffffff000000000000000000000000000000000000000016979093169690961790915551600390950194909455845187815291820186905293519293927f7f467fc85b3c9db1144a5f705bcb37dcd17e760ed57b1921186f50b51000c3a1929181900390910190a3600082815260036020526040902080545b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81019015610cd8578181815481106112f957fe5b6000918252602082200154604080517ff5be438900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff898116600483015260248201899052604482018890529151919092169263f5be4389926064808201939182900301818387803b15801561137f57600080fd5b505af1158015611393573d6000803e3d6000fd5b505050506112c4565b6000805473ffffffffffffffffffffffffffffffffffffffff8381169116148061141d5750604080517f63616e5772697465546f2d0000000000000000000000000000000000000000008152815190819003600b0181208518602080830191909152825180830382018152918301909252805191012061141d908390610ad9565b9392505050565b6040805160808101825260008082526020820181905291810182905260608101919091529056fea264697066735822122092a6beebe3c0a24816249d9efc6e4c923875cbac25a6f31769068d0d58eef18e64736f6c634300060a0033";

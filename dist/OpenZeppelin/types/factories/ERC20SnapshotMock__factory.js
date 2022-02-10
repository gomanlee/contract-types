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
exports.ERC20SnapshotMock__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "symbol",
                type: "string",
            },
            {
                internalType: "address",
                name: "initialAccount",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "initialBalance",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
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
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "Snapshot",
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
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "snapshotId",
                type: "uint256",
            },
        ],
        name: "balanceOfAt",
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
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
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
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "snapshot",
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
                internalType: "uint256",
                name: "snapshotId",
                type: "uint256",
            },
        ],
        name: "totalSupplyAt",
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
                name: "to",
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
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
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
];
var _bytecode = "0x60806040523480156200001157600080fd5b5060405162002aad38038062002aad8339818101604052810190620000379190620007d9565b8383816003908051906020019062000051929190620004ec565b5080600490805190602001906200006a929190620004ec565b5050506200007f82826200008960201b60201c565b5050505062000a95565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620000fc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000f390620008ea565b60405180910390fd5b62000110600083836200020260201b60201c565b80600260008282546200012491906200093b565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546200017b91906200093b565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620001e29190620009a9565b60405180910390a3620001fe60008383620002fd60201b60201c565b5050565b6200021a8383836200030260201b620008461760201c565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415620002775762000261826200030760201b60201c565b620002716200036a60201b60201c565b620002f8565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620002d457620002be836200030760201b60201c565b620002ce6200036a60201b60201c565b620002f7565b620002e5836200030760201b60201c565b620002f6826200030760201b60201c565b5b5b505050565b505050565b505050565b62000367600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206200035b836200038e60201b60201c565b620003d660201b60201c565b50565b6200038c6006620003806200046260201b60201c565b620003d660201b60201c565b565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000620003e86200046c60201b60201c565b905080620003ff846000016200048a60201b60201c565b10156200045d5782600001819080600181540180825580915050600190039060005260206000200160009091909190915055826001018290806001815401808255809150506001900390600052602060002001600090919091909150555b505050565b6000600254905090565b6000620004856008620004de60201b6200084b1760201c565b905090565b60008082805490501415620004a35760009050620004d9565b8160018380549050620004b79190620009c6565b81548110620004cb57620004ca62000a01565b5b906000526020600020015490505b919050565b600081600001549050919050565b828054620004fa9062000a5f565b90600052602060002090601f0160209004810192826200051e57600085556200056a565b82601f106200053957805160ff19168380011785556200056a565b828001600101855582156200056a579182015b82811115620005695782518255916020019190600101906200054c565b5b5090506200057991906200057d565b5090565b5b80821115620005985760008160009055506001016200057e565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200060582620005ba565b810181811067ffffffffffffffff82111715620006275762000626620005cb565b5b80604052505050565b60006200063c6200059c565b90506200064a8282620005fa565b919050565b600067ffffffffffffffff8211156200066d576200066c620005cb565b5b6200067882620005ba565b9050602081019050919050565b60005b83811015620006a557808201518184015260208101905062000688565b83811115620006b5576000848401525b50505050565b6000620006d2620006cc846200064f565b62000630565b905082815260208101848484011115620006f157620006f0620005b5565b5b620006fe84828562000685565b509392505050565b600082601f8301126200071e576200071d620005b0565b5b815162000730848260208601620006bb565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620007668262000739565b9050919050565b620007788162000759565b81146200078457600080fd5b50565b60008151905062000798816200076d565b92915050565b6000819050919050565b620007b3816200079e565b8114620007bf57600080fd5b50565b600081519050620007d381620007a8565b92915050565b60008060008060808587031215620007f657620007f5620005a6565b5b600085015167ffffffffffffffff811115620008175762000816620005ab565b5b620008258782880162000706565b945050602085015167ffffffffffffffff811115620008495762000848620005ab565b5b620008578782880162000706565b93505060406200086a8782880162000787565b92505060606200087d87828801620007c2565b91505092959194509250565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000620008d2601f8362000889565b9150620008df826200089a565b602082019050919050565b600060208201905081810360008301526200090581620008c3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600062000948826200079e565b915062000955836200079e565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200098d576200098c6200090c565b5b828201905092915050565b620009a3816200079e565b82525050565b6000602082019050620009c0600083018462000998565b92915050565b6000620009d3826200079e565b9150620009e0836200079e565b925082821015620009f657620009f56200090c565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168062000a7857607f821691505b6020821081141562000a8f5762000a8e62000a30565b5b50919050565b6120088062000aa56000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806370a08231116100975780639dc29fac116100665780639dc29fac146102c3578063a457c2d7146102df578063a9059cbb1461030f578063dd62ed3e1461033f57610100565b806370a082311461023b57806395d89b411461026b5780639711715a14610289578063981b24d01461029357610100565b8063313ce567116100d3578063313ce567146101a157806339509351146101bf57806340c10f19146101ef5780634ee2cd7e1461020b57610100565b806306fdde0314610105578063095ea7b31461012357806318160ddd1461015357806323b872dd14610171575b600080fd5b61010d61036f565b60405161011a919061156a565b60405180910390f35b61013d60048036038101906101389190611625565b610401565b60405161014a9190611680565b60405180910390f35b61015b610424565b60405161016891906116aa565b60405180910390f35b61018b600480360381019061018691906116c5565b61042e565b6040516101989190611680565b60405180910390f35b6101a961045d565b6040516101b69190611734565b60405180910390f35b6101d960048036038101906101d49190611625565b610466565b6040516101e69190611680565b60405180910390f35b61020960048036038101906102049190611625565b610510565b005b61022560048036038101906102209190611625565b61051e565b60405161023291906116aa565b60405180910390f35b6102556004803603810190610250919061174f565b61058e565b60405161026291906116aa565b60405180910390f35b6102736105d6565b604051610280919061156a565b60405180910390f35b610291610668565b005b6102ad60048036038101906102a8919061177c565b610673565b6040516102ba91906116aa565b60405180910390f35b6102dd60048036038101906102d89190611625565b6106a4565b005b6102f960048036038101906102f49190611625565b6106b2565b6040516103069190611680565b60405180910390f35b61032960048036038101906103249190611625565b61079c565b6040516103369190611680565b60405180910390f35b610359600480360381019061035491906117a9565b6107bf565b60405161036691906116aa565b60405180910390f35b60606003805461037e90611818565b80601f01602080910402602001604051908101604052809291908181526020018280546103aa90611818565b80156103f75780601f106103cc576101008083540402835291602001916103f7565b820191906000526020600020905b8154815290600101906020018083116103da57829003601f168201915b5050505050905090565b60008061040c610859565b9050610419818585610861565b600191505092915050565b6000600254905090565b600080610439610859565b9050610446858285610a2c565b610451858585610ab8565b60019150509392505050565b60006012905090565b600080610471610859565b9050610505818585600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546105009190611879565b610861565b600191505092915050565b61051a8282610d39565b5050565b600080600061056b84600560008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020610e99565b91509150816105825761057d8561058e565b610584565b805b9250505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546105e590611818565b80601f016020809104026020016040519081016040528092919081815260200182805461061190611818565b801561065e5780601f106106335761010080835404028352916020019161065e565b820191906000526020600020905b81548152906001019060200180831161064157829003601f168201915b5050505050905090565b610670610f8f565b50565b6000806000610683846006610e99565b915091508161069957610694610424565b61069b565b805b92505050919050565b6106ae8282610fe5565b5050565b6000806106bd610859565b90506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905083811015610783576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077a90611941565b60405180910390fd5b6107908286868403610861565b60019250505092915050565b6000806107a7610859565b90506107b4818585610ab8565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b505050565b600081600001549050919050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156108d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c8906119d3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610941576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093890611a65565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610a1f91906116aa565b60405180910390a3505050565b6000610a3884846107bf565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610ab25781811015610aa4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9b90611ad1565b60405180910390fd5b610ab18484848403610861565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b28576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1f90611b63565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b98576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8f90611bf5565b60405180910390fd5b610ba38383836111bc565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610c29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2090611c87565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610cbc9190611879565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610d2091906116aa565b60405180910390a3610d33848484611276565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610da9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610da090611cf3565b60405180910390fd5b610db5600083836111bc565b8060026000828254610dc79190611879565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e1c9190611879565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610e8191906116aa565b60405180910390a3610e9560008383611276565b5050565b60008060008411610edf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ed690611d5f565b60405180910390fd5b610ee761127b565b841115610f29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f2090611dcb565b60405180910390fd5b6000610f41858560000161128c90919063ffffffff16565b90508360000180549050811415610f5f576000809250925050610f88565b6001846001018281548110610f7757610f76611deb565b5b906000526020600020015492509250505b9250929050565b6000610f9b6008611366565b6000610fa561127b565b90507f8030e83b04d87bef53480e26263266d6ca66863aa8506aca6f2559d18aa1cb6781604051610fd691906116aa565b60405180910390a18091505090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611055576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161104c90611e8c565b60405180910390fd5b611061826000836111bc565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156110e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110de90611f1e565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816002600082825461113e9190611f3e565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516111a391906116aa565b60405180910390a36111b783600084611276565b505050565b6111c7838383610846565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611212576112058261137c565b61120d6113cf565b611271565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561125d576112508361137c565b6112586113cf565b611270565b6112668361137c565b61126f8261137c565b5b5b505050565b505050565b6000611287600861084b565b905090565b600080838054905014156112a35760009050611360565b600080848054905090505b808210156113075760006112c283836113e3565b9050848682815481106112d8576112d7611deb565b5b906000526020600020015411156112f157809150611301565b6001816112fe9190611879565b92505b506112ae565b60008211801561133f575083856001846113219190611f3e565b8154811061133257611331611deb565b5b9060005260206000200154145b1561135a576001826113519190611f3e565b92505050611360565b81925050505b92915050565b6001816000016000828254019250508190555050565b6113cc600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206113c78361058e565b611409565b50565b6113e160066113dc610424565b611409565b565b600060028284186113f49190611fa1565b8284166114019190611879565b905092915050565b600061141361127b565b90508061142284600001611484565b101561147f5782600001819080600181540180825580915050600190039060005260206000200160009091909190915055826001018290806001815401808255809150506001900390600052602060002001600090919091909150555b505050565b6000808280549050141561149b57600090506114cc565b81600183805490506114ad9190611f3e565b815481106114be576114bd611deb565b5b906000526020600020015490505b919050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561150b5780820151818401526020810190506114f0565b8381111561151a576000848401525b50505050565b6000601f19601f8301169050919050565b600061153c826114d1565b61154681856114dc565b93506115568185602086016114ed565b61155f81611520565b840191505092915050565b600060208201905081810360008301526115848184611531565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006115bc82611591565b9050919050565b6115cc816115b1565b81146115d757600080fd5b50565b6000813590506115e9816115c3565b92915050565b6000819050919050565b611602816115ef565b811461160d57600080fd5b50565b60008135905061161f816115f9565b92915050565b6000806040838503121561163c5761163b61158c565b5b600061164a858286016115da565b925050602061165b85828601611610565b9150509250929050565b60008115159050919050565b61167a81611665565b82525050565b60006020820190506116956000830184611671565b92915050565b6116a4816115ef565b82525050565b60006020820190506116bf600083018461169b565b92915050565b6000806000606084860312156116de576116dd61158c565b5b60006116ec868287016115da565b93505060206116fd868287016115da565b925050604061170e86828701611610565b9150509250925092565b600060ff82169050919050565b61172e81611718565b82525050565b60006020820190506117496000830184611725565b92915050565b6000602082840312156117655761176461158c565b5b6000611773848285016115da565b91505092915050565b6000602082840312156117925761179161158c565b5b60006117a084828501611610565b91505092915050565b600080604083850312156117c0576117bf61158c565b5b60006117ce858286016115da565b92505060206117df858286016115da565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061183057607f821691505b60208210811415611844576118436117e9565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611884826115ef565b915061188f836115ef565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156118c4576118c361184a565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b600061192b6025836114dc565b9150611936826118cf565b604082019050919050565b6000602082019050818103600083015261195a8161191e565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006119bd6024836114dc565b91506119c882611961565b604082019050919050565b600060208201905081810360008301526119ec816119b0565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611a4f6022836114dc565b9150611a5a826119f3565b604082019050919050565b60006020820190508181036000830152611a7e81611a42565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611abb601d836114dc565b9150611ac682611a85565b602082019050919050565b60006020820190508181036000830152611aea81611aae565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611b4d6025836114dc565b9150611b5882611af1565b604082019050919050565b60006020820190508181036000830152611b7c81611b40565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611bdf6023836114dc565b9150611bea82611b83565b604082019050919050565b60006020820190508181036000830152611c0e81611bd2565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611c716026836114dc565b9150611c7c82611c15565b604082019050919050565b60006020820190508181036000830152611ca081611c64565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611cdd601f836114dc565b9150611ce882611ca7565b602082019050919050565b60006020820190508181036000830152611d0c81611cd0565b9050919050565b7f4552433230536e617073686f743a206964206973203000000000000000000000600082015250565b6000611d496016836114dc565b9150611d5482611d13565b602082019050919050565b60006020820190508181036000830152611d7881611d3c565b9050919050565b7f4552433230536e617073686f743a206e6f6e6578697374656e74206964000000600082015250565b6000611db5601d836114dc565b9150611dc082611d7f565b602082019050919050565b60006020820190508181036000830152611de481611da8565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611e766021836114dc565b9150611e8182611e1a565b604082019050919050565b60006020820190508181036000830152611ea581611e69565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b6000611f086022836114dc565b9150611f1382611eac565b604082019050919050565b60006020820190508181036000830152611f3781611efb565b9050919050565b6000611f49826115ef565b9150611f54836115ef565b925082821015611f6757611f6661184a565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611fac826115ef565b9150611fb7836115ef565b925082611fc757611fc6611f72565b5b82820490509291505056fea26469706673582212204ce3d21ae93d7961cf14a640cb1ec641863e7516070db2a501d1053fa81a989064736f6c63430008090033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var ERC20SnapshotMock__factory = /** @class */ (function (_super) {
    __extends(ERC20SnapshotMock__factory, _super);
    function ERC20SnapshotMock__factory() {
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
        _this.contractName = "ERC20SnapshotMock";
        return _this;
    }
    ERC20SnapshotMock__factory.prototype.deploy = function (name, symbol, initialAccount, initialBalance, overrides) {
        return _super.prototype.deploy.call(this, name, symbol, initialAccount, initialBalance, overrides || {});
    };
    ERC20SnapshotMock__factory.prototype.getDeployTransaction = function (name, symbol, initialAccount, initialBalance, overrides) {
        return _super.prototype.getDeployTransaction.call(this, name, symbol, initialAccount, initialBalance, overrides || {});
    };
    ERC20SnapshotMock__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ERC20SnapshotMock__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ERC20SnapshotMock__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ERC20SnapshotMock__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ERC20SnapshotMock__factory.bytecode = _bytecode;
    ERC20SnapshotMock__factory.abi = _abi;
    return ERC20SnapshotMock__factory;
}(ethers_1.ContractFactory));
exports.ERC20SnapshotMock__factory = ERC20SnapshotMock__factory;

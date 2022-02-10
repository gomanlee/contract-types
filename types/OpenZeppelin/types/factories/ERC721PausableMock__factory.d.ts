import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721PausableMock, ERC721PausableMockInterface } from "../ERC721PausableMock";
declare type ERC721PausableMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC721PausableMock__factory extends ContractFactory {
    constructor(...args: ERC721PausableMockConstructorParams);
    deploy(name: string, symbol: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC721PausableMock>;
    getDeployTransaction(name: string, symbol: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC721PausableMock;
    connect(signer: Signer): ERC721PausableMock__factory;
    static readonly contractName: "ERC721PausableMock";
    readonly contractName: "ERC721PausableMock";
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162003132380380620031328339818101604052810190620000379190620002dd565b818181600090805190602001906200005192919062000090565b5080600190805190602001906200006a92919062000090565b5050506000600660006101000a81548160ff0219169083151502179055505050620003c7565b8280546200009e9062000391565b90600052602060002090601f016020900481019282620000c257600085556200010e565b82601f10620000dd57805160ff19168380011785556200010e565b828001600101855582156200010e579182015b828111156200010d578251825591602001919060010190620000f0565b5b5090506200011d919062000121565b5090565b5b808211156200013c57600081600090555060010162000122565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001a9826200015e565b810181811067ffffffffffffffff82111715620001cb57620001ca6200016f565b5b80604052505050565b6000620001e062000140565b9050620001ee82826200019e565b919050565b600067ffffffffffffffff8211156200021157620002106200016f565b5b6200021c826200015e565b9050602081019050919050565b60005b83811015620002495780820151818401526020810190506200022c565b8381111562000259576000848401525b50505050565b6000620002766200027084620001f3565b620001d4565b90508281526020810184848401111562000295576200029462000159565b5b620002a284828562000229565b509392505050565b600082601f830112620002c257620002c162000154565b5b8151620002d48482602086016200025f565b91505092915050565b60008060408385031215620002f757620002f66200014a565b5b600083015167ffffffffffffffff8111156200031857620003176200014f565b5b6200032685828601620002aa565b925050602083015167ffffffffffffffff8111156200034a57620003496200014f565b5b6200035885828601620002aa565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620003aa57607f821691505b60208210811415620003c157620003c062000362565b5b50919050565b612d5b80620003d76000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80635c975abb116100b857806395d89b411161007c57806395d89b4114610324578063a144819414610342578063a22cb4651461035e578063b88d4fde1461037a578063c87b56dd14610396578063e985e9c5146103c657610137565b80635c975abb146102805780636352211e1461029e57806370a08231146102ce5780638456cb59146102fe5780638832e6e31461030857610137565b80633f4ba83a116100ff5780633f4ba83a146101f257806340c10f19146101fc57806342842e0e1461021857806342966c68146102345780634f558e791461025057610137565b806301ffc9a71461013c57806306fdde031461016c578063081812fc1461018a578063095ea7b3146101ba57806323b872dd146101d6575b600080fd5b61015660048036038101906101519190611b05565b6103f6565b6040516101639190611b4d565b60405180910390f35b6101746104d8565b6040516101819190611c01565b60405180910390f35b6101a4600480360381019061019f9190611c59565b61056a565b6040516101b19190611cc7565b60405180910390f35b6101d460048036038101906101cf9190611d0e565b6105ef565b005b6101f060048036038101906101eb9190611d4e565b610707565b005b6101fa610767565b005b61021660048036038101906102119190611d0e565b610771565b005b610232600480360381019061022d9190611d4e565b61077f565b005b61024e60048036038101906102499190611c59565b61079f565b005b61026a60048036038101906102659190611c59565b6107ab565b6040516102779190611b4d565b60405180910390f35b6102886107bd565b6040516102959190611b4d565b60405180910390f35b6102b860048036038101906102b39190611c59565b6107d4565b6040516102c59190611cc7565b60405180910390f35b6102e860048036038101906102e39190611da1565b610886565b6040516102f59190611ddd565b60405180910390f35b61030661093e565b005b610322600480360381019061031d9190611f2d565b610948565b005b61032c610958565b6040516103399190611c01565b60405180910390f35b61035c60048036038101906103579190611d0e565b6109ea565b005b61037860048036038101906103739190611fc8565b6109f8565b005b610394600480360381019061038f9190612008565b610a0e565b005b6103b060048036038101906103ab9190611c59565b610a70565b6040516103bd9190611c01565b60405180910390f35b6103e060048036038101906103db919061208b565b610b17565b6040516103ed9190611b4d565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104c157507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806104d157506104d082610bab565b5b9050919050565b6060600080546104e7906120fa565b80601f0160208091040260200160405190810160405280929190818152602001828054610513906120fa565b80156105605780601f1061053557610100808354040283529160200191610560565b820191906000526020600020905b81548152906001019060200180831161054357829003601f168201915b5050505050905090565b600061057582610c15565b6105b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ab9061219e565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006105fa826107d4565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561066b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066290612230565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661068a610c81565b73ffffffffffffffffffffffffffffffffffffffff1614806106b957506106b8816106b3610c81565b610b17565b5b6106f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ef906122c2565b60405180910390fd5b6107028383610c89565b505050565b610718610712610c81565b82610d42565b610757576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074e90612354565b60405180910390fd5b610762838383610e20565b505050565b61076f611087565b565b61077b8282611129565b5050565b61079a83838360405180602001604052806000815250610a0e565b505050565b6107a881611303565b50565b60006107b682610c15565b9050919050565b6000600660009054906101000a900460ff16905090565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561087d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610874906123e6565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ee90612478565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610946611420565b565b6109538383836114c3565b505050565b606060018054610967906120fa565b80601f0160208091040260200160405190810160405280929190818152602001828054610993906120fa565b80156109e05780601f106109b5576101008083540402835291602001916109e0565b820191906000526020600020905b8154815290600101906020018083116109c357829003601f168201915b5050505050905090565b6109f4828261151e565b5050565b610a0a610a03610c81565b838361153c565b5050565b610a1f610a19610c81565b83610d42565b610a5e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5590612354565b60405180910390fd5b610a6a848484846116a9565b50505050565b6060610a7b82610c15565b610aba576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab19061250a565b60405180910390fd5b6000610ac4611705565b90506000815111610ae45760405180602001604052806000815250610b0f565b80610aee8461171c565b604051602001610aff929190612566565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610cfc836107d4565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610d4d82610c15565b610d8c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d83906125fc565b60405180910390fd5b6000610d97836107d4565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610e0657508373ffffffffffffffffffffffffffffffffffffffff16610dee8461056a565b73ffffffffffffffffffffffffffffffffffffffff16145b80610e175750610e168185610b17565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610e40826107d4565b73ffffffffffffffffffffffffffffffffffffffff1614610e96576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e8d9061268e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f06576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610efd90612720565b60405180910390fd5b610f1183838361187d565b610f1c600082610c89565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f6c919061276f565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610fc391906127a3565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46110828383836118d5565b505050565b61108f6107bd565b6110ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110c590612845565b60405180910390fd5b6000600660006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa611112610c81565b60405161111f9190611cc7565b60405180910390a1565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611199576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611190906128b1565b60405180910390fd5b6111a281610c15565b156111e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111d99061291d565b60405180910390fd5b6111ee6000838361187d565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461123e91906127a3565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46112ff600083836118d5565b5050565b600061130e826107d4565b905061131c8160008461187d565b611327600083610c89565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611377919061276f565b925050819055506002600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461141c816000846118d5565b5050565b6114286107bd565b15611468576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161145f90612989565b60405180910390fd5b6001600660006101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586114ac610c81565b6040516114b99190611cc7565b60405180910390a1565b6114cd8383611129565b6114da60008484846118da565b611519576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161151090612a1b565b60405180910390fd5b505050565b6115388282604051806020016040528060008152506114c3565b5050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156115ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115a290612a87565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161169c9190611b4d565b60405180910390a3505050565b6116b4848484610e20565b6116c0848484846118da565b6116ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116f690612a1b565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000821415611764576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611878565b600082905060005b6000821461179657808061177f90612aa7565b915050600a8261178f9190612b1f565b915061176c565b60008167ffffffffffffffff8111156117b2576117b1611e02565b5b6040519080825280601f01601f1916602001820160405280156117e45781602001600182028036833780820191505090505b5090505b60008514611871576001826117fd919061276f565b9150600a8561180c9190612b50565b603061181891906127a3565b60f81b81838151811061182e5761182d612b81565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8561186a9190612b1f565b94506117e8565b8093505050505b919050565b611888838383611a71565b6118906107bd565b156118d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118c790612c22565b60405180910390fd5b505050565b505050565b60006118fb8473ffffffffffffffffffffffffffffffffffffffff16611a76565b15611a64578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611924610c81565b8786866040518563ffffffff1660e01b81526004016119469493929190612c97565b602060405180830381600087803b15801561196057600080fd5b505af192505050801561199157506040513d601f19601f8201168201806040525081019061198e9190612cf8565b60015b611a14573d80600081146119c1576040519150601f19603f3d011682016040523d82523d6000602084013e6119c6565b606091505b50600081511415611a0c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a0390612a1b565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611a69565b600190505b949350505050565b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611ae281611aad565b8114611aed57600080fd5b50565b600081359050611aff81611ad9565b92915050565b600060208284031215611b1b57611b1a611aa3565b5b6000611b2984828501611af0565b91505092915050565b60008115159050919050565b611b4781611b32565b82525050565b6000602082019050611b626000830184611b3e565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611ba2578082015181840152602081019050611b87565b83811115611bb1576000848401525b50505050565b6000601f19601f8301169050919050565b6000611bd382611b68565b611bdd8185611b73565b9350611bed818560208601611b84565b611bf681611bb7565b840191505092915050565b60006020820190508181036000830152611c1b8184611bc8565b905092915050565b6000819050919050565b611c3681611c23565b8114611c4157600080fd5b50565b600081359050611c5381611c2d565b92915050565b600060208284031215611c6f57611c6e611aa3565b5b6000611c7d84828501611c44565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611cb182611c86565b9050919050565b611cc181611ca6565b82525050565b6000602082019050611cdc6000830184611cb8565b92915050565b611ceb81611ca6565b8114611cf657600080fd5b50565b600081359050611d0881611ce2565b92915050565b60008060408385031215611d2557611d24611aa3565b5b6000611d3385828601611cf9565b9250506020611d4485828601611c44565b9150509250929050565b600080600060608486031215611d6757611d66611aa3565b5b6000611d7586828701611cf9565b9350506020611d8686828701611cf9565b9250506040611d9786828701611c44565b9150509250925092565b600060208284031215611db757611db6611aa3565b5b6000611dc584828501611cf9565b91505092915050565b611dd781611c23565b82525050565b6000602082019050611df26000830184611dce565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611e3a82611bb7565b810181811067ffffffffffffffff82111715611e5957611e58611e02565b5b80604052505050565b6000611e6c611a99565b9050611e788282611e31565b919050565b600067ffffffffffffffff821115611e9857611e97611e02565b5b611ea182611bb7565b9050602081019050919050565b82818337600083830152505050565b6000611ed0611ecb84611e7d565b611e62565b905082815260208101848484011115611eec57611eeb611dfd565b5b611ef7848285611eae565b509392505050565b600082601f830112611f1457611f13611df8565b5b8135611f24848260208601611ebd565b91505092915050565b600080600060608486031215611f4657611f45611aa3565b5b6000611f5486828701611cf9565b9350506020611f6586828701611c44565b925050604084013567ffffffffffffffff811115611f8657611f85611aa8565b5b611f9286828701611eff565b9150509250925092565b611fa581611b32565b8114611fb057600080fd5b50565b600081359050611fc281611f9c565b92915050565b60008060408385031215611fdf57611fde611aa3565b5b6000611fed85828601611cf9565b9250506020611ffe85828601611fb3565b9150509250929050565b6000806000806080858703121561202257612021611aa3565b5b600061203087828801611cf9565b945050602061204187828801611cf9565b935050604061205287828801611c44565b925050606085013567ffffffffffffffff81111561207357612072611aa8565b5b61207f87828801611eff565b91505092959194509250565b600080604083850312156120a2576120a1611aa3565b5b60006120b085828601611cf9565b92505060206120c185828601611cf9565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061211257607f821691505b60208210811415612126576121256120cb565b5b50919050565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000612188602c83611b73565b91506121938261212c565b604082019050919050565b600060208201905081810360008301526121b78161217b565b9050919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b600061221a602183611b73565b9150612225826121be565b604082019050919050565b600060208201905081810360008301526122498161220d565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b60006122ac603883611b73565b91506122b782612250565b604082019050919050565b600060208201905081810360008301526122db8161229f565b9050919050565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b600061233e603183611b73565b9150612349826122e2565b604082019050919050565b6000602082019050818103600083015261236d81612331565b9050919050565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b60006123d0602983611b73565b91506123db82612374565b604082019050919050565b600060208201905081810360008301526123ff816123c3565b9050919050565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b6000612462602a83611b73565b915061246d82612406565b604082019050919050565b6000602082019050818103600083015261249181612455565b9050919050565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b60006124f4602f83611b73565b91506124ff82612498565b604082019050919050565b60006020820190508181036000830152612523816124e7565b9050919050565b600081905092915050565b600061254082611b68565b61254a818561252a565b935061255a818560208601611b84565b80840191505092915050565b60006125728285612535565b915061257e8284612535565b91508190509392505050565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b60006125e6602c83611b73565b91506125f18261258a565b604082019050919050565b60006020820190508181036000830152612615816125d9565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612678602583611b73565b91506126838261261c565b604082019050919050565b600060208201905081810360008301526126a78161266b565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061270a602483611b73565b9150612715826126ae565b604082019050919050565b60006020820190508181036000830152612739816126fd565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061277a82611c23565b915061278583611c23565b92508282101561279857612797612740565b5b828203905092915050565b60006127ae82611c23565b91506127b983611c23565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156127ee576127ed612740565b5b828201905092915050565b7f5061757361626c653a206e6f7420706175736564000000000000000000000000600082015250565b600061282f601483611b73565b915061283a826127f9565b602082019050919050565b6000602082019050818103600083015261285e81612822565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b600061289b602083611b73565b91506128a682612865565b602082019050919050565b600060208201905081810360008301526128ca8161288e565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612907601c83611b73565b9150612912826128d1565b602082019050919050565b60006020820190508181036000830152612936816128fa565b9050919050565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b6000612973601083611b73565b915061297e8261293d565b602082019050919050565b600060208201905081810360008301526129a281612966565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612a05603283611b73565b9150612a10826129a9565b604082019050919050565b60006020820190508181036000830152612a34816129f8565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612a71601983611b73565b9150612a7c82612a3b565b602082019050919050565b60006020820190508181036000830152612aa081612a64565b9050919050565b6000612ab282611c23565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612ae557612ae4612740565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612b2a82611c23565b9150612b3583611c23565b925082612b4557612b44612af0565b5b828204905092915050565b6000612b5b82611c23565b9150612b6683611c23565b925082612b7657612b75612af0565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4552433732315061757361626c653a20746f6b656e207472616e73666572207760008201527f68696c6520706175736564000000000000000000000000000000000000000000602082015250565b6000612c0c602b83611b73565b9150612c1782612bb0565b604082019050919050565b60006020820190508181036000830152612c3b81612bff565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000612c6982612c42565b612c738185612c4d565b9350612c83818560208601611b84565b612c8c81611bb7565b840191505092915050565b6000608082019050612cac6000830187611cb8565b612cb96020830186611cb8565b612cc66040830185611dce565b8181036060830152612cd88184612c5e565b905095945050505050565b600081519050612cf281611ad9565b92915050565b600060208284031215612d0e57612d0d611aa3565b5b6000612d1c84828501612ce3565b9150509291505056fea26469706673582212206d2ca890f02b86805335c2225fe4b650378d029e47ff23628b1ed26547d3119664736f6c63430008090033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ERC721PausableMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC721PausableMock;
}
export {};

import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721BurnableMock, ERC721BurnableMockInterface } from "../ERC721BurnableMock";
declare type ERC721BurnableMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC721BurnableMock__factory extends ContractFactory {
    constructor(...args: ERC721BurnableMockConstructorParams);
    deploy(name: string, symbol: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC721BurnableMock>;
    getDeployTransaction(name: string, symbol: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC721BurnableMock;
    connect(signer: Signer): ERC721BurnableMock__factory;
    static readonly contractName: "ERC721BurnableMock";
    readonly contractName: "ERC721BurnableMock";
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162002e7438038062002e748339818101604052810190620000379190620002c2565b818181600090805190602001906200005192919062000075565b5080600190805190602001906200006a92919062000075565b5050505050620003ac565b828054620000839062000376565b90600052602060002090601f016020900481019282620000a75760008555620000f3565b82601f10620000c257805160ff1916838001178555620000f3565b82800160010185558215620000f3579182015b82811115620000f2578251825591602001919060010190620000d5565b5b50905062000102919062000106565b5090565b5b808211156200012157600081600090555060010162000107565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200018e8262000143565b810181811067ffffffffffffffff82111715620001b057620001af62000154565b5b80604052505050565b6000620001c562000125565b9050620001d3828262000183565b919050565b600067ffffffffffffffff821115620001f657620001f562000154565b5b620002018262000143565b9050602081019050919050565b60005b838110156200022e57808201518184015260208101905062000211565b838111156200023e576000848401525b50505050565b60006200025b6200025584620001d8565b620001b9565b9050828152602081018484840111156200027a57620002796200013e565b5b620002878482856200020e565b509392505050565b600082601f830112620002a757620002a662000139565b5b8151620002b984826020860162000244565b91505092915050565b60008060408385031215620002dc57620002db6200012f565b5b600083015167ffffffffffffffff811115620002fd57620002fc62000134565b5b6200030b858286016200028f565b925050602083015167ffffffffffffffff8111156200032f576200032e62000134565b5b6200033d858286016200028f565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200038f57607f821691505b60208210811415620003a657620003a562000347565b5b50919050565b612ab880620003bc6000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80636352211e116100a2578063a144819411610071578063a1448194146102ef578063a22cb4651461030b578063b88d4fde14610327578063c87b56dd14610343578063e985e9c51461037357610116565b80636352211e1461025557806370a08231146102855780638832e6e3146102b557806395d89b41146102d157610116565b806323b872dd116100e957806323b872dd146101b557806340c10f19146101d157806342842e0e146101ed57806342966c68146102095780634f558e791461022557610116565b806301ffc9a71461011b57806306fdde031461014b578063081812fc14610169578063095ea7b314610199575b600080fd5b6101356004803603810190610130919061193a565b6103a3565b6040516101429190611982565b60405180910390f35b610153610485565b6040516101609190611a36565b60405180910390f35b610183600480360381019061017e9190611a8e565b610517565b6040516101909190611afc565b60405180910390f35b6101b360048036038101906101ae9190611b43565b61059c565b005b6101cf60048036038101906101ca9190611b83565b6106b4565b005b6101eb60048036038101906101e69190611b43565b610714565b005b61020760048036038101906102029190611b83565b610722565b005b610223600480360381019061021e9190611a8e565b610742565b005b61023f600480360381019061023a9190611a8e565b61079e565b60405161024c9190611982565b60405180910390f35b61026f600480360381019061026a9190611a8e565b6107b0565b60405161027c9190611afc565b60405180910390f35b61029f600480360381019061029a9190611bd6565b610862565b6040516102ac9190611c12565b60405180910390f35b6102cf60048036038101906102ca9190611d62565b61091a565b005b6102d961092a565b6040516102e69190611a36565b60405180910390f35b61030960048036038101906103049190611b43565b6109bc565b005b61032560048036038101906103209190611dfd565b6109ca565b005b610341600480360381019061033c9190611e3d565b6109e0565b005b61035d60048036038101906103589190611a8e565b610a42565b60405161036a9190611a36565b60405180910390f35b61038d60048036038101906103889190611ec0565b610ae9565b60405161039a9190611982565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061046e57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061047e575061047d82610b7d565b5b9050919050565b60606000805461049490611f2f565b80601f01602080910402602001604051908101604052809291908181526020018280546104c090611f2f565b801561050d5780601f106104e25761010080835404028352916020019161050d565b820191906000526020600020905b8154815290600101906020018083116104f057829003601f168201915b5050505050905090565b600061052282610be7565b610561576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055890611fd3565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006105a7826107b0565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610618576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060f90612065565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610637610c53565b73ffffffffffffffffffffffffffffffffffffffff161480610666575061066581610660610c53565b610ae9565b5b6106a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069c906120f7565b60405180910390fd5b6106af8383610c5b565b505050565b6106c56106bf610c53565b82610d14565b610704576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106fb90612189565b60405180910390fd5b61070f838383610df2565b505050565b61071e8282611059565b5050565b61073d838383604051806020016040528060008152506109e0565b505050565b61075361074d610c53565b82610d14565b610792576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107899061221b565b60405180910390fd5b61079b81611233565b50565b60006107a982610be7565b9050919050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610859576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610850906122ad565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ca9061233f565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610925838383611350565b505050565b60606001805461093990611f2f565b80601f016020809104026020016040519081016040528092919081815260200182805461096590611f2f565b80156109b25780601f10610987576101008083540402835291602001916109b2565b820191906000526020600020905b81548152906001019060200180831161099557829003601f168201915b5050505050905090565b6109c682826113ab565b5050565b6109dc6109d5610c53565b83836113c9565b5050565b6109f16109eb610c53565b83610d14565b610a30576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2790612189565b60405180910390fd5b610a3c84848484611536565b50505050565b6060610a4d82610be7565b610a8c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a83906123d1565b60405180910390fd5b6000610a96611592565b90506000815111610ab65760405180602001604052806000815250610ae1565b80610ac0846115a9565b604051602001610ad192919061242d565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610cce836107b0565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610d1f82610be7565b610d5e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d55906124c3565b60405180910390fd5b6000610d69836107b0565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610dd857508373ffffffffffffffffffffffffffffffffffffffff16610dc084610517565b73ffffffffffffffffffffffffffffffffffffffff16145b80610de95750610de88185610ae9565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610e12826107b0565b73ffffffffffffffffffffffffffffffffffffffff1614610e68576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e5f90612555565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ed8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ecf906125e7565b60405180910390fd5b610ee383838361170a565b610eee600082610c5b565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f3e9190612636565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f95919061266a565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461105483838361170f565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110c09061270c565b60405180910390fd5b6110d281610be7565b15611112576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110990612778565b60405180910390fd5b61111e6000838361170a565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461116e919061266a565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461122f6000838361170f565b5050565b600061123e826107b0565b905061124c8160008461170a565b611257600083610c5b565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112a79190612636565b925050819055506002600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461134c8160008461170f565b5050565b61135a8383611059565b6113676000848484611714565b6113a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161139d9061280a565b60405180910390fd5b505050565b6113c5828260405180602001604052806000815250611350565b5050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611438576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161142f90612876565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516115299190611982565b60405180910390a3505050565b611541848484610df2565b61154d84848484611714565b61158c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115839061280a565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606060008214156115f1576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611705565b600082905060005b6000821461162357808061160c90612896565b915050600a8261161c919061290e565b91506115f9565b60008167ffffffffffffffff81111561163f5761163e611c37565b5b6040519080825280601f01601f1916602001820160405280156116715781602001600182028036833780820191505090505b5090505b600085146116fe5760018261168a9190612636565b9150600a85611699919061293f565b60306116a5919061266a565b60f81b8183815181106116bb576116ba612970565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856116f7919061290e565b9450611675565b8093505050505b919050565b505050565b505050565b60006117358473ffffffffffffffffffffffffffffffffffffffff166118ab565b1561189e578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261175e610c53565b8786866040518563ffffffff1660e01b815260040161178094939291906129f4565b602060405180830381600087803b15801561179a57600080fd5b505af19250505080156117cb57506040513d601f19601f820116820180604052508101906117c89190612a55565b60015b61184e573d80600081146117fb576040519150601f19603f3d011682016040523d82523d6000602084013e611800565b606091505b50600081511415611846576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161183d9061280a565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506118a3565b600190505b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611917816118e2565b811461192257600080fd5b50565b6000813590506119348161190e565b92915050565b6000602082840312156119505761194f6118d8565b5b600061195e84828501611925565b91505092915050565b60008115159050919050565b61197c81611967565b82525050565b60006020820190506119976000830184611973565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156119d75780820151818401526020810190506119bc565b838111156119e6576000848401525b50505050565b6000601f19601f8301169050919050565b6000611a088261199d565b611a1281856119a8565b9350611a228185602086016119b9565b611a2b816119ec565b840191505092915050565b60006020820190508181036000830152611a5081846119fd565b905092915050565b6000819050919050565b611a6b81611a58565b8114611a7657600080fd5b50565b600081359050611a8881611a62565b92915050565b600060208284031215611aa457611aa36118d8565b5b6000611ab284828501611a79565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611ae682611abb565b9050919050565b611af681611adb565b82525050565b6000602082019050611b116000830184611aed565b92915050565b611b2081611adb565b8114611b2b57600080fd5b50565b600081359050611b3d81611b17565b92915050565b60008060408385031215611b5a57611b596118d8565b5b6000611b6885828601611b2e565b9250506020611b7985828601611a79565b9150509250929050565b600080600060608486031215611b9c57611b9b6118d8565b5b6000611baa86828701611b2e565b9350506020611bbb86828701611b2e565b9250506040611bcc86828701611a79565b9150509250925092565b600060208284031215611bec57611beb6118d8565b5b6000611bfa84828501611b2e565b91505092915050565b611c0c81611a58565b82525050565b6000602082019050611c276000830184611c03565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611c6f826119ec565b810181811067ffffffffffffffff82111715611c8e57611c8d611c37565b5b80604052505050565b6000611ca16118ce565b9050611cad8282611c66565b919050565b600067ffffffffffffffff821115611ccd57611ccc611c37565b5b611cd6826119ec565b9050602081019050919050565b82818337600083830152505050565b6000611d05611d0084611cb2565b611c97565b905082815260208101848484011115611d2157611d20611c32565b5b611d2c848285611ce3565b509392505050565b600082601f830112611d4957611d48611c2d565b5b8135611d59848260208601611cf2565b91505092915050565b600080600060608486031215611d7b57611d7a6118d8565b5b6000611d8986828701611b2e565b9350506020611d9a86828701611a79565b925050604084013567ffffffffffffffff811115611dbb57611dba6118dd565b5b611dc786828701611d34565b9150509250925092565b611dda81611967565b8114611de557600080fd5b50565b600081359050611df781611dd1565b92915050565b60008060408385031215611e1457611e136118d8565b5b6000611e2285828601611b2e565b9250506020611e3385828601611de8565b9150509250929050565b60008060008060808587031215611e5757611e566118d8565b5b6000611e6587828801611b2e565b9450506020611e7687828801611b2e565b9350506040611e8787828801611a79565b925050606085013567ffffffffffffffff811115611ea857611ea76118dd565b5b611eb487828801611d34565b91505092959194509250565b60008060408385031215611ed757611ed66118d8565b5b6000611ee585828601611b2e565b9250506020611ef685828601611b2e565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611f4757607f821691505b60208210811415611f5b57611f5a611f00565b5b50919050565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000611fbd602c836119a8565b9150611fc882611f61565b604082019050919050565b60006020820190508181036000830152611fec81611fb0565b9050919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b600061204f6021836119a8565b915061205a82611ff3565b604082019050919050565b6000602082019050818103600083015261207e81612042565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b60006120e16038836119a8565b91506120ec82612085565b604082019050919050565b60006020820190508181036000830152612110816120d4565b9050919050565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b60006121736031836119a8565b915061217e82612117565b604082019050919050565b600060208201905081810360008301526121a281612166565b9050919050565b7f4552433732314275726e61626c653a2063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656400000000000000000000000000000000602082015250565b60006122056030836119a8565b9150612210826121a9565b604082019050919050565b60006020820190508181036000830152612234816121f8565b9050919050565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b60006122976029836119a8565b91506122a28261223b565b604082019050919050565b600060208201905081810360008301526122c68161228a565b9050919050565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b6000612329602a836119a8565b9150612334826122cd565b604082019050919050565b600060208201905081810360008301526123588161231c565b9050919050565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b60006123bb602f836119a8565b91506123c68261235f565b604082019050919050565b600060208201905081810360008301526123ea816123ae565b9050919050565b600081905092915050565b60006124078261199d565b61241181856123f1565b93506124218185602086016119b9565b80840191505092915050565b600061243982856123fc565b915061244582846123fc565b91508190509392505050565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b60006124ad602c836119a8565b91506124b882612451565b604082019050919050565b600060208201905081810360008301526124dc816124a0565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b600061253f6025836119a8565b915061254a826124e3565b604082019050919050565b6000602082019050818103600083015261256e81612532565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006125d16024836119a8565b91506125dc82612575565b604082019050919050565b60006020820190508181036000830152612600816125c4565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061264182611a58565b915061264c83611a58565b92508282101561265f5761265e612607565b5b828203905092915050565b600061267582611a58565b915061268083611a58565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156126b5576126b4612607565b5b828201905092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b60006126f66020836119a8565b9150612701826126c0565b602082019050919050565b60006020820190508181036000830152612725816126e9565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612762601c836119a8565b915061276d8261272c565b602082019050919050565b6000602082019050818103600083015261279181612755565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b60006127f46032836119a8565b91506127ff82612798565b604082019050919050565b60006020820190508181036000830152612823816127e7565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006128606019836119a8565b915061286b8261282a565b602082019050919050565b6000602082019050818103600083015261288f81612853565b9050919050565b60006128a182611a58565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156128d4576128d3612607565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061291982611a58565b915061292483611a58565b925082612934576129336128df565b5b828204905092915050565b600061294a82611a58565b915061295583611a58565b925082612965576129646128df565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b600082825260208201905092915050565b60006129c68261299f565b6129d081856129aa565b93506129e08185602086016119b9565b6129e9816119ec565b840191505092915050565b6000608082019050612a096000830187611aed565b612a166020830186611aed565b612a236040830185611c03565b8181036060830152612a3581846129bb565b905095945050505050565b600081519050612a4f8161190e565b92915050565b600060208284031215612a6b57612a6a6118d8565b5b6000612a7984828501612a40565b9150509291505056fea2646970667358221220364f7f11e0b140559199cb601cc24d7d3005ba8acde6ff06e5aa4e6bca59303964736f6c63430008090033";
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
    static createInterface(): ERC721BurnableMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC721BurnableMock;
}
export {};
import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721URIStorageMock, ERC721URIStorageMockInterface } from "../ERC721URIStorageMock";
declare type ERC721URIStorageMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC721URIStorageMock__factory extends ContractFactory {
    constructor(...args: ERC721URIStorageMockConstructorParams);
    deploy(name: string, symbol: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC721URIStorageMock>;
    getDeployTransaction(name: string, symbol: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC721URIStorageMock;
    connect(signer: Signer): ERC721URIStorageMock__factory;
    static readonly contractName: "ERC721URIStorageMock";
    readonly contractName: "ERC721URIStorageMock";
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162003507380380620035078339818101604052810190620000379190620002c2565b818181600090805190602001906200005192919062000075565b5080600190805190602001906200006a92919062000075565b5050505050620003ac565b828054620000839062000376565b90600052602060002090601f016020900481019282620000a75760008555620000f3565b82601f10620000c257805160ff1916838001178555620000f3565b82800160010185558215620000f3579182015b82811115620000f2578251825591602001919060010190620000d5565b5b50905062000102919062000106565b5090565b5b808211156200012157600081600090555060010162000107565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200018e8262000143565b810181811067ffffffffffffffff82111715620001b057620001af62000154565b5b80604052505050565b6000620001c562000125565b9050620001d3828262000183565b919050565b600067ffffffffffffffff821115620001f657620001f562000154565b5b620002018262000143565b9050602081019050919050565b60005b838110156200022e57808201518184015260208101905062000211565b838111156200023e576000848401525b50505050565b60006200025b6200025584620001d8565b620001b9565b9050828152602081018484840111156200027a57620002796200013e565b5b620002878482856200020e565b509392505050565b600082601f830112620002a757620002a662000139565b5b8151620002b984826020860162000244565b91505092915050565b60008060408385031215620002dc57620002db6200012f565b5b600083015167ffffffffffffffff811115620002fd57620002fc62000134565b5b6200030b858286016200028f565b925050602083015167ffffffffffffffff8111156200032f576200032e62000134565b5b6200033d858286016200028f565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200038f57607f821691505b60208210811415620003a657620003a562000347565b5b50919050565b61314b80620003bc6000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c806355f804b3116100b857806395d89b411161007c57806395d89b4114610348578063a144819414610366578063a22cb46514610382578063b88d4fde1461039e578063c87b56dd146103ba578063e985e9c5146103ea57610137565b806355f804b3146102925780636352211e146102ae5780636c0360eb146102de57806370a08231146102fc5780638832e6e31461032c57610137565b806323b872dd116100ff57806323b872dd146101f257806340c10f191461020e57806342842e0e1461022a57806342966c68146102465780634f558e791461026257610137565b806301ffc9a71461013c57806306fdde031461016c578063081812fc1461018a578063095ea7b3146101ba578063162094c4146101d6575b600080fd5b61015660048036038101906101519190611d91565b61041a565b6040516101639190611dd9565b60405180910390f35b6101746104fc565b6040516101819190611e8d565b60405180910390f35b6101a4600480360381019061019f9190611ee5565b61058e565b6040516101b19190611f53565b60405180910390f35b6101d460048036038101906101cf9190611f9a565b610613565b005b6101f060048036038101906101eb919061210f565b61072b565b005b61020c6004803603810190610207919061216b565b610739565b005b61022860048036038101906102239190611f9a565b610799565b005b610244600480360381019061023f919061216b565b6107a7565b005b610260600480360381019061025b9190611ee5565b6107c7565b005b61027c60048036038101906102779190611ee5565b6107d3565b6040516102899190611dd9565b60405180910390f35b6102ac60048036038101906102a7919061221e565b6107e5565b005b6102c860048036038101906102c39190611ee5565b6107fb565b6040516102d59190611f53565b60405180910390f35b6102e66108ad565b6040516102f39190611e8d565b60405180910390f35b6103166004803603810190610311919061226b565b6108bc565b60405161032391906122a7565b60405180910390f35b61034660048036038101906103419190612363565b610974565b005b610350610984565b60405161035d9190611e8d565b60405180910390f35b610380600480360381019061037b9190611f9a565b610a16565b005b61039c600480360381019061039791906123fe565b610a24565b005b6103b860048036038101906103b3919061243e565b610a3a565b005b6103d460048036038101906103cf9190611ee5565b610a9c565b6040516103e19190611e8d565b60405180910390f35b61040460048036038101906103ff91906124c1565b610bee565b6040516104119190611dd9565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104e557507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806104f557506104f482610c82565b5b9050919050565b60606000805461050b90612530565b80601f016020809104026020016040519081016040528092919081815260200182805461053790612530565b80156105845780601f1061055957610100808354040283529160200191610584565b820191906000526020600020905b81548152906001019060200180831161056757829003601f168201915b5050505050905090565b600061059982610cec565b6105d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105cf906125d4565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061061e826107fb565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561068f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068690612666565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166106ae610d58565b73ffffffffffffffffffffffffffffffffffffffff1614806106dd57506106dc816106d7610d58565b610bee565b5b61071c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610713906126f8565b60405180910390fd5b6107268383610d60565b505050565b6107358282610e19565b5050565b61074a610744610d58565b82610e8d565b610789576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107809061278a565b60405180910390fd5b610794838383610f6b565b505050565b6107a382826111d2565b5050565b6107c283838360405180602001604052806000815250610a3a565b505050565b6107d0816113ac565b50565b60006107de82610cec565b9050919050565b8181600791906107f6929190611bbc565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156108a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089b9061281c565b60405180910390fd5b80915050919050565b60606108b76113ff565b905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561092d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610924906128ae565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61097f838383611491565b505050565b60606001805461099390612530565b80601f01602080910402602001604051908101604052809291908181526020018280546109bf90612530565b8015610a0c5780601f106109e157610100808354040283529160200191610a0c565b820191906000526020600020905b8154815290600101906020018083116109ef57829003601f168201915b5050505050905090565b610a2082826114ec565b5050565b610a36610a2f610d58565b838361150a565b5050565b610a4b610a45610d58565b83610e8d565b610a8a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a819061278a565b60405180910390fd5b610a9684848484611677565b50505050565b6060610aa782610cec565b610ae6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610add90612940565b60405180910390fd5b6000600660008481526020019081526020016000208054610b0690612530565b80601f0160208091040260200160405190810160405280929190818152602001828054610b3290612530565b8015610b7f5780601f10610b5457610100808354040283529160200191610b7f565b820191906000526020600020905b815481529060010190602001808311610b6257829003601f168201915b505050505090506000610b906113ff565b9050600081511415610ba6578192505050610be9565b600082511115610bdb578082604051602001610bc392919061299c565b60405160208183030381529060405292505050610be9565b610be4846116d3565b925050505b919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610dd3836107fb565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b610e2282610cec565b610e61576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e5890612a32565b60405180910390fd5b80600660008481526020019081526020016000209080519060200190610e88929190611c42565b505050565b6000610e9882610cec565b610ed7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ece90612ac4565b60405180910390fd5b6000610ee2836107fb565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610f5157508373ffffffffffffffffffffffffffffffffffffffff16610f398461058e565b73ffffffffffffffffffffffffffffffffffffffff16145b80610f625750610f618185610bee565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610f8b826107fb565b73ffffffffffffffffffffffffffffffffffffffff1614610fe1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fd890612b56565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611051576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161104890612be8565b60405180910390fd5b61105c83838361177a565b611067600082610d60565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546110b79190612c37565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461110e9190612c6b565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46111cd83838361177f565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611242576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161123990612d0d565b60405180910390fd5b61124b81610cec565b1561128b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161128290612d79565b60405180910390fd5b6112976000838361177a565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112e79190612c6b565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46113a86000838361177f565b5050565b6113b581611784565b60006006600083815260200190815260200160002080546113d590612530565b9050146113fc576006600082815260200190815260200160002060006113fb9190611cc8565b5b50565b60606007805461140e90612530565b80601f016020809104026020016040519081016040528092919081815260200182805461143a90612530565b80156114875780601f1061145c57610100808354040283529160200191611487565b820191906000526020600020905b81548152906001019060200180831161146a57829003601f168201915b5050505050905090565b61149b83836111d2565b6114a860008484846118a1565b6114e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114de90612e0b565b60405180910390fd5b505050565b611506828260405180602001604052806000815250611491565b5050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611579576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161157090612e77565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161166a9190611dd9565b60405180910390a3505050565b611682848484610f6b565b61168e848484846118a1565b6116cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116c490612e0b565b60405180910390fd5b50505050565b60606116de82610cec565b61171d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161171490612f09565b60405180910390fd5b60006117276113ff565b905060008151116117475760405180602001604052806000815250611772565b8061175184611a38565b60405160200161176292919061299c565b6040516020818303038152906040525b915050919050565b505050565b505050565b600061178f826107fb565b905061179d8160008461177a565b6117a8600083610d60565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546117f89190612c37565b925050819055506002600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461189d8160008461177f565b5050565b60006118c28473ffffffffffffffffffffffffffffffffffffffff16611b99565b15611a2b578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026118eb610d58565b8786866040518563ffffffff1660e01b815260040161190d9493929190612f7e565b602060405180830381600087803b15801561192757600080fd5b505af192505050801561195857506040513d601f19601f820116820180604052508101906119559190612fdf565b60015b6119db573d8060008114611988576040519150601f19603f3d011682016040523d82523d6000602084013e61198d565b606091505b506000815114156119d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119ca90612e0b565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611a30565b600190505b949350505050565b60606000821415611a80576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611b94565b600082905060005b60008214611ab2578080611a9b9061300c565b915050600a82611aab9190613084565b9150611a88565b60008167ffffffffffffffff811115611ace57611acd611fe4565b5b6040519080825280601f01601f191660200182016040528015611b005781602001600182028036833780820191505090505b5090505b60008514611b8d57600182611b199190612c37565b9150600a85611b2891906130b5565b6030611b349190612c6b565b60f81b818381518110611b4a57611b496130e6565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611b869190613084565b9450611b04565b8093505050505b919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b828054611bc890612530565b90600052602060002090601f016020900481019282611bea5760008555611c31565b82601f10611c0357803560ff1916838001178555611c31565b82800160010185558215611c31579182015b82811115611c30578235825591602001919060010190611c15565b5b509050611c3e9190611d08565b5090565b828054611c4e90612530565b90600052602060002090601f016020900481019282611c705760008555611cb7565b82601f10611c8957805160ff1916838001178555611cb7565b82800160010185558215611cb7579182015b82811115611cb6578251825591602001919060010190611c9b565b5b509050611cc49190611d08565b5090565b508054611cd490612530565b6000825580601f10611ce65750611d05565b601f016020900490600052602060002090810190611d049190611d08565b5b50565b5b80821115611d21576000816000905550600101611d09565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611d6e81611d39565b8114611d7957600080fd5b50565b600081359050611d8b81611d65565b92915050565b600060208284031215611da757611da6611d2f565b5b6000611db584828501611d7c565b91505092915050565b60008115159050919050565b611dd381611dbe565b82525050565b6000602082019050611dee6000830184611dca565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611e2e578082015181840152602081019050611e13565b83811115611e3d576000848401525b50505050565b6000601f19601f8301169050919050565b6000611e5f82611df4565b611e698185611dff565b9350611e79818560208601611e10565b611e8281611e43565b840191505092915050565b60006020820190508181036000830152611ea78184611e54565b905092915050565b6000819050919050565b611ec281611eaf565b8114611ecd57600080fd5b50565b600081359050611edf81611eb9565b92915050565b600060208284031215611efb57611efa611d2f565b5b6000611f0984828501611ed0565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611f3d82611f12565b9050919050565b611f4d81611f32565b82525050565b6000602082019050611f686000830184611f44565b92915050565b611f7781611f32565b8114611f8257600080fd5b50565b600081359050611f9481611f6e565b92915050565b60008060408385031215611fb157611fb0611d2f565b5b6000611fbf85828601611f85565b9250506020611fd085828601611ed0565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61201c82611e43565b810181811067ffffffffffffffff8211171561203b5761203a611fe4565b5b80604052505050565b600061204e611d25565b905061205a8282612013565b919050565b600067ffffffffffffffff82111561207a57612079611fe4565b5b61208382611e43565b9050602081019050919050565b82818337600083830152505050565b60006120b26120ad8461205f565b612044565b9050828152602081018484840111156120ce576120cd611fdf565b5b6120d9848285612090565b509392505050565b600082601f8301126120f6576120f5611fda565b5b813561210684826020860161209f565b91505092915050565b6000806040838503121561212657612125611d2f565b5b600061213485828601611ed0565b925050602083013567ffffffffffffffff81111561215557612154611d34565b5b612161858286016120e1565b9150509250929050565b60008060006060848603121561218457612183611d2f565b5b600061219286828701611f85565b93505060206121a386828701611f85565b92505060406121b486828701611ed0565b9150509250925092565b600080fd5b600080fd5b60008083601f8401126121de576121dd611fda565b5b8235905067ffffffffffffffff8111156121fb576121fa6121be565b5b602083019150836001820283011115612217576122166121c3565b5b9250929050565b6000806020838503121561223557612234611d2f565b5b600083013567ffffffffffffffff81111561225357612252611d34565b5b61225f858286016121c8565b92509250509250929050565b60006020828403121561228157612280611d2f565b5b600061228f84828501611f85565b91505092915050565b6122a181611eaf565b82525050565b60006020820190506122bc6000830184612298565b92915050565b600067ffffffffffffffff8211156122dd576122dc611fe4565b5b6122e682611e43565b9050602081019050919050565b6000612306612301846122c2565b612044565b90508281526020810184848401111561232257612321611fdf565b5b61232d848285612090565b509392505050565b600082601f83011261234a57612349611fda565b5b813561235a8482602086016122f3565b91505092915050565b60008060006060848603121561237c5761237b611d2f565b5b600061238a86828701611f85565b935050602061239b86828701611ed0565b925050604084013567ffffffffffffffff8111156123bc576123bb611d34565b5b6123c886828701612335565b9150509250925092565b6123db81611dbe565b81146123e657600080fd5b50565b6000813590506123f8816123d2565b92915050565b6000806040838503121561241557612414611d2f565b5b600061242385828601611f85565b9250506020612434858286016123e9565b9150509250929050565b6000806000806080858703121561245857612457611d2f565b5b600061246687828801611f85565b945050602061247787828801611f85565b935050604061248887828801611ed0565b925050606085013567ffffffffffffffff8111156124a9576124a8611d34565b5b6124b587828801612335565b91505092959194509250565b600080604083850312156124d8576124d7611d2f565b5b60006124e685828601611f85565b92505060206124f785828601611f85565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061254857607f821691505b6020821081141561255c5761255b612501565b5b50919050565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b60006125be602c83611dff565b91506125c982612562565b604082019050919050565b600060208201905081810360008301526125ed816125b1565b9050919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000612650602183611dff565b915061265b826125f4565b604082019050919050565b6000602082019050818103600083015261267f81612643565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b60006126e2603883611dff565b91506126ed82612686565b604082019050919050565b60006020820190508181036000830152612711816126d5565b9050919050565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b6000612774603183611dff565b915061277f82612718565b604082019050919050565b600060208201905081810360008301526127a381612767565b9050919050565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b6000612806602983611dff565b9150612811826127aa565b604082019050919050565b60006020820190508181036000830152612835816127f9565b9050919050565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b6000612898602a83611dff565b91506128a38261283c565b604082019050919050565b600060208201905081810360008301526128c78161288b565b9050919050565b7f45524337323155524953746f726167653a2055524920717565727920666f722060008201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000602082015250565b600061292a603183611dff565b9150612935826128ce565b604082019050919050565b600060208201905081810360008301526129598161291d565b9050919050565b600081905092915050565b600061297682611df4565b6129808185612960565b9350612990818560208601611e10565b80840191505092915050565b60006129a8828561296b565b91506129b4828461296b565b91508190509392505050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b6000612a1c602e83611dff565b9150612a27826129c0565b604082019050919050565b60006020820190508181036000830152612a4b81612a0f565b9050919050565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000612aae602c83611dff565b9150612ab982612a52565b604082019050919050565b60006020820190508181036000830152612add81612aa1565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612b40602583611dff565b9150612b4b82612ae4565b604082019050919050565b60006020820190508181036000830152612b6f81612b33565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612bd2602483611dff565b9150612bdd82612b76565b604082019050919050565b60006020820190508181036000830152612c0181612bc5565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612c4282611eaf565b9150612c4d83611eaf565b925082821015612c6057612c5f612c08565b5b828203905092915050565b6000612c7682611eaf565b9150612c8183611eaf565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612cb657612cb5612c08565b5b828201905092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612cf7602083611dff565b9150612d0282612cc1565b602082019050919050565b60006020820190508181036000830152612d2681612cea565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612d63601c83611dff565b9150612d6e82612d2d565b602082019050919050565b60006020820190508181036000830152612d9281612d56565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612df5603283611dff565b9150612e0082612d99565b604082019050919050565b60006020820190508181036000830152612e2481612de8565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612e61601983611dff565b9150612e6c82612e2b565b602082019050919050565b60006020820190508181036000830152612e9081612e54565b9050919050565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b6000612ef3602f83611dff565b9150612efe82612e97565b604082019050919050565b60006020820190508181036000830152612f2281612ee6565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000612f5082612f29565b612f5a8185612f34565b9350612f6a818560208601611e10565b612f7381611e43565b840191505092915050565b6000608082019050612f936000830187611f44565b612fa06020830186611f44565b612fad6040830185612298565b8181036060830152612fbf8184612f45565b905095945050505050565b600081519050612fd981611d65565b92915050565b600060208284031215612ff557612ff4611d2f565b5b600061300384828501612fca565b91505092915050565b600061301782611eaf565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561304a57613049612c08565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061308f82611eaf565b915061309a83611eaf565b9250826130aa576130a9613055565b5b828204905092915050565b60006130c082611eaf565b91506130cb83611eaf565b9250826130db576130da613055565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea2646970667358221220b2352106054c815924c097e975d3153e0d3d83f657011d7f2b73ac2e0d7c50fc64736f6c63430008090033";
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
    static createInterface(): ERC721URIStorageMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC721URIStorageMock;
}
export {};

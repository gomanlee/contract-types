import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC1155SupplyMock, ERC1155SupplyMockInterface } from "../ERC1155SupplyMock";
declare type ERC1155SupplyMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC1155SupplyMock__factory extends ContractFactory {
    constructor(...args: ERC1155SupplyMockConstructorParams);
    deploy(uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC1155SupplyMock>;
    getDeployTransaction(uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC1155SupplyMock;
    connect(signer: Signer): ERC1155SupplyMock__factory;
    static readonly contractName: "ERC1155SupplyMock";
    readonly contractName: "ERC1155SupplyMock";
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162003b8138038062003b818339818101604052810190620000379190620002bc565b80806200004a816200005360201b60201c565b50505062000372565b80600290805190602001906200006b9291906200006f565b5050565b8280546200007d906200033c565b90600052602060002090601f016020900481019282620000a15760008555620000ed565b82601f10620000bc57805160ff1916838001178555620000ed565b82800160010185558215620000ed579182015b82811115620000ec578251825591602001919060010190620000cf565b5b509050620000fc919062000100565b5090565b5b808211156200011b57600081600090555060010162000101565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000188826200013d565b810181811067ffffffffffffffff82111715620001aa57620001a96200014e565b5b80604052505050565b6000620001bf6200011f565b9050620001cd82826200017d565b919050565b600067ffffffffffffffff821115620001f057620001ef6200014e565b5b620001fb826200013d565b9050602081019050919050565b60005b83811015620002285780820151818401526020810190506200020b565b8381111562000238576000848401525b50505050565b6000620002556200024f84620001d2565b620001b3565b90508281526020810184848401111562000274576200027362000138565b5b6200028184828562000208565b509392505050565b600082601f830112620002a157620002a062000133565b5b8151620002b38482602086016200023e565b91505092915050565b600060208284031215620002d557620002d462000129565b5b600082015167ffffffffffffffff811115620002f657620002f56200012e565b5b620003048482850162000289565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200035557607f821691505b602082108114156200036c576200036b6200030d565b5b50919050565b6137ff80620003826000396000f3fe608060405234801561001057600080fd5b50600436106100f45760003560e01c80634f558e7911610097578063bd85b03911610066578063bd85b03914610291578063e985e9c5146102c1578063f242432a146102f1578063f5298aca1461030d576100f4565b80634f558e791461020d5780636b20c4541461023d578063731133e914610259578063a22cb46514610275576100f4565b80630e89341c116100d35780630e89341c146101755780631f7fdffa146101a55780632eb2c2d6146101c15780634e1273f4146101dd576100f4565b8062fdd58e146100f957806301ffc9a71461012957806302fe530514610159575b600080fd5b610113600480360381019061010e91906120a5565b610329565b60405161012091906120f4565b60405180910390f35b610143600480360381019061013e9190612167565b6103f2565b60405161015091906121af565b60405180910390f35b610173600480360381019061016e9190612310565b6104d4565b005b61018f600480360381019061018a9190612359565b6104e0565b60405161019c919061240e565b60405180910390f35b6101bf60048036038101906101ba9190612599565b610574565b005b6101db60048036038101906101d69190612654565b610586565b005b6101f760048036038101906101f291906127e6565b610627565b604051610204919061291c565b60405180910390f35b61022760048036038101906102229190612359565b610740565b60405161023491906121af565b60405180910390f35b6102576004803603810190610252919061293e565b610754565b005b610273600480360381019061026e91906129c9565b610764565b005b61028f600480360381019061028a9190612a78565b610776565b005b6102ab60048036038101906102a69190612359565b61078c565b6040516102b891906120f4565b60405180910390f35b6102db60048036038101906102d69190612ab8565b6107a9565b6040516102e891906121af565b60405180910390f35b61030b60048036038101906103069190612af8565b61083d565b005b61032760048036038101906103229190612b8f565b6108de565b005b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561039a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039190612c54565b60405180910390fd5b60008083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60007fd9b67a26000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104bd57507f0e89341c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806104cd57506104cc826108ee565b5b9050919050565b6104dd81610958565b50565b6060600280546104ef90612ca3565b80601f016020809104026020016040519081016040528092919081815260200182805461051b90612ca3565b80156105685780601f1061053d57610100808354040283529160200191610568565b820191906000526020600020905b81548152906001019060200180831161054b57829003601f168201915b50505050509050919050565b61058084848484610972565b50505050565b61058e610b90565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614806105d457506105d3856105ce610b90565b6107a9565b5b610613576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060a90612d47565b60405180910390fd5b6106208585858585610b98565b5050505050565b6060815183511461066d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066490612dd9565b60405180910390fd5b6000835167ffffffffffffffff81111561068a576106896121e5565b5b6040519080825280602002602001820160405280156106b85781602001602082028036833780820191505090505b50905060005b8451811015610735576107058582815181106106dd576106dc612df9565b5b60200260200101518583815181106106f8576106f7612df9565b5b6020026020010151610329565b82828151811061071857610717612df9565b5b6020026020010181815250508061072e90612e57565b90506106be565b508091505092915050565b60008061074c8361078c565b119050919050565b61075f838383610eac565b505050565b6107708484848461115d565b50505050565b610788610781610b90565b83836112f3565b5050565b600060036000838152602001908152602001600020549050919050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610845610b90565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16148061088b575061088a85610885610b90565b6107a9565b5b6108ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c190612f12565b60405180910390fd5b6108d78585858585611460565b5050505050565b6108e98383836116e2565b505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b806002908051906020019061096e929190611f5a565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156109e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d990612fa4565b60405180910390fd5b8151835114610a26576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1d90613036565b60405180910390fd5b6000610a30610b90565b9050610a41816000878787876118ff565b60005b8451811015610afa57838181518110610a6057610a5f612df9565b5b6020026020010151600080878481518110610a7e57610a7d612df9565b5b6020026020010151815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ae09190613056565b925050819055508080610af290612e57565b915050610a44565b508473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610b729291906130ac565b60405180910390a4610b8981600087878787611915565b5050505050565b600033905090565b8151835114610bdc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd390613036565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610c4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c4390613155565b60405180910390fd5b6000610c56610b90565b9050610c668187878787876118ff565b60005b8451811015610e17576000858281518110610c8757610c86612df9565b5b602002602001015190506000858381518110610ca657610ca5612df9565b5b60200260200101519050600080600084815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610d47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3e906131e7565b60405180910390fd5b81810360008085815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160008085815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610dfc9190613056565b9250508190555050505080610e1090612e57565b9050610c69565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610e8e9291906130ac565b60405180910390a4610ea4818787878787611915565b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610f1c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f1390613279565b60405180910390fd5b8051825114610f60576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5790613036565b60405180910390fd5b6000610f6a610b90565b9050610f8a818560008686604051806020016040528060008152506118ff565b60005b83518110156110d7576000848281518110610fab57610faa612df9565b5b602002602001015190506000848381518110610fca57610fc9612df9565b5b60200260200101519050600080600084815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561106b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110629061330b565b60405180910390fd5b81810360008085815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050505080806110cf90612e57565b915050610f8d565b50600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb868660405161114f9291906130ac565b60405180910390a450505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156111cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111c490612fa4565b60405180910390fd5b60006111d7610b90565b90506111f8816000876111e988611afc565b6111f288611afc565b876118ff565b8260008086815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112579190613056565b925050819055508473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6287876040516112d592919061332b565b60405180910390a46112ec81600087878787611b76565b5050505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611362576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611359906133c6565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161145391906121af565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156114d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114c790613155565b60405180910390fd5b60006114da610b90565b90506114fa8187876114eb88611afc565b6114f488611afc565b876118ff565b600080600086815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905083811015611591576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611588906131e7565b60405180910390fd5b83810360008087815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508360008087815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546116469190613056565b925050819055508573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6288886040516116c392919061332b565b60405180910390a46116d9828888888888611b76565b50505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611752576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161174990613279565b60405180910390fd5b600061175c610b90565b905061178c8185600061176e87611afc565b61177787611afc565b604051806020016040528060008152506118ff565b600080600085815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015611823576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161181a9061330b565b60405180910390fd5b82810360008086815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6287876040516118f092919061332b565b60405180910390a45050505050565b61190d868686868686611d5d565b505050505050565b6119348473ffffffffffffffffffffffffffffffffffffffff16611f2f565b15611af4578373ffffffffffffffffffffffffffffffffffffffff1663bc197c8187878686866040518663ffffffff1660e01b815260040161197a95949392919061344a565b602060405180830381600087803b15801561199457600080fd5b505af19250505080156119c557506040513d601f19601f820116820180604052508101906119c291906134c7565b60015b611a6b576119d1613501565b806308c379a01415611a2e57506119e6613523565b806119f15750611a30565b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a25919061240e565b60405180910390fd5b505b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a629061362b565b60405180910390fd5b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614611af2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ae9906136bd565b60405180910390fd5b505b505050505050565b60606000600167ffffffffffffffff811115611b1b57611b1a6121e5565b5b604051908082528060200260200182016040528015611b495781602001602082028036833780820191505090505b5090508281600081518110611b6157611b60612df9565b5b60200260200101818152505080915050919050565b611b958473ffffffffffffffffffffffffffffffffffffffff16611f2f565b15611d55578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b8152600401611bdb9594939291906136dd565b602060405180830381600087803b158015611bf557600080fd5b505af1925050508015611c2657506040513d601f19601f82011682018060405250810190611c2391906134c7565b60015b611ccc57611c32613501565b806308c379a01415611c8f5750611c47613523565b80611c525750611c91565b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c86919061240e565b60405180910390fd5b505b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cc39061362b565b60405180910390fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614611d53576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d4a906136bd565b60405180910390fd5b505b505050505050565b611d6b868686868686611f52565b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161415611e1d5760005b8351811015611e1b57828181518110611dbf57611dbe612df9565b5b602002602001015160036000868481518110611dde57611ddd612df9565b5b602002602001015181526020019081526020016000206000828254611e039190613056565b9250508190555080611e1490612e57565b9050611da3565b505b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415611f275760005b8351811015611f25576000848281518110611e7357611e72612df9565b5b602002602001015190506000848381518110611e9257611e91612df9565b5b6020026020010151905060006003600084815260200190815260200160002054905081811015611ef7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611eee906137a9565b60405180910390fd5b818103600360008581526020019081526020016000208190555050505080611f1e90612e57565b9050611e55565b505b505050505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b505050505050565b828054611f6690612ca3565b90600052602060002090601f016020900481019282611f885760008555611fcf565b82601f10611fa157805160ff1916838001178555611fcf565b82800160010185558215611fcf579182015b82811115611fce578251825591602001919060010190611fb3565b5b509050611fdc9190611fe0565b5090565b5b80821115611ff9576000816000905550600101611fe1565b5090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061203c82612011565b9050919050565b61204c81612031565b811461205757600080fd5b50565b60008135905061206981612043565b92915050565b6000819050919050565b6120828161206f565b811461208d57600080fd5b50565b60008135905061209f81612079565b92915050565b600080604083850312156120bc576120bb612007565b5b60006120ca8582860161205a565b92505060206120db85828601612090565b9150509250929050565b6120ee8161206f565b82525050565b600060208201905061210960008301846120e5565b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6121448161210f565b811461214f57600080fd5b50565b6000813590506121618161213b565b92915050565b60006020828403121561217d5761217c612007565b5b600061218b84828501612152565b91505092915050565b60008115159050919050565b6121a981612194565b82525050565b60006020820190506121c460008301846121a0565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61221d826121d4565b810181811067ffffffffffffffff8211171561223c5761223b6121e5565b5b80604052505050565b600061224f611ffd565b905061225b8282612214565b919050565b600067ffffffffffffffff82111561227b5761227a6121e5565b5b612284826121d4565b9050602081019050919050565b82818337600083830152505050565b60006122b36122ae84612260565b612245565b9050828152602081018484840111156122cf576122ce6121cf565b5b6122da848285612291565b509392505050565b600082601f8301126122f7576122f66121ca565b5b81356123078482602086016122a0565b91505092915050565b60006020828403121561232657612325612007565b5b600082013567ffffffffffffffff8111156123445761234361200c565b5b612350848285016122e2565b91505092915050565b60006020828403121561236f5761236e612007565b5b600061237d84828501612090565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156123c05780820151818401526020810190506123a5565b838111156123cf576000848401525b50505050565b60006123e082612386565b6123ea8185612391565b93506123fa8185602086016123a2565b612403816121d4565b840191505092915050565b6000602082019050818103600083015261242881846123d5565b905092915050565b600067ffffffffffffffff82111561244b5761244a6121e5565b5b602082029050602081019050919050565b600080fd5b600061247461246f84612430565b612245565b905080838252602082019050602084028301858111156124975761249661245c565b5b835b818110156124c057806124ac8882612090565b845260208401935050602081019050612499565b5050509392505050565b600082601f8301126124df576124de6121ca565b5b81356124ef848260208601612461565b91505092915050565b600067ffffffffffffffff821115612513576125126121e5565b5b61251c826121d4565b9050602081019050919050565b600061253c612537846124f8565b612245565b905082815260208101848484011115612558576125576121cf565b5b612563848285612291565b509392505050565b600082601f8301126125805761257f6121ca565b5b8135612590848260208601612529565b91505092915050565b600080600080608085870312156125b3576125b2612007565b5b60006125c18782880161205a565b945050602085013567ffffffffffffffff8111156125e2576125e161200c565b5b6125ee878288016124ca565b935050604085013567ffffffffffffffff81111561260f5761260e61200c565b5b61261b878288016124ca565b925050606085013567ffffffffffffffff81111561263c5761263b61200c565b5b6126488782880161256b565b91505092959194509250565b600080600080600060a086880312156126705761266f612007565b5b600061267e8882890161205a565b955050602061268f8882890161205a565b945050604086013567ffffffffffffffff8111156126b0576126af61200c565b5b6126bc888289016124ca565b935050606086013567ffffffffffffffff8111156126dd576126dc61200c565b5b6126e9888289016124ca565b925050608086013567ffffffffffffffff81111561270a5761270961200c565b5b6127168882890161256b565b9150509295509295909350565b600067ffffffffffffffff82111561273e5761273d6121e5565b5b602082029050602081019050919050565b600061276261275d84612723565b612245565b905080838252602082019050602084028301858111156127855761278461245c565b5b835b818110156127ae578061279a888261205a565b845260208401935050602081019050612787565b5050509392505050565b600082601f8301126127cd576127cc6121ca565b5b81356127dd84826020860161274f565b91505092915050565b600080604083850312156127fd576127fc612007565b5b600083013567ffffffffffffffff81111561281b5761281a61200c565b5b612827858286016127b8565b925050602083013567ffffffffffffffff8111156128485761284761200c565b5b612854858286016124ca565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6128938161206f565b82525050565b60006128a5838361288a565b60208301905092915050565b6000602082019050919050565b60006128c98261285e565b6128d38185612869565b93506128de8361287a565b8060005b8381101561290f5781516128f68882612899565b9750612901836128b1565b9250506001810190506128e2565b5085935050505092915050565b6000602082019050818103600083015261293681846128be565b905092915050565b60008060006060848603121561295757612956612007565b5b60006129658682870161205a565b935050602084013567ffffffffffffffff8111156129865761298561200c565b5b612992868287016124ca565b925050604084013567ffffffffffffffff8111156129b3576129b261200c565b5b6129bf868287016124ca565b9150509250925092565b600080600080608085870312156129e3576129e2612007565b5b60006129f18782880161205a565b9450506020612a0287828801612090565b9350506040612a1387828801612090565b925050606085013567ffffffffffffffff811115612a3457612a3361200c565b5b612a408782880161256b565b91505092959194509250565b612a5581612194565b8114612a6057600080fd5b50565b600081359050612a7281612a4c565b92915050565b60008060408385031215612a8f57612a8e612007565b5b6000612a9d8582860161205a565b9250506020612aae85828601612a63565b9150509250929050565b60008060408385031215612acf57612ace612007565b5b6000612add8582860161205a565b9250506020612aee8582860161205a565b9150509250929050565b600080600080600060a08688031215612b1457612b13612007565b5b6000612b228882890161205a565b9550506020612b338882890161205a565b9450506040612b4488828901612090565b9350506060612b5588828901612090565b925050608086013567ffffffffffffffff811115612b7657612b7561200c565b5b612b828882890161256b565b9150509295509295909350565b600080600060608486031215612ba857612ba7612007565b5b6000612bb68682870161205a565b9350506020612bc786828701612090565b9250506040612bd886828701612090565b9150509250925092565b7f455243313135353a2062616c616e636520717565727920666f7220746865207a60008201527f65726f2061646472657373000000000000000000000000000000000000000000602082015250565b6000612c3e602b83612391565b9150612c4982612be2565b604082019050919050565b60006020820190508181036000830152612c6d81612c31565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680612cbb57607f821691505b60208210811415612ccf57612cce612c74565b5b50919050565b7f455243313135353a207472616e736665722063616c6c6572206973206e6f742060008201527f6f776e6572206e6f7220617070726f7665640000000000000000000000000000602082015250565b6000612d31603283612391565b9150612d3c82612cd5565b604082019050919050565b60006020820190508181036000830152612d6081612d24565b9050919050565b7f455243313135353a206163636f756e747320616e6420696473206c656e67746860008201527f206d69736d617463680000000000000000000000000000000000000000000000602082015250565b6000612dc3602983612391565b9150612dce82612d67565b604082019050919050565b60006020820190508181036000830152612df281612db6565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612e628261206f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612e9557612e94612e28565b5b600182019050919050565b7f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260008201527f20617070726f7665640000000000000000000000000000000000000000000000602082015250565b6000612efc602983612391565b9150612f0782612ea0565b604082019050919050565b60006020820190508181036000830152612f2b81612eef565b9050919050565b7f455243313135353a206d696e7420746f20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000612f8e602183612391565b9150612f9982612f32565b604082019050919050565b60006020820190508181036000830152612fbd81612f81565b9050919050565b7f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060008201527f6d69736d61746368000000000000000000000000000000000000000000000000602082015250565b6000613020602883612391565b915061302b82612fc4565b604082019050919050565b6000602082019050818103600083015261304f81613013565b9050919050565b60006130618261206f565b915061306c8361206f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156130a1576130a0612e28565b5b828201905092915050565b600060408201905081810360008301526130c681856128be565b905081810360208301526130da81846128be565b90509392505050565b7f455243313135353a207472616e7366657220746f20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061313f602583612391565b915061314a826130e3565b604082019050919050565b6000602082019050818103600083015261316e81613132565b9050919050565b7f455243313135353a20696e73756666696369656e742062616c616e636520666f60008201527f72207472616e7366657200000000000000000000000000000000000000000000602082015250565b60006131d1602a83612391565b91506131dc82613175565b604082019050919050565b60006020820190508181036000830152613200816131c4565b9050919050565b7f455243313135353a206275726e2066726f6d20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000613263602383612391565b915061326e82613207565b604082019050919050565b6000602082019050818103600083015261329281613256565b9050919050565b7f455243313135353a206275726e20616d6f756e7420657863656564732062616c60008201527f616e636500000000000000000000000000000000000000000000000000000000602082015250565b60006132f5602483612391565b915061330082613299565b604082019050919050565b60006020820190508181036000830152613324816132e8565b9050919050565b600060408201905061334060008301856120e5565b61334d60208301846120e5565b9392505050565b7f455243313135353a2073657474696e6720617070726f76616c2073746174757360008201527f20666f722073656c660000000000000000000000000000000000000000000000602082015250565b60006133b0602983612391565b91506133bb82613354565b604082019050919050565b600060208201905081810360008301526133df816133a3565b9050919050565b6133ef81612031565b82525050565b600081519050919050565b600082825260208201905092915050565b600061341c826133f5565b6134268185613400565b93506134368185602086016123a2565b61343f816121d4565b840191505092915050565b600060a08201905061345f60008301886133e6565b61346c60208301876133e6565b818103604083015261347e81866128be565b9050818103606083015261349281856128be565b905081810360808301526134a68184613411565b90509695505050505050565b6000815190506134c18161213b565b92915050565b6000602082840312156134dd576134dc612007565b5b60006134eb848285016134b2565b91505092915050565b60008160e01c9050919050565b600060033d11156135205760046000803e61351d6000516134f4565b90505b90565b600060443d1015613533576135b6565b61353b611ffd565b60043d036004823e80513d602482011167ffffffffffffffff821117156135635750506135b6565b808201805167ffffffffffffffff81111561358157505050506135b6565b80602083010160043d03850181111561359e5750505050506135b6565b6135ad82602001850186612214565b82955050505050505b90565b7f455243313135353a207472616e7366657220746f206e6f6e204552433131353560008201527f526563656976657220696d706c656d656e746572000000000000000000000000602082015250565b6000613615603483612391565b9150613620826135b9565b604082019050919050565b6000602082019050818103600083015261364481613608565b9050919050565b7f455243313135353a204552433131353552656365697665722072656a6563746560008201527f6420746f6b656e73000000000000000000000000000000000000000000000000602082015250565b60006136a7602883612391565b91506136b28261364b565b604082019050919050565b600060208201905081810360008301526136d68161369a565b9050919050565b600060a0820190506136f260008301886133e6565b6136ff60208301876133e6565b61370c60408301866120e5565b61371960608301856120e5565b818103608083015261372b8184613411565b90509695505050505050565b7f455243313135353a206275726e20616d6f756e74206578636565647320746f7460008201527f616c537570706c79000000000000000000000000000000000000000000000000602082015250565b6000613793602883612391565b915061379e82613737565b604082019050919050565b600060208201905081810360008301526137c281613786565b905091905056fea264697066735822122074e0d2a628890afb797303fcf7abc935235b76a02742bcfea58d9ef017ba921864736f6c63430008090033";
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
    static createInterface(): ERC1155SupplyMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC1155SupplyMock;
}
export {};

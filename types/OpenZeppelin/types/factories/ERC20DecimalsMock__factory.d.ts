import { Signer, ContractFactory, Overrides, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20DecimalsMock, ERC20DecimalsMockInterface } from "../ERC20DecimalsMock";
declare type ERC20DecimalsMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC20DecimalsMock__factory extends ContractFactory {
    constructor(...args: ERC20DecimalsMockConstructorParams);
    deploy(name_: string, symbol_: string, decimals_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC20DecimalsMock>;
    getDeployTransaction(name_: string, symbol_: string, decimals_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC20DecimalsMock;
    connect(signer: Signer): ERC20DecimalsMock__factory;
    static readonly contractName: "ERC20DecimalsMock";
    readonly contractName: "ERC20DecimalsMock";
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620017973803806200179783398181016040528101906200003791906200030f565b828281600390805190602001906200005192919062000084565b5080600490805190602001906200006a92919062000084565b5050508060ff1660808160ff16815250505050506200040e565b8280546200009290620003d8565b90600052602060002090601f016020900481019282620000b6576000855562000102565b82601f10620000d157805160ff191683800117855562000102565b8280016001018555821562000102579182015b8281111562000101578251825591602001919060010190620000e4565b5b50905062000111919062000115565b5090565b5b808211156200013057600081600090555060010162000116565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200019d8262000152565b810181811067ffffffffffffffff82111715620001bf57620001be62000163565b5b80604052505050565b6000620001d462000134565b9050620001e2828262000192565b919050565b600067ffffffffffffffff82111562000205576200020462000163565b5b620002108262000152565b9050602081019050919050565b60005b838110156200023d57808201518184015260208101905062000220565b838111156200024d576000848401525b50505050565b60006200026a6200026484620001e7565b620001c8565b9050828152602081018484840111156200028957620002886200014d565b5b620002968482856200021d565b509392505050565b600082601f830112620002b657620002b562000148565b5b8151620002c884826020860162000253565b91505092915050565b600060ff82169050919050565b620002e981620002d1565b8114620002f557600080fd5b50565b6000815190506200030981620002de565b92915050565b6000806000606084860312156200032b576200032a6200013e565b5b600084015167ffffffffffffffff8111156200034c576200034b62000143565b5b6200035a868287016200029e565b935050602084015167ffffffffffffffff8111156200037e576200037d62000143565b5b6200038c868287016200029e565b92505060406200039f86828701620002f8565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620003f157607f821691505b60208210811415620004085762000407620003a9565b5b50919050565b60805161136d6200042a6000396000610368015261136d6000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610c27565b60405180910390f35b6100e660048036038101906100e19190610ce2565b610308565b6040516100f39190610d3d565b60405180910390f35b61010461032b565b6040516101119190610d67565b60405180910390f35b610134600480360381019061012f9190610d82565b610335565b6040516101419190610d3d565b60405180910390f35b610152610364565b60405161015f9190610df1565b60405180910390f35b610182600480360381019061017d9190610ce2565b61038c565b60405161018f9190610d3d565b60405180910390f35b6101b260048036038101906101ad9190610e0c565b610436565b6040516101bf9190610d67565b60405180910390f35b6101d061047e565b6040516101dd9190610c27565b60405180910390f35b61020060048036038101906101fb9190610ce2565b610510565b60405161020d9190610d3d565b60405180910390f35b610230600480360381019061022b9190610ce2565b6105fa565b60405161023d9190610d3d565b60405180910390f35b610260600480360381019061025b9190610e39565b61061d565b60405161026d9190610d67565b60405180910390f35b60606003805461028590610ea8565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190610ea8565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b6000806103136106a4565b90506103208185856106ac565b600191505092915050565b6000600254905090565b6000806103406106a4565b905061034d858285610877565b610358858585610903565b60019150509392505050565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b6000806103976106a4565b905061042b818585600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104269190610f09565b6106ac565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461048d90610ea8565b80601f01602080910402602001604051908101604052809291908181526020018280546104b990610ea8565b80156105065780601f106104db57610100808354040283529160200191610506565b820191906000526020600020905b8154815290600101906020018083116104e957829003601f168201915b5050505050905090565b60008061051b6106a4565b90506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050838110156105e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d890610fd1565b60405180910390fd5b6105ee82868684036106ac565b60019250505092915050565b6000806106056106a4565b9050610612818585610903565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561071c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071390611063565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561078c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610783906110f5565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161086a9190610d67565b60405180910390a3505050565b6000610883848461061d565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146108fd57818110156108ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e690611161565b60405180910390fd5b6108fc84848484036106ac565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610973576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096a906111f3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156109e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109da90611285565b60405180910390fd5b6109ee838383610b84565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610a74576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6b90611317565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b079190610f09565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610b6b9190610d67565b60405180910390a3610b7e848484610b89565b50505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610bc8578082015181840152602081019050610bad565b83811115610bd7576000848401525b50505050565b6000601f19601f8301169050919050565b6000610bf982610b8e565b610c038185610b99565b9350610c13818560208601610baa565b610c1c81610bdd565b840191505092915050565b60006020820190508181036000830152610c418184610bee565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c7982610c4e565b9050919050565b610c8981610c6e565b8114610c9457600080fd5b50565b600081359050610ca681610c80565b92915050565b6000819050919050565b610cbf81610cac565b8114610cca57600080fd5b50565b600081359050610cdc81610cb6565b92915050565b60008060408385031215610cf957610cf8610c49565b5b6000610d0785828601610c97565b9250506020610d1885828601610ccd565b9150509250929050565b60008115159050919050565b610d3781610d22565b82525050565b6000602082019050610d526000830184610d2e565b92915050565b610d6181610cac565b82525050565b6000602082019050610d7c6000830184610d58565b92915050565b600080600060608486031215610d9b57610d9a610c49565b5b6000610da986828701610c97565b9350506020610dba86828701610c97565b9250506040610dcb86828701610ccd565b9150509250925092565b600060ff82169050919050565b610deb81610dd5565b82525050565b6000602082019050610e066000830184610de2565b92915050565b600060208284031215610e2257610e21610c49565b5b6000610e3084828501610c97565b91505092915050565b60008060408385031215610e5057610e4f610c49565b5b6000610e5e85828601610c97565b9250506020610e6f85828601610c97565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610ec057607f821691505b60208210811415610ed457610ed3610e79565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610f1482610cac565b9150610f1f83610cac565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610f5457610f53610eda565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000610fbb602583610b99565b9150610fc682610f5f565b604082019050919050565b60006020820190508181036000830152610fea81610fae565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061104d602483610b99565b915061105882610ff1565b604082019050919050565b6000602082019050818103600083015261107c81611040565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006110df602283610b99565b91506110ea82611083565b604082019050919050565b6000602082019050818103600083015261110e816110d2565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b600061114b601d83610b99565b915061115682611115565b602082019050919050565b6000602082019050818103600083015261117a8161113e565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006111dd602583610b99565b91506111e882611181565b604082019050919050565b6000602082019050818103600083015261120c816111d0565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b600061126f602383610b99565b915061127a82611213565b604082019050919050565b6000602082019050818103600083015261129e81611262565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611301602683610b99565b915061130c826112a5565b604082019050919050565b60006020820190508181036000830152611330816112f4565b905091905056fea26469706673582212206adde8736df24805971720ce8f3571c7fe5686d2b2f206553aff7fb9cbfe2d2464736f6c63430008090033";
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
    static createInterface(): ERC20DecimalsMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20DecimalsMock;
}
export {};

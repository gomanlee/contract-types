import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GovernorBravoDelegateStorageV1, GovernorBravoDelegateStorageV1Interface } from "../GovernorBravoDelegateStorageV1";
declare type GovernorBravoDelegateStorageV1ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GovernorBravoDelegateStorageV1__factory extends ContractFactory {
    constructor(...args: GovernorBravoDelegateStorageV1ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<GovernorBravoDelegateStorageV1>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): GovernorBravoDelegateStorageV1;
    connect(signer: Signer): GovernorBravoDelegateStorageV1__factory;
    static readonly contractName: "GovernorBravoDelegateStorageV1";
    readonly contractName: "GovernorBravoDelegateStorageV1";
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610429806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80635c60da1b116100715780635c60da1b14610145578063b58131b01461014d578063d33219b414610155578063da35c6641461015d578063f851a44014610165578063fc4eee421461016d576100b4565b8063013cf08b146100b957806302a251a3146100eb578063109d0af81461010057806317977c611461011557806326782247146101285780633932abb11461013d575b600080fd5b6100cc6100c7366004610295565b610175565b6040516100e29a99989796959493929190610307565b60405180910390f35b6100f36101d8565b6040516100e291906102f9565b6101086101de565b6040516100e291906102eb565b6100f361012336600461026f565b6101ed565b6101306101ff565b6040516100e291906102dd565b6100f361020e565b610130610214565b6100f3610223565b610108610229565b6100f3610238565b61013061023e565b6100f361024d565b600a60208190526000918252604090912080546001820154600283015460078401546008850154600986015496860154600b870154600c9097015495976001600160a01b0390951696939592949193919290919060ff808216916101009004168a565b60045481565b6009546001600160a01b031681565b600b6020526000908152604090205481565b6001546001600160a01b031681565b60035481565b6002546001600160a01b031681565b60055481565b6008546001600160a01b031681565b60075481565b6000546001600160a01b031681565b60065481565b803561025e816103c6565b92915050565b803561025e816103dd565b60006020828403121561028157600080fd5b600061028d8484610253565b949350505050565b6000602082840312156102a757600080fd5b600061028d8484610264565b6102bc8161039c565b82525050565b6102bc816103a7565b6102bc816103bb565b6102bc816103b8565b6020810161025e82846102b3565b6020810161025e82846102cb565b6020810161025e82846102d4565b6101408101610316828d6102d4565b610323602083018c6102b3565b610330604083018b6102d4565b61033d606083018a6102d4565b61034a60808301896102d4565b61035760a08301886102d4565b61036460c08301876102d4565b61037160e08301866102d4565b61037f6101008301856102c2565b61038d6101208301846102c2565b9b9a5050505050505050505050565b600061025e826103ac565b151590565b6001600160a01b031690565b90565b600061025e8261039c565b6103cf8161039c565b81146103da57600080fd5b50565b6103cf816103b856fea365627a7a723158208f1d870dcb020a94e435b89d97bb29791914c9a649c2a1d6b44295e2b99c63ba6c6578706572696d656e74616cf564736f6c63430005100040";
    static readonly abi: {
        constant: boolean;
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
        payable: boolean;
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): GovernorBravoDelegateStorageV1Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): GovernorBravoDelegateStorageV1;
}
export {};
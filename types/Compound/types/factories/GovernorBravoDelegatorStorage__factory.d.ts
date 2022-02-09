import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GovernorBravoDelegatorStorage, GovernorBravoDelegatorStorageInterface } from "../GovernorBravoDelegatorStorage";
declare type GovernorBravoDelegatorStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GovernorBravoDelegatorStorage__factory extends ContractFactory {
    constructor(...args: GovernorBravoDelegatorStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<GovernorBravoDelegatorStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): GovernorBravoDelegatorStorage;
    connect(signer: Signer): GovernorBravoDelegatorStorage__factory;
    static readonly contractName: "GovernorBravoDelegatorStorage";
    readonly contractName: "GovernorBravoDelegatorStorage";
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610106806100206000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c8063267822471460415780635c60da1b14605b578063f851a440146061575b600080fd5b60476067565b6040516052919060a1565b60405180910390f35b60476076565b60476085565b6001546001600160a01b031681565b6002546001600160a01b031681565b6000546001600160a01b031681565b609b8160b3565b82525050565b6020810160ad82846094565b92915050565b60006001600160a01b03821660ad56fea365627a7a723158205b502d8829d723f01b155908eb8747c3344a129d504a93027db1fa63b01c36046c6578706572696d656e74616cf564736f6c63430005100040";
    static readonly abi: {
        constant: boolean;
        inputs: any[];
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
    static createInterface(): GovernorBravoDelegatorStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GovernorBravoDelegatorStorage;
}
export {};

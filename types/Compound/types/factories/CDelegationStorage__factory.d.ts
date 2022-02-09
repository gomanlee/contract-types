import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CDelegationStorage, CDelegationStorageInterface } from "../CDelegationStorage";
declare type CDelegationStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CDelegationStorage__factory extends ContractFactory {
    constructor(...args: CDelegationStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CDelegationStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CDelegationStorage;
    connect(signer: Signer): CDelegationStorage__factory;
    static readonly contractName: "CDelegationStorage";
    readonly contractName: "CDelegationStorage";
    static readonly bytecode = "0x6080604052348015600f57600080fd5b5060938061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80635c60da1b14602d575b600080fd5b6033604f565b604080516001600160a01b039092168252519081900360200190f35b6000546001600160a01b03168156fea265627a7a72315820884c3a94e2938355483181e1e55664314aefe506f35c6b9b0523e54e3c8f384264736f6c63430005100032";
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
    static createInterface(): CDelegationStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CDelegationStorage;
}
export {};

import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC165MissingData, ERC165MissingDataInterface } from "../ERC165MissingData";
declare type ERC165MissingDataConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC165MissingData__factory extends ContractFactory {
    constructor(...args: ERC165MissingDataConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC165MissingData>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC165MissingData;
    connect(signer: Signer): ERC165MissingData__factory;
    static readonly contractName: "ERC165MissingData";
    readonly contractName: "ERC165MissingData";
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060fe8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806301ffc9a714602d575b600080fd5b60436004803603810190603f919060a0565b6045565b005b50565b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b608081604d565b8114608a57600080fd5b50565b600081359050609a816079565b92915050565b60006020828403121560b35760b26048565b5b600060bf84828501608d565b9150509291505056fea26469706673582212206dc0cf04ac1541e9a65d9e9f872bc3aa1c5f0bc0655286963810eb1fa10905fd64736f6c63430008090033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: any[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ERC165MissingDataInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC165MissingData;
}
export {};

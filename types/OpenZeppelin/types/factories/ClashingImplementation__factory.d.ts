import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ClashingImplementation, ClashingImplementationInterface } from "../ClashingImplementation";
declare type ClashingImplementationConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ClashingImplementation__factory extends ContractFactory {
    constructor(...args: ClashingImplementationConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ClashingImplementation>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ClashingImplementation;
    connect(signer: Signer): ClashingImplementation__factory;
    static readonly contractName: "ClashingImplementation";
    readonly contractName: "ClashingImplementation";
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610154806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063abf8e0e71461003b578063f851a44014610059575b600080fd5b610043610077565b60405161005091906100a7565b60405180910390f35b610061610080565b60405161006e9190610103565b60405180910390f35b60006001905090565b60006311111142905090565b60008115159050919050565b6100a18161008c565b82525050565b60006020820190506100bc6000830184610098565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100ed826100c2565b9050919050565b6100fd816100e2565b82525050565b600060208201905061011860008301846100f4565b9291505056fea26469706673582212202915c73795bb2fb6b7755671275f3a849aa37875f4a0038dc19a0b70b9e5731864736f6c63430008090033";
    static readonly abi: {
        inputs: any[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ClashingImplementationInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ClashingImplementation;
}
export {};

import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TrueFiVault } from "../TrueFiVault";
export declare class TrueFiVault__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TrueFiVault>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TrueFiVault;
    connect(signer: Signer): TrueFiVault__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TrueFiVault;
}

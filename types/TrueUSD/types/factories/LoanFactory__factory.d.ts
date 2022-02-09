import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LoanFactory } from "../LoanFactory";
export declare class LoanFactory__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<LoanFactory>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): LoanFactory;
    connect(signer: Signer): LoanFactory__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): LoanFactory;
}

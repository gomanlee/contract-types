import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FixedTermLoan } from "../FixedTermLoan";
export declare class FixedTermLoan__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<FixedTermLoan>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): FixedTermLoan;
    connect(signer: Signer): FixedTermLoan__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): FixedTermLoan;
}

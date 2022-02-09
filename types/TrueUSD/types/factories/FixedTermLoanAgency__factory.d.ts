import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FixedTermLoanAgency } from "../FixedTermLoanAgency";
export declare class FixedTermLoanAgency__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<FixedTermLoanAgency>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): FixedTermLoanAgency;
    connect(signer: Signer): FixedTermLoanAgency__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): FixedTermLoanAgency;
}

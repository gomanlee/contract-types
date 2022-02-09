import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LoanFactory2 } from "../LoanFactory2";
export declare class LoanFactory2__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<LoanFactory2>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): LoanFactory2;
    connect(signer: Signer): LoanFactory2__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): LoanFactory2;
}

import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestLoanToken } from "../TestLoanToken";
export declare class TestLoanToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestLoanToken>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestLoanToken;
    connect(signer: Signer): TestLoanToken__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TestLoanToken;
}

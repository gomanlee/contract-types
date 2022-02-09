import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestLoanFactory } from "../TestLoanFactory";
export declare class TestLoanFactory__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestLoanFactory>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestLoanFactory;
    connect(signer: Signer): TestLoanFactory__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TestLoanFactory;
}

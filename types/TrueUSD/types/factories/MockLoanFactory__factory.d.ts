import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockLoanFactory } from "../MockLoanFactory";
export declare class MockLoanFactory__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockLoanFactory>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockLoanFactory;
    connect(signer: Signer): MockLoanFactory__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockLoanFactory;
}

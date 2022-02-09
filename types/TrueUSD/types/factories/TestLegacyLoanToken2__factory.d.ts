import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestLegacyLoanToken2 } from "../TestLegacyLoanToken2";
export declare class TestLegacyLoanToken2__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestLegacyLoanToken2>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestLegacyLoanToken2;
    connect(signer: Signer): TestLegacyLoanToken2__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TestLegacyLoanToken2;
}

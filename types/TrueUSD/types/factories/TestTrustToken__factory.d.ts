import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestTrustToken } from "../TestTrustToken";
export declare class TestTrustToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestTrustToken>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestTrustToken;
    connect(signer: Signer): TestTrustToken__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TestTrustToken;
}

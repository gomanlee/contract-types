import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestUsdcToken } from "../TestUsdcToken";
export declare class TestUsdcToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestUsdcToken>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestUsdcToken;
    connect(signer: Signer): TestUsdcToken__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TestUsdcToken;
}

import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestUsdtToken } from "../TestUsdtToken";
export declare class TestUsdtToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestUsdtToken>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestUsdtToken;
    connect(signer: Signer): TestUsdtToken__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TestUsdtToken;
}

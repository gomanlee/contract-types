import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockUsdStableCoinOracle } from "../MockUsdStableCoinOracle";
export declare class MockUsdStableCoinOracle__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockUsdStableCoinOracle>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockUsdStableCoinOracle;
    connect(signer: Signer): MockUsdStableCoinOracle__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockUsdStableCoinOracle;
}

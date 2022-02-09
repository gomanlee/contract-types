import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockTruPriceOracle } from "../MockTruPriceOracle";
export declare class MockTruPriceOracle__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockTruPriceOracle>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockTruPriceOracle;
    connect(signer: Signer): MockTruPriceOracle__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockTruPriceOracle;
}

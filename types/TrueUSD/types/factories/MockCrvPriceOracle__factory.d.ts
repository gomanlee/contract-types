import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockCrvPriceOracle } from "../MockCrvPriceOracle";
export declare class MockCrvPriceOracle__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockCrvPriceOracle>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockCrvPriceOracle;
    connect(signer: Signer): MockCrvPriceOracle__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockCrvPriceOracle;
}

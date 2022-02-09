import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockPoolFactory } from "../MockPoolFactory";
export declare class MockPoolFactory__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockPoolFactory>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockPoolFactory;
    connect(signer: Signer): MockPoolFactory__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockPoolFactory;
}

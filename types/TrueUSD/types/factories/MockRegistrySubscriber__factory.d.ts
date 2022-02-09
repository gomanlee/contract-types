import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockRegistrySubscriber } from "../MockRegistrySubscriber";
export declare class MockRegistrySubscriber__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockRegistrySubscriber>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockRegistrySubscriber;
    connect(signer: Signer): MockRegistrySubscriber__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockRegistrySubscriber;
}

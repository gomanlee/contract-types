import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockTimeLock } from "../MockTimeLock";
export declare class MockTimeLock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockTimeLock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockTimeLock;
    connect(signer: Signer): MockTimeLock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockTimeLock;
}

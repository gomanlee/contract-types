import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockTrueUsd } from "../MockTrueUsd";
export declare class MockTrueUsd__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockTrueUsd>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockTrueUsd;
    connect(signer: Signer): MockTrueUsd__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockTrueUsd;
}

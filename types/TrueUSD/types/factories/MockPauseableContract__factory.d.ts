import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockPauseableContract } from "../MockPauseableContract";
export declare class MockPauseableContract__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockPauseableContract>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockPauseableContract;
    connect(signer: Signer): MockPauseableContract__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockPauseableContract;
}

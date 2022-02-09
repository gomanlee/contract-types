import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockBorrowingMutex } from "../MockBorrowingMutex";
export declare class MockBorrowingMutex__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockBorrowingMutex>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockBorrowingMutex;
    connect(signer: Signer): MockBorrowingMutex__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockBorrowingMutex;
}

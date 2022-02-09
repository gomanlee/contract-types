import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BorrowingMutex } from "../BorrowingMutex";
export declare class BorrowingMutex__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BorrowingMutex>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BorrowingMutex;
    connect(signer: Signer): BorrowingMutex__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): BorrowingMutex;
}

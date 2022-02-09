import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestBusdToken } from "../TestBusdToken";
export declare class TestBusdToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestBusdToken>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestBusdToken;
    connect(signer: Signer): TestBusdToken__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TestBusdToken;
}

import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockYToken } from "../MockYToken";
export declare class MockYToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockYToken>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockYToken;
    connect(signer: Signer): MockYToken__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockYToken;
}

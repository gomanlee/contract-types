import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockUsdc } from "../MockUsdc";
export declare class MockUsdc__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockUsdc>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockUsdc;
    connect(signer: Signer): MockUsdc__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockUsdc;
}

import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockGasRefundToken } from "../MockGasRefundToken";
export declare class MockGasRefundToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockGasRefundToken>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockGasRefundToken;
    connect(signer: Signer): MockGasRefundToken__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockGasRefundToken;
}

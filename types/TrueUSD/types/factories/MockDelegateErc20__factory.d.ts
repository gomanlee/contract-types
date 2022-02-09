import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockDelegateErc20 } from "../MockDelegateErc20";
export declare class MockDelegateErc20__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockDelegateErc20>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockDelegateErc20;
    connect(signer: Signer): MockDelegateErc20__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockDelegateErc20;
}

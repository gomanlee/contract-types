import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockErc20Token } from "../MockErc20Token";
export declare class MockErc20Token__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockErc20Token>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockErc20Token;
    connect(signer: Signer): MockErc20Token__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockErc20Token;
}

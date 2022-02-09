import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockStrategy } from "../MockStrategy";
export declare class MockStrategy__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_token: string, _pool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockStrategy>;
    getDeployTransaction(_token: string, _pool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockStrategy;
    connect(signer: Signer): MockStrategy__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockStrategy;
}

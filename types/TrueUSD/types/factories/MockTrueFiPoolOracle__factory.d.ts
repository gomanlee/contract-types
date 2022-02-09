import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockTrueFiPoolOracle } from "../MockTrueFiPoolOracle";
export declare class MockTrueFiPoolOracle__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(__token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockTrueFiPoolOracle>;
    getDeployTransaction(__token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockTrueFiPoolOracle;
    connect(signer: Signer): MockTrueFiPoolOracle__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockTrueFiPoolOracle;
}

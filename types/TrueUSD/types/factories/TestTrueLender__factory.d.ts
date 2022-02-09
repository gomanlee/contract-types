import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestTrueLender } from "../TestTrueLender";
export declare class TestTrueLender__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestTrueLender>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestTrueLender;
    connect(signer: Signer): TestTrueLender__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TestTrueLender;
}

import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestTrueFiPool2 } from "../TestTrueFiPool2";
export declare class TestTrueFiPool2__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestTrueFiPool2>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestTrueFiPool2;
    connect(signer: Signer): TestTrueFiPool2__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TestTrueFiPool2;
}

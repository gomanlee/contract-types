import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockTrueLender } from "../MockTrueLender";
export declare class MockTrueLender__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockTrueLender>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockTrueLender;
    connect(signer: Signer): MockTrueLender__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockTrueLender;
}

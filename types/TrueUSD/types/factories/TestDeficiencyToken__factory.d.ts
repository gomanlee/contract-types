import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestDeficiencyToken } from "../TestDeficiencyToken";
export declare class TestDeficiencyToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_debt: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestDeficiencyToken>;
    getDeployTransaction(_debt: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestDeficiencyToken;
    connect(signer: Signer): TestDeficiencyToken__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TestDeficiencyToken;
}

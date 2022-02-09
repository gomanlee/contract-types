import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TrueFiCreditOracle } from "../TrueFiCreditOracle";
export declare class TrueFiCreditOracle__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TrueFiCreditOracle>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TrueFiCreditOracle;
    connect(signer: Signer): TrueFiCreditOracle__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TrueFiCreditOracle;
}

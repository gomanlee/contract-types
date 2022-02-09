import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TrueFiCreditOracleDeprecated } from "../TrueFiCreditOracleDeprecated";
export declare class TrueFiCreditOracleDeprecated__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TrueFiCreditOracleDeprecated>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TrueFiCreditOracleDeprecated;
    connect(signer: Signer): TrueFiCreditOracleDeprecated__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TrueFiCreditOracleDeprecated;
}

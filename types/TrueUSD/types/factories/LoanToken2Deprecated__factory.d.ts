import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LoanToken2Deprecated } from "../LoanToken2Deprecated";
export declare class LoanToken2Deprecated__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_pool: string, _borrower: string, _lender: string, _liquidator: string, _amount: BigNumberish, _term: BigNumberish, _apy: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<LoanToken2Deprecated>;
    getDeployTransaction(_pool: string, _borrower: string, _lender: string, _liquidator: string, _amount: BigNumberish, _term: BigNumberish, _apy: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): LoanToken2Deprecated;
    connect(signer: Signer): LoanToken2Deprecated__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): LoanToken2Deprecated;
}

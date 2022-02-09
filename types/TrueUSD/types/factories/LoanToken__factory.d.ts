import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LoanToken } from "../LoanToken";
export declare class LoanToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_currencyToken: string, _borrower: string, _lender: string, _liquidator: string, _amount: BigNumberish, _term: BigNumberish, _apy: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<LoanToken>;
    getDeployTransaction(_currencyToken: string, _borrower: string, _lender: string, _liquidator: string, _amount: BigNumberish, _term: BigNumberish, _apy: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): LoanToken;
    connect(signer: Signer): LoanToken__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): LoanToken;
}

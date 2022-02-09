import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DebtToken } from "../DebtToken";
export declare class DebtToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<DebtToken>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): DebtToken;
    connect(signer: Signer): DebtToken__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): DebtToken;
}

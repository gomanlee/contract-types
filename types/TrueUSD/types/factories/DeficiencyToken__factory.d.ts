import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DeficiencyToken } from "../DeficiencyToken";
export declare class DeficiencyToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_debt: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<DeficiencyToken>;
    getDeployTransaction(_debt: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): DeficiencyToken;
    connect(signer: Signer): DeficiencyToken__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): DeficiencyToken;
}

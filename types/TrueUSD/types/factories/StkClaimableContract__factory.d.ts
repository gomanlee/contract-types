import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StkClaimableContract } from "../StkClaimableContract";
export declare class StkClaimableContract__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<StkClaimableContract>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): StkClaimableContract;
    connect(signer: Signer): StkClaimableContract__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): StkClaimableContract;
}

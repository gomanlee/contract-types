import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ClaimableContract } from "../ClaimableContract";
export declare class ClaimableContract__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ClaimableContract>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ClaimableContract;
    connect(signer: Signer): ClaimableContract__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ClaimableContract;
}

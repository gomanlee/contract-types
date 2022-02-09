import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ClaimableOwnable } from "../ClaimableOwnable";
export declare class ClaimableOwnable__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ClaimableOwnable>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ClaimableOwnable;
    connect(signer: Signer): ClaimableOwnable__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ClaimableOwnable;
}

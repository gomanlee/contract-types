import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Reclaimable } from "../Reclaimable";
export declare class Reclaimable__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Reclaimable>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Reclaimable;
    connect(signer: Signer): Reclaimable__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Reclaimable;
}

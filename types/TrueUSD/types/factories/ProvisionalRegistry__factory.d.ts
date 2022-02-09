import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ProvisionalRegistry } from "../ProvisionalRegistry";
export declare class ProvisionalRegistry__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ProvisionalRegistry>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ProvisionalRegistry;
    connect(signer: Signer): ProvisionalRegistry__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ProvisionalRegistry;
}

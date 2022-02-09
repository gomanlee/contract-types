import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ImplementationReference } from "../ImplementationReference";
export declare class ImplementationReference__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_implementation: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ImplementationReference>;
    getDeployTransaction(_implementation: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ImplementationReference;
    connect(signer: Signer): ImplementationReference__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ImplementationReference;
}

import { Signer, ContractFactory, PayableOverrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ForceEther } from "../ForceEther";
export declare class ForceEther__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ForceEther>;
    getDeployTransaction(overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ForceEther;
    connect(signer: Signer): ForceEther__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ForceEther;
}

import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StkTruToken } from "../StkTruToken";
export declare class StkTruToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<StkTruToken>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): StkTruToken;
    connect(signer: Signer): StkTruToken__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): StkTruToken;
}

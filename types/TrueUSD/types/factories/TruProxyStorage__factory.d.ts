import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TruProxyStorage } from "../TruProxyStorage";
export declare class TruProxyStorage__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TruProxyStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TruProxyStorage;
    connect(signer: Signer): TruProxyStorage__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TruProxyStorage;
}

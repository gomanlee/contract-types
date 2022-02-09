import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ProxyStorage } from "../ProxyStorage";
export declare class ProxyStorage__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ProxyStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ProxyStorage;
    connect(signer: Signer): ProxyStorage__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ProxyStorage;
}

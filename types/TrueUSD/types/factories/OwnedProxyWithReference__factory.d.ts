import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OwnedProxyWithReference } from "../OwnedProxyWithReference";
export declare class OwnedProxyWithReference__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_owner: string, _implementationReference: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<OwnedProxyWithReference>;
    getDeployTransaction(_owner: string, _implementationReference: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): OwnedProxyWithReference;
    connect(signer: Signer): OwnedProxyWithReference__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): OwnedProxyWithReference;
}

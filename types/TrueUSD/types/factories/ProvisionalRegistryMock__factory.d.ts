import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ProvisionalRegistryMock } from "../ProvisionalRegistryMock";
export declare class ProvisionalRegistryMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ProvisionalRegistryMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ProvisionalRegistryMock;
    connect(signer: Signer): ProvisionalRegistryMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ProvisionalRegistryMock;
}

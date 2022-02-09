import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RegistryMock } from "../RegistryMock";
export declare class RegistryMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<RegistryMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): RegistryMock;
    connect(signer: Signer): RegistryMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): RegistryMock;
}

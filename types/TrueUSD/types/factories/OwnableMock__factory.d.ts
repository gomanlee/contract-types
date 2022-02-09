import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OwnableMock } from "../OwnableMock";
export declare class OwnableMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<OwnableMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): OwnableMock;
    connect(signer: Signer): OwnableMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): OwnableMock;
}

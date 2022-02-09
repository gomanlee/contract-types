import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TokenControllerPauseMock } from "../TokenControllerPauseMock";
export declare class TokenControllerPauseMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TokenControllerPauseMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TokenControllerPauseMock;
    connect(signer: Signer): TokenControllerPauseMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TokenControllerPauseMock;
}

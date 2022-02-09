import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TokenControllerMock } from "../TokenControllerMock";
export declare class TokenControllerMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TokenControllerMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TokenControllerMock;
    connect(signer: Signer): TokenControllerMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TokenControllerMock;
}

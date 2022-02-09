import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TokenErrorReporter, TokenErrorReporterInterface } from "../TokenErrorReporter";
declare type TokenErrorReporterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TokenErrorReporter__factory extends ContractFactory {
    constructor(...args: TokenErrorReporterConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TokenErrorReporter>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TokenErrorReporter;
    connect(signer: Signer): TokenErrorReporter__factory;
    static readonly contractName: "TokenErrorReporter";
    readonly contractName: "TokenErrorReporter";
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603e80601d6000396000f3fe6080604052600080fdfea265627a7a72315820859deb072e34f61bd5c2b4dcd79282e2d84c0e95ef8c8c9518e62fa23ee9adc164736f6c63430005100032";
    static readonly abi: {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): TokenErrorReporterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TokenErrorReporter;
}
export {};

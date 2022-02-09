import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ComptrollerErrorReporter, ComptrollerErrorReporterInterface } from "../ComptrollerErrorReporter";
declare type ComptrollerErrorReporterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ComptrollerErrorReporter__factory extends ContractFactory {
    constructor(...args: ComptrollerErrorReporterConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ComptrollerErrorReporter>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ComptrollerErrorReporter;
    connect(signer: Signer): ComptrollerErrorReporter__factory;
    static readonly contractName: "ComptrollerErrorReporter";
    readonly contractName: "ComptrollerErrorReporter";
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603e80601d6000396000f3fe6080604052600080fdfea265627a7a723158201545d7cfd3edede80ddbc971e1c623545de797a5b3dd46b6491d7057c007215b64736f6c63430005100032";
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
    static createInterface(): ComptrollerErrorReporterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ComptrollerErrorReporter;
}
export {};

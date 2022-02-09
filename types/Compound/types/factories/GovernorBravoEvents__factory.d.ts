import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GovernorBravoEvents, GovernorBravoEventsInterface } from "../GovernorBravoEvents";
declare type GovernorBravoEventsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GovernorBravoEvents__factory extends ContractFactory {
    constructor(...args: GovernorBravoEventsConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<GovernorBravoEvents>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): GovernorBravoEvents;
    connect(signer: Signer): GovernorBravoEvents__factory;
    static readonly contractName: "GovernorBravoEvents";
    readonly contractName: "GovernorBravoEvents";
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50604c80601d6000396000f3fe6080604052600080fdfea365627a7a7231582087af4d9c10eafde8ede6cef887d281a45988fef03b0c4c41c8a7ff441f1320476c6578706572696d656e74616cf564736f6c63430005100040";
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
    static createInterface(): GovernorBravoEventsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GovernorBravoEvents;
}
export {};

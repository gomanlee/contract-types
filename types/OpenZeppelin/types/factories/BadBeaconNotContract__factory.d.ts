import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BadBeaconNotContract, BadBeaconNotContractInterface } from "../BadBeaconNotContract";
declare type BadBeaconNotContractConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BadBeaconNotContract__factory extends ContractFactory {
    constructor(...args: BadBeaconNotContractConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BadBeaconNotContract>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BadBeaconNotContract;
    connect(signer: Signer): BadBeaconNotContract__factory;
    static readonly contractName: "BadBeaconNotContract";
    readonly contractName: "BadBeaconNotContract";
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060dc8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80635c60da1b14602d575b600080fd5b60336047565b604051603e9190608d565b60405180910390f35b60006001905090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006079826050565b9050919050565b6087816070565b82525050565b600060208201905060a060008301846080565b9291505056fea26469706673582212205c5eb8b1af616d47b7d9bb1b56e8125531dc7a55e8c0cce858bea9140bf1388464736f6c63430008090033";
    static readonly abi: {
        inputs: any[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): BadBeaconNotContractInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BadBeaconNotContract;
}
export {};

import { Signer, ContractFactory, Overrides, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ArraysImpl, ArraysImplInterface } from "../ArraysImpl";
declare type ArraysImplConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ArraysImpl__factory extends ContractFactory {
    constructor(...args: ArraysImplConstructorParams);
    deploy(array: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ArraysImpl>;
    getDeployTransaction(array: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ArraysImpl;
    connect(signer: Signer): ArraysImpl__factory;
    static readonly contractName: "ArraysImpl";
    readonly contractName: "ArraysImpl";
    static readonly bytecode = "0x608060405234801561001057600080fd5b506040516106413803806106418339818101604052810190610032919061025c565b806000908051906020019061004892919061004f565b50506102a5565b82805482825590600052602060002090810192821561008b579160200282015b8281111561008a57825182559160200191906001019061006f565b5b509050610098919061009c565b5090565b5b808211156100b557600081600090555060010161009d565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61011b826100d2565b810181811067ffffffffffffffff8211171561013a576101396100e3565b5b80604052505050565b600061014d6100b9565b90506101598282610112565b919050565b600067ffffffffffffffff821115610179576101786100e3565b5b602082029050602081019050919050565b600080fd5b6000819050919050565b6101a28161018f565b81146101ad57600080fd5b50565b6000815190506101bf81610199565b92915050565b60006101d86101d38461015e565b610143565b905080838252602082019050602084028301858111156101fb576101fa61018a565b5b835b81811015610224578061021088826101b0565b8452602084019350506020810190506101fd565b5050509392505050565b600082601f830112610243576102426100cd565b5b81516102538482602086016101c5565b91505092915050565b600060208284031215610272576102716100c3565b5b600082015167ffffffffffffffff8111156102905761028f6100c8565b5b61029c8482850161022e565b91505092915050565b61038d806102b46000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806333e3a58a14610030575b600080fd5b61004a600480360381019061004591906101b8565b610060565b60405161005791906101f4565b60405180910390f35b600061007682600061007d90919063ffffffff16565b9050919050565b600080838054905014156100945760009050610151565b600080848054905090505b808210156100f85760006100b38383610157565b9050848682815481106100c9576100c861020f565b5b906000526020600020015411156100e2578091506100f2565b6001816100ef919061026d565b92505b5061009f565b6000821180156101305750838560018461011291906102c3565b815481106101235761012261020f565b5b9060005260206000200154145b1561014b5760018261014291906102c3565b92505050610151565b81925050505b92915050565b600060028284186101689190610326565b828416610175919061026d565b905092915050565b600080fd5b6000819050919050565b61019581610182565b81146101a057600080fd5b50565b6000813590506101b28161018c565b92915050565b6000602082840312156101ce576101cd61017d565b5b60006101dc848285016101a3565b91505092915050565b6101ee81610182565b82525050565b600060208201905061020960008301846101e5565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061027882610182565b915061028383610182565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156102b8576102b761023e565b5b828201905092915050565b60006102ce82610182565b91506102d983610182565b9250828210156102ec576102eb61023e565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061033182610182565b915061033c83610182565b92508261034c5761034b6102f7565b5b82820490509291505056fea26469706673582212207027f2ca2e81a066574dc229c0b720b9c6940365945643c101cb1c4577b704eb64736f6c63430008090033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): ArraysImplInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ArraysImpl;
}
export {};
import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OwnableMock, OwnableMockInterface } from "../OwnableMock";
declare type OwnableMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OwnableMock__factory extends ContractFactory {
    constructor(...args: OwnableMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<OwnableMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): OwnableMock;
    connect(signer: Signer): OwnableMock__factory;
    static readonly contractName: "OwnableMock";
    readonly contractName: "OwnableMock";
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6104fe8061010d6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063715018a6146100465780638da5cb5b14610050578063f2fde38b1461006e575b600080fd5b61004e61008a565b005b610058610112565b6040516100659190610340565b60405180910390f35b6100886004803603810190610083919061038c565b61013b565b005b610092610233565b73ffffffffffffffffffffffffffffffffffffffff166100b0610112565b73ffffffffffffffffffffffffffffffffffffffff1614610106576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100fd90610416565b60405180910390fd5b610110600061023b565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610143610233565b73ffffffffffffffffffffffffffffffffffffffff16610161610112565b73ffffffffffffffffffffffffffffffffffffffff16146101b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ae90610416565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610227576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161021e906104a8565b60405180910390fd5b6102308161023b565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061032a826102ff565b9050919050565b61033a8161031f565b82525050565b60006020820190506103556000830184610331565b92915050565b600080fd5b6103698161031f565b811461037457600080fd5b50565b60008135905061038681610360565b92915050565b6000602082840312156103a2576103a161035b565b5b60006103b084828501610377565b91505092915050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006104006020836103b9565b915061040b826103ca565b602082019050919050565b6000602082019050818103600083015261042f816103f3565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006104926026836103b9565b915061049d82610436565b604082019050919050565b600060208201905081810360008301526104c181610485565b905091905056fea2646970667358221220341cba8bf6eacbeff6c51368971a8753f697cb2f7baff32a886b3048c8e3dcf964736f6c63430008090033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: any[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: any[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): OwnableMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OwnableMock;
}
export {};

import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SupportsInterfaceWithLookupMock, SupportsInterfaceWithLookupMockInterface } from "../SupportsInterfaceWithLookupMock";
declare type SupportsInterfaceWithLookupMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SupportsInterfaceWithLookupMock__factory extends ContractFactory {
    constructor(...args: SupportsInterfaceWithLookupMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SupportsInterfaceWithLookupMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SupportsInterfaceWithLookupMock;
    connect(signer: Signer): SupportsInterfaceWithLookupMock__factory;
    static readonly contractName: "SupportsInterfaceWithLookupMock";
    readonly contractName: "SupportsInterfaceWithLookupMock";
    static readonly bytecode = "0x608060405234801561001057600080fd5b506100276301ffc9a760e01b61002c60201b60201c565b6101a4565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415610095576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161008c90610184565b60405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600082825260208201905092915050565b7f455243313635496e7465726661636573537570706f727465643a20696e76616c60008201527f696420696e746572666163652069640000000000000000000000000000000000602082015250565b600061016e602f83610101565b915061017982610112565b604082019050919050565b6000602082019050818103600083015261019d81610161565b9050919050565b61021b806101b36000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806301ffc9a71461003b57806334d7006c1461006b575b600080fd5b61005560048036038101906100509190610158565b610089565b60405161006291906101a0565b60405180910390f35b6100736100f0565b60405161008091906101ca565b60405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b6301ffc9a760e01b81565b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61013581610100565b811461014057600080fd5b50565b6000813590506101528161012c565b92915050565b60006020828403121561016e5761016d6100fb565b5b600061017c84828501610143565b91505092915050565b60008115159050919050565b61019a81610185565b82525050565b60006020820190506101b56000830184610191565b92915050565b6101c481610100565b82525050565b60006020820190506101df60008301846101bb565b9291505056fea26469706673582212208a6d2537d6e47f22edaae6c7761a05ee693c8dd59c52fe8bf7ef29e6ad692eef64736f6c63430008090033";
    static readonly abi: ({
        inputs: any[];
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
    static createInterface(): SupportsInterfaceWithLookupMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SupportsInterfaceWithLookupMock;
}
export {};

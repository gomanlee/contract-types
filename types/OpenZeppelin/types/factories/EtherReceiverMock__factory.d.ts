import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { EtherReceiverMock, EtherReceiverMockInterface } from "../EtherReceiverMock";
declare type EtherReceiverMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EtherReceiverMock__factory extends ContractFactory {
    constructor(...args: EtherReceiverMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<EtherReceiverMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): EtherReceiverMock;
    connect(signer: Signer): EtherReceiverMock__factory;
    static readonly contractName: "EtherReceiverMock";
    readonly contractName: "EtherReceiverMock";
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610116806100206000396000f3fe608060405260043610601f5760003560e01c80634fea120c14604057603b565b36603b5760008054906101000a900460ff16603957600080fd5b005b600080fd5b348015604b57600080fd5b5060626004803603810190605e919060b8565b6064565b005b806000806101000a81548160ff02191690831515021790555050565b600080fd5b60008115159050919050565b6098816085565b811460a257600080fd5b50565b60008135905060b2816091565b92915050565b60006020828403121560cb5760ca6080565b5b600060d78482850160a5565b9150509291505056fea2646970667358221220646b7d14c67df1cf20ffc703f78462287531ede0fb4487f3c9a63a57725d61e964736f6c63430008090033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: any[];
        stateMutability: string;
        type: string;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[];
    static createInterface(): EtherReceiverMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): EtherReceiverMock;
}
export {};

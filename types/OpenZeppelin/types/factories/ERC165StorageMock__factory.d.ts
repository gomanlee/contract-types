import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC165StorageMock, ERC165StorageMockInterface } from "../ERC165StorageMock";
declare type ERC165StorageMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC165StorageMock__factory extends ContractFactory {
    constructor(...args: ERC165StorageMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC165StorageMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC165StorageMock;
    connect(signer: Signer): ERC165StorageMock__factory;
    static readonly contractName: "ERC165StorageMock";
    readonly contractName: "ERC165StorageMock";
    static readonly bytecode = "0x608060405234801561001057600080fd5b506103bc806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806301ffc9a71461003b578063214cdb801461006b575b600080fd5b610055600480360381019061005091906102a6565b610087565b60405161006291906102ee565b60405180910390f35b610085600480360381019061008091906102a6565b6100fe565b005b60006100928261010a565b806100f75750600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff165b9050919050565b61010781610174565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156101dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101d490610366565b60405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6102838161024e565b811461028e57600080fd5b50565b6000813590506102a08161027a565b92915050565b6000602082840312156102bc576102bb610249565b5b60006102ca84828501610291565b91505092915050565b60008115159050919050565b6102e8816102d3565b82525050565b600060208201905061030360008301846102df565b92915050565b600082825260208201905092915050565b7f4552433136353a20696e76616c696420696e7465726661636520696400000000600082015250565b6000610350601c83610309565b915061035b8261031a565b602082019050919050565b6000602082019050818103600083015261037f81610343565b905091905056fea2646970667358221220f5d5017f8573e1cc42dab2f26891ef4053c0a6ea5242f3246f53cae30356ceab64736f6c63430008090033";
    static readonly abi: {
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
    }[];
    static createInterface(): ERC165StorageMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC165StorageMock;
}
export {};

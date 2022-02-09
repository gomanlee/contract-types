import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ComptrollerV1Storage, ComptrollerV1StorageInterface } from "../ComptrollerV1Storage";
declare type ComptrollerV1StorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ComptrollerV1Storage__factory extends ContractFactory {
    constructor(...args: ComptrollerV1StorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ComptrollerV1Storage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ComptrollerV1Storage;
    connect(signer: Signer): ComptrollerV1Storage__factory;
    static readonly contractName: "ComptrollerV1Storage";
    readonly contractName: "ComptrollerV1Storage";
    static readonly bytecode = "0x608060405234801561001057600080fd5b506101f9806100206000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063bb82aa5e11610066578063bb82aa5e146100e6578063dce15449146100ee578063dcfbc0c71461011a578063e875544614610122578063f851a4401461012a57610093565b806326782247146100985780634ada90af146100bc5780637dc0d1d0146100d657806394b2294b146100de575b600080fd5b6100a0610132565b604080516001600160a01b039092168252519081900360200190f35b6100c4610141565b60408051918252519081900360200190f35b6100a0610147565b6100c4610156565b6100a061015c565b6100a06004803603604081101561010457600080fd5b506001600160a01b03813516906020013561016b565b6100a06101a0565b6100c46101af565b6100a06101b5565b6001546001600160a01b031681565b60065481565b6004546001600160a01b031681565b60075481565b6002546001600160a01b031681565b6008602052816000526040600020818154811061018457fe5b6000918252602090912001546001600160a01b03169150829050565b6003546001600160a01b031681565b60055481565b6000546001600160a01b03168156fea265627a7a7231582057ae93ceada3aeadca337247815e35df2369d889ef364b9924aab73eef85c67a64736f6c63430005100032";
    static readonly abi: {
        constant: boolean;
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
        payable: boolean;
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ComptrollerV1StorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ComptrollerV1Storage;
}
export {};

import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CErc20Storage, CErc20StorageInterface } from "../CErc20Storage";
declare type CErc20StorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CErc20Storage__factory extends ContractFactory {
    constructor(...args: CErc20StorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CErc20Storage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CErc20Storage;
    connect(signer: Signer): CErc20Storage__factory;
    static readonly contractName: "CErc20Storage";
    readonly contractName: "CErc20Storage";
    static readonly bytecode = "0x6080604052348015600f57600080fd5b5060938061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80636f307dc314602d575b600080fd5b6033604f565b604080516001600160a01b039092168252519081900360200190f35b6000546001600160a01b03168156fea265627a7a7231582084f3768d5209dce9daebd988124838763b1253df12c767d7202cbfafe5f1969164736f6c63430005100032";
    static readonly abi: {
        constant: boolean;
        inputs: any[];
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
    static createInterface(): CErc20StorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CErc20Storage;
}
export {};

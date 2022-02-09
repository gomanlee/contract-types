import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UnitrollerAdminStorage, UnitrollerAdminStorageInterface } from "../UnitrollerAdminStorage";
declare type UnitrollerAdminStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class UnitrollerAdminStorage__factory extends ContractFactory {
    constructor(...args: UnitrollerAdminStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<UnitrollerAdminStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): UnitrollerAdminStorage;
    connect(signer: Signer): UnitrollerAdminStorage__factory;
    static readonly contractName: "UnitrollerAdminStorage";
    readonly contractName: "UnitrollerAdminStorage";
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060f08061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060465760003560e01c80632678224714604b578063bb82aa5e14606d578063dcfbc0c7146073578063f851a440146079575b600080fd5b6051607f565b604080516001600160a01b039092168252519081900360200190f35b6051608e565b6051609d565b605160ac565b6001546001600160a01b031681565b6002546001600160a01b031681565b6003546001600160a01b031681565b6000546001600160a01b03168156fea265627a7a723158201106de9b6df6a9561e4d97bd0bb2012051500d949b01b5d0f346323637b0036164736f6c63430005100032";
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
    static createInterface(): UnitrollerAdminStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UnitrollerAdminStorage;
}
export {};

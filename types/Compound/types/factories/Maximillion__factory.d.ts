import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Maximillion, MaximillionInterface } from "../Maximillion";
declare type MaximillionConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Maximillion__factory extends ContractFactory {
    constructor(...args: MaximillionConstructorParams);
    deploy(cEther_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Maximillion>;
    getDeployTransaction(cEther_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Maximillion;
    connect(signer: Signer): Maximillion__factory;
    static readonly contractName: "Maximillion";
    readonly contractName: "Maximillion";
    static readonly bytecode = "0x608060405234801561001057600080fd5b506040516103363803806103368339818101604052602081101561003357600080fd5b5051600080546001600160a01b039092166001600160a01b03199092169190911790556102d1806100656000396000f3fe6080604052600436106100345760003560e01c806319b68c0014610039578063367b7f051461006a5780639f35c3d51461009a575b600080fd5b34801561004557600080fd5b5061004e6100c0565b604080516001600160a01b039092168252519081900360200190f35b6100986004803603604081101561008057600080fd5b506001600160a01b03813581169160200135166100cf565b005b610098600480360360208110156100b057600080fd5b50356001600160a01b0316610282565b6000546001600160a01b031681565b60003490506000826001600160a01b03166317bfdfbc856040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b03168152602001915050602060405180830381600087803b15801561012e57600080fd5b505af1158015610142573d6000803e3d6000fd5b505050506040513d602081101561015857600080fd5b505190508082111561020a57826001600160a01b031663e597461982866040518363ffffffff1660e01b815260040180826001600160a01b03166001600160a01b031681526020019150506000604051808303818588803b1580156101bc57600080fd5b505af11580156101d0573d6000803e3d6000fd5b505060405133935084860380156108fc02935091506000818181858888f19350505050158015610204573d6000803e3d6000fd5b5061027c565b826001600160a01b031663e597461983866040518363ffffffff1660e01b815260040180826001600160a01b03166001600160a01b031681526020019150506000604051808303818588803b15801561026257600080fd5b505af1158015610276573d6000803e3d6000fd5b50505050505b50505050565b6000546102999082906001600160a01b03166100cf565b5056fea265627a7a72315820adf3b4fdba2cefcfc4c2d413b16e95039d37aee32af31f1a24a686128606bc8064736f6c63430005100032";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        constant?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
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
    } | {
        constant: boolean;
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: any[];
        payable: boolean;
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): MaximillionInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Maximillion;
}
export {};

import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { EnumerableAddressSetMock, EnumerableAddressSetMockInterface } from "../EnumerableAddressSetMock";
declare type EnumerableAddressSetMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EnumerableAddressSetMock__factory extends ContractFactory {
    constructor(...args: EnumerableAddressSetMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<EnumerableAddressSetMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): EnumerableAddressSetMock;
    connect(signer: Signer): EnumerableAddressSetMock__factory;
    static readonly contractName: "EnumerableAddressSetMock";
    readonly contractName: "EnumerableAddressSetMock";
    static readonly bytecode = "0x608060405234801561001057600080fd5b506108b0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80630a3b0a4f146100675780631f7b6d321461008357806329092d0e146100a15780635dbe47e8146100bd578063971217b7146100ed578063e0886f901461010b575b600080fd5b610081600480360381019061007c91906105bf565b61013b565b005b61008b61018e565b6040516100989190610605565b60405180910390f35b6100bb60048036038101906100b691906105bf565b61019f565b005b6100d760048036038101906100d291906105bf565b6101f2565b6040516100e4919061063b565b60405180910390f35b6100f561020f565b6040516101029190610714565b60405180910390f35b61012560048036038101906101209190610762565b610220565b604051610132919061079e565b60405180910390f35b600061015182600061023d90919063ffffffff16565b90507fed9840e0775590557ad736875d96c95cf1458b766335f74339951a32c82a9e3381604051610182919061063b565b60405180910390a15050565b600061019a600061026d565b905090565b60006101b582600061028290919063ffffffff16565b90507fed9840e0775590557ad736875d96c95cf1458b766335f74339951a32c82a9e33816040516101e6919061063b565b60405180910390a15050565b60006102088260006102b290919063ffffffff16565b9050919050565b606061021b60006102e2565b905090565b600061023682600061030390919063ffffffff16565b9050919050565b6000610265836000018373ffffffffffffffffffffffffffffffffffffffff1660001b61031d565b905092915050565b600061027b8260000161038d565b9050919050565b60006102aa836000018373ffffffffffffffffffffffffffffffffffffffff1660001b61039e565b905092915050565b60006102da836000018373ffffffffffffffffffffffffffffffffffffffff1660001b6104b2565b905092915050565b606060006102f2836000016104d5565b905060608190508092505050919050565b60006103128360000183610531565b60001c905092915050565b600061032983836104b2565b610382578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050610387565b600090505b92915050565b600081600001805490509050919050565b600080836001016000848152602001908152602001600020549050600081146104a65760006001826103d091906107e8565b90506000600186600001805490506103e891906107e8565b90508181146104575760008660000182815481106104095761040861081c565b5b906000526020600020015490508087600001848154811061042d5761042c61081c565b5b90600052602060002001819055508387600101600083815260200190815260200160002081905550505b8560000180548061046b5761046a61084b565b5b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506104ac565b60009150505b92915050565b600080836001016000848152602001908152602001600020541415905092915050565b60608160000180548060200260200160405190810160405280929190818152602001828054801561052557602002820191906000526020600020905b815481526020019060010190808311610511575b50505050509050919050565b60008260000182815481106105495761054861081c565b5b9060005260206000200154905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061058c82610561565b9050919050565b61059c81610581565b81146105a757600080fd5b50565b6000813590506105b981610593565b92915050565b6000602082840312156105d5576105d461055c565b5b60006105e3848285016105aa565b91505092915050565b6000819050919050565b6105ff816105ec565b82525050565b600060208201905061061a60008301846105f6565b92915050565b60008115159050919050565b61063581610620565b82525050565b6000602082019050610650600083018461062c565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61068b81610581565b82525050565b600061069d8383610682565b60208301905092915050565b6000602082019050919050565b60006106c182610656565b6106cb8185610661565b93506106d683610672565b8060005b838110156107075781516106ee8882610691565b97506106f9836106a9565b9250506001810190506106da565b5085935050505092915050565b6000602082019050818103600083015261072e81846106b6565b905092915050565b61073f816105ec565b811461074a57600080fd5b50565b60008135905061075c81610736565b92915050565b6000602082840312156107785761077761055c565b5b60006107868482850161074d565b91505092915050565b61079881610581565b82525050565b60006020820190506107b3600083018461078f565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006107f3826105ec565b91506107fe836105ec565b925082821015610811576108106107b9565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea2646970667358221220a5672e9bf416cc304d6ba8ebcae470c977ed8f50014c06ac52c8e4025e246b1164736f6c63430008090033";
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
        anonymous?: undefined;
    })[];
    static createInterface(): EnumerableAddressSetMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): EnumerableAddressSetMock;
}
export {};

import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AddressToUintMapMock, AddressToUintMapMockInterface } from "../AddressToUintMapMock";
declare type AddressToUintMapMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AddressToUintMapMock__factory extends ContractFactory {
    constructor(...args: AddressToUintMapMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<AddressToUintMapMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): AddressToUintMapMock;
    connect(signer: Signer): AddressToUintMapMock__factory;
    static readonly contractName: "AddressToUintMapMock";
    readonly contractName: "AddressToUintMapMock";
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610b8a806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80635dbe47e81161005b5780635dbe47e8146100d8578063864083af14610108578063c2bc2efc14610139578063e0886f90146101695761007d565b80631f7b6d321461008257806329092d0e146100a05780633825d828146100bc575b600080fd5b61008a61019a565b604051610097919061083b565b60405180910390f35b6100ba60048036038101906100b591906108b9565b6101ab565b005b6100d660048036038101906100d19190610912565b6101fe565b005b6100f260048036038101906100ed91906108b9565b610254565b6040516100ff919061096d565b60405180910390f35b610122600480360381019061011d91906108b9565b610271565b604051610130929190610988565b60405180910390f35b610153600480360381019061014e91906108b9565b610291565b604051610160919061083b565b60405180910390f35b610183600480360381019061017e91906109b1565b6102ae565b6040516101919291906109ed565b60405180910390f35b60006101a660006102ce565b905090565b60006101c18260006102e390919063ffffffff16565b90507fed9840e0775590557ad736875d96c95cf1458b766335f74339951a32c82a9e33816040516101f2919061096d565b60405180910390a15050565b6000610216838360006103139092919063ffffffff16565b90507fed9840e0775590557ad736875d96c95cf1458b766335f74339951a32c82a9e3381604051610247919061096d565b60405180910390a1505050565b600061026a82600061034890919063ffffffff16565b9050919050565b60008061028883600061037890919063ffffffff16565b91509150915091565b60006102a78260006103ba90919063ffffffff16565b9050919050565b6000806102c58360006103ed90919063ffffffff16565b91509150915091565b60006102dc82600001610419565b9050919050565b600061030b836000018373ffffffffffffffffffffffffffffffffffffffff1660001b61042e565b905092915050565b600061033f846000018473ffffffffffffffffffffffffffffffffffffffff1660001b8460001b610467565b90509392505050565b6000610370836000018373ffffffffffffffffffffffffffffffffffffffff1660001b6104a2565b905092915050565b6000806000806103a4866000018673ffffffffffffffffffffffffffffffffffffffff1660001b6104c2565b91509150818160001c9350935050509250929050565b60006103e2836000018373ffffffffffffffffffffffffffffffffffffffff1660001b610512565b60001c905092915050565b600080600080610400866000018661058e565b915091508160001c8160001c9350935050509250929050565b6000610427826000016105ce565b9050919050565b60008260020160008381526020019081526020016000206000905561045f82846000016105e390919063ffffffff16565b905092915050565b6000818460020160008581526020019081526020016000208190555061049983856000016105fa90919063ffffffff16565b90509392505050565b60006104ba828460000161061190919063ffffffff16565b905092915050565b60008060008460020160008581526020019081526020016000205490506000801b811415610502576104f485856104a2565b6000801b925092505061050b565b60018192509250505b9250929050565b6000808360020160008481526020019081526020016000205490506000801b81141580610545575061054484846104a2565b5b610584576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057b90610a73565b60405180910390fd5b8091505092915050565b60008060006105a9848660000161062890919063ffffffff16565b9050808560020160008381526020019081526020016000205492509250509250929050565b60006105dc8260000161063f565b9050919050565b60006105f28360000183610650565b905092915050565b60006106098360000183610764565b905092915050565b600061062083600001836107d4565b905092915050565b600061063783600001836107f7565b905092915050565b600081600001805490509050919050565b600080836001016000848152602001908152602001600020549050600081146107585760006001826106829190610ac2565b905060006001866000018054905061069a9190610ac2565b90508181146107095760008660000182815481106106bb576106ba610af6565b5b90600052602060002001549050808760000184815481106106df576106de610af6565b5b90600052602060002001819055508387600101600083815260200190815260200160002081905550505b8560000180548061071d5761071c610b25565b5b60019003818190600052602060002001600090559055856001016000868152602001908152602001600020600090556001935050505061075e565b60009150505b92915050565b600061077083836107d4565b6107c95782600001829080600181540180825580915050600190039060005260206000200160009091909190915055826000018054905083600101600084815260200190815260200160002081905550600190506107ce565b600090505b92915050565b600080836001016000848152602001908152602001600020541415905092915050565b600082600001828154811061080f5761080e610af6565b5b9060005260206000200154905092915050565b6000819050919050565b61083581610822565b82525050565b6000602082019050610850600083018461082c565b92915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006108868261085b565b9050919050565b6108968161087b565b81146108a157600080fd5b50565b6000813590506108b38161088d565b92915050565b6000602082840312156108cf576108ce610856565b5b60006108dd848285016108a4565b91505092915050565b6108ef81610822565b81146108fa57600080fd5b50565b60008135905061090c816108e6565b92915050565b6000806040838503121561092957610928610856565b5b6000610937858286016108a4565b9250506020610948858286016108fd565b9150509250929050565b60008115159050919050565b61096781610952565b82525050565b6000602082019050610982600083018461095e565b92915050565b600060408201905061099d600083018561095e565b6109aa602083018461082c565b9392505050565b6000602082840312156109c7576109c6610856565b5b60006109d5848285016108fd565b91505092915050565b6109e78161087b565b82525050565b6000604082019050610a0260008301856109de565b610a0f602083018461082c565b9392505050565b600082825260208201905092915050565b7f456e756d657261626c654d61703a206e6f6e6578697374656e74206b65790000600082015250565b6000610a5d601e83610a16565b9150610a6882610a27565b602082019050919050565b60006020820190508181036000830152610a8c81610a50565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610acd82610822565b9150610ad883610822565b925082821015610aeb57610aea610a93565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea26469706673582212200c6cafc7679c39404e0a7f1d0eeb527b5de1d78fe755cee8533a3cc9a0ee19fd64736f6c63430008090033";
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
    static createInterface(): AddressToUintMapMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AddressToUintMapMock;
}
export {};
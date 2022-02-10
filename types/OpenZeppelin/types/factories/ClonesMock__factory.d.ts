import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ClonesMock, ClonesMockInterface } from "../ClonesMock";
declare type ClonesMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ClonesMock__factory extends ContractFactory {
    constructor(...args: ClonesMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ClonesMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ClonesMock;
    connect(signer: Signer): ClonesMock__factory;
    static readonly contractName: "ClonesMock";
    readonly contractName: "ClonesMock";
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610bdd806100206000396000f3fe6080604052600436106100345760003560e01c80630fbe133c14610039578063360d0fad146100555780636e9ebc8114610092575b600080fd5b610053600480360381019061004e919061071b565b6100ae565b005b34801561006157600080fd5b5061007c600480360381019061007791906107b1565b61011f565b6040516100899190610800565b60405180910390f35b6100ac60048036038101906100a7919061081b565b610152565b005b61011a6100d08473ffffffffffffffffffffffffffffffffffffffff166101ce565b83838080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506102a3565b505050565b600061014a828473ffffffffffffffffffffffffffffffffffffffff1661031590919063ffffffff16565b905092915050565b6101c861017e848673ffffffffffffffffffffffffffffffffffffffff1661032a90919063ffffffff16565b83838080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506102a3565b50505050565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528260601b60148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526037816000f0915050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561029e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610295906108ec565b60405180910390fd5b919050565b6000815111156102da576102d881348473ffffffffffffffffffffffffffffffffffffffff166104019092919063ffffffff16565b505b7f39a773f10839d86923d91d5ce7d6642f2f63a95d850495abb1f162e38aa04ea5826040516103099190610800565b60405180910390a15050565b6000610322838330610430565b905092915050565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528360601b60148201527f5af43d82803e903d91602b57fd5bf300000000000000000000000000000000006028820152826037826000f5915050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156103fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103f290610958565b60405180910390fd5b92915050565b6060610427848484604051806060016040528060298152602001610b7f602991396104b0565b90509392505050565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528460601b60148201527f5af43d82803e903d91602b57fd5bf3ff0000000000000000000000000000000060288201528260601b603882015283604c82015260378120606c820152605560378201209150509392505050565b6060824710156104f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ec906109ea565b60405180910390fd5b6104fe856105c4565b61053d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053490610a56565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516105669190610af0565b60006040518083038185875af1925050503d80600081146105a3576040519150601f19603f3d011682016040523d82523d6000602084013e6105a8565b606091505b50915091506105b88282866105e7565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b606083156105f757829050610647565b60008351111561060a5782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063e9190610b5c565b60405180910390fd5b9392505050565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061068382610658565b9050919050565b61069381610678565b811461069e57600080fd5b50565b6000813590506106b08161068a565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126106db576106da6106b6565b5b8235905067ffffffffffffffff8111156106f8576106f76106bb565b5b602083019150836001820283011115610714576107136106c0565b5b9250929050565b6000806000604084860312156107345761073361064e565b5b6000610742868287016106a1565b935050602084013567ffffffffffffffff81111561076357610762610653565b5b61076f868287016106c5565b92509250509250925092565b6000819050919050565b61078e8161077b565b811461079957600080fd5b50565b6000813590506107ab81610785565b92915050565b600080604083850312156107c8576107c761064e565b5b60006107d6858286016106a1565b92505060206107e78582860161079c565b9150509250929050565b6107fa81610678565b82525050565b600060208201905061081560008301846107f1565b92915050565b600080600080606085870312156108355761083461064e565b5b6000610843878288016106a1565b94505060206108548782880161079c565b935050604085013567ffffffffffffffff81111561087557610874610653565b5b610881878288016106c5565b925092505092959194509250565b600082825260208201905092915050565b7f455243313136373a20637265617465206661696c656400000000000000000000600082015250565b60006108d660168361088f565b91506108e1826108a0565b602082019050919050565b60006020820190508181036000830152610905816108c9565b9050919050565b7f455243313136373a2063726561746532206661696c6564000000000000000000600082015250565b600061094260178361088f565b915061094d8261090c565b602082019050919050565b6000602082019050818103600083015261097181610935565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b60006109d460268361088f565b91506109df82610978565b604082019050919050565b60006020820190508181036000830152610a03816109c7565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000610a40601d8361088f565b9150610a4b82610a0a565b602082019050919050565b60006020820190508181036000830152610a6f81610a33565b9050919050565b600081519050919050565b600081905092915050565b60005b83811015610aaa578082015181840152602081019050610a8f565b83811115610ab9576000848401525b50505050565b6000610aca82610a76565b610ad48185610a81565b9350610ae4818560208601610a8c565b80840191505092915050565b6000610afc8284610abf565b915081905092915050565b600081519050919050565b6000601f19601f8301169050919050565b6000610b2e82610b07565b610b38818561088f565b9350610b48818560208601610a8c565b610b5181610b12565b840191505092915050565b60006020820190508181036000830152610b768184610b23565b90509291505056fe416464726573733a206c6f772d6c6576656c2063616c6c20776974682076616c7565206661696c6564a2646970667358221220d10272ca218f7cdf25215347564751c2735d1b25896adfbd3023b6620a9d8c7364736f6c63430008090033";
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
    static createInterface(): ClonesMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ClonesMock;
}
export {};

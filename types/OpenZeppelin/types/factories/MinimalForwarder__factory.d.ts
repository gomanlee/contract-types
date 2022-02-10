import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MinimalForwarder, MinimalForwarderInterface } from "../MinimalForwarder";
declare type MinimalForwarderConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MinimalForwarder__factory extends ContractFactory {
    constructor(...args: MinimalForwarderConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MinimalForwarder>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MinimalForwarder;
    connect(signer: Signer): MinimalForwarder__factory;
    static readonly contractName: "MinimalForwarder";
    readonly contractName: "MinimalForwarder";
    static readonly bytecode = "0x6101406040523480156200001257600080fd5b506040518060400160405280601081526020017f4d696e696d616c466f72776172646572000000000000000000000000000000008152506040518060400160405280600581526020017f302e302e3100000000000000000000000000000000000000000000000000000081525060008280519060200120905060008280519060200120905060007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f90508260e081815250508161010081815250504660a08181525050620000e88184846200013760201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff168152505080610120818152505050505050506200024b565b6000838383463060405160200162000154959493929190620001ee565b6040516020818303038152906040528051906020012090509392505050565b6000819050919050565b620001888162000173565b82525050565b6000819050919050565b620001a3816200018e565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001d682620001a9565b9050919050565b620001e881620001c9565b82525050565b600060a0820190506200020560008301886200017d565b6200021460208301876200017d565b6200022360408301866200017d565b62000232606083018562000198565b620002416080830184620001dd565b9695505050505050565b60805160a05160c05160e051610100516101205161144c6200029b600039600061057b015260006105bd0152600061059c015260006104d10152600061052701526000610550015261144c6000f3fe6080604052600436106100345760003560e01c80632d0335ab1461003957806347153f8214610076578063bf5d3bdb146100a7575b600080fd5b34801561004557600080fd5b50610060600480360381019061005b9190610a80565b6100e4565b60405161006d9190610ac6565b60405180910390f35b610090600480360381019061008b9190610b6a565b61012c565b60405161009e929190610c9a565b60405180910390f35b3480156100b357600080fd5b506100ce60048036038101906100c99190610b6a565b6102d7565b6040516100db9190610cca565b60405180910390f35b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000606061013b8585856102d7565b61017a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017190610d68565b60405180910390fd5b6001856080013561018b9190610db7565b6000808760000160208101906101a19190610a80565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000808660200160208101906101f59190610a80565b73ffffffffffffffffffffffffffffffffffffffff1687606001358860400135898060a001906102259190610e1c565b8b60000160208101906102389190610a80565b60405160200161024a93929190610f06565b6040516020818303038152906040526040516102669190610f61565b600060405180830381858888f193505050503d80600081146102a4576040519150601f19603f3d011682016040523d82523d6000602084013e6102a9565b606091505b5091509150603f87606001356102bf9190610fa7565b5a116102c757fe5b8181935093505050935093915050565b6000806103e084848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506103d27fdd8f4b70b0f4393e889bd39128a30628a78b61816a9eb8199759e7a349657e488860000160208101906103599190610a80565b89602001602081019061036c9190610a80565b8a604001358b606001358c608001358d8060a0019061038b9190610e1c565b604051610399929190610fd8565b60405180910390206040516020016103b79796959493929190611019565b6040516020818303038152906040528051906020012061048c565b6104a690919063ffffffff16565b905084608001356000808760000160208101906103fd9190610a80565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414801561048257508460000160208101906104539190610a80565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b9150509392505050565b600061049f6104996104cd565b836105e7565b9050919050565b60008060006104b5858561061a565b915091506104c28161069d565b819250505092915050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614801561054957507f000000000000000000000000000000000000000000000000000000000000000046145b15610576577f000000000000000000000000000000000000000000000000000000000000000090506105e4565b6105e17f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610872565b90505b90565b600082826040516020016105fc929190611100565b60405160208183030381529060405280519060200120905092915050565b60008060418351141561065c5760008060006020860151925060408601519150606086015160001a9050610650878285856108ac565b94509450505050610696565b60408351141561068d5760008060208501519150604085015190506106828683836109b9565b935093505050610696565b60006002915091505b9250929050565b600060048111156106b1576106b0611137565b5b8160048111156106c4576106c3611137565b5b14156106cf5761086f565b600160048111156106e3576106e2611137565b5b8160048111156106f6576106f5611137565b5b1415610737576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072e906111b2565b60405180910390fd5b6002600481111561074b5761074a611137565b5b81600481111561075e5761075d611137565b5b141561079f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107969061121e565b60405180910390fd5b600360048111156107b3576107b2611137565b5b8160048111156107c6576107c5611137565b5b1415610807576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107fe906112b0565b60405180910390fd5b60048081111561081a57610819611137565b5b81600481111561082d5761082c611137565b5b141561086e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086590611342565b60405180910390fd5b5b50565b6000838383463060405160200161088d959493929190611362565b6040516020818303038152906040528051906020012090509392505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c11156108e75760006003915091506109b0565b601b8560ff16141580156108ff5750601c8560ff1614155b156109115760006004915091506109b0565b60006001878787876040516000815260200160405260405161093694939291906113d1565b6020604051602081039080840390855afa158015610958573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156109a7576000600192509250506109b0565b80600092509250505b94509492505050565b60008060007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60001b841690506000601b60ff8660001c901c6109fc9190610db7565b9050610a0a878288856108ac565b935093505050935093915050565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610a4d82610a22565b9050919050565b610a5d81610a42565b8114610a6857600080fd5b50565b600081359050610a7a81610a54565b92915050565b600060208284031215610a9657610a95610a18565b5b6000610aa484828501610a6b565b91505092915050565b6000819050919050565b610ac081610aad565b82525050565b6000602082019050610adb6000830184610ab7565b92915050565b600080fd5b600060c08284031215610afc57610afb610ae1565b5b81905092915050565b600080fd5b600080fd5b600080fd5b60008083601f840112610b2a57610b29610b05565b5b8235905067ffffffffffffffff811115610b4757610b46610b0a565b5b602083019150836001820283011115610b6357610b62610b0f565b5b9250929050565b600080600060408486031215610b8357610b82610a18565b5b600084013567ffffffffffffffff811115610ba157610ba0610a1d565b5b610bad86828701610ae6565b935050602084013567ffffffffffffffff811115610bce57610bcd610a1d565b5b610bda86828701610b14565b92509250509250925092565b60008115159050919050565b610bfb81610be6565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c3b578082015181840152602081019050610c20565b83811115610c4a576000848401525b50505050565b6000601f19601f8301169050919050565b6000610c6c82610c01565b610c768185610c0c565b9350610c86818560208601610c1d565b610c8f81610c50565b840191505092915050565b6000604082019050610caf6000830185610bf2565b8181036020830152610cc18184610c61565b90509392505050565b6000602082019050610cdf6000830184610bf2565b92915050565b600082825260208201905092915050565b7f4d696e696d616c466f727761726465723a207369676e617475726520646f657360008201527f206e6f74206d6174636820726571756573740000000000000000000000000000602082015250565b6000610d52603283610ce5565b9150610d5d82610cf6565b604082019050919050565b60006020820190508181036000830152610d8181610d45565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610dc282610aad565b9150610dcd83610aad565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e0257610e01610d88565b5b828201905092915050565b600080fd5b600080fd5b600080fd5b60008083356001602003843603038112610e3957610e38610e0d565b5b80840192508235915067ffffffffffffffff821115610e5b57610e5a610e12565b5b602083019250600182023603831315610e7757610e76610e17565b5b509250929050565b600081905092915050565b82818337600083830152505050565b6000610ea58385610e7f565b9350610eb2838584610e8a565b82840190509392505050565b60008160601b9050919050565b6000610ed682610ebe565b9050919050565b6000610ee882610ecb565b9050919050565b610f00610efb82610a42565b610edd565b82525050565b6000610f13828587610e99565b9150610f1f8284610eef565b601482019150819050949350505050565b6000610f3b82610c01565b610f458185610e7f565b9350610f55818560208601610c1d565b80840191505092915050565b6000610f6d8284610f30565b915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610fb282610aad565b9150610fbd83610aad565b925082610fcd57610fcc610f78565b5b828204905092915050565b6000610fe5828486610e99565b91508190509392505050565b6000819050919050565b61100481610ff1565b82525050565b61101381610a42565b82525050565b600060e08201905061102e600083018a610ffb565b61103b602083018961100a565b611048604083018861100a565b6110556060830187610ab7565b6110626080830186610ab7565b61106f60a0830185610ab7565b61107c60c0830184610ffb565b98975050505050505050565b600081905092915050565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b60006110c9600283611088565b91506110d482611093565b600282019050919050565b6000819050919050565b6110fa6110f582610ff1565b6110df565b82525050565b600061110b826110bc565b915061111782856110e9565b60208201915061112782846110e9565b6020820191508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b600061119c601883610ce5565b91506111a782611166565b602082019050919050565b600060208201905081810360008301526111cb8161118f565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000611208601f83610ce5565b9150611213826111d2565b602082019050919050565b60006020820190508181036000830152611237816111fb565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b600061129a602283610ce5565b91506112a58261123e565b604082019050919050565b600060208201905081810360008301526112c98161128d565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202776272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b600061132c602283610ce5565b9150611337826112d0565b604082019050919050565b6000602082019050818103600083015261135b8161131f565b9050919050565b600060a0820190506113776000830188610ffb565b6113846020830187610ffb565b6113916040830186610ffb565b61139e6060830185610ab7565b6113ab608083018461100a565b9695505050505050565b600060ff82169050919050565b6113cb816113b5565b82525050565b60006080820190506113e66000830187610ffb565b6113f360208301866113c2565b6114006040830185610ffb565b61140d6060830184610ffb565b9594505050505056fea26469706673582212200d3ded9457c74f74feb5ebea1586df0e3aea7f85338556725338ef6acb0de40064736f6c63430008090033";
    static readonly abi: ({
        inputs: any[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): MinimalForwarderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MinimalForwarder;
}
export {};

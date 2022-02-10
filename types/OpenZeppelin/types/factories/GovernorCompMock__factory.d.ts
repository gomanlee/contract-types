import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GovernorCompMock, GovernorCompMockInterface } from "../GovernorCompMock";
declare type GovernorCompMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GovernorCompMock__factory extends ContractFactory {
    constructor(...args: GovernorCompMockConstructorParams);
    deploy(name_: string, token_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<GovernorCompMock>;
    getDeployTransaction(name_: string, token_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): GovernorCompMock;
    connect(signer: Signer): GovernorCompMock__factory;
    static readonly contractName: "GovernorCompMock";
    readonly contractName: "GovernorCompMock";
    static readonly bytecode = "0x6101606040523480156200001257600080fd5b506040516200472438038062004724833981810160405281019062000038919062000494565b8082806200004b6200015560201b60201c565b60008280519060200120905060008280519060200120905060007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f90508260e081815250508161010081815250504660a08181525050620000b48184846200019260201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff16815250508061012081815250505050505050806000908051906020019062000115929190620001ce565b50508073ffffffffffffffffffffffffffffffffffffffff166101408173ffffffffffffffffffffffffffffffffffffffff168152505050505062000603565b60606040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250905090565b60008383834630604051602001620001af95949392919062000541565b6040516020818303038152906040528051906020012090509392505050565b828054620001dc90620005cd565b90600052602060002090601f0160209004810192826200020057600085556200024c565b82601f106200021b57805160ff19168380011785556200024c565b828001600101855582156200024c579182015b828111156200024b5782518255916020019190600101906200022e565b5b5090506200025b91906200025f565b5090565b5b808211156200027a57600081600090555060010162000260565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620002e7826200029c565b810181811067ffffffffffffffff82111715620003095762000308620002ad565b5b80604052505050565b60006200031e6200027e565b90506200032c8282620002dc565b919050565b600067ffffffffffffffff8211156200034f576200034e620002ad565b5b6200035a826200029c565b9050602081019050919050565b60005b83811015620003875780820151818401526020810190506200036a565b8381111562000397576000848401525b50505050565b6000620003b4620003ae8462000331565b62000312565b905082815260208101848484011115620003d357620003d262000297565b5b620003e084828562000367565b509392505050565b600082601f8301126200040057620003ff62000292565b5b8151620004128482602086016200039d565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000448826200041b565b9050919050565b60006200045c826200043b565b9050919050565b6200046e816200044f565b81146200047a57600080fd5b50565b6000815190506200048e8162000463565b92915050565b60008060408385031215620004ae57620004ad62000288565b5b600083015167ffffffffffffffff811115620004cf57620004ce6200028d565b5b620004dd85828601620003e8565b9250506020620004f0858286016200047d565b9150509250929050565b6000819050919050565b6200050f81620004fa565b82525050565b6000819050919050565b6200052a8162000515565b82525050565b6200053b816200043b565b82525050565b600060a08201905062000558600083018862000504565b62000567602083018762000504565b62000576604083018662000504565b6200058560608301856200051f565b62000594608083018462000530565b9695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620005e657607f821691505b60208210811415620005fd57620005fc6200059e565b5b50919050565b60805160a05160c05160e0516101005161012051610140516140bf62000665600039600081816111990152611781015260006119550152600061199701526000611976015260006118ab015260006119010152600061192a01526140bf6000f3fe60806040526004361061014f5760003560e01c806356781388116100b6578063c59057e41161006f578063c59057e41461056b578063dd4e2ba5146105a8578063deaaa7cc146105d3578063eb9019d4146105fe578063f8ce560a1461063b578063fc0c546a1461067857610195565b806356781388146104235780637b3c71d3146104605780637d5e81e21461049d578063b58131b0146104da578063c01f9e3714610505578063c28bc2fa1461054257610195565b80633bccf4fd116101085780633bccf4fd146102c55780633e4f49e614610302578063438596321461033f578063452115d61461037c578063544ffc9c146103b957806354fd4d50146103f857610195565b806301ffc9a71461019a57806302a251a3146101d757806306fdde03146102025780632656227d1461022d5780632d63f6931461025d5780633932abb11461029a57610195565b36610195573073ffffffffffffffffffffffffffffffffffffffff166101736106a3565b73ffffffffffffffffffffffffffffffffffffffff161461019357600080fd5b005b600080fd5b3480156101a657600080fd5b506101c160048036038101906101bc91906120b9565b6106ab565b6040516101ce9190612101565b60405180910390f35b3480156101e357600080fd5b506101ec610725565b6040516101f99190612135565b60405180910390f35b34801561020e57600080fd5b5061021761072e565b60405161022491906121e9565b60405180910390f35b6102476004803603810190610242919061266c565b6107c0565b6040516102549190612135565b60405180910390f35b34801561026957600080fd5b50610284600480360381019061027f9190612727565b6108f3565b6040516102919190612135565b60405180910390f35b3480156102a657600080fd5b506102af610961565b6040516102bc9190612135565b60405180910390f35b3480156102d157600080fd5b506102ec60048036038101906102e7919061278d565b61096a565b6040516102f99190612135565b60405180910390f35b34801561030e57600080fd5b5061032960048036038101906103249190612727565b6109f4565b604051610336919061287f565b60405180910390f35b34801561034b57600080fd5b506103666004803603810190610361919061289a565b610b09565b6040516103739190612101565b60405180910390f35b34801561038857600080fd5b506103a3600480360381019061039e919061266c565b610b74565b6040516103b09190612135565b60405180910390f35b3480156103c557600080fd5b506103e060048036038101906103db9190612727565b610b8c565b6040516103ef939291906128da565b60405180910390f35b34801561040457600080fd5b5061040d610bc4565b60405161041a91906121e9565b60405180910390f35b34801561042f57600080fd5b5061044a60048036038101906104459190612911565b610c01565b6040516104579190612135565b60405180910390f35b34801561046c57600080fd5b50610487600480360381019061048291906129ac565b610c32565b6040516104949190612135565b60405180910390f35b3480156104a957600080fd5b506104c460048036038101906104bf9190612ac1565b610c9a565b6040516104d19190612135565b60405180910390f35b3480156104e657600080fd5b506104ef610f9a565b6040516104fc9190612135565b60405180910390f35b34801561051157600080fd5b5061052c60048036038101906105279190612727565b610f9f565b6040516105399190612135565b60405180910390f35b34801561054e57600080fd5b5061056960048036038101906105649190612bee565b61100d565b005b34801561057757600080fd5b50610592600480360381019061058d919061266c565b6110df565b60405161059f9190612135565b60405180910390f35b3480156105b457600080fd5b506105bd61111b565b6040516105ca91906121e9565b60405180910390f35b3480156105df57600080fd5b506105e8611158565b6040516105f59190612c71565b60405180910390f35b34801561060a57600080fd5b5061062560048036038101906106209190612c8c565b61117c565b6040516106329190612135565b60405180910390f35b34801561064757600080fd5b50610662600480360381019061065d9190612727565b611190565b60405161066f9190612135565b60405180910390f35b34801561068457600080fd5b5061068d611197565b60405161069a9190612d2b565b60405180910390f35b600030905090565b60007fbf26d897000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061071e575061071d826111bb565b5b9050919050565b60006010905090565b60606000805461073d90612d75565b80601f016020809104026020016040519081016040528092919081815260200182805461076990612d75565b80156107b65780601f1061078b576101008083540402835291602001916107b6565b820191906000526020600020905b81548152906001019060200180831161079957829003601f168201915b5050505050905090565b6000806107cf868686866110df565b905060006107dc826109f4565b9050600460078111156107f2576107f1612808565b5b81600781111561080557610804612808565b5b14806108355750600560078111156108205761081f612808565b5b81600781111561083357610832612808565b5b145b610874576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086b90612e19565b60405180910390fd5b600180600084815260200190815260200160002060020160006101000a81548160ff0219169083151502179055507f712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f826040516108d19190612135565b60405180910390a16108e68288888888611225565b8192505050949350505050565b6000610950600160008481526020019081526020016000206000016040518060200160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681525050611334565b67ffffffffffffffff169050919050565b60006004905090565b6000806109cb6109c37f150214d74d59b7d1e90c73fc22ef3d991dd0a76b046543d4d80ab92d2a50328f89896040516020016109a893929190612e48565b60405160208183030381529060405280519060200120611342565b86868661135c565b90506109e887828860405180602001604052806000815250611387565b91505095945050505050565b6000806001600084815260200190815260200160002090508060020160009054906101000a900460ff1615610a2d576007915050610b04565b8060020160019054906101000a900460ff1615610a4e576002915050610b04565b6000610a59846108f3565b90506000811415610a9f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9690612ecb565b60405180910390fd5b438110610ab157600092505050610b04565b6000610abc85610f9f565b9050438110610ad15760019350505050610b04565b610ada856114db565b8015610aeb5750610aea85611522565b5b15610afc5760049350505050610b04565b600393505050505b919050565b60006002600084815260200190815260200160002060030160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000610b828585858561154d565b9050949350505050565b600080600080600260008681526020019081526020016000209050806000015481600101548260020154935093509350509193909250565b60606040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250905090565b600080610c0c6116a6565b9050610c2984828560405180602001604052806000815250611387565b91505092915050565b600080610c3d6116a6565b9050610c8f86828787878080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611387565b915050949350505050565b6000610ca4610f9a565b610cba33600143610cb59190612f1a565b61117c565b1015610cfb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf290612fe6565b60405180910390fd5b6000610d1086868686805190602001206110df565b90508451865114610d56576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4d90613078565b60405180910390fd5b8351865114610d9a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d9190613078565b60405180910390fd5b6000865111610dde576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dd5906130e4565b60405180910390fd5b6000600160008381526020019081526020016000209050610e3e816000016040518060200160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815250506116ae565b610e7d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e7490613176565b60405180910390fd5b6000610e8f610e8a610961565b6116c8565b610e98436116c8565b610ea291906131aa565b90506000610eb6610eb1610725565b6116c8565b82610ec191906131aa565b9050610ed9828460000161171f90919063ffffffff16565b610eef818460010161171f90919063ffffffff16565b7f7d84a6263ae0d98d3329bd7b46bb4e8d6f98cd35a7adb45c274c8b7fd5ebd5e084610f196116a6565b8b8b8d5167ffffffffffffffff811115610f3657610f35612210565b5b604051908082528060200260200182016040528015610f6957816020015b6060815260200190600190039081610f545790505b508c88888e604051610f83999897969594939291906135c7565b60405180910390a183945050505050949350505050565b600090565b6000610ffc600160008481526020019081526020016000206001016040518060200160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681525050611334565b67ffffffffffffffff169050919050565b6110156106a3565b73ffffffffffffffffffffffffffffffffffffffff166110336116a6565b73ffffffffffffffffffffffffffffffffffffffff1614611089576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611080906136c3565b60405180910390fd5b6110d88483838080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508561174e565b5050505050565b6000848484846040516020016110f894939291906136e3565b6040516020818303038152906040528051906020012060001c9050949350505050565b60606040518060400160405280602081526020017f737570706f72743d627261766f2671756f72756d3d666f722c6162737461696e815250905090565b7f150214d74d59b7d1e90c73fc22ef3d991dd0a76b046543d4d80ab92d2a50328f81565b6000611188838361177d565b905092915050565b6000919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600060405180606001604052806027815260200161403a60279139905060005b855181101561132b576000808783815181106112645761126361373d565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff168784815181106112955761129461373d565b5b60200260200101518785815181106112b0576112af61373d565b5b60200260200101516040516112c591906137a8565b60006040518083038185875af1925050503d8060008114611302576040519150601f19603f3d011682016040523d82523d6000602084013e611307565b606091505b5091509150611317828286611840565b50505080611324906137bf565b9050611245565b50505050505050565b600081600001519050919050565b600061135561134f6118a7565b836119c1565b9050919050565b600080600061136d878787876119f4565b9150915061137a81611b01565b8192505050949350505050565b600080600160008781526020019081526020016000209050600160078111156113b3576113b2612808565b5b6113bc876109f4565b60078111156113ce576113cd612808565b5b1461140e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114059061387a565b60405180910390fd5b600061146c8661145d846000016040518060200160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681525050611334565b67ffffffffffffffff1661117c565b905061147a87878784611cd6565b8573ffffffffffffffffffffffffffffffffffffffff167fb8e138887d0aa13bab447e82de9d5c1777041ecd21ca36ba824ff1e6c07ddda4888784886040516114c6949392919061389a565b60405180910390a28092505050949350505050565b6000806002600084815260200190815260200160002090508060020154816001015461150791906138e6565b611518611513856108f3565b611190565b1115915050919050565b6000806002600084815260200190815260200160002090508060000154816001015411915050919050565b60008061155c868686866110df565b90506000611569826109f4565b90506002600781111561157f5761157e612808565b5b81600781111561159257611591612808565b5b141580156115c55750600660078111156115af576115ae612808565b5b8160078111156115c2576115c1612808565b5b14155b80156115f557506007808111156115df576115de612808565b5b8160078111156115f2576115f1612808565b5b14155b611634576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161162b90613988565b60405180910390fd5b600180600084815260200190815260200160002060020160016101000a81548160ff0219169083151502179055507f789cf55be980739dad1d0699b93b58e806b51c9d96619bfa8fe0a28abaa7b30c826040516116919190612135565b60405180910390a18192505050949350505050565b600033905090565b600080826000015167ffffffffffffffff16149050919050565b600067ffffffffffffffff8016821115611717576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161170e90613a1a565b60405180910390fd5b819050919050565b808260000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055505050565b606061177484848460405180606001604052806029815260200161406160299139611edc565b90509392505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663782d6fe184846040518363ffffffff1660e01b81526004016117da929190613a3a565b60206040518083038186803b1580156117f257600080fd5b505afa158015611806573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061182a9190613aa7565b6bffffffffffffffffffffffff16905092915050565b60608315611850578290506118a0565b6000835111156118635782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161189791906121e9565b60405180910390fd5b9392505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614801561192357507f000000000000000000000000000000000000000000000000000000000000000046145b15611950577f000000000000000000000000000000000000000000000000000000000000000090506119be565b6119bb7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611ff0565b90505b90565b600082826040516020016119d6929190613b4c565b60405160208183030381529060405280519060200120905092915050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c1115611a2f576000600391509150611af8565b601b8560ff1614158015611a475750601c8560ff1614155b15611a59576000600491509150611af8565b600060018787878760405160008152602001604052604051611a7e9493929190613b83565b6020604051602081039080840390855afa158015611aa0573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611aef57600060019250925050611af8565b80600092509250505b94509492505050565b60006004811115611b1557611b14612808565b5b816004811115611b2857611b27612808565b5b1415611b3357611cd3565b60016004811115611b4757611b46612808565b5b816004811115611b5a57611b59612808565b5b1415611b9b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b9290613c14565b60405180910390fd5b60026004811115611baf57611bae612808565b5b816004811115611bc257611bc1612808565b5b1415611c03576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bfa90613c80565b60405180910390fd5b60036004811115611c1757611c16612808565b5b816004811115611c2a57611c29612808565b5b1415611c6b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c6290613d12565b60405180910390fd5b600480811115611c7e57611c7d612808565b5b816004811115611c9157611c90612808565b5b1415611cd2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cc990613da4565b60405180910390fd5b5b50565b60006002600086815260200190815260200160002090508060030160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615611d7c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d7390613e36565b60405180910390fd5b60018160030160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060006002811115611dea57611de9612808565b5b60ff168360ff161415611e175781816000016000828254611e0b91906138e6565b92505081905550611ed5565b60016002811115611e2b57611e2a612808565b5b60ff168360ff161415611e585781816001016000828254611e4c91906138e6565b92505081905550611ed4565b600280811115611e6b57611e6a612808565b5b60ff168360ff161415611e985781816002016000828254611e8c91906138e6565b92505081905550611ed3565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611eca90613ec8565b60405180910390fd5b5b5b5050505050565b606082471015611f21576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f1890613f5a565b60405180910390fd5b611f2a8561202a565b611f69576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f6090613fc6565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611f9291906137a8565b60006040518083038185875af1925050503d8060008114611fcf576040519150601f19603f3d011682016040523d82523d6000602084013e611fd4565b606091505b5091509150611fe4828286611840565b92505050949350505050565b6000838383463060405160200161200b959493929190613fe6565b6040516020818303038152906040528051906020012090509392505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61209681612061565b81146120a157600080fd5b50565b6000813590506120b38161208d565b92915050565b6000602082840312156120cf576120ce612057565b5b60006120dd848285016120a4565b91505092915050565b60008115159050919050565b6120fb816120e6565b82525050565b600060208201905061211660008301846120f2565b92915050565b6000819050919050565b61212f8161211c565b82525050565b600060208201905061214a6000830184612126565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561218a57808201518184015260208101905061216f565b83811115612199576000848401525b50505050565b6000601f19601f8301169050919050565b60006121bb82612150565b6121c5818561215b565b93506121d581856020860161216c565b6121de8161219f565b840191505092915050565b6000602082019050818103600083015261220381846121b0565b905092915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6122488261219f565b810181811067ffffffffffffffff8211171561226757612266612210565b5b80604052505050565b600061227a61204d565b9050612286828261223f565b919050565b600067ffffffffffffffff8211156122a6576122a5612210565b5b602082029050602081019050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006122e7826122bc565b9050919050565b6122f7816122dc565b811461230257600080fd5b50565b600081359050612314816122ee565b92915050565b600061232d6123288461228b565b612270565b905080838252602082019050602084028301858111156123505761234f6122b7565b5b835b8181101561237957806123658882612305565b845260208401935050602081019050612352565b5050509392505050565b600082601f8301126123985761239761220b565b5b81356123a884826020860161231a565b91505092915050565b600067ffffffffffffffff8211156123cc576123cb612210565b5b602082029050602081019050919050565b6123e68161211c565b81146123f157600080fd5b50565b600081359050612403816123dd565b92915050565b600061241c612417846123b1565b612270565b9050808382526020820190506020840283018581111561243f5761243e6122b7565b5b835b81811015612468578061245488826123f4565b845260208401935050602081019050612441565b5050509392505050565b600082601f8301126124875761248661220b565b5b8135612497848260208601612409565b91505092915050565b600067ffffffffffffffff8211156124bb576124ba612210565b5b602082029050602081019050919050565b600080fd5b600067ffffffffffffffff8211156124ec576124eb612210565b5b6124f58261219f565b9050602081019050919050565b82818337600083830152505050565b600061252461251f846124d1565b612270565b9050828152602081018484840111156125405761253f6124cc565b5b61254b848285612502565b509392505050565b600082601f8301126125685761256761220b565b5b8135612578848260208601612511565b91505092915050565b600061259461258f846124a0565b612270565b905080838252602082019050602084028301858111156125b7576125b66122b7565b5b835b818110156125fe57803567ffffffffffffffff8111156125dc576125db61220b565b5b8086016125e98982612553565b855260208501945050506020810190506125b9565b5050509392505050565b600082601f83011261261d5761261c61220b565b5b813561262d848260208601612581565b91505092915050565b6000819050919050565b61264981612636565b811461265457600080fd5b50565b60008135905061266681612640565b92915050565b6000806000806080858703121561268657612685612057565b5b600085013567ffffffffffffffff8111156126a4576126a361205c565b5b6126b087828801612383565b945050602085013567ffffffffffffffff8111156126d1576126d061205c565b5b6126dd87828801612472565b935050604085013567ffffffffffffffff8111156126fe576126fd61205c565b5b61270a87828801612608565b925050606061271b87828801612657565b91505092959194509250565b60006020828403121561273d5761273c612057565b5b600061274b848285016123f4565b91505092915050565b600060ff82169050919050565b61276a81612754565b811461277557600080fd5b50565b60008135905061278781612761565b92915050565b600080600080600060a086880312156127a9576127a8612057565b5b60006127b7888289016123f4565b95505060206127c888828901612778565b94505060406127d988828901612778565b93505060606127ea88828901612657565b92505060806127fb88828901612657565b9150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6008811061284857612847612808565b5b50565b600081905061285982612837565b919050565b60006128698261284b565b9050919050565b6128798161285e565b82525050565b60006020820190506128946000830184612870565b92915050565b600080604083850312156128b1576128b0612057565b5b60006128bf858286016123f4565b92505060206128d085828601612305565b9150509250929050565b60006060820190506128ef6000830186612126565b6128fc6020830185612126565b6129096040830184612126565b949350505050565b6000806040838503121561292857612927612057565b5b6000612936858286016123f4565b925050602061294785828601612778565b9150509250929050565b600080fd5b60008083601f84011261296c5761296b61220b565b5b8235905067ffffffffffffffff81111561298957612988612951565b5b6020830191508360018202830111156129a5576129a46122b7565b5b9250929050565b600080600080606085870312156129c6576129c5612057565b5b60006129d4878288016123f4565b94505060206129e587828801612778565b935050604085013567ffffffffffffffff811115612a0657612a0561205c565b5b612a1287828801612956565b925092505092959194509250565b600067ffffffffffffffff821115612a3b57612a3a612210565b5b612a448261219f565b9050602081019050919050565b6000612a64612a5f84612a20565b612270565b905082815260208101848484011115612a8057612a7f6124cc565b5b612a8b848285612502565b509392505050565b600082601f830112612aa857612aa761220b565b5b8135612ab8848260208601612a51565b91505092915050565b60008060008060808587031215612adb57612ada612057565b5b600085013567ffffffffffffffff811115612af957612af861205c565b5b612b0587828801612383565b945050602085013567ffffffffffffffff811115612b2657612b2561205c565b5b612b3287828801612472565b935050604085013567ffffffffffffffff811115612b5357612b5261205c565b5b612b5f87828801612608565b925050606085013567ffffffffffffffff811115612b8057612b7f61205c565b5b612b8c87828801612a93565b91505092959194509250565b60008083601f840112612bae57612bad61220b565b5b8235905067ffffffffffffffff811115612bcb57612bca612951565b5b602083019150836001820283011115612be757612be66122b7565b5b9250929050565b60008060008060608587031215612c0857612c07612057565b5b6000612c1687828801612305565b9450506020612c27878288016123f4565b935050604085013567ffffffffffffffff811115612c4857612c4761205c565b5b612c5487828801612b98565b925092505092959194509250565b612c6b81612636565b82525050565b6000602082019050612c866000830184612c62565b92915050565b60008060408385031215612ca357612ca2612057565b5b6000612cb185828601612305565b9250506020612cc2858286016123f4565b9150509250929050565b6000819050919050565b6000612cf1612cec612ce7846122bc565b612ccc565b6122bc565b9050919050565b6000612d0382612cd6565b9050919050565b6000612d1582612cf8565b9050919050565b612d2581612d0a565b82525050565b6000602082019050612d406000830184612d1c565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680612d8d57607f821691505b60208210811415612da157612da0612d46565b5b50919050565b7f476f7665726e6f723a2070726f706f73616c206e6f742073756363657373667560008201527f6c00000000000000000000000000000000000000000000000000000000000000602082015250565b6000612e0360218361215b565b9150612e0e82612da7565b604082019050919050565b60006020820190508181036000830152612e3281612df6565b9050919050565b612e4281612754565b82525050565b6000606082019050612e5d6000830186612c62565b612e6a6020830185612126565b612e776040830184612e39565b949350505050565b7f476f7665726e6f723a20756e6b6e6f776e2070726f706f73616c206964000000600082015250565b6000612eb5601d8361215b565b9150612ec082612e7f565b602082019050919050565b60006020820190508181036000830152612ee481612ea8565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612f258261211c565b9150612f308361211c565b925082821015612f4357612f42612eeb565b5b828203905092915050565b7f476f7665726e6f72436f6d7061746962696c697479427261766f3a2070726f7060008201527f6f73657220766f7465732062656c6f772070726f706f73616c2074687265736860208201527f6f6c640000000000000000000000000000000000000000000000000000000000604082015250565b6000612fd060438361215b565b9150612fdb82612f4e565b606082019050919050565b60006020820190508181036000830152612fff81612fc3565b9050919050565b7f476f7665726e6f723a20696e76616c69642070726f706f73616c206c656e677460008201527f6800000000000000000000000000000000000000000000000000000000000000602082015250565b600061306260218361215b565b915061306d82613006565b604082019050919050565b6000602082019050818103600083015261309181613055565b9050919050565b7f476f7665726e6f723a20656d7074792070726f706f73616c0000000000000000600082015250565b60006130ce60188361215b565b91506130d982613098565b602082019050919050565b600060208201905081810360008301526130fd816130c1565b9050919050565b7f476f7665726e6f723a2070726f706f73616c20616c726561647920657869737460008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b600061316060218361215b565b915061316b82613104565b604082019050919050565b6000602082019050818103600083015261318f81613153565b9050919050565b600067ffffffffffffffff82169050919050565b60006131b582613196565b91506131c083613196565b92508267ffffffffffffffff038211156131dd576131dc612eeb565b5b828201905092915050565b6131f1816122dc565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61322c816122dc565b82525050565b600061323e8383613223565b60208301905092915050565b6000602082019050919050565b6000613262826131f7565b61326c8185613202565b935061327783613213565b8060005b838110156132a857815161328f8882613232565b975061329a8361324a565b92505060018101905061327b565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6132ea8161211c565b82525050565b60006132fc83836132e1565b60208301905092915050565b6000602082019050919050565b6000613320826132b5565b61332a81856132c0565b9350613335836132d1565b8060005b8381101561336657815161334d88826132f0565b975061335883613308565b925050600181019050613339565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b60006133bb82612150565b6133c5818561339f565b93506133d581856020860161216c565b6133de8161219f565b840191505092915050565b60006133f583836133b0565b905092915050565b6000602082019050919050565b600061341582613373565b61341f818561337e565b9350836020820285016134318561338f565b8060005b8581101561346d578484038952815161344e85826133e9565b9450613459836133fd565b925060208a01995050600181019050613435565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60006134d2826134ab565b6134dc81856134b6565b93506134ec81856020860161216c565b6134f58161219f565b840191505092915050565b600061350c83836134c7565b905092915050565b6000602082019050919050565b600061352c8261347f565b613536818561348a565b9350836020820285016135488561349b565b8060005b8581101561358457848403895281516135658582613500565b945061357083613514565b925060208a0199505060018101905061354c565b50829750879550505050505092915050565b60006135b16135ac6135a784613196565b612ccc565b61211c565b9050919050565b6135c181613596565b82525050565b6000610120820190506135dd600083018c612126565b6135ea602083018b6131e8565b81810360408301526135fc818a613257565b905081810360608301526136108189613315565b90508181036080830152613624818861340a565b905081810360a08301526136388187613521565b905061364760c08301866135b8565b61365460e08301856135b8565b81810361010083015261366781846121b0565b90509a9950505050505050505050565b7f476f7665726e6f723a206f6e6c79476f7665726e616e63650000000000000000600082015250565b60006136ad60188361215b565b91506136b882613677565b602082019050919050565b600060208201905081810360008301526136dc816136a0565b9050919050565b600060808201905081810360008301526136fd8187613257565b905081810360208301526137118186613315565b905081810360408301526137258185613521565b90506137346060830184612c62565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081905092915050565b6000613782826134ab565b61378c818561376c565b935061379c81856020860161216c565b80840191505092915050565b60006137b48284613777565b915081905092915050565b60006137ca8261211c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156137fd576137fc612eeb565b5b600182019050919050565b7f476f7665726e6f723a20766f7465206e6f742063757272656e746c792061637460008201527f6976650000000000000000000000000000000000000000000000000000000000602082015250565b600061386460238361215b565b915061386f82613808565b604082019050919050565b6000602082019050818103600083015261389381613857565b9050919050565b60006080820190506138af6000830187612126565b6138bc6020830186612e39565b6138c96040830185612126565b81810360608301526138db81846121b0565b905095945050505050565b60006138f18261211c565b91506138fc8361211c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561393157613930612eeb565b5b828201905092915050565b7f476f7665726e6f723a2070726f706f73616c206e6f7420616374697665000000600082015250565b6000613972601d8361215b565b915061397d8261393c565b602082019050919050565b600060208201905081810360008301526139a181613965565b9050919050565b7f53616665436173743a2076616c756520646f65736e27742066697420696e203660008201527f3420626974730000000000000000000000000000000000000000000000000000602082015250565b6000613a0460268361215b565b9150613a0f826139a8565b604082019050919050565b60006020820190508181036000830152613a33816139f7565b9050919050565b6000604082019050613a4f60008301856131e8565b613a5c6020830184612126565b9392505050565b60006bffffffffffffffffffffffff82169050919050565b613a8481613a63565b8114613a8f57600080fd5b50565b600081519050613aa181613a7b565b92915050565b600060208284031215613abd57613abc612057565b5b6000613acb84828501613a92565b91505092915050565b600081905092915050565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b6000613b15600283613ad4565b9150613b2082613adf565b600282019050919050565b6000819050919050565b613b46613b4182612636565b613b2b565b82525050565b6000613b5782613b08565b9150613b638285613b35565b602082019150613b738284613b35565b6020820191508190509392505050565b6000608082019050613b986000830187612c62565b613ba56020830186612e39565b613bb26040830185612c62565b613bbf6060830184612c62565b95945050505050565b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b6000613bfe60188361215b565b9150613c0982613bc8565b602082019050919050565b60006020820190508181036000830152613c2d81613bf1565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000613c6a601f8361215b565b9150613c7582613c34565b602082019050919050565b60006020820190508181036000830152613c9981613c5d565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000613cfc60228361215b565b9150613d0782613ca0565b604082019050919050565b60006020820190508181036000830152613d2b81613cef565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202776272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000613d8e60228361215b565b9150613d9982613d32565b604082019050919050565b60006020820190508181036000830152613dbd81613d81565b9050919050565b7f476f7665726e6f72566f74696e6753696d706c653a20766f746520616c72656160008201527f6479206361737400000000000000000000000000000000000000000000000000602082015250565b6000613e2060278361215b565b9150613e2b82613dc4565b604082019050919050565b60006020820190508181036000830152613e4f81613e13565b9050919050565b7f476f7665726e6f72566f74696e6753696d706c653a20696e76616c696420766160008201527f6c756520666f7220656e756d20566f7465547970650000000000000000000000602082015250565b6000613eb260358361215b565b9150613ebd82613e56565b604082019050919050565b60006020820190508181036000830152613ee181613ea5565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b6000613f4460268361215b565b9150613f4f82613ee8565b604082019050919050565b60006020820190508181036000830152613f7381613f37565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000613fb0601d8361215b565b9150613fbb82613f7a565b602082019050919050565b60006020820190508181036000830152613fdf81613fa3565b9050919050565b600060a082019050613ffb6000830188612c62565b6140086020830187612c62565b6140156040830186612c62565b6140226060830185612126565b61402f60808301846131e8565b969550505050505056fe476f7665726e6f723a2063616c6c20726576657274656420776974686f7574206d657373616765416464726573733a206c6f772d6c6576656c2063616c6c20776974682076616c7565206661696c6564a26469706673582212209dd4f7dffe61bb08059363186091417048254500331b901d66abafe8eaa5169764736f6c63430008090033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
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
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[];
    static createInterface(): GovernorCompMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GovernorCompMock;
}
export {};
import { Signer, ContractFactory, Overrides, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC777Mock, ERC777MockInterface } from "../ERC777Mock";
declare type ERC777MockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC777Mock__factory extends ContractFactory {
    constructor(...args: ERC777MockConstructorParams);
    deploy(initialHolder: string, initialBalance: BigNumberish, name: string, symbol: string, defaultOperators: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC777Mock>;
    getDeployTransaction(initialHolder: string, initialBalance: BigNumberish, name: string, symbol: string, defaultOperators: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC777Mock;
    connect(signer: Signer): ERC777Mock__factory;
    static readonly contractName: "ERC777Mock";
    readonly contractName: "ERC777Mock";
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040516200401b3803806200401b833981810160405281019062000037919062000b7b565b82828282600290805190602001906200005292919062000724565b5081600390805190602001906200006b92919062000724565b50806004908051906020019062000084929190620007b5565b5060005b81518110156200011d57600160056000848481518110620000ae57620000ad62000c60565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508080620001149062000cbe565b91505062000088565b50731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff166329965a1d307fac7fbab5f54a3ca8194167523c6753bfeb96a445279294b6125b68cce2177054306040518463ffffffff1660e01b8152600401620001919392919062000d38565b600060405180830381600087803b158015620001ac57600080fd5b505af1158015620001c1573d6000803e3d6000fd5b50505050731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff166329965a1d307faea199e31a596269b42cdafd93407f14436db6e4cad65417994c2eb37381e05a306040518463ffffffff1660e01b8152600401620002389392919062000d38565b600060405180830381600087803b1580156200025357600080fd5b505af115801562000268573d6000803e3d6000fd5b50505050505050620002a185856040518060200160405280600081525060405180602001604052806000815250620002ac60201b60201c565b505050505062001128565b620002c2848484846001620002c860201b60201c565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614156200033b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003329062000dd6565b60405180910390fd5b60006200034d620004c960201b60201c565b9050620003648160008888620004d160201b60201c565b846001600082825462000378919062000df8565b92505081905550846000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620003cf919062000df8565b92505081905550620003ee81600088888888886200050360201b60201c565b8573ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d878787604051620004519392919062000ec3565b60405180910390a38573ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef87604051620004b9919062000f0e565b60405180910390a3505050505050565b600033905090565b7f52316ab8e8b0687ce803e403dfe429541bccd4f6c4683ec65d254d382f15a26560405160405180910390a150505050565b6000731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff1663aabbb8ca877fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b6040518363ffffffff1660e01b81526004016200057692919062000f2b565b60206040518083038186803b1580156200058f57600080fd5b505afa158015620005a4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620005ca919062000f58565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146200067f578073ffffffffffffffffffffffffffffffffffffffff166223de298989898989896040518763ffffffff1660e01b8152600401620006459695949392919062000f8a565b600060405180830381600087803b1580156200066057600080fd5b505af115801562000675573d6000803e3d6000fd5b50505050620006f7565b8115620006f657620006b28673ffffffffffffffffffffffffffffffffffffffff166200070160201b62000f1e1760201c565b15620006f5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620006ec90620010a1565b60405180910390fd5b5b5b5050505050505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b8280546200073290620010f2565b90600052602060002090601f016020900481019282620007565760008555620007a2565b82601f106200077157805160ff1916838001178555620007a2565b82800160010185558215620007a2579182015b82811115620007a157825182559160200191906001019062000784565b5b509050620007b1919062000844565b5090565b82805482825590600052602060002090810192821562000831579160200282015b82811115620008305782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190620007d6565b5b50905062000840919062000844565b5090565b5b808211156200085f57600081600090555060010162000845565b5090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620008a48262000877565b9050919050565b620008b68162000897565b8114620008c257600080fd5b50565b600081519050620008d681620008ab565b92915050565b6000819050919050565b620008f181620008dc565b8114620008fd57600080fd5b50565b6000815190506200091181620008e6565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200096c8262000921565b810181811067ffffffffffffffff821117156200098e576200098d62000932565b5b80604052505050565b6000620009a362000863565b9050620009b1828262000961565b919050565b600067ffffffffffffffff821115620009d457620009d362000932565b5b620009df8262000921565b9050602081019050919050565b60005b8381101562000a0c578082015181840152602081019050620009ef565b8381111562000a1c576000848401525b50505050565b600062000a3962000a3384620009b6565b62000997565b90508281526020810184848401111562000a585762000a576200091c565b5b62000a65848285620009ec565b509392505050565b600082601f83011262000a855762000a8462000917565b5b815162000a9784826020860162000a22565b91505092915050565b600067ffffffffffffffff82111562000abe5762000abd62000932565b5b602082029050602081019050919050565b600080fd5b600062000aeb62000ae58462000aa0565b62000997565b9050808382526020820190506020840283018581111562000b115762000b1062000acf565b5b835b8181101562000b3e578062000b298882620008c5565b84526020840193505060208101905062000b13565b5050509392505050565b600082601f83011262000b605762000b5f62000917565b5b815162000b7284826020860162000ad4565b91505092915050565b600080600080600060a0868803121562000b9a5762000b996200086d565b5b600062000baa88828901620008c5565b955050602062000bbd8882890162000900565b945050604086015167ffffffffffffffff81111562000be15762000be062000872565b5b62000bef8882890162000a6d565b935050606086015167ffffffffffffffff81111562000c135762000c1262000872565b5b62000c218882890162000a6d565b925050608086015167ffffffffffffffff81111562000c455762000c4462000872565b5b62000c538882890162000b48565b9150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600062000ccb82620008dc565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141562000d015762000d0062000c8f565b5b600182019050919050565b62000d178162000897565b82525050565b6000819050919050565b62000d328162000d1d565b82525050565b600060608201905062000d4f600083018662000d0c565b62000d5e602083018562000d27565b62000d6d604083018462000d0c565b949350505050565b600082825260208201905092915050565b7f4552433737373a206d696e7420746f20746865207a65726f2061646472657373600082015250565b600062000dbe60208362000d75565b915062000dcb8262000d86565b602082019050919050565b6000602082019050818103600083015262000df18162000daf565b9050919050565b600062000e0582620008dc565b915062000e1283620008dc565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000e4a5762000e4962000c8f565b5b828201905092915050565b62000e6081620008dc565b82525050565b600081519050919050565b600082825260208201905092915050565b600062000e8f8262000e66565b62000e9b818562000e71565b935062000ead818560208601620009ec565b62000eb88162000921565b840191505092915050565b600060608201905062000eda600083018662000e55565b818103602083015262000eee818562000e82565b9050818103604083015262000f04818462000e82565b9050949350505050565b600060208201905062000f25600083018462000e55565b92915050565b600060408201905062000f42600083018562000d0c565b62000f51602083018462000d27565b9392505050565b60006020828403121562000f715762000f706200086d565b5b600062000f8184828501620008c5565b91505092915050565b600060c08201905062000fa1600083018962000d0c565b62000fb0602083018862000d0c565b62000fbf604083018762000d0c565b62000fce606083018662000e55565b818103608083015262000fe2818562000e82565b905081810360a083015262000ff8818462000e82565b9050979650505050505050565b7f4552433737373a20746f6b656e20726563697069656e7420636f6e747261637460008201527f20686173206e6f20696d706c656d656e74657220666f7220455243373737546f60208201527f6b656e73526563697069656e7400000000000000000000000000000000000000604082015250565b600062001089604d8362000d75565b9150620010968262001005565b606082019050919050565b60006020820190508181036000830152620010bc816200107a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200110b57607f821691505b60208210811415620011225762001121620010c3565b5b50919050565b612ee380620011386000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c8063959b8c3f116100b8578063cfbfab0b1161007c578063cfbfab0b1461033c578063d95b637114610358578063dd62ed3e14610388578063fad8b32a146103b8578063fc673c4f146103d4578063fe9d9303146103f057610137565b8063959b8c3f1461029a57806395d89b41146102b65780639bd9bbc6146102d4578063a9059cbb146102f0578063b1f0b5be1461032057610137565b8063313ce567116100ff578063313ce567146101f6578063556f0dc71461021457806356189cb41461023257806362ad1b831461024e57806370a082311461026a57610137565b806306e485381461013c57806306fdde031461015a578063095ea7b31461017857806318160ddd146101a857806323b872dd146101c6575b600080fd5b61014461040c565b6040516101519190611d98565b60405180910390f35b61016261049a565b60405161016f9190611e53565b60405180910390f35b610192600480360381019061018d9190611eeb565b61052c565b60405161019f9190611f46565b60405180910390f35b6101b061054f565b6040516101bd9190611f70565b60405180910390f35b6101e060048036038101906101db9190611f8b565b610559565b6040516101ed9190611f46565b60405180910390f35b6101fe6105aa565b60405161020b9190611ffa565b60405180910390f35b61021c6105b3565b6040516102299190611f70565b60405180910390f35b61024c60048036038101906102479190611f8b565b6105bc565b005b6102686004803603810190610263919061214a565b6105cc565b005b610284600480360381019061027f91906121fd565b610632565b6040516102919190611f70565b60405180910390f35b6102b460048036038101906102af91906121fd565b61067a565b005b6102be6108db565b6040516102cb9190611e53565b60405180910390f35b6102ee60048036038101906102e9919061222a565b61096d565b005b61030a60048036038101906103059190611eeb565b610997565b6040516103179190611f46565b60405180910390f35b61033a60048036038101906103359190612299565b6109d7565b005b61035660048036038101906103519190612364565b6109e9565b005b610372600480360381019061036d9190612417565b6109fd565b60405161037f9190611f46565b60405180910390f35b6103a2600480360381019061039d9190612417565b610bae565b6040516103af9190611f70565b60405180910390f35b6103d260048036038101906103cd91906121fd565b610c35565b005b6103ee60048036038101906103e99190612299565b610e96565b005b61040a60048036038101906104059190612457565b610ef8565b005b6060600480548060200260200160405190810160405280929190818152602001828054801561049057602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610446575b5050505050905090565b6060600280546104a9906124e2565b80601f01602080910402602001604051908101604052809291908181526020018280546104d5906124e2565b80156105225780601f106104f757610100808354040283529160200191610522565b820191906000526020600020905b81548152906001019060200180831161050557829003601f168201915b5050505050905090565b600080610537610f41565b9050610544818585610f49565b600191505092915050565b6000600154905090565b600080610564610f41565b9050610571858285611114565b61059e858585604051806020016040528060008152506040518060200160405280600081525060006111a0565b60019150509392505050565b60006012905090565b60006001905090565b6105c7838383610f49565b505050565b6105dd6105d7610f41565b866109fd565b61061c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061390612586565b60405180910390fd5b61062b858585858560016111a0565b5050505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b8073ffffffffffffffffffffffffffffffffffffffff16610699610f41565b73ffffffffffffffffffffffffffffffffffffffff1614156106f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e790612618565b60405180910390fd5b600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156107da576007600061074e610f41565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055610877565b6001600660006107e8610f41565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b61087f610f41565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167ff4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f960405160405180910390a350565b6060600380546108ea906124e2565b80601f0160208091040260200160405190810160405280929190818152602001828054610916906124e2565b80156109635780601f1061093857610100808354040283529160200191610963565b820191906000526020600020905b81548152906001019060200180831161094657829003601f168201915b5050505050905090565b610992610978610f41565b8484846040518060200160405280600081525060016111a0565b505050565b60006109cd6109a4610f41565b8484604051806020016040528060008152506040518060200160405280600081525060006111a0565b6001905092915050565b6109e3848484846112c0565b50505050565b6109f685858585856112d4565b5050505050565b60008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161480610b155750600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff168015610b145750600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b5b80610ba65750600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b905092915050565b6000600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610c3d610f41565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610cab576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ca2906126aa565b60405180910390fd5b600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610d9e57600160076000610d0b610f41565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610e32565b60066000610daa610f41565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff02191690555b610e3a610f41565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa160405160405180910390a350565b610ea7610ea1610f41565b856109fd565b610ee6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610edd90612586565b60405180910390fd5b610ef2848484846114b2565b50505050565b610f1a610f03610f41565b8383604051806020016040528060008152506114b2565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610fb9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fb09061273c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611029576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611020906127ce565b60405180910390fd5b80600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516111079190611f70565b60405180910390a3505050565b60006111208484610bae565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461119a578181101561118c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111839061283a565b60405180910390fd5b6111998484848403610f49565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161415611210576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611207906128cc565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161415611280576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112779061295e565b60405180910390fd5b600061128a610f41565b905061129a818888888888611705565b6112a881888888888861187b565b6112b781888888888888611a95565b50505050505050565b6112ce8484848460016112d4565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161415611344576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161133b906129ca565b60405180910390fd5b600061134e610f41565b905061135d8160008888611c76565b846001600082825461136f9190612a19565b92505081905550846000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546113c49190612a19565b925050819055506113db8160008888888888611a95565b8573ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d87878760405161143c93929190612ac4565b60405180910390a38573ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef876040516114a29190611f70565b60405180910390a3505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415611522576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161151990612b7b565b60405180910390fd5b600061152c610f41565b905061153d81866000878787611705565b61154a8186600087611c76565b60008060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050848110156115d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115c790612c0d565b60405180910390fd5b8481036000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555084600160008282546116279190612c2d565b925050819055508573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a409887878760405161168f93929190612ac4565b60405180910390a3600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef876040516116f59190611f70565b60405180910390a3505050505050565b6000731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff1663aabbb8ca877f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe8956040518363ffffffff1660e01b8152600401611776929190612c89565b60206040518083038186803b15801561178e57600080fd5b505afa1580156117a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117c69190612cc7565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611872578073ffffffffffffffffffffffffffffffffffffffff166375ab97828888888888886040518763ffffffff1660e01b815260040161183f96959493929190612cf4565b600060405180830381600087803b15801561185957600080fd5b505af115801561186d573d6000803e3d6000fd5b505050505b50505050505050565b61188786868686611c76565b60008060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508381101561190d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161190490612dd5565b60405180910390fd5b8381036000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550836000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546119a09190612a19565b925050819055508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff167f06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987878787604051611a1f93929190612ac4565b60405180910390a48473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef86604051611a849190611f70565b60405180910390a350505050505050565b6000731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff1663aabbb8ca877fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b6040518363ffffffff1660e01b8152600401611b06929190612c89565b60206040518083038186803b158015611b1e57600080fd5b505afa158015611b32573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b569190612cc7565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611c05578073ffffffffffffffffffffffffffffffffffffffff166223de298989898989896040518763ffffffff1660e01b8152600401611bce96959493929190612cf4565b600060405180830381600087803b158015611be857600080fd5b505af1158015611bfc573d6000803e3d6000fd5b50505050611c6c565b8115611c6b57611c2a8673ffffffffffffffffffffffffffffffffffffffff16610f1e565b15611c6a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c6190612e8d565b60405180910390fd5b5b5b5050505050505050565b7f52316ab8e8b0687ce803e403dfe429541bccd4f6c4683ec65d254d382f15a26560405160405180910390a150505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611cff82611cd4565b9050919050565b611d0f81611cf4565b82525050565b6000611d218383611d06565b60208301905092915050565b6000602082019050919050565b6000611d4582611ca8565b611d4f8185611cb3565b9350611d5a83611cc4565b8060005b83811015611d8b578151611d728882611d15565b9750611d7d83611d2d565b925050600181019050611d5e565b5085935050505092915050565b60006020820190508181036000830152611db28184611d3a565b905092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611df4578082015181840152602081019050611dd9565b83811115611e03576000848401525b50505050565b6000601f19601f8301169050919050565b6000611e2582611dba565b611e2f8185611dc5565b9350611e3f818560208601611dd6565b611e4881611e09565b840191505092915050565b60006020820190508181036000830152611e6d8184611e1a565b905092915050565b6000604051905090565b600080fd5b600080fd5b611e9281611cf4565b8114611e9d57600080fd5b50565b600081359050611eaf81611e89565b92915050565b6000819050919050565b611ec881611eb5565b8114611ed357600080fd5b50565b600081359050611ee581611ebf565b92915050565b60008060408385031215611f0257611f01611e7f565b5b6000611f1085828601611ea0565b9250506020611f2185828601611ed6565b9150509250929050565b60008115159050919050565b611f4081611f2b565b82525050565b6000602082019050611f5b6000830184611f37565b92915050565b611f6a81611eb5565b82525050565b6000602082019050611f856000830184611f61565b92915050565b600080600060608486031215611fa457611fa3611e7f565b5b6000611fb286828701611ea0565b9350506020611fc386828701611ea0565b9250506040611fd486828701611ed6565b9150509250925092565b600060ff82169050919050565b611ff481611fde565b82525050565b600060208201905061200f6000830184611feb565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61205782611e09565b810181811067ffffffffffffffff821117156120765761207561201f565b5b80604052505050565b6000612089611e75565b9050612095828261204e565b919050565b600067ffffffffffffffff8211156120b5576120b461201f565b5b6120be82611e09565b9050602081019050919050565b82818337600083830152505050565b60006120ed6120e88461209a565b61207f565b9050828152602081018484840111156121095761210861201a565b5b6121148482856120cb565b509392505050565b600082601f83011261213157612130612015565b5b81356121418482602086016120da565b91505092915050565b600080600080600060a0868803121561216657612165611e7f565b5b600061217488828901611ea0565b955050602061218588828901611ea0565b945050604061219688828901611ed6565b935050606086013567ffffffffffffffff8111156121b7576121b6611e84565b5b6121c38882890161211c565b925050608086013567ffffffffffffffff8111156121e4576121e3611e84565b5b6121f08882890161211c565b9150509295509295909350565b60006020828403121561221357612212611e7f565b5b600061222184828501611ea0565b91505092915050565b60008060006060848603121561224357612242611e7f565b5b600061225186828701611ea0565b935050602061226286828701611ed6565b925050604084013567ffffffffffffffff81111561228357612282611e84565b5b61228f8682870161211c565b9150509250925092565b600080600080608085870312156122b3576122b2611e7f565b5b60006122c187828801611ea0565b94505060206122d287828801611ed6565b935050604085013567ffffffffffffffff8111156122f3576122f2611e84565b5b6122ff8782880161211c565b925050606085013567ffffffffffffffff8111156123205761231f611e84565b5b61232c8782880161211c565b91505092959194509250565b61234181611f2b565b811461234c57600080fd5b50565b60008135905061235e81612338565b92915050565b600080600080600060a086880312156123805761237f611e7f565b5b600061238e88828901611ea0565b955050602061239f88828901611ed6565b945050604086013567ffffffffffffffff8111156123c0576123bf611e84565b5b6123cc8882890161211c565b935050606086013567ffffffffffffffff8111156123ed576123ec611e84565b5b6123f98882890161211c565b925050608061240a8882890161234f565b9150509295509295909350565b6000806040838503121561242e5761242d611e7f565b5b600061243c85828601611ea0565b925050602061244d85828601611ea0565b9150509250929050565b6000806040838503121561246e5761246d611e7f565b5b600061247c85828601611ed6565b925050602083013567ffffffffffffffff81111561249d5761249c611e84565b5b6124a98582860161211c565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806124fa57607f821691505b6020821081141561250e5761250d6124b3565b5b50919050565b7f4552433737373a2063616c6c6572206973206e6f7420616e206f70657261746f60008201527f7220666f7220686f6c6465720000000000000000000000000000000000000000602082015250565b6000612570602c83611dc5565b915061257b82612514565b604082019050919050565b6000602082019050818103600083015261259f81612563565b9050919050565b7f4552433737373a20617574686f72697a696e672073656c66206173206f70657260008201527f61746f7200000000000000000000000000000000000000000000000000000000602082015250565b6000612602602483611dc5565b915061260d826125a6565b604082019050919050565b60006020820190508181036000830152612631816125f5565b9050919050565b7f4552433737373a207265766f6b696e672073656c66206173206f70657261746f60008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000612694602183611dc5565b915061269f82612638565b604082019050919050565b600060208201905081810360008301526126c381612687565b9050919050565b7f4552433737373a20617070726f76652066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000612726602583611dc5565b9150612731826126ca565b604082019050919050565b6000602082019050818103600083015261275581612719565b9050919050565b7f4552433737373a20617070726f766520746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006127b8602383611dc5565b91506127c38261275c565b604082019050919050565b600060208201905081810360008301526127e7816127ab565b9050919050565b7f4552433737373a20696e73756666696369656e7420616c6c6f77616e63650000600082015250565b6000612824601e83611dc5565b915061282f826127ee565b602082019050919050565b6000602082019050818103600083015261285381612817565b9050919050565b7f4552433737373a207472616e736665722066726f6d20746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006128b6602683611dc5565b91506128c18261285a565b604082019050919050565b600060208201905081810360008301526128e5816128a9565b9050919050565b7f4552433737373a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612948602483611dc5565b9150612953826128ec565b604082019050919050565b600060208201905081810360008301526129778161293b565b9050919050565b7f4552433737373a206d696e7420746f20746865207a65726f2061646472657373600082015250565b60006129b4602083611dc5565b91506129bf8261297e565b602082019050919050565b600060208201905081810360008301526129e3816129a7565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612a2482611eb5565b9150612a2f83611eb5565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612a6457612a636129ea565b5b828201905092915050565b600081519050919050565b600082825260208201905092915050565b6000612a9682612a6f565b612aa08185612a7a565b9350612ab0818560208601611dd6565b612ab981611e09565b840191505092915050565b6000606082019050612ad96000830186611f61565b8181036020830152612aeb8185612a8b565b90508181036040830152612aff8184612a8b565b9050949350505050565b7f4552433737373a206275726e2066726f6d20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000612b65602283611dc5565b9150612b7082612b09565b604082019050919050565b60006020820190508181036000830152612b9481612b58565b9050919050565b7f4552433737373a206275726e20616d6f756e7420657863656564732062616c6160008201527f6e63650000000000000000000000000000000000000000000000000000000000602082015250565b6000612bf7602383611dc5565b9150612c0282612b9b565b604082019050919050565b60006020820190508181036000830152612c2681612bea565b9050919050565b6000612c3882611eb5565b9150612c4383611eb5565b925082821015612c5657612c556129ea565b5b828203905092915050565b612c6a81611cf4565b82525050565b6000819050919050565b612c8381612c70565b82525050565b6000604082019050612c9e6000830185612c61565b612cab6020830184612c7a565b9392505050565b600081519050612cc181611e89565b92915050565b600060208284031215612cdd57612cdc611e7f565b5b6000612ceb84828501612cb2565b91505092915050565b600060c082019050612d096000830189612c61565b612d166020830188612c61565b612d236040830187612c61565b612d306060830186611f61565b8181036080830152612d428185612a8b565b905081810360a0830152612d568184612a8b565b9050979650505050505050565b7f4552433737373a207472616e7366657220616d6f756e7420657863656564732060008201527f62616c616e636500000000000000000000000000000000000000000000000000602082015250565b6000612dbf602783611dc5565b9150612dca82612d63565b604082019050919050565b60006020820190508181036000830152612dee81612db2565b9050919050565b7f4552433737373a20746f6b656e20726563697069656e7420636f6e747261637460008201527f20686173206e6f20696d706c656d656e74657220666f7220455243373737546f60208201527f6b656e73526563697069656e7400000000000000000000000000000000000000604082015250565b6000612e77604d83611dc5565b9150612e8282612df5565b606082019050919050565b60006020820190508181036000830152612ea681612e6a565b905091905056fea2646970667358221220c775808c4d7b52f47bb317462c2661232bdc1b9fb72e761aa179b96a422ab1de64736f6c63430008090033";
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
    })[];
    static createInterface(): ERC777MockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC777Mock;
}
export {};

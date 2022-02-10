import { Signer, ContractFactory, Overrides, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC777PresetFixedSupply, ERC777PresetFixedSupplyInterface } from "../ERC777PresetFixedSupply";
declare type ERC777PresetFixedSupplyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC777PresetFixedSupply__factory extends ContractFactory {
    constructor(...args: ERC777PresetFixedSupplyConstructorParams);
    deploy(name: string, symbol: string, defaultOperators: string[], initialSupply: BigNumberish, owner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC777PresetFixedSupply>;
    getDeployTransaction(name: string, symbol: string, defaultOperators: string[], initialSupply: BigNumberish, owner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC777PresetFixedSupply;
    connect(signer: Signer): ERC777PresetFixedSupply__factory;
    static readonly contractName: "ERC777PresetFixedSupply";
    readonly contractName: "ERC777PresetFixedSupply";
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162003bdb38038062003bdb833981810160405281019062000037919062000b4f565b848484826002908051906020019062000052929190620006f8565b5081600390805190602001906200006b929190620006f8565b5080600490805190602001906200008492919062000789565b5060005b81518110156200011d57600160056000848481518110620000ae57620000ad62000c34565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508080620001149062000c92565b91505062000088565b50731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff166329965a1d307fac7fbab5f54a3ca8194167523c6753bfeb96a445279294b6125b68cce2177054306040518463ffffffff1660e01b8152600401620001919392919062000d0c565b600060405180830381600087803b158015620001ac57600080fd5b505af1158015620001c1573d6000803e3d6000fd5b50505050731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff166329965a1d307faea199e31a596269b42cdafd93407f14436db6e4cad65417994c2eb37381e05a306040518463ffffffff1660e01b8152600401620002389392919062000d0c565b600060405180830381600087803b1580156200025357600080fd5b505af115801562000268573d6000803e3d6000fd5b50505050505050620002a181836040518060200160405280600081525060405180602001604052806000815250620002ac60201b60201c565b5050505050620010fc565b620002c2848484846001620002c860201b60201c565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614156200033b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003329062000daa565b60405180910390fd5b60006200034d620004c960201b60201c565b9050620003648160008888620004d160201b60201c565b846001600082825462000378919062000dcc565b92505081905550846000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620003cf919062000dcc565b92505081905550620003ee8160008888888888620004d760201b60201c565b8573ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d878787604051620004519392919062000e97565b60405180910390a38573ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef87604051620004b9919062000ee2565b60405180910390a3505050505050565b600033905090565b50505050565b6000731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff1663aabbb8ca877fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b6040518363ffffffff1660e01b81526004016200054a92919062000eff565b60206040518083038186803b1580156200056357600080fd5b505afa15801562000578573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200059e919062000f2c565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161462000653578073ffffffffffffffffffffffffffffffffffffffff166223de298989898989896040518763ffffffff1660e01b8152600401620006199695949392919062000f5e565b600060405180830381600087803b1580156200063457600080fd5b505af115801562000649573d6000803e3d6000fd5b50505050620006cb565b8115620006ca57620006868673ffffffffffffffffffffffffffffffffffffffff16620006d560201b62000e731760201c565b15620006c9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620006c09062001075565b60405180910390fd5b5b5b5050505050505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b8280546200070690620010c6565b90600052602060002090601f0160209004810192826200072a576000855562000776565b82601f106200074557805160ff191683800117855562000776565b8280016001018555821562000776579182015b828111156200077557825182559160200191906001019062000758565b5b50905062000785919062000818565b5090565b82805482825590600052602060002090810192821562000805579160200282015b82811115620008045782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190620007aa565b5b50905062000814919062000818565b5090565b5b808211156200083357600081600090555060010162000819565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620008a08262000855565b810181811067ffffffffffffffff82111715620008c257620008c162000866565b5b80604052505050565b6000620008d762000837565b9050620008e5828262000895565b919050565b600067ffffffffffffffff82111562000908576200090762000866565b5b620009138262000855565b9050602081019050919050565b60005b838110156200094057808201518184015260208101905062000923565b8381111562000950576000848401525b50505050565b60006200096d6200096784620008ea565b620008cb565b9050828152602081018484840111156200098c576200098b62000850565b5b6200099984828562000920565b509392505050565b600082601f830112620009b957620009b86200084b565b5b8151620009cb84826020860162000956565b91505092915050565b600067ffffffffffffffff821115620009f257620009f162000866565b5b602082029050602081019050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000a358262000a08565b9050919050565b62000a478162000a28565b811462000a5357600080fd5b50565b60008151905062000a678162000a3c565b92915050565b600062000a8462000a7e84620009d4565b620008cb565b9050808382526020820190506020840283018581111562000aaa5762000aa962000a03565b5b835b8181101562000ad7578062000ac2888262000a56565b84526020840193505060208101905062000aac565b5050509392505050565b600082601f83011262000af95762000af86200084b565b5b815162000b0b84826020860162000a6d565b91505092915050565b6000819050919050565b62000b298162000b14565b811462000b3557600080fd5b50565b60008151905062000b498162000b1e565b92915050565b600080600080600060a0868803121562000b6e5762000b6d62000841565b5b600086015167ffffffffffffffff81111562000b8f5762000b8e62000846565b5b62000b9d88828901620009a1565b955050602086015167ffffffffffffffff81111562000bc15762000bc062000846565b5b62000bcf88828901620009a1565b945050604086015167ffffffffffffffff81111562000bf35762000bf262000846565b5b62000c018882890162000ae1565b935050606062000c148882890162000b38565b925050608062000c278882890162000a56565b9150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600062000c9f8262000b14565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141562000cd55762000cd462000c63565b5b600182019050919050565b62000ceb8162000a28565b82525050565b6000819050919050565b62000d068162000cf1565b82525050565b600060608201905062000d23600083018662000ce0565b62000d32602083018562000cfb565b62000d41604083018462000ce0565b949350505050565b600082825260208201905092915050565b7f4552433737373a206d696e7420746f20746865207a65726f2061646472657373600082015250565b600062000d9260208362000d49565b915062000d9f8262000d5a565b602082019050919050565b6000602082019050818103600083015262000dc58162000d83565b9050919050565b600062000dd98262000b14565b915062000de68362000b14565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000e1e5762000e1d62000c63565b5b828201905092915050565b62000e348162000b14565b82525050565b600081519050919050565b600082825260208201905092915050565b600062000e638262000e3a565b62000e6f818562000e45565b935062000e8181856020860162000920565b62000e8c8162000855565b840191505092915050565b600060608201905062000eae600083018662000e29565b818103602083015262000ec2818562000e56565b9050818103604083015262000ed8818462000e56565b9050949350505050565b600060208201905062000ef9600083018462000e29565b92915050565b600060408201905062000f16600083018562000ce0565b62000f25602083018462000cfb565b9392505050565b60006020828403121562000f455762000f4462000841565b5b600062000f558482850162000a56565b91505092915050565b600060c08201905062000f75600083018962000ce0565b62000f84602083018862000ce0565b62000f93604083018762000ce0565b62000fa2606083018662000e29565b818103608083015262000fb6818562000e56565b905081810360a083015262000fcc818462000e56565b9050979650505050505050565b7f4552433737373a20746f6b656e20726563697069656e7420636f6e747261637460008201527f20686173206e6f20696d706c656d656e74657220666f7220455243373737546f60208201527f6b656e73526563697069656e7400000000000000000000000000000000000000604082015250565b60006200105d604d8362000d49565b91506200106a8262000fd9565b606082019050919050565b6000602082019050818103600083015262001090816200104e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620010df57607f821691505b60208210811415620010f657620010f562001097565b5b50919050565b612acf806200110c6000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063959b8c3f116100a2578063d95b637111610071578063d95b6371146102e3578063dd62ed3e14610313578063fad8b32a14610343578063fc673c4f1461035f578063fe9d93031461037b57610116565b8063959b8c3f1461025d57806395d89b41146102795780639bd9bbc614610297578063a9059cbb146102b357610116565b806323b872dd116100e957806323b872dd146101a5578063313ce567146101d5578063556f0dc7146101f357806362ad1b831461021157806370a082311461022d57610116565b806306e485381461011b57806306fdde0314610139578063095ea7b31461015757806318160ddd14610187575b600080fd5b610123610397565b6040516101309190611acf565b60405180910390f35b610141610425565b60405161014e9190611b8a565b60405180910390f35b610171600480360381019061016c9190611c22565b6104b7565b60405161017e9190611c7d565b60405180910390f35b61018f6104da565b60405161019c9190611ca7565b60405180910390f35b6101bf60048036038101906101ba9190611cc2565b6104e4565b6040516101cc9190611c7d565b60405180910390f35b6101dd610535565b6040516101ea9190611d31565b60405180910390f35b6101fb61053e565b6040516102089190611ca7565b60405180910390f35b61022b60048036038101906102269190611e81565b610547565b005b61024760048036038101906102429190611f34565b6105ad565b6040516102549190611ca7565b60405180910390f35b61027760048036038101906102729190611f34565b6105f5565b005b610281610856565b60405161028e9190611b8a565b60405180910390f35b6102b160048036038101906102ac9190611f61565b6108e8565b005b6102cd60048036038101906102c89190611c22565b610912565b6040516102da9190611c7d565b60405180910390f35b6102fd60048036038101906102f89190611fd0565b610952565b60405161030a9190611c7d565b60405180910390f35b61032d60048036038101906103289190611fd0565b610b03565b60405161033a9190611ca7565b60405180910390f35b61035d60048036038101906103589190611f34565b610b8a565b005b61037960048036038101906103749190612010565b610deb565b005b610395600480360381019061039091906120af565b610e4d565b005b6060600480548060200260200160405190810160405280929190818152602001828054801561041b57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116103d1575b5050505050905090565b6060600280546104349061213a565b80601f01602080910402602001604051908101604052809291908181526020018280546104609061213a565b80156104ad5780601f10610482576101008083540402835291602001916104ad565b820191906000526020600020905b81548152906001019060200180831161049057829003601f168201915b5050505050905090565b6000806104c2610e96565b90506104cf818585610e9e565b600191505092915050565b6000600154905090565b6000806104ef610e96565b90506104fc858285611069565b610529858585604051806020016040528060008152506040518060200160405280600081525060006110f5565b60019150509392505050565b60006012905090565b60006001905090565b610558610552610e96565b86610952565b610597576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058e906121de565b60405180910390fd5b6105a6858585858560016110f5565b5050505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b8073ffffffffffffffffffffffffffffffffffffffff16610614610e96565b73ffffffffffffffffffffffffffffffffffffffff16141561066b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066290612270565b60405180910390fd5b600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561075557600760006106c9610e96565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff02191690556107f2565b600160066000610763610e96565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b6107fa610e96565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167ff4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f960405160405180910390a350565b6060600380546108659061213a565b80601f01602080910402602001604051908101604052809291908181526020018280546108919061213a565b80156108de5780601f106108b3576101008083540402835291602001916108de565b820191906000526020600020905b8154815290600101906020018083116108c157829003601f168201915b5050505050905090565b61090d6108f3610e96565b8484846040518060200160405280600081525060016110f5565b505050565b600061094861091f610e96565b8484604051806020016040528060008152506040518060200160405280600081525060006110f5565b6001905092915050565b60008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161480610a6a5750600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff168015610a695750600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b5b80610afb5750600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b905092915050565b6000600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610b92610e96565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610c00576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bf790612302565b60405180910390fd5b600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610cf357600160076000610c60610e96565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610d87565b60066000610cff610e96565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff02191690555b610d8f610e96565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa160405160405180910390a350565b610dfc610df6610e96565b85610952565b610e3b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e32906121de565b60405180910390fd5b610e4784848484611215565b50505050565b610e6f610e58610e96565b838360405180602001604052806000815250611215565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610f0e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f0590612394565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f7e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f7590612426565b60405180910390fd5b80600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161105c9190611ca7565b60405180910390a3505050565b60006110758484610b03565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146110ef57818110156110e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110d890612492565b60405180910390fd5b6110ee8484848403610e9e565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161415611165576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161115c90612524565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614156111d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111cc906125b6565b60405180910390fd5b60006111df610e96565b90506111ef818888888888611468565b6111fd8188888888886115de565b61120c818888888888886117f8565b50505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415611285576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161127c90612648565b60405180910390fd5b600061128f610e96565b90506112a081866000878787611468565b6112ad81866000876119d9565b60008060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905084811015611333576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161132a906126da565b60405180910390fd5b8481036000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550846001600082825461138a9190612729565b925050819055508573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a40988787876040516113f2939291906127b2565b60405180910390a3600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef876040516114589190611ca7565b60405180910390a3505050505050565b6000731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff1663aabbb8ca877f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe8956040518363ffffffff1660e01b81526004016114d992919061281f565b60206040518083038186803b1580156114f157600080fd5b505afa158015611505573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611529919061285d565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146115d5578073ffffffffffffffffffffffffffffffffffffffff166375ab97828888888888886040518763ffffffff1660e01b81526004016115a29695949392919061288a565b600060405180830381600087803b1580156115bc57600080fd5b505af11580156115d0573d6000803e3d6000fd5b505050505b50505050505050565b6115ea868686866119d9565b60008060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905083811015611670576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116679061296b565b60405180910390fd5b8381036000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550836000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611703919061298b565b925050819055508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff167f06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987878787604051611782939291906127b2565b60405180910390a48473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040516117e79190611ca7565b60405180910390a350505050505050565b6000731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff1663aabbb8ca877fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b6040518363ffffffff1660e01b815260040161186992919061281f565b60206040518083038186803b15801561188157600080fd5b505afa158015611895573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118b9919061285d565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611968578073ffffffffffffffffffffffffffffffffffffffff166223de298989898989896040518763ffffffff1660e01b81526004016119319695949392919061288a565b600060405180830381600087803b15801561194b57600080fd5b505af115801561195f573d6000803e3d6000fd5b505050506119cf565b81156119ce5761198d8673ffffffffffffffffffffffffffffffffffffffff16610e73565b156119cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119c490612a79565b60405180910390fd5b5b5b5050505050505050565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611a3682611a0b565b9050919050565b611a4681611a2b565b82525050565b6000611a588383611a3d565b60208301905092915050565b6000602082019050919050565b6000611a7c826119df565b611a8681856119ea565b9350611a91836119fb565b8060005b83811015611ac2578151611aa98882611a4c565b9750611ab483611a64565b925050600181019050611a95565b5085935050505092915050565b60006020820190508181036000830152611ae98184611a71565b905092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611b2b578082015181840152602081019050611b10565b83811115611b3a576000848401525b50505050565b6000601f19601f8301169050919050565b6000611b5c82611af1565b611b668185611afc565b9350611b76818560208601611b0d565b611b7f81611b40565b840191505092915050565b60006020820190508181036000830152611ba48184611b51565b905092915050565b6000604051905090565b600080fd5b600080fd5b611bc981611a2b565b8114611bd457600080fd5b50565b600081359050611be681611bc0565b92915050565b6000819050919050565b611bff81611bec565b8114611c0a57600080fd5b50565b600081359050611c1c81611bf6565b92915050565b60008060408385031215611c3957611c38611bb6565b5b6000611c4785828601611bd7565b9250506020611c5885828601611c0d565b9150509250929050565b60008115159050919050565b611c7781611c62565b82525050565b6000602082019050611c926000830184611c6e565b92915050565b611ca181611bec565b82525050565b6000602082019050611cbc6000830184611c98565b92915050565b600080600060608486031215611cdb57611cda611bb6565b5b6000611ce986828701611bd7565b9350506020611cfa86828701611bd7565b9250506040611d0b86828701611c0d565b9150509250925092565b600060ff82169050919050565b611d2b81611d15565b82525050565b6000602082019050611d466000830184611d22565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611d8e82611b40565b810181811067ffffffffffffffff82111715611dad57611dac611d56565b5b80604052505050565b6000611dc0611bac565b9050611dcc8282611d85565b919050565b600067ffffffffffffffff821115611dec57611deb611d56565b5b611df582611b40565b9050602081019050919050565b82818337600083830152505050565b6000611e24611e1f84611dd1565b611db6565b905082815260208101848484011115611e4057611e3f611d51565b5b611e4b848285611e02565b509392505050565b600082601f830112611e6857611e67611d4c565b5b8135611e78848260208601611e11565b91505092915050565b600080600080600060a08688031215611e9d57611e9c611bb6565b5b6000611eab88828901611bd7565b9550506020611ebc88828901611bd7565b9450506040611ecd88828901611c0d565b935050606086013567ffffffffffffffff811115611eee57611eed611bbb565b5b611efa88828901611e53565b925050608086013567ffffffffffffffff811115611f1b57611f1a611bbb565b5b611f2788828901611e53565b9150509295509295909350565b600060208284031215611f4a57611f49611bb6565b5b6000611f5884828501611bd7565b91505092915050565b600080600060608486031215611f7a57611f79611bb6565b5b6000611f8886828701611bd7565b9350506020611f9986828701611c0d565b925050604084013567ffffffffffffffff811115611fba57611fb9611bbb565b5b611fc686828701611e53565b9150509250925092565b60008060408385031215611fe757611fe6611bb6565b5b6000611ff585828601611bd7565b925050602061200685828601611bd7565b9150509250929050565b6000806000806080858703121561202a57612029611bb6565b5b600061203887828801611bd7565b945050602061204987828801611c0d565b935050604085013567ffffffffffffffff81111561206a57612069611bbb565b5b61207687828801611e53565b925050606085013567ffffffffffffffff81111561209757612096611bbb565b5b6120a387828801611e53565b91505092959194509250565b600080604083850312156120c6576120c5611bb6565b5b60006120d485828601611c0d565b925050602083013567ffffffffffffffff8111156120f5576120f4611bbb565b5b61210185828601611e53565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061215257607f821691505b602082108114156121665761216561210b565b5b50919050565b7f4552433737373a2063616c6c6572206973206e6f7420616e206f70657261746f60008201527f7220666f7220686f6c6465720000000000000000000000000000000000000000602082015250565b60006121c8602c83611afc565b91506121d38261216c565b604082019050919050565b600060208201905081810360008301526121f7816121bb565b9050919050565b7f4552433737373a20617574686f72697a696e672073656c66206173206f70657260008201527f61746f7200000000000000000000000000000000000000000000000000000000602082015250565b600061225a602483611afc565b9150612265826121fe565b604082019050919050565b600060208201905081810360008301526122898161224d565b9050919050565b7f4552433737373a207265766f6b696e672073656c66206173206f70657261746f60008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006122ec602183611afc565b91506122f782612290565b604082019050919050565b6000602082019050818103600083015261231b816122df565b9050919050565b7f4552433737373a20617070726f76652066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061237e602583611afc565b915061238982612322565b604082019050919050565b600060208201905081810360008301526123ad81612371565b9050919050565b7f4552433737373a20617070726f766520746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000612410602383611afc565b915061241b826123b4565b604082019050919050565b6000602082019050818103600083015261243f81612403565b9050919050565b7f4552433737373a20696e73756666696369656e7420616c6c6f77616e63650000600082015250565b600061247c601e83611afc565b915061248782612446565b602082019050919050565b600060208201905081810360008301526124ab8161246f565b9050919050565b7f4552433737373a207472616e736665722066726f6d20746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061250e602683611afc565b9150612519826124b2565b604082019050919050565b6000602082019050818103600083015261253d81612501565b9050919050565b7f4552433737373a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006125a0602483611afc565b91506125ab82612544565b604082019050919050565b600060208201905081810360008301526125cf81612593565b9050919050565b7f4552433737373a206275726e2066726f6d20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000612632602283611afc565b915061263d826125d6565b604082019050919050565b6000602082019050818103600083015261266181612625565b9050919050565b7f4552433737373a206275726e20616d6f756e7420657863656564732062616c6160008201527f6e63650000000000000000000000000000000000000000000000000000000000602082015250565b60006126c4602383611afc565b91506126cf82612668565b604082019050919050565b600060208201905081810360008301526126f3816126b7565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061273482611bec565b915061273f83611bec565b925082821015612752576127516126fa565b5b828203905092915050565b600081519050919050565b600082825260208201905092915050565b60006127848261275d565b61278e8185612768565b935061279e818560208601611b0d565b6127a781611b40565b840191505092915050565b60006060820190506127c76000830186611c98565b81810360208301526127d98185612779565b905081810360408301526127ed8184612779565b9050949350505050565b61280081611a2b565b82525050565b6000819050919050565b61281981612806565b82525050565b600060408201905061283460008301856127f7565b6128416020830184612810565b9392505050565b60008151905061285781611bc0565b92915050565b60006020828403121561287357612872611bb6565b5b600061288184828501612848565b91505092915050565b600060c08201905061289f60008301896127f7565b6128ac60208301886127f7565b6128b960408301876127f7565b6128c66060830186611c98565b81810360808301526128d88185612779565b905081810360a08301526128ec8184612779565b9050979650505050505050565b7f4552433737373a207472616e7366657220616d6f756e7420657863656564732060008201527f62616c616e636500000000000000000000000000000000000000000000000000602082015250565b6000612955602783611afc565b9150612960826128f9565b604082019050919050565b6000602082019050818103600083015261298481612948565b9050919050565b600061299682611bec565b91506129a183611bec565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156129d6576129d56126fa565b5b828201905092915050565b7f4552433737373a20746f6b656e20726563697069656e7420636f6e747261637460008201527f20686173206e6f20696d706c656d656e74657220666f7220455243373737546f60208201527f6b656e73526563697069656e7400000000000000000000000000000000000000604082015250565b6000612a63604d83611afc565b9150612a6e826129e1565b606082019050919050565b60006020820190508181036000830152612a9281612a56565b905091905056fea264697066735822122076fca773139a930ea0d67e3f013cb1166bf307a0b4a33e9a9377d5ee4cf6167f64736f6c63430008090033";
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
    static createInterface(): ERC777PresetFixedSupplyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC777PresetFixedSupply;
}
export {};

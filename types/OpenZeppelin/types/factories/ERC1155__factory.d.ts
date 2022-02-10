import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC1155, ERC1155Interface } from "../ERC1155";
declare type ERC1155ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC1155__factory extends ContractFactory {
    constructor(...args: ERC1155ConstructorParams);
    deploy(uri_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC1155>;
    getDeployTransaction(uri_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC1155;
    connect(signer: Signer): ERC1155__factory;
    static readonly contractName: "ERC1155";
    readonly contractName: "ERC1155";
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040516200292e3803806200292e8339818101604052810190620000379190620002b8565b62000048816200004f60201b60201c565b506200036e565b8060029080519060200190620000679291906200006b565b5050565b828054620000799062000338565b90600052602060002090601f0160209004810192826200009d5760008555620000e9565b82601f10620000b857805160ff1916838001178555620000e9565b82800160010185558215620000e9579182015b82811115620000e8578251825591602001919060010190620000cb565b5b509050620000f89190620000fc565b5090565b5b8082111562000117576000816000905550600101620000fd565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001848262000139565b810181811067ffffffffffffffff82111715620001a657620001a56200014a565b5b80604052505050565b6000620001bb6200011b565b9050620001c9828262000179565b919050565b600067ffffffffffffffff821115620001ec57620001eb6200014a565b5b620001f78262000139565b9050602081019050919050565b60005b838110156200022457808201518184015260208101905062000207565b8381111562000234576000848401525b50505050565b6000620002516200024b84620001ce565b620001af565b90508281526020810184848401111562000270576200026f62000134565b5b6200027d84828562000204565b509392505050565b600082601f8301126200029d576200029c6200012f565b5b8151620002af8482602086016200023a565b91505092915050565b600060208284031215620002d157620002d062000125565b5b600082015167ffffffffffffffff811115620002f257620002f16200012a565b5b620003008482850162000285565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200035157607f821691505b6020821081141562000368576200036762000309565b5b50919050565b6125b0806200037e6000396000f3fe608060405234801561001057600080fd5b50600436106100875760003560e01c80634e1273f41161005b5780634e1273f414610138578063a22cb46514610168578063e985e9c514610184578063f242432a146101b457610087565b8062fdd58e1461008c57806301ffc9a7146100bc5780630e89341c146100ec5780632eb2c2d61461011c575b600080fd5b6100a660048036038101906100a191906113a4565b6101d0565b6040516100b391906113f3565b60405180910390f35b6100d660048036038101906100d19190611466565b610299565b6040516100e391906114ae565b60405180910390f35b610106600480360381019061010191906114c9565b61037b565b604051610113919061158f565b60405180910390f35b610136600480360381019061013191906117ae565b61040f565b005b610152600480360381019061014d9190611940565b6104b0565b60405161015f9190611a76565b60405180910390f35b610182600480360381019061017d9190611ac4565b6105c9565b005b61019e60048036038101906101999190611b04565b6105df565b6040516101ab91906114ae565b60405180910390f35b6101ce60048036038101906101c99190611b44565b610673565b005b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610241576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023890611c4d565b60405180910390fd5b60008083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60007fd9b67a26000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061036457507f0e89341c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610374575061037382610714565b5b9050919050565b60606002805461038a90611c9c565b80601f01602080910402602001604051908101604052809291908181526020018280546103b690611c9c565b80156104035780601f106103d857610100808354040283529160200191610403565b820191906000526020600020905b8154815290600101906020018083116103e657829003601f168201915b50505050509050919050565b61041761077e565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16148061045d575061045c8561045761077e565b6105df565b5b61049c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049390611d40565b60405180910390fd5b6104a98585858585610786565b5050505050565b606081518351146104f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ed90611dd2565b60405180910390fd5b6000835167ffffffffffffffff811115610513576105126115b6565b5b6040519080825280602002602001820160405280156105415781602001602082028036833780820191505090505b50905060005b84518110156105be5761058e85828151811061056657610565611df2565b5b602002602001015185838151811061058157610580611df2565b5b60200260200101516101d0565b8282815181106105a1576105a0611df2565b5b602002602001018181525050806105b790611e50565b9050610547565b508091505092915050565b6105db6105d461077e565b8383610a9a565b5050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b61067b61077e565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614806106c157506106c0856106bb61077e565b6105df565b5b610700576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f790611f0b565b60405180910390fd5b61070d8585858585610c07565b5050505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b81518351146107ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c190611f9d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141561083a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108319061202f565b60405180910390fd5b600061084461077e565b9050610854818787878787610e89565b60005b8451811015610a0557600085828151811061087557610874611df2565b5b60200260200101519050600085838151811061089457610893611df2565b5b60200260200101519050600080600084815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610935576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092c906120c1565b60405180910390fd5b81810360008085815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160008085815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546109ea91906120e1565b92505081905550505050806109fe90611e50565b9050610857565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610a7c929190612137565b60405180910390a4610a92818787878787610e91565b505050505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b09576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b00906121e0565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610bfa91906114ae565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610c77576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6e9061202f565b60405180910390fd5b6000610c8161077e565b9050610ca1818787610c9288611078565b610c9b88611078565b87610e89565b600080600086815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905083811015610d38576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2f906120c1565b60405180910390fd5b83810360008087815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508360008087815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ded91906120e1565b925050819055508573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628888604051610e6a929190612200565b60405180910390a4610e808288888888886110f2565b50505050505050565b505050505050565b610eb08473ffffffffffffffffffffffffffffffffffffffff166112d9565b15611070578373ffffffffffffffffffffffffffffffffffffffff1663bc197c8187878686866040518663ffffffff1660e01b8152600401610ef695949392919061228d565b602060405180830381600087803b158015610f1057600080fd5b505af1925050508015610f4157506040513d601f19601f82011682018060405250810190610f3e919061230a565b60015b610fe757610f4d612344565b806308c379a01415610faa5750610f62612366565b80610f6d5750610fac565b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fa1919061158f565b60405180910390fd5b505b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fde9061246e565b60405180910390fd5b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461106e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161106590612500565b60405180910390fd5b505b505050505050565b60606000600167ffffffffffffffff811115611097576110966115b6565b5b6040519080825280602002602001820160405280156110c55781602001602082028036833780820191505090505b50905082816000815181106110dd576110dc611df2565b5b60200260200101818152505080915050919050565b6111118473ffffffffffffffffffffffffffffffffffffffff166112d9565b156112d1578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b8152600401611157959493929190612520565b602060405180830381600087803b15801561117157600080fd5b505af19250505080156111a257506040513d601f19601f8201168201806040525081019061119f919061230a565b60015b611248576111ae612344565b806308c379a0141561120b57506111c3612366565b806111ce575061120d565b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611202919061158f565b60405180910390fd5b505b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161123f9061246e565b60405180910390fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146112cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112c690612500565b60405180910390fd5b505b505050505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061133b82611310565b9050919050565b61134b81611330565b811461135657600080fd5b50565b60008135905061136881611342565b92915050565b6000819050919050565b6113818161136e565b811461138c57600080fd5b50565b60008135905061139e81611378565b92915050565b600080604083850312156113bb576113ba611306565b5b60006113c985828601611359565b92505060206113da8582860161138f565b9150509250929050565b6113ed8161136e565b82525050565b600060208201905061140860008301846113e4565b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6114438161140e565b811461144e57600080fd5b50565b6000813590506114608161143a565b92915050565b60006020828403121561147c5761147b611306565b5b600061148a84828501611451565b91505092915050565b60008115159050919050565b6114a881611493565b82525050565b60006020820190506114c3600083018461149f565b92915050565b6000602082840312156114df576114de611306565b5b60006114ed8482850161138f565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611530578082015181840152602081019050611515565b8381111561153f576000848401525b50505050565b6000601f19601f8301169050919050565b6000611561826114f6565b61156b8185611501565b935061157b818560208601611512565b61158481611545565b840191505092915050565b600060208201905081810360008301526115a98184611556565b905092915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6115ee82611545565b810181811067ffffffffffffffff8211171561160d5761160c6115b6565b5b80604052505050565b60006116206112fc565b905061162c82826115e5565b919050565b600067ffffffffffffffff82111561164c5761164b6115b6565b5b602082029050602081019050919050565b600080fd5b600061167561167084611631565b611616565b905080838252602082019050602084028301858111156116985761169761165d565b5b835b818110156116c157806116ad888261138f565b84526020840193505060208101905061169a565b5050509392505050565b600082601f8301126116e0576116df6115b1565b5b81356116f0848260208601611662565b91505092915050565b600080fd5b600067ffffffffffffffff821115611719576117186115b6565b5b61172282611545565b9050602081019050919050565b82818337600083830152505050565b600061175161174c846116fe565b611616565b90508281526020810184848401111561176d5761176c6116f9565b5b61177884828561172f565b509392505050565b600082601f830112611795576117946115b1565b5b81356117a584826020860161173e565b91505092915050565b600080600080600060a086880312156117ca576117c9611306565b5b60006117d888828901611359565b95505060206117e988828901611359565b945050604086013567ffffffffffffffff81111561180a5761180961130b565b5b611816888289016116cb565b935050606086013567ffffffffffffffff8111156118375761183661130b565b5b611843888289016116cb565b925050608086013567ffffffffffffffff8111156118645761186361130b565b5b61187088828901611780565b9150509295509295909350565b600067ffffffffffffffff821115611898576118976115b6565b5b602082029050602081019050919050565b60006118bc6118b78461187d565b611616565b905080838252602082019050602084028301858111156118df576118de61165d565b5b835b8181101561190857806118f48882611359565b8452602084019350506020810190506118e1565b5050509392505050565b600082601f830112611927576119266115b1565b5b81356119378482602086016118a9565b91505092915050565b6000806040838503121561195757611956611306565b5b600083013567ffffffffffffffff8111156119755761197461130b565b5b61198185828601611912565b925050602083013567ffffffffffffffff8111156119a2576119a161130b565b5b6119ae858286016116cb565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6119ed8161136e565b82525050565b60006119ff83836119e4565b60208301905092915050565b6000602082019050919050565b6000611a23826119b8565b611a2d81856119c3565b9350611a38836119d4565b8060005b83811015611a69578151611a5088826119f3565b9750611a5b83611a0b565b925050600181019050611a3c565b5085935050505092915050565b60006020820190508181036000830152611a908184611a18565b905092915050565b611aa181611493565b8114611aac57600080fd5b50565b600081359050611abe81611a98565b92915050565b60008060408385031215611adb57611ada611306565b5b6000611ae985828601611359565b9250506020611afa85828601611aaf565b9150509250929050565b60008060408385031215611b1b57611b1a611306565b5b6000611b2985828601611359565b9250506020611b3a85828601611359565b9150509250929050565b600080600080600060a08688031215611b6057611b5f611306565b5b6000611b6e88828901611359565b9550506020611b7f88828901611359565b9450506040611b908882890161138f565b9350506060611ba18882890161138f565b925050608086013567ffffffffffffffff811115611bc257611bc161130b565b5b611bce88828901611780565b9150509295509295909350565b7f455243313135353a2062616c616e636520717565727920666f7220746865207a60008201527f65726f2061646472657373000000000000000000000000000000000000000000602082015250565b6000611c37602b83611501565b9150611c4282611bdb565b604082019050919050565b60006020820190508181036000830152611c6681611c2a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611cb457607f821691505b60208210811415611cc857611cc7611c6d565b5b50919050565b7f455243313135353a207472616e736665722063616c6c6572206973206e6f742060008201527f6f776e6572206e6f7220617070726f7665640000000000000000000000000000602082015250565b6000611d2a603283611501565b9150611d3582611cce565b604082019050919050565b60006020820190508181036000830152611d5981611d1d565b9050919050565b7f455243313135353a206163636f756e747320616e6420696473206c656e67746860008201527f206d69736d617463680000000000000000000000000000000000000000000000602082015250565b6000611dbc602983611501565b9150611dc782611d60565b604082019050919050565b60006020820190508181036000830152611deb81611daf565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611e5b8261136e565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611e8e57611e8d611e21565b5b600182019050919050565b7f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260008201527f20617070726f7665640000000000000000000000000000000000000000000000602082015250565b6000611ef5602983611501565b9150611f0082611e99565b604082019050919050565b60006020820190508181036000830152611f2481611ee8565b9050919050565b7f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060008201527f6d69736d61746368000000000000000000000000000000000000000000000000602082015250565b6000611f87602883611501565b9150611f9282611f2b565b604082019050919050565b60006020820190508181036000830152611fb681611f7a565b9050919050565b7f455243313135353a207472616e7366657220746f20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000612019602583611501565b915061202482611fbd565b604082019050919050565b600060208201905081810360008301526120488161200c565b9050919050565b7f455243313135353a20696e73756666696369656e742062616c616e636520666f60008201527f72207472616e7366657200000000000000000000000000000000000000000000602082015250565b60006120ab602a83611501565b91506120b68261204f565b604082019050919050565b600060208201905081810360008301526120da8161209e565b9050919050565b60006120ec8261136e565b91506120f78361136e565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561212c5761212b611e21565b5b828201905092915050565b600060408201905081810360008301526121518185611a18565b905081810360208301526121658184611a18565b90509392505050565b7f455243313135353a2073657474696e6720617070726f76616c2073746174757360008201527f20666f722073656c660000000000000000000000000000000000000000000000602082015250565b60006121ca602983611501565b91506121d58261216e565b604082019050919050565b600060208201905081810360008301526121f9816121bd565b9050919050565b600060408201905061221560008301856113e4565b61222260208301846113e4565b9392505050565b61223281611330565b82525050565b600081519050919050565b600082825260208201905092915050565b600061225f82612238565b6122698185612243565b9350612279818560208601611512565b61228281611545565b840191505092915050565b600060a0820190506122a26000830188612229565b6122af6020830187612229565b81810360408301526122c18186611a18565b905081810360608301526122d58185611a18565b905081810360808301526122e98184612254565b90509695505050505050565b6000815190506123048161143a565b92915050565b6000602082840312156123205761231f611306565b5b600061232e848285016122f5565b91505092915050565b60008160e01c9050919050565b600060033d11156123635760046000803e612360600051612337565b90505b90565b600060443d1015612376576123f9565b61237e6112fc565b60043d036004823e80513d602482011167ffffffffffffffff821117156123a65750506123f9565b808201805167ffffffffffffffff8111156123c457505050506123f9565b80602083010160043d0385018111156123e15750505050506123f9565b6123f0826020018501866115e5565b82955050505050505b90565b7f455243313135353a207472616e7366657220746f206e6f6e204552433131353560008201527f526563656976657220696d706c656d656e746572000000000000000000000000602082015250565b6000612458603483611501565b9150612463826123fc565b604082019050919050565b600060208201905081810360008301526124878161244b565b9050919050565b7f455243313135353a204552433131353552656365697665722072656a6563746560008201527f6420746f6b656e73000000000000000000000000000000000000000000000000602082015250565b60006124ea602883611501565b91506124f58261248e565b604082019050919050565b60006020820190508181036000830152612519816124dd565b9050919050565b600060a0820190506125356000830188612229565b6125426020830187612229565b61254f60408301866113e4565b61255c60608301856113e4565b818103608083015261256e8184612254565b9050969550505050505056fea26469706673582212209ff11fdec91a3125b9cd78f5622b048a1c700b5be7f44b0b2474ee3593ee920064736f6c63430008090033";
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
    static createInterface(): ERC1155Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC1155;
}
export {};
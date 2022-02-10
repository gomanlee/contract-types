import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20VotesMock, ERC20VotesMockInterface } from "../ERC20VotesMock";
declare type ERC20VotesMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC20VotesMock__factory extends ContractFactory {
    constructor(...args: ERC20VotesMockConstructorParams);
    deploy(name: string, symbol: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC20VotesMock>;
    getDeployTransaction(name: string, symbol: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC20VotesMock;
    connect(signer: Signer): ERC20VotesMock__factory;
    static readonly contractName: "ERC20VotesMock";
    readonly contractName: "ERC20VotesMock";
    static readonly bytecode = "0x6101606040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9610140908152503480156200003a57600080fd5b50604051620041f8380380620041f8833981810160405281019062000060919062000412565b81806040518060400160405280600181526020017f310000000000000000000000000000000000000000000000000000000000000081525084848160039080519060200190620000b2929190620001c5565b508060049080519060200190620000cb929190620001c5565b50505060008280519060200120905060008280519060200120905060007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f90508260e081815250508161010081815250504660a08181525050620001378184846200018960201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff16815250508061012081815250505050505050505050620005d4565b60008383834630604051602001620001a695949392919062000512565b6040516020818303038152906040528051906020012090509392505050565b828054620001d3906200059e565b90600052602060002090601f016020900481019282620001f7576000855562000243565b82601f106200021257805160ff191683800117855562000243565b8280016001018555821562000243579182015b828111156200024257825182559160200191906001019062000225565b5b50905062000252919062000256565b5090565b5b808211156200027157600081600090555060010162000257565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620002de8262000293565b810181811067ffffffffffffffff821117156200030057620002ff620002a4565b5b80604052505050565b60006200031562000275565b9050620003238282620002d3565b919050565b600067ffffffffffffffff821115620003465762000345620002a4565b5b620003518262000293565b9050602081019050919050565b60005b838110156200037e57808201518184015260208101905062000361565b838111156200038e576000848401525b50505050565b6000620003ab620003a58462000328565b62000309565b905082815260208101848484011115620003ca57620003c96200028e565b5b620003d78482856200035e565b509392505050565b600082601f830112620003f757620003f662000289565b5b81516200040984826020860162000394565b91505092915050565b600080604083850312156200042c576200042b6200027f565b5b600083015167ffffffffffffffff8111156200044d576200044c62000284565b5b6200045b85828601620003df565b925050602083015167ffffffffffffffff8111156200047f576200047e62000284565b5b6200048d85828601620003df565b9150509250929050565b6000819050919050565b620004ac8162000497565b82525050565b6000819050919050565b620004c781620004b2565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620004fa82620004cd565b9050919050565b6200050c81620004ed565b82525050565b600060a082019050620005296000830188620004a1565b620005386020830187620004a1565b620005476040830186620004a1565b620005566060830185620004bc565b62000565608083018462000501565b9695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620005b757607f821691505b60208210811415620005ce57620005cd6200056f565b5b50919050565b60805160a05160c05160e051610100516101205161014051613bc96200062f6000396000610d7a0152600061159a015260006115dc015260006115bb015260006114f0015260006115460152600061156f0152613bc96000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c80636fcfff45116100de5780639dc29fac11610097578063c3cda52011610071578063c3cda520146104c0578063d505accf146104dc578063dd62ed3e146104f8578063f1127ed81461052857610173565b80639dc29fac14610444578063a457c2d714610460578063a9059cbb1461049057610173565b80636fcfff451461033657806370a08231146103665780637ecebe00146103965780638e539e8c146103c657806395d89b41146103f65780639ab24eb01461041457610173565b80633644e515116101305780633644e51514610250578063395093511461026e5780633a46b1a81461029e57806340c10f19146102ce578063587cde1e146102ea5780635c19a95c1461031a57610173565b806306fdde0314610178578063095ea7b31461019657806318160ddd146101c657806323b872dd146101e4578063313ce567146102145780633408e47014610232575b600080fd5b610180610558565b60405161018d91906126d5565b60405180910390f35b6101b060048036038101906101ab9190612790565b6105ea565b6040516101bd91906127eb565b60405180910390f35b6101ce61060d565b6040516101db9190612815565b60405180910390f35b6101fe60048036038101906101f99190612830565b610617565b60405161020b91906127eb565b60405180910390f35b61021c610646565b604051610229919061289f565b60405180910390f35b61023a61064f565b6040516102479190612815565b60405180910390f35b610258610657565b60405161026591906128d3565b60405180910390f35b61028860048036038101906102839190612790565b610666565b60405161029591906127eb565b60405180910390f35b6102b860048036038101906102b39190612790565b610710565b6040516102c59190612815565b60405180910390f35b6102e860048036038101906102e39190612790565b6107a4565b005b61030460048036038101906102ff91906128ee565b6107b2565b604051610311919061292a565b60405180910390f35b610334600480360381019061032f91906128ee565b61081b565b005b610350600480360381019061034b91906128ee565b61082f565b60405161035d9190612964565b60405180910390f35b610380600480360381019061037b91906128ee565b610883565b60405161038d9190612815565b60405180910390f35b6103b060048036038101906103ab91906128ee565b6108cb565b6040516103bd9190612815565b60405180910390f35b6103e060048036038101906103db919061297f565b61091b565b6040516103ed9190612815565b60405180910390f35b6103fe610971565b60405161040b91906126d5565b60405180910390f35b61042e600480360381019061042991906128ee565b610a03565b60405161043b9190612815565b60405180910390f35b61045e60048036038101906104599190612790565b610b14565b005b61047a60048036038101906104759190612790565b610b22565b60405161048791906127eb565b60405180910390f35b6104aa60048036038101906104a59190612790565b610c0c565b6040516104b791906127eb565b60405180910390f35b6104da60048036038101906104d59190612a04565b610c2f565b005b6104f660048036038101906104f19190612a91565b610d33565b005b610512600480360381019061050d9190612b33565b610e75565b60405161051f9190612815565b60405180910390f35b610542600480360381019061053d9190612b9f565b610efc565b60405161054f9190612c54565b60405180910390f35b60606003805461056790612c9e565b80601f016020809104026020016040519081016040528092919081815260200182805461059390612c9e565b80156105e05780601f106105b5576101008083540402835291602001916105e0565b820191906000526020600020905b8154815290600101906020018083116105c357829003601f168201915b5050505050905090565b6000806105f561100c565b9050610602818585611014565b600191505092915050565b6000600254905090565b60008061062261100c565b905061062f8582856111df565b61063a85858561126b565b60019150509392505050565b60006012905090565b600046905090565b60006106616114ec565b905090565b60008061067161100c565b9050610705818585600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546107009190612cff565b611014565b600191505092915050565b6000438210610754576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074b90612da1565b60405180910390fd5b61079c600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002083611606565b905092915050565b6107ae8282611712565b5050565b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b61082c61082661100c565b8261179f565b50565b600061087c600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506118b9565b9050919050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000610914600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061190c565b9050919050565b600043821061095f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095690612da1565b60405180910390fd5b61096a600883611606565b9050919050565b60606004805461098090612c9e565b80601f01602080910402602001604051908101604052809291908181526020018280546109ac90612c9e565b80156109f95780601f106109ce576101008083540402835291602001916109f9565b820191906000526020600020905b8154815290600101906020018083116109dc57829003601f168201915b5050505050905090565b600080600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050905060008114610aeb57600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600182610a9f9190612dc1565b81548110610ab057610aaf612df5565b5b9060005260206000200160000160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16610aee565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16915050919050565b610b1e828261191a565b5050565b600080610b2d61100c565b90506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905083811015610bf3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bea90612e96565b60405180910390fd5b610c008286868403611014565b60019250505092915050565b600080610c1761100c565b9050610c2481858561126b565b600191505092915050565b83421115610c72576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6990612f02565b60405180910390fd5b6000610cd4610ccc7fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf898989604051602001610cb19493929190612f22565b60405160208183030381529060405280519060200120611938565b858585611952565b9050610cdf8161197d565b8614610d20576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d1790612fb3565b60405180910390fd5b610d2a818861179f565b50505050505050565b83421115610d76576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6d9061301f565b60405180910390fd5b60007f0000000000000000000000000000000000000000000000000000000000000000888888610da58c61197d565b89604051602001610dbb9695949392919061303f565b6040516020818303038152906040528051906020012090506000610dde82611938565b90506000610dee82878787611952565b90508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610e5e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e55906130ec565b60405180910390fd5b610e698a8a8a611014565b50505050505050505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610f046125fe565b600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208263ffffffff1681548110610f5b57610f5a612df5565b5b906000526020600020016040518060400160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1681525050905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611084576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161107b9061317e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110eb90613210565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516111d29190612815565b60405180910390a3505050565b60006111eb8484610e75565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146112655781811015611257576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161124e9061327c565b60405180910390fd5b6112648484848403611014565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156112db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112d29061330e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561134b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611342906133a0565b60405180910390fd5b6113568383836119db565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156113dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113d390613432565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461146f9190612cff565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516114d39190612815565b60405180910390a36114e68484846119e0565b50505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614801561156857507f000000000000000000000000000000000000000000000000000000000000000046145b15611595577f00000000000000000000000000000000000000000000000000000000000000009050611603565b6116007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a0b565b90505b90565b6000808380549050905060005b818110156116855760006116278284611a45565b90508486828154811061163d5761163c612df5565b5b9060005260206000200160000160009054906101000a900463ffffffff1663ffffffff16111561166f5780925061167f565b60018161167c9190612cff565b91505b50611613565b600082146116e7578460018361169b9190612dc1565b815481106116ac576116ab612df5565b5b9060005260206000200160000160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166116ea565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169250505092915050565b61171c8282611a6b565b611724611bcb565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1661174a61060d565b111561178b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611782906134c4565b60405180910390fd5b6117996008611bef83611c05565b50505050565b60006117aa836107b2565b905060006117b784610883565b905082600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f60405160405180910390a46118b3828483611e7d565b50505050565b600063ffffffff8016821115611904576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118fb90613556565b60405180910390fd5b819050919050565b600081600001549050919050565b6119248282612076565b611932600861224d83611c05565b50505050565b600061194b6119456114ec565b83612263565b9050919050565b600080600061196387878787612296565b91509150611970816123a3565b8192505050949350505050565b600080600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506119ca8161190c565b91506119d581612578565b50919050565b505050565b6119eb83838361258e565b611a066119f7846107b2565b611a00846107b2565b83611e7d565b505050565b60008383834630604051602001611a26959493929190613576565b6040516020818303038152906040528051906020012090509392505050565b60006002828418611a5691906135f8565b828416611a639190612cff565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611adb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ad290613675565b60405180910390fd5b611ae7600083836119db565b8060026000828254611af99190612cff565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611b4e9190612cff565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611bb39190612815565b60405180910390a3611bc7600083836119e0565b5050565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b60008183611bfd9190612cff565b905092915050565b60008060008580549050905060008114611c735785600182611c279190612dc1565b81548110611c3857611c37612df5565b5b9060005260206000200160000160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16611c76565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169250611ca483858763ffffffff16565b9150600081118015611cf757504386600183611cc09190612dc1565b81548110611cd157611cd0612df5565b5b9060005260206000200160000160009054906101000a900463ffffffff1663ffffffff16145b15611d8457611d0582612593565b86600183611d139190612dc1565b81548110611d2457611d23612df5565b5b9060005260206000200160000160046101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff160217905550611e74565b856040518060400160405280611d99436118b9565b63ffffffff168152602001611dad85612593565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548163ffffffff021916908363ffffffff16021790555060208201518160000160046101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555050505b50935093915050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015611eb95750600081115b1561207157600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611f9757600080611f40600760008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061224d85611c05565b915091508473ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611f8c929190613695565b60405180910390a250505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161461207057600080612019600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611bef85611c05565b915091508373ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051612065929190613695565b60405180910390a250505b5b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156120e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120dd90613730565b60405180910390fd5b6120f2826000836119db565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015612178576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161216f906137c2565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282546121cf9190612dc1565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516122349190612815565b60405180910390a3612248836000846119e0565b505050565b6000818361225b9190612dc1565b905092915050565b6000828260405160200161227892919061385a565b60405160208183030381529060405280519060200120905092915050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c11156122d157600060039150915061239a565b601b8560ff16141580156122e95750601c8560ff1614155b156122fb57600060049150915061239a565b6000600187878787604051600081526020016040526040516123209493929190613891565b6020604051602081039080840390855afa158015612342573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156123915760006001925092505061239a565b80600092509250505b94509492505050565b600060048111156123b7576123b66138d6565b5b8160048111156123ca576123c96138d6565b5b14156123d557612575565b600160048111156123e9576123e86138d6565b5b8160048111156123fc576123fb6138d6565b5b141561243d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161243490613951565b60405180910390fd5b60026004811115612451576124506138d6565b5b816004811115612464576124636138d6565b5b14156124a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161249c906139bd565b60405180910390fd5b600360048111156124b9576124b86138d6565b5b8160048111156124cc576124cb6138d6565b5b141561250d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161250490613a4f565b60405180910390fd5b6004808111156125205761251f6138d6565b5b816004811115612533576125326138d6565b5b1415612574576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161256b90613ae1565b60405180910390fd5b5b50565b6001816000016000828254019250508190555050565b505050565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff80168211156125f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125ed90613b73565b60405180910390fd5b819050919050565b6040518060400160405280600063ffffffff16815260200160007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1681525090565b600081519050919050565b600082825260208201905092915050565b60005b8381101561267657808201518184015260208101905061265b565b83811115612685576000848401525b50505050565b6000601f19601f8301169050919050565b60006126a78261263c565b6126b18185612647565b93506126c1818560208601612658565b6126ca8161268b565b840191505092915050565b600060208201905081810360008301526126ef818461269c565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000612727826126fc565b9050919050565b6127378161271c565b811461274257600080fd5b50565b6000813590506127548161272e565b92915050565b6000819050919050565b61276d8161275a565b811461277857600080fd5b50565b60008135905061278a81612764565b92915050565b600080604083850312156127a7576127a66126f7565b5b60006127b585828601612745565b92505060206127c68582860161277b565b9150509250929050565b60008115159050919050565b6127e5816127d0565b82525050565b600060208201905061280060008301846127dc565b92915050565b61280f8161275a565b82525050565b600060208201905061282a6000830184612806565b92915050565b600080600060608486031215612849576128486126f7565b5b600061285786828701612745565b935050602061286886828701612745565b92505060406128798682870161277b565b9150509250925092565b600060ff82169050919050565b61289981612883565b82525050565b60006020820190506128b46000830184612890565b92915050565b6000819050919050565b6128cd816128ba565b82525050565b60006020820190506128e860008301846128c4565b92915050565b600060208284031215612904576129036126f7565b5b600061291284828501612745565b91505092915050565b6129248161271c565b82525050565b600060208201905061293f600083018461291b565b92915050565b600063ffffffff82169050919050565b61295e81612945565b82525050565b60006020820190506129796000830184612955565b92915050565b600060208284031215612995576129946126f7565b5b60006129a38482850161277b565b91505092915050565b6129b581612883565b81146129c057600080fd5b50565b6000813590506129d2816129ac565b92915050565b6129e1816128ba565b81146129ec57600080fd5b50565b6000813590506129fe816129d8565b92915050565b60008060008060008060c08789031215612a2157612a206126f7565b5b6000612a2f89828a01612745565b9650506020612a4089828a0161277b565b9550506040612a5189828a0161277b565b9450506060612a6289828a016129c3565b9350506080612a7389828a016129ef565b92505060a0612a8489828a016129ef565b9150509295509295509295565b600080600080600080600060e0888a031215612ab057612aaf6126f7565b5b6000612abe8a828b01612745565b9750506020612acf8a828b01612745565b9650506040612ae08a828b0161277b565b9550506060612af18a828b0161277b565b9450506080612b028a828b016129c3565b93505060a0612b138a828b016129ef565b92505060c0612b248a828b016129ef565b91505092959891949750929550565b60008060408385031215612b4a57612b496126f7565b5b6000612b5885828601612745565b9250506020612b6985828601612745565b9150509250929050565b612b7c81612945565b8114612b8757600080fd5b50565b600081359050612b9981612b73565b92915050565b60008060408385031215612bb657612bb56126f7565b5b6000612bc485828601612745565b9250506020612bd585828601612b8a565b9150509250929050565b612be881612945565b82525050565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff82169050919050565b612c1f81612bee565b82525050565b604082016000820151612c3b6000850182612bdf565b506020820151612c4e6020850182612c16565b50505050565b6000604082019050612c696000830184612c25565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680612cb657607f821691505b60208210811415612cca57612cc9612c6f565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612d0a8261275a565b9150612d158361275a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612d4a57612d49612cd0565b5b828201905092915050565b7f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e656400600082015250565b6000612d8b601f83612647565b9150612d9682612d55565b602082019050919050565b60006020820190508181036000830152612dba81612d7e565b9050919050565b6000612dcc8261275a565b9150612dd78361275a565b925082821015612dea57612de9612cd0565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000612e80602583612647565b9150612e8b82612e24565b604082019050919050565b60006020820190508181036000830152612eaf81612e73565b9050919050565b7f4552433230566f7465733a207369676e61747572652065787069726564000000600082015250565b6000612eec601d83612647565b9150612ef782612eb6565b602082019050919050565b60006020820190508181036000830152612f1b81612edf565b9050919050565b6000608082019050612f3760008301876128c4565b612f44602083018661291b565b612f516040830185612806565b612f5e6060830184612806565b95945050505050565b7f4552433230566f7465733a20696e76616c6964206e6f6e636500000000000000600082015250565b6000612f9d601983612647565b9150612fa882612f67565b602082019050919050565b60006020820190508181036000830152612fcc81612f90565b9050919050565b7f45524332305065726d69743a206578706972656420646561646c696e65000000600082015250565b6000613009601d83612647565b915061301482612fd3565b602082019050919050565b6000602082019050818103600083015261303881612ffc565b9050919050565b600060c08201905061305460008301896128c4565b613061602083018861291b565b61306e604083018761291b565b61307b6060830186612806565b6130886080830185612806565b61309560a0830184612806565b979650505050505050565b7f45524332305065726d69743a20696e76616c6964207369676e61747572650000600082015250565b60006130d6601e83612647565b91506130e1826130a0565b602082019050919050565b60006020820190508181036000830152613105816130c9565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000613168602483612647565b91506131738261310c565b604082019050919050565b600060208201905081810360008301526131978161315b565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006131fa602283612647565b91506132058261319e565b604082019050919050565b60006020820190508181036000830152613229816131ed565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000613266601d83612647565b915061327182613230565b602082019050919050565b6000602082019050818103600083015261329581613259565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006132f8602583612647565b91506133038261329c565b604082019050919050565b60006020820190508181036000830152613327816132eb565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b600061338a602383612647565b91506133958261332e565b604082019050919050565b600060208201905081810360008301526133b98161337d565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b600061341c602683612647565b9150613427826133c0565b604082019050919050565b6000602082019050818103600083015261344b8161340f565b9050919050565b7f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60008201527f766572666c6f77696e6720766f74657300000000000000000000000000000000602082015250565b60006134ae603083612647565b91506134b982613452565b604082019050919050565b600060208201905081810360008301526134dd816134a1565b9050919050565b7f53616665436173743a2076616c756520646f65736e27742066697420696e203360008201527f3220626974730000000000000000000000000000000000000000000000000000602082015250565b6000613540602683612647565b915061354b826134e4565b604082019050919050565b6000602082019050818103600083015261356f81613533565b9050919050565b600060a08201905061358b60008301886128c4565b61359860208301876128c4565b6135a560408301866128c4565b6135b26060830185612806565b6135bf608083018461291b565b9695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006136038261275a565b915061360e8361275a565b92508261361e5761361d6135c9565b5b828204905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600061365f601f83612647565b915061366a82613629565b602082019050919050565b6000602082019050818103600083015261368e81613652565b9050919050565b60006040820190506136aa6000830185612806565b6136b76020830184612806565b9392505050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b600061371a602183612647565b9150613725826136be565b604082019050919050565b600060208201905081810360008301526137498161370d565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b60006137ac602283612647565b91506137b782613750565b604082019050919050565b600060208201905081810360008301526137db8161379f565b9050919050565b600081905092915050565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b60006138236002836137e2565b915061382e826137ed565b600282019050919050565b6000819050919050565b61385461384f826128ba565b613839565b82525050565b600061386582613816565b91506138718285613843565b6020820191506138818284613843565b6020820191508190509392505050565b60006080820190506138a660008301876128c4565b6138b36020830186612890565b6138c060408301856128c4565b6138cd60608301846128c4565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b600061393b601883612647565b915061394682613905565b602082019050919050565b6000602082019050818103600083015261396a8161392e565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b60006139a7601f83612647565b91506139b282613971565b602082019050919050565b600060208201905081810360008301526139d68161399a565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000613a39602283612647565b9150613a44826139dd565b604082019050919050565b60006020820190508181036000830152613a6881613a2c565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202776272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000613acb602283612647565b9150613ad682613a6f565b604082019050919050565b60006020820190508181036000830152613afa81613abe565b9050919050565b7f53616665436173743a2076616c756520646f65736e27742066697420696e203260008201527f3234206269747300000000000000000000000000000000000000000000000000602082015250565b6000613b5d602783612647565b9150613b6882613b01565b604082019050919050565b60006020820190508181036000830152613b8c81613b50565b905091905056fea2646970667358221220eb73c0e3f7ff3b36d407ac175da1f61731299a6b5a9803f338ec02b068e941cd64736f6c63430008090033";
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
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ERC20VotesMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20VotesMock;
}
export {};

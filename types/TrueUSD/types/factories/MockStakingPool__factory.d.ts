import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockStakingPool } from "../MockStakingPool";
export declare class MockStakingPool__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_pool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockStakingPool>;
    getDeployTransaction(_pool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockStakingPool;
    connect(signer: Signer): MockStakingPool__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockStakingPool;
}

import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SushiTimelock } from "../SushiTimelock";
export declare class SushiTimelock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(admin_: string, delay_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SushiTimelock>;
    getDeployTransaction(admin_: string, delay_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SushiTimelock;
    connect(signer: Signer): SushiTimelock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SushiTimelock;
}

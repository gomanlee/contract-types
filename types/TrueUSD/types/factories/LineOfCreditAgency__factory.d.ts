import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LineOfCreditAgency } from "../LineOfCreditAgency";
export declare class LineOfCreditAgency__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<LineOfCreditAgency>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): LineOfCreditAgency;
    connect(signer: Signer): LineOfCreditAgency__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): LineOfCreditAgency;
}

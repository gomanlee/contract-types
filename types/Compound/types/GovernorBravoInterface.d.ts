import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace GovernorBravoInterface {
    type ReceiptStruct = {
        hasVoted: boolean;
        support: BigNumberish;
        votes: BigNumberish;
    };
    type ReceiptStructOutput = [boolean, number, BigNumber] & {
        hasVoted: boolean;
        support: number;
        votes: BigNumber;
    };
    type ProposalStruct = {
        id: BigNumberish;
        proposer: string;
        eta: BigNumberish;
        startBlock: BigNumberish;
        endBlock: BigNumberish;
        forVotes: BigNumberish;
        againstVotes: BigNumberish;
        abstainVotes: BigNumberish;
        canceled: boolean;
        executed: boolean;
    };
    type ProposalStructOutput = [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean
    ] & {
        id: BigNumber;
        proposer: string;
        eta: BigNumber;
        startBlock: BigNumber;
        endBlock: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
        abstainVotes: BigNumber;
        canceled: boolean;
        executed: boolean;
    };
}
export interface GovernorBravoInterfaceInterface extends utils.Interface {
    contractName: "GovernorBravoInterface";
    functions: {
        "getActions(uint256)": FunctionFragment;
        "getReceipt(uint256,address)": FunctionFragment;
        "proposals(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getActions", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getReceipt", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "proposals", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "getActions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReceipt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
    events: {};
}
export interface GovernorBravoInterface extends BaseContract {
    contractName: "GovernorBravoInterface";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GovernorBravoInterfaceInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        getActions(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[],
            string[],
            string[]
        ] & {
            targets: string[];
            values: BigNumber[];
            signatures: string[];
            calldatas: string[];
        }>;
        getReceipt(proposalId: BigNumberish, voter: string, overrides?: CallOverrides): Promise<[GovernorBravoInterface.ReceiptStructOutput]>;
        proposals(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[GovernorBravoInterface.ProposalStructOutput]>;
    };
    getActions(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[
        string[],
        BigNumber[],
        string[],
        string[]
    ] & {
        targets: string[];
        values: BigNumber[];
        signatures: string[];
        calldatas: string[];
    }>;
    getReceipt(proposalId: BigNumberish, voter: string, overrides?: CallOverrides): Promise<GovernorBravoInterface.ReceiptStructOutput>;
    proposals(proposalId: BigNumberish, overrides?: CallOverrides): Promise<GovernorBravoInterface.ProposalStructOutput>;
    callStatic: {
        getActions(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[],
            string[],
            string[]
        ] & {
            targets: string[];
            values: BigNumber[];
            signatures: string[];
            calldatas: string[];
        }>;
        getReceipt(proposalId: BigNumberish, voter: string, overrides?: CallOverrides): Promise<GovernorBravoInterface.ReceiptStructOutput>;
        proposals(proposalId: BigNumberish, overrides?: CallOverrides): Promise<GovernorBravoInterface.ProposalStructOutput>;
    };
    filters: {};
    estimateGas: {
        getActions(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getReceipt(proposalId: BigNumberish, voter: string, overrides?: CallOverrides): Promise<BigNumber>;
        proposals(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getActions(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReceipt(proposalId: BigNumberish, voter: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposals(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

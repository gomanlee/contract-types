import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface GovernorBravoDelegateStorageV2Interface extends utils.Interface {
    contractName: "GovernorBravoDelegateStorageV2";
    functions: {
        "admin()": FunctionFragment;
        "comp()": FunctionFragment;
        "implementation()": FunctionFragment;
        "initialProposalId()": FunctionFragment;
        "latestProposalIds(address)": FunctionFragment;
        "pendingAdmin()": FunctionFragment;
        "proposalCount()": FunctionFragment;
        "proposalThreshold()": FunctionFragment;
        "proposals(uint256)": FunctionFragment;
        "timelock()": FunctionFragment;
        "votingDelay()": FunctionFragment;
        "votingPeriod()": FunctionFragment;
        "whitelistAccountExpirations(address)": FunctionFragment;
        "whitelistGuardian()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "comp", values?: undefined): string;
    encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialProposalId", values?: undefined): string;
    encodeFunctionData(functionFragment: "latestProposalIds", values: [string]): string;
    encodeFunctionData(functionFragment: "pendingAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposalCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposalThreshold", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposals", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "timelock", values?: undefined): string;
    encodeFunctionData(functionFragment: "votingDelay", values?: undefined): string;
    encodeFunctionData(functionFragment: "votingPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "whitelistAccountExpirations", values: [string]): string;
    encodeFunctionData(functionFragment: "whitelistGuardian", values?: undefined): string;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "comp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialProposalId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestProposalIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "timelock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votingDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votingPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistAccountExpirations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistGuardian", data: BytesLike): Result;
    events: {};
}
export interface GovernorBravoDelegateStorageV2 extends BaseContract {
    contractName: "GovernorBravoDelegateStorageV2";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GovernorBravoDelegateStorageV2Interface;
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
        admin(overrides?: CallOverrides): Promise<[string]>;
        comp(overrides?: CallOverrides): Promise<[string]>;
        implementation(overrides?: CallOverrides): Promise<[string]>;
        initialProposalId(overrides?: CallOverrides): Promise<[BigNumber]>;
        latestProposalIds(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        pendingAdmin(overrides?: CallOverrides): Promise<[string]>;
        proposalCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        proposalThreshold(overrides?: CallOverrides): Promise<[BigNumber]>;
        proposals(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
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
        }>;
        timelock(overrides?: CallOverrides): Promise<[string]>;
        votingDelay(overrides?: CallOverrides): Promise<[BigNumber]>;
        votingPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
        whitelistAccountExpirations(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        whitelistGuardian(overrides?: CallOverrides): Promise<[string]>;
    };
    admin(overrides?: CallOverrides): Promise<string>;
    comp(overrides?: CallOverrides): Promise<string>;
    implementation(overrides?: CallOverrides): Promise<string>;
    initialProposalId(overrides?: CallOverrides): Promise<BigNumber>;
    latestProposalIds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    pendingAdmin(overrides?: CallOverrides): Promise<string>;
    proposalCount(overrides?: CallOverrides): Promise<BigNumber>;
    proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;
    proposals(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
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
    }>;
    timelock(overrides?: CallOverrides): Promise<string>;
    votingDelay(overrides?: CallOverrides): Promise<BigNumber>;
    votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    whitelistAccountExpirations(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    whitelistGuardian(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        admin(overrides?: CallOverrides): Promise<string>;
        comp(overrides?: CallOverrides): Promise<string>;
        implementation(overrides?: CallOverrides): Promise<string>;
        initialProposalId(overrides?: CallOverrides): Promise<BigNumber>;
        latestProposalIds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        pendingAdmin(overrides?: CallOverrides): Promise<string>;
        proposalCount(overrides?: CallOverrides): Promise<BigNumber>;
        proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        proposals(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
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
        }>;
        timelock(overrides?: CallOverrides): Promise<string>;
        votingDelay(overrides?: CallOverrides): Promise<BigNumber>;
        votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        whitelistAccountExpirations(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        whitelistGuardian(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        comp(overrides?: CallOverrides): Promise<BigNumber>;
        implementation(overrides?: CallOverrides): Promise<BigNumber>;
        initialProposalId(overrides?: CallOverrides): Promise<BigNumber>;
        latestProposalIds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        pendingAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        proposalCount(overrides?: CallOverrides): Promise<BigNumber>;
        proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        proposals(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        timelock(overrides?: CallOverrides): Promise<BigNumber>;
        votingDelay(overrides?: CallOverrides): Promise<BigNumber>;
        votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        whitelistAccountExpirations(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        whitelistGuardian(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        comp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialProposalId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        latestProposalIds(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposals(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        timelock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        votingDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        votingPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        whitelistAccountExpirations(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        whitelistGuardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

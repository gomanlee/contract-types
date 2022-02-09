import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface GovernorBravoDelegatorInterface extends utils.Interface {
    contractName: "GovernorBravoDelegator";
    functions: {
        "_setImplementation(address)": FunctionFragment;
        "admin()": FunctionFragment;
        "implementation()": FunctionFragment;
        "pendingAdmin()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "_setImplementation", values: [string]): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingAdmin", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_setImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingAdmin", data: BytesLike): Result;
    events: {
        "NewAdmin(address,address)": EventFragment;
        "NewImplementation(address,address)": EventFragment;
        "NewPendingAdmin(address,address)": EventFragment;
        "ProposalCanceled(uint256)": EventFragment;
        "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)": EventFragment;
        "ProposalExecuted(uint256)": EventFragment;
        "ProposalQueued(uint256,uint256)": EventFragment;
        "ProposalThresholdSet(uint256,uint256)": EventFragment;
        "VoteCast(address,uint256,uint8,uint256,string)": EventFragment;
        "VotingDelaySet(uint256,uint256)": EventFragment;
        "VotingPeriodSet(uint256,uint256)": EventFragment;
        "WhitelistAccountExpirationSet(address,uint256)": EventFragment;
        "WhitelistGuardianSet(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "NewAdmin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewImplementation"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewPendingAdmin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalQueued"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalThresholdSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VoteCast"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VotingDelaySet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VotingPeriodSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WhitelistAccountExpirationSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WhitelistGuardianSet"): EventFragment;
}
export declare type NewAdminEvent = TypedEvent<[
    string,
    string
], {
    oldAdmin: string;
    newAdmin: string;
}>;
export declare type NewAdminEventFilter = TypedEventFilter<NewAdminEvent>;
export declare type NewImplementationEvent = TypedEvent<[
    string,
    string
], {
    oldImplementation: string;
    newImplementation: string;
}>;
export declare type NewImplementationEventFilter = TypedEventFilter<NewImplementationEvent>;
export declare type NewPendingAdminEvent = TypedEvent<[
    string,
    string
], {
    oldPendingAdmin: string;
    newPendingAdmin: string;
}>;
export declare type NewPendingAdminEventFilter = TypedEventFilter<NewPendingAdminEvent>;
export declare type ProposalCanceledEvent = TypedEvent<[BigNumber], {
    id: BigNumber;
}>;
export declare type ProposalCanceledEventFilter = TypedEventFilter<ProposalCanceledEvent>;
export declare type ProposalCreatedEvent = TypedEvent<[
    BigNumber,
    string,
    string[],
    BigNumber[],
    string[],
    string[],
    BigNumber,
    BigNumber,
    string
], {
    id: BigNumber;
    proposer: string;
    targets: string[];
    values: BigNumber[];
    signatures: string[];
    calldatas: string[];
    startBlock: BigNumber;
    endBlock: BigNumber;
    description: string;
}>;
export declare type ProposalCreatedEventFilter = TypedEventFilter<ProposalCreatedEvent>;
export declare type ProposalExecutedEvent = TypedEvent<[BigNumber], {
    id: BigNumber;
}>;
export declare type ProposalExecutedEventFilter = TypedEventFilter<ProposalExecutedEvent>;
export declare type ProposalQueuedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    id: BigNumber;
    eta: BigNumber;
}>;
export declare type ProposalQueuedEventFilter = TypedEventFilter<ProposalQueuedEvent>;
export declare type ProposalThresholdSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    oldProposalThreshold: BigNumber;
    newProposalThreshold: BigNumber;
}>;
export declare type ProposalThresholdSetEventFilter = TypedEventFilter<ProposalThresholdSetEvent>;
export declare type VoteCastEvent = TypedEvent<[
    string,
    BigNumber,
    number,
    BigNumber,
    string
], {
    voter: string;
    proposalId: BigNumber;
    support: number;
    votes: BigNumber;
    reason: string;
}>;
export declare type VoteCastEventFilter = TypedEventFilter<VoteCastEvent>;
export declare type VotingDelaySetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    oldVotingDelay: BigNumber;
    newVotingDelay: BigNumber;
}>;
export declare type VotingDelaySetEventFilter = TypedEventFilter<VotingDelaySetEvent>;
export declare type VotingPeriodSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    oldVotingPeriod: BigNumber;
    newVotingPeriod: BigNumber;
}>;
export declare type VotingPeriodSetEventFilter = TypedEventFilter<VotingPeriodSetEvent>;
export declare type WhitelistAccountExpirationSetEvent = TypedEvent<[
    string,
    BigNumber
], {
    account: string;
    expiration: BigNumber;
}>;
export declare type WhitelistAccountExpirationSetEventFilter = TypedEventFilter<WhitelistAccountExpirationSetEvent>;
export declare type WhitelistGuardianSetEvent = TypedEvent<[
    string,
    string
], {
    oldGuardian: string;
    newGuardian: string;
}>;
export declare type WhitelistGuardianSetEventFilter = TypedEventFilter<WhitelistGuardianSetEvent>;
export interface GovernorBravoDelegator extends BaseContract {
    contractName: "GovernorBravoDelegator";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GovernorBravoDelegatorInterface;
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
        _setImplementation(implementation_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        admin(overrides?: CallOverrides): Promise<[string]>;
        implementation(overrides?: CallOverrides): Promise<[string]>;
        pendingAdmin(overrides?: CallOverrides): Promise<[string]>;
    };
    _setImplementation(implementation_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    admin(overrides?: CallOverrides): Promise<string>;
    implementation(overrides?: CallOverrides): Promise<string>;
    pendingAdmin(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        _setImplementation(implementation_: string, overrides?: CallOverrides): Promise<void>;
        admin(overrides?: CallOverrides): Promise<string>;
        implementation(overrides?: CallOverrides): Promise<string>;
        pendingAdmin(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "NewAdmin(address,address)"(oldAdmin?: null, newAdmin?: null): NewAdminEventFilter;
        NewAdmin(oldAdmin?: null, newAdmin?: null): NewAdminEventFilter;
        "NewImplementation(address,address)"(oldImplementation?: null, newImplementation?: null): NewImplementationEventFilter;
        NewImplementation(oldImplementation?: null, newImplementation?: null): NewImplementationEventFilter;
        "NewPendingAdmin(address,address)"(oldPendingAdmin?: null, newPendingAdmin?: null): NewPendingAdminEventFilter;
        NewPendingAdmin(oldPendingAdmin?: null, newPendingAdmin?: null): NewPendingAdminEventFilter;
        "ProposalCanceled(uint256)"(id?: null): ProposalCanceledEventFilter;
        ProposalCanceled(id?: null): ProposalCanceledEventFilter;
        "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)"(id?: null, proposer?: null, targets?: null, values?: null, signatures?: null, calldatas?: null, startBlock?: null, endBlock?: null, description?: null): ProposalCreatedEventFilter;
        ProposalCreated(id?: null, proposer?: null, targets?: null, values?: null, signatures?: null, calldatas?: null, startBlock?: null, endBlock?: null, description?: null): ProposalCreatedEventFilter;
        "ProposalExecuted(uint256)"(id?: null): ProposalExecutedEventFilter;
        ProposalExecuted(id?: null): ProposalExecutedEventFilter;
        "ProposalQueued(uint256,uint256)"(id?: null, eta?: null): ProposalQueuedEventFilter;
        ProposalQueued(id?: null, eta?: null): ProposalQueuedEventFilter;
        "ProposalThresholdSet(uint256,uint256)"(oldProposalThreshold?: null, newProposalThreshold?: null): ProposalThresholdSetEventFilter;
        ProposalThresholdSet(oldProposalThreshold?: null, newProposalThreshold?: null): ProposalThresholdSetEventFilter;
        "VoteCast(address,uint256,uint8,uint256,string)"(voter?: string | null, proposalId?: null, support?: null, votes?: null, reason?: null): VoteCastEventFilter;
        VoteCast(voter?: string | null, proposalId?: null, support?: null, votes?: null, reason?: null): VoteCastEventFilter;
        "VotingDelaySet(uint256,uint256)"(oldVotingDelay?: null, newVotingDelay?: null): VotingDelaySetEventFilter;
        VotingDelaySet(oldVotingDelay?: null, newVotingDelay?: null): VotingDelaySetEventFilter;
        "VotingPeriodSet(uint256,uint256)"(oldVotingPeriod?: null, newVotingPeriod?: null): VotingPeriodSetEventFilter;
        VotingPeriodSet(oldVotingPeriod?: null, newVotingPeriod?: null): VotingPeriodSetEventFilter;
        "WhitelistAccountExpirationSet(address,uint256)"(account?: null, expiration?: null): WhitelistAccountExpirationSetEventFilter;
        WhitelistAccountExpirationSet(account?: null, expiration?: null): WhitelistAccountExpirationSetEventFilter;
        "WhitelistGuardianSet(address,address)"(oldGuardian?: null, newGuardian?: null): WhitelistGuardianSetEventFilter;
        WhitelistGuardianSet(oldGuardian?: null, newGuardian?: null): WhitelistGuardianSetEventFilter;
    };
    estimateGas: {
        _setImplementation(implementation_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        implementation(overrides?: CallOverrides): Promise<BigNumber>;
        pendingAdmin(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _setImplementation(implementation_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

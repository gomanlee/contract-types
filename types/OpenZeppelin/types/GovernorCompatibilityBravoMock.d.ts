import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace IGovernorCompatibilityBravo {
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
}
export interface GovernorCompatibilityBravoMockInterface extends utils.Interface {
    contractName: "GovernorCompatibilityBravoMock";
    functions: {
        "BALLOT_TYPEHASH()": FunctionFragment;
        "COUNTING_MODE()": FunctionFragment;
        "__acceptAdmin()": FunctionFragment;
        "cancel(uint256)": FunctionFragment;
        "castVote(uint256,uint8)": FunctionFragment;
        "castVoteBySig(uint256,uint8,uint8,bytes32,bytes32)": FunctionFragment;
        "castVoteWithReason(uint256,uint8,string)": FunctionFragment;
        "execute(address[],uint256[],bytes[],bytes32)": FunctionFragment;
        "getActions(uint256)": FunctionFragment;
        "getReceipt(uint256,address)": FunctionFragment;
        "getVotes(address,uint256)": FunctionFragment;
        "hasVoted(uint256,address)": FunctionFragment;
        "hashProposal(address[],uint256[],bytes[],bytes32)": FunctionFragment;
        "name()": FunctionFragment;
        "proposalDeadline(uint256)": FunctionFragment;
        "proposalEta(uint256)": FunctionFragment;
        "proposalSnapshot(uint256)": FunctionFragment;
        "proposalThreshold()": FunctionFragment;
        "proposals(uint256)": FunctionFragment;
        "propose(address[],uint256[],bytes[],string)": FunctionFragment;
        "queue(address[],uint256[],bytes[],bytes32)": FunctionFragment;
        "quorum(uint256)": FunctionFragment;
        "quorumVotes()": FunctionFragment;
        "relay(address,uint256,bytes)": FunctionFragment;
        "setProposalThreshold(uint256)": FunctionFragment;
        "setVotingDelay(uint256)": FunctionFragment;
        "setVotingPeriod(uint256)": FunctionFragment;
        "state(uint256)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "timelock()": FunctionFragment;
        "token()": FunctionFragment;
        "updateTimelock(address)": FunctionFragment;
        "version()": FunctionFragment;
        "votingDelay()": FunctionFragment;
        "votingPeriod()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "BALLOT_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "COUNTING_MODE", values?: undefined): string;
    encodeFunctionData(functionFragment: "__acceptAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "cancel", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "castVote", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "castVoteBySig", values: [BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "castVoteWithReason", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "execute", values: [string[], BigNumberish[], BytesLike[], BytesLike]): string;
    encodeFunctionData(functionFragment: "getActions", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getReceipt", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "getVotes", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "hasVoted", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "hashProposal", values: [string[], BigNumberish[], BytesLike[], BytesLike]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposalDeadline", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "proposalEta", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "proposalSnapshot", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "proposalThreshold", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposals", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "propose", values: [string[], BigNumberish[], BytesLike[], string]): string;
    encodeFunctionData(functionFragment: "queue", values: [string[], BigNumberish[], BytesLike[], BytesLike]): string;
    encodeFunctionData(functionFragment: "quorum", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "quorumVotes", values?: undefined): string;
    encodeFunctionData(functionFragment: "relay", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "setProposalThreshold", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setVotingDelay", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setVotingPeriod", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "state", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "timelock", values?: undefined): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateTimelock", values: [string]): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    encodeFunctionData(functionFragment: "votingDelay", values?: undefined): string;
    encodeFunctionData(functionFragment: "votingPeriod", values?: undefined): string;
    decodeFunctionResult(functionFragment: "BALLOT_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "COUNTING_MODE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "__acceptAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castVoteBySig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castVoteWithReason", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getActions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReceipt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasVoted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hashProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalDeadline", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalEta", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalSnapshot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "propose", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quorum", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quorumVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setProposalThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVotingDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVotingPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "timelock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTimelock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votingDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votingPeriod", data: BytesLike): Result;
    events: {
        "ProposalCanceled(uint256)": EventFragment;
        "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)": EventFragment;
        "ProposalExecuted(uint256)": EventFragment;
        "ProposalQueued(uint256,uint256)": EventFragment;
        "ProposalThresholdSet(uint256,uint256)": EventFragment;
        "TimelockChange(address,address)": EventFragment;
        "VoteCast(address,uint256,uint8,uint256,string)": EventFragment;
        "VotingDelaySet(uint256,uint256)": EventFragment;
        "VotingPeriodSet(uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ProposalCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalQueued"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalThresholdSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TimelockChange"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VoteCast"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VotingDelaySet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VotingPeriodSet"): EventFragment;
}
export declare type ProposalCanceledEvent = TypedEvent<[
    BigNumber
], {
    proposalId: BigNumber;
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
    proposalId: BigNumber;
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
export declare type ProposalExecutedEvent = TypedEvent<[
    BigNumber
], {
    proposalId: BigNumber;
}>;
export declare type ProposalExecutedEventFilter = TypedEventFilter<ProposalExecutedEvent>;
export declare type ProposalQueuedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    proposalId: BigNumber;
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
export declare type TimelockChangeEvent = TypedEvent<[
    string,
    string
], {
    oldTimelock: string;
    newTimelock: string;
}>;
export declare type TimelockChangeEventFilter = TypedEventFilter<TimelockChangeEvent>;
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
    weight: BigNumber;
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
export interface GovernorCompatibilityBravoMock extends BaseContract {
    contractName: "GovernorCompatibilityBravoMock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GovernorCompatibilityBravoMockInterface;
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
        BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        COUNTING_MODE(overrides?: CallOverrides): Promise<[string]>;
        __acceptAdmin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "cancel(uint256)"(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "cancel(address[],uint256[],bytes[],bytes32)"(targets: string[], values: BigNumberish[], calldatas: BytesLike[], salt: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        castVote(proposalId: BigNumberish, support: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        castVoteBySig(proposalId: BigNumberish, support: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        castVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "execute(address[],uint256[],bytes[],bytes32)"(targets: string[], values: BigNumberish[], calldatas: BytesLike[], salt: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "execute(uint256)"(proposalId: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
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
        getReceipt(proposalId: BigNumberish, voter: string, overrides?: CallOverrides): Promise<[IGovernorCompatibilityBravo.ReceiptStructOutput]>;
        getVotes(account: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        hasVoted(proposalId: BigNumberish, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        hashProposal(targets: string[], values: BigNumberish[], calldatas: BytesLike[], descriptionHash: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        proposalDeadline(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        proposalEta(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        proposalSnapshot(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        proposalThreshold(overrides?: CallOverrides): Promise<[BigNumber]>;
        proposals(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[
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
        "propose(address[],uint256[],bytes[],string)"(targets: string[], values: BigNumberish[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "propose(address[],uint256[],string[],bytes[],string)"(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "queue(address[],uint256[],bytes[],bytes32)"(targets: string[], values: BigNumberish[], calldatas: BytesLike[], salt: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "queue(uint256)"(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        quorum(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        quorumVotes(overrides?: CallOverrides): Promise<[BigNumber]>;
        relay(target: string, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setProposalThreshold(newProposalThreshold: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setVotingDelay(newVotingDelay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setVotingPeriod(newVotingPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[number]>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        timelock(overrides?: CallOverrides): Promise<[string]>;
        token(overrides?: CallOverrides): Promise<[string]>;
        updateTimelock(newTimelock: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        version(overrides?: CallOverrides): Promise<[string]>;
        votingDelay(overrides?: CallOverrides): Promise<[BigNumber]>;
        votingPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    COUNTING_MODE(overrides?: CallOverrides): Promise<string>;
    __acceptAdmin(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "cancel(uint256)"(proposalId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "cancel(address[],uint256[],bytes[],bytes32)"(targets: string[], values: BigNumberish[], calldatas: BytesLike[], salt: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    castVote(proposalId: BigNumberish, support: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    castVoteBySig(proposalId: BigNumberish, support: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    castVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "execute(address[],uint256[],bytes[],bytes32)"(targets: string[], values: BigNumberish[], calldatas: BytesLike[], salt: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "execute(uint256)"(proposalId: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
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
    getReceipt(proposalId: BigNumberish, voter: string, overrides?: CallOverrides): Promise<IGovernorCompatibilityBravo.ReceiptStructOutput>;
    getVotes(account: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    hasVoted(proposalId: BigNumberish, account: string, overrides?: CallOverrides): Promise<boolean>;
    hashProposal(targets: string[], values: BigNumberish[], calldatas: BytesLike[], descriptionHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    name(overrides?: CallOverrides): Promise<string>;
    proposalDeadline(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    proposalEta(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    proposalSnapshot(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;
    proposals(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[
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
    "propose(address[],uint256[],bytes[],string)"(targets: string[], values: BigNumberish[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "propose(address[],uint256[],string[],bytes[],string)"(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "queue(address[],uint256[],bytes[],bytes32)"(targets: string[], values: BigNumberish[], calldatas: BytesLike[], salt: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "queue(uint256)"(proposalId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    quorum(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    quorumVotes(overrides?: CallOverrides): Promise<BigNumber>;
    relay(target: string, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setProposalThreshold(newProposalThreshold: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setVotingDelay(newVotingDelay: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setVotingPeriod(newVotingPeriod: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<number>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    timelock(overrides?: CallOverrides): Promise<string>;
    token(overrides?: CallOverrides): Promise<string>;
    updateTimelock(newTimelock: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    version(overrides?: CallOverrides): Promise<string>;
    votingDelay(overrides?: CallOverrides): Promise<BigNumber>;
    votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        COUNTING_MODE(overrides?: CallOverrides): Promise<string>;
        __acceptAdmin(overrides?: CallOverrides): Promise<void>;
        "cancel(uint256)"(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "cancel(address[],uint256[],bytes[],bytes32)"(targets: string[], values: BigNumberish[], calldatas: BytesLike[], salt: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        castVote(proposalId: BigNumberish, support: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        castVoteBySig(proposalId: BigNumberish, support: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        castVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: CallOverrides): Promise<BigNumber>;
        "execute(address[],uint256[],bytes[],bytes32)"(targets: string[], values: BigNumberish[], calldatas: BytesLike[], salt: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "execute(uint256)"(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;
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
        getReceipt(proposalId: BigNumberish, voter: string, overrides?: CallOverrides): Promise<IGovernorCompatibilityBravo.ReceiptStructOutput>;
        getVotes(account: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        hasVoted(proposalId: BigNumberish, account: string, overrides?: CallOverrides): Promise<boolean>;
        hashProposal(targets: string[], values: BigNumberish[], calldatas: BytesLike[], descriptionHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        proposalDeadline(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        proposalEta(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        proposalSnapshot(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        proposals(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[
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
        "propose(address[],uint256[],bytes[],string)"(targets: string[], values: BigNumberish[], calldatas: BytesLike[], description: string, overrides?: CallOverrides): Promise<BigNumber>;
        "propose(address[],uint256[],string[],bytes[],string)"(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: CallOverrides): Promise<BigNumber>;
        "queue(address[],uint256[],bytes[],bytes32)"(targets: string[], values: BigNumberish[], calldatas: BytesLike[], salt: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "queue(uint256)"(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        quorum(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        quorumVotes(overrides?: CallOverrides): Promise<BigNumber>;
        relay(target: string, value: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        setProposalThreshold(newProposalThreshold: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setVotingDelay(newVotingDelay: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setVotingPeriod(newVotingPeriod: BigNumberish, overrides?: CallOverrides): Promise<void>;
        state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<number>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        timelock(overrides?: CallOverrides): Promise<string>;
        token(overrides?: CallOverrides): Promise<string>;
        updateTimelock(newTimelock: string, overrides?: CallOverrides): Promise<void>;
        version(overrides?: CallOverrides): Promise<string>;
        votingDelay(overrides?: CallOverrides): Promise<BigNumber>;
        votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "ProposalCanceled(uint256)"(proposalId?: null): ProposalCanceledEventFilter;
        ProposalCanceled(proposalId?: null): ProposalCanceledEventFilter;
        "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)"(proposalId?: null, proposer?: null, targets?: null, values?: null, signatures?: null, calldatas?: null, startBlock?: null, endBlock?: null, description?: null): ProposalCreatedEventFilter;
        ProposalCreated(proposalId?: null, proposer?: null, targets?: null, values?: null, signatures?: null, calldatas?: null, startBlock?: null, endBlock?: null, description?: null): ProposalCreatedEventFilter;
        "ProposalExecuted(uint256)"(proposalId?: null): ProposalExecutedEventFilter;
        ProposalExecuted(proposalId?: null): ProposalExecutedEventFilter;
        "ProposalQueued(uint256,uint256)"(proposalId?: null, eta?: null): ProposalQueuedEventFilter;
        ProposalQueued(proposalId?: null, eta?: null): ProposalQueuedEventFilter;
        "ProposalThresholdSet(uint256,uint256)"(oldProposalThreshold?: null, newProposalThreshold?: null): ProposalThresholdSetEventFilter;
        ProposalThresholdSet(oldProposalThreshold?: null, newProposalThreshold?: null): ProposalThresholdSetEventFilter;
        "TimelockChange(address,address)"(oldTimelock?: null, newTimelock?: null): TimelockChangeEventFilter;
        TimelockChange(oldTimelock?: null, newTimelock?: null): TimelockChangeEventFilter;
        "VoteCast(address,uint256,uint8,uint256,string)"(voter?: string | null, proposalId?: null, support?: null, weight?: null, reason?: null): VoteCastEventFilter;
        VoteCast(voter?: string | null, proposalId?: null, support?: null, weight?: null, reason?: null): VoteCastEventFilter;
        "VotingDelaySet(uint256,uint256)"(oldVotingDelay?: null, newVotingDelay?: null): VotingDelaySetEventFilter;
        VotingDelaySet(oldVotingDelay?: null, newVotingDelay?: null): VotingDelaySetEventFilter;
        "VotingPeriodSet(uint256,uint256)"(oldVotingPeriod?: null, newVotingPeriod?: null): VotingPeriodSetEventFilter;
        VotingPeriodSet(oldVotingPeriod?: null, newVotingPeriod?: null): VotingPeriodSetEventFilter;
    };
    estimateGas: {
        BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        COUNTING_MODE(overrides?: CallOverrides): Promise<BigNumber>;
        __acceptAdmin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "cancel(uint256)"(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "cancel(address[],uint256[],bytes[],bytes32)"(targets: string[], values: BigNumberish[], calldatas: BytesLike[], salt: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        castVote(proposalId: BigNumberish, support: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        castVoteBySig(proposalId: BigNumberish, support: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        castVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "execute(address[],uint256[],bytes[],bytes32)"(targets: string[], values: BigNumberish[], calldatas: BytesLike[], salt: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "execute(uint256)"(proposalId: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getActions(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getReceipt(proposalId: BigNumberish, voter: string, overrides?: CallOverrides): Promise<BigNumber>;
        getVotes(account: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        hasVoted(proposalId: BigNumberish, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        hashProposal(targets: string[], values: BigNumberish[], calldatas: BytesLike[], descriptionHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        proposalDeadline(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        proposalEta(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        proposalSnapshot(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        proposals(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "propose(address[],uint256[],bytes[],string)"(targets: string[], values: BigNumberish[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "propose(address[],uint256[],string[],bytes[],string)"(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "queue(address[],uint256[],bytes[],bytes32)"(targets: string[], values: BigNumberish[], calldatas: BytesLike[], salt: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "queue(uint256)"(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        quorum(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        quorumVotes(overrides?: CallOverrides): Promise<BigNumber>;
        relay(target: string, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setProposalThreshold(newProposalThreshold: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setVotingDelay(newVotingDelay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setVotingPeriod(newVotingPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        timelock(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        updateTimelock(newTimelock: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
        votingDelay(overrides?: CallOverrides): Promise<BigNumber>;
        votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        COUNTING_MODE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        __acceptAdmin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "cancel(uint256)"(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "cancel(address[],uint256[],bytes[],bytes32)"(targets: string[], values: BigNumberish[], calldatas: BytesLike[], salt: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        castVote(proposalId: BigNumberish, support: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        castVoteBySig(proposalId: BigNumberish, support: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        castVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "execute(address[],uint256[],bytes[],bytes32)"(targets: string[], values: BigNumberish[], calldatas: BytesLike[], salt: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "execute(uint256)"(proposalId: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getActions(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReceipt(proposalId: BigNumberish, voter: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVotes(account: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasVoted(proposalId: BigNumberish, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hashProposal(targets: string[], values: BigNumberish[], calldatas: BytesLike[], descriptionHash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalDeadline(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalEta(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalSnapshot(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposals(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "propose(address[],uint256[],bytes[],string)"(targets: string[], values: BigNumberish[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "propose(address[],uint256[],string[],bytes[],string)"(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "queue(address[],uint256[],bytes[],bytes32)"(targets: string[], values: BigNumberish[], calldatas: BytesLike[], salt: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "queue(uint256)"(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        quorum(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quorumVotes(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        relay(target: string, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setProposalThreshold(newProposalThreshold: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setVotingDelay(newVotingDelay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setVotingPeriod(newVotingPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        timelock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateTimelock(newTimelock: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        votingDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        votingPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

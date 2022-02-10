import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface VestingWalletInterface extends utils.Interface {
    contractName: "VestingWallet";
    functions: {
        "beneficiary()": FunctionFragment;
        "duration()": FunctionFragment;
        "release(address)": FunctionFragment;
        "released()": FunctionFragment;
        "start()": FunctionFragment;
        "vestedAmount(uint64)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "beneficiary", values?: undefined): string;
    encodeFunctionData(functionFragment: "duration", values?: undefined): string;
    encodeFunctionData(functionFragment: "release", values: [string]): string;
    encodeFunctionData(functionFragment: "released", values?: undefined): string;
    encodeFunctionData(functionFragment: "start", values?: undefined): string;
    encodeFunctionData(functionFragment: "vestedAmount", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "beneficiary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "duration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "released", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "start", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vestedAmount", data: BytesLike): Result;
    events: {
        "ERC20Released(address,uint256)": EventFragment;
        "EtherReleased(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ERC20Released"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EtherReleased"): EventFragment;
}
export declare type ERC20ReleasedEvent = TypedEvent<[
    string,
    BigNumber
], {
    token: string;
    amount: BigNumber;
}>;
export declare type ERC20ReleasedEventFilter = TypedEventFilter<ERC20ReleasedEvent>;
export declare type EtherReleasedEvent = TypedEvent<[BigNumber], {
    amount: BigNumber;
}>;
export declare type EtherReleasedEventFilter = TypedEventFilter<EtherReleasedEvent>;
export interface VestingWallet extends BaseContract {
    contractName: "VestingWallet";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: VestingWalletInterface;
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
        beneficiary(overrides?: CallOverrides): Promise<[string]>;
        duration(overrides?: CallOverrides): Promise<[BigNumber]>;
        "release(address)"(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "release()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "released()"(overrides?: CallOverrides): Promise<[BigNumber]>;
        "released(address)"(token: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        start(overrides?: CallOverrides): Promise<[BigNumber]>;
        "vestedAmount(uint64)"(timestamp: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        "vestedAmount(address,uint64)"(token: string, timestamp: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    beneficiary(overrides?: CallOverrides): Promise<string>;
    duration(overrides?: CallOverrides): Promise<BigNumber>;
    "release(address)"(token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "release()"(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "released()"(overrides?: CallOverrides): Promise<BigNumber>;
    "released(address)"(token: string, overrides?: CallOverrides): Promise<BigNumber>;
    start(overrides?: CallOverrides): Promise<BigNumber>;
    "vestedAmount(uint64)"(timestamp: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    "vestedAmount(address,uint64)"(token: string, timestamp: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        beneficiary(overrides?: CallOverrides): Promise<string>;
        duration(overrides?: CallOverrides): Promise<BigNumber>;
        "release(address)"(token: string, overrides?: CallOverrides): Promise<void>;
        "release()"(overrides?: CallOverrides): Promise<void>;
        "released()"(overrides?: CallOverrides): Promise<BigNumber>;
        "released(address)"(token: string, overrides?: CallOverrides): Promise<BigNumber>;
        start(overrides?: CallOverrides): Promise<BigNumber>;
        "vestedAmount(uint64)"(timestamp: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "vestedAmount(address,uint64)"(token: string, timestamp: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "ERC20Released(address,uint256)"(token?: string | null, amount?: null): ERC20ReleasedEventFilter;
        ERC20Released(token?: string | null, amount?: null): ERC20ReleasedEventFilter;
        "EtherReleased(uint256)"(amount?: null): EtherReleasedEventFilter;
        EtherReleased(amount?: null): EtherReleasedEventFilter;
    };
    estimateGas: {
        beneficiary(overrides?: CallOverrides): Promise<BigNumber>;
        duration(overrides?: CallOverrides): Promise<BigNumber>;
        "release(address)"(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "release()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "released()"(overrides?: CallOverrides): Promise<BigNumber>;
        "released(address)"(token: string, overrides?: CallOverrides): Promise<BigNumber>;
        start(overrides?: CallOverrides): Promise<BigNumber>;
        "vestedAmount(uint64)"(timestamp: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "vestedAmount(address,uint64)"(token: string, timestamp: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        beneficiary(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        duration(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "release(address)"(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "release()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "released()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "released(address)"(token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        start(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "vestedAmount(uint64)"(timestamp: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "vestedAmount(address,uint64)"(token: string, timestamp: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

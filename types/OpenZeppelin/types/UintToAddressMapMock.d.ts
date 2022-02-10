import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface UintToAddressMapMockInterface extends utils.Interface {
    contractName: "UintToAddressMapMock";
    functions: {
        "at(uint256)": FunctionFragment;
        "contains(uint256)": FunctionFragment;
        "get(uint256)": FunctionFragment;
        "getWithMessage(uint256,string)": FunctionFragment;
        "length()": FunctionFragment;
        "remove(uint256)": FunctionFragment;
        "set(uint256,address)": FunctionFragment;
        "tryGet(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "at", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "contains", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "get", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getWithMessage", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "length", values?: undefined): string;
    encodeFunctionData(functionFragment: "remove", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "set", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "tryGet", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "at", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWithMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "length", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "set", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tryGet", data: BytesLike): Result;
    events: {
        "OperationResult(bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OperationResult"): EventFragment;
}
export declare type OperationResultEvent = TypedEvent<[boolean], {
    result: boolean;
}>;
export declare type OperationResultEventFilter = TypedEventFilter<OperationResultEvent>;
export interface UintToAddressMapMock extends BaseContract {
    contractName: "UintToAddressMapMock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UintToAddressMapMockInterface;
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
        at(index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, string] & {
            key: BigNumber;
            value: string;
        }>;
        contains(key: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        get(key: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getWithMessage(key: BigNumberish, errorMessage: string, overrides?: CallOverrides): Promise<[string]>;
        length(overrides?: CallOverrides): Promise<[BigNumber]>;
        remove(key: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        set(key: BigNumberish, value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        tryGet(key: BigNumberish, overrides?: CallOverrides): Promise<[boolean, string]>;
    };
    at(index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, string] & {
        key: BigNumber;
        value: string;
    }>;
    contains(key: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    get(key: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getWithMessage(key: BigNumberish, errorMessage: string, overrides?: CallOverrides): Promise<string>;
    length(overrides?: CallOverrides): Promise<BigNumber>;
    remove(key: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    set(key: BigNumberish, value: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    tryGet(key: BigNumberish, overrides?: CallOverrides): Promise<[boolean, string]>;
    callStatic: {
        at(index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, string] & {
            key: BigNumber;
            value: string;
        }>;
        contains(key: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        get(key: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getWithMessage(key: BigNumberish, errorMessage: string, overrides?: CallOverrides): Promise<string>;
        length(overrides?: CallOverrides): Promise<BigNumber>;
        remove(key: BigNumberish, overrides?: CallOverrides): Promise<void>;
        set(key: BigNumberish, value: string, overrides?: CallOverrides): Promise<void>;
        tryGet(key: BigNumberish, overrides?: CallOverrides): Promise<[boolean, string]>;
    };
    filters: {
        "OperationResult(bool)"(result?: null): OperationResultEventFilter;
        OperationResult(result?: null): OperationResultEventFilter;
    };
    estimateGas: {
        at(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        contains(key: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        get(key: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getWithMessage(key: BigNumberish, errorMessage: string, overrides?: CallOverrides): Promise<BigNumber>;
        length(overrides?: CallOverrides): Promise<BigNumber>;
        remove(key: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        set(key: BigNumberish, value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        tryGet(key: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        at(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contains(key: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get(key: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWithMessage(key: BigNumberish, errorMessage: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        length(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        remove(key: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        set(key: BigNumberish, value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        tryGet(key: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

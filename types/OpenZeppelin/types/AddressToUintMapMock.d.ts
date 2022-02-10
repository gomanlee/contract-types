import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface AddressToUintMapMockInterface extends utils.Interface {
    contractName: "AddressToUintMapMock";
    functions: {
        "at(uint256)": FunctionFragment;
        "contains(address)": FunctionFragment;
        "get(address)": FunctionFragment;
        "length()": FunctionFragment;
        "remove(address)": FunctionFragment;
        "set(address,uint256)": FunctionFragment;
        "tryGet(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "at", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "contains", values: [string]): string;
    encodeFunctionData(functionFragment: "get", values: [string]): string;
    encodeFunctionData(functionFragment: "length", values?: undefined): string;
    encodeFunctionData(functionFragment: "remove", values: [string]): string;
    encodeFunctionData(functionFragment: "set", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "tryGet", values: [string]): string;
    decodeFunctionResult(functionFragment: "at", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
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
export interface AddressToUintMapMock extends BaseContract {
    contractName: "AddressToUintMapMock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AddressToUintMapMockInterface;
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
        at(index: BigNumberish, overrides?: CallOverrides): Promise<[string, BigNumber] & {
            key: string;
            value: BigNumber;
        }>;
        contains(key: string, overrides?: CallOverrides): Promise<[boolean]>;
        get(key: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        length(overrides?: CallOverrides): Promise<[BigNumber]>;
        remove(key: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        set(key: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        tryGet(key: string, overrides?: CallOverrides): Promise<[boolean, BigNumber]>;
    };
    at(index: BigNumberish, overrides?: CallOverrides): Promise<[string, BigNumber] & {
        key: string;
        value: BigNumber;
    }>;
    contains(key: string, overrides?: CallOverrides): Promise<boolean>;
    get(key: string, overrides?: CallOverrides): Promise<BigNumber>;
    length(overrides?: CallOverrides): Promise<BigNumber>;
    remove(key: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    set(key: string, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    tryGet(key: string, overrides?: CallOverrides): Promise<[boolean, BigNumber]>;
    callStatic: {
        at(index: BigNumberish, overrides?: CallOverrides): Promise<[string, BigNumber] & {
            key: string;
            value: BigNumber;
        }>;
        contains(key: string, overrides?: CallOverrides): Promise<boolean>;
        get(key: string, overrides?: CallOverrides): Promise<BigNumber>;
        length(overrides?: CallOverrides): Promise<BigNumber>;
        remove(key: string, overrides?: CallOverrides): Promise<void>;
        set(key: string, value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        tryGet(key: string, overrides?: CallOverrides): Promise<[boolean, BigNumber]>;
    };
    filters: {
        "OperationResult(bool)"(result?: null): OperationResultEventFilter;
        OperationResult(result?: null): OperationResultEventFilter;
    };
    estimateGas: {
        at(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        contains(key: string, overrides?: CallOverrides): Promise<BigNumber>;
        get(key: string, overrides?: CallOverrides): Promise<BigNumber>;
        length(overrides?: CallOverrides): Promise<BigNumber>;
        remove(key: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        set(key: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        tryGet(key: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        at(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contains(key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get(key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        length(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        remove(key: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        set(key: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        tryGet(key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface EnumerableAddressSetMockInterface extends utils.Interface {
    contractName: "EnumerableAddressSetMock";
    functions: {
        "add(address)": FunctionFragment;
        "at(uint256)": FunctionFragment;
        "contains(address)": FunctionFragment;
        "length()": FunctionFragment;
        "remove(address)": FunctionFragment;
        "values()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "add", values: [string]): string;
    encodeFunctionData(functionFragment: "at", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "contains", values: [string]): string;
    encodeFunctionData(functionFragment: "length", values?: undefined): string;
    encodeFunctionData(functionFragment: "remove", values: [string]): string;
    encodeFunctionData(functionFragment: "values", values?: undefined): string;
    decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "at", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "length", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "values", data: BytesLike): Result;
    events: {
        "OperationResult(bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OperationResult"): EventFragment;
}
export declare type OperationResultEvent = TypedEvent<[boolean], {
    result: boolean;
}>;
export declare type OperationResultEventFilter = TypedEventFilter<OperationResultEvent>;
export interface EnumerableAddressSetMock extends BaseContract {
    contractName: "EnumerableAddressSetMock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: EnumerableAddressSetMockInterface;
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
        add(value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        at(index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        contains(value: string, overrides?: CallOverrides): Promise<[boolean]>;
        length(overrides?: CallOverrides): Promise<[BigNumber]>;
        remove(value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        values(overrides?: CallOverrides): Promise<[string[]]>;
    };
    add(value: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    at(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    contains(value: string, overrides?: CallOverrides): Promise<boolean>;
    length(overrides?: CallOverrides): Promise<BigNumber>;
    remove(value: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    values(overrides?: CallOverrides): Promise<string[]>;
    callStatic: {
        add(value: string, overrides?: CallOverrides): Promise<void>;
        at(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        contains(value: string, overrides?: CallOverrides): Promise<boolean>;
        length(overrides?: CallOverrides): Promise<BigNumber>;
        remove(value: string, overrides?: CallOverrides): Promise<void>;
        values(overrides?: CallOverrides): Promise<string[]>;
    };
    filters: {
        "OperationResult(bool)"(result?: null): OperationResultEventFilter;
        OperationResult(result?: null): OperationResultEventFilter;
    };
    estimateGas: {
        add(value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        at(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        contains(value: string, overrides?: CallOverrides): Promise<BigNumber>;
        length(overrides?: CallOverrides): Promise<BigNumber>;
        remove(value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        values(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        add(value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        at(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contains(value: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        length(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        remove(value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        values(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

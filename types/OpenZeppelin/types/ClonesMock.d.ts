import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ClonesMockInterface extends utils.Interface {
    contractName: "ClonesMock";
    functions: {
        "clone(address,bytes)": FunctionFragment;
        "cloneDeterministic(address,bytes32,bytes)": FunctionFragment;
        "predictDeterministicAddress(address,bytes32)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "clone", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "cloneDeterministic", values: [string, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "predictDeterministicAddress", values: [string, BytesLike]): string;
    decodeFunctionResult(functionFragment: "clone", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cloneDeterministic", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "predictDeterministicAddress", data: BytesLike): Result;
    events: {
        "NewInstance(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "NewInstance"): EventFragment;
}
export declare type NewInstanceEvent = TypedEvent<[string], {
    instance: string;
}>;
export declare type NewInstanceEventFilter = TypedEventFilter<NewInstanceEvent>;
export interface ClonesMock extends BaseContract {
    contractName: "ClonesMock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ClonesMockInterface;
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
        clone(implementation: string, initdata: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cloneDeterministic(implementation: string, salt: BytesLike, initdata: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        predictDeterministicAddress(implementation: string, salt: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            predicted: string;
        }>;
    };
    clone(implementation: string, initdata: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cloneDeterministic(implementation: string, salt: BytesLike, initdata: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    predictDeterministicAddress(implementation: string, salt: BytesLike, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        clone(implementation: string, initdata: BytesLike, overrides?: CallOverrides): Promise<void>;
        cloneDeterministic(implementation: string, salt: BytesLike, initdata: BytesLike, overrides?: CallOverrides): Promise<void>;
        predictDeterministicAddress(implementation: string, salt: BytesLike, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "NewInstance(address)"(instance?: null): NewInstanceEventFilter;
        NewInstance(instance?: null): NewInstanceEventFilter;
    };
    estimateGas: {
        clone(implementation: string, initdata: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cloneDeterministic(implementation: string, salt: BytesLike, initdata: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        predictDeterministicAddress(implementation: string, salt: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        clone(implementation: string, initdata: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cloneDeterministic(implementation: string, salt: BytesLike, initdata: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        predictDeterministicAddress(implementation: string, salt: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface SampleGrampsInterface extends utils.Interface {
    contractName: "SampleGramps";
    functions: {
        "gramps()": FunctionFragment;
        "initialize()": FunctionFragment;
        "isHuman()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "gramps", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values?: undefined): string;
    encodeFunctionData(functionFragment: "isHuman", values?: undefined): string;
    decodeFunctionResult(functionFragment: "gramps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isHuman", data: BytesLike): Result;
    events: {};
}
export interface SampleGramps extends BaseContract {
    contractName: "SampleGramps";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SampleGrampsInterface;
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
        gramps(overrides?: CallOverrides): Promise<[string]>;
        "initialize()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "initialize(string)"(value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isHuman(overrides?: CallOverrides): Promise<[boolean]>;
    };
    gramps(overrides?: CallOverrides): Promise<string>;
    "initialize()"(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "initialize(string)"(value: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isHuman(overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        gramps(overrides?: CallOverrides): Promise<string>;
        "initialize()"(overrides?: CallOverrides): Promise<void>;
        "initialize(string)"(value: string, overrides?: CallOverrides): Promise<void>;
        isHuman(overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        gramps(overrides?: CallOverrides): Promise<BigNumber>;
        "initialize()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "initialize(string)"(value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isHuman(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        gramps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "initialize()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "initialize(string)"(value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isHuman(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface SampleHumanInterface extends utils.Interface {
    contractName: "SampleHuman";
    functions: {
        "initialize()": FunctionFragment;
        "isHuman()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "initialize", values?: undefined): string;
    encodeFunctionData(functionFragment: "isHuman", values?: undefined): string;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isHuman", data: BytesLike): Result;
    events: {};
}
export interface SampleHuman extends BaseContract {
    contractName: "SampleHuman";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SampleHumanInterface;
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
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isHuman(overrides?: CallOverrides): Promise<[boolean]>;
    };
    initialize(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isHuman(overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        initialize(overrides?: CallOverrides): Promise<void>;
        isHuman(overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isHuman(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isHuman(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface SampleMotherInterface extends utils.Interface {
    contractName: "SampleMother";
    functions: {
        "initialize()": FunctionFragment;
        "isHuman()": FunctionFragment;
        "mother()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "initialize", values?: undefined): string;
    encodeFunctionData(functionFragment: "isHuman", values?: undefined): string;
    encodeFunctionData(functionFragment: "mother", values?: undefined): string;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isHuman", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mother", data: BytesLike): Result;
    events: {};
}
export interface SampleMother extends BaseContract {
    contractName: "SampleMother";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SampleMotherInterface;
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
        "initialize()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "initialize(uint256)"(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isHuman(overrides?: CallOverrides): Promise<[boolean]>;
        mother(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    "initialize()"(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "initialize(uint256)"(value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isHuman(overrides?: CallOverrides): Promise<boolean>;
    mother(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        "initialize()"(overrides?: CallOverrides): Promise<void>;
        "initialize(uint256)"(value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        isHuman(overrides?: CallOverrides): Promise<boolean>;
        mother(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        "initialize()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "initialize(uint256)"(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isHuman(overrides?: CallOverrides): Promise<BigNumber>;
        mother(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        "initialize()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "initialize(uint256)"(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isHuman(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mother(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

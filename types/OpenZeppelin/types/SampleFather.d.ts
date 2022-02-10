import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface SampleFatherInterface extends utils.Interface {
    contractName: "SampleFather";
    functions: {
        "father()": FunctionFragment;
        "gramps()": FunctionFragment;
        "initialize()": FunctionFragment;
        "isHuman()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "father", values?: undefined): string;
    encodeFunctionData(functionFragment: "gramps", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values?: undefined): string;
    encodeFunctionData(functionFragment: "isHuman", values?: undefined): string;
    decodeFunctionResult(functionFragment: "father", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gramps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isHuman", data: BytesLike): Result;
    events: {};
}
export interface SampleFather extends BaseContract {
    contractName: "SampleFather";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SampleFatherInterface;
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
        father(overrides?: CallOverrides): Promise<[BigNumber]>;
        gramps(overrides?: CallOverrides): Promise<[string]>;
        "initialize()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "initialize(string,uint256)"(_gramps: string, _father: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "initialize(string)"(value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isHuman(overrides?: CallOverrides): Promise<[boolean]>;
    };
    father(overrides?: CallOverrides): Promise<BigNumber>;
    gramps(overrides?: CallOverrides): Promise<string>;
    "initialize()"(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "initialize(string,uint256)"(_gramps: string, _father: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "initialize(string)"(value: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isHuman(overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        father(overrides?: CallOverrides): Promise<BigNumber>;
        gramps(overrides?: CallOverrides): Promise<string>;
        "initialize()"(overrides?: CallOverrides): Promise<void>;
        "initialize(string,uint256)"(_gramps: string, _father: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "initialize(string)"(value: string, overrides?: CallOverrides): Promise<void>;
        isHuman(overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        father(overrides?: CallOverrides): Promise<BigNumber>;
        gramps(overrides?: CallOverrides): Promise<BigNumber>;
        "initialize()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "initialize(string,uint256)"(_gramps: string, _father: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "initialize(string)"(value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isHuman(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        father(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gramps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "initialize()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "initialize(string,uint256)"(_gramps: string, _father: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "initialize(string)"(value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isHuman(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

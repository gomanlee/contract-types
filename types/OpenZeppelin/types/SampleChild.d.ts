import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface SampleChildInterface extends utils.Interface {
    contractName: "SampleChild";
    functions: {
        "child()": FunctionFragment;
        "father()": FunctionFragment;
        "gramps()": FunctionFragment;
        "initialize(uint256,string,uint256,uint256)": FunctionFragment;
        "isHuman()": FunctionFragment;
        "mother()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "child", values?: undefined): string;
    encodeFunctionData(functionFragment: "father", values?: undefined): string;
    encodeFunctionData(functionFragment: "gramps", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [BigNumberish, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "isHuman", values?: undefined): string;
    encodeFunctionData(functionFragment: "mother", values?: undefined): string;
    decodeFunctionResult(functionFragment: "child", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "father", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gramps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isHuman", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mother", data: BytesLike): Result;
    events: {};
}
export interface SampleChild extends BaseContract {
    contractName: "SampleChild";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SampleChildInterface;
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
        child(overrides?: CallOverrides): Promise<[BigNumber]>;
        father(overrides?: CallOverrides): Promise<[BigNumber]>;
        gramps(overrides?: CallOverrides): Promise<[string]>;
        "initialize(uint256,string,uint256,uint256)"(_mother: BigNumberish, _gramps: string, _father: BigNumberish, _child: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "initialize()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "initialize(string,uint256)"(_gramps: string, _father: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "initialize(string)"(value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "initialize(uint256)"(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isHuman(overrides?: CallOverrides): Promise<[boolean]>;
        mother(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    child(overrides?: CallOverrides): Promise<BigNumber>;
    father(overrides?: CallOverrides): Promise<BigNumber>;
    gramps(overrides?: CallOverrides): Promise<string>;
    "initialize(uint256,string,uint256,uint256)"(_mother: BigNumberish, _gramps: string, _father: BigNumberish, _child: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "initialize()"(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "initialize(string,uint256)"(_gramps: string, _father: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "initialize(string)"(value: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "initialize(uint256)"(value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isHuman(overrides?: CallOverrides): Promise<boolean>;
    mother(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        child(overrides?: CallOverrides): Promise<BigNumber>;
        father(overrides?: CallOverrides): Promise<BigNumber>;
        gramps(overrides?: CallOverrides): Promise<string>;
        "initialize(uint256,string,uint256,uint256)"(_mother: BigNumberish, _gramps: string, _father: BigNumberish, _child: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "initialize()"(overrides?: CallOverrides): Promise<void>;
        "initialize(string,uint256)"(_gramps: string, _father: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "initialize(string)"(value: string, overrides?: CallOverrides): Promise<void>;
        "initialize(uint256)"(value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        isHuman(overrides?: CallOverrides): Promise<boolean>;
        mother(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        child(overrides?: CallOverrides): Promise<BigNumber>;
        father(overrides?: CallOverrides): Promise<BigNumber>;
        gramps(overrides?: CallOverrides): Promise<BigNumber>;
        "initialize(uint256,string,uint256,uint256)"(_mother: BigNumberish, _gramps: string, _father: BigNumberish, _child: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "initialize()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "initialize(string,uint256)"(_gramps: string, _father: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "initialize(string)"(value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "initialize(uint256)"(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isHuman(overrides?: CallOverrides): Promise<BigNumber>;
        mother(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        child(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        father(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gramps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "initialize(uint256,string,uint256,uint256)"(_mother: BigNumberish, _gramps: string, _father: BigNumberish, _child: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "initialize()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "initialize(string,uint256)"(_gramps: string, _father: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "initialize(string)"(value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "initialize(uint256)"(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isHuman(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mother(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

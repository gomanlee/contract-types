import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface PotLikeInterface extends utils.Interface {
    contractName: "PotLike";
    functions: {
        "chi()": FunctionFragment;
        "drip()": FunctionFragment;
        "exit(uint256)": FunctionFragment;
        "join(uint256)": FunctionFragment;
        "pie(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "chi", values?: undefined): string;
    encodeFunctionData(functionFragment: "drip", values?: undefined): string;
    encodeFunctionData(functionFragment: "exit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "join", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "pie", values: [string]): string;
    decodeFunctionResult(functionFragment: "chi", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "drip", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "join", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pie", data: BytesLike): Result;
    events: {};
}
export interface PotLike extends BaseContract {
    contractName: "PotLike";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PotLikeInterface;
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
        chi(overrides?: CallOverrides): Promise<[BigNumber]>;
        drip(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        exit(arg0: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        join(arg0: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pie(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    chi(overrides?: CallOverrides): Promise<BigNumber>;
    drip(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    exit(arg0: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    join(arg0: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pie(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        chi(overrides?: CallOverrides): Promise<BigNumber>;
        drip(overrides?: CallOverrides): Promise<BigNumber>;
        exit(arg0: BigNumberish, overrides?: CallOverrides): Promise<void>;
        join(arg0: BigNumberish, overrides?: CallOverrides): Promise<void>;
        pie(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        chi(overrides?: CallOverrides): Promise<BigNumber>;
        drip(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        exit(arg0: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        join(arg0: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pie(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        chi(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        drip(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        exit(arg0: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        join(arg0: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pie(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

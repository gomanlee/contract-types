import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ReservoirInterface extends utils.Interface {
    contractName: "Reservoir";
    functions: {
        "drip()": FunctionFragment;
        "dripRate()": FunctionFragment;
        "dripStart()": FunctionFragment;
        "dripped()": FunctionFragment;
        "target()": FunctionFragment;
        "token()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "drip", values?: undefined): string;
    encodeFunctionData(functionFragment: "dripRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "dripStart", values?: undefined): string;
    encodeFunctionData(functionFragment: "dripped", values?: undefined): string;
    encodeFunctionData(functionFragment: "target", values?: undefined): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    decodeFunctionResult(functionFragment: "drip", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dripRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dripStart", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dripped", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "target", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    events: {};
}
export interface Reservoir extends BaseContract {
    contractName: "Reservoir";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ReservoirInterface;
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
        drip(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        dripRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        dripStart(overrides?: CallOverrides): Promise<[BigNumber]>;
        dripped(overrides?: CallOverrides): Promise<[BigNumber]>;
        target(overrides?: CallOverrides): Promise<[string]>;
        token(overrides?: CallOverrides): Promise<[string]>;
    };
    drip(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    dripRate(overrides?: CallOverrides): Promise<BigNumber>;
    dripStart(overrides?: CallOverrides): Promise<BigNumber>;
    dripped(overrides?: CallOverrides): Promise<BigNumber>;
    target(overrides?: CallOverrides): Promise<string>;
    token(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        drip(overrides?: CallOverrides): Promise<BigNumber>;
        dripRate(overrides?: CallOverrides): Promise<BigNumber>;
        dripStart(overrides?: CallOverrides): Promise<BigNumber>;
        dripped(overrides?: CallOverrides): Promise<BigNumber>;
        target(overrides?: CallOverrides): Promise<string>;
        token(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        drip(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        dripRate(overrides?: CallOverrides): Promise<BigNumber>;
        dripStart(overrides?: CallOverrides): Promise<BigNumber>;
        dripped(overrides?: CallOverrides): Promise<BigNumber>;
        target(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        drip(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        dripRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        dripStart(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        dripped(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        target(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface BaseJumpRateModelV2Interface extends utils.Interface {
    contractName: "BaseJumpRateModelV2";
    functions: {
        "baseRatePerBlock()": FunctionFragment;
        "blocksPerYear()": FunctionFragment;
        "getSupplyRate(uint256,uint256,uint256,uint256)": FunctionFragment;
        "jumpMultiplierPerBlock()": FunctionFragment;
        "kink()": FunctionFragment;
        "multiplierPerBlock()": FunctionFragment;
        "owner()": FunctionFragment;
        "updateJumpRateModel(uint256,uint256,uint256,uint256)": FunctionFragment;
        "utilizationRate(uint256,uint256,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "baseRatePerBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "blocksPerYear", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSupplyRate", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "jumpMultiplierPerBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "kink", values?: undefined): string;
    encodeFunctionData(functionFragment: "multiplierPerBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateJumpRateModel", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "utilizationRate", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "baseRatePerBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blocksPerYear", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSupplyRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "jumpMultiplierPerBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "kink", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multiplierPerBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateJumpRateModel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "utilizationRate", data: BytesLike): Result;
    events: {
        "NewInterestParams(uint256,uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "NewInterestParams"): EventFragment;
}
export declare type NewInterestParamsEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], {
    baseRatePerBlock: BigNumber;
    multiplierPerBlock: BigNumber;
    jumpMultiplierPerBlock: BigNumber;
    kink: BigNumber;
}>;
export declare type NewInterestParamsEventFilter = TypedEventFilter<NewInterestParamsEvent>;
export interface BaseJumpRateModelV2 extends BaseContract {
    contractName: "BaseJumpRateModelV2";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BaseJumpRateModelV2Interface;
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
        baseRatePerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        blocksPerYear(overrides?: CallOverrides): Promise<[BigNumber]>;
        getSupplyRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, reserveFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        jumpMultiplierPerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        kink(overrides?: CallOverrides): Promise<[BigNumber]>;
        multiplierPerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        updateJumpRateModel(baseRatePerYear: BigNumberish, multiplierPerYear: BigNumberish, jumpMultiplierPerYear: BigNumberish, kink_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        utilizationRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    baseRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
    blocksPerYear(overrides?: CallOverrides): Promise<BigNumber>;
    getSupplyRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, reserveFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    jumpMultiplierPerBlock(overrides?: CallOverrides): Promise<BigNumber>;
    kink(overrides?: CallOverrides): Promise<BigNumber>;
    multiplierPerBlock(overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    updateJumpRateModel(baseRatePerYear: BigNumberish, multiplierPerYear: BigNumberish, jumpMultiplierPerYear: BigNumberish, kink_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    utilizationRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        baseRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        blocksPerYear(overrides?: CallOverrides): Promise<BigNumber>;
        getSupplyRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, reserveFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        jumpMultiplierPerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        kink(overrides?: CallOverrides): Promise<BigNumber>;
        multiplierPerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        updateJumpRateModel(baseRatePerYear: BigNumberish, multiplierPerYear: BigNumberish, jumpMultiplierPerYear: BigNumberish, kink_: BigNumberish, overrides?: CallOverrides): Promise<void>;
        utilizationRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "NewInterestParams(uint256,uint256,uint256,uint256)"(baseRatePerBlock?: null, multiplierPerBlock?: null, jumpMultiplierPerBlock?: null, kink?: null): NewInterestParamsEventFilter;
        NewInterestParams(baseRatePerBlock?: null, multiplierPerBlock?: null, jumpMultiplierPerBlock?: null, kink?: null): NewInterestParamsEventFilter;
    };
    estimateGas: {
        baseRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        blocksPerYear(overrides?: CallOverrides): Promise<BigNumber>;
        getSupplyRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, reserveFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        jumpMultiplierPerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        kink(overrides?: CallOverrides): Promise<BigNumber>;
        multiplierPerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        updateJumpRateModel(baseRatePerYear: BigNumberish, multiplierPerYear: BigNumberish, jumpMultiplierPerYear: BigNumberish, kink_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        utilizationRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        baseRatePerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        blocksPerYear(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSupplyRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, reserveFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        jumpMultiplierPerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        kink(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        multiplierPerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateJumpRateModel(baseRatePerYear: BigNumberish, multiplierPerYear: BigNumberish, jumpMultiplierPerYear: BigNumberish, kink_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        utilizationRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

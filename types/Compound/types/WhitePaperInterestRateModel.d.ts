import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface WhitePaperInterestRateModelInterface extends utils.Interface {
    contractName: "WhitePaperInterestRateModel";
    functions: {
        "baseRatePerBlock()": FunctionFragment;
        "blocksPerYear()": FunctionFragment;
        "getBorrowRate(uint256,uint256,uint256)": FunctionFragment;
        "getSupplyRate(uint256,uint256,uint256,uint256)": FunctionFragment;
        "isInterestRateModel()": FunctionFragment;
        "multiplierPerBlock()": FunctionFragment;
        "utilizationRate(uint256,uint256,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "baseRatePerBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "blocksPerYear", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBorrowRate", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getSupplyRate", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "isInterestRateModel", values?: undefined): string;
    encodeFunctionData(functionFragment: "multiplierPerBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "utilizationRate", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "baseRatePerBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blocksPerYear", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSupplyRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isInterestRateModel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multiplierPerBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "utilizationRate", data: BytesLike): Result;
    events: {
        "NewInterestParams(uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "NewInterestParams"): EventFragment;
}
export declare type NewInterestParamsEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    baseRatePerBlock: BigNumber;
    multiplierPerBlock: BigNumber;
}>;
export declare type NewInterestParamsEventFilter = TypedEventFilter<NewInterestParamsEvent>;
export interface WhitePaperInterestRateModel extends BaseContract {
    contractName: "WhitePaperInterestRateModel";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: WhitePaperInterestRateModelInterface;
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
        getBorrowRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getSupplyRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, reserveFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        isInterestRateModel(overrides?: CallOverrides): Promise<[boolean]>;
        multiplierPerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        utilizationRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    baseRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
    blocksPerYear(overrides?: CallOverrides): Promise<BigNumber>;
    getBorrowRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getSupplyRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, reserveFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    isInterestRateModel(overrides?: CallOverrides): Promise<boolean>;
    multiplierPerBlock(overrides?: CallOverrides): Promise<BigNumber>;
    utilizationRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        baseRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        blocksPerYear(overrides?: CallOverrides): Promise<BigNumber>;
        getBorrowRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getSupplyRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, reserveFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isInterestRateModel(overrides?: CallOverrides): Promise<boolean>;
        multiplierPerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        utilizationRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "NewInterestParams(uint256,uint256)"(baseRatePerBlock?: null, multiplierPerBlock?: null): NewInterestParamsEventFilter;
        NewInterestParams(baseRatePerBlock?: null, multiplierPerBlock?: null): NewInterestParamsEventFilter;
    };
    estimateGas: {
        baseRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        blocksPerYear(overrides?: CallOverrides): Promise<BigNumber>;
        getBorrowRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getSupplyRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, reserveFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isInterestRateModel(overrides?: CallOverrides): Promise<BigNumber>;
        multiplierPerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        utilizationRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        baseRatePerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        blocksPerYear(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBorrowRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSupplyRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, reserveFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isInterestRateModel(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        multiplierPerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        utilizationRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

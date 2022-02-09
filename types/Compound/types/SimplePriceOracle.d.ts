import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface SimplePriceOracleInterface extends utils.Interface {
    contractName: "SimplePriceOracle";
    functions: {
        "assetPrices(address)": FunctionFragment;
        "getUnderlyingPrice(address)": FunctionFragment;
        "isPriceOracle()": FunctionFragment;
        "setDirectPrice(address,uint256)": FunctionFragment;
        "setUnderlyingPrice(address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "assetPrices", values: [string]): string;
    encodeFunctionData(functionFragment: "getUnderlyingPrice", values: [string]): string;
    encodeFunctionData(functionFragment: "isPriceOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "setDirectPrice", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setUnderlyingPrice", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "assetPrices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUnderlyingPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPriceOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDirectPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUnderlyingPrice", data: BytesLike): Result;
    events: {
        "PricePosted(address,uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "PricePosted"): EventFragment;
}
export declare type PricePostedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], {
    asset: string;
    previousPriceMantissa: BigNumber;
    requestedPriceMantissa: BigNumber;
    newPriceMantissa: BigNumber;
}>;
export declare type PricePostedEventFilter = TypedEventFilter<PricePostedEvent>;
export interface SimplePriceOracle extends BaseContract {
    contractName: "SimplePriceOracle";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SimplePriceOracleInterface;
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
        assetPrices(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getUnderlyingPrice(cToken: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        isPriceOracle(overrides?: CallOverrides): Promise<[boolean]>;
        setDirectPrice(asset: string, price: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setUnderlyingPrice(cToken: string, underlyingPriceMantissa: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    assetPrices(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getUnderlyingPrice(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
    isPriceOracle(overrides?: CallOverrides): Promise<boolean>;
    setDirectPrice(asset: string, price: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setUnderlyingPrice(cToken: string, underlyingPriceMantissa: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        assetPrices(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getUnderlyingPrice(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        isPriceOracle(overrides?: CallOverrides): Promise<boolean>;
        setDirectPrice(asset: string, price: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setUnderlyingPrice(cToken: string, underlyingPriceMantissa: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "PricePosted(address,uint256,uint256,uint256)"(asset?: null, previousPriceMantissa?: null, requestedPriceMantissa?: null, newPriceMantissa?: null): PricePostedEventFilter;
        PricePosted(asset?: null, previousPriceMantissa?: null, requestedPriceMantissa?: null, newPriceMantissa?: null): PricePostedEventFilter;
    };
    estimateGas: {
        assetPrices(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getUnderlyingPrice(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        isPriceOracle(overrides?: CallOverrides): Promise<BigNumber>;
        setDirectPrice(asset: string, price: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setUnderlyingPrice(cToken: string, underlyingPriceMantissa: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        assetPrices(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUnderlyingPrice(cToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPriceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setDirectPrice(asset: string, price: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setUnderlyingPrice(cToken: string, underlyingPriceMantissa: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}

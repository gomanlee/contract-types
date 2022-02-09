import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface LegacyInterestRateModelInterface extends utils.Interface {
    contractName: "LegacyInterestRateModel";
    functions: {
        "getBorrowRate(uint256,uint256,uint256)": FunctionFragment;
        "getSupplyRate(uint256,uint256,uint256,uint256)": FunctionFragment;
        "isInterestRateModel()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getBorrowRate", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getSupplyRate", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "isInterestRateModel", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSupplyRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isInterestRateModel", data: BytesLike): Result;
    events: {};
}
export interface LegacyInterestRateModel extends BaseContract {
    contractName: "LegacyInterestRateModel";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LegacyInterestRateModelInterface;
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
        getBorrowRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getSupplyRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, reserveFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        isInterestRateModel(overrides?: CallOverrides): Promise<[boolean]>;
    };
    getBorrowRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    getSupplyRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, reserveFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    isInterestRateModel(overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        getBorrowRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getSupplyRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, reserveFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isInterestRateModel(overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        getBorrowRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getSupplyRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, reserveFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isInterestRateModel(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getBorrowRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSupplyRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, reserveFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isInterestRateModel(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

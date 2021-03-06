/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface MigratableMockV3Interface extends utils.Interface {
  contractName: "MigratableMockV3";
  functions: {
    "initialize(uint256)": FunctionFragment;
    "migrate(uint256,uint256)": FunctionFragment;
    "x()": FunctionFragment;
    "y()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "migrate",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "x", values?: undefined): string;
  encodeFunctionData(functionFragment: "y", values?: undefined): string;

  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "migrate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "x", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "y", data: BytesLike): Result;

  events: {};
}

export interface MigratableMockV3 extends BaseContract {
  contractName: "MigratableMockV3";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MigratableMockV3Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    initialize(
      value: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "migrate(uint256,uint256)"(
      value: BigNumberish,
      anotherValue: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "migrate()"(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    x(overrides?: CallOverrides): Promise<[BigNumber]>;

    y(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  initialize(
    value: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "migrate(uint256,uint256)"(
    value: BigNumberish,
    anotherValue: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "migrate()"(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  x(overrides?: CallOverrides): Promise<BigNumber>;

  y(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    initialize(value: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "migrate(uint256,uint256)"(
      value: BigNumberish,
      anotherValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "migrate()"(overrides?: CallOverrides): Promise<void>;

    x(overrides?: CallOverrides): Promise<BigNumber>;

    y(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    initialize(
      value: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "migrate(uint256,uint256)"(
      value: BigNumberish,
      anotherValue: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "migrate()"(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    x(overrides?: CallOverrides): Promise<BigNumber>;

    y(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    initialize(
      value: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "migrate(uint256,uint256)"(
      value: BigNumberish,
      anotherValue: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "migrate()"(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    x(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    y(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

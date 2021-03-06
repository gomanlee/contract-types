/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface MockPoolFactoryInterface extends ethers.utils.Interface {
  functions: {
    "getSupportedPools()": FunctionFragment;
    "isSupportedPool(address)": FunctionFragment;
    "supportPool(address)": FunctionFragment;
    "supportedPools(uint256)": FunctionFragment;
    "supportedPoolsTVL()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getSupportedPools",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isSupportedPool",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "supportPool", values: [string]): string;
  encodeFunctionData(
    functionFragment: "supportedPools",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportedPoolsTVL",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getSupportedPools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isSupportedPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportedPools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportedPoolsTVL",
    data: BytesLike
  ): Result;

  events: {};
}

export class MockPoolFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MockPoolFactoryInterface;

  functions: {
    getSupportedPools(overrides?: CallOverrides): Promise<[string[]]>;

    "getSupportedPools()"(overrides?: CallOverrides): Promise<[string[]]>;

    isSupportedPool(
      pool: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isSupportedPool(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    supportPool(
      _pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "supportPool(address)"(
      _pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportedPools(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "supportedPools(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    supportedPoolsTVL(overrides?: CallOverrides): Promise<[BigNumber]>;

    "supportedPoolsTVL()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  getSupportedPools(overrides?: CallOverrides): Promise<string[]>;

  "getSupportedPools()"(overrides?: CallOverrides): Promise<string[]>;

  isSupportedPool(pool: string, overrides?: CallOverrides): Promise<boolean>;

  "isSupportedPool(address)"(
    pool: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  supportPool(
    _pool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "supportPool(address)"(
    _pool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportedPools(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "supportedPools(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  supportedPoolsTVL(overrides?: CallOverrides): Promise<BigNumber>;

  "supportedPoolsTVL()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    getSupportedPools(overrides?: CallOverrides): Promise<string[]>;

    "getSupportedPools()"(overrides?: CallOverrides): Promise<string[]>;

    isSupportedPool(pool: string, overrides?: CallOverrides): Promise<boolean>;

    "isSupportedPool(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    supportPool(_pool: string, overrides?: CallOverrides): Promise<void>;

    "supportPool(address)"(
      _pool: string,
      overrides?: CallOverrides
    ): Promise<void>;

    supportedPools(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "supportedPools(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    supportedPoolsTVL(overrides?: CallOverrides): Promise<BigNumber>;

    "supportedPoolsTVL()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getSupportedPools(overrides?: CallOverrides): Promise<BigNumber>;

    "getSupportedPools()"(overrides?: CallOverrides): Promise<BigNumber>;

    isSupportedPool(
      pool: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isSupportedPool(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportPool(
      _pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "supportPool(address)"(
      _pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportedPools(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportedPools(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportedPoolsTVL(overrides?: CallOverrides): Promise<BigNumber>;

    "supportedPoolsTVL()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getSupportedPools(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getSupportedPools()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isSupportedPool(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isSupportedPool(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportPool(
      _pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "supportPool(address)"(
      _pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportedPools(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportedPools(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportedPoolsTVL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "supportedPoolsTVL()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

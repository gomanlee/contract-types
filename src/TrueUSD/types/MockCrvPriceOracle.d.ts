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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface MockCrvPriceOracleInterface extends ethers.utils.Interface {
  functions: {
    "crvToUsd(uint256)": FunctionFragment;
    "usdToCrv(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "crvToUsd",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "usdToCrv",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "crvToUsd", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "usdToCrv", data: BytesLike): Result;

  events: {};
}

export class MockCrvPriceOracle extends Contract {
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

  interface: MockCrvPriceOracleInterface;

  functions: {
    crvToUsd(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "crvToUsd(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    usdToCrv(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "usdToCrv(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  crvToUsd(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  "crvToUsd(uint256)"(
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  usdToCrv(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  "usdToCrv(uint256)"(
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    crvToUsd(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "crvToUsd(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    usdToCrv(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "usdToCrv(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    crvToUsd(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "crvToUsd(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    usdToCrv(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "usdToCrv(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    crvToUsd(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "crvToUsd(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    usdToCrv(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "usdToCrv(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

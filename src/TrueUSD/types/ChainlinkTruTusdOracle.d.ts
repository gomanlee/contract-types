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

interface ChainlinkTruTusdOracleInterface extends ethers.utils.Interface {
  functions: {
    "getLatestTruPrice()": FunctionFragment;
    "token()": FunctionFragment;
    "tokenToTru(uint256)": FunctionFragment;
    "tokenToUsd(uint256)": FunctionFragment;
    "truToToken(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getLatestTruPrice",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenToTru",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenToUsd",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "truToToken",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getLatestTruPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenToTru", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenToUsd", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "truToToken", data: BytesLike): Result;

  events: {};
}

export class ChainlinkTruTusdOracle extends Contract {
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

  interface: ChainlinkTruTusdOracleInterface;

  functions: {
    getLatestTruPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getLatestTruPrice()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    "token()"(overrides?: CallOverrides): Promise<[string]>;

    tokenToTru(
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "tokenToTru(uint256)"(
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tokenToUsd(
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "tokenToUsd(uint256)"(
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    truToToken(
      truAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "truToToken(uint256)"(
      truAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  getLatestTruPrice(overrides?: CallOverrides): Promise<BigNumber>;

  "getLatestTruPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

  token(overrides?: CallOverrides): Promise<string>;

  "token()"(overrides?: CallOverrides): Promise<string>;

  tokenToTru(
    tokenAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "tokenToTru(uint256)"(
    tokenAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tokenToUsd(
    tokenAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "tokenToUsd(uint256)"(
    tokenAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  truToToken(
    truAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "truToToken(uint256)"(
    truAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    getLatestTruPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "getLatestTruPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<string>;

    "token()"(overrides?: CallOverrides): Promise<string>;

    tokenToTru(
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokenToTru(uint256)"(
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenToUsd(
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokenToUsd(uint256)"(
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    truToToken(
      truAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "truToToken(uint256)"(
      truAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getLatestTruPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "getLatestTruPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    "token()"(overrides?: CallOverrides): Promise<BigNumber>;

    tokenToTru(
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokenToTru(uint256)"(
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenToUsd(
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokenToUsd(uint256)"(
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    truToToken(
      truAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "truToToken(uint256)"(
      truAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getLatestTruPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getLatestTruPrice()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenToTru(
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokenToTru(uint256)"(
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenToUsd(
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokenToUsd(uint256)"(
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    truToToken(
      truAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "truToToken(uint256)"(
      truAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

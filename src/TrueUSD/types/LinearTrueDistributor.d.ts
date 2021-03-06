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

interface LinearTrueDistributorInterface extends ethers.utils.Interface {
  functions: {
    "distribute()": FunctionFragment;
    "distributed()": FunctionFragment;
    "distributionStart()": FunctionFragment;
    "duration()": FunctionFragment;
    "empty()": FunctionFragment;
    "farm()": FunctionFragment;
    "initialize(uint256,uint256,uint256,address)": FunctionFragment;
    "isInitialized()": FunctionFragment;
    "lastDistribution()": FunctionFragment;
    "nextDistribution()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "restart(uint256,uint256,uint256)": FunctionFragment;
    "setDailyDistribution(uint256)": FunctionFragment;
    "setFarm(address)": FunctionFragment;
    "totalAmount()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "trustToken()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "distribute",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "distributed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "distributionStart",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "duration", values?: undefined): string;
  encodeFunctionData(functionFragment: "empty", values?: undefined): string;
  encodeFunctionData(functionFragment: "farm", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastDistribution",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextDistribution",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "restart",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setDailyDistribution",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setFarm", values: [string]): string;
  encodeFunctionData(
    functionFragment: "totalAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "trustToken",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "distribute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "distributed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributionStart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "duration", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "empty", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "farm", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "restart", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setDailyDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFarm", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "trustToken", data: BytesLike): Result;

  events: {
    "Distributed(uint256)": EventFragment;
    "DistributionRestarted(uint256,uint256,uint256)": EventFragment;
    "FarmChanged(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TotalAmountChanged(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Distributed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DistributionRestarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FarmChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TotalAmountChanged"): EventFragment;
}

export class LinearTrueDistributor extends Contract {
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

  interface: LinearTrueDistributorInterface;

  functions: {
    distribute(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "distribute()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    distributed(overrides?: CallOverrides): Promise<[BigNumber]>;

    "distributed()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    distributionStart(overrides?: CallOverrides): Promise<[BigNumber]>;

    "distributionStart()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    duration(overrides?: CallOverrides): Promise<[BigNumber]>;

    "duration()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    empty(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "empty()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    farm(overrides?: CallOverrides): Promise<[string]>;

    "farm()"(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _distributionStart: BigNumberish,
      _duration: BigNumberish,
      _amount: BigNumberish,
      _trustToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initialize(uint256,uint256,uint256,address)"(
      _distributionStart: BigNumberish,
      _duration: BigNumberish,
      _amount: BigNumberish,
      _trustToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<[boolean]>;

    "isInitialized()"(overrides?: CallOverrides): Promise<[boolean]>;

    lastDistribution(overrides?: CallOverrides): Promise<[BigNumber]>;

    "lastDistribution()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    nextDistribution(overrides?: CallOverrides): Promise<[BigNumber]>;

    "nextDistribution()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    restart(
      _distributionStart: BigNumberish,
      _duration: BigNumberish,
      _dailyDistribution: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "restart(uint256,uint256,uint256)"(
      _distributionStart: BigNumberish,
      _duration: BigNumberish,
      _dailyDistribution: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDailyDistribution(
      dailyDistribution: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setDailyDistribution(uint256)"(
      dailyDistribution: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFarm(
      newFarm: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setFarm(address)"(
      newFarm: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalAmount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    trustToken(overrides?: CallOverrides): Promise<[string]>;

    "trustToken()"(overrides?: CallOverrides): Promise<[string]>;
  };

  distribute(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "distribute()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  distributed(overrides?: CallOverrides): Promise<BigNumber>;

  "distributed()"(overrides?: CallOverrides): Promise<BigNumber>;

  distributionStart(overrides?: CallOverrides): Promise<BigNumber>;

  "distributionStart()"(overrides?: CallOverrides): Promise<BigNumber>;

  duration(overrides?: CallOverrides): Promise<BigNumber>;

  "duration()"(overrides?: CallOverrides): Promise<BigNumber>;

  empty(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "empty()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  farm(overrides?: CallOverrides): Promise<string>;

  "farm()"(overrides?: CallOverrides): Promise<string>;

  initialize(
    _distributionStart: BigNumberish,
    _duration: BigNumberish,
    _amount: BigNumberish,
    _trustToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initialize(uint256,uint256,uint256,address)"(
    _distributionStart: BigNumberish,
    _duration: BigNumberish,
    _amount: BigNumberish,
    _trustToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isInitialized(overrides?: CallOverrides): Promise<boolean>;

  "isInitialized()"(overrides?: CallOverrides): Promise<boolean>;

  lastDistribution(overrides?: CallOverrides): Promise<BigNumber>;

  "lastDistribution()"(overrides?: CallOverrides): Promise<BigNumber>;

  nextDistribution(overrides?: CallOverrides): Promise<BigNumber>;

  "nextDistribution()"(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  restart(
    _distributionStart: BigNumberish,
    _duration: BigNumberish,
    _dailyDistribution: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "restart(uint256,uint256,uint256)"(
    _distributionStart: BigNumberish,
    _duration: BigNumberish,
    _dailyDistribution: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDailyDistribution(
    dailyDistribution: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setDailyDistribution(uint256)"(
    dailyDistribution: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFarm(
    newFarm: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setFarm(address)"(
    newFarm: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalAmount(overrides?: CallOverrides): Promise<BigNumber>;

  "totalAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  trustToken(overrides?: CallOverrides): Promise<string>;

  "trustToken()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    distribute(overrides?: CallOverrides): Promise<void>;

    "distribute()"(overrides?: CallOverrides): Promise<void>;

    distributed(overrides?: CallOverrides): Promise<BigNumber>;

    "distributed()"(overrides?: CallOverrides): Promise<BigNumber>;

    distributionStart(overrides?: CallOverrides): Promise<BigNumber>;

    "distributionStart()"(overrides?: CallOverrides): Promise<BigNumber>;

    duration(overrides?: CallOverrides): Promise<BigNumber>;

    "duration()"(overrides?: CallOverrides): Promise<BigNumber>;

    empty(overrides?: CallOverrides): Promise<void>;

    "empty()"(overrides?: CallOverrides): Promise<void>;

    farm(overrides?: CallOverrides): Promise<string>;

    "farm()"(overrides?: CallOverrides): Promise<string>;

    initialize(
      _distributionStart: BigNumberish,
      _duration: BigNumberish,
      _amount: BigNumberish,
      _trustToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(uint256,uint256,uint256,address)"(
      _distributionStart: BigNumberish,
      _duration: BigNumberish,
      _amount: BigNumberish,
      _trustToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isInitialized(overrides?: CallOverrides): Promise<boolean>;

    "isInitialized()"(overrides?: CallOverrides): Promise<boolean>;

    lastDistribution(overrides?: CallOverrides): Promise<BigNumber>;

    "lastDistribution()"(overrides?: CallOverrides): Promise<BigNumber>;

    nextDistribution(overrides?: CallOverrides): Promise<BigNumber>;

    "nextDistribution()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    restart(
      _distributionStart: BigNumberish,
      _duration: BigNumberish,
      _dailyDistribution: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "restart(uint256,uint256,uint256)"(
      _distributionStart: BigNumberish,
      _duration: BigNumberish,
      _dailyDistribution: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setDailyDistribution(
      dailyDistribution: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setDailyDistribution(uint256)"(
      dailyDistribution: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setFarm(newFarm: string, overrides?: CallOverrides): Promise<void>;

    "setFarm(address)"(
      newFarm: string,
      overrides?: CallOverrides
    ): Promise<void>;

    totalAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "totalAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    trustToken(overrides?: CallOverrides): Promise<string>;

    "trustToken()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    Distributed(
      amount: null
    ): TypedEventFilter<[BigNumber], { amount: BigNumber }>;

    DistributionRestarted(
      _distributionStart: null,
      _duration: null,
      _dailyDistribution: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      {
        _distributionStart: BigNumber;
        _duration: BigNumber;
        _dailyDistribution: BigNumber;
      }
    >;

    FarmChanged(newFarm: null): TypedEventFilter<[string], { newFarm: string }>;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    TotalAmountChanged(
      newTotalAmount: null
    ): TypedEventFilter<[BigNumber], { newTotalAmount: BigNumber }>;
  };

  estimateGas: {
    distribute(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "distribute()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    distributed(overrides?: CallOverrides): Promise<BigNumber>;

    "distributed()"(overrides?: CallOverrides): Promise<BigNumber>;

    distributionStart(overrides?: CallOverrides): Promise<BigNumber>;

    "distributionStart()"(overrides?: CallOverrides): Promise<BigNumber>;

    duration(overrides?: CallOverrides): Promise<BigNumber>;

    "duration()"(overrides?: CallOverrides): Promise<BigNumber>;

    empty(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "empty()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    farm(overrides?: CallOverrides): Promise<BigNumber>;

    "farm()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _distributionStart: BigNumberish,
      _duration: BigNumberish,
      _amount: BigNumberish,
      _trustToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initialize(uint256,uint256,uint256,address)"(
      _distributionStart: BigNumberish,
      _duration: BigNumberish,
      _amount: BigNumberish,
      _trustToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isInitialized(overrides?: CallOverrides): Promise<BigNumber>;

    "isInitialized()"(overrides?: CallOverrides): Promise<BigNumber>;

    lastDistribution(overrides?: CallOverrides): Promise<BigNumber>;

    "lastDistribution()"(overrides?: CallOverrides): Promise<BigNumber>;

    nextDistribution(overrides?: CallOverrides): Promise<BigNumber>;

    "nextDistribution()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    restart(
      _distributionStart: BigNumberish,
      _duration: BigNumberish,
      _dailyDistribution: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "restart(uint256,uint256,uint256)"(
      _distributionStart: BigNumberish,
      _duration: BigNumberish,
      _dailyDistribution: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDailyDistribution(
      dailyDistribution: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setDailyDistribution(uint256)"(
      dailyDistribution: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFarm(
      newFarm: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setFarm(address)"(
      newFarm: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "totalAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    trustToken(overrides?: CallOverrides): Promise<BigNumber>;

    "trustToken()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    distribute(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "distribute()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    distributed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "distributed()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    distributionStart(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "distributionStart()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    duration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "duration()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    empty(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "empty()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    farm(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "farm()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _distributionStart: BigNumberish,
      _duration: BigNumberish,
      _amount: BigNumberish,
      _trustToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initialize(uint256,uint256,uint256,address)"(
      _distributionStart: BigNumberish,
      _duration: BigNumberish,
      _amount: BigNumberish,
      _trustToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isInitialized()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastDistribution(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lastDistribution()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nextDistribution(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nextDistribution()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    restart(
      _distributionStart: BigNumberish,
      _duration: BigNumberish,
      _dailyDistribution: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "restart(uint256,uint256,uint256)"(
      _distributionStart: BigNumberish,
      _duration: BigNumberish,
      _dailyDistribution: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDailyDistribution(
      dailyDistribution: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setDailyDistribution(uint256)"(
      dailyDistribution: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFarm(
      newFarm: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setFarm(address)"(
      newFarm: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalAmount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    trustToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "trustToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

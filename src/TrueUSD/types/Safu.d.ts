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

interface SafuInterface extends ethers.utils.Interface {
  functions: {
    "_1Inch()": FunctionFragment;
    "claimOwnership()": FunctionFragment;
    "compensate(address)": FunctionFragment;
    "deficiencyToken(address)": FunctionFragment;
    "initialize(address,address,address)": FunctionFragment;
    "isInitialized()": FunctionFragment;
    "legacyDeficiencyToken(address)": FunctionFragment;
    "legacyLiquidate(address)": FunctionFragment;
    "legacyReclaim(address,uint256)": FunctionFragment;
    "legacyRedeem(address)": FunctionFragment;
    "liquidate(address)": FunctionFragment;
    "liquidator()": FunctionFragment;
    "loanFactory()": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingOwner()": FunctionFragment;
    "poolDeficit(address)": FunctionFragment;
    "reclaim(address,uint256)": FunctionFragment;
    "redeem(address)": FunctionFragment;
    "swap(bytes,uint256)": FunctionFragment;
    "tokenBalance(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "_1Inch", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "compensate", values: [string]): string;
  encodeFunctionData(
    functionFragment: "deficiencyToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "legacyDeficiencyToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "legacyLiquidate",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "legacyReclaim",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "legacyRedeem",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "liquidate", values: [string]): string;
  encodeFunctionData(
    functionFragment: "liquidator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "loanFactory",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "poolDeficit", values: [string]): string;
  encodeFunctionData(
    functionFragment: "reclaim",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "redeem", values: [string]): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenBalance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "_1Inch", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "compensate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deficiencyToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "legacyDeficiencyToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "legacyLiquidate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "legacyReclaim",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "legacyRedeem",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "liquidate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "liquidator", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "loanFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "poolDeficit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "reclaim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "Liquidated(address,uint256,address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Reclaimed(address,uint256)": EventFragment;
    "Redeemed(address,uint256,uint256)": EventFragment;
    "Swapped(uint256,address,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Liquidated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Reclaimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Redeemed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Swapped"): EventFragment;
}

export class Safu extends Contract {
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

  interface: SafuInterface;

  functions: {
    _1Inch(overrides?: CallOverrides): Promise<[string]>;

    "_1Inch()"(overrides?: CallOverrides): Promise<[string]>;

    claimOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "claimOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    compensate(
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "compensate(address)"(
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deficiencyToken(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    "deficiencyToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    initialize(
      _loanFactory: string,
      _liquidator: string,
      __1Inch: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initialize(address,address,address)"(
      _loanFactory: string,
      _liquidator: string,
      __1Inch: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<[boolean]>;

    "isInitialized()"(overrides?: CallOverrides): Promise<[boolean]>;

    legacyDeficiencyToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "legacyDeficiencyToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    legacyLiquidate(
      loan: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "legacyLiquidate(address)"(
      loan: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    legacyReclaim(
      loan: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "legacyReclaim(address,uint256)"(
      loan: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    legacyRedeem(
      loan: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "legacyRedeem(address)"(
      loan: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    liquidate(
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "liquidate(address)"(
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    liquidator(overrides?: CallOverrides): Promise<[string]>;

    "liquidator()"(overrides?: CallOverrides): Promise<[string]>;

    loanFactory(overrides?: CallOverrides): Promise<[string]>;

    "loanFactory()"(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    pendingOwner(overrides?: CallOverrides): Promise<[string]>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<[string]>;

    poolDeficit(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "poolDeficit(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    reclaim(
      debt: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "reclaim(address,uint256)"(
      debt: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    redeem(
      debt: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "redeem(address)"(
      debt: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swap(
      data: BytesLike,
      minReturnAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "swap(bytes,uint256)"(
      data: BytesLike,
      minReturnAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenBalance(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "tokenBalance(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  _1Inch(overrides?: CallOverrides): Promise<string>;

  "_1Inch()"(overrides?: CallOverrides): Promise<string>;

  claimOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "claimOwnership()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  compensate(
    borrower: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "compensate(address)"(
    borrower: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deficiencyToken(arg0: string, overrides?: CallOverrides): Promise<string>;

  "deficiencyToken(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>;

  initialize(
    _loanFactory: string,
    _liquidator: string,
    __1Inch: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initialize(address,address,address)"(
    _loanFactory: string,
    _liquidator: string,
    __1Inch: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isInitialized(overrides?: CallOverrides): Promise<boolean>;

  "isInitialized()"(overrides?: CallOverrides): Promise<boolean>;

  legacyDeficiencyToken(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "legacyDeficiencyToken(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>;

  legacyLiquidate(
    loan: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "legacyLiquidate(address)"(
    loan: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  legacyReclaim(
    loan: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "legacyReclaim(address,uint256)"(
    loan: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  legacyRedeem(
    loan: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "legacyRedeem(address)"(
    loan: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  liquidate(
    borrower: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "liquidate(address)"(
    borrower: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  liquidator(overrides?: CallOverrides): Promise<string>;

  "liquidator()"(overrides?: CallOverrides): Promise<string>;

  loanFactory(overrides?: CallOverrides): Promise<string>;

  "loanFactory()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  pendingOwner(overrides?: CallOverrides): Promise<string>;

  "pendingOwner()"(overrides?: CallOverrides): Promise<string>;

  poolDeficit(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "poolDeficit(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  reclaim(
    debt: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "reclaim(address,uint256)"(
    debt: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  redeem(
    debt: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "redeem(address)"(
    debt: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swap(
    data: BytesLike,
    minReturnAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "swap(bytes,uint256)"(
    data: BytesLike,
    minReturnAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenBalance(token: string, overrides?: CallOverrides): Promise<BigNumber>;

  "tokenBalance(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _1Inch(overrides?: CallOverrides): Promise<string>;

    "_1Inch()"(overrides?: CallOverrides): Promise<string>;

    claimOwnership(overrides?: CallOverrides): Promise<void>;

    "claimOwnership()"(overrides?: CallOverrides): Promise<void>;

    compensate(borrower: string, overrides?: CallOverrides): Promise<void>;

    "compensate(address)"(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<void>;

    deficiencyToken(arg0: string, overrides?: CallOverrides): Promise<string>;

    "deficiencyToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>;

    initialize(
      _loanFactory: string,
      _liquidator: string,
      __1Inch: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address,address,address)"(
      _loanFactory: string,
      _liquidator: string,
      __1Inch: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isInitialized(overrides?: CallOverrides): Promise<boolean>;

    "isInitialized()"(overrides?: CallOverrides): Promise<boolean>;

    legacyDeficiencyToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "legacyDeficiencyToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>;

    legacyLiquidate(loan: string, overrides?: CallOverrides): Promise<void>;

    "legacyLiquidate(address)"(
      loan: string,
      overrides?: CallOverrides
    ): Promise<void>;

    legacyReclaim(
      loan: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "legacyReclaim(address,uint256)"(
      loan: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    legacyRedeem(loan: string, overrides?: CallOverrides): Promise<void>;

    "legacyRedeem(address)"(
      loan: string,
      overrides?: CallOverrides
    ): Promise<void>;

    liquidate(borrower: string, overrides?: CallOverrides): Promise<void>;

    "liquidate(address)"(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<void>;

    liquidator(overrides?: CallOverrides): Promise<string>;

    "liquidator()"(overrides?: CallOverrides): Promise<string>;

    loanFactory(overrides?: CallOverrides): Promise<string>;

    "loanFactory()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    pendingOwner(overrides?: CallOverrides): Promise<string>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<string>;

    poolDeficit(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "poolDeficit(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    reclaim(
      debt: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "reclaim(address,uint256)"(
      debt: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    redeem(debt: string, overrides?: CallOverrides): Promise<void>;

    "redeem(address)"(debt: string, overrides?: CallOverrides): Promise<void>;

    swap(
      data: BytesLike,
      minReturnAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "swap(bytes,uint256)"(
      data: BytesLike,
      minReturnAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenBalance(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    "tokenBalance(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Liquidated(
      debt: null,
      repaid: null,
      deficiencyToken: null,
      deficit: null
    ): TypedEventFilter<
      [string, BigNumber, string, BigNumber],
      {
        debt: string;
        repaid: BigNumber;
        deficiencyToken: string;
        deficit: BigNumber;
      }
    >;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    Reclaimed(
      debt: null,
      reclaimed: null
    ): TypedEventFilter<
      [string, BigNumber],
      { debt: string; reclaimed: BigNumber }
    >;

    Redeemed(
      debt: null,
      burnedAmount: null,
      redeemedAmount: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { debt: string; burnedAmount: BigNumber; redeemedAmount: BigNumber }
    >;

    Swapped(
      amount: null,
      srcToken: null,
      returnAmount: null,
      dstToken: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, string],
      {
        amount: BigNumber;
        srcToken: string;
        returnAmount: BigNumber;
        dstToken: string;
      }
    >;
  };

  estimateGas: {
    _1Inch(overrides?: CallOverrides): Promise<BigNumber>;

    "_1Inch()"(overrides?: CallOverrides): Promise<BigNumber>;

    claimOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "claimOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    compensate(
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "compensate(address)"(
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deficiencyToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "deficiencyToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _loanFactory: string,
      _liquidator: string,
      __1Inch: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initialize(address,address,address)"(
      _loanFactory: string,
      _liquidator: string,
      __1Inch: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isInitialized(overrides?: CallOverrides): Promise<BigNumber>;

    "isInitialized()"(overrides?: CallOverrides): Promise<BigNumber>;

    legacyDeficiencyToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "legacyDeficiencyToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    legacyLiquidate(
      loan: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "legacyLiquidate(address)"(
      loan: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    legacyReclaim(
      loan: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "legacyReclaim(address,uint256)"(
      loan: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    legacyRedeem(
      loan: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "legacyRedeem(address)"(
      loan: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    liquidate(
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "liquidate(address)"(
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    liquidator(overrides?: CallOverrides): Promise<BigNumber>;

    "liquidator()"(overrides?: CallOverrides): Promise<BigNumber>;

    loanFactory(overrides?: CallOverrides): Promise<BigNumber>;

    "loanFactory()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    poolDeficit(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "poolDeficit(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    reclaim(
      debt: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "reclaim(address,uint256)"(
      debt: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    redeem(
      debt: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "redeem(address)"(
      debt: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swap(
      data: BytesLike,
      minReturnAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "swap(bytes,uint256)"(
      data: BytesLike,
      minReturnAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenBalance(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    "tokenBalance(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _1Inch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "_1Inch()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "claimOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    compensate(
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "compensate(address)"(
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deficiencyToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "deficiencyToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _loanFactory: string,
      _liquidator: string,
      __1Inch: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initialize(address,address,address)"(
      _loanFactory: string,
      _liquidator: string,
      __1Inch: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isInitialized()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    legacyDeficiencyToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "legacyDeficiencyToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    legacyLiquidate(
      loan: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "legacyLiquidate(address)"(
      loan: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    legacyReclaim(
      loan: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "legacyReclaim(address,uint256)"(
      loan: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    legacyRedeem(
      loan: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "legacyRedeem(address)"(
      loan: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    liquidate(
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "liquidate(address)"(
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    liquidator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "liquidator()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    loanFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "loanFactory()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolDeficit(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "poolDeficit(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    reclaim(
      debt: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "reclaim(address,uint256)"(
      debt: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    redeem(
      debt: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "redeem(address)"(
      debt: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swap(
      data: BytesLike,
      minReturnAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "swap(bytes,uint256)"(
      data: BytesLike,
      minReturnAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenBalance(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokenBalance(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

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

interface MockLoanFactoryInterface extends ethers.utils.Interface {
  functions: {
    "createLoanToken(uint256,uint256,uint256)": FunctionFragment;
    "currencyToken()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "isInitialized()": FunctionFragment;
    "isLoanToken(address)": FunctionFragment;
    "lender()": FunctionFragment;
    "liquidator()": FunctionFragment;
    "setLender(address)": FunctionFragment;
    "setLiquidator()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createLoanToken",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "currencyToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isLoanToken", values: [string]): string;
  encodeFunctionData(functionFragment: "lender", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "liquidator",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setLender", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setLiquidator",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "createLoanToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currencyToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isLoanToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lender", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "liquidator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setLender", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setLiquidator",
    data: BytesLike
  ): Result;

  events: {
    "LoanTokenCreated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LoanTokenCreated"): EventFragment;
}

export class MockLoanFactory extends Contract {
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

  interface: MockLoanFactoryInterface;

  functions: {
    createLoanToken(
      _amount: BigNumberish,
      _term: BigNumberish,
      _apy: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "createLoanToken(uint256,uint256,uint256)"(
      _amount: BigNumberish,
      _term: BigNumberish,
      _apy: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    currencyToken(overrides?: CallOverrides): Promise<[string]>;

    "currencyToken()"(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _currencyToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initialize(address)"(
      _currencyToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<[boolean]>;

    "isInitialized()"(overrides?: CallOverrides): Promise<[boolean]>;

    isLoanToken(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isLoanToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    lender(overrides?: CallOverrides): Promise<[string]>;

    "lender()"(overrides?: CallOverrides): Promise<[string]>;

    liquidator(overrides?: CallOverrides): Promise<[string]>;

    "liquidator()"(overrides?: CallOverrides): Promise<[string]>;

    "setLender(address)"(
      newLender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setLender()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setLiquidator(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setLiquidator()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  createLoanToken(
    _amount: BigNumberish,
    _term: BigNumberish,
    _apy: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "createLoanToken(uint256,uint256,uint256)"(
    _amount: BigNumberish,
    _term: BigNumberish,
    _apy: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  currencyToken(overrides?: CallOverrides): Promise<string>;

  "currencyToken()"(overrides?: CallOverrides): Promise<string>;

  initialize(
    _currencyToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initialize(address)"(
    _currencyToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isInitialized(overrides?: CallOverrides): Promise<boolean>;

  "isInitialized()"(overrides?: CallOverrides): Promise<boolean>;

  isLoanToken(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "isLoanToken(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  lender(overrides?: CallOverrides): Promise<string>;

  "lender()"(overrides?: CallOverrides): Promise<string>;

  liquidator(overrides?: CallOverrides): Promise<string>;

  "liquidator()"(overrides?: CallOverrides): Promise<string>;

  "setLender(address)"(
    newLender: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setLender()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setLiquidator(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setLiquidator()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createLoanToken(
      _amount: BigNumberish,
      _term: BigNumberish,
      _apy: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "createLoanToken(uint256,uint256,uint256)"(
      _amount: BigNumberish,
      _term: BigNumberish,
      _apy: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    currencyToken(overrides?: CallOverrides): Promise<string>;

    "currencyToken()"(overrides?: CallOverrides): Promise<string>;

    initialize(
      _currencyToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address)"(
      _currencyToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isInitialized(overrides?: CallOverrides): Promise<boolean>;

    "isInitialized()"(overrides?: CallOverrides): Promise<boolean>;

    isLoanToken(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "isLoanToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    lender(overrides?: CallOverrides): Promise<string>;

    "lender()"(overrides?: CallOverrides): Promise<string>;

    liquidator(overrides?: CallOverrides): Promise<string>;

    "liquidator()"(overrides?: CallOverrides): Promise<string>;

    "setLender(address)"(
      newLender: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setLender()"(overrides?: CallOverrides): Promise<void>;

    setLiquidator(overrides?: CallOverrides): Promise<void>;

    "setLiquidator()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    LoanTokenCreated(
      contractAddress: null
    ): TypedEventFilter<[string], { contractAddress: string }>;
  };

  estimateGas: {
    createLoanToken(
      _amount: BigNumberish,
      _term: BigNumberish,
      _apy: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "createLoanToken(uint256,uint256,uint256)"(
      _amount: BigNumberish,
      _term: BigNumberish,
      _apy: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    currencyToken(overrides?: CallOverrides): Promise<BigNumber>;

    "currencyToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _currencyToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initialize(address)"(
      _currencyToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isInitialized(overrides?: CallOverrides): Promise<BigNumber>;

    "isInitialized()"(overrides?: CallOverrides): Promise<BigNumber>;

    isLoanToken(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isLoanToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lender(overrides?: CallOverrides): Promise<BigNumber>;

    "lender()"(overrides?: CallOverrides): Promise<BigNumber>;

    liquidator(overrides?: CallOverrides): Promise<BigNumber>;

    "liquidator()"(overrides?: CallOverrides): Promise<BigNumber>;

    "setLender(address)"(
      newLender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setLender()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setLiquidator(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setLiquidator()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createLoanToken(
      _amount: BigNumberish,
      _term: BigNumberish,
      _apy: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "createLoanToken(uint256,uint256,uint256)"(
      _amount: BigNumberish,
      _term: BigNumberish,
      _apy: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    currencyToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "currencyToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _currencyToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initialize(address)"(
      _currencyToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isInitialized()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isLoanToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isLoanToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lender(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lender()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "liquidator()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "setLender(address)"(
      newLender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setLender()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setLiquidator(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setLiquidator()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

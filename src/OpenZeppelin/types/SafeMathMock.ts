/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface SafeMathMockInterface extends utils.Interface {
  contractName: "SafeMathMock";
  functions: {
    "addMemoryCheck()": FunctionFragment;
    "divMemoryCheck()": FunctionFragment;
    "divWithMessage(uint256,uint256,string)": FunctionFragment;
    "doAdd(uint256,uint256)": FunctionFragment;
    "doDiv(uint256,uint256)": FunctionFragment;
    "doMod(uint256,uint256)": FunctionFragment;
    "doMul(uint256,uint256)": FunctionFragment;
    "doSub(uint256,uint256)": FunctionFragment;
    "modMemoryCheck()": FunctionFragment;
    "modWithMessage(uint256,uint256,string)": FunctionFragment;
    "mulMemoryCheck()": FunctionFragment;
    "subMemoryCheck()": FunctionFragment;
    "subWithMessage(uint256,uint256,string)": FunctionFragment;
    "tryAdd(uint256,uint256)": FunctionFragment;
    "tryDiv(uint256,uint256)": FunctionFragment;
    "tryMod(uint256,uint256)": FunctionFragment;
    "tryMul(uint256,uint256)": FunctionFragment;
    "trySub(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addMemoryCheck",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "divMemoryCheck",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "divWithMessage",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "doAdd",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "doDiv",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "doMod",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "doMul",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "doSub",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "modMemoryCheck",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "modWithMessage",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "mulMemoryCheck",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "subMemoryCheck",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "subWithMessage",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "tryAdd",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tryDiv",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tryMod",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tryMul",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "trySub",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addMemoryCheck",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "divMemoryCheck",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "divWithMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "doAdd", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "doDiv", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "doMod", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "doMul", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "doSub", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "modMemoryCheck",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "modWithMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mulMemoryCheck",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "subMemoryCheck",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "subWithMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tryAdd", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tryDiv", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tryMod", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tryMul", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "trySub", data: BytesLike): Result;

  events: {};
}

export interface SafeMathMock extends BaseContract {
  contractName: "SafeMathMock";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SafeMathMockInterface;

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
    addMemoryCheck(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { mem: BigNumber }>;

    divMemoryCheck(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { mem: BigNumber }>;

    divWithMessage(
      a: BigNumberish,
      b: BigNumberish,
      errorMessage: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    doAdd(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    doDiv(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    doMod(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    doMul(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    doSub(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    modMemoryCheck(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { mem: BigNumber }>;

    modWithMessage(
      a: BigNumberish,
      b: BigNumberish,
      errorMessage: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    mulMemoryCheck(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { mem: BigNumber }>;

    subMemoryCheck(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { mem: BigNumber }>;

    subWithMessage(
      a: BigNumberish,
      b: BigNumberish,
      errorMessage: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tryAdd(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { flag: boolean; value: BigNumber }>;

    tryDiv(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { flag: boolean; value: BigNumber }>;

    tryMod(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { flag: boolean; value: BigNumber }>;

    tryMul(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { flag: boolean; value: BigNumber }>;

    trySub(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { flag: boolean; value: BigNumber }>;
  };

  addMemoryCheck(overrides?: CallOverrides): Promise<BigNumber>;

  divMemoryCheck(overrides?: CallOverrides): Promise<BigNumber>;

  divWithMessage(
    a: BigNumberish,
    b: BigNumberish,
    errorMessage: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  doAdd(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  doDiv(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  doMod(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  doMul(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  doSub(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  modMemoryCheck(overrides?: CallOverrides): Promise<BigNumber>;

  modWithMessage(
    a: BigNumberish,
    b: BigNumberish,
    errorMessage: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  mulMemoryCheck(overrides?: CallOverrides): Promise<BigNumber>;

  subMemoryCheck(overrides?: CallOverrides): Promise<BigNumber>;

  subWithMessage(
    a: BigNumberish,
    b: BigNumberish,
    errorMessage: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tryAdd(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber] & { flag: boolean; value: BigNumber }>;

  tryDiv(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber] & { flag: boolean; value: BigNumber }>;

  tryMod(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber] & { flag: boolean; value: BigNumber }>;

  tryMul(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber] & { flag: boolean; value: BigNumber }>;

  trySub(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber] & { flag: boolean; value: BigNumber }>;

  callStatic: {
    addMemoryCheck(overrides?: CallOverrides): Promise<BigNumber>;

    divMemoryCheck(overrides?: CallOverrides): Promise<BigNumber>;

    divWithMessage(
      a: BigNumberish,
      b: BigNumberish,
      errorMessage: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    doAdd(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    doDiv(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    doMod(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    doMul(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    doSub(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    modMemoryCheck(overrides?: CallOverrides): Promise<BigNumber>;

    modWithMessage(
      a: BigNumberish,
      b: BigNumberish,
      errorMessage: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mulMemoryCheck(overrides?: CallOverrides): Promise<BigNumber>;

    subMemoryCheck(overrides?: CallOverrides): Promise<BigNumber>;

    subWithMessage(
      a: BigNumberish,
      b: BigNumberish,
      errorMessage: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tryAdd(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { flag: boolean; value: BigNumber }>;

    tryDiv(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { flag: boolean; value: BigNumber }>;

    tryMod(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { flag: boolean; value: BigNumber }>;

    tryMul(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { flag: boolean; value: BigNumber }>;

    trySub(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { flag: boolean; value: BigNumber }>;
  };

  filters: {};

  estimateGas: {
    addMemoryCheck(overrides?: CallOverrides): Promise<BigNumber>;

    divMemoryCheck(overrides?: CallOverrides): Promise<BigNumber>;

    divWithMessage(
      a: BigNumberish,
      b: BigNumberish,
      errorMessage: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    doAdd(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    doDiv(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    doMod(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    doMul(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    doSub(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    modMemoryCheck(overrides?: CallOverrides): Promise<BigNumber>;

    modWithMessage(
      a: BigNumberish,
      b: BigNumberish,
      errorMessage: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mulMemoryCheck(overrides?: CallOverrides): Promise<BigNumber>;

    subMemoryCheck(overrides?: CallOverrides): Promise<BigNumber>;

    subWithMessage(
      a: BigNumberish,
      b: BigNumberish,
      errorMessage: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tryAdd(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tryDiv(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tryMod(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tryMul(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    trySub(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addMemoryCheck(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    divMemoryCheck(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    divWithMessage(
      a: BigNumberish,
      b: BigNumberish,
      errorMessage: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    doAdd(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    doDiv(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    doMod(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    doMul(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    doSub(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    modMemoryCheck(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    modWithMessage(
      a: BigNumberish,
      b: BigNumberish,
      errorMessage: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mulMemoryCheck(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    subMemoryCheck(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    subWithMessage(
      a: BigNumberish,
      b: BigNumberish,
      errorMessage: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tryAdd(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tryDiv(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tryMod(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tryMul(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    trySub(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

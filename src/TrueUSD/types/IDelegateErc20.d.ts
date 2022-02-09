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

interface IDelegateErc20Interface extends ethers.utils.Interface {
  functions: {
    "delegateAllowance(address,address)": FunctionFragment;
    "delegateApprove(address,uint256,address)": FunctionFragment;
    "delegateBalanceOf(address)": FunctionFragment;
    "delegateDecreaseApproval(address,uint256,address)": FunctionFragment;
    "delegateIncreaseApproval(address,uint256,address)": FunctionFragment;
    "delegateTotalSupply()": FunctionFragment;
    "delegateTransfer(address,uint256,address)": FunctionFragment;
    "delegateTransferFrom(address,address,uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "delegateAllowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "delegateApprove",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "delegateBalanceOf",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "delegateDecreaseApproval",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "delegateIncreaseApproval",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "delegateTotalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "delegateTransfer",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "delegateTransferFrom",
    values: [string, string, BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "delegateAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegateApprove",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegateBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegateDecreaseApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegateIncreaseApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegateTotalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegateTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegateTransferFrom",
    data: BytesLike
  ): Result;

  events: {};
}

export class IDelegateErc20 extends Contract {
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

  interface: IDelegateErc20Interface;

  functions: {
    delegateAllowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "delegateAllowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    delegateApprove(
      spender: string,
      value: BigNumberish,
      origSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "delegateApprove(address,uint256,address)"(
      spender: string,
      value: BigNumberish,
      origSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    delegateBalanceOf(
      who: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "delegateBalanceOf(address)"(
      who: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    delegateDecreaseApproval(
      spender: string,
      subtractedValue: BigNumberish,
      origSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "delegateDecreaseApproval(address,uint256,address)"(
      spender: string,
      subtractedValue: BigNumberish,
      origSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    delegateIncreaseApproval(
      spender: string,
      addedValue: BigNumberish,
      origSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "delegateIncreaseApproval(address,uint256,address)"(
      spender: string,
      addedValue: BigNumberish,
      origSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    delegateTotalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    "delegateTotalSupply()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    delegateTransfer(
      to: string,
      value: BigNumberish,
      origSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "delegateTransfer(address,uint256,address)"(
      to: string,
      value: BigNumberish,
      origSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    delegateTransferFrom(
      from: string,
      to: string,
      value: BigNumberish,
      origSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "delegateTransferFrom(address,address,uint256,address)"(
      from: string,
      to: string,
      value: BigNumberish,
      origSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  delegateAllowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "delegateAllowance(address,address)"(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  delegateApprove(
    spender: string,
    value: BigNumberish,
    origSender: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "delegateApprove(address,uint256,address)"(
    spender: string,
    value: BigNumberish,
    origSender: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  delegateBalanceOf(who: string, overrides?: CallOverrides): Promise<BigNumber>;

  "delegateBalanceOf(address)"(
    who: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  delegateDecreaseApproval(
    spender: string,
    subtractedValue: BigNumberish,
    origSender: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "delegateDecreaseApproval(address,uint256,address)"(
    spender: string,
    subtractedValue: BigNumberish,
    origSender: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  delegateIncreaseApproval(
    spender: string,
    addedValue: BigNumberish,
    origSender: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "delegateIncreaseApproval(address,uint256,address)"(
    spender: string,
    addedValue: BigNumberish,
    origSender: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  delegateTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "delegateTotalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  delegateTransfer(
    to: string,
    value: BigNumberish,
    origSender: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "delegateTransfer(address,uint256,address)"(
    to: string,
    value: BigNumberish,
    origSender: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  delegateTransferFrom(
    from: string,
    to: string,
    value: BigNumberish,
    origSender: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "delegateTransferFrom(address,address,uint256,address)"(
    from: string,
    to: string,
    value: BigNumberish,
    origSender: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    delegateAllowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "delegateAllowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    delegateApprove(
      spender: string,
      value: BigNumberish,
      origSender: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "delegateApprove(address,uint256,address)"(
      spender: string,
      value: BigNumberish,
      origSender: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    delegateBalanceOf(
      who: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "delegateBalanceOf(address)"(
      who: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    delegateDecreaseApproval(
      spender: string,
      subtractedValue: BigNumberish,
      origSender: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "delegateDecreaseApproval(address,uint256,address)"(
      spender: string,
      subtractedValue: BigNumberish,
      origSender: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    delegateIncreaseApproval(
      spender: string,
      addedValue: BigNumberish,
      origSender: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "delegateIncreaseApproval(address,uint256,address)"(
      spender: string,
      addedValue: BigNumberish,
      origSender: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    delegateTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "delegateTotalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    delegateTransfer(
      to: string,
      value: BigNumberish,
      origSender: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "delegateTransfer(address,uint256,address)"(
      to: string,
      value: BigNumberish,
      origSender: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    delegateTransferFrom(
      from: string,
      to: string,
      value: BigNumberish,
      origSender: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "delegateTransferFrom(address,address,uint256,address)"(
      from: string,
      to: string,
      value: BigNumberish,
      origSender: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    delegateAllowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "delegateAllowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    delegateApprove(
      spender: string,
      value: BigNumberish,
      origSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "delegateApprove(address,uint256,address)"(
      spender: string,
      value: BigNumberish,
      origSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    delegateBalanceOf(
      who: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "delegateBalanceOf(address)"(
      who: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    delegateDecreaseApproval(
      spender: string,
      subtractedValue: BigNumberish,
      origSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "delegateDecreaseApproval(address,uint256,address)"(
      spender: string,
      subtractedValue: BigNumberish,
      origSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    delegateIncreaseApproval(
      spender: string,
      addedValue: BigNumberish,
      origSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "delegateIncreaseApproval(address,uint256,address)"(
      spender: string,
      addedValue: BigNumberish,
      origSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    delegateTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "delegateTotalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    delegateTransfer(
      to: string,
      value: BigNumberish,
      origSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "delegateTransfer(address,uint256,address)"(
      to: string,
      value: BigNumberish,
      origSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    delegateTransferFrom(
      from: string,
      to: string,
      value: BigNumberish,
      origSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "delegateTransferFrom(address,address,uint256,address)"(
      from: string,
      to: string,
      value: BigNumberish,
      origSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    delegateAllowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "delegateAllowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    delegateApprove(
      spender: string,
      value: BigNumberish,
      origSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "delegateApprove(address,uint256,address)"(
      spender: string,
      value: BigNumberish,
      origSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    delegateBalanceOf(
      who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "delegateBalanceOf(address)"(
      who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    delegateDecreaseApproval(
      spender: string,
      subtractedValue: BigNumberish,
      origSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "delegateDecreaseApproval(address,uint256,address)"(
      spender: string,
      subtractedValue: BigNumberish,
      origSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    delegateIncreaseApproval(
      spender: string,
      addedValue: BigNumberish,
      origSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "delegateIncreaseApproval(address,uint256,address)"(
      spender: string,
      addedValue: BigNumberish,
      origSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    delegateTotalSupply(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "delegateTotalSupply()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    delegateTransfer(
      to: string,
      value: BigNumberish,
      origSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "delegateTransfer(address,uint256,address)"(
      to: string,
      value: BigNumberish,
      origSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    delegateTransferFrom(
      from: string,
      to: string,
      value: BigNumberish,
      origSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "delegateTransferFrom(address,address,uint256,address)"(
      from: string,
      to: string,
      value: BigNumberish,
      origSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
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

interface ILoanFactoryInterface extends ethers.utils.Interface {
  functions: {
    "createLoanToken(uint256,uint256,uint256)": FunctionFragment;
    "isLoanToken(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createLoanToken",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "isLoanToken", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "createLoanToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isLoanToken",
    data: BytesLike
  ): Result;

  events: {};
}

export class ILoanFactory extends Contract {
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

  interface: ILoanFactoryInterface;

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

    isLoanToken(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isLoanToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
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

  isLoanToken(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "isLoanToken(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

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

    isLoanToken(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "isLoanToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

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

    isLoanToken(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isLoanToken(address)"(
      arg0: string,
      overrides?: CallOverrides
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

    isLoanToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isLoanToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

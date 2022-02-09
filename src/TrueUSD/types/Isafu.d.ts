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

interface IsafuInterface extends ethers.utils.Interface {
  functions: {
    "deficiencyToken(address)": FunctionFragment;
    "legacyDeficiencyToken(address)": FunctionFragment;
    "legacyReclaim(address,uint256)": FunctionFragment;
    "poolDeficit(address)": FunctionFragment;
    "reclaim(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "deficiencyToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "legacyDeficiencyToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "legacyReclaim",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "poolDeficit", values: [string]): string;
  encodeFunctionData(
    functionFragment: "reclaim",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "deficiencyToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "legacyDeficiencyToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "legacyReclaim",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "poolDeficit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "reclaim", data: BytesLike): Result;

  events: {};
}

export class Isafu extends Contract {
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

  interface: IsafuInterface;

  functions: {
    deficiencyToken(debt: string, overrides?: CallOverrides): Promise<[string]>;

    "deficiencyToken(address)"(
      debt: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    legacyDeficiencyToken(
      loan: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "legacyDeficiencyToken(address)"(
      loan: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

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

    poolDeficit(pool: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "poolDeficit(address)"(
      pool: string,
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
  };

  deficiencyToken(debt: string, overrides?: CallOverrides): Promise<string>;

  "deficiencyToken(address)"(
    debt: string,
    overrides?: CallOverrides
  ): Promise<string>;

  legacyDeficiencyToken(
    loan: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "legacyDeficiencyToken(address)"(
    loan: string,
    overrides?: CallOverrides
  ): Promise<string>;

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

  poolDeficit(pool: string, overrides?: CallOverrides): Promise<BigNumber>;

  "poolDeficit(address)"(
    pool: string,
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

  callStatic: {
    deficiencyToken(debt: string, overrides?: CallOverrides): Promise<string>;

    "deficiencyToken(address)"(
      debt: string,
      overrides?: CallOverrides
    ): Promise<string>;

    legacyDeficiencyToken(
      loan: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "legacyDeficiencyToken(address)"(
      loan: string,
      overrides?: CallOverrides
    ): Promise<string>;

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

    poolDeficit(pool: string, overrides?: CallOverrides): Promise<BigNumber>;

    "poolDeficit(address)"(
      pool: string,
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
  };

  filters: {};

  estimateGas: {
    deficiencyToken(
      debt: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "deficiencyToken(address)"(
      debt: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    legacyDeficiencyToken(
      loan: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "legacyDeficiencyToken(address)"(
      loan: string,
      overrides?: CallOverrides
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

    poolDeficit(pool: string, overrides?: CallOverrides): Promise<BigNumber>;

    "poolDeficit(address)"(
      pool: string,
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
  };

  populateTransaction: {
    deficiencyToken(
      debt: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "deficiencyToken(address)"(
      debt: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    legacyDeficiencyToken(
      loan: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "legacyDeficiencyToken(address)"(
      loan: string,
      overrides?: CallOverrides
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

    poolDeficit(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "poolDeficit(address)"(
      pool: string,
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
  };
}
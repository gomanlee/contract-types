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

interface MockRegistrySubscriberInterface extends ethers.utils.Interface {
  functions: {
    "getAttributeValue(address,bytes32)": FunctionFragment;
    "syncAttributeValue(address,bytes32,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAttributeValue",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "syncAttributeValue",
    values: [string, BytesLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAttributeValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "syncAttributeValue",
    data: BytesLike
  ): Result;

  events: {};
}

export class MockRegistrySubscriber extends Contract {
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

  interface: MockRegistrySubscriberInterface;

  functions: {
    getAttributeValue(
      _who: string,
      _attribute: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getAttributeValue(address,bytes32)"(
      _who: string,
      _attribute: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    syncAttributeValue(
      _who: string,
      _attribute: BytesLike,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "syncAttributeValue(address,bytes32,uint256)"(
      _who: string,
      _attribute: BytesLike,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getAttributeValue(
    _who: string,
    _attribute: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getAttributeValue(address,bytes32)"(
    _who: string,
    _attribute: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  syncAttributeValue(
    _who: string,
    _attribute: BytesLike,
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "syncAttributeValue(address,bytes32,uint256)"(
    _who: string,
    _attribute: BytesLike,
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getAttributeValue(
      _who: string,
      _attribute: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAttributeValue(address,bytes32)"(
      _who: string,
      _attribute: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    syncAttributeValue(
      _who: string,
      _attribute: BytesLike,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "syncAttributeValue(address,bytes32,uint256)"(
      _who: string,
      _attribute: BytesLike,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getAttributeValue(
      _who: string,
      _attribute: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAttributeValue(address,bytes32)"(
      _who: string,
      _attribute: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    syncAttributeValue(
      _who: string,
      _attribute: BytesLike,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "syncAttributeValue(address,bytes32,uint256)"(
      _who: string,
      _attribute: BytesLike,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAttributeValue(
      _who: string,
      _attribute: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAttributeValue(address,bytes32)"(
      _who: string,
      _attribute: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    syncAttributeValue(
      _who: string,
      _attribute: BytesLike,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "syncAttributeValue(address,bytes32,uint256)"(
      _who: string,
      _attribute: BytesLike,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
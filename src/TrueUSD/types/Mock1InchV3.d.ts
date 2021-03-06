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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface Mock1InchV3Interface extends ethers.utils.Interface {
  functions: {
    "setOutputAmount(uint256)": FunctionFragment;
    "swap(address,tuple,bytes)": FunctionFragment;
    "unoswap(address,uint256,uint256,bytes32[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "setOutputAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      string,
      {
        srcToken: string;
        dstToken: string;
        srcReceiver: string;
        dstReceiver: string;
        amount: BigNumberish;
        minReturnAmount: BigNumberish;
        flags: BigNumberish;
        permit: BytesLike;
      },
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "unoswap",
    values: [string, BigNumberish, BigNumberish, BytesLike[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "setOutputAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unoswap", data: BytesLike): Result;

  events: {};
}

export class Mock1InchV3 extends Contract {
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

  interface: Mock1InchV3Interface;

  functions: {
    setOutputAmount(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setOutputAmount(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swap(
      arg0: string,
      description: {
        srcToken: string;
        dstToken: string;
        srcReceiver: string;
        dstReceiver: string;
        amount: BigNumberish;
        minReturnAmount: BigNumberish;
        flags: BigNumberish;
        permit: BytesLike;
      },
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "swap(address,tuple,bytes)"(
      arg0: string,
      description: {
        srcToken: string;
        dstToken: string;
        srcReceiver: string;
        dstReceiver: string;
        amount: BigNumberish;
        minReturnAmount: BigNumberish;
        flags: BigNumberish;
        permit: BytesLike;
      },
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unoswap(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "unoswap(address,uint256,uint256,bytes32[])"(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  setOutputAmount(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setOutputAmount(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swap(
    arg0: string,
    description: {
      srcToken: string;
      dstToken: string;
      srcReceiver: string;
      dstReceiver: string;
      amount: BigNumberish;
      minReturnAmount: BigNumberish;
      flags: BigNumberish;
      permit: BytesLike;
    },
    arg2: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "swap(address,tuple,bytes)"(
    arg0: string,
    description: {
      srcToken: string;
      dstToken: string;
      srcReceiver: string;
      dstReceiver: string;
      amount: BigNumberish;
      minReturnAmount: BigNumberish;
      flags: BigNumberish;
      permit: BytesLike;
    },
    arg2: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unoswap(
    arg0: string,
    arg1: BigNumberish,
    arg2: BigNumberish,
    arg3: BytesLike[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "unoswap(address,uint256,uint256,bytes32[])"(
    arg0: string,
    arg1: BigNumberish,
    arg2: BigNumberish,
    arg3: BytesLike[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    setOutputAmount(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setOutputAmount(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swap(
      arg0: string,
      description: {
        srcToken: string;
        dstToken: string;
        srcReceiver: string;
        dstReceiver: string;
        amount: BigNumberish;
        minReturnAmount: BigNumberish;
        flags: BigNumberish;
        permit: BytesLike;
      },
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        returnAmount: BigNumber;
        gasLeft: BigNumber;
        chiSpent: BigNumber;
      }
    >;

    "swap(address,tuple,bytes)"(
      arg0: string,
      description: {
        srcToken: string;
        dstToken: string;
        srcReceiver: string;
        dstReceiver: string;
        amount: BigNumberish;
        minReturnAmount: BigNumberish;
        flags: BigNumberish;
        permit: BytesLike;
      },
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        returnAmount: BigNumber;
        gasLeft: BigNumber;
        chiSpent: BigNumber;
      }
    >;

    unoswap(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "unoswap(address,uint256,uint256,bytes32[])"(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    setOutputAmount(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setOutputAmount(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swap(
      arg0: string,
      description: {
        srcToken: string;
        dstToken: string;
        srcReceiver: string;
        dstReceiver: string;
        amount: BigNumberish;
        minReturnAmount: BigNumberish;
        flags: BigNumberish;
        permit: BytesLike;
      },
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "swap(address,tuple,bytes)"(
      arg0: string,
      description: {
        srcToken: string;
        dstToken: string;
        srcReceiver: string;
        dstReceiver: string;
        amount: BigNumberish;
        minReturnAmount: BigNumberish;
        flags: BigNumberish;
        permit: BytesLike;
      },
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unoswap(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "unoswap(address,uint256,uint256,bytes32[])"(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    setOutputAmount(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setOutputAmount(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swap(
      arg0: string,
      description: {
        srcToken: string;
        dstToken: string;
        srcReceiver: string;
        dstReceiver: string;
        amount: BigNumberish;
        minReturnAmount: BigNumberish;
        flags: BigNumberish;
        permit: BytesLike;
      },
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "swap(address,tuple,bytes)"(
      arg0: string,
      description: {
        srcToken: string;
        dstToken: string;
        srcReceiver: string;
        dstReceiver: string;
        amount: BigNumberish;
        minReturnAmount: BigNumberish;
        flags: BigNumberish;
        permit: BytesLike;
      },
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unoswap(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "unoswap(address,uint256,uint256,bytes32[])"(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

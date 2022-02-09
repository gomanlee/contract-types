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

interface BorrowingMutexInterface extends ethers.utils.Interface {
  functions: {
    "BANNED()": FunctionFragment;
    "UNLOCKED()": FunctionFragment;
    "allowLocker(address,bool)": FunctionFragment;
    "ban(address)": FunctionFragment;
    "claimOwnership()": FunctionFragment;
    "initialize()": FunctionFragment;
    "isAllowedToLock(address)": FunctionFragment;
    "isBanned(address)": FunctionFragment;
    "isInitialized()": FunctionFragment;
    "isUnlocked(address)": FunctionFragment;
    "lock(address,address)": FunctionFragment;
    "locker(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingOwner()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unlock(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "BANNED", values?: undefined): string;
  encodeFunctionData(functionFragment: "UNLOCKED", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "allowLocker",
    values: [string, boolean]
  ): string;
  encodeFunctionData(functionFragment: "ban", values: [string]): string;
  encodeFunctionData(
    functionFragment: "claimOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isAllowedToLock",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "isBanned", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isUnlocked", values: [string]): string;
  encodeFunctionData(
    functionFragment: "lock",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "locker", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "unlock", values: [string]): string;

  decodeFunctionResult(functionFragment: "BANNED", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "UNLOCKED", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allowLocker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ban", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isAllowedToLock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isBanned", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isUnlocked", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "locker", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unlock", data: BytesLike): Result;

  events: {
    "BorrowerBanned(address)": EventFragment;
    "BorrowerLocked(address,address)": EventFragment;
    "BorrowerUnlocked(address,address)": EventFragment;
    "LockerAllowed(address,bool)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BorrowerBanned"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BorrowerLocked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BorrowerUnlocked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LockerAllowed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class BorrowingMutex extends Contract {
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

  interface: BorrowingMutexInterface;

  functions: {
    BANNED(overrides?: CallOverrides): Promise<[string]>;

    "BANNED()"(overrides?: CallOverrides): Promise<[string]>;

    UNLOCKED(overrides?: CallOverrides): Promise<[string]>;

    "UNLOCKED()"(overrides?: CallOverrides): Promise<[string]>;

    allowLocker(
      _locker: string,
      isAllowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "allowLocker(address,bool)"(
      _locker: string,
      isAllowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ban(
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "ban(address)"(
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "claimOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initialize()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isAllowedToLock(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isAllowedToLock(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isBanned(borrower: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isBanned(address)"(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isInitialized(overrides?: CallOverrides): Promise<[boolean]>;

    "isInitialized()"(overrides?: CallOverrides): Promise<[boolean]>;

    isUnlocked(borrower: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isUnlocked(address)"(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    lock(
      borrower: string,
      _locker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "lock(address,address)"(
      borrower: string,
      _locker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    locker(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    "locker(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    pendingOwner(overrides?: CallOverrides): Promise<[string]>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unlock(
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "unlock(address)"(
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  BANNED(overrides?: CallOverrides): Promise<string>;

  "BANNED()"(overrides?: CallOverrides): Promise<string>;

  UNLOCKED(overrides?: CallOverrides): Promise<string>;

  "UNLOCKED()"(overrides?: CallOverrides): Promise<string>;

  allowLocker(
    _locker: string,
    isAllowed: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "allowLocker(address,bool)"(
    _locker: string,
    isAllowed: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ban(
    borrower: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "ban(address)"(
    borrower: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "claimOwnership()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initialize()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isAllowedToLock(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "isAllowedToLock(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isBanned(borrower: string, overrides?: CallOverrides): Promise<boolean>;

  "isBanned(address)"(
    borrower: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isInitialized(overrides?: CallOverrides): Promise<boolean>;

  "isInitialized()"(overrides?: CallOverrides): Promise<boolean>;

  isUnlocked(borrower: string, overrides?: CallOverrides): Promise<boolean>;

  "isUnlocked(address)"(
    borrower: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  lock(
    borrower: string,
    _locker: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "lock(address,address)"(
    borrower: string,
    _locker: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  locker(arg0: string, overrides?: CallOverrides): Promise<string>;

  "locker(address)"(arg0: string, overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  pendingOwner(overrides?: CallOverrides): Promise<string>;

  "pendingOwner()"(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unlock(
    borrower: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "unlock(address)"(
    borrower: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    BANNED(overrides?: CallOverrides): Promise<string>;

    "BANNED()"(overrides?: CallOverrides): Promise<string>;

    UNLOCKED(overrides?: CallOverrides): Promise<string>;

    "UNLOCKED()"(overrides?: CallOverrides): Promise<string>;

    allowLocker(
      _locker: string,
      isAllowed: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "allowLocker(address,bool)"(
      _locker: string,
      isAllowed: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    ban(borrower: string, overrides?: CallOverrides): Promise<void>;

    "ban(address)"(borrower: string, overrides?: CallOverrides): Promise<void>;

    claimOwnership(overrides?: CallOverrides): Promise<void>;

    "claimOwnership()"(overrides?: CallOverrides): Promise<void>;

    initialize(overrides?: CallOverrides): Promise<void>;

    "initialize()"(overrides?: CallOverrides): Promise<void>;

    isAllowedToLock(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "isAllowedToLock(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isBanned(borrower: string, overrides?: CallOverrides): Promise<boolean>;

    "isBanned(address)"(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isInitialized(overrides?: CallOverrides): Promise<boolean>;

    "isInitialized()"(overrides?: CallOverrides): Promise<boolean>;

    isUnlocked(borrower: string, overrides?: CallOverrides): Promise<boolean>;

    "isUnlocked(address)"(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    lock(
      borrower: string,
      _locker: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "lock(address,address)"(
      borrower: string,
      _locker: string,
      overrides?: CallOverrides
    ): Promise<void>;

    locker(arg0: string, overrides?: CallOverrides): Promise<string>;

    "locker(address)"(arg0: string, overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    pendingOwner(overrides?: CallOverrides): Promise<string>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unlock(borrower: string, overrides?: CallOverrides): Promise<void>;

    "unlock(address)"(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    BorrowerBanned(
      borrower: null
    ): TypedEventFilter<[string], { borrower: string }>;

    BorrowerLocked(
      borrower: null,
      locker: null
    ): TypedEventFilter<[string, string], { borrower: string; locker: string }>;

    BorrowerUnlocked(
      borrower: null,
      locker: null
    ): TypedEventFilter<[string, string], { borrower: string; locker: string }>;

    LockerAllowed(
      locker: null,
      isAllowed: null
    ): TypedEventFilter<
      [string, boolean],
      { locker: string; isAllowed: boolean }
    >;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    BANNED(overrides?: CallOverrides): Promise<BigNumber>;

    "BANNED()"(overrides?: CallOverrides): Promise<BigNumber>;

    UNLOCKED(overrides?: CallOverrides): Promise<BigNumber>;

    "UNLOCKED()"(overrides?: CallOverrides): Promise<BigNumber>;

    allowLocker(
      _locker: string,
      isAllowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "allowLocker(address,bool)"(
      _locker: string,
      isAllowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ban(
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "ban(address)"(
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "claimOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initialize()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isAllowedToLock(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isAllowedToLock(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isBanned(borrower: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isBanned(address)"(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isInitialized(overrides?: CallOverrides): Promise<BigNumber>;

    "isInitialized()"(overrides?: CallOverrides): Promise<BigNumber>;

    isUnlocked(borrower: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isUnlocked(address)"(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lock(
      borrower: string,
      _locker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "lock(address,address)"(
      borrower: string,
      _locker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    locker(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "locker(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unlock(
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "unlock(address)"(
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BANNED(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "BANNED()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    UNLOCKED(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "UNLOCKED()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowLocker(
      _locker: string,
      isAllowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "allowLocker(address,bool)"(
      _locker: string,
      isAllowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ban(
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "ban(address)"(
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "claimOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initialize()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isAllowedToLock(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isAllowedToLock(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isBanned(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isBanned(address)"(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isInitialized()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isUnlocked(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isUnlocked(address)"(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lock(
      borrower: string,
      _locker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "lock(address,address)"(
      borrower: string,
      _locker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    locker(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "locker(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unlock(
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "unlock(address)"(
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
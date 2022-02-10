/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ERC777SenderRecipientMockInterface extends utils.Interface {
  contractName: "ERC777SenderRecipientMock";
  functions: {
    "burn(address,uint256,bytes)": FunctionFragment;
    "canImplementInterfaceForAddress(bytes32,address)": FunctionFragment;
    "recipientFor(address)": FunctionFragment;
    "registerRecipient(address)": FunctionFragment;
    "registerSender(address)": FunctionFragment;
    "send(address,address,uint256,bytes)": FunctionFragment;
    "senderFor(address)": FunctionFragment;
    "setShouldRevertReceive(bool)": FunctionFragment;
    "setShouldRevertSend(bool)": FunctionFragment;
    "tokensReceived(address,address,address,uint256,bytes,bytes)": FunctionFragment;
    "tokensToSend(address,address,address,uint256,bytes,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "burn",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "canImplementInterfaceForAddress",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "recipientFor",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "registerRecipient",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "registerSender",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "send",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "senderFor", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setShouldRevertReceive",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setShouldRevertSend",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "tokensReceived",
    values: [string, string, string, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "tokensToSend",
    values: [string, string, string, BigNumberish, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "canImplementInterfaceForAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recipientFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "senderFor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setShouldRevertReceive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setShouldRevertSend",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokensReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokensToSend",
    data: BytesLike
  ): Result;

  events: {
    "BeforeTokenTransfer()": EventFragment;
    "TokensReceivedCalled(address,address,address,uint256,bytes,bytes,address,uint256,uint256)": EventFragment;
    "TokensToSendCalled(address,address,address,uint256,bytes,bytes,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BeforeTokenTransfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensReceivedCalled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensToSendCalled"): EventFragment;
}

export type BeforeTokenTransferEvent = TypedEvent<[], {}>;

export type BeforeTokenTransferEventFilter =
  TypedEventFilter<BeforeTokenTransferEvent>;

export type TokensReceivedCalledEvent = TypedEvent<
  [
    string,
    string,
    string,
    BigNumber,
    string,
    string,
    string,
    BigNumber,
    BigNumber
  ],
  {
    operator: string;
    from: string;
    to: string;
    amount: BigNumber;
    data: string;
    operatorData: string;
    token: string;
    fromBalance: BigNumber;
    toBalance: BigNumber;
  }
>;

export type TokensReceivedCalledEventFilter =
  TypedEventFilter<TokensReceivedCalledEvent>;

export type TokensToSendCalledEvent = TypedEvent<
  [
    string,
    string,
    string,
    BigNumber,
    string,
    string,
    string,
    BigNumber,
    BigNumber
  ],
  {
    operator: string;
    from: string;
    to: string;
    amount: BigNumber;
    data: string;
    operatorData: string;
    token: string;
    fromBalance: BigNumber;
    toBalance: BigNumber;
  }
>;

export type TokensToSendCalledEventFilter =
  TypedEventFilter<TokensToSendCalledEvent>;

export interface ERC777SenderRecipientMock extends BaseContract {
  contractName: "ERC777SenderRecipientMock";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC777SenderRecipientMockInterface;

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
    burn(
      token: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    recipientFor(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerRecipient(
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerSender(
      sender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    send(
      token: string,
      to: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    senderFor(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setShouldRevertReceive(
      shouldRevert: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setShouldRevertSend(
      shouldRevert: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokensReceived(
      operator: string,
      from: string,
      to: string,
      amount: BigNumberish,
      userData: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokensToSend(
      operator: string,
      from: string,
      to: string,
      amount: BigNumberish,
      userData: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  burn(
    token: string,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  canImplementInterfaceForAddress(
    interfaceHash: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<string>;

  recipientFor(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerRecipient(
    recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerSender(
    sender: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  send(
    token: string,
    to: string,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  senderFor(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setShouldRevertReceive(
    shouldRevert: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setShouldRevertSend(
    shouldRevert: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokensReceived(
    operator: string,
    from: string,
    to: string,
    amount: BigNumberish,
    userData: BytesLike,
    operatorData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokensToSend(
    operator: string,
    from: string,
    to: string,
    amount: BigNumberish,
    userData: BytesLike,
    operatorData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    burn(
      token: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<string>;

    recipientFor(account: string, overrides?: CallOverrides): Promise<void>;

    registerRecipient(
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    registerSender(sender: string, overrides?: CallOverrides): Promise<void>;

    send(
      token: string,
      to: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    senderFor(account: string, overrides?: CallOverrides): Promise<void>;

    setShouldRevertReceive(
      shouldRevert: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setShouldRevertSend(
      shouldRevert: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    tokensReceived(
      operator: string,
      from: string,
      to: string,
      amount: BigNumberish,
      userData: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    tokensToSend(
      operator: string,
      from: string,
      to: string,
      amount: BigNumberish,
      userData: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BeforeTokenTransfer()"(): BeforeTokenTransferEventFilter;
    BeforeTokenTransfer(): BeforeTokenTransferEventFilter;

    "TokensReceivedCalled(address,address,address,uint256,bytes,bytes,address,uint256,uint256)"(
      operator?: null,
      from?: null,
      to?: null,
      amount?: null,
      data?: null,
      operatorData?: null,
      token?: null,
      fromBalance?: null,
      toBalance?: null
    ): TokensReceivedCalledEventFilter;
    TokensReceivedCalled(
      operator?: null,
      from?: null,
      to?: null,
      amount?: null,
      data?: null,
      operatorData?: null,
      token?: null,
      fromBalance?: null,
      toBalance?: null
    ): TokensReceivedCalledEventFilter;

    "TokensToSendCalled(address,address,address,uint256,bytes,bytes,address,uint256,uint256)"(
      operator?: null,
      from?: null,
      to?: null,
      amount?: null,
      data?: null,
      operatorData?: null,
      token?: null,
      fromBalance?: null,
      toBalance?: null
    ): TokensToSendCalledEventFilter;
    TokensToSendCalled(
      operator?: null,
      from?: null,
      to?: null,
      amount?: null,
      data?: null,
      operatorData?: null,
      token?: null,
      fromBalance?: null,
      toBalance?: null
    ): TokensToSendCalledEventFilter;
  };

  estimateGas: {
    burn(
      token: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    recipientFor(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerRecipient(
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerSender(
      sender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    send(
      token: string,
      to: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    senderFor(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setShouldRevertReceive(
      shouldRevert: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setShouldRevertSend(
      shouldRevert: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokensReceived(
      operator: string,
      from: string,
      to: string,
      amount: BigNumberish,
      userData: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokensToSend(
      operator: string,
      from: string,
      to: string,
      amount: BigNumberish,
      userData: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    burn(
      token: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    recipientFor(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerRecipient(
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerSender(
      sender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    send(
      token: string,
      to: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    senderFor(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setShouldRevertReceive(
      shouldRevert: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setShouldRevertSend(
      shouldRevert: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokensReceived(
      operator: string,
      from: string,
      to: string,
      amount: BigNumberish,
      userData: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokensToSend(
      operator: string,
      from: string,
      to: string,
      amount: BigNumberish,
      userData: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

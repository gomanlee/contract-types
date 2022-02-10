import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ECDSAMockInterface extends utils.Interface {
    contractName: "ECDSAMock";
    functions: {
        "recover(bytes32,bytes)": FunctionFragment;
        "recover_r_vs(bytes32,bytes32,bytes32)": FunctionFragment;
        "recover_v_r_s(bytes32,uint8,bytes32,bytes32)": FunctionFragment;
        "toEthSignedMessageHash(bytes32)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "recover", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "recover_r_vs", values: [BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "recover_v_r_s", values: [BytesLike, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "toEthSignedMessageHash", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "recover", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recover_r_vs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recover_v_r_s", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toEthSignedMessageHash", data: BytesLike): Result;
    events: {};
}
export interface ECDSAMock extends BaseContract {
    contractName: "ECDSAMock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ECDSAMockInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        recover(hash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        recover_r_vs(hash: BytesLike, r: BytesLike, vs: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        recover_v_r_s(hash: BytesLike, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        "toEthSignedMessageHash(bytes32)"(hash: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        "toEthSignedMessageHash(bytes)"(s: BytesLike, overrides?: CallOverrides): Promise<[string]>;
    };
    recover(hash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<string>;
    recover_r_vs(hash: BytesLike, r: BytesLike, vs: BytesLike, overrides?: CallOverrides): Promise<string>;
    recover_v_r_s(hash: BytesLike, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<string>;
    "toEthSignedMessageHash(bytes32)"(hash: BytesLike, overrides?: CallOverrides): Promise<string>;
    "toEthSignedMessageHash(bytes)"(s: BytesLike, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        recover(hash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<string>;
        recover_r_vs(hash: BytesLike, r: BytesLike, vs: BytesLike, overrides?: CallOverrides): Promise<string>;
        recover_v_r_s(hash: BytesLike, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<string>;
        "toEthSignedMessageHash(bytes32)"(hash: BytesLike, overrides?: CallOverrides): Promise<string>;
        "toEthSignedMessageHash(bytes)"(s: BytesLike, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        recover(hash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        recover_r_vs(hash: BytesLike, r: BytesLike, vs: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        recover_v_r_s(hash: BytesLike, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "toEthSignedMessageHash(bytes32)"(hash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "toEthSignedMessageHash(bytes)"(s: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        recover(hash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        recover_r_vs(hash: BytesLike, r: BytesLike, vs: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        recover_v_r_s(hash: BytesLike, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "toEthSignedMessageHash(bytes32)"(hash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "toEthSignedMessageHash(bytes)"(s: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
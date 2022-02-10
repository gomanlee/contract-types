import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface MerkleProofWrapperInterface extends utils.Interface {
    contractName: "MerkleProofWrapper";
    functions: {
        "processProof(bytes32[],bytes32)": FunctionFragment;
        "verify(bytes32[],bytes32,bytes32)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "processProof", values: [BytesLike[], BytesLike]): string;
    encodeFunctionData(functionFragment: "verify", values: [BytesLike[], BytesLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "processProof", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;
    events: {};
}
export interface MerkleProofWrapper extends BaseContract {
    contractName: "MerkleProofWrapper";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MerkleProofWrapperInterface;
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
        processProof(proof: BytesLike[], leaf: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        verify(proof: BytesLike[], root: BytesLike, leaf: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    processProof(proof: BytesLike[], leaf: BytesLike, overrides?: CallOverrides): Promise<string>;
    verify(proof: BytesLike[], root: BytesLike, leaf: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        processProof(proof: BytesLike[], leaf: BytesLike, overrides?: CallOverrides): Promise<string>;
        verify(proof: BytesLike[], root: BytesLike, leaf: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        processProof(proof: BytesLike[], leaf: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        verify(proof: BytesLike[], root: BytesLike, leaf: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        processProof(proof: BytesLike[], leaf: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verify(proof: BytesLike[], root: BytesLike, leaf: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

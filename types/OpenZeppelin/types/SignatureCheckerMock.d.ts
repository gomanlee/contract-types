import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface SignatureCheckerMockInterface extends utils.Interface {
    contractName: "SignatureCheckerMock";
    functions: {
        "isValidSignatureNow(address,bytes32,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "isValidSignatureNow", values: [string, BytesLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "isValidSignatureNow", data: BytesLike): Result;
    events: {};
}
export interface SignatureCheckerMock extends BaseContract {
    contractName: "SignatureCheckerMock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SignatureCheckerMockInterface;
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
        isValidSignatureNow(signer: string, hash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    isValidSignatureNow(signer: string, hash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        isValidSignatureNow(signer: string, hash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        isValidSignatureNow(signer: string, hash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        isValidSignatureNow(signer: string, hash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface Create2ImplInterface extends utils.Interface {
    contractName: "Create2Impl";
    functions: {
        "computeAddress(bytes32,bytes32)": FunctionFragment;
        "computeAddressWithDeployer(bytes32,bytes32,address)": FunctionFragment;
        "deploy(uint256,bytes32,bytes)": FunctionFragment;
        "deployERC1820Implementer(uint256,bytes32)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "computeAddress", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "computeAddressWithDeployer", values: [BytesLike, BytesLike, string]): string;
    encodeFunctionData(functionFragment: "deploy", values: [BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "deployERC1820Implementer", values: [BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "computeAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "computeAddressWithDeployer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployERC1820Implementer", data: BytesLike): Result;
    events: {};
}
export interface Create2Impl extends BaseContract {
    contractName: "Create2Impl";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Create2ImplInterface;
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
        computeAddress(salt: BytesLike, codeHash: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        computeAddressWithDeployer(salt: BytesLike, codeHash: BytesLike, deployer: string, overrides?: CallOverrides): Promise<[string]>;
        deploy(value: BigNumberish, salt: BytesLike, code: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        deployERC1820Implementer(value: BigNumberish, salt: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    computeAddress(salt: BytesLike, codeHash: BytesLike, overrides?: CallOverrides): Promise<string>;
    computeAddressWithDeployer(salt: BytesLike, codeHash: BytesLike, deployer: string, overrides?: CallOverrides): Promise<string>;
    deploy(value: BigNumberish, salt: BytesLike, code: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    deployERC1820Implementer(value: BigNumberish, salt: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        computeAddress(salt: BytesLike, codeHash: BytesLike, overrides?: CallOverrides): Promise<string>;
        computeAddressWithDeployer(salt: BytesLike, codeHash: BytesLike, deployer: string, overrides?: CallOverrides): Promise<string>;
        deploy(value: BigNumberish, salt: BytesLike, code: BytesLike, overrides?: CallOverrides): Promise<void>;
        deployERC1820Implementer(value: BigNumberish, salt: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        computeAddress(salt: BytesLike, codeHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        computeAddressWithDeployer(salt: BytesLike, codeHash: BytesLike, deployer: string, overrides?: CallOverrides): Promise<BigNumber>;
        deploy(value: BigNumberish, salt: BytesLike, code: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        deployERC1820Implementer(value: BigNumberish, salt: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        computeAddress(salt: BytesLike, codeHash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        computeAddressWithDeployer(salt: BytesLike, codeHash: BytesLike, deployer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deploy(value: BigNumberish, salt: BytesLike, code: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        deployERC1820Implementer(value: BigNumberish, salt: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}

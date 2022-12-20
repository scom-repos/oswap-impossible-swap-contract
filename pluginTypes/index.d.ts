/// <amd-module name="@scom/impossible-swap-contract/contracts/ImpossibleERC20.json.ts" />
declare module "@scom/impossible-swap-contract/contracts/ImpossibleERC20.json.ts" {
    const _default: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default;
}
/// <amd-module name="@scom/impossible-swap-contract/contracts/ImpossibleERC20.ts" />
declare module "@scom/impossible-swap-contract/contracts/ImpossibleERC20.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IAllowanceParams {
        param1: string;
        param2: string;
    }
    export interface IApproveParams {
        spender: string;
        value: number | BigNumber;
    }
    export interface IPermitParams {
        owner: string;
        spender: string;
        value: number | BigNumber;
        deadline: number | BigNumber;
        v: number | BigNumber;
        r: string;
        s: string;
    }
    export interface ITransferParams {
        to: string;
        value: number | BigNumber;
    }
    export interface ITransferFromParams {
        from: string;
        to: string;
        value: number | BigNumber;
    }
    export class ImpossibleERC20 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): ImpossibleERC20.ApprovalEvent[];
        decodeApprovalEvent(event: Event): ImpossibleERC20.ApprovalEvent;
        parseTransferEvent(receipt: TransactionReceipt): ImpossibleERC20.TransferEvent[];
        decodeTransferEvent(event: Event): ImpossibleERC20.TransferEvent;
        DOMAIN_SEPARATOR: {
            (options?: TransactionOptions): Promise<string>;
        };
        PERMIT_TYPEHASH: {
            (options?: TransactionOptions): Promise<string>;
        };
        allowance: {
            (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
        };
        balanceOf: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        nonces: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        permit: {
            (params: IPermitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IPermitParams, options?: TransactionOptions) => Promise<void>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        totalSupply: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
        };
        private assign;
    }
    export module ImpossibleERC20 {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/impossible-swap-contract/contracts/ImpossiblePair.json.ts" />
declare module "@scom/impossible-swap-contract/contracts/ImpossiblePair.json.ts" {
    const _default_1: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_1;
}
/// <amd-module name="@scom/impossible-swap-contract/contracts/ImpossiblePair.ts" />
declare module "@scom/impossible-swap-contract/contracts/ImpossiblePair.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IAllowanceParams {
        param1: string;
        param2: string;
    }
    export interface IApproveParams {
        spender: string;
        value: number | BigNumber;
    }
    export interface IInitializeParams {
        token0: string;
        token1: string;
        router: string;
        routerExtension: string;
    }
    export interface IMakeXybkParams {
        newBoost0: number | BigNumber;
        newBoost1: number | BigNumber;
    }
    export interface IPermitParams {
        owner: string;
        spender: string;
        value: number | BigNumber;
        deadline: number | BigNumber;
        v: number | BigNumber;
        r: string;
        s: string;
    }
    export interface ISwapParams {
        amount0Out: number | BigNumber;
        amount1Out: number | BigNumber;
        to: string;
        data: string;
    }
    export interface ITransferParams {
        to: string;
        value: number | BigNumber;
    }
    export interface ITransferFromParams {
        from: string;
        to: string;
        value: number | BigNumber;
    }
    export interface IUpdateBoostParams {
        newBoost0: number | BigNumber;
        newBoost1: number | BigNumber;
    }
    export class ImpossiblePair extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): ImpossiblePair.ApprovalEvent[];
        decodeApprovalEvent(event: Event): ImpossiblePair.ApprovalEvent;
        parseBurnEvent(receipt: TransactionReceipt): ImpossiblePair.BurnEvent[];
        decodeBurnEvent(event: Event): ImpossiblePair.BurnEvent;
        parseChangeInvariantEvent(receipt: TransactionReceipt): ImpossiblePair.ChangeInvariantEvent[];
        decodeChangeInvariantEvent(event: Event): ImpossiblePair.ChangeInvariantEvent;
        parseMintEvent(receipt: TransactionReceipt): ImpossiblePair.MintEvent[];
        decodeMintEvent(event: Event): ImpossiblePair.MintEvent;
        parseSwapEvent(receipt: TransactionReceipt): ImpossiblePair.SwapEvent[];
        decodeSwapEvent(event: Event): ImpossiblePair.SwapEvent;
        parseSyncEvent(receipt: TransactionReceipt): ImpossiblePair.SyncEvent[];
        decodeSyncEvent(event: Event): ImpossiblePair.SyncEvent;
        parseTransferEvent(receipt: TransactionReceipt): ImpossiblePair.TransferEvent[];
        decodeTransferEvent(event: Event): ImpossiblePair.TransferEvent;
        parseUpdatedBoostEvent(receipt: TransactionReceipt): ImpossiblePair.UpdatedBoostEvent[];
        decodeUpdatedBoostEvent(event: Event): ImpossiblePair.UpdatedBoostEvent;
        parseUpdatedDelayEvent(receipt: TransactionReceipt): ImpossiblePair.UpdatedDelayEvent[];
        decodeUpdatedDelayEvent(event: Event): ImpossiblePair.UpdatedDelayEvent;
        parseUpdatedTradeFeesEvent(receipt: TransactionReceipt): ImpossiblePair.UpdatedTradeFeesEvent[];
        decodeUpdatedTradeFeesEvent(event: Event): ImpossiblePair.UpdatedTradeFeesEvent;
        parseUpdatedTradeStateEvent(receipt: TransactionReceipt): ImpossiblePair.UpdatedTradeStateEvent[];
        decodeUpdatedTradeStateEvent(event: Event): ImpossiblePair.UpdatedTradeStateEvent;
        parseUpdatedWithdrawalFeeRatioEvent(receipt: TransactionReceipt): ImpossiblePair.UpdatedWithdrawalFeeRatioEvent[];
        decodeUpdatedWithdrawalFeeRatioEvent(event: Event): ImpossiblePair.UpdatedWithdrawalFeeRatioEvent;
        DOMAIN_SEPARATOR: {
            (options?: TransactionOptions): Promise<string>;
        };
        MINIMUM_LIQUIDITY: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        PERMIT_TYPEHASH: {
            (options?: TransactionOptions): Promise<string>;
        };
        allowance: {
            (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
        };
        balanceOf: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        burn: {
            (to: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (to: string, options?: TransactionOptions) => Promise<{
                amount0: BigNumber;
                amount1: BigNumber;
            }>;
        };
        calcBoost: {
            (options?: TransactionOptions): Promise<{
                _boost0: BigNumber;
                _boost1: BigNumber;
            }>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        delay: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        endTime: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        factory: {
            (options?: TransactionOptions): Promise<string>;
        };
        getPairSettings: {
            (options?: TransactionOptions): Promise<{
                _tradeFee: BigNumber;
                _tradeState: BigNumber;
                _isXybk: boolean;
            }>;
        };
        getReserves: {
            (options?: TransactionOptions): Promise<{
                _reserve0: BigNumber;
                _reserve1: BigNumber;
            }>;
        };
        initialize: {
            (params: IInitializeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IInitializeParams, options?: TransactionOptions) => Promise<void>;
        };
        kLast: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        makeUni: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        makeXybk: {
            (params: IMakeXybkParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IMakeXybkParams, options?: TransactionOptions) => Promise<void>;
        };
        mint: {
            (to: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (to: string, options?: TransactionOptions) => Promise<BigNumber>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        nonces: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        permit: {
            (params: IPermitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IPermitParams, options?: TransactionOptions) => Promise<void>;
        };
        router: {
            (options?: TransactionOptions): Promise<string>;
        };
        routerExtension: {
            (options?: TransactionOptions): Promise<string>;
        };
        skim: {
            (to: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (to: string, options?: TransactionOptions) => Promise<void>;
        };
        startTime: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        swap: {
            (params: ISwapParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapParams, options?: TransactionOptions) => Promise<void>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        sync: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        token0: {
            (options?: TransactionOptions): Promise<string>;
        };
        token1: {
            (options?: TransactionOptions): Promise<string>;
        };
        totalSupply: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
        };
        updateBoost: {
            (params: IUpdateBoostParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUpdateBoostParams, options?: TransactionOptions) => Promise<void>;
        };
        updateDelay: {
            (newDelay: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newDelay: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        updateTradeFees: {
            (newFee: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newFee: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        updateTradeState: {
            (tradeState: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (tradeState: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        updateWithdrawalFeeRatio: {
            (newFeeRatio: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newFeeRatio: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        withdrawalFeeRatio: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        private assign;
    }
    export module ImpossiblePair {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface BurnEvent {
            sender: string;
            amount0: BigNumber;
            amount1: BigNumber;
            to: string;
            _event: Event;
        }
        interface ChangeInvariantEvent {
            _isXybk: boolean;
            _newBoost0: BigNumber;
            _newBoost1: BigNumber;
            _event: Event;
        }
        interface MintEvent {
            sender: string;
            amount0: BigNumber;
            amount1: BigNumber;
            _event: Event;
        }
        interface SwapEvent {
            sender: string;
            amount0In: BigNumber;
            amount1In: BigNumber;
            amount0Out: BigNumber;
            amount1Out: BigNumber;
            to: string;
            _event: Event;
        }
        interface SyncEvent {
            reserve0: BigNumber;
            reserve1: BigNumber;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
        interface UpdatedBoostEvent {
            _oldBoost0: BigNumber;
            _oldBoost1: BigNumber;
            _newBoost0: BigNumber;
            _newBoost1: BigNumber;
            _start: BigNumber;
            _end: BigNumber;
            _event: Event;
        }
        interface UpdatedDelayEvent {
            _oldDelay: BigNumber;
            _newDelay: BigNumber;
            _event: Event;
        }
        interface UpdatedTradeFeesEvent {
            _oldFee: BigNumber;
            _newFee: BigNumber;
            _event: Event;
        }
        interface UpdatedTradeStateEvent {
            _tradeState: BigNumber;
            _event: Event;
        }
        interface UpdatedWithdrawalFeeRatioEvent {
            _oldWithdrawalFee: BigNumber;
            _newWithdrawalFee: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/impossible-swap-contract/contracts/ImpossibleRouter.json.ts" />
declare module "@scom/impossible-swap-contract/contracts/ImpossibleRouter.json.ts" {
    const _default_2: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_2;
}
/// <amd-module name="@scom/impossible-swap-contract/contracts/ImpossibleRouter.ts" />
declare module "@scom/impossible-swap-contract/contracts/ImpossibleRouter.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        pairFactory: string;
        wrapFactory: string;
        utilitySettingAdmin: string;
    }
    export interface IAddLiquidityParams {
        tokenA: string;
        tokenB: string;
        amountADesired: number | BigNumber;
        amountBDesired: number | BigNumber;
        amountAMin: number | BigNumber;
        amountBMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IAddLiquidityETHParams {
        token: string;
        amountTokenDesired: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountETHMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityParams {
        tokenA: string;
        tokenB: string;
        liquidity: number | BigNumber;
        amountAMin: number | BigNumber;
        amountBMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityETHParams {
        token: string;
        liquidity: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountETHMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityETHSupportingFeeOnTransferTokensParams {
        token: string;
        liquidity: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountETHMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityETHWithPermitParams {
        token: string;
        liquidity: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountETHMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
        approveMax: boolean;
        v: number | BigNumber;
        r: string;
        s: string;
    }
    export interface IRemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams {
        token: string;
        liquidity: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountETHMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
        approveMax: boolean;
        v: number | BigNumber;
        r: string;
        s: string;
    }
    export interface IRemoveLiquidityWithPermitParams {
        tokenA: string;
        tokenB: string;
        liquidity: number | BigNumber;
        amountAMin: number | BigNumber;
        amountBMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
        approveMax: boolean;
        v: number | BigNumber;
        r: string;
        s: string;
    }
    export interface ISetUtilitiesParams {
        WETH: string;
        routerExtension: string;
    }
    export interface ISwapETHForExactTokensParams {
        amountOut: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapExactETHForTokensParams {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapExactETHForTokensSupportingFeeOnTransferTokensParams {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapExactTokensForETHParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapExactTokensForETHSupportingFeeOnTransferTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapExactTokensForTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapTokensForExactETHParams {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapTokensForExactTokensParams {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export class ImpossibleRouter extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        WETH: {
            (options?: TransactionOptions): Promise<string>;
        };
        addLiquidity: {
            (params: IAddLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<{
                amountA: BigNumber;
                amountB: BigNumber;
                liquidity: BigNumber;
            }>;
        };
        addLiquidityETH: {
            (params: IAddLiquidityETHParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityETHParams, options?: number | BigNumber | TransactionOptions) => Promise<{
                amountToken: BigNumber;
                amountETH: BigNumber;
                liquidity: BigNumber;
            }>;
        };
        factory: {
            (options?: TransactionOptions): Promise<string>;
        };
        removeLiquidity: {
            (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<{
                amountA: BigNumber;
                amountB: BigNumber;
            }>;
        };
        removeLiquidityETH: {
            (params: IRemoveLiquidityETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityETHParams, options?: TransactionOptions) => Promise<{
                amountToken: BigNumber;
                amountETH: BigNumber;
            }>;
        };
        removeLiquidityETHSupportingFeeOnTransferTokens: {
            (params: IRemoveLiquidityETHSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityETHSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<BigNumber>;
        };
        removeLiquidityETHWithPermit: {
            (params: IRemoveLiquidityETHWithPermitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityETHWithPermitParams, options?: TransactionOptions) => Promise<{
                amountToken: BigNumber;
                amountETH: BigNumber;
            }>;
        };
        removeLiquidityETHWithPermitSupportingFeeOnTransferTokens: {
            (params: IRemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityETHWithPermitSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<BigNumber>;
        };
        removeLiquidityWithPermit: {
            (params: IRemoveLiquidityWithPermitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityWithPermitParams, options?: TransactionOptions) => Promise<{
                amountA: BigNumber;
                amountB: BigNumber;
            }>;
        };
        routerExtension: {
            (options?: TransactionOptions): Promise<string>;
        };
        setUtilities: {
            (params: ISetUtilitiesParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetUtilitiesParams, options?: TransactionOptions) => Promise<void>;
        };
        swapETHForExactTokens: {
            (params: ISwapETHForExactTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapETHForExactTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber[]>;
        };
        swapExactETHForTokens: {
            (params: ISwapExactETHForTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactETHForTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber[]>;
        };
        swapExactETHForTokensSupportingFeeOnTransferTokens: {
            (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactETHForTokensSupportingFeeOnTransferTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
        };
        swapExactTokensForETH: {
            (params: ISwapExactTokensForETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForETHParams, options?: TransactionOptions) => Promise<BigNumber[]>;
        };
        swapExactTokensForETHSupportingFeeOnTransferTokens: {
            (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForETHSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<void>;
        };
        swapExactTokensForTokens: {
            (params: ISwapExactTokensForTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForTokensParams, options?: TransactionOptions) => Promise<BigNumber[]>;
        };
        swapExactTokensForTokensSupportingFeeOnTransferTokens: {
            (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<void>;
        };
        swapTokensForExactETH: {
            (params: ISwapTokensForExactETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapTokensForExactETHParams, options?: TransactionOptions) => Promise<BigNumber[]>;
        };
        swapTokensForExactTokens: {
            (params: ISwapTokensForExactTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapTokensForExactTokensParams, options?: TransactionOptions) => Promise<BigNumber[]>;
        };
        wrapFactory: {
            (options?: TransactionOptions): Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/impossible-swap-contract/contracts/ImpossibleRouterExtension.json.ts" />
declare module "@scom/impossible-swap-contract/contracts/ImpossibleRouterExtension.json.ts" {
    const _default_3: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_3;
}
/// <amd-module name="@scom/impossible-swap-contract/contracts/ImpossibleRouterExtension.ts" />
declare module "@scom/impossible-swap-contract/contracts/ImpossibleRouterExtension.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export interface IAddLiquidityParams {
        tokenA: string;
        tokenB: string;
        amountADesired: number | BigNumber;
        amountBDesired: number | BigNumber;
        amountAMin: number | BigNumber;
        amountBMin: number | BigNumber;
    }
    export interface IGetAmountInParams {
        amountOut: number | BigNumber;
        tokenIn: string;
        tokenOut: string;
    }
    export interface IGetAmountOutParams {
        amountIn: number | BigNumber;
        tokenIn: string;
        tokenOut: string;
    }
    export interface IGetAmountsInParams {
        amountOut: number | BigNumber;
        path: string[];
    }
    export interface IGetAmountsOutParams {
        amountIn: number | BigNumber;
        path: string[];
    }
    export interface IQuoteParams {
        amountA: number | BigNumber;
        reserveA: number | BigNumber;
        reserveB: number | BigNumber;
    }
    export interface IRemoveLiquidityParams {
        tokenA: string;
        tokenB: string;
        pair: string;
        amountAMin: number | BigNumber;
        amountBMin: number | BigNumber;
    }
    export interface ISwapParams {
        amounts: (number | BigNumber)[];
        path: string[];
    }
    export class ImpossibleRouterExtension extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(factory: string, options?: TransactionOptions): Promise<string>;
        addLiquidity: {
            (params: IAddLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<{
                amountA: BigNumber;
                amountB: BigNumber;
            }>;
        };
        factory: {
            (options?: TransactionOptions): Promise<string>;
        };
        getAmountIn: {
            (params: IGetAmountInParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getAmountOut: {
            (params: IGetAmountOutParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getAmountsIn: {
            (params: IGetAmountsInParams, options?: TransactionOptions): Promise<BigNumber[]>;
        };
        getAmountsOut: {
            (params: IGetAmountsOutParams, options?: TransactionOptions): Promise<BigNumber[]>;
        };
        quote: {
            (params: IQuoteParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        removeLiquidity: {
            (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<{
                amountA: BigNumber;
                amountB: BigNumber;
            }>;
        };
        swap: {
            (params: ISwapParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapParams, options?: TransactionOptions) => Promise<void>;
        };
        swapSupportingFeeOnTransferTokens: {
            (path: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (path: string[], options?: TransactionOptions) => Promise<void>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/impossible-swap-contract/contracts/ImpossibleSwapFactory.json.ts" />
declare module "@scom/impossible-swap-contract/contracts/ImpossibleSwapFactory.json.ts" {
    const _default_4: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_4;
}
/// <amd-module name="@scom/impossible-swap-contract/contracts/ImpossibleSwapFactory.ts" />
declare module "@scom/impossible-swap-contract/contracts/ImpossibleSwapFactory.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IChangeTokenAccessParams {
        token: string;
        allowed: boolean;
    }
    export interface ICreatePairParams {
        tokenA: string;
        tokenB: string;
    }
    export interface IGetPairParams {
        param1: string;
        param2: string;
    }
    export interface ISetRouterAndExtensionParams {
        router: string;
        routerExtension: string;
    }
    export class ImpossibleSwapFactory extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(governance: string, options?: TransactionOptions): Promise<string>;
        parsePairCreatedEvent(receipt: TransactionReceipt): ImpossibleSwapFactory.PairCreatedEvent[];
        decodePairCreatedEvent(event: Event): ImpossibleSwapFactory.PairCreatedEvent;
        parseUpdatedGovernanceEvent(receipt: TransactionReceipt): ImpossibleSwapFactory.UpdatedGovernanceEvent[];
        decodeUpdatedGovernanceEvent(event: Event): ImpossibleSwapFactory.UpdatedGovernanceEvent;
        allPairs: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
        };
        allPairsLength: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        approvedTokens: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        changeTokenAccess: {
            (params: IChangeTokenAccessParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IChangeTokenAccessParams, options?: TransactionOptions) => Promise<void>;
        };
        createPair: {
            (params: ICreatePairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ICreatePairParams, options?: TransactionOptions) => Promise<string>;
        };
        feeTo: {
            (options?: TransactionOptions): Promise<string>;
        };
        getPair: {
            (params: IGetPairParams, options?: TransactionOptions): Promise<string>;
        };
        governance: {
            (options?: TransactionOptions): Promise<string>;
        };
        router: {
            (options?: TransactionOptions): Promise<string>;
        };
        routerExtension: {
            (options?: TransactionOptions): Promise<string>;
        };
        setFeeTo: {
            (feeTo: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (feeTo: string, options?: TransactionOptions) => Promise<void>;
        };
        setGovernance: {
            (governance: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (governance: string, options?: TransactionOptions) => Promise<void>;
        };
        setRouterAndExtension: {
            (params: ISetRouterAndExtensionParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetRouterAndExtensionParams, options?: TransactionOptions) => Promise<void>;
        };
        setWhitelist: {
            (b: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (b: boolean, options?: TransactionOptions) => Promise<void>;
        };
        whitelist: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        private assign;
    }
    export module ImpossibleSwapFactory {
        interface PairCreatedEvent {
            token0: string;
            token1: string;
            pair: string;
            param4: BigNumber;
            _event: Event;
        }
        interface UpdatedGovernanceEvent {
            governance: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/impossible-swap-contract/contracts/ImpossibleWrappedToken.json.ts" />
declare module "@scom/impossible-swap-contract/contracts/ImpossibleWrappedToken.json.ts" {
    const _default_5: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_5;
}
/// <amd-module name="@scom/impossible-swap-contract/contracts/ImpossibleWrappedToken.ts" />
declare module "@scom/impossible-swap-contract/contracts/ImpossibleWrappedToken.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        underlying: string;
        ratioNum: number | BigNumber;
        ratioDenom: number | BigNumber;
    }
    export interface IAllowanceParams {
        param1: string;
        param2: string;
    }
    export interface IApproveParams {
        guy: string;
        wad: number | BigNumber;
    }
    export interface IDepositParams {
        dst: string;
        sendAmt: number | BigNumber;
    }
    export interface ITransferParams {
        dst: string;
        wad: number | BigNumber;
    }
    export interface ITransferFromParams {
        src: string;
        dst: string;
        wad: number | BigNumber;
    }
    export interface IWithdrawParams {
        dst: string;
        wad: number | BigNumber;
    }
    export class ImpossibleWrappedToken extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): ImpossibleWrappedToken.ApprovalEvent[];
        decodeApprovalEvent(event: Event): ImpossibleWrappedToken.ApprovalEvent;
        parseTransferEvent(receipt: TransactionReceipt): ImpossibleWrappedToken.TransferEvent[];
        decodeTransferEvent(event: Event): ImpossibleWrappedToken.TransferEvent;
        allowance: {
            (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        amtToUnderlyingAmt: {
            (amt: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
        };
        balanceOf: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        deposit: {
            (params: IDepositParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IDepositParams, options?: TransactionOptions) => Promise<BigNumber>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        ratioDenom: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        ratioNum: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        totalSupply: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
        };
        underlying: {
            (options?: TransactionOptions): Promise<string>;
        };
        underlyingBalance: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        withdraw: {
            (params: IWithdrawParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IWithdrawParams, options?: TransactionOptions) => Promise<BigNumber>;
        };
        private assign;
    }
    export module ImpossibleWrappedToken {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/impossible-swap-contract/contracts/ImpossibleWrapperFactory.json.ts" />
declare module "@scom/impossible-swap-contract/contracts/ImpossibleWrapperFactory.json.ts" {
    const _default_6: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_6;
}
/// <amd-module name="@scom/impossible-swap-contract/contracts/ImpossibleWrapperFactory.ts" />
declare module "@scom/impossible-swap-contract/contracts/ImpossibleWrapperFactory.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface ICreatePairingParams {
        underlying: string;
        ratioNumerator: number | BigNumber;
        ratioDenominator: number | BigNumber;
    }
    export class ImpossibleWrapperFactory extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(governance: string, options?: TransactionOptions): Promise<string>;
        parseWrapCreatedEvent(receipt: TransactionReceipt): ImpossibleWrapperFactory.WrapCreatedEvent[];
        decodeWrapCreatedEvent(event: Event): ImpossibleWrapperFactory.WrapCreatedEvent;
        parseWrapDeletedEvent(receipt: TransactionReceipt): ImpossibleWrapperFactory.WrapDeletedEvent[];
        decodeWrapDeletedEvent(event: Event): ImpossibleWrapperFactory.WrapDeletedEvent;
        createPairing: {
            (params: ICreatePairingParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ICreatePairingParams, options?: TransactionOptions) => Promise<string>;
        };
        deletePairing: {
            (wrapper: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (wrapper: string, options?: TransactionOptions) => Promise<void>;
        };
        governance: {
            (options?: TransactionOptions): Promise<string>;
        };
        setGovernance: {
            (governance: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (governance: string, options?: TransactionOptions) => Promise<void>;
        };
        tokensToWrappedTokens: {
            (param1: string, options?: TransactionOptions): Promise<string>;
        };
        wrappedTokensToTokens: {
            (param1: string, options?: TransactionOptions): Promise<string>;
        };
        private assign;
    }
    export module ImpossibleWrapperFactory {
        interface WrapCreatedEvent {
            param1: string;
            param2: string;
            param3: BigNumber;
            param4: BigNumber;
            _event: Event;
        }
        interface WrapDeletedEvent {
            param1: string;
            param2: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/impossible-swap-contract/contracts/test/DeflatingERC20.json.ts" />
declare module "@scom/impossible-swap-contract/contracts/test/DeflatingERC20.json.ts" {
    const _default_7: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_7;
}
/// <amd-module name="@scom/impossible-swap-contract/contracts/test/DeflatingERC20.ts" />
declare module "@scom/impossible-swap-contract/contracts/test/DeflatingERC20.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IAllowanceParams {
        param1: string;
        param2: string;
    }
    export interface IApproveParams {
        spender: string;
        value: number | BigNumber;
    }
    export interface IPermitParams {
        owner: string;
        spender: string;
        value: number | BigNumber;
        deadline: number | BigNumber;
        v: number | BigNumber;
        r: string;
        s: string;
    }
    export interface ITransferParams {
        to: string;
        value: number | BigNumber;
    }
    export interface ITransferFromParams {
        from: string;
        to: string;
        value: number | BigNumber;
    }
    export class DeflatingERC20 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(totalSupply: number | BigNumber, options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): DeflatingERC20.ApprovalEvent[];
        decodeApprovalEvent(event: Event): DeflatingERC20.ApprovalEvent;
        parseTransferEvent(receipt: TransactionReceipt): DeflatingERC20.TransferEvent[];
        decodeTransferEvent(event: Event): DeflatingERC20.TransferEvent;
        DOMAIN_SEPARATOR: {
            (options?: TransactionOptions): Promise<string>;
        };
        PERMIT_TYPEHASH: {
            (options?: TransactionOptions): Promise<string>;
        };
        allowance: {
            (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
        };
        balanceOf: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        nonces: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        permit: {
            (params: IPermitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IPermitParams, options?: TransactionOptions) => Promise<void>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        totalSupply: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
        };
        private assign;
    }
    export module DeflatingERC20 {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/impossible-swap-contract/contracts/test/ERC20.json.ts" />
declare module "@scom/impossible-swap-contract/contracts/test/ERC20.json.ts" {
    const _default_8: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_8;
}
/// <amd-module name="@scom/impossible-swap-contract/contracts/test/ERC20.ts" />
declare module "@scom/impossible-swap-contract/contracts/test/ERC20.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IAllowanceParams {
        param1: string;
        param2: string;
    }
    export interface IApproveParams {
        spender: string;
        value: number | BigNumber;
    }
    export interface IPermitParams {
        owner: string;
        spender: string;
        value: number | BigNumber;
        deadline: number | BigNumber;
        v: number | BigNumber;
        r: string;
        s: string;
    }
    export interface ITransferParams {
        to: string;
        value: number | BigNumber;
    }
    export interface ITransferFromParams {
        from: string;
        to: string;
        value: number | BigNumber;
    }
    export class ERC20 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(totalSupply: number | BigNumber, options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): ERC20.ApprovalEvent[];
        decodeApprovalEvent(event: Event): ERC20.ApprovalEvent;
        parseTransferEvent(receipt: TransactionReceipt): ERC20.TransferEvent[];
        decodeTransferEvent(event: Event): ERC20.TransferEvent;
        DOMAIN_SEPARATOR: {
            (options?: TransactionOptions): Promise<string>;
        };
        PERMIT_TYPEHASH: {
            (options?: TransactionOptions): Promise<string>;
        };
        allowance: {
            (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
        };
        balanceOf: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        nonces: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        permit: {
            (params: IPermitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IPermitParams, options?: TransactionOptions) => Promise<void>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        totalSupply: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
        };
        private assign;
    }
    export module ERC20 {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/impossible-swap-contract/contracts/test/WETH9.json.ts" />
declare module "@scom/impossible-swap-contract/contracts/test/WETH9.json.ts" {
    const _default_9: {
        abi: ({
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_9;
}
/// <amd-module name="@scom/impossible-swap-contract/contracts/test/WETH9.ts" />
declare module "@scom/impossible-swap-contract/contracts/test/WETH9.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IAllowanceParams {
        param1: string;
        param2: string;
    }
    export interface IApproveParams {
        guy: string;
        wad: number | BigNumber;
    }
    export interface ITransferParams {
        dst: string;
        wad: number | BigNumber;
    }
    export interface ITransferFromParams {
        src: string;
        dst: string;
        wad: number | BigNumber;
    }
    export class WETH9 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: number | BigNumber | TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): WETH9.ApprovalEvent[];
        decodeApprovalEvent(event: Event): WETH9.ApprovalEvent;
        parseDepositEvent(receipt: TransactionReceipt): WETH9.DepositEvent[];
        decodeDepositEvent(event: Event): WETH9.DepositEvent;
        parseTransferEvent(receipt: TransactionReceipt): WETH9.TransferEvent[];
        decodeTransferEvent(event: Event): WETH9.TransferEvent;
        parseWithdrawalEvent(receipt: TransactionReceipt): WETH9.WithdrawalEvent[];
        decodeWithdrawalEvent(event: Event): WETH9.WithdrawalEvent;
        allowance: {
            (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
        };
        balanceOf: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        deposit: {
            (options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: number | BigNumber | TransactionOptions) => Promise<void>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        totalSupply: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
        };
        withdraw: {
            (wad: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (wad: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        private assign;
    }
    export module WETH9 {
        interface ApprovalEvent {
            src: string;
            guy: string;
            wad: BigNumber;
            _event: Event;
        }
        interface DepositEvent {
            dst: string;
            wad: BigNumber;
            _event: Event;
        }
        interface TransferEvent {
            src: string;
            dst: string;
            wad: BigNumber;
            _event: Event;
        }
        interface WithdrawalEvent {
            src: string;
            wad: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/impossible-swap-contract/contracts/index.ts" />
declare module "@scom/impossible-swap-contract/contracts/index.ts" {
    export { ImpossibleERC20 } from "@scom/impossible-swap-contract/contracts/ImpossibleERC20.ts";
    export { ImpossiblePair } from "@scom/impossible-swap-contract/contracts/ImpossiblePair.ts";
    export { ImpossibleRouter } from "@scom/impossible-swap-contract/contracts/ImpossibleRouter.ts";
    export { ImpossibleRouterExtension } from "@scom/impossible-swap-contract/contracts/ImpossibleRouterExtension.ts";
    export { ImpossibleSwapFactory } from "@scom/impossible-swap-contract/contracts/ImpossibleSwapFactory.ts";
    export { ImpossibleWrappedToken } from "@scom/impossible-swap-contract/contracts/ImpossibleWrappedToken.ts";
    export { ImpossibleWrapperFactory } from "@scom/impossible-swap-contract/contracts/ImpossibleWrapperFactory.ts";
    export { DeflatingERC20 } from "@scom/impossible-swap-contract/contracts/test/DeflatingERC20.ts";
    export { ERC20 } from "@scom/impossible-swap-contract/contracts/test/ERC20.ts";
    export { WETH9 } from "@scom/impossible-swap-contract/contracts/test/WETH9.ts";
}
/// <amd-module name="@scom/impossible-swap-contract/swap-core.ts" />
declare module "@scom/impossible-swap-contract/swap-core.ts" { }
/// <amd-module name="@scom/impossible-swap-contract" />
declare module "@scom/impossible-swap-contract" {
    export * as Contracts from "@scom/impossible-swap-contract/contracts/index.ts";
    export * as ImpossibleSwapCore from "@scom/impossible-swap-contract/swap-core.ts";
}

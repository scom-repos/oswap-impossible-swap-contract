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
export declare class ImpossiblePair extends _Contract {
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
export declare module ImpossiblePair {
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

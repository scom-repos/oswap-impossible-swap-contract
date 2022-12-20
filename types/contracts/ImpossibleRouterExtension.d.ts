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
export declare class ImpossibleRouterExtension extends _Contract {
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

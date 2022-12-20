import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./ImpossibleRouterExtension.json";
export interface IAddLiquidityParams {tokenA:string;tokenB:string;amountADesired:number|BigNumber;amountBDesired:number|BigNumber;amountAMin:number|BigNumber;amountBMin:number|BigNumber}
export interface IGetAmountInParams {amountOut:number|BigNumber;tokenIn:string;tokenOut:string}
export interface IGetAmountOutParams {amountIn:number|BigNumber;tokenIn:string;tokenOut:string}
export interface IGetAmountsInParams {amountOut:number|BigNumber;path:string[]}
export interface IGetAmountsOutParams {amountIn:number|BigNumber;path:string[]}
export interface IQuoteParams {amountA:number|BigNumber;reserveA:number|BigNumber;reserveB:number|BigNumber}
export interface IRemoveLiquidityParams {tokenA:string;tokenB:string;pair:string;amountAMin:number|BigNumber;amountBMin:number|BigNumber}
export interface ISwapParams {amounts:(number|BigNumber)[];path:string[]}
export class ImpossibleRouterExtension extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(factory:string, options?: TransactionOptions): Promise<string>{
        return this.__deploy([factory], options);
    }
    addLiquidity: {
        (params: IAddLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<{amountA:BigNumber,amountB:BigNumber}>;
    }
    factory: {
        (options?: TransactionOptions): Promise<string>;
    }
    getAmountIn: {
        (params: IGetAmountInParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    getAmountOut: {
        (params: IGetAmountOutParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    getAmountsIn: {
        (params: IGetAmountsInParams, options?: TransactionOptions): Promise<BigNumber[]>;
    }
    getAmountsOut: {
        (params: IGetAmountsOutParams, options?: TransactionOptions): Promise<BigNumber[]>;
    }
    quote: {
        (params: IQuoteParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    removeLiquidity: {
        (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<{amountA:BigNumber,amountB:BigNumber}>;
    }
    swap: {
        (params: ISwapParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapParams, options?: TransactionOptions) => Promise<void>;
    }
    swapSupportingFeeOnTransferTokens: {
        (path:string[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (path:string[], options?: TransactionOptions) => Promise<void>;
    }
    private assign(){
        let factory_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('factory',[],options);
            return result;
        }
        this.factory = factory_call
        let getAmountInParams = (params: IGetAmountInParams) => [this.wallet.utils.toString(params.amountOut),params.tokenIn,params.tokenOut];
        let getAmountIn_call = async (params: IGetAmountInParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getAmountIn',getAmountInParams(params),options);
            return new BigNumber(result);
        }
        this.getAmountIn = getAmountIn_call
        let getAmountOutParams = (params: IGetAmountOutParams) => [this.wallet.utils.toString(params.amountIn),params.tokenIn,params.tokenOut];
        let getAmountOut_call = async (params: IGetAmountOutParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getAmountOut',getAmountOutParams(params),options);
            return new BigNumber(result);
        }
        this.getAmountOut = getAmountOut_call
        let getAmountsInParams = (params: IGetAmountsInParams) => [this.wallet.utils.toString(params.amountOut),params.path];
        let getAmountsIn_call = async (params: IGetAmountsInParams, options?: TransactionOptions): Promise<BigNumber[]> => {
            let result = await this.call('getAmountsIn',getAmountsInParams(params),options);
            return result.map(e=>new BigNumber(e));
        }
        this.getAmountsIn = getAmountsIn_call
        let getAmountsOutParams = (params: IGetAmountsOutParams) => [this.wallet.utils.toString(params.amountIn),params.path];
        let getAmountsOut_call = async (params: IGetAmountsOutParams, options?: TransactionOptions): Promise<BigNumber[]> => {
            let result = await this.call('getAmountsOut',getAmountsOutParams(params),options);
            return result.map(e=>new BigNumber(e));
        }
        this.getAmountsOut = getAmountsOut_call
        let quoteParams = (params: IQuoteParams) => [this.wallet.utils.toString(params.amountA),this.wallet.utils.toString(params.reserveA),this.wallet.utils.toString(params.reserveB)];
        let quote_call = async (params: IQuoteParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('quote',quoteParams(params),options);
            return new BigNumber(result);
        }
        this.quote = quote_call
        let addLiquidityParams = (params: IAddLiquidityParams) => [params.tokenA,params.tokenB,this.wallet.utils.toString(params.amountADesired),this.wallet.utils.toString(params.amountBDesired),this.wallet.utils.toString(params.amountAMin),this.wallet.utils.toString(params.amountBMin)];
        let addLiquidity_send = async (params: IAddLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('addLiquidity',addLiquidityParams(params),options);
            return result;
        }
        let addLiquidity_call = async (params: IAddLiquidityParams, options?: TransactionOptions): Promise<{amountA:BigNumber,amountB:BigNumber}> => {
            let result = await this.call('addLiquidity',addLiquidityParams(params),options);
            return {
                amountA: new BigNumber(result.amountA),
                amountB: new BigNumber(result.amountB)
            };
        }
        this.addLiquidity = Object.assign(addLiquidity_send, {
            call:addLiquidity_call
        });
        let removeLiquidityParams = (params: IRemoveLiquidityParams) => [params.tokenA,params.tokenB,params.pair,this.wallet.utils.toString(params.amountAMin),this.wallet.utils.toString(params.amountBMin)];
        let removeLiquidity_send = async (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidity',removeLiquidityParams(params),options);
            return result;
        }
        let removeLiquidity_call = async (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<{amountA:BigNumber,amountB:BigNumber}> => {
            let result = await this.call('removeLiquidity',removeLiquidityParams(params),options);
            return {
                amountA: new BigNumber(result.amountA),
                amountB: new BigNumber(result.amountB)
            };
        }
        this.removeLiquidity = Object.assign(removeLiquidity_send, {
            call:removeLiquidity_call
        });
        let swapParams = (params: ISwapParams) => [this.wallet.utils.toString(params.amounts),params.path];
        let swap_send = async (params: ISwapParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swap',swapParams(params),options);
            return result;
        }
        let swap_call = async (params: ISwapParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('swap',swapParams(params),options);
            return;
        }
        this.swap = Object.assign(swap_send, {
            call:swap_call
        });
        let swapSupportingFeeOnTransferTokens_send = async (path:string[], options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swapSupportingFeeOnTransferTokens',[path],options);
            return result;
        }
        let swapSupportingFeeOnTransferTokens_call = async (path:string[], options?: TransactionOptions): Promise<void> => {
            let result = await this.call('swapSupportingFeeOnTransferTokens',[path],options);
            return;
        }
        this.swapSupportingFeeOnTransferTokens = Object.assign(swapSupportingFeeOnTransferTokens_send, {
            call:swapSupportingFeeOnTransferTokens_call
        });
    }
}
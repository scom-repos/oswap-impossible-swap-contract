"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImpossibleRouterExtension = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const ImpossibleRouterExtension_json_1 = __importDefault(require("./ImpossibleRouterExtension.json"));
class ImpossibleRouterExtension extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, ImpossibleRouterExtension_json_1.default.abi, ImpossibleRouterExtension_json_1.default.bytecode);
        this.assign();
    }
    deploy(factory, options) {
        return this.__deploy([factory], options);
    }
    assign() {
        let factory_call = async (options) => {
            let result = await this.call('factory', [], options);
            return result;
        };
        this.factory = factory_call;
        let getAmountInParams = (params) => [this.wallet.utils.toString(params.amountOut), params.tokenIn, params.tokenOut];
        let getAmountIn_call = async (params, options) => {
            let result = await this.call('getAmountIn', getAmountInParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getAmountIn = getAmountIn_call;
        let getAmountOutParams = (params) => [this.wallet.utils.toString(params.amountIn), params.tokenIn, params.tokenOut];
        let getAmountOut_call = async (params, options) => {
            let result = await this.call('getAmountOut', getAmountOutParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getAmountOut = getAmountOut_call;
        let getAmountsInParams = (params) => [this.wallet.utils.toString(params.amountOut), params.path];
        let getAmountsIn_call = async (params, options) => {
            let result = await this.call('getAmountsIn', getAmountsInParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        this.getAmountsIn = getAmountsIn_call;
        let getAmountsOutParams = (params) => [this.wallet.utils.toString(params.amountIn), params.path];
        let getAmountsOut_call = async (params, options) => {
            let result = await this.call('getAmountsOut', getAmountsOutParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        this.getAmountsOut = getAmountsOut_call;
        let quoteParams = (params) => [this.wallet.utils.toString(params.amountA), this.wallet.utils.toString(params.reserveA), this.wallet.utils.toString(params.reserveB)];
        let quote_call = async (params, options) => {
            let result = await this.call('quote', quoteParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.quote = quote_call;
        let addLiquidityParams = (params) => [params.tokenA, params.tokenB, this.wallet.utils.toString(params.amountADesired), this.wallet.utils.toString(params.amountBDesired), this.wallet.utils.toString(params.amountAMin), this.wallet.utils.toString(params.amountBMin)];
        let addLiquidity_send = async (params, options) => {
            let result = await this.send('addLiquidity', addLiquidityParams(params), options);
            return result;
        };
        let addLiquidity_call = async (params, options) => {
            let result = await this.call('addLiquidity', addLiquidityParams(params), options);
            return {
                amountA: new eth_contract_1.BigNumber(result.amountA),
                amountB: new eth_contract_1.BigNumber(result.amountB)
            };
        };
        this.addLiquidity = Object.assign(addLiquidity_send, {
            call: addLiquidity_call
        });
        let removeLiquidityParams = (params) => [params.tokenA, params.tokenB, params.pair, this.wallet.utils.toString(params.amountAMin), this.wallet.utils.toString(params.amountBMin)];
        let removeLiquidity_send = async (params, options) => {
            let result = await this.send('removeLiquidity', removeLiquidityParams(params), options);
            return result;
        };
        let removeLiquidity_call = async (params, options) => {
            let result = await this.call('removeLiquidity', removeLiquidityParams(params), options);
            return {
                amountA: new eth_contract_1.BigNumber(result.amountA),
                amountB: new eth_contract_1.BigNumber(result.amountB)
            };
        };
        this.removeLiquidity = Object.assign(removeLiquidity_send, {
            call: removeLiquidity_call
        });
        let swapParams = (params) => [this.wallet.utils.toString(params.amounts), params.path];
        let swap_send = async (params, options) => {
            let result = await this.send('swap', swapParams(params), options);
            return result;
        };
        let swap_call = async (params, options) => {
            let result = await this.call('swap', swapParams(params), options);
            return;
        };
        this.swap = Object.assign(swap_send, {
            call: swap_call
        });
        let swapSupportingFeeOnTransferTokens_send = async (path, options) => {
            let result = await this.send('swapSupportingFeeOnTransferTokens', [path], options);
            return result;
        };
        let swapSupportingFeeOnTransferTokens_call = async (path, options) => {
            let result = await this.call('swapSupportingFeeOnTransferTokens', [path], options);
            return;
        };
        this.swapSupportingFeeOnTransferTokens = Object.assign(swapSupportingFeeOnTransferTokens_send, {
            call: swapSupportingFeeOnTransferTokens_call
        });
    }
}
exports.ImpossibleRouterExtension = ImpossibleRouterExtension;
ImpossibleRouterExtension._abi = ImpossibleRouterExtension_json_1.default.abi;

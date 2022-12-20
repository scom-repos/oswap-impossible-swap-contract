"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImpossibleRouter = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const ImpossibleRouter_json_1 = __importDefault(require("./ImpossibleRouter.json"));
class ImpossibleRouter extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, ImpossibleRouter_json_1.default.abi, ImpossibleRouter_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.pairFactory, params.wrapFactory, params.utilitySettingAdmin], options);
    }
    assign() {
        let WETH_call = async (options) => {
            let result = await this.call('WETH', [], options);
            return result;
        };
        this.WETH = WETH_call;
        let factory_call = async (options) => {
            let result = await this.call('factory', [], options);
            return result;
        };
        this.factory = factory_call;
        let routerExtension_call = async (options) => {
            let result = await this.call('routerExtension', [], options);
            return result;
        };
        this.routerExtension = routerExtension_call;
        let wrapFactory_call = async (options) => {
            let result = await this.call('wrapFactory', [], options);
            return result;
        };
        this.wrapFactory = wrapFactory_call;
        let addLiquidityParams = (params) => [params.tokenA, params.tokenB, this.wallet.utils.toString(params.amountADesired), this.wallet.utils.toString(params.amountBDesired), this.wallet.utils.toString(params.amountAMin), this.wallet.utils.toString(params.amountBMin), params.to, this.wallet.utils.toString(params.deadline)];
        let addLiquidity_send = async (params, options) => {
            let result = await this.send('addLiquidity', addLiquidityParams(params), options);
            return result;
        };
        let addLiquidity_call = async (params, options) => {
            let result = await this.call('addLiquidity', addLiquidityParams(params), options);
            return {
                amountA: new eth_contract_1.BigNumber(result.amountA),
                amountB: new eth_contract_1.BigNumber(result.amountB),
                liquidity: new eth_contract_1.BigNumber(result.liquidity)
            };
        };
        this.addLiquidity = Object.assign(addLiquidity_send, {
            call: addLiquidity_call
        });
        let addLiquidityETHParams = (params) => [params.token, this.wallet.utils.toString(params.amountTokenDesired), this.wallet.utils.toString(params.amountTokenMin), this.wallet.utils.toString(params.amountETHMin), params.to, this.wallet.utils.toString(params.deadline)];
        let addLiquidityETH_send = async (params, options) => {
            let result = await this.send('addLiquidityETH', addLiquidityETHParams(params), options);
            return result;
        };
        let addLiquidityETH_call = async (params, options) => {
            let result = await this.call('addLiquidityETH', addLiquidityETHParams(params), options);
            return {
                amountToken: new eth_contract_1.BigNumber(result.amountToken),
                amountETH: new eth_contract_1.BigNumber(result.amountETH),
                liquidity: new eth_contract_1.BigNumber(result.liquidity)
            };
        };
        this.addLiquidityETH = Object.assign(addLiquidityETH_send, {
            call: addLiquidityETH_call
        });
        let removeLiquidityParams = (params) => [params.tokenA, params.tokenB, this.wallet.utils.toString(params.liquidity), this.wallet.utils.toString(params.amountAMin), this.wallet.utils.toString(params.amountBMin), params.to, this.wallet.utils.toString(params.deadline)];
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
        let removeLiquidityETHParams = (params) => [params.token, this.wallet.utils.toString(params.liquidity), this.wallet.utils.toString(params.amountTokenMin), this.wallet.utils.toString(params.amountETHMin), params.to, this.wallet.utils.toString(params.deadline)];
        let removeLiquidityETH_send = async (params, options) => {
            let result = await this.send('removeLiquidityETH', removeLiquidityETHParams(params), options);
            return result;
        };
        let removeLiquidityETH_call = async (params, options) => {
            let result = await this.call('removeLiquidityETH', removeLiquidityETHParams(params), options);
            return {
                amountToken: new eth_contract_1.BigNumber(result.amountToken),
                amountETH: new eth_contract_1.BigNumber(result.amountETH)
            };
        };
        this.removeLiquidityETH = Object.assign(removeLiquidityETH_send, {
            call: removeLiquidityETH_call
        });
        let removeLiquidityETHSupportingFeeOnTransferTokensParams = (params) => [params.token, this.wallet.utils.toString(params.liquidity), this.wallet.utils.toString(params.amountTokenMin), this.wallet.utils.toString(params.amountETHMin), params.to, this.wallet.utils.toString(params.deadline)];
        let removeLiquidityETHSupportingFeeOnTransferTokens_send = async (params, options) => {
            let result = await this.send('removeLiquidityETHSupportingFeeOnTransferTokens', removeLiquidityETHSupportingFeeOnTransferTokensParams(params), options);
            return result;
        };
        let removeLiquidityETHSupportingFeeOnTransferTokens_call = async (params, options) => {
            let result = await this.call('removeLiquidityETHSupportingFeeOnTransferTokens', removeLiquidityETHSupportingFeeOnTransferTokensParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.removeLiquidityETHSupportingFeeOnTransferTokens = Object.assign(removeLiquidityETHSupportingFeeOnTransferTokens_send, {
            call: removeLiquidityETHSupportingFeeOnTransferTokens_call
        });
        let removeLiquidityETHWithPermitParams = (params) => [params.token, this.wallet.utils.toString(params.liquidity), this.wallet.utils.toString(params.amountTokenMin), this.wallet.utils.toString(params.amountETHMin), params.to, this.wallet.utils.toString(params.deadline), params.approveMax, this.wallet.utils.toString(params.v), this.wallet.utils.stringToBytes32(params.r), this.wallet.utils.stringToBytes32(params.s)];
        let removeLiquidityETHWithPermit_send = async (params, options) => {
            let result = await this.send('removeLiquidityETHWithPermit', removeLiquidityETHWithPermitParams(params), options);
            return result;
        };
        let removeLiquidityETHWithPermit_call = async (params, options) => {
            let result = await this.call('removeLiquidityETHWithPermit', removeLiquidityETHWithPermitParams(params), options);
            return {
                amountToken: new eth_contract_1.BigNumber(result.amountToken),
                amountETH: new eth_contract_1.BigNumber(result.amountETH)
            };
        };
        this.removeLiquidityETHWithPermit = Object.assign(removeLiquidityETHWithPermit_send, {
            call: removeLiquidityETHWithPermit_call
        });
        let removeLiquidityETHWithPermitSupportingFeeOnTransferTokensParams = (params) => [params.token, this.wallet.utils.toString(params.liquidity), this.wallet.utils.toString(params.amountTokenMin), this.wallet.utils.toString(params.amountETHMin), params.to, this.wallet.utils.toString(params.deadline), params.approveMax, this.wallet.utils.toString(params.v), this.wallet.utils.stringToBytes32(params.r), this.wallet.utils.stringToBytes32(params.s)];
        let removeLiquidityETHWithPermitSupportingFeeOnTransferTokens_send = async (params, options) => {
            let result = await this.send('removeLiquidityETHWithPermitSupportingFeeOnTransferTokens', removeLiquidityETHWithPermitSupportingFeeOnTransferTokensParams(params), options);
            return result;
        };
        let removeLiquidityETHWithPermitSupportingFeeOnTransferTokens_call = async (params, options) => {
            let result = await this.call('removeLiquidityETHWithPermitSupportingFeeOnTransferTokens', removeLiquidityETHWithPermitSupportingFeeOnTransferTokensParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.removeLiquidityETHWithPermitSupportingFeeOnTransferTokens = Object.assign(removeLiquidityETHWithPermitSupportingFeeOnTransferTokens_send, {
            call: removeLiquidityETHWithPermitSupportingFeeOnTransferTokens_call
        });
        let removeLiquidityWithPermitParams = (params) => [params.tokenA, params.tokenB, this.wallet.utils.toString(params.liquidity), this.wallet.utils.toString(params.amountAMin), this.wallet.utils.toString(params.amountBMin), params.to, this.wallet.utils.toString(params.deadline), params.approveMax, this.wallet.utils.toString(params.v), this.wallet.utils.stringToBytes32(params.r), this.wallet.utils.stringToBytes32(params.s)];
        let removeLiquidityWithPermit_send = async (params, options) => {
            let result = await this.send('removeLiquidityWithPermit', removeLiquidityWithPermitParams(params), options);
            return result;
        };
        let removeLiquidityWithPermit_call = async (params, options) => {
            let result = await this.call('removeLiquidityWithPermit', removeLiquidityWithPermitParams(params), options);
            return {
                amountA: new eth_contract_1.BigNumber(result.amountA),
                amountB: new eth_contract_1.BigNumber(result.amountB)
            };
        };
        this.removeLiquidityWithPermit = Object.assign(removeLiquidityWithPermit_send, {
            call: removeLiquidityWithPermit_call
        });
        let setUtilitiesParams = (params) => [params.WETH, params.routerExtension];
        let setUtilities_send = async (params, options) => {
            let result = await this.send('setUtilities', setUtilitiesParams(params), options);
            return result;
        };
        let setUtilities_call = async (params, options) => {
            let result = await this.call('setUtilities', setUtilitiesParams(params), options);
            return;
        };
        this.setUtilities = Object.assign(setUtilities_send, {
            call: setUtilities_call
        });
        let swapETHForExactTokensParams = (params) => [this.wallet.utils.toString(params.amountOut), params.path, params.to, this.wallet.utils.toString(params.deadline)];
        let swapETHForExactTokens_send = async (params, options) => {
            let result = await this.send('swapETHForExactTokens', swapETHForExactTokensParams(params), options);
            return result;
        };
        let swapETHForExactTokens_call = async (params, options) => {
            let result = await this.call('swapETHForExactTokens', swapETHForExactTokensParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        this.swapETHForExactTokens = Object.assign(swapETHForExactTokens_send, {
            call: swapETHForExactTokens_call
        });
        let swapExactETHForTokensParams = (params) => [this.wallet.utils.toString(params.amountOutMin), params.path, params.to, this.wallet.utils.toString(params.deadline)];
        let swapExactETHForTokens_send = async (params, options) => {
            let result = await this.send('swapExactETHForTokens', swapExactETHForTokensParams(params), options);
            return result;
        };
        let swapExactETHForTokens_call = async (params, options) => {
            let result = await this.call('swapExactETHForTokens', swapExactETHForTokensParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        this.swapExactETHForTokens = Object.assign(swapExactETHForTokens_send, {
            call: swapExactETHForTokens_call
        });
        let swapExactETHForTokensSupportingFeeOnTransferTokensParams = (params) => [this.wallet.utils.toString(params.amountOutMin), params.path, params.to, this.wallet.utils.toString(params.deadline)];
        let swapExactETHForTokensSupportingFeeOnTransferTokens_send = async (params, options) => {
            let result = await this.send('swapExactETHForTokensSupportingFeeOnTransferTokens', swapExactETHForTokensSupportingFeeOnTransferTokensParams(params), options);
            return result;
        };
        let swapExactETHForTokensSupportingFeeOnTransferTokens_call = async (params, options) => {
            let result = await this.call('swapExactETHForTokensSupportingFeeOnTransferTokens', swapExactETHForTokensSupportingFeeOnTransferTokensParams(params), options);
            return;
        };
        this.swapExactETHForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactETHForTokensSupportingFeeOnTransferTokens_send, {
            call: swapExactETHForTokensSupportingFeeOnTransferTokens_call
        });
        let swapExactTokensForETHParams = (params) => [this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMin), params.path, params.to, this.wallet.utils.toString(params.deadline)];
        let swapExactTokensForETH_send = async (params, options) => {
            let result = await this.send('swapExactTokensForETH', swapExactTokensForETHParams(params), options);
            return result;
        };
        let swapExactTokensForETH_call = async (params, options) => {
            let result = await this.call('swapExactTokensForETH', swapExactTokensForETHParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        this.swapExactTokensForETH = Object.assign(swapExactTokensForETH_send, {
            call: swapExactTokensForETH_call
        });
        let swapExactTokensForETHSupportingFeeOnTransferTokensParams = (params) => [this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMin), params.path, params.to, this.wallet.utils.toString(params.deadline)];
        let swapExactTokensForETHSupportingFeeOnTransferTokens_send = async (params, options) => {
            let result = await this.send('swapExactTokensForETHSupportingFeeOnTransferTokens', swapExactTokensForETHSupportingFeeOnTransferTokensParams(params), options);
            return result;
        };
        let swapExactTokensForETHSupportingFeeOnTransferTokens_call = async (params, options) => {
            let result = await this.call('swapExactTokensForETHSupportingFeeOnTransferTokens', swapExactTokensForETHSupportingFeeOnTransferTokensParams(params), options);
            return;
        };
        this.swapExactTokensForETHSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForETHSupportingFeeOnTransferTokens_send, {
            call: swapExactTokensForETHSupportingFeeOnTransferTokens_call
        });
        let swapExactTokensForTokensParams = (params) => [this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMin), params.path, params.to, this.wallet.utils.toString(params.deadline)];
        let swapExactTokensForTokens_send = async (params, options) => {
            let result = await this.send('swapExactTokensForTokens', swapExactTokensForTokensParams(params), options);
            return result;
        };
        let swapExactTokensForTokens_call = async (params, options) => {
            let result = await this.call('swapExactTokensForTokens', swapExactTokensForTokensParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        this.swapExactTokensForTokens = Object.assign(swapExactTokensForTokens_send, {
            call: swapExactTokensForTokens_call
        });
        let swapExactTokensForTokensSupportingFeeOnTransferTokensParams = (params) => [this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMin), params.path, params.to, this.wallet.utils.toString(params.deadline)];
        let swapExactTokensForTokensSupportingFeeOnTransferTokens_send = async (params, options) => {
            let result = await this.send('swapExactTokensForTokensSupportingFeeOnTransferTokens', swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params), options);
            return result;
        };
        let swapExactTokensForTokensSupportingFeeOnTransferTokens_call = async (params, options) => {
            let result = await this.call('swapExactTokensForTokensSupportingFeeOnTransferTokens', swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params), options);
            return;
        };
        this.swapExactTokensForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForTokensSupportingFeeOnTransferTokens_send, {
            call: swapExactTokensForTokensSupportingFeeOnTransferTokens_call
        });
        let swapTokensForExactETHParams = (params) => [this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.amountInMax), params.path, params.to, this.wallet.utils.toString(params.deadline)];
        let swapTokensForExactETH_send = async (params, options) => {
            let result = await this.send('swapTokensForExactETH', swapTokensForExactETHParams(params), options);
            return result;
        };
        let swapTokensForExactETH_call = async (params, options) => {
            let result = await this.call('swapTokensForExactETH', swapTokensForExactETHParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        this.swapTokensForExactETH = Object.assign(swapTokensForExactETH_send, {
            call: swapTokensForExactETH_call
        });
        let swapTokensForExactTokensParams = (params) => [this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.amountInMax), params.path, params.to, this.wallet.utils.toString(params.deadline)];
        let swapTokensForExactTokens_send = async (params, options) => {
            let result = await this.send('swapTokensForExactTokens', swapTokensForExactTokensParams(params), options);
            return result;
        };
        let swapTokensForExactTokens_call = async (params, options) => {
            let result = await this.call('swapTokensForExactTokens', swapTokensForExactTokensParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        this.swapTokensForExactTokens = Object.assign(swapTokensForExactTokens_send, {
            call: swapTokensForExactTokens_call
        });
    }
}
exports.ImpossibleRouter = ImpossibleRouter;
ImpossibleRouter._abi = ImpossibleRouter_json_1.default.abi;

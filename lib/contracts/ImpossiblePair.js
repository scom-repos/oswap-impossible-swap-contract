"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImpossiblePair = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const ImpossiblePair_json_1 = __importDefault(require("./ImpossiblePair.json"));
class ImpossiblePair extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, ImpossiblePair_json_1.default.abi, ImpossiblePair_json_1.default.bytecode);
        this.assign();
    }
    deploy(options) {
        return this.__deploy([], options);
    }
    parseApprovalEvent(receipt) {
        return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            spender: result.spender,
            value: new eth_contract_1.BigNumber(result.value),
            _event: event
        };
    }
    parseBurnEvent(receipt) {
        return this.parseEvents(receipt, "Burn").map(e => this.decodeBurnEvent(e));
    }
    decodeBurnEvent(event) {
        let result = event.data;
        return {
            sender: result.sender,
            amount0: new eth_contract_1.BigNumber(result.amount0),
            amount1: new eth_contract_1.BigNumber(result.amount1),
            to: result.to,
            _event: event
        };
    }
    parseChangeInvariantEvent(receipt) {
        return this.parseEvents(receipt, "ChangeInvariant").map(e => this.decodeChangeInvariantEvent(e));
    }
    decodeChangeInvariantEvent(event) {
        let result = event.data;
        return {
            _isXybk: result._isXybk,
            _newBoost0: new eth_contract_1.BigNumber(result._newBoost0),
            _newBoost1: new eth_contract_1.BigNumber(result._newBoost1),
            _event: event
        };
    }
    parseMintEvent(receipt) {
        return this.parseEvents(receipt, "Mint").map(e => this.decodeMintEvent(e));
    }
    decodeMintEvent(event) {
        let result = event.data;
        return {
            sender: result.sender,
            amount0: new eth_contract_1.BigNumber(result.amount0),
            amount1: new eth_contract_1.BigNumber(result.amount1),
            _event: event
        };
    }
    parseSwapEvent(receipt) {
        return this.parseEvents(receipt, "Swap").map(e => this.decodeSwapEvent(e));
    }
    decodeSwapEvent(event) {
        let result = event.data;
        return {
            sender: result.sender,
            amount0In: new eth_contract_1.BigNumber(result.amount0In),
            amount1In: new eth_contract_1.BigNumber(result.amount1In),
            amount0Out: new eth_contract_1.BigNumber(result.amount0Out),
            amount1Out: new eth_contract_1.BigNumber(result.amount1Out),
            to: result.to,
            _event: event
        };
    }
    parseSyncEvent(receipt) {
        return this.parseEvents(receipt, "Sync").map(e => this.decodeSyncEvent(e));
    }
    decodeSyncEvent(event) {
        let result = event.data;
        return {
            reserve0: new eth_contract_1.BigNumber(result.reserve0),
            reserve1: new eth_contract_1.BigNumber(result.reserve1),
            _event: event
        };
    }
    parseTransferEvent(receipt) {
        return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event) {
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            value: new eth_contract_1.BigNumber(result.value),
            _event: event
        };
    }
    parseUpdatedBoostEvent(receipt) {
        return this.parseEvents(receipt, "UpdatedBoost").map(e => this.decodeUpdatedBoostEvent(e));
    }
    decodeUpdatedBoostEvent(event) {
        let result = event.data;
        return {
            _oldBoost0: new eth_contract_1.BigNumber(result._oldBoost0),
            _oldBoost1: new eth_contract_1.BigNumber(result._oldBoost1),
            _newBoost0: new eth_contract_1.BigNumber(result._newBoost0),
            _newBoost1: new eth_contract_1.BigNumber(result._newBoost1),
            _start: new eth_contract_1.BigNumber(result._start),
            _end: new eth_contract_1.BigNumber(result._end),
            _event: event
        };
    }
    parseUpdatedDelayEvent(receipt) {
        return this.parseEvents(receipt, "UpdatedDelay").map(e => this.decodeUpdatedDelayEvent(e));
    }
    decodeUpdatedDelayEvent(event) {
        let result = event.data;
        return {
            _oldDelay: new eth_contract_1.BigNumber(result._oldDelay),
            _newDelay: new eth_contract_1.BigNumber(result._newDelay),
            _event: event
        };
    }
    parseUpdatedTradeFeesEvent(receipt) {
        return this.parseEvents(receipt, "UpdatedTradeFees").map(e => this.decodeUpdatedTradeFeesEvent(e));
    }
    decodeUpdatedTradeFeesEvent(event) {
        let result = event.data;
        return {
            _oldFee: new eth_contract_1.BigNumber(result._oldFee),
            _newFee: new eth_contract_1.BigNumber(result._newFee),
            _event: event
        };
    }
    parseUpdatedTradeStateEvent(receipt) {
        return this.parseEvents(receipt, "UpdatedTradeState").map(e => this.decodeUpdatedTradeStateEvent(e));
    }
    decodeUpdatedTradeStateEvent(event) {
        let result = event.data;
        return {
            _tradeState: new eth_contract_1.BigNumber(result._tradeState),
            _event: event
        };
    }
    parseUpdatedWithdrawalFeeRatioEvent(receipt) {
        return this.parseEvents(receipt, "UpdatedWithdrawalFeeRatio").map(e => this.decodeUpdatedWithdrawalFeeRatioEvent(e));
    }
    decodeUpdatedWithdrawalFeeRatioEvent(event) {
        let result = event.data;
        return {
            _oldWithdrawalFee: new eth_contract_1.BigNumber(result._oldWithdrawalFee),
            _newWithdrawalFee: new eth_contract_1.BigNumber(result._newWithdrawalFee),
            _event: event
        };
    }
    assign() {
        let DOMAIN_SEPARATOR_call = async (options) => {
            let result = await this.call('DOMAIN_SEPARATOR', [], options);
            return result;
        };
        this.DOMAIN_SEPARATOR = DOMAIN_SEPARATOR_call;
        let MINIMUM_LIQUIDITY_call = async (options) => {
            let result = await this.call('MINIMUM_LIQUIDITY', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.MINIMUM_LIQUIDITY = MINIMUM_LIQUIDITY_call;
        let PERMIT_TYPEHASH_call = async (options) => {
            let result = await this.call('PERMIT_TYPEHASH', [], options);
            return result;
        };
        this.PERMIT_TYPEHASH = PERMIT_TYPEHASH_call;
        let allowanceParams = (params) => [params.param1, params.param2];
        let allowance_call = async (params, options) => {
            let result = await this.call('allowance', allowanceParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.allowance = allowance_call;
        let balanceOf_call = async (param1, options) => {
            let result = await this.call('balanceOf', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.balanceOf = balanceOf_call;
        let calcBoost_call = async (options) => {
            let result = await this.call('calcBoost', [], options);
            return {
                _boost0: new eth_contract_1.BigNumber(result._boost0),
                _boost1: new eth_contract_1.BigNumber(result._boost1)
            };
        };
        this.calcBoost = calcBoost_call;
        let decimals_call = async (options) => {
            let result = await this.call('decimals', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.decimals = decimals_call;
        let delay_call = async (options) => {
            let result = await this.call('delay', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.delay = delay_call;
        let endTime_call = async (options) => {
            let result = await this.call('endTime', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.endTime = endTime_call;
        let factory_call = async (options) => {
            let result = await this.call('factory', [], options);
            return result;
        };
        this.factory = factory_call;
        let getPairSettings_call = async (options) => {
            let result = await this.call('getPairSettings', [], options);
            return {
                _tradeFee: new eth_contract_1.BigNumber(result._tradeFee),
                _tradeState: new eth_contract_1.BigNumber(result._tradeState),
                _isXybk: result._isXybk
            };
        };
        this.getPairSettings = getPairSettings_call;
        let getReserves_call = async (options) => {
            let result = await this.call('getReserves', [], options);
            return {
                _reserve0: new eth_contract_1.BigNumber(result._reserve0),
                _reserve1: new eth_contract_1.BigNumber(result._reserve1)
            };
        };
        this.getReserves = getReserves_call;
        let kLast_call = async (options) => {
            let result = await this.call('kLast', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.kLast = kLast_call;
        let name_call = async (options) => {
            let result = await this.call('name', [], options);
            return result;
        };
        this.name = name_call;
        let nonces_call = async (param1, options) => {
            let result = await this.call('nonces', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.nonces = nonces_call;
        let router_call = async (options) => {
            let result = await this.call('router', [], options);
            return result;
        };
        this.router = router_call;
        let routerExtension_call = async (options) => {
            let result = await this.call('routerExtension', [], options);
            return result;
        };
        this.routerExtension = routerExtension_call;
        let startTime_call = async (options) => {
            let result = await this.call('startTime', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.startTime = startTime_call;
        let symbol_call = async (options) => {
            let result = await this.call('symbol', [], options);
            return result;
        };
        this.symbol = symbol_call;
        let token0_call = async (options) => {
            let result = await this.call('token0', [], options);
            return result;
        };
        this.token0 = token0_call;
        let token1_call = async (options) => {
            let result = await this.call('token1', [], options);
            return result;
        };
        this.token1 = token1_call;
        let totalSupply_call = async (options) => {
            let result = await this.call('totalSupply', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.totalSupply = totalSupply_call;
        let withdrawalFeeRatio_call = async (options) => {
            let result = await this.call('withdrawalFeeRatio', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.withdrawalFeeRatio = withdrawalFeeRatio_call;
        let approveParams = (params) => [params.spender, this.wallet.utils.toString(params.value)];
        let approve_send = async (params, options) => {
            let result = await this.send('approve', approveParams(params), options);
            return result;
        };
        let approve_call = async (params, options) => {
            let result = await this.call('approve', approveParams(params), options);
            return result;
        };
        this.approve = Object.assign(approve_send, {
            call: approve_call
        });
        let burn_send = async (to, options) => {
            let result = await this.send('burn', [to], options);
            return result;
        };
        let burn_call = async (to, options) => {
            let result = await this.call('burn', [to], options);
            return {
                amount0: new eth_contract_1.BigNumber(result.amount0),
                amount1: new eth_contract_1.BigNumber(result.amount1)
            };
        };
        this.burn = Object.assign(burn_send, {
            call: burn_call
        });
        let initializeParams = (params) => [params.token0, params.token1, params.router, params.routerExtension];
        let initialize_send = async (params, options) => {
            let result = await this.send('initialize', initializeParams(params), options);
            return result;
        };
        let initialize_call = async (params, options) => {
            let result = await this.call('initialize', initializeParams(params), options);
            return;
        };
        this.initialize = Object.assign(initialize_send, {
            call: initialize_call
        });
        let makeUni_send = async (options) => {
            let result = await this.send('makeUni', [], options);
            return result;
        };
        let makeUni_call = async (options) => {
            let result = await this.call('makeUni', [], options);
            return;
        };
        this.makeUni = Object.assign(makeUni_send, {
            call: makeUni_call
        });
        let makeXybkParams = (params) => [this.wallet.utils.toString(params.newBoost0), this.wallet.utils.toString(params.newBoost1)];
        let makeXybk_send = async (params, options) => {
            let result = await this.send('makeXybk', makeXybkParams(params), options);
            return result;
        };
        let makeXybk_call = async (params, options) => {
            let result = await this.call('makeXybk', makeXybkParams(params), options);
            return;
        };
        this.makeXybk = Object.assign(makeXybk_send, {
            call: makeXybk_call
        });
        let mint_send = async (to, options) => {
            let result = await this.send('mint', [to], options);
            return result;
        };
        let mint_call = async (to, options) => {
            let result = await this.call('mint', [to], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.mint = Object.assign(mint_send, {
            call: mint_call
        });
        let permitParams = (params) => [params.owner, params.spender, this.wallet.utils.toString(params.value), this.wallet.utils.toString(params.deadline), this.wallet.utils.toString(params.v), this.wallet.utils.stringToBytes32(params.r), this.wallet.utils.stringToBytes32(params.s)];
        let permit_send = async (params, options) => {
            let result = await this.send('permit', permitParams(params), options);
            return result;
        };
        let permit_call = async (params, options) => {
            let result = await this.call('permit', permitParams(params), options);
            return;
        };
        this.permit = Object.assign(permit_send, {
            call: permit_call
        });
        let skim_send = async (to, options) => {
            let result = await this.send('skim', [to], options);
            return result;
        };
        let skim_call = async (to, options) => {
            let result = await this.call('skim', [to], options);
            return;
        };
        this.skim = Object.assign(skim_send, {
            call: skim_call
        });
        let swapParams = (params) => [this.wallet.utils.toString(params.amount0Out), this.wallet.utils.toString(params.amount1Out), params.to, this.wallet.utils.stringToBytes(params.data)];
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
        let sync_send = async (options) => {
            let result = await this.send('sync', [], options);
            return result;
        };
        let sync_call = async (options) => {
            let result = await this.call('sync', [], options);
            return;
        };
        this.sync = Object.assign(sync_send, {
            call: sync_call
        });
        let transferParams = (params) => [params.to, this.wallet.utils.toString(params.value)];
        let transfer_send = async (params, options) => {
            let result = await this.send('transfer', transferParams(params), options);
            return result;
        };
        let transfer_call = async (params, options) => {
            let result = await this.call('transfer', transferParams(params), options);
            return result;
        };
        this.transfer = Object.assign(transfer_send, {
            call: transfer_call
        });
        let transferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.value)];
        let transferFrom_send = async (params, options) => {
            let result = await this.send('transferFrom', transferFromParams(params), options);
            return result;
        };
        let transferFrom_call = async (params, options) => {
            let result = await this.call('transferFrom', transferFromParams(params), options);
            return result;
        };
        this.transferFrom = Object.assign(transferFrom_send, {
            call: transferFrom_call
        });
        let updateBoostParams = (params) => [this.wallet.utils.toString(params.newBoost0), this.wallet.utils.toString(params.newBoost1)];
        let updateBoost_send = async (params, options) => {
            let result = await this.send('updateBoost', updateBoostParams(params), options);
            return result;
        };
        let updateBoost_call = async (params, options) => {
            let result = await this.call('updateBoost', updateBoostParams(params), options);
            return;
        };
        this.updateBoost = Object.assign(updateBoost_send, {
            call: updateBoost_call
        });
        let updateDelay_send = async (newDelay, options) => {
            let result = await this.send('updateDelay', [this.wallet.utils.toString(newDelay)], options);
            return result;
        };
        let updateDelay_call = async (newDelay, options) => {
            let result = await this.call('updateDelay', [this.wallet.utils.toString(newDelay)], options);
            return;
        };
        this.updateDelay = Object.assign(updateDelay_send, {
            call: updateDelay_call
        });
        let updateTradeFees_send = async (newFee, options) => {
            let result = await this.send('updateTradeFees', [this.wallet.utils.toString(newFee)], options);
            return result;
        };
        let updateTradeFees_call = async (newFee, options) => {
            let result = await this.call('updateTradeFees', [this.wallet.utils.toString(newFee)], options);
            return;
        };
        this.updateTradeFees = Object.assign(updateTradeFees_send, {
            call: updateTradeFees_call
        });
        let updateTradeState_send = async (tradeState, options) => {
            let result = await this.send('updateTradeState', [this.wallet.utils.toString(tradeState)], options);
            return result;
        };
        let updateTradeState_call = async (tradeState, options) => {
            let result = await this.call('updateTradeState', [this.wallet.utils.toString(tradeState)], options);
            return;
        };
        this.updateTradeState = Object.assign(updateTradeState_send, {
            call: updateTradeState_call
        });
        let updateWithdrawalFeeRatio_send = async (newFeeRatio, options) => {
            let result = await this.send('updateWithdrawalFeeRatio', [this.wallet.utils.toString(newFeeRatio)], options);
            return result;
        };
        let updateWithdrawalFeeRatio_call = async (newFeeRatio, options) => {
            let result = await this.call('updateWithdrawalFeeRatio', [this.wallet.utils.toString(newFeeRatio)], options);
            return;
        };
        this.updateWithdrawalFeeRatio = Object.assign(updateWithdrawalFeeRatio_send, {
            call: updateWithdrawalFeeRatio_call
        });
    }
}
exports.ImpossiblePair = ImpossiblePair;
ImpossiblePair._abi = ImpossiblePair_json_1.default.abi;

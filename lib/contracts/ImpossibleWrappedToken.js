"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImpossibleWrappedToken = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const ImpossibleWrappedToken_json_1 = __importDefault(require("./ImpossibleWrappedToken.json"));
class ImpossibleWrappedToken extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, ImpossibleWrappedToken_json_1.default.abi, ImpossibleWrappedToken_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.underlying, this.wallet.utils.toString(params.ratioNum), this.wallet.utils.toString(params.ratioDenom)], options);
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
    assign() {
        let allowanceParams = (params) => [params.param1, params.param2];
        let allowance_call = async (params, options) => {
            let result = await this.call('allowance', allowanceParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.allowance = allowance_call;
        let amtToUnderlyingAmt_call = async (amt, options) => {
            let result = await this.call('amtToUnderlyingAmt', [this.wallet.utils.toString(amt)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.amtToUnderlyingAmt = amtToUnderlyingAmt_call;
        let balanceOf_call = async (param1, options) => {
            let result = await this.call('balanceOf', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.balanceOf = balanceOf_call;
        let decimals_call = async (options) => {
            let result = await this.call('decimals', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.decimals = decimals_call;
        let name_call = async (options) => {
            let result = await this.call('name', [], options);
            return result;
        };
        this.name = name_call;
        let ratioDenom_call = async (options) => {
            let result = await this.call('ratioDenom', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.ratioDenom = ratioDenom_call;
        let ratioNum_call = async (options) => {
            let result = await this.call('ratioNum', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.ratioNum = ratioNum_call;
        let symbol_call = async (options) => {
            let result = await this.call('symbol', [], options);
            return result;
        };
        this.symbol = symbol_call;
        let totalSupply_call = async (options) => {
            let result = await this.call('totalSupply', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.totalSupply = totalSupply_call;
        let underlying_call = async (options) => {
            let result = await this.call('underlying', [], options);
            return result;
        };
        this.underlying = underlying_call;
        let underlyingBalance_call = async (options) => {
            let result = await this.call('underlyingBalance', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.underlyingBalance = underlyingBalance_call;
        let approveParams = (params) => [params.guy, this.wallet.utils.toString(params.wad)];
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
        let depositParams = (params) => [params.dst, this.wallet.utils.toString(params.sendAmt)];
        let deposit_send = async (params, options) => {
            let result = await this.send('deposit', depositParams(params), options);
            return result;
        };
        let deposit_call = async (params, options) => {
            let result = await this.call('deposit', depositParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.deposit = Object.assign(deposit_send, {
            call: deposit_call
        });
        let transferParams = (params) => [params.dst, this.wallet.utils.toString(params.wad)];
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
        let transferFromParams = (params) => [params.src, params.dst, this.wallet.utils.toString(params.wad)];
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
        let withdrawParams = (params) => [params.dst, this.wallet.utils.toString(params.wad)];
        let withdraw_send = async (params, options) => {
            let result = await this.send('withdraw', withdrawParams(params), options);
            return result;
        };
        let withdraw_call = async (params, options) => {
            let result = await this.call('withdraw', withdrawParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.withdraw = Object.assign(withdraw_send, {
            call: withdraw_call
        });
    }
}
exports.ImpossibleWrappedToken = ImpossibleWrappedToken;
ImpossibleWrappedToken._abi = ImpossibleWrappedToken_json_1.default.abi;

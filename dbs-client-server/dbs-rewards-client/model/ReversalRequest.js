/**
 * Rewards APIs
 * # Overview Rewards APIs provide functionalities to retrieve rewards balances, redeemed rewards and rebates including historical information. Rewards Identifier can either be Programme or Card account number. These APIs also provides functionalities to view Rewards Catalogue items and redeem Rewards as miles, Vouchers, Cashback for your earned Rewards points.  # Version History Version | Release date | Change Log --------|--------------|---------------------- 1.0      | October, 2017   | Base version of API 1.0      | July, 2018   | Added new API **Retrieve Rewards Summary**. Added new fields **grossAmount** and **merchantId** to **Pay merchant using Rewards points** and **Pay merchant using daily$** API.  Added new field **uuid** for all APIs.  # Authentication <!-- ReDoc-Inject: <security-definitions> -->  # Pagination Pagination is not available on this API.  # Frequently Asked Question Q1: How to get list of Active Rewards account?  Ans: Get list of Active rewards account using **_/parties/{partyId}/rewards** with path parameters PartyId  Q2:  How to return rewards rebate transaction history?  Ans: Get rewards rebate transaction history for a given rewards identifier using **_/rewards/{rewardsId}/rebatesTransactions** with path parameters rewardsId. Note: Start date and End Date is mandatory.  Q3: How to redeem Rewards as Miles, Vouchers, or Cashback?  Ans: Get the redemption of Rewards to get Miles or Loyalty points, Vouchers or Cashback using **_/rewards/milesConversion/rewards/vouchersRedemption** , **_/rewards/rebatesCashback**  Q4: How to invoke partial redemption for Rewards?  Ans: Enter the total amount of the transaction in the grossAmount field and the amount to be redeemed via rewards in the redeemAmount field when calling the **_/rewards/{rewardsId}/paymentByPoints** or **_/rewards/{rewardsId}/paymentByRebates**.  # Known Issues This API has no pending issues at the moment. Want to report a new issue? please help us **here**  # Throttling (Rate Limits) We throttle our APIs by default to ensure maximum performance for all developers.  
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PaymentRequestGrossAmount', 'model/ReversalRequestRedeemAmount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentRequestGrossAmount'), require('./ReversalRequestRedeemAmount'));
  } else {
    // Browser globals (root is window)
    if (!root.RewardsApIs) {
      root.RewardsApIs = {};
    }
    root.RewardsApIs.ReversalRequest = factory(root.RewardsApIs.ApiClient, root.RewardsApIs.PaymentRequestGrossAmount, root.RewardsApIs.ReversalRequestRedeemAmount);
  }
}(this, function(ApiClient, PaymentRequestGrossAmount, ReversalRequestRedeemAmount) {
  'use strict';




  /**
   * The ReversalRequest model module.
   * @module model/ReversalRequest
   * @version 1.0
   */

  /**
   * Constructs a new <code>ReversalRequest</code>.
   * Details of redemption reversal of Rewards points and Daily$
   * @alias module:model/ReversalRequest
   * @class
   * @param merchantId {String} Identifier for the merchant involved in the transaction.
   * @param reversalReferenceId {String} Reference identifier for the redemption reversal request
   * @param redemptionReferenceId {String} Order reference identifier of the original redemption transaction
   * @param transactionDateTime {Date} Timestamp of the original redemption transaction
   * @param grossAmount {module:model/PaymentRequestGrossAmount} 
   * @param redeemAmount {module:model/ReversalRequestRedeemAmount} 
   */
  var exports = function(merchantId, reversalReferenceId, redemptionReferenceId, transactionDateTime, grossAmount, redeemAmount) {
    var _this = this;

    _this['merchantId'] = merchantId;
    _this['reversalReferenceId'] = reversalReferenceId;
    _this['redemptionReferenceId'] = redemptionReferenceId;
    _this['transactionDateTime'] = transactionDateTime;
    _this['grossAmount'] = grossAmount;
    _this['redeemAmount'] = redeemAmount;
  };

  /**
   * Constructs a <code>ReversalRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReversalRequest} obj Optional instance to populate.
   * @return {module:model/ReversalRequest} The populated <code>ReversalRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('merchantId')) {
        obj['merchantId'] = ApiClient.convertToType(data['merchantId'], 'String');
      }
      if (data.hasOwnProperty('reversalReferenceId')) {
        obj['reversalReferenceId'] = ApiClient.convertToType(data['reversalReferenceId'], 'String');
      }
      if (data.hasOwnProperty('redemptionReferenceId')) {
        obj['redemptionReferenceId'] = ApiClient.convertToType(data['redemptionReferenceId'], 'String');
      }
      if (data.hasOwnProperty('transactionDateTime')) {
        obj['transactionDateTime'] = ApiClient.convertToType(data['transactionDateTime'], 'Date');
      }
      if (data.hasOwnProperty('grossAmount')) {
        obj['grossAmount'] = PaymentRequestGrossAmount.constructFromObject(data['grossAmount']);
      }
      if (data.hasOwnProperty('redeemAmount')) {
        obj['redeemAmount'] = ReversalRequestRedeemAmount.constructFromObject(data['redeemAmount']);
      }
    }
    return obj;
  }

  /**
   * Identifier for the merchant involved in the transaction.
   * @member {String} merchantId
   */
  exports.prototype['merchantId'] = undefined;
  /**
   * Reference identifier for the redemption reversal request
   * @member {String} reversalReferenceId
   */
  exports.prototype['reversalReferenceId'] = undefined;
  /**
   * Order reference identifier of the original redemption transaction
   * @member {String} redemptionReferenceId
   */
  exports.prototype['redemptionReferenceId'] = undefined;
  /**
   * Timestamp of the original redemption transaction
   * @member {Date} transactionDateTime
   */
  exports.prototype['transactionDateTime'] = undefined;
  /**
   * @member {module:model/PaymentRequestGrossAmount} grossAmount
   */
  exports.prototype['grossAmount'] = undefined;
  /**
   * @member {module:model/ReversalRequestRedeemAmount} redeemAmount
   */
  exports.prototype['redeemAmount'] = undefined;



  return exports;
}));



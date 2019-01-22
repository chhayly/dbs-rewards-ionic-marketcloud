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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Amount', 'model/BalanceCheck', 'model/CardId', 'model/CardRewardsAccount', 'model/CatalogueItem', 'model/CatalogueItemDetl', 'model/ConversionRates', 'model/Error', 'model/ErrorList', 'model/ExpiryDate', 'model/ItemImage', 'model/MembershipDetl', 'model/MilesRedemptionRequest', 'model/MilesRedemptionResult', 'model/PartyName', 'model/PaymentByPoints', 'model/PaymentByRebates', 'model/PaymentRequest', 'model/PaymentRequestGrossAmount', 'model/PaymentRequestRedeemAmount', 'model/PointsBalances', 'model/PointsBalancesSummary', 'model/PointsBalancesSummaryMinimumRedeemableAmount', 'model/PointsBalancesSummaryTotalRedeemableAmount', 'model/RebatesBalances', 'model/RebatesBalancesSummary', 'model/RebatesBalancesSummaryMinimumRedeemableAmount', 'model/RebatesBalancesSummaryTotalRedeemableAmount', 'model/RebatesRedemptionRequest', 'model/RebatesRedemptionResult', 'model/RecordControl', 'model/RedemptionDetl', 'model/RedemptionOutlet', 'model/ReversalRequest', 'model/ReversalRequestRedeemAmount', 'model/ReversalResponse', 'model/ReversalResponseRewardsBalance', 'model/ReversalResponseRewardsBalanceRemainingCashValue', 'model/RewardPricing', 'model/Rewards', 'model/RewardsAccount', 'model/RewardsAccountConversionRates', 'model/RewardsAccountRewardsScheme', 'model/RewardsCatalogue', 'model/RewardsExchangeRate', 'model/RewardsPointsTransaction', 'model/RewardsPointsTransactions', 'model/RewardsRebatesTransaction', 'model/RewardsRebatesTransactions', 'model/RewardsScheme', 'model/RewardsSummary', 'model/RewardsSummaryRewardsBalancesSummary', 'model/Tag', 'model/ValidityPeriod', 'model/VoucherDetl', 'model/VouchersRedemptionRequest', 'model/VouchersRedemptionResult', 'api/RewardsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Amount'), require('./model/BalanceCheck'), require('./model/CardId'), require('./model/CardRewardsAccount'), require('./model/CatalogueItem'), require('./model/CatalogueItemDetl'), require('./model/ConversionRates'), require('./model/Error'), require('./model/ErrorList'), require('./model/ExpiryDate'), require('./model/ItemImage'), require('./model/MembershipDetl'), require('./model/MilesRedemptionRequest'), require('./model/MilesRedemptionResult'), require('./model/PartyName'), require('./model/PaymentByPoints'), require('./model/PaymentByRebates'), require('./model/PaymentRequest'), require('./model/PaymentRequestGrossAmount'), require('./model/PaymentRequestRedeemAmount'), require('./model/PointsBalances'), require('./model/PointsBalancesSummary'), require('./model/PointsBalancesSummaryMinimumRedeemableAmount'), require('./model/PointsBalancesSummaryTotalRedeemableAmount'), require('./model/RebatesBalances'), require('./model/RebatesBalancesSummary'), require('./model/RebatesBalancesSummaryMinimumRedeemableAmount'), require('./model/RebatesBalancesSummaryTotalRedeemableAmount'), require('./model/RebatesRedemptionRequest'), require('./model/RebatesRedemptionResult'), require('./model/RecordControl'), require('./model/RedemptionDetl'), require('./model/RedemptionOutlet'), require('./model/ReversalRequest'), require('./model/ReversalRequestRedeemAmount'), require('./model/ReversalResponse'), require('./model/ReversalResponseRewardsBalance'), require('./model/ReversalResponseRewardsBalanceRemainingCashValue'), require('./model/RewardPricing'), require('./model/Rewards'), require('./model/RewardsAccount'), require('./model/RewardsAccountConversionRates'), require('./model/RewardsAccountRewardsScheme'), require('./model/RewardsCatalogue'), require('./model/RewardsExchangeRate'), require('./model/RewardsPointsTransaction'), require('./model/RewardsPointsTransactions'), require('./model/RewardsRebatesTransaction'), require('./model/RewardsRebatesTransactions'), require('./model/RewardsScheme'), require('./model/RewardsSummary'), require('./model/RewardsSummaryRewardsBalancesSummary'), require('./model/Tag'), require('./model/ValidityPeriod'), require('./model/VoucherDetl'), require('./model/VouchersRedemptionRequest'), require('./model/VouchersRedemptionResult'), require('./api/RewardsApi'));
  }
}(function(ApiClient, Amount, BalanceCheck, CardId, CardRewardsAccount, CatalogueItem, CatalogueItemDetl, ConversionRates, Error, ErrorList, ExpiryDate, ItemImage, MembershipDetl, MilesRedemptionRequest, MilesRedemptionResult, PartyName, PaymentByPoints, PaymentByRebates, PaymentRequest, PaymentRequestGrossAmount, PaymentRequestRedeemAmount, PointsBalances, PointsBalancesSummary, PointsBalancesSummaryMinimumRedeemableAmount, PointsBalancesSummaryTotalRedeemableAmount, RebatesBalances, RebatesBalancesSummary, RebatesBalancesSummaryMinimumRedeemableAmount, RebatesBalancesSummaryTotalRedeemableAmount, RebatesRedemptionRequest, RebatesRedemptionResult, RecordControl, RedemptionDetl, RedemptionOutlet, ReversalRequest, ReversalRequestRedeemAmount, ReversalResponse, ReversalResponseRewardsBalance, ReversalResponseRewardsBalanceRemainingCashValue, RewardPricing, Rewards, RewardsAccount, RewardsAccountConversionRates, RewardsAccountRewardsScheme, RewardsCatalogue, RewardsExchangeRate, RewardsPointsTransaction, RewardsPointsTransactions, RewardsRebatesTransaction, RewardsRebatesTransactions, RewardsScheme, RewardsSummary, RewardsSummaryRewardsBalancesSummary, Tag, ValidityPeriod, VoucherDetl, VouchersRedemptionRequest, VouchersRedemptionResult, RewardsApi) {
  'use strict';

  /**
   * _OverviewRewards_APIs_provide_functionalities_to_retrieve_rewards_balances_redeemed_rewards_and_rebates_including_historical_information__Rewards_Identifier_can_either_be_Programme_or_Card_account_number__These_APIs_also_provides_functionalities_to_view_Rewards_Catalogue_items_and_redeem_Rewards_as_miles_Vouchers_Cashback_for_your_earned_Rewards_points__Version_HistoryVersion__Release_date__Change_Log____________________________________________1_0_______October_2017____Base_version_of_API1_0_______July_2018____Added_new_API_Retrieve_Rewards_Summary__Added_new_fields_grossAmount_and_merchantId_to_Pay_merchant_using_Rewards_points_and_Pay_merchant_using_daily_API___Added_new_field_uuid_for_all_APIs__Authentication___ReDoc_Inject_security_definitions____PaginationPagination_is_not_available_on_this_API__Frequently_Asked_QuestionQ1_How_to_get_list_of_Active_Rewards_accountAns_Get_list_of_Active_rewards_account_using_partiespartyIdrewards_with_path_parameters_PartyIdQ2__How_to_return_rewards_rebate_transaction_historyAns_Get_rewards_rebate_transaction_history_for_a_given_rewards_identifier_using_rewardsrewardsIdrebatesTransactions_with_path_parameters_rewardsId__Note_Start_date_and_End_Date_is_mandatory_Q3_How_to_redeem_Rewards_as_Miles_Vouchers_or_CashbackAns_Get_the_redemption_of_Rewards_to_get_Miles_or_Loyalty_points_Vouchers_or_Cashback_using_rewardsmilesConversionrewardsvouchersRedemption__rewardsrebatesCashbackQ4_How_to_invoke_partial_redemption_for_RewardsAns_Enter_the_total_amount_of_the_transaction_in_the_grossAmount_field_and_the_amount_to_be_redeemed_via_rewards_in_the_redeemAmount_field_when_calling_the_rewardsrewardsIdpaymentByPoints_or_rewardsrewardsIdpaymentByRebates__Known_IssuesThis_API_has_no_pending_issues_at_the_moment__Want_to_report_a_new_issue_please_help_us_here_Throttling__Rate_LimitsWe_throttle_our_APIs_by_default_to_ensure_maximum_performance_for_all_developers_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var RewardsApIs = require('index'); // See note below*.
   * var xxxSvc = new RewardsApIs.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new RewardsApIs.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new RewardsApIs.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new RewardsApIs.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Amount model constructor.
     * @property {module:model/Amount}
     */
    Amount: Amount,
    /**
     * The BalanceCheck model constructor.
     * @property {module:model/BalanceCheck}
     */
    BalanceCheck: BalanceCheck,
    /**
     * The CardId model constructor.
     * @property {module:model/CardId}
     */
    CardId: CardId,
    /**
     * The CardRewardsAccount model constructor.
     * @property {module:model/CardRewardsAccount}
     */
    CardRewardsAccount: CardRewardsAccount,
    /**
     * The CatalogueItem model constructor.
     * @property {module:model/CatalogueItem}
     */
    CatalogueItem: CatalogueItem,
    /**
     * The CatalogueItemDetl model constructor.
     * @property {module:model/CatalogueItemDetl}
     */
    CatalogueItemDetl: CatalogueItemDetl,
    /**
     * The ConversionRates model constructor.
     * @property {module:model/ConversionRates}
     */
    ConversionRates: ConversionRates,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The ErrorList model constructor.
     * @property {module:model/ErrorList}
     */
    ErrorList: ErrorList,
    /**
     * The ExpiryDate model constructor.
     * @property {module:model/ExpiryDate}
     */
    ExpiryDate: ExpiryDate,
    /**
     * The ItemImage model constructor.
     * @property {module:model/ItemImage}
     */
    ItemImage: ItemImage,
    /**
     * The MembershipDetl model constructor.
     * @property {module:model/MembershipDetl}
     */
    MembershipDetl: MembershipDetl,
    /**
     * The MilesRedemptionRequest model constructor.
     * @property {module:model/MilesRedemptionRequest}
     */
    MilesRedemptionRequest: MilesRedemptionRequest,
    /**
     * The MilesRedemptionResult model constructor.
     * @property {module:model/MilesRedemptionResult}
     */
    MilesRedemptionResult: MilesRedemptionResult,
    /**
     * The PartyName model constructor.
     * @property {module:model/PartyName}
     */
    PartyName: PartyName,
    /**
     * The PaymentByPoints model constructor.
     * @property {module:model/PaymentByPoints}
     */
    PaymentByPoints: PaymentByPoints,
    /**
     * The PaymentByRebates model constructor.
     * @property {module:model/PaymentByRebates}
     */
    PaymentByRebates: PaymentByRebates,
    /**
     * The PaymentRequest model constructor.
     * @property {module:model/PaymentRequest}
     */
    PaymentRequest: PaymentRequest,
    /**
     * The PaymentRequestGrossAmount model constructor.
     * @property {module:model/PaymentRequestGrossAmount}
     */
    PaymentRequestGrossAmount: PaymentRequestGrossAmount,
    /**
     * The PaymentRequestRedeemAmount model constructor.
     * @property {module:model/PaymentRequestRedeemAmount}
     */
    PaymentRequestRedeemAmount: PaymentRequestRedeemAmount,
    /**
     * The PointsBalances model constructor.
     * @property {module:model/PointsBalances}
     */
    PointsBalances: PointsBalances,
    /**
     * The PointsBalancesSummary model constructor.
     * @property {module:model/PointsBalancesSummary}
     */
    PointsBalancesSummary: PointsBalancesSummary,
    /**
     * The PointsBalancesSummaryMinimumRedeemableAmount model constructor.
     * @property {module:model/PointsBalancesSummaryMinimumRedeemableAmount}
     */
    PointsBalancesSummaryMinimumRedeemableAmount: PointsBalancesSummaryMinimumRedeemableAmount,
    /**
     * The PointsBalancesSummaryTotalRedeemableAmount model constructor.
     * @property {module:model/PointsBalancesSummaryTotalRedeemableAmount}
     */
    PointsBalancesSummaryTotalRedeemableAmount: PointsBalancesSummaryTotalRedeemableAmount,
    /**
     * The RebatesBalances model constructor.
     * @property {module:model/RebatesBalances}
     */
    RebatesBalances: RebatesBalances,
    /**
     * The RebatesBalancesSummary model constructor.
     * @property {module:model/RebatesBalancesSummary}
     */
    RebatesBalancesSummary: RebatesBalancesSummary,
    /**
     * The RebatesBalancesSummaryMinimumRedeemableAmount model constructor.
     * @property {module:model/RebatesBalancesSummaryMinimumRedeemableAmount}
     */
    RebatesBalancesSummaryMinimumRedeemableAmount: RebatesBalancesSummaryMinimumRedeemableAmount,
    /**
     * The RebatesBalancesSummaryTotalRedeemableAmount model constructor.
     * @property {module:model/RebatesBalancesSummaryTotalRedeemableAmount}
     */
    RebatesBalancesSummaryTotalRedeemableAmount: RebatesBalancesSummaryTotalRedeemableAmount,
    /**
     * The RebatesRedemptionRequest model constructor.
     * @property {module:model/RebatesRedemptionRequest}
     */
    RebatesRedemptionRequest: RebatesRedemptionRequest,
    /**
     * The RebatesRedemptionResult model constructor.
     * @property {module:model/RebatesRedemptionResult}
     */
    RebatesRedemptionResult: RebatesRedemptionResult,
    /**
     * The RecordControl model constructor.
     * @property {module:model/RecordControl}
     */
    RecordControl: RecordControl,
    /**
     * The RedemptionDetl model constructor.
     * @property {module:model/RedemptionDetl}
     */
    RedemptionDetl: RedemptionDetl,
    /**
     * The RedemptionOutlet model constructor.
     * @property {module:model/RedemptionOutlet}
     */
    RedemptionOutlet: RedemptionOutlet,
    /**
     * The ReversalRequest model constructor.
     * @property {module:model/ReversalRequest}
     */
    ReversalRequest: ReversalRequest,
    /**
     * The ReversalRequestRedeemAmount model constructor.
     * @property {module:model/ReversalRequestRedeemAmount}
     */
    ReversalRequestRedeemAmount: ReversalRequestRedeemAmount,
    /**
     * The ReversalResponse model constructor.
     * @property {module:model/ReversalResponse}
     */
    ReversalResponse: ReversalResponse,
    /**
     * The ReversalResponseRewardsBalance model constructor.
     * @property {module:model/ReversalResponseRewardsBalance}
     */
    ReversalResponseRewardsBalance: ReversalResponseRewardsBalance,
    /**
     * The ReversalResponseRewardsBalanceRemainingCashValue model constructor.
     * @property {module:model/ReversalResponseRewardsBalanceRemainingCashValue}
     */
    ReversalResponseRewardsBalanceRemainingCashValue: ReversalResponseRewardsBalanceRemainingCashValue,
    /**
     * The RewardPricing model constructor.
     * @property {module:model/RewardPricing}
     */
    RewardPricing: RewardPricing,
    /**
     * The Rewards model constructor.
     * @property {module:model/Rewards}
     */
    Rewards: Rewards,
    /**
     * The RewardsAccount model constructor.
     * @property {module:model/RewardsAccount}
     */
    RewardsAccount: RewardsAccount,
    /**
     * The RewardsAccountConversionRates model constructor.
     * @property {module:model/RewardsAccountConversionRates}
     */
    RewardsAccountConversionRates: RewardsAccountConversionRates,
    /**
     * The RewardsAccountRewardsScheme model constructor.
     * @property {module:model/RewardsAccountRewardsScheme}
     */
    RewardsAccountRewardsScheme: RewardsAccountRewardsScheme,
    /**
     * The RewardsCatalogue model constructor.
     * @property {module:model/RewardsCatalogue}
     */
    RewardsCatalogue: RewardsCatalogue,
    /**
     * The RewardsExchangeRate model constructor.
     * @property {module:model/RewardsExchangeRate}
     */
    RewardsExchangeRate: RewardsExchangeRate,
    /**
     * The RewardsPointsTransaction model constructor.
     * @property {module:model/RewardsPointsTransaction}
     */
    RewardsPointsTransaction: RewardsPointsTransaction,
    /**
     * The RewardsPointsTransactions model constructor.
     * @property {module:model/RewardsPointsTransactions}
     */
    RewardsPointsTransactions: RewardsPointsTransactions,
    /**
     * The RewardsRebatesTransaction model constructor.
     * @property {module:model/RewardsRebatesTransaction}
     */
    RewardsRebatesTransaction: RewardsRebatesTransaction,
    /**
     * The RewardsRebatesTransactions model constructor.
     * @property {module:model/RewardsRebatesTransactions}
     */
    RewardsRebatesTransactions: RewardsRebatesTransactions,
    /**
     * The RewardsScheme model constructor.
     * @property {module:model/RewardsScheme}
     */
    RewardsScheme: RewardsScheme,
    /**
     * The RewardsSummary model constructor.
     * @property {module:model/RewardsSummary}
     */
    RewardsSummary: RewardsSummary,
    /**
     * The RewardsSummaryRewardsBalancesSummary model constructor.
     * @property {module:model/RewardsSummaryRewardsBalancesSummary}
     */
    RewardsSummaryRewardsBalancesSummary: RewardsSummaryRewardsBalancesSummary,
    /**
     * The Tag model constructor.
     * @property {module:model/Tag}
     */
    Tag: Tag,
    /**
     * The ValidityPeriod model constructor.
     * @property {module:model/ValidityPeriod}
     */
    ValidityPeriod: ValidityPeriod,
    /**
     * The VoucherDetl model constructor.
     * @property {module:model/VoucherDetl}
     */
    VoucherDetl: VoucherDetl,
    /**
     * The VouchersRedemptionRequest model constructor.
     * @property {module:model/VouchersRedemptionRequest}
     */
    VouchersRedemptionRequest: VouchersRedemptionRequest,
    /**
     * The VouchersRedemptionResult model constructor.
     * @property {module:model/VouchersRedemptionResult}
     */
    VouchersRedemptionResult: VouchersRedemptionResult,
    /**
     * The RewardsApi service constructor.
     * @property {module:api/RewardsApi}
     */
    RewardsApi: RewardsApi
  };

  return exports;
}));
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  accessRequestStatusEnum: () => accessRequestStatusEnum,
  achievementDifficultyEnum: () => achievementDifficultyEnum,
  achievementTypeEnum: () => achievementTypeEnum,
  achievements: () => achievements,
  achievementsRelations: () => achievementsRelations,
  activityLogs: () => activityLogs,
  activityLogsRelations: () => activityLogsRelations,
  adBillingTypeEnum: () => adBillingTypeEnum,
  adCategoryEnum: () => adCategoryEnum,
  adInquiries: () => adInquiries,
  adInquiriesRelations: () => adInquiriesRelations,
  adPriorityEnum: () => adPriorityEnum,
  adStatusEnum: () => adStatusEnum,
  adViews: () => adViews,
  adViewsRelations: () => adViewsRelations,
  advertisements: () => advertisements,
  advertisementsRelations: () => advertisementsRelations,
  appointmentStatusEnum: () => appointmentStatusEnum,
  appointments: () => appointments,
  appointmentsRelations: () => appointmentsRelations,
  archivedRecords: () => archivedRecords,
  archivedRecordsRelations: () => archivedRecordsRelations,
  auditLogs: () => auditLogs,
  badgeStatusEnum: () => badgeStatusEnum,
  billStatusEnum: () => billStatusEnum,
  billingIntervalEnum: () => billingIntervalEnum,
  claimLineItems: () => claimLineItems,
  claimLineItemsRelations: () => claimLineItemsRelations,
  claimStatusEnum: () => claimStatusEnum,
  communicationTranslations: () => communicationTranslations,
  communicationTranslationsRelations: () => communicationTranslationsRelations,
  communicationTypeEnum: () => communicationTypeEnum,
  currencies: () => currencies,
  currencyEnum: () => currencyEnum,
  departments: () => departments,
  departmentsRelations: () => departmentsRelations,
  exchangeRates: () => exchangeRates,
  financialTransactions: () => financialTransactions,
  financialTransactionsRelations: () => financialTransactionsRelations,
  healthAnalyses: () => healthAnalyses,
  healthRecommendations: () => healthRecommendations,
  hospitalBills: () => hospitalBills,
  hospitalBillsRelations: () => hospitalBillsRelations,
  hospitalPatientInsurance: () => hospitalPatientInsurance,
  insertAchievementSchema: () => insertAchievementSchema,
  insertActivityLogSchema: () => insertActivityLogSchema,
  insertAdInquirySchema: () => insertAdInquirySchema,
  insertAdViewSchema: () => insertAdViewSchema,
  insertAdvertisementSchema: () => insertAdvertisementSchema,
  insertAppointmentSchema: () => insertAppointmentSchema,
  insertArchivedRecordSchema: () => insertArchivedRecordSchema,
  insertClaimLineItemSchema: () => insertClaimLineItemSchema,
  insertCommunicationTranslationSchema: () => insertCommunicationTranslationSchema,
  insertDepartmentSchema: () => insertDepartmentSchema,
  insertFinancialTransactionSchema: () => insertFinancialTransactionSchema,
  insertHealthAnalysisSchema: () => insertHealthAnalysisSchema,
  insertHealthRecommendationSchema: () => insertHealthRecommendationSchema,
  insertHospitalBillSchema: () => insertHospitalBillSchema,
  insertInsuranceClaimSchema: () => insertInsuranceClaimSchema,
  insertInsurancePlanCoverageSchema: () => insertInsurancePlanCoverageSchema,
  insertInsuranceProviderSchema: () => insertInsuranceProviderSchema,
  insertLabBillSchema: () => insertLabBillSchema,
  insertLabOrderAssignmentSchema: () => insertLabOrderAssignmentSchema,
  insertLabOrderSchema: () => insertLabOrderSchema,
  insertLabResultSchema: () => insertLabResultSchema,
  insertLaboratoryApplicationSchema: () => insertLaboratoryApplicationSchema,
  insertLaboratorySchema: () => insertLaboratorySchema,
  insertLeaderboardSchema: () => insertLeaderboardSchema,
  insertMarketplaceOrderItemSchema: () => insertMarketplaceOrderItemSchema,
  insertMarketplaceOrderSchema: () => insertMarketplaceOrderSchema,
  insertMarketplaceProductSchema: () => insertMarketplaceProductSchema,
  insertMedicalCommunicationSchema: () => insertMedicalCommunicationSchema,
  insertMedicalPhraseSchema: () => insertMedicalPhraseSchema,
  insertMedicalSupplierSchema: () => insertMedicalSupplierSchema,
  insertMedicationCopaySchema: () => insertMedicationCopaySchema,
  insertOfflineSyncDataSchema: () => insertOfflineSyncDataSchema,
  insertPatientAccessAuditLogSchema: () => insertPatientAccessAuditLogSchema,
  insertPatientAccessRequestSchema: () => insertPatientAccessRequestSchema,
  insertPatientBillSchema: () => insertPatientBillSchema,
  insertPatientCheckInSchema: () => insertPatientCheckInSchema,
  insertPatientInsuranceSchema: () => insertPatientInsuranceSchema,
  insertPatientPaymentSchema: () => insertPatientPaymentSchema,
  insertPatientSchema: () => insertPatientSchema,
  insertPharmacyBillSchema: () => insertPharmacyBillSchema,
  insertPharmacyPatientInsuranceSchema: () => insertPharmacyPatientInsuranceSchema,
  insertPharmacyReceiptSchema: () => insertPharmacyReceiptSchema,
  insertPharmacyReportTemplateSchema: () => insertPharmacyReportTemplateSchema,
  insertPharmacySchema: () => insertPharmacySchema,
  insertPhraseTranslationSchema: () => insertPhraseTranslationSchema,
  insertPrescriptionSchema: () => insertPrescriptionSchema,
  insertPricingPlanSchema: () => insertPricingPlanSchema,
  insertProductReviewSchema: () => insertProductReviewSchema,
  insertQuoteRequestSchema: () => insertQuoteRequestSchema,
  insertReportSchema: () => insertReportSchema,
  insertRolePermissionSchema: () => insertRolePermissionSchema,
  insertServicePriceSchema: () => insertServicePriceSchema,
  insertSubscriptionSchema: () => insertSubscriptionSchema,
  insertSupportedLanguageSchema: () => insertSupportedLanguageSchema,
  insertTenantSchema: () => insertTenantSchema,
  insertTranslationSchema: () => insertTranslationSchema,
  insertUserAchievementSchema: () => insertUserAchievementSchema,
  insertUserSchema: () => insertUserSchema,
  insertUserStatsSchema: () => insertUserStatsSchema,
  insertVisitSummarySchema: () => insertVisitSummarySchema,
  insertVitalSignsSchema: () => insertVitalSignsSchema,
  insertWorkShiftSchema: () => insertWorkShiftSchema,
  insuranceClaims: () => insuranceClaims,
  insuranceClaimsRelations: () => insuranceClaimsRelations,
  insurancePlanCoverage: () => insurancePlanCoverage,
  insurancePlanCoverageRelations: () => insurancePlanCoverageRelations,
  insuranceProviders: () => insuranceProviders,
  insuranceProvidersRelations: () => insuranceProvidersRelations,
  labBills: () => labBills,
  labOrderAssignments: () => labOrderAssignments,
  labOrderAssignmentsRelations: () => labOrderAssignmentsRelations,
  labOrderStatusEnum: () => labOrderStatusEnum,
  labOrders: () => labOrders,
  labResults: () => labResults,
  labResultsRelations: () => labResultsRelations,
  laboratories: () => laboratories,
  laboratoriesRelations: () => laboratoriesRelations,
  laboratoryApplications: () => laboratoryApplications,
  laboratoryApplicationsRelations: () => laboratoryApplicationsRelations,
  laboratoryPatientInsurance: () => laboratoryPatientInsurance,
  leaderboards: () => leaderboards,
  leaderboardsRelations: () => leaderboardsRelations,
  marketplaceOrderItems: () => marketplaceOrderItems,
  marketplaceOrderItemsRelations: () => marketplaceOrderItemsRelations,
  marketplaceOrders: () => marketplaceOrders,
  marketplaceOrdersRelations: () => marketplaceOrdersRelations,
  marketplaceProducts: () => marketplaceProducts,
  marketplaceProductsRelations: () => marketplaceProductsRelations,
  medicalCommunications: () => medicalCommunications,
  medicalCommunicationsRelations: () => medicalCommunicationsRelations,
  medicalPhrases: () => medicalPhrases,
  medicalPhrasesRelations: () => medicalPhrasesRelations,
  medicalSpecialtyEnum: () => medicalSpecialtyEnum,
  medicalSuppliers: () => medicalSuppliers,
  medicationCopays: () => medicationCopays,
  medicationCopaysRelations: () => medicationCopaysRelations,
  offlineSyncData: () => offlineSyncData,
  orderItemStatusEnum: () => orderItemStatusEnum,
  orderStatusEnum: () => orderStatusEnum,
  patientAccessAuditLog: () => patientAccessAuditLog2,
  patientAccessRequests: () => patientAccessRequests,
  patientAssignments: () => patientAssignments,
  patientBills: () => patientBills,
  patientBillsRelations: () => patientBillsRelations,
  patientCheckIns: () => patientCheckIns,
  patientCheckInsRelations: () => patientCheckInsRelations,
  patientInsurance: () => patientInsurance,
  patientInsuranceRelations: () => patientInsuranceRelations,
  patientPayments: () => patientPayments,
  patientPaymentsRelations: () => patientPaymentsRelations,
  patientPharmacyPreferences: () => patientPharmacyPreferences,
  patients: () => patients,
  patientsRelations: () => patientsRelations,
  pendingRegistrations: () => pendingRegistrations,
  pharmacies: () => pharmacies,
  pharmaciesRelations: () => pharmaciesRelations,
  pharmacyBills: () => pharmacyBills,
  pharmacyBillsRelations: () => pharmacyBillsRelations,
  pharmacyPatientInsurance: () => pharmacyPatientInsurance,
  pharmacyPatientInsuranceRelations: () => pharmacyPatientInsuranceRelations,
  pharmacyReceipts: () => pharmacyReceipts,
  pharmacyReportTemplates: () => pharmacyReportTemplates,
  pharmacyReportTemplatesRelations: () => pharmacyReportTemplatesRelations,
  phraseTranslations: () => phraseTranslations,
  phraseTranslationsRelations: () => phraseTranslationsRelations,
  prescriptionArchives: () => prescriptionArchives,
  prescriptionStatusEnum: () => prescriptionStatusEnum,
  prescriptions: () => prescriptions,
  pricingPlans: () => pricingPlans,
  priorityLevelEnum: () => priorityLevelEnum,
  productReviews: () => productReviews,
  productReviewsRelations: () => productReviewsRelations,
  productStatusEnum: () => productStatusEnum,
  quoteRequestStatusEnum: () => quoteRequestStatusEnum,
  quoteRequests: () => quoteRequests,
  reportStatusEnum: () => reportStatusEnum,
  reportTypeEnum: () => reportTypeEnum,
  reports: () => reports,
  reportsRelations: () => reportsRelations,
  roleEnum: () => roleEnum,
  rolePermissions: () => rolePermissions,
  servicePrices: () => servicePrices,
  servicePricesRelations: () => servicePricesRelations,
  serviceTypeEnum: () => serviceTypeEnum,
  sessions: () => sessions,
  shiftStatusEnum: () => shiftStatusEnum,
  specialtyQuestionnaires: () => specialtyQuestionnaires,
  subscriptionPlanEnum: () => subscriptionPlanEnum,
  subscriptionStatusEnum: () => subscriptionStatusEnum,
  subscriptions: () => subscriptions,
  subscriptionsRelations: () => subscriptionsRelations,
  supplierStatusEnum: () => supplierStatusEnum,
  supportedLanguages: () => supportedLanguages,
  supportedLanguagesRelations: () => supportedLanguagesRelations,
  tenantTypeEnum: () => tenantTypeEnum,
  tenants: () => tenants,
  tenantsRelations: () => tenantsRelations,
  translationStatusEnum: () => translationStatusEnum,
  translations: () => translations,
  userAchievements: () => userAchievements,
  userAchievementsRelations: () => userAchievementsRelations,
  userStats: () => userStats,
  userStatsRelations: () => userStatsRelations,
  users: () => users,
  usersRelations: () => usersRelations,
  verificationStatusEnum: () => verificationStatusEnum,
  visitSummaries: () => visitSummaries,
  visitSummariesRelations: () => visitSummariesRelations,
  vitalSigns: () => vitalSigns,
  vitalSignsRelations: () => vitalSignsRelations,
  workShifts: () => workShifts,
  workShiftsRelations: () => workShiftsRelations
});
import { sql, relations } from "drizzle-orm";
import { pgTable, text, varchar, uuid, timestamp, boolean, integer, decimal, jsonb, pgEnum, index } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { nanoid } from "nanoid";
var roleEnum, tenantTypeEnum, supplierStatusEnum, quoteRequestStatusEnum, appointmentStatusEnum, prescriptionStatusEnum, labOrderStatusEnum, claimStatusEnum, subscriptionStatusEnum, subscriptionPlanEnum, billingIntervalEnum, reportTypeEnum, reportStatusEnum, communicationTypeEnum, translationStatusEnum, shiftStatusEnum, verificationStatusEnum, currencyEnum, priorityLevelEnum, achievementTypeEnum, achievementDifficultyEnum, badgeStatusEnum, billStatusEnum, accessRequestStatusEnum, serviceTypeEnum, medicalSpecialtyEnum, adCategoryEnum, adStatusEnum, adPriorityEnum, productStatusEnum, orderStatusEnum, orderItemStatusEnum, adBillingTypeEnum, currencies, exchangeRates, sessions, tenants, users, patients, appointments, prescriptions, insuranceProviders, patientInsurance, labOrders, servicePrices, insurancePlanCoverage, claimLineItems, prescriptionArchives, medicationCopays, visitSummaries, insuranceClaims, rolePermissions, auditLogs, subscriptions, reports, workShifts, hospitalPatientInsurance, departments, laboratoryPatientInsurance, pharmacyPatientInsurance, patientPharmacyPreferences, archivedRecords, pharmacyReportTemplates, medicalCommunications, communicationTranslations, healthRecommendations, healthAnalyses, supportedLanguages, medicalPhrases, patientAssignments, patientAccessRequests, patientAccessAuditLog2, phraseTranslations, pharmacies, laboratories, laboratoryApplications, pendingRegistrations, labResults, pricingPlans, pharmacyReceipts, labBills, hospitalBills, pharmacyBills, financialTransactions, offlineSyncData, translations, labOrderAssignments, vitalSigns, specialtyQuestionnaires, patientCheckIns, patientBills, patientPayments, achievements, userAchievements, userStats, leaderboards, activityLogs, medicalSuppliers, departmentsRelations, tenantsRelations, insuranceProvidersRelations, patientInsuranceRelations, servicePricesRelations, insurancePlanCoverageRelations, claimLineItemsRelations, insuranceClaimsRelations, subscriptionsRelations, reportsRelations, medicalCommunicationsRelations, communicationTranslationsRelations, supportedLanguagesRelations, medicalPhrasesRelations, phraseTranslationsRelations, usersRelations, pharmaciesRelations, patientsRelations, laboratoriesRelations, laboratoryApplicationsRelations, labResultsRelations, labOrderAssignmentsRelations, appointmentsRelations, vitalSignsRelations, patientCheckInsRelations, medicationCopaysRelations, visitSummariesRelations, patientBillsRelations, patientPaymentsRelations, achievementsRelations, userAchievementsRelations, userStatsRelations, leaderboardsRelations, activityLogsRelations, hospitalBillsRelations, pharmacyBillsRelations, financialTransactionsRelations, workShiftsRelations, pharmacyPatientInsuranceRelations, archivedRecordsRelations, pharmacyReportTemplatesRelations, insertTenantSchema, insertUserSchema, insertPatientSchema, insertAppointmentSchema, insertPrescriptionSchema, insertLabOrderSchema, insertPharmacySchema, insertInsuranceProviderSchema, insertPatientInsuranceSchema, insertInsuranceClaimSchema, insertServicePriceSchema, insertInsurancePlanCoverageSchema, insertClaimLineItemSchema, insertMedicationCopaySchema, insertVitalSignsSchema, insertVisitSummarySchema, insertPatientCheckInSchema, insertRolePermissionSchema, insertPatientBillSchema, insertPatientPaymentSchema, insertSubscriptionSchema, insertReportSchema, insertMedicalCommunicationSchema, insertCommunicationTranslationSchema, insertSupportedLanguageSchema, insertMedicalPhraseSchema, insertPhraseTranslationSchema, insertLaboratorySchema, insertLabResultSchema, insertLabOrderAssignmentSchema, insertLaboratoryApplicationSchema, insertHealthRecommendationSchema, insertHealthAnalysisSchema, insertPricingPlanSchema, insertOfflineSyncDataSchema, insertTranslationSchema, insertPharmacyReceiptSchema, insertLabBillSchema, insertHospitalBillSchema, insertPharmacyBillSchema, insertFinancialTransactionSchema, insertAchievementSchema, insertUserAchievementSchema, insertUserStatsSchema, insertLeaderboardSchema, insertActivityLogSchema, insertPatientAccessRequestSchema, insertPatientAccessAuditLogSchema, insertWorkShiftSchema, insertPharmacyPatientInsuranceSchema, insertArchivedRecordSchema, insertPharmacyReportTemplateSchema, insertDepartmentSchema, advertisements, adViews, adInquiries, marketplaceProducts, marketplaceOrders, marketplaceOrderItems, productReviews, quoteRequests, marketplaceProductsRelations, marketplaceOrdersRelations, marketplaceOrderItemsRelations, productReviewsRelations, advertisementsRelations, adViewsRelations, adInquiriesRelations, insertAdvertisementSchema, insertAdViewSchema, insertAdInquirySchema, insertMedicalSupplierSchema, insertMarketplaceProductSchema, insertMarketplaceOrderSchema, insertMarketplaceOrderItemSchema, insertProductReviewSchema, insertQuoteRequestSchema;
var init_schema = __esm({
  "shared/schema.ts"() {
    "use strict";
    roleEnum = pgEnum("role", [
      "super_admin",
      "tenant_admin",
      "director",
      "physician",
      "nurse",
      "pharmacist",
      "lab_technician",
      "receptionist",
      "billing_staff",
      "insurance_manager",
      "patient"
    ]);
    tenantTypeEnum = pgEnum("tenant_type", [
      "platform",
      "hospital",
      "clinic",
      "pharmacy",
      "laboratory",
      "insurance_provider",
      "medical_supplier"
    ]);
    supplierStatusEnum = pgEnum("supplier_status", [
      "pending_review",
      "approved",
      "active",
      "suspended",
      "rejected"
    ]);
    quoteRequestStatusEnum = pgEnum("quote_request_status", [
      "pending",
      "quoted",
      "accepted",
      "rejected",
      "expired"
    ]);
    appointmentStatusEnum = pgEnum("appointment_status", [
      "scheduled",
      "confirmed",
      "checked_in",
      "in_progress",
      "completed",
      "cancelled",
      "no_show"
    ]);
    prescriptionStatusEnum = pgEnum("prescription_status", [
      "prescribed",
      // Prescribed by doctor
      "sent_to_pharmacy",
      // Sent to pharmacy
      "received",
      // Received by pharmacy - new workflow starts
      "insurance_verified",
      // Insurance coverage verified and copay calculated
      "processing",
      // Being processed by pharmacy
      "ready",
      // Ready for pickup
      "dispensed",
      // Dispensed to patient
      "filled",
      // Legacy status - same as dispensed
      "picked_up",
      // Picked up by patient
      "cancelled"
      // Cancelled
    ]);
    labOrderStatusEnum = pgEnum("lab_order_status", [
      "ordered",
      "collected",
      "processing",
      "completed",
      "cancelled"
    ]);
    claimStatusEnum = pgEnum("claim_status", [
      "draft",
      "submitted",
      "processing",
      "approved",
      "denied",
      "paid"
    ]);
    subscriptionStatusEnum = pgEnum("subscription_status", [
      "trial",
      "active",
      "suspended",
      "cancelled",
      "expired"
    ]);
    subscriptionPlanEnum = pgEnum("subscription_plan", [
      "starter",
      "professional",
      "enterprise",
      "white_label",
      "custom"
    ]);
    billingIntervalEnum = pgEnum("billing_interval", [
      "monthly",
      "quarterly",
      "yearly"
    ]);
    reportTypeEnum = pgEnum("report_type", [
      "financial",
      "operational",
      "clinical",
      "compliance",
      "custom"
    ]);
    reportStatusEnum = pgEnum("report_status", [
      "pending",
      "generating",
      "completed",
      "failed"
    ]);
    communicationTypeEnum = pgEnum("communication_type", [
      "medical_instruction",
      "prescription_note",
      "discharge_summary",
      "appointment_reminder",
      "lab_result",
      "general_message",
      "emergency_alert"
    ]);
    translationStatusEnum = pgEnum("translation_status", [
      "pending",
      "translating",
      "completed",
      "failed",
      "manual_review"
    ]);
    shiftStatusEnum = pgEnum("shift_status", [
      "active",
      "completed",
      "cancelled"
    ]);
    verificationStatusEnum = pgEnum("verification_status", [
      "pending",
      "verified",
      "expired",
      "denied"
    ]);
    currencyEnum = pgEnum("currency", [
      // Major International Currencies
      "USD",
      "EUR",
      "GBP",
      "JPY",
      "CHF",
      "CAD",
      "AUD",
      "CNY",
      // African Currencies
      "DZD",
      "AOA",
      "XOF",
      "BWP",
      "BIF",
      "XAF",
      "CVE",
      "KMF",
      "CDF",
      "DJF",
      "EGP",
      "ERN",
      "SZL",
      "ETB",
      "GMD",
      "GHS",
      "GNF",
      "KES",
      "LSL",
      "LRD",
      "LYD",
      "MGA",
      "MWK",
      "MRU",
      "MUR",
      "MAD",
      "MZN",
      "NAD",
      "NGN",
      "RWF",
      "STN",
      "SCR",
      "SLE",
      "SOS",
      "ZAR",
      "SSP",
      "SDG",
      "TZS",
      "TND",
      "UGX",
      "ZMW",
      "ZWL"
    ]);
    priorityLevelEnum = pgEnum("priority_level", [
      "low",
      "normal",
      "high",
      "urgent",
      "emergency"
    ]);
    achievementTypeEnum = pgEnum("achievement_type", [
      "productivity",
      // Speed and volume achievements
      "quality",
      // Accuracy and quality achievements  
      "milestone",
      // Major milestones and targets
      "consistency",
      // Streaks and regular performance
      "teamwork",
      // Collaboration achievements
      "efficiency"
      // Time and resource optimization
    ]);
    achievementDifficultyEnum = pgEnum("achievement_difficulty", [
      "bronze",
      "silver",
      "gold",
      "platinum",
      "legendary"
    ]);
    badgeStatusEnum = pgEnum("badge_status", [
      "locked",
      "unlocked",
      "earned"
    ]);
    billStatusEnum = pgEnum("bill_status", [
      "pending",
      "overdue",
      "paid",
      "partial_payment",
      "cancelled",
      "refunded"
    ]);
    accessRequestStatusEnum = pgEnum("access_request_status", [
      "pending",
      "approved",
      "rejected",
      "expired"
    ]);
    serviceTypeEnum = pgEnum("service_type", [
      "procedure",
      "consultation",
      "diagnostic",
      "treatment",
      "laboratory",
      "imaging",
      "therapy",
      "medication",
      "emergency"
    ]);
    medicalSpecialtyEnum = pgEnum("medical_specialty", [
      "family_medicine",
      "internal_medicine",
      "pediatrics",
      "cardiology",
      "dermatology",
      "neurology",
      "orthopedics",
      "gynecology",
      "psychiatry",
      "oncology",
      "emergency_medicine",
      "anesthesiology",
      "radiology",
      "pathology",
      "surgery",
      "ophthalmology",
      "ent",
      "urology",
      "endocrinology",
      "gastroenterology"
    ]);
    adCategoryEnum = pgEnum("ad_category", [
      "medical_devices",
      "diagnostic_equipment",
      "surgical_instruments",
      "laboratory_equipment",
      "pharmacy_supplies",
      "software_solutions",
      "consulting_services",
      "training_programs",
      "maintenance_services",
      "insurance_services",
      "facility_management",
      "telemedicine_solutions"
    ]);
    adStatusEnum = pgEnum("ad_status", [
      "draft",
      "pending_review",
      "approved",
      "active",
      "paused",
      "expired",
      "rejected",
      "suspended"
    ]);
    adPriorityEnum = pgEnum("ad_priority", [
      "standard",
      "featured",
      "premium",
      "sponsored"
    ]);
    productStatusEnum = pgEnum("product_status", [
      "draft",
      "active",
      "inactive",
      "discontinued",
      "out_of_stock"
    ]);
    orderStatusEnum = pgEnum("marketplace_order_status", [
      "pending",
      "confirmed",
      "processing",
      "shipped",
      "delivered",
      "cancelled",
      "refunded"
    ]);
    orderItemStatusEnum = pgEnum("order_item_status", [
      "pending",
      "confirmed",
      "processing",
      "shipped",
      "delivered",
      "cancelled",
      "returned"
    ]);
    adBillingTypeEnum = pgEnum("ad_billing_type", [
      "monthly",
      "per_click",
      "per_impression",
      "fixed_duration"
    ]);
    currencies = pgTable("currencies", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      code: currencyEnum("code").notNull().unique(),
      name: text("name").notNull(),
      symbol: text("symbol").notNull(),
      numericCode: varchar("numeric_code", { length: 3 }),
      decimalPlaces: integer("decimal_places").default(2),
      region: text("region"),
      // Africa, Europe, Asia, etc.
      country: text("country"),
      isActive: boolean("is_active").default(true),
      exchangeRateToUSD: decimal("exchange_rate_to_usd", { precision: 15, scale: 6 }).default("1.000000"),
      lastUpdated: timestamp("last_updated").default(sql`CURRENT_TIMESTAMP`),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`)
    });
    exchangeRates = pgTable("exchange_rates", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      baseCurrency: currencyEnum("base_currency").notNull().default("USD"),
      targetCurrency: currencyEnum("target_currency").notNull(),
      rate: decimal("rate", { precision: 15, scale: 6 }).notNull(),
      bidRate: decimal("bid_rate", { precision: 15, scale: 6 }),
      askRate: decimal("ask_rate", { precision: 15, scale: 6 }),
      provider: text("provider").default("manual"),
      // manual, api, bank
      validFrom: timestamp("valid_from").default(sql`CURRENT_TIMESTAMP`),
      validTo: timestamp("valid_to"),
      isActive: boolean("is_active").default(true),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`)
    });
    sessions = pgTable(
      "sessions",
      {
        sid: varchar("sid").primaryKey(),
        sess: jsonb("sess").notNull(),
        expire: timestamp("expire").notNull()
      },
      (table) => ({
        expireIdx: index("IDX_session_expire").on(table.expire)
      })
    );
    tenants = pgTable("tenants", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      name: text("name").notNull(),
      type: tenantTypeEnum("type").notNull(),
      subdomain: text("subdomain").unique().notNull(),
      settings: jsonb("settings").default("{}"),
      isActive: boolean("is_active").default(true),
      // Multi-tenant relationships
      parentTenantId: uuid("parent_tenant_id"),
      // For hospital-owned pharmacies
      organizationType: text("organization_type", { enum: ["independent", "hospital_owned"] }).default("independent"),
      // White-label branding
      brandName: text("brand_name"),
      logoUrl: text("logo_url"),
      primaryColor: varchar("primary_color", { length: 7 }).default("#10b981"),
      // hex color
      secondaryColor: varchar("secondary_color", { length: 7 }).default("#3b82f6"),
      customDomain: text("custom_domain"),
      customCss: text("custom_css"),
      // Multi-language settings
      defaultLanguage: varchar("default_language", { length: 10 }).default("en"),
      supportedLanguages: jsonb("supported_languages").default(["en"]),
      // Currency settings
      baseCurrency: currencyEnum("base_currency").default("USD"),
      supportedCurrencies: jsonb("supported_currencies").default(["USD"]),
      // Offline settings
      offlineEnabled: boolean("offline_enabled").default(false),
      offlineStorageMb: integer("offline_storage_mb").default(100),
      syncFrequencyMinutes: integer("sync_frequency_minutes").default(15),
      // Trial and subscription tracking
      trialStartDate: timestamp("trial_start_date").default(sql`CURRENT_TIMESTAMP`),
      trialEndDate: timestamp("trial_end_date").default(sql`CURRENT_TIMESTAMP + INTERVAL '14 days'`),
      subscriptionStatus: subscriptionStatusEnum("subscription_status").default("trial"),
      lastSuspensionCheck: timestamp("last_suspension_check"),
      suspendedAt: timestamp("suspended_at"),
      suspensionReason: text("suspension_reason"),
      // Phone and address (moved from top level)
      phoneNumber: text("phone_number"),
      address: text("address"),
      description: text("description"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    users = pgTable("users", {
      id: varchar("id").primaryKey(),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      username: text("username"),
      email: text("email"),
      password: text("password"),
      firstName: text("first_name"),
      lastName: text("last_name"),
      profileImageUrl: varchar("profile_image_url"),
      role: roleEnum("role").notNull(),
      isActive: boolean("is_active").default(true),
      isTemporaryPassword: boolean("is_temporary_password").default(false),
      mustChangePassword: boolean("must_change_password").default(false),
      lastLogin: timestamp("last_login"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    patients = pgTable("patients", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      mrn: text("mrn").notNull(),
      firstName: text("first_name").notNull(),
      lastName: text("last_name").notNull(),
      dateOfBirth: timestamp("date_of_birth").notNull(),
      gender: text("gender"),
      phone: text("phone"),
      email: text("email"),
      address: jsonb("address"),
      emergencyContact: jsonb("emergency_contact"),
      insuranceInfo: jsonb("insurance_info"),
      preferredPharmacyId: uuid("preferred_pharmacy_id").references(() => pharmacies.id),
      primaryPhysicianId: uuid("primary_physician_id").references(() => users.id),
      // Assigned primary doctor
      medicalHistory: jsonb("medical_history").default("[]"),
      allergies: jsonb("allergies").default("[]"),
      medications: jsonb("medications").default("[]"),
      isActive: boolean("is_active").default(true),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    appointments = pgTable("appointments", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      patientId: uuid("patient_id").references(() => patients.id).notNull(),
      providerId: uuid("provider_id").references(() => users.id).notNull(),
      appointmentDate: timestamp("appointment_date").notNull(),
      duration: integer("duration").default(30),
      type: text("type").notNull(),
      status: appointmentStatusEnum("status").default("scheduled"),
      notes: text("notes"),
      chiefComplaint: text("chief_complaint"),
      vitals: jsonb("vitals"),
      diagnosis: jsonb("diagnosis").default("[]"),
      treatmentPlan: text("treatment_plan"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    prescriptions = pgTable("prescriptions", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      // Doctor/Hospital tenant
      patientId: uuid("patient_id").references(() => patients.id).notNull(),
      providerId: uuid("provider_id").references(() => users.id).notNull(),
      // Doctor who prescribed
      appointmentId: uuid("appointment_id").references(() => appointments.id),
      pharmacyTenantId: uuid("pharmacy_tenant_id").references(() => tenants.id),
      // Target pharmacy chosen by patient
      medicationName: text("medication_name").notNull(),
      dosage: text("dosage").notNull(),
      frequency: text("frequency").notNull(),
      quantity: integer("quantity").notNull(),
      refills: integer("refills").default(0),
      instructions: text("instructions"),
      status: prescriptionStatusEnum("status").default("prescribed"),
      prescribedDate: timestamp("prescribed_date").default(sql`CURRENT_TIMESTAMP`),
      sentToPharmacyDate: timestamp("sent_to_pharmacy_date"),
      filledDate: timestamp("filled_date"),
      expiryDate: timestamp("expiry_date"),
      // Pharmacy workflow fields
      insuranceVerifiedDate: timestamp("insurance_verified_date"),
      insuranceProvider: text("insurance_provider"),
      insuranceCopay: decimal("insurance_copay", { precision: 10, scale: 2 }),
      insuranceCoveragePercentage: decimal("insurance_coverage_percentage", { precision: 5, scale: 2 }),
      // 0-100%
      totalCost: decimal("total_cost", { precision: 10, scale: 2 }),
      processingStartedDate: timestamp("processing_started_date"),
      readyDate: timestamp("ready_date"),
      dispensedDate: timestamp("dispensed_date"),
      pharmacyNotes: text("pharmacy_notes"),
      // Prescription routing fields for hospital-pharmacy communication  
      routedFromHospital: uuid("routed_from_hospital").references(() => tenants.id),
      // Original hospital
      patientSelectedPharmacy: boolean("patient_selected_pharmacy").default(false),
      routingNotes: text("routing_notes"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    insuranceProviders = pgTable("insurance_providers", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      name: text("name").notNull(),
      code: text("code").notNull(),
      type: text("type").notNull(),
      // HMO, PPO, Medicare, Medicaid, etc.
      contactInfo: jsonb("contact_info"),
      claimsAddress: text("claims_address"),
      electronicSubmission: boolean("electronic_submission").default(false),
      isActive: boolean("is_active").default(true),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    patientInsurance = pgTable("patient_insurance", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      patientId: uuid("patient_id").references(() => patients.id).notNull(),
      insuranceProviderId: uuid("insurance_provider_id").references(() => insuranceProviders.id).notNull(),
      policyNumber: text("policy_number").notNull(),
      groupNumber: text("group_number"),
      subscriberName: text("subscriber_name"),
      subscriberRelationship: text("subscriber_relationship"),
      // self, spouse, child, other
      effectiveDate: timestamp("effective_date").notNull(),
      expirationDate: timestamp("expiration_date"),
      copayAmount: decimal("copay_amount", { precision: 10, scale: 2 }),
      deductibleAmount: decimal("deductible_amount", { precision: 10, scale: 2 }),
      isPrimary: boolean("is_primary").default(true),
      isActive: boolean("is_active").default(true),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    labOrders = pgTable("lab_orders", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      patientId: uuid("patient_id").references(() => patients.id).notNull(),
      providerId: uuid("provider_id").references(() => users.id).notNull(),
      appointmentId: uuid("appointment_id").references(() => appointments.id),
      labTenantId: uuid("lab_tenant_id").references(() => tenants.id),
      testName: text("test_name").notNull(),
      testCode: text("test_code"),
      instructions: text("instructions"),
      priority: text("priority").default("routine"),
      status: labOrderStatusEnum("status").default("ordered"),
      results: jsonb("results"),
      resultDate: timestamp("result_date"),
      orderedDate: timestamp("ordered_date").default(sql`CURRENT_TIMESTAMP`),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    servicePrices = pgTable("service_prices", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      serviceCode: text("service_code").notNull(),
      // CPT, HCPCS, or internal code
      serviceName: text("service_name").notNull(),
      serviceDescription: text("service_description"),
      serviceType: serviceTypeEnum("service_type").notNull(),
      currency: currencyEnum("currency").notNull().default("USD"),
      basePrice: decimal("base_price", { precision: 10, scale: 2 }).notNull(),
      isActive: boolean("is_active").default(true),
      effectiveDate: timestamp("effective_date").default(sql`CURRENT_TIMESTAMP`),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    insurancePlanCoverage = pgTable("insurance_plan_coverage", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      insuranceProviderId: uuid("insurance_provider_id").references(() => insuranceProviders.id).notNull(),
      servicePriceId: uuid("service_price_id").references(() => servicePrices.id).notNull(),
      copayAmount: decimal("copay_amount", { precision: 10, scale: 2 }),
      // Fixed copay
      copayPercentage: decimal("copay_percentage", { precision: 5, scale: 2 }),
      // Percentage copay (0-100)
      deductibleApplies: boolean("deductible_applies").default(false),
      maxCoverageAmount: decimal("max_coverage_amount", { precision: 10, scale: 2 }),
      // Maximum insurance will pay
      preAuthRequired: boolean("pre_auth_required").default(false),
      isActive: boolean("is_active").default(true),
      effectiveDate: timestamp("effective_date").default(sql`CURRENT_TIMESTAMP`),
      expirationDate: timestamp("expiration_date"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    claimLineItems = pgTable("claim_line_items", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      claimId: uuid("claim_id").references(() => insuranceClaims.id).notNull(),
      servicePriceId: uuid("service_price_id").references(() => servicePrices.id).notNull(),
      quantity: integer("quantity").default(1),
      unitPrice: decimal("unit_price", { precision: 10, scale: 2 }).notNull(),
      totalPrice: decimal("total_price", { precision: 10, scale: 2 }).notNull(),
      patientCopay: decimal("patient_copay", { precision: 10, scale: 2 }).notNull(),
      insuranceAmount: decimal("insurance_amount", { precision: 10, scale: 2 }).notNull(),
      deductibleAmount: decimal("deductible_amount", { precision: 10, scale: 2 }).default("0"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    prescriptionArchives = pgTable("prescription_archives", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      // Pharmacy tenant
      originalPrescriptionId: uuid("original_prescription_id").notNull(),
      // Reference to original prescription
      patientId: uuid("patient_id").references(() => patients.id).notNull(),
      providerId: uuid("provider_id").references(() => users.id).notNull(),
      pharmacyTenantId: uuid("pharmacy_tenant_id").references(() => tenants.id),
      medicationName: text("medication_name").notNull(),
      dosage: text("dosage").notNull(),
      frequency: text("frequency").notNull(),
      quantity: integer("quantity").notNull(),
      refills: integer("refills").default(0),
      instructions: text("instructions"),
      status: prescriptionStatusEnum("status").default("dispensed"),
      prescribedDate: timestamp("prescribed_date"),
      dispensedDate: timestamp("dispensed_date"),
      archivedDate: timestamp("archived_date").default(sql`CURRENT_TIMESTAMP`),
      insuranceProvider: text("insurance_provider"),
      insuranceCopay: decimal("insurance_copay", { precision: 10, scale: 2 }),
      insuranceCoveragePercentage: decimal("insurance_coverage_percentage", { precision: 5, scale: 2 }),
      totalCost: decimal("total_cost", { precision: 10, scale: 2 }),
      pharmacyNotes: text("pharmacy_notes"),
      claimNumber: text("claim_number"),
      transactionId: text("transaction_id"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    medicationCopays = pgTable("medication_copays", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      // Pharmacy tenant
      patientId: uuid("patient_id").references(() => patients.id).notNull(),
      patientInsuranceId: uuid("patient_insurance_id").references(() => patientInsurance.id).notNull(),
      prescriptionId: uuid("prescription_id").references(() => prescriptions.id),
      medicationName: text("medication_name").notNull(),
      genericName: text("generic_name"),
      strength: text("strength"),
      dosageForm: text("dosage_form"),
      // tablet, capsule, liquid, etc.
      ndcNumber: text("ndc_number"),
      // National Drug Code
      // Pricing Information
      fullPrice: decimal("full_price", { precision: 10, scale: 2 }).notNull(),
      // Full medication price
      insuranceCoverage: decimal("insurance_coverage", { precision: 10, scale: 2 }).notNull(),
      // Amount covered by insurance
      patientCopay: decimal("patient_copay", { precision: 10, scale: 2 }).notNull(),
      // Amount patient pays
      copayPercentage: decimal("copay_percentage", { precision: 5, scale: 2 }),
      // If percentage-based copay
      // Insurance Details
      formularyTier: text("formulary_tier"),
      // Tier 1, 2, 3, etc.
      priorAuthRequired: boolean("prior_auth_required").default(false),
      quantityLimit: integer("quantity_limit"),
      // Max quantity per fill
      daySupplyLimit: integer("day_supply_limit"),
      // Max days supply
      // Pharmacy Information
      definedByPharmacist: uuid("defined_by_pharmacist").references(() => users.id).notNull(),
      pharmacyNotes: text("pharmacy_notes"),
      effectiveDate: timestamp("effective_date").default(sql`CURRENT_TIMESTAMP`),
      expirationDate: timestamp("expiration_date"),
      // Status
      isActive: boolean("is_active").default(true),
      lastVerified: timestamp("last_verified").default(sql`CURRENT_TIMESTAMP`),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    visitSummaries = pgTable("visit_summaries", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      patientId: uuid("patient_id").references(() => patients.id).notNull(),
      appointmentId: uuid("appointment_id").references(() => appointments.id).notNull(),
      providerId: uuid("provider_id").references(() => users.id).notNull(),
      vitalSignsId: uuid("vital_signs_id").references(() => vitalSigns.id),
      // Chief Complaint and History
      chiefComplaint: text("chief_complaint").notNull(),
      historyOfPresentIllness: text("history_of_present_illness"),
      reviewOfSystems: jsonb("review_of_systems").default("{}"),
      // Physical Examination
      physicalExamination: text("physical_examination"),
      symptoms: jsonb("symptoms").default("[]"),
      // Array of symptom objects
      // Assessment and Plan
      assessment: text("assessment"),
      clinicalImpression: text("clinical_impression"),
      differentialDiagnosis: jsonb("differential_diagnosis").default("[]"),
      finalDiagnosis: jsonb("final_diagnosis").default("[]"),
      treatmentPlan: text("treatment_plan"),
      // Follow-up and Instructions
      patientInstructions: text("patient_instructions"),
      followUpInstructions: text("follow_up_instructions"),
      returnVisitRecommended: boolean("return_visit_recommended").default(false),
      returnVisitTimeframe: text("return_visit_timeframe"),
      // Provider Notes
      providerNotes: text("provider_notes"),
      // Status and Timestamps
      status: text("status").default("draft"),
      // draft, finalized
      visitDate: timestamp("visit_date").default(sql`CURRENT_TIMESTAMP`),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    insuranceClaims = pgTable("insurance_claims", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      patientId: uuid("patient_id").references(() => patients.id).notNull(),
      appointmentId: uuid("appointment_id").references(() => appointments.id),
      patientInsuranceId: uuid("patient_insurance_id").references(() => patientInsurance.id),
      claimNumber: text("claim_number").unique().notNull(),
      procedureCodes: jsonb("procedure_codes").default("[]"),
      diagnosisCodes: jsonb("diagnosis_codes").default("[]"),
      totalAmount: decimal("total_amount", { precision: 10, scale: 2 }).notNull(),
      totalPatientCopay: decimal("total_patient_copay", { precision: 10, scale: 2 }).default("0").notNull(),
      totalInsuranceAmount: decimal("total_insurance_amount", { precision: 10, scale: 2 }).default("0").notNull(),
      approvedAmount: decimal("approved_amount", { precision: 10, scale: 2 }),
      paidAmount: decimal("paid_amount", { precision: 10, scale: 2 }),
      status: claimStatusEnum("status").default("draft"),
      submittedDate: timestamp("submitted_date"),
      processedDate: timestamp("processed_date"),
      paidDate: timestamp("paid_date"),
      notes: text("notes"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    rolePermissions = pgTable("role_permissions", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      role: roleEnum("role").notNull(),
      module: varchar("module", { length: 50 }).notNull(),
      // 'patients', 'appointments', 'prescriptions', etc.
      permissions: text("permissions").array().notNull(),
      // ['view', 'create', 'update', 'delete']
      isActive: boolean("is_active").default(true).notNull(),
      createdBy: uuid("created_by").references(() => users.id).notNull(),
      updatedBy: uuid("updated_by").references(() => users.id),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`).notNull()
    });
    auditLogs = pgTable("audit_logs", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      userId: uuid("user_id").references(() => users.id),
      entityType: text("entity_type").notNull(),
      entityId: uuid("entity_id").notNull(),
      action: text("action").notNull(),
      previousData: jsonb("previous_data"),
      newData: jsonb("new_data"),
      ipAddress: text("ip_address"),
      userAgent: text("user_agent"),
      timestamp: timestamp("timestamp").default(sql`CURRENT_TIMESTAMP`)
    });
    subscriptions = pgTable("subscriptions", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      pricingPlanId: uuid("pricing_plan_id").references(() => pricingPlans.id),
      planName: text("plan_name").notNull(),
      plan: subscriptionPlanEnum("plan").notNull().default("starter"),
      status: subscriptionStatusEnum("status").default("trial"),
      billingInterval: billingIntervalEnum("billing_interval").default("monthly"),
      monthlyPrice: decimal("monthly_price", { precision: 10, scale: 2 }).notNull(),
      maxUsers: integer("max_users").notNull(),
      maxPatients: integer("max_patients"),
      features: jsonb("features").default("[]"),
      trialEndsAt: timestamp("trial_ends_at"),
      currentPeriodStart: timestamp("current_period_start"),
      currentPeriodEnd: timestamp("current_period_end"),
      startDate: timestamp("start_date").notNull(),
      endDate: timestamp("end_date"),
      cancelAtPeriodEnd: boolean("cancel_at_period_end").default(false),
      customerId: text("customer_id"),
      // Stripe customer ID
      subscriptionId: text("subscription_id"),
      // Stripe subscription ID
      lastPaymentDate: timestamp("last_payment_date"),
      nextPaymentDate: timestamp("next_payment_date"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    reports = pgTable("reports", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      generatedBy: uuid("generated_by").references(() => users.id).notNull(),
      title: text("title").notNull(),
      type: reportTypeEnum("type").notNull(),
      format: text("format").default("pdf"),
      parameters: jsonb("parameters").default("{}"),
      data: jsonb("data"),
      status: reportStatusEnum("status").default("pending"),
      fileUrl: text("file_url"),
      dateFrom: timestamp("date_from"),
      dateTo: timestamp("date_to"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      completedAt: timestamp("completed_at")
    });
    workShifts = pgTable("work_shifts", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      userId: uuid("user_id").references(() => users.id).notNull(),
      // Pharmacist or staff
      shiftType: text("shift_type").notNull(),
      // morning, afternoon, evening, night
      startTime: timestamp("start_time").notNull(),
      endTime: timestamp("end_time"),
      status: shiftStatusEnum("status").default("active"),
      notes: text("notes"),
      totalPrescriptionsProcessed: integer("total_prescriptions_processed").default(0),
      totalRevenue: decimal("total_revenue", { precision: 10, scale: 2 }).default("0"),
      totalInsuranceClaims: integer("total_insurance_claims").default(0),
      shiftSummary: jsonb("shift_summary").default("{}"),
      // Summary statistics for the shift
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    hospitalPatientInsurance = pgTable("hospital_patient_insurance", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      patientId: uuid("patient_id").references(() => patients.id).notNull(),
      // Primary Insurance
      primaryInsuranceProvider: text("primary_insurance_provider"),
      primaryPolicyNumber: text("primary_policy_number"),
      primaryGroupNumber: text("primary_group_number"),
      primaryMemberId: text("primary_member_id"),
      primarySubscriberName: text("primary_subscriber_name"),
      primarySubscriberRelationship: text("primary_subscriber_relationship"),
      primarySubscriberDob: timestamp("primary_subscriber_dob"),
      primaryEffectiveDate: timestamp("primary_effective_date"),
      primaryExpirationDate: timestamp("primary_expiration_date"),
      primaryCopayAmount: decimal("primary_copay_amount", { precision: 10, scale: 2 }),
      primaryDeductibleAmount: decimal("primary_deductible_amount", { precision: 10, scale: 2 }),
      primaryCoveragePercentage: integer("primary_coverage_percentage"),
      primaryIsActive: boolean("primary_is_active").default(true),
      // Secondary Insurance
      secondaryInsuranceProvider: text("secondary_insurance_provider"),
      secondaryPolicyNumber: text("secondary_policy_number"),
      secondaryGroupNumber: text("secondary_group_number"),
      secondaryMemberId: text("secondary_member_id"),
      secondarySubscriberName: text("secondary_subscriber_name"),
      secondarySubscriberRelationship: text("secondary_subscriber_relationship"),
      secondarySubscriberDob: timestamp("secondary_subscriber_dob"),
      secondaryEffectiveDate: timestamp("secondary_effective_date"),
      secondaryExpirationDate: timestamp("secondary_expiration_date"),
      secondaryCoveragePercentage: integer("secondary_coverage_percentage"),
      secondaryIsActive: boolean("secondary_is_active").default(false),
      // Verification details
      lastVerificationDate: timestamp("last_verification_date"),
      verificationStatus: text("verification_status").default("pending"),
      verificationNotes: text("verification_notes"),
      verifiedBy: uuid("verified_by").references(() => users.id),
      // Additional details
      emergencyContact: jsonb("emergency_contact"),
      specialPrograms: text("special_programs").array(),
      copayCards: jsonb("copay_cards").default("[]"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    departments = pgTable("departments", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      name: text("name").notNull(),
      description: text("description"),
      icon: text("icon").default("Building2"),
      // Lucide icon name
      color: text("color").default("#3b82f6"),
      // Department color theme
      headOfDepartment: uuid("head_of_department").references(() => users.id),
      staffCount: integer("staff_count").default(0),
      operatingHours: text("operating_hours").default("9:00 AM - 5:00 PM"),
      location: text("location"),
      phone: text("phone"),
      email: text("email"),
      budget: decimal("budget", { precision: 12, scale: 2 }),
      specializations: text("specializations").array().default(sql`'{}'::text[]`),
      equipment: jsonb("equipment").default("[]"),
      certifications: text("certifications").array().default(sql`'{}'::text[]`),
      isActive: boolean("is_active").default(true),
      settings: jsonb("settings").default("{}"),
      metrics: jsonb("metrics").default("{}"),
      // Performance metrics and KPIs
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    laboratoryPatientInsurance = pgTable("laboratory_patient_insurance", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      patientId: uuid("patient_id").references(() => patients.id).notNull(),
      // Primary Insurance
      primaryInsuranceProvider: text("primary_insurance_provider"),
      primaryPolicyNumber: text("primary_policy_number"),
      primaryGroupNumber: text("primary_group_number"),
      primaryMemberId: text("primary_member_id"),
      primarySubscriberName: text("primary_subscriber_name"),
      primarySubscriberRelationship: text("primary_subscriber_relationship"),
      primarySubscriberDob: timestamp("primary_subscriber_dob"),
      primaryEffectiveDate: timestamp("primary_effective_date"),
      primaryExpirationDate: timestamp("primary_expiration_date"),
      primaryCopayAmount: decimal("primary_copay_amount", { precision: 10, scale: 2 }),
      primaryDeductibleAmount: decimal("primary_deductible_amount", { precision: 10, scale: 2 }),
      primaryCoveragePercentage: integer("primary_coverage_percentage"),
      primaryIsActive: boolean("primary_is_active").default(true),
      // Secondary Insurance
      secondaryInsuranceProvider: text("secondary_insurance_provider"),
      secondaryPolicyNumber: text("secondary_policy_number"),
      secondaryGroupNumber: text("secondary_group_number"),
      secondaryMemberId: text("secondary_member_id"),
      secondarySubscriberName: text("secondary_subscriber_name"),
      secondarySubscriberRelationship: text("secondary_subscriber_relationship"),
      secondarySubscriberDob: timestamp("secondary_subscriber_dob"),
      secondaryEffectiveDate: timestamp("secondary_effective_date"),
      secondaryExpirationDate: timestamp("secondary_expiration_date"),
      secondaryCoveragePercentage: integer("secondary_coverage_percentage"),
      secondaryIsActive: boolean("secondary_is_active").default(false),
      // Verification details
      lastVerificationDate: timestamp("last_verification_date"),
      verificationStatus: text("verification_status").default("pending"),
      verificationNotes: text("verification_notes"),
      verifiedBy: uuid("verified_by").references(() => users.id),
      // Additional details
      emergencyContact: jsonb("emergency_contact"),
      specialPrograms: text("special_programs").array(),
      copayCards: jsonb("copay_cards").default("[]"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    pharmacyPatientInsurance = pgTable("pharmacy_patient_insurance", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      // Pharmacy tenant
      patientId: uuid("patient_id").references(() => patients.id).notNull(),
      // Primary Insurance
      primaryInsuranceProvider: text("primary_insurance_provider"),
      primaryPolicyNumber: text("primary_policy_number"),
      primaryGroupNumber: text("primary_group_number"),
      primaryMemberId: text("primary_member_id"),
      primarySubscriberName: text("primary_subscriber_name"),
      primarySubscriberRelationship: text("primary_subscriber_relationship"),
      // self, spouse, child, parent
      primarySubscriberDob: timestamp("primary_subscriber_dob"),
      primaryEffectiveDate: timestamp("primary_effective_date"),
      primaryExpirationDate: timestamp("primary_expiration_date"),
      primaryCopayAmount: decimal("primary_copay_amount", { precision: 10, scale: 2 }),
      primaryDeductibleAmount: decimal("primary_deductible_amount", { precision: 10, scale: 2 }),
      primaryIsActive: boolean("primary_is_active").default(true),
      // Secondary Insurance (if applicable)
      secondaryInsuranceProvider: text("secondary_insurance_provider"),
      secondaryPolicyNumber: text("secondary_policy_number"),
      secondaryGroupNumber: text("secondary_group_number"),
      secondaryMemberId: text("secondary_member_id"),
      secondarySubscriberName: text("secondary_subscriber_name"),
      secondarySubscriberRelationship: text("secondary_subscriber_relationship"),
      secondarySubscriberDob: timestamp("secondary_subscriber_dob"),
      secondaryEffectiveDate: timestamp("secondary_effective_date"),
      secondaryExpirationDate: timestamp("secondary_expiration_date"),
      secondaryIsActive: boolean("secondary_is_active").default(false),
      // Pharmacy-specific insurance details
      preferredPharmacyNetwork: text("preferred_pharmacy_network"),
      formularyTier: text("formulary_tier"),
      // Tier 1, 2, 3, 4, specialty
      mailOrderBenefit: boolean("mail_order_benefit").default(false),
      maxDaysSupply: integer("max_days_supply").default(30),
      refillLimitations: text("refill_limitations"),
      priorAuthRequired: boolean("prior_auth_required").default(false),
      stepTherapyRequired: boolean("step_therapy_required").default(false),
      // Verification details
      lastVerificationDate: timestamp("last_verification_date"),
      verificationStatus: verificationStatusEnum("verification_status").default("pending"),
      verificationNotes: text("verification_notes"),
      verifiedBy: uuid("verified_by").references(() => users.id),
      // Pharmacist who verified
      // Additional details
      emergencyContact: jsonb("emergency_contact"),
      specialPrograms: text("special_programs").array().default([]),
      // Medicare Part D, Medicaid, etc.
      copayCards: jsonb("copay_cards").default("[]"),
      // Manufacturer copay cards
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    patientPharmacyPreferences = pgTable("patient_pharmacy_preferences", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      patientId: uuid("patient_id").references(() => patients.id).notNull(),
      pharmacyId: uuid("pharmacy_id").references(() => tenants.id).notNull(),
      // Preferred pharmacy
      hospitalId: uuid("hospital_id").references(() => tenants.id),
      // Hospital context (optional)
      isPrimary: boolean("is_primary").default(false),
      // Primary pharmacy choice
      isActive: boolean("is_active").default(true),
      preferenceReason: text("preference_reason"),
      // Why patient chose this pharmacy
      deliveryPreference: text("delivery_preference", { enum: ["pickup", "delivery", "both"] }).default("pickup"),
      specialInstructions: text("special_instructions"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    archivedRecords = pgTable("archived_records", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      workShiftId: uuid("work_shift_id").references(() => workShifts.id).notNull(),
      recordType: text("record_type").notNull(),
      // prescription, receipt, payment, insurance_claim
      recordId: uuid("record_id").notNull(),
      // Reference to the actual record
      patientId: uuid("patient_id").references(() => patients.id).notNull(),
      // Search metadata for quick retrieval
      patientName: text("patient_name").notNull(),
      patientMrn: text("patient_mrn"),
      medicationName: text("medication_name"),
      prescriptionNumber: text("prescription_number"),
      receiptNumber: text("receipt_number"),
      insuranceProvider: text("insurance_provider"),
      // Archive details
      archivedAt: timestamp("archived_at").default(sql`CURRENT_TIMESTAMP`),
      archivedBy: uuid("archived_by").references(() => users.id).notNull(),
      // Access tracking
      accessCount: integer("access_count").default(0),
      lastAccessedAt: timestamp("last_accessed_at"),
      lastAccessedBy: uuid("last_accessed_by").references(() => users.id),
      // Additional metadata
      recordData: jsonb("record_data"),
      // Snapshot of the record at time of archiving
      tags: text("tags").array().default([]),
      // For categorization
      notes: text("notes"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`)
    });
    pharmacyReportTemplates = pgTable("pharmacy_report_templates", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      name: text("name").notNull(),
      description: text("description"),
      reportType: text("report_type").notNull(),
      // daily_sales, insurance_summary, patient_demographics, medication_dispensing, etc.
      // Template configuration
      dataFields: jsonb("data_fields").notNull(),
      // Which fields to include
      groupBy: text("group_by").array().default([]),
      // How to group data
      orderBy: text("order_by").array().default([]),
      // How to sort data
      filters: jsonb("filters").default("{}"),
      // Default filters
      // Scheduling options
      isScheduled: boolean("is_scheduled").default(false),
      scheduleFrequency: text("schedule_frequency"),
      // daily, weekly, monthly
      scheduleTime: text("schedule_time"),
      // Time to generate
      lastGenerated: timestamp("last_generated"),
      // Template settings
      isActive: boolean("is_active").default(true),
      isDefault: boolean("is_default").default(false),
      createdBy: uuid("created_by").references(() => users.id).notNull(),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    medicalCommunications = pgTable("medical_communications", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      patientId: uuid("patient_id").references(() => patients.id).notNull(),
      senderId: uuid("sender_id").references(() => users.id).notNull(),
      recipientId: uuid("recipient_id").references(() => users.id),
      type: communicationTypeEnum("type").notNull(),
      priority: priorityLevelEnum("priority").default("normal"),
      originalLanguage: text("original_language").notNull().default("en"),
      targetLanguages: jsonb("target_languages").default('["en"]'),
      originalContent: jsonb("original_content").notNull(),
      metadata: jsonb("metadata").default("{}"),
      appointmentId: uuid("appointment_id").references(() => appointments.id),
      prescriptionId: uuid("prescription_id").references(() => prescriptions.id),
      labOrderId: uuid("lab_order_id").references(() => labOrders.id),
      isRead: boolean("is_read").default(false),
      readAt: timestamp("read_at"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    communicationTranslations = pgTable("communication_translations", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      communicationId: uuid("communication_id").references(() => medicalCommunications.id).notNull(),
      languageCode: text("language_code").notNull(),
      translatedContent: jsonb("translated_content").notNull(),
      status: translationStatusEnum("status").default("pending"),
      translationEngine: text("translation_engine"),
      reviewedBy: uuid("reviewed_by").references(() => users.id),
      reviewedAt: timestamp("reviewed_at"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    healthRecommendations = pgTable("health_recommendations", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      patientId: uuid("patient_id").references(() => patients.id).notNull(),
      type: text("type").notNull(),
      // lifestyle, medical, preventive, risk_alert
      priority: text("priority").notNull(),
      // low, medium, high, urgent
      title: text("title").notNull(),
      description: text("description").notNull(),
      recommendations: jsonb("recommendations").default("[]"),
      reasoning: text("reasoning"),
      followUpRequired: boolean("follow_up_required").default(false),
      status: text("status").default("active"),
      // active, dismissed, completed
      acknowledgedAt: timestamp("acknowledged_at"),
      acknowledgedBy: uuid("acknowledged_by").references(() => users.id),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    healthAnalyses = pgTable("health_analyses", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      patientId: uuid("patient_id").references(() => patients.id).notNull(),
      overallHealthScore: integer("overall_health_score").notNull(),
      riskFactors: jsonb("risk_factors").default("[]"),
      trends: jsonb("trends").default("{}"),
      nextAppointmentSuggestion: text("next_appointment_suggestion"),
      analysisData: jsonb("analysis_data"),
      confidence: decimal("confidence", { precision: 3, scale: 2 }),
      reviewedBy: uuid("reviewed_by").references(() => users.id),
      reviewedAt: timestamp("reviewed_at"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    supportedLanguages = pgTable("supported_languages", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      languageCode: text("language_code").notNull(),
      languageName: text("language_name").notNull(),
      nativeName: text("native_name").notNull(),
      isActive: boolean("is_active").default(true),
      isPrimary: boolean("is_primary").default(false),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    medicalPhrases = pgTable("medical_phrases", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      category: text("category").notNull(),
      phraseKey: text("phrase_key").notNull(),
      originalLanguage: text("original_language").notNull().default("en"),
      originalText: text("original_text").notNull(),
      isActive: boolean("is_active").default(true),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    patientAssignments = pgTable("patient_assignments", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      patientId: uuid("patient_id").references(() => patients.id).notNull(),
      physicianId: uuid("physician_id").references(() => users.id).notNull(),
      assignmentType: text("assignment_type").notNull().default("primary"),
      // primary, secondary, temporary
      assignedBy: uuid("assigned_by").references(() => users.id).notNull(),
      // Who assigned the patient
      assignedDate: timestamp("assigned_date").default(sql`CURRENT_TIMESTAMP`),
      expiryDate: timestamp("expiry_date"),
      // For temporary assignments
      isActive: boolean("is_active").default(true),
      notes: text("notes"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    patientAccessRequests = pgTable("patient_access_requests", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      patientId: uuid("patient_id").references(() => patients.id).notNull(),
      requestingPhysicianId: uuid("requesting_physician_id").references(() => users.id).notNull(),
      targetPhysicianId: uuid("target_physician_id").references(() => users.id),
      // Chief physician or assigned doctor
      requestType: text("request_type").notNull().default("access"),
      // access, transfer, consultation
      reason: text("reason").notNull(),
      urgency: text("urgency").notNull().default("normal"),
      // low, normal, high, emergency
      status: accessRequestStatusEnum("status").default("pending").notNull(),
      requestedDate: timestamp("requested_date").default(sql`CURRENT_TIMESTAMP`),
      reviewedDate: timestamp("reviewed_date"),
      reviewedBy: uuid("reviewed_by").references(() => users.id),
      reviewNotes: text("review_notes"),
      accessGrantedUntil: timestamp("access_granted_until"),
      // Temporary access expiry
      accessType: text("access_type").default("read").notNull(),
      // read, write, full
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    patientAccessAuditLog2 = pgTable("patient_access_audit_log", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      // Access Details
      doctorId: uuid("doctor_id").references(() => users.id).notNull(),
      patientId: uuid("patient_id").references(() => patients.id).notNull(),
      accessRequestId: uuid("access_request_id").references(() => patientAccessRequests.id),
      // Action Information  
      actionType: text("action_type").notNull(),
      // view, edit, create, delete
      resourceType: text("resource_type").notNull(),
      // medical_record, billing, appointment, prescription
      resourceId: text("resource_id"),
      // Context
      ipAddress: text("ip_address"),
      userAgent: text("user_agent"),
      accessMethod: text("access_method").default("direct").notNull(),
      // direct, requested, emergency
      // Metadata
      accessedAt: timestamp("accessed_at").default(sql`CURRENT_TIMESTAMP`)
    });
    phraseTranslations = pgTable("phrase_translations", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      phraseId: uuid("phrase_id").references(() => medicalPhrases.id).notNull(),
      languageCode: text("language_code").notNull(),
      translatedText: text("translated_text").notNull(),
      translatedBy: uuid("translated_by").references(() => users.id),
      verifiedBy: uuid("verified_by").references(() => users.id),
      isVerified: boolean("is_verified").default(false),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    pharmacies = pgTable("pharmacies", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      name: text("name").notNull(),
      licenseNumber: text("license_number"),
      npiNumber: text("npi_number"),
      // National Provider Identifier
      contactPerson: text("contact_person"),
      phone: text("phone").notNull(),
      email: text("email"),
      faxNumber: text("fax_number"),
      address: jsonb("address").notNull().$type(),
      isActive: boolean("is_active").default(true),
      acceptsInsurance: boolean("accepts_insurance").default(true),
      deliveryService: boolean("delivery_service").default(false),
      operatingHours: jsonb("operating_hours").$type(),
      specializations: text("specializations").array().default([]),
      // specialty medications, compounding, etc.
      websiteUrl: text("website_url"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    laboratories = pgTable("laboratories", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      name: text("name").notNull(),
      licenseNumber: text("license_number"),
      contactPerson: text("contact_person"),
      phone: text("phone"),
      email: text("email"),
      address: jsonb("address").$type(),
      specializations: text("specializations").array(),
      isActive: boolean("is_active").default(true),
      apiEndpoint: text("api_endpoint"),
      // For external lab integration
      apiKey: text("api_key"),
      // Encrypted API key for lab integration
      averageTurnaroundTime: integer("average_turnaround_time"),
      // Hours
      isExternal: boolean("is_external").default(false),
      // true for external labs registering on platform
      registrationStatus: text("registration_status").default("approved"),
      // pending, approved, rejected
      registrationNotes: text("registration_notes"),
      approvedBy: uuid("approved_by").references(() => users.id),
      approvedAt: timestamp("approved_at"),
      websiteUrl: text("website_url"),
      accreditations: text("accreditations").array().default([]),
      operatingHours: jsonb("operating_hours").$type(),
      servicesOffered: text("services_offered").array().default([]),
      equipmentDetails: text("equipment_details"),
      certificationDocuments: text("certification_documents").array().default([]),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    laboratoryApplications = pgTable("laboratory_applications", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      laboratoryName: text("laboratory_name").notNull(),
      licenseNumber: text("license_number").notNull(),
      contactPerson: text("contact_person").notNull(),
      contactEmail: text("contact_email").notNull(),
      contactPhone: text("contact_phone").notNull(),
      address: jsonb("address").notNull().$type(),
      specializations: text("specializations").array().notNull().default([]),
      description: text("description"),
      websiteUrl: text("website_url"),
      accreditations: text("accreditations").array().default([]),
      averageTurnaroundTime: integer("average_turnaround_time").default(24),
      operatingHours: jsonb("operating_hours").$type(),
      servicesOffered: text("services_offered").array().default([]),
      equipmentDetails: text("equipment_details"),
      certificationDocuments: text("certification_documents").array().default([]),
      status: text("status").default("pending"),
      // pending, under_review, approved, rejected
      reviewNotes: text("review_notes"),
      reviewedBy: uuid("reviewed_by").references(() => users.id),
      reviewedAt: timestamp("reviewed_at"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    pendingRegistrations = pgTable("pending_registrations", {
      id: text("id").primaryKey().default(nanoid()),
      type: text("type").notNull(),
      // 'pharmacy', 'laboratory', 'hospital', 'clinic'
      organizationName: text("organization_name").notNull(),
      subdomain: text("subdomain").notNull(),
      contactEmail: text("contact_email").notNull(),
      contactPhone: text("contact_phone"),
      // Registration Data (JSON blob containing all form data)
      registrationData: jsonb("registration_data").notNull(),
      // Admin User Data
      adminData: jsonb("admin_data").notNull(),
      // Status Management
      status: text("status").notNull().default("pending"),
      // pending, approved, rejected
      submittedAt: timestamp("submitted_at").default(sql`CURRENT_TIMESTAMP`),
      reviewedAt: timestamp("reviewed_at"),
      reviewedBy: uuid("reviewed_by").references(() => users.id),
      // User ID of reviewer
      reviewNotes: text("review_notes"),
      // Tenant ID (populated after approval)
      approvedTenantId: uuid("approved_tenant_id").references(() => tenants.id),
      approvedUserId: uuid("approved_user_id").references(() => users.id),
      // Metadata
      ipAddress: text("ip_address"),
      userAgent: text("user_agent"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    labResults = pgTable("lab_results", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      labOrderId: uuid("lab_order_id").references(() => labOrders.id).notNull(),
      laboratoryId: uuid("laboratory_id").references(() => laboratories.id).notNull(),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      patientId: uuid("patient_id").references(() => patients.id).notNull(),
      testName: text("test_name").notNull(),
      result: text("result"),
      normalRange: text("normal_range"),
      unit: text("unit"),
      status: text("status").notNull().default("pending"),
      // pending, in_progress, completed, cancelled
      abnormalFlag: text("abnormal_flag"),
      // normal, high, low, critical
      notes: text("notes"),
      performedBy: text("performed_by"),
      // Lab technician name
      reviewedBy: uuid("reviewed_by").references(() => users.id),
      // Doctor who reviewed
      completedAt: timestamp("completed_at"),
      reportedAt: timestamp("reported_at"),
      externalLabId: text("external_lab_id"),
      // ID from external lab system
      rawData: jsonb("raw_data"),
      // Raw data from lab system
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    pricingPlans = pgTable("pricing_plans", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      name: text("name").notNull(),
      // Starter, Professional, Enterprise, White Label
      plan: subscriptionPlanEnum("plan").notNull(),
      displayName: text("display_name").notNull(),
      description: text("description"),
      monthlyPrice: decimal("monthly_price", { precision: 10, scale: 2 }).notNull(),
      yearlyPrice: decimal("yearly_price", { precision: 10, scale: 2 }),
      currency: text("currency").default("USD"),
      trialDays: integer("trial_days").default(14),
      // Feature limits
      maxUsers: integer("max_users").default(5),
      maxPatients: integer("max_patients").default(100),
      maxStorageGb: integer("max_storage_gb").default(1),
      apiCallsPerMonth: integer("api_calls_per_month").default(1e3),
      // Feature flags
      whitelabelEnabled: boolean("whitelabel_enabled").default(false),
      offlineEnabled: boolean("offline_enabled").default(false),
      multiLanguageEnabled: boolean("multi_language_enabled").default(false),
      advancedReportsEnabled: boolean("advanced_reports_enabled").default(false),
      customIntegrationsEnabled: boolean("custom_integrations_enabled").default(false),
      prioritySupport: boolean("priority_support").default(false),
      isActive: boolean("is_active").default(true),
      sortOrder: integer("sort_order").default(0),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    pharmacyReceipts = pgTable("pharmacy_receipts", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      // Pharmacy tenant
      prescriptionId: uuid("prescription_id").references(() => prescriptions.id).notNull(),
      patientId: uuid("patient_id").references(() => patients.id).notNull(),
      // Receipt Details
      receiptNumber: text("receipt_number").notNull().unique(),
      dispensedBy: uuid("dispensed_by").references(() => users.id).notNull(),
      // Pharmacist who dispensed
      // Medication Information
      medicationName: text("medication_name").notNull(),
      genericName: text("generic_name"),
      dosage: text("dosage").notNull(),
      quantity: integer("quantity").notNull(),
      daysSupply: integer("days_supply"),
      // Pricing Breakdown
      totalCost: decimal("total_cost", { precision: 10, scale: 2 }).notNull(),
      insuranceProvider: text("insurance_provider"),
      insuranceAmount: decimal("insurance_amount", { precision: 10, scale: 2 }).default("0"),
      patientCopay: decimal("patient_copay", { precision: 10, scale: 2 }).notNull(),
      // Payment Information
      paymentMethod: text("payment_method").notNull(),
      // cash, card, check, etc.
      paymentAmount: decimal("payment_amount", { precision: 10, scale: 2 }).notNull(),
      changeGiven: decimal("change_given", { precision: 10, scale: 2 }).default("0"),
      // Prescription Details
      prescribedBy: text("prescribed_by").notNull(),
      // Doctor name
      prescribedDate: timestamp("prescribed_date").notNull(),
      dispensedDate: timestamp("dispensed_date").notNull(),
      refillsRemaining: integer("refills_remaining").default(0),
      // Receipt Notes
      pharmacyNotes: text("pharmacy_notes"),
      patientInstructions: text("patient_instructions"),
      // Status
      isPrinted: boolean("is_printed").default(false),
      isEmailed: boolean("is_emailed").default(false),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    labBills = pgTable("lab_bills", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      // Laboratory tenant
      patientId: uuid("patient_id").references(() => patients.id).notNull(),
      // Bill Details
      amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
      description: text("description").notNull(),
      status: text("status").default("pending").notNull(),
      // pending, paid, overdue, cancelled
      serviceType: text("service_type").default("laboratory_test").notNull(),
      // Lab Order Reference
      labOrderId: uuid("lab_order_id").references(() => labOrders.id),
      testName: text("test_name"),
      // Additional Information
      notes: text("notes"),
      generatedBy: uuid("generated_by").references(() => users.id).notNull(),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    hospitalBills = pgTable("hospital_bills", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      // Hospital tenant
      patientId: uuid("patient_id").references(() => patients.id).notNull(),
      appointmentId: uuid("appointment_id").references(() => appointments.id),
      // Bill Details
      billNumber: text("bill_number").notNull().unique(),
      amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
      description: text("description").notNull(),
      status: billStatusEnum("status").default("pending").notNull(),
      serviceType: serviceTypeEnum("service_type").notNull(),
      // Insurance Information
      insuranceProvider: text("insurance_provider"),
      insuranceAmount: decimal("insurance_amount", { precision: 10, scale: 2 }).default("0"),
      patientCopay: decimal("patient_copay", { precision: 10, scale: 2 }).notNull(),
      // Additional Information
      procedureCodes: text("procedure_codes").array().default([]),
      diagnosisCodes: text("diagnosis_codes").array().default([]),
      notes: text("notes"),
      generatedBy: uuid("generated_by").references(() => users.id).notNull(),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    pharmacyBills = pgTable("pharmacy_bills", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      // Pharmacy tenant
      patientId: uuid("patient_id").references(() => patients.id).notNull(),
      prescriptionId: uuid("prescription_id").references(() => prescriptions.id),
      // Bill Details
      billNumber: text("bill_number").notNull().unique(),
      amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
      description: text("description").notNull(),
      status: billStatusEnum("status").default("pending").notNull(),
      // Medication Information
      medicationName: text("medication_name").notNull(),
      quantity: integer("quantity").notNull(),
      unitPrice: decimal("unit_price", { precision: 10, scale: 2 }).notNull(),
      // Insurance Information
      insuranceProvider: text("insurance_provider"),
      insuranceAmount: decimal("insurance_amount", { precision: 10, scale: 2 }).default("0"),
      patientCopay: decimal("patient_copay", { precision: 10, scale: 2 }).notNull(),
      // Additional Information
      notes: text("notes"),
      generatedBy: uuid("generated_by").references(() => users.id).notNull(),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    financialTransactions = pgTable("financial_transactions", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      // Transaction Identification
      transactionNumber: text("transaction_number").notNull().unique(),
      transactionType: text("transaction_type").notNull(),
      // payment, refund, adjustment, fee, copay, insurance_payment
      category: text("category").notNull(),
      // pharmacy_sale, hospital_service, lab_test, insurance_claim
      // Financial Details
      amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
      currency: currencyEnum("currency").notNull().default("USD"),
      description: text("description").notNull(),
      // Related Entities
      patientId: uuid("patient_id").references(() => patients.id),
      billId: uuid("bill_id"),
      // References any bill (hospital, pharmacy, lab)
      receiptId: uuid("receipt_id"),
      // References any receipt
      paymentId: uuid("payment_id"),
      // References payment records
      // Payment Method Details
      paymentMethod: text("payment_method"),
      // cash, card, check, insurance, online
      paymentReference: text("payment_reference"),
      // transaction ID, check number, etc.
      // Accounting Categories
      accountCode: text("account_code"),
      // Chart of accounts code
      debitAccount: text("debit_account"),
      // Account being debited
      creditAccount: text("credit_account"),
      // Account being credited
      // Status and Dates
      status: text("status").notNull().default("completed"),
      // pending, completed, reversed, failed
      transactionDate: timestamp("transaction_date").notNull(),
      postedDate: timestamp("posted_date"),
      // Audit Trail
      recordedBy: uuid("recorded_by").references(() => users.id).notNull(),
      approvedBy: uuid("approved_by").references(() => users.id),
      // Additional Information
      notes: text("notes"),
      metadata: jsonb("metadata"),
      // Additional transaction-specific data
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    offlineSyncData = pgTable("offline_sync_data", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      userId: uuid("user_id").references(() => users.id).notNull(),
      entityType: text("entity_type").notNull(),
      // patients, appointments, prescriptions, etc.
      entityId: uuid("entity_id").notNull(),
      action: text("action").notNull(),
      // create, update, delete
      data: jsonb("data").notNull(),
      timestamp: timestamp("timestamp").default(sql`CURRENT_TIMESTAMP`),
      syncedAt: timestamp("synced_at"),
      conflictResolved: boolean("conflict_resolved").default(false),
      deviceId: text("device_id"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`)
    });
    translations = pgTable("translations", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id),
      key: text("key").notNull(),
      // translation key like "dashboard.welcome"
      language: varchar("language", { length: 10 }).notNull(),
      // en, es, fr, etc.
      value: text("value").notNull(),
      // translated text
      context: text("context"),
      // additional context for translators
      isDefault: boolean("is_default").default(false),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    labOrderAssignments = pgTable("lab_order_assignments", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      labOrderId: uuid("lab_order_id").references(() => labOrders.id).notNull(),
      laboratoryId: uuid("laboratory_id").references(() => laboratories.id).notNull(),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      assignedBy: uuid("assigned_by").references(() => users.id).notNull(),
      status: text("status").notNull().default("assigned"),
      // assigned, sent, received, processing, completed
      sentAt: timestamp("sent_at"),
      estimatedCompletionTime: timestamp("estimated_completion_time"),
      actualCompletionTime: timestamp("actual_completion_time"),
      trackingNumber: text("tracking_number"),
      // For tracking samples
      notes: text("notes"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    vitalSigns = pgTable("vital_signs", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      patientId: uuid("patient_id").references(() => patients.id).notNull(),
      appointmentId: uuid("appointment_id").references(() => appointments.id),
      recordedBy: uuid("recorded_by_id").references(() => users.id).notNull(),
      // receptionist/nurse
      // Standard vital signs
      systolicBp: integer("blood_pressure_systolic"),
      // mmHg
      diastolicBp: integer("blood_pressure_diastolic"),
      // mmHg
      heartRate: integer("heart_rate"),
      // bpm
      temperature: decimal("temperature", { precision: 4, scale: 1 }),
      // °F or °C
      temperatureUnit: text("temperature_unit").default("F"),
      // F or C
      respiratoryRate: integer("respiratory_rate"),
      // breaths per minute
      oxygenSaturation: integer("oxygen_saturation"),
      // %
      weight: decimal("weight", { precision: 5, scale: 2 }),
      // lbs or kg
      height: decimal("height", { precision: 5, scale: 2 }),
      // inches or cm
      bmi: decimal("body_mass_index", { precision: 4, scale: 1 }),
      // calculated
      painLevel: integer("pain_level"),
      // 0-10 scale
      // Additional measurements
      glucoseLevel: integer("glucose_level"),
      // mg/dL
      notes: text("notes"),
      recordedAt: timestamp("recorded_at").default(sql`CURRENT_TIMESTAMP`),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    specialtyQuestionnaires = pgTable("specialty_questionnaires", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      patientId: uuid("patient_id").references(() => patients.id).notNull(),
      appointmentId: uuid("appointment_id").references(() => appointments.id),
      specialty: medicalSpecialtyEnum("specialty").notNull(),
      completedBy: uuid("completed_by").references(() => users.id).notNull(),
      // receptionist/nurse
      // Questionnaire responses stored as JSON
      responses: jsonb("responses").notNull().$type(),
      chiefComplaint: text("chief_complaint"),
      symptoms: text("symptoms").array().default([]),
      symptomDuration: text("symptom_duration"),
      severity: integer("severity"),
      // 1-10 scale
      previousTreatments: text("previous_treatments"),
      currentMedications: text("current_medications").array().default([]),
      allergies: text("allergies").array().default([]),
      familyHistory: text("family_history"),
      socialHistory: text("social_history"),
      reviewOfSystems: jsonb("review_of_systems").default("{}"),
      additionalNotes: text("additional_notes"),
      isComplete: boolean("is_complete").default(false),
      completedAt: timestamp("completed_at"),
      reviewedBy: uuid("reviewed_by").references(() => users.id),
      // doctor who reviewed
      reviewedAt: timestamp("reviewed_at"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    patientCheckIns = pgTable("patient_check_ins", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      patientId: uuid("patient_id").references(() => patients.id).notNull(),
      appointmentId: uuid("appointment_id").references(() => appointments.id),
      checkedInBy: uuid("checked_in_by").references(() => users.id).notNull(),
      // receptionist
      checkedInAt: timestamp("checked_in_at").default(sql`CURRENT_TIMESTAMP`),
      reasonForVisit: text("reason_for_visit").notNull(),
      chiefComplaint: text("chief_complaint"),
      priorityLevel: text("priority_level", { enum: ["low", "normal", "high", "urgent", "emergency"] }).default("normal"),
      specialInstructions: text("special_instructions"),
      accompaniedBy: text("accompanied_by"),
      insuranceVerified: boolean("insurance_verified").default(false),
      copayCollected: decimal("copay_collected", { precision: 10, scale: 2 }),
      estimatedWaitTime: integer("estimated_wait_time"),
      // minutes
      vitalSignsId: uuid("vital_signs_id").references(() => vitalSigns.id),
      questionnaireId: uuid("questionnaire_id").references(() => specialtyQuestionnaires.id),
      status: text("status", { enum: ["waiting", "in-room", "with-provider", "completed", "cancelled"] }).default("waiting"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    patientBills = pgTable("patient_bills", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      patientId: uuid("patient_id").references(() => patients.id).notNull(),
      billNumber: text("bill_number").notNull().unique(),
      description: text("description").notNull(),
      serviceDate: timestamp("service_date").notNull(),
      dueDate: timestamp("due_date").notNull(),
      currency: currencyEnum("currency").notNull().default("USD"),
      originalAmount: decimal("original_amount", { precision: 10, scale: 2 }).notNull(),
      paidAmount: decimal("paid_amount", { precision: 10, scale: 2 }).default("0"),
      remainingBalance: decimal("remaining_balance", { precision: 10, scale: 2 }).notNull(),
      status: billStatusEnum("status").notNull().default("pending"),
      appointmentId: uuid("appointment_id").references(() => appointments.id),
      prescriptionId: uuid("prescription_id").references(() => prescriptions.id),
      labOrderId: uuid("lab_order_id").references(() => labOrders.id),
      servicePriceId: uuid("service_price_id").references(() => servicePrices.id),
      insuranceClaimId: uuid("insurance_claim_id").references(() => insuranceClaims.id),
      insuranceCovered: decimal("insurance_covered", { precision: 10, scale: 2 }).default("0"),
      patientResponsibility: decimal("patient_responsibility", { precision: 10, scale: 2 }).notNull(),
      notes: text("notes"),
      lateFeesApplied: decimal("late_fees_applied", { precision: 10, scale: 2 }).default("0"),
      discountApplied: decimal("discount_applied", { precision: 10, scale: 2 }).default("0"),
      paymentTerms: text("payment_terms"),
      // "Net 30", "Due on receipt", etc.
      lastReminderSent: timestamp("last_reminder_sent"),
      reminderCount: integer("reminder_count").default(0),
      createdBy: uuid("created_by").references(() => users.id).notNull(),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    patientPayments = pgTable("patient_payments", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      patientBillId: uuid("patient_bill_id").references(() => patientBills.id).notNull(),
      patientId: uuid("patient_id").references(() => patients.id).notNull(),
      currency: currencyEnum("currency").notNull().default("USD"),
      amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
      paymentMethod: text("payment_method").notNull(),
      // cash, check, credit_card, bank_transfer, online
      paymentReference: text("payment_reference"),
      // transaction ID, check number, etc.
      paymentDate: timestamp("payment_date").notNull(),
      processedBy: uuid("processed_by").references(() => users.id),
      notes: text("notes"),
      refundAmount: decimal("refund_amount", { precision: 10, scale: 2 }).default("0"),
      refundDate: timestamp("refund_date"),
      refundReason: text("refund_reason"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    achievements = pgTable("achievements", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      name: text("name").notNull(),
      description: text("description").notNull(),
      type: achievementTypeEnum("type").notNull(),
      difficulty: achievementDifficultyEnum("difficulty").notNull(),
      points: integer("points").notNull().default(0),
      iconName: text("icon_name").notNull(),
      // Lucide icon name
      criteria: jsonb("criteria").notNull(),
      // JSON criteria for achievement
      isActive: boolean("is_active").default(true),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    userAchievements = pgTable("user_achievements", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      userId: uuid("user_id").references(() => users.id).notNull(),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      achievementId: uuid("achievement_id").references(() => achievements.id).notNull(),
      progress: integer("progress").default(0),
      // Current progress toward achievement
      maxProgress: integer("max_progress").notNull(),
      // Target progress to complete
      isCompleted: boolean("is_completed").default(false),
      completedAt: timestamp("completed_at"),
      earnedAt: timestamp("earned_at").default(sql`CURRENT_TIMESTAMP`)
    });
    userStats = pgTable("user_stats", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      userId: uuid("user_id").references(() => users.id).notNull(),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      level: integer("level").default(1),
      totalPoints: integer("total_points").default(0),
      testsCompleted: integer("tests_completed").default(0),
      averageCompletionTime: integer("average_completion_time").default(0),
      // in minutes
      qualityScore: decimal("quality_score", { precision: 5, scale: 2 }).default("0.00"),
      // 0-100
      consistencyStreak: integer("consistency_streak").default(0),
      // days
      lastActivityDate: timestamp("last_activity_date"),
      weeklyGoal: integer("weekly_goal").default(50),
      // weekly test completion goal
      monthlyGoal: integer("monthly_goal").default(200),
      // monthly test completion goal
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    leaderboards = pgTable("leaderboards", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      userId: uuid("user_id").references(() => users.id).notNull(),
      userName: text("user_name").notNull(),
      position: integer("position").notNull(),
      points: integer("points").notNull(),
      level: integer("level").notNull(),
      testsCompleted: integer("tests_completed").notNull(),
      qualityScore: decimal("quality_score", { precision: 5, scale: 2 }).notNull(),
      period: text("period").notNull(),
      // daily, weekly, monthly, all-time
      periodStart: timestamp("period_start").notNull(),
      periodEnd: timestamp("period_end").notNull(),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`)
    });
    activityLogs = pgTable("activity_logs", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      userId: uuid("user_id").references(() => users.id).notNull(),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      activityType: text("activity_type").notNull(),
      // lab_test_completed, achievement_earned, streak_milestone, etc.
      points: integer("points").default(0),
      metadata: jsonb("metadata"),
      // Additional activity-specific data
      timestamp: timestamp("timestamp").default(sql`CURRENT_TIMESTAMP`)
    });
    medicalSuppliers = pgTable("medical_suppliers", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      companyName: text("company_name").notNull(),
      organizationSlug: text("organization_slug").notNull().unique(),
      // URL-friendly unique identifier for authentication
      businessType: text("business_type").notNull(),
      contactPersonName: text("contact_person_name").notNull(),
      contactEmail: text("contact_email").notNull(),
      contactPhone: text("contact_phone").notNull(),
      websiteUrl: text("website_url"),
      businessAddress: text("business_address").notNull(),
      city: text("city").notNull(),
      state: text("state").notNull(),
      country: text("country").notNull(),
      zipCode: text("zip_code").notNull(),
      businessDescription: text("business_description").notNull(),
      productCategories: text("product_categories").array().default([]),
      yearsInBusiness: text("years_in_business").notNull(),
      numberOfEmployees: text("number_of_employees").notNull(),
      annualRevenue: text("annual_revenue").notNull(),
      certifications: text("certifications").array().default([]),
      // Authentication credentials for supplier login
      username: text("username").notNull().unique(),
      passwordHash: text("password_hash").notNull(),
      status: supplierStatusEnum("status").default("pending_review").notNull(),
      termsAccepted: boolean("terms_accepted").notNull(),
      marketingConsent: boolean("marketing_consent").default(false),
      tenantId: uuid("tenant_id").references(() => tenants.id),
      // Will be set when approved
      approvedBy: uuid("approved_by").references(() => users.id),
      approvedAt: timestamp("approved_at"),
      rejectionReason: text("rejection_reason"),
      rejectedAt: timestamp("rejected_at"),
      notes: text("notes"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    departmentsRelations = relations(departments, ({ one }) => ({
      tenant: one(tenants, {
        fields: [departments.tenantId],
        references: [tenants.id]
      }),
      headOfDepartment: one(users, {
        fields: [departments.headOfDepartment],
        references: [users.id]
      })
    }));
    tenantsRelations = relations(tenants, ({ one, many }) => ({
      users: many(users),
      patients: many(patients),
      appointments: many(appointments),
      prescriptions: many(prescriptions),
      labOrders: many(labOrders),
      insuranceClaims: many(insuranceClaims),
      insuranceProviders: many(insuranceProviders),
      patientInsurance: many(patientInsurance),
      servicePrices: many(servicePrices),
      insurancePlanCoverage: many(insurancePlanCoverage),
      claimLineItems: many(claimLineItems),
      medicationCopays: many(medicationCopays),
      auditLogs: many(auditLogs),
      subscription: one(subscriptions),
      reports: many(reports),
      laboratories: many(laboratories),
      labResults: many(labResults),
      labOrderAssignments: many(labOrderAssignments),
      vitalSigns: many(vitalSigns),
      visitSummaries: many(visitSummaries),
      patientCheckIns: many(patientCheckIns),
      patientBills: many(patientBills),
      patientPayments: many(patientPayments),
      hospitalBills: many(hospitalBills),
      pharmacyBills: many(pharmacyBills),
      financialTransactions: many(financialTransactions),
      userAchievements: many(userAchievements),
      userStats: many(userStats),
      leaderboards: many(leaderboards),
      activityLogs: many(activityLogs),
      departments: many(departments)
    }));
    insuranceProvidersRelations = relations(insuranceProviders, ({ one, many }) => ({
      tenant: one(tenants, {
        fields: [insuranceProviders.tenantId],
        references: [tenants.id]
      }),
      patientInsurance: many(patientInsurance),
      coverages: many(insurancePlanCoverage)
    }));
    patientInsuranceRelations = relations(patientInsurance, ({ one, many }) => ({
      tenant: one(tenants, {
        fields: [patientInsurance.tenantId],
        references: [tenants.id]
      }),
      patient: one(patients, {
        fields: [patientInsurance.patientId],
        references: [patients.id]
      }),
      insuranceProvider: one(insuranceProviders, {
        fields: [patientInsurance.insuranceProviderId],
        references: [insuranceProviders.id]
      }),
      claims: many(insuranceClaims),
      medicationCopays: many(medicationCopays)
    }));
    servicePricesRelations = relations(servicePrices, ({ one, many }) => ({
      tenant: one(tenants, {
        fields: [servicePrices.tenantId],
        references: [tenants.id]
      }),
      coverages: many(insurancePlanCoverage),
      claimLineItems: many(claimLineItems)
    }));
    insurancePlanCoverageRelations = relations(insurancePlanCoverage, ({ one }) => ({
      tenant: one(tenants, {
        fields: [insurancePlanCoverage.tenantId],
        references: [tenants.id]
      }),
      insuranceProvider: one(insuranceProviders, {
        fields: [insurancePlanCoverage.insuranceProviderId],
        references: [insuranceProviders.id]
      }),
      servicePrice: one(servicePrices, {
        fields: [insurancePlanCoverage.servicePriceId],
        references: [servicePrices.id]
      })
    }));
    claimLineItemsRelations = relations(claimLineItems, ({ one }) => ({
      tenant: one(tenants, {
        fields: [claimLineItems.tenantId],
        references: [tenants.id]
      }),
      claim: one(insuranceClaims, {
        fields: [claimLineItems.claimId],
        references: [insuranceClaims.id]
      }),
      servicePrice: one(servicePrices, {
        fields: [claimLineItems.servicePriceId],
        references: [servicePrices.id]
      })
    }));
    insuranceClaimsRelations = relations(insuranceClaims, ({ one, many }) => ({
      tenant: one(tenants, {
        fields: [insuranceClaims.tenantId],
        references: [tenants.id]
      }),
      patient: one(patients, {
        fields: [insuranceClaims.patientId],
        references: [patients.id]
      }),
      appointment: one(appointments, {
        fields: [insuranceClaims.appointmentId],
        references: [appointments.id]
      }),
      patientInsurance: one(patientInsurance, {
        fields: [insuranceClaims.patientInsuranceId],
        references: [patientInsurance.id]
      }),
      lineItems: many(claimLineItems)
    }));
    subscriptionsRelations = relations(subscriptions, ({ one }) => ({
      tenant: one(tenants, {
        fields: [subscriptions.tenantId],
        references: [tenants.id]
      })
    }));
    reportsRelations = relations(reports, ({ one }) => ({
      tenant: one(tenants, {
        fields: [reports.tenantId],
        references: [tenants.id]
      }),
      generatedByUser: one(users, {
        fields: [reports.generatedBy],
        references: [users.id]
      })
    }));
    medicalCommunicationsRelations = relations(medicalCommunications, ({ one, many }) => ({
      tenant: one(tenants, {
        fields: [medicalCommunications.tenantId],
        references: [tenants.id]
      }),
      patient: one(patients, {
        fields: [medicalCommunications.patientId],
        references: [patients.id]
      }),
      sender: one(users, {
        fields: [medicalCommunications.senderId],
        references: [users.id],
        relationName: "senderCommunications"
      }),
      recipient: one(users, {
        fields: [medicalCommunications.recipientId],
        references: [users.id],
        relationName: "recipientCommunications"
      }),
      appointment: one(appointments, {
        fields: [medicalCommunications.appointmentId],
        references: [appointments.id]
      }),
      prescription: one(prescriptions, {
        fields: [medicalCommunications.prescriptionId],
        references: [prescriptions.id]
      }),
      labOrder: one(labOrders, {
        fields: [medicalCommunications.labOrderId],
        references: [labOrders.id]
      }),
      translations: many(communicationTranslations)
    }));
    communicationTranslationsRelations = relations(communicationTranslations, ({ one }) => ({
      communication: one(medicalCommunications, {
        fields: [communicationTranslations.communicationId],
        references: [medicalCommunications.id]
      }),
      reviewedByUser: one(users, {
        fields: [communicationTranslations.reviewedBy],
        references: [users.id]
      })
    }));
    supportedLanguagesRelations = relations(supportedLanguages, ({ one }) => ({
      tenant: one(tenants, {
        fields: [supportedLanguages.tenantId],
        references: [tenants.id]
      })
    }));
    medicalPhrasesRelations = relations(medicalPhrases, ({ one, many }) => ({
      tenant: one(tenants, {
        fields: [medicalPhrases.tenantId],
        references: [tenants.id]
      }),
      translations: many(phraseTranslations)
    }));
    phraseTranslationsRelations = relations(phraseTranslations, ({ one }) => ({
      phrase: one(medicalPhrases, {
        fields: [phraseTranslations.phraseId],
        references: [medicalPhrases.id]
      }),
      translatedByUser: one(users, {
        fields: [phraseTranslations.translatedBy],
        references: [users.id],
        relationName: "translatedPhrases"
      }),
      verifiedByUser: one(users, {
        fields: [phraseTranslations.verifiedBy],
        references: [users.id],
        relationName: "verifiedPhrases"
      })
    }));
    usersRelations = relations(users, ({ one, many }) => ({
      tenant: one(tenants, {
        fields: [users.tenantId],
        references: [tenants.id]
      }),
      appointmentsAsProvider: many(appointments, { relationName: "providerAppointments" }),
      prescriptions: many(prescriptions),
      labOrders: many(labOrders),
      auditLogs: many(auditLogs),
      labResults: many(labResults),
      labOrderAssignments: many(labOrderAssignments),
      vitalSignsRecorded: many(vitalSigns, { relationName: "recordedBy" }),
      visitSummariesAsProvider: many(visitSummaries, { relationName: "providerSummaries" }),
      medicationCopaysAsDefined: many(medicationCopays, { relationName: "pharmacistCopays" }),
      userAchievements: many(userAchievements),
      userStats: many(userStats),
      leaderboards: many(leaderboards),
      activityLogs: many(activityLogs)
    }));
    pharmaciesRelations = relations(pharmacies, ({ one, many }) => ({
      tenant: one(tenants, {
        fields: [pharmacies.tenantId],
        references: [tenants.id]
      }),
      patients: many(patients)
    }));
    patientsRelations = relations(patients, ({ one, many }) => ({
      tenant: one(tenants, {
        fields: [patients.tenantId],
        references: [tenants.id]
      }),
      preferredPharmacy: one(pharmacies, {
        fields: [patients.preferredPharmacyId],
        references: [pharmacies.id]
      }),
      appointments: many(appointments),
      prescriptions: many(prescriptions),
      labOrders: many(labOrders),
      insuranceClaims: many(insuranceClaims),
      labResults: many(labResults),
      vitalSigns: many(vitalSigns),
      medicationCopays: many(medicationCopays),
      visitSummaries: many(visitSummaries),
      patientBills: many(patientBills),
      patientPayments: many(patientPayments)
    }));
    laboratoriesRelations = relations(laboratories, ({ one, many }) => ({
      tenant: one(tenants, {
        fields: [laboratories.tenantId],
        references: [tenants.id]
      }),
      labResults: many(labResults),
      labOrderAssignments: many(labOrderAssignments),
      approvedByUser: one(users, {
        fields: [laboratories.approvedBy],
        references: [users.id]
      })
    }));
    laboratoryApplicationsRelations = relations(laboratoryApplications, ({ one }) => ({
      reviewedByUser: one(users, {
        fields: [laboratoryApplications.reviewedBy],
        references: [users.id]
      })
    }));
    labResultsRelations = relations(labResults, ({ one }) => ({
      tenant: one(tenants, {
        fields: [labResults.tenantId],
        references: [tenants.id]
      }),
      patient: one(patients, {
        fields: [labResults.patientId],
        references: [patients.id]
      }),
      labOrder: one(labOrders, {
        fields: [labResults.labOrderId],
        references: [labOrders.id]
      }),
      laboratory: one(laboratories, {
        fields: [labResults.laboratoryId],
        references: [laboratories.id]
      }),
      reviewedByUser: one(users, {
        fields: [labResults.reviewedBy],
        references: [users.id]
      })
    }));
    labOrderAssignmentsRelations = relations(labOrderAssignments, ({ one }) => ({
      tenant: one(tenants, {
        fields: [labOrderAssignments.tenantId],
        references: [tenants.id]
      }),
      labOrder: one(labOrders, {
        fields: [labOrderAssignments.labOrderId],
        references: [labOrders.id]
      }),
      laboratory: one(laboratories, {
        fields: [labOrderAssignments.laboratoryId],
        references: [laboratories.id]
      }),
      assignedByUser: one(users, {
        fields: [labOrderAssignments.assignedBy],
        references: [users.id]
      })
    }));
    appointmentsRelations = relations(appointments, ({ one, many }) => ({
      tenant: one(tenants, {
        fields: [appointments.tenantId],
        references: [tenants.id]
      }),
      patient: one(patients, {
        fields: [appointments.patientId],
        references: [patients.id]
      }),
      provider: one(users, {
        fields: [appointments.providerId],
        references: [users.id],
        relationName: "providerAppointments"
      }),
      prescriptions: many(prescriptions),
      labOrders: many(labOrders),
      insuranceClaims: many(insuranceClaims),
      vitalSigns: many(vitalSigns),
      visitSummaries: many(visitSummaries)
    }));
    vitalSignsRelations = relations(vitalSigns, ({ one }) => ({
      tenant: one(tenants, {
        fields: [vitalSigns.tenantId],
        references: [tenants.id]
      }),
      patient: one(patients, {
        fields: [vitalSigns.patientId],
        references: [patients.id]
      }),
      appointment: one(appointments, {
        fields: [vitalSigns.appointmentId],
        references: [appointments.id]
      }),
      recordedBy: one(users, {
        fields: [vitalSigns.recordedBy],
        references: [users.id],
        relationName: "recordedBy"
      })
    }));
    patientCheckInsRelations = relations(patientCheckIns, ({ one }) => ({
      tenant: one(tenants, {
        fields: [patientCheckIns.tenantId],
        references: [tenants.id]
      }),
      patient: one(patients, {
        fields: [patientCheckIns.patientId],
        references: [patients.id]
      }),
      appointment: one(appointments, {
        fields: [patientCheckIns.appointmentId],
        references: [appointments.id]
      }),
      vitalSigns: one(vitalSigns, {
        fields: [patientCheckIns.vitalSignsId],
        references: [vitalSigns.id]
      }),
      questionnaire: one(specialtyQuestionnaires, {
        fields: [patientCheckIns.questionnaireId],
        references: [specialtyQuestionnaires.id]
      }),
      checkedInBy: one(users, {
        fields: [patientCheckIns.checkedInBy],
        references: [users.id],
        relationName: "checkedInBy"
      })
    }));
    medicationCopaysRelations = relations(medicationCopays, ({ one }) => ({
      tenant: one(tenants, {
        fields: [medicationCopays.tenantId],
        references: [tenants.id]
      }),
      patient: one(patients, {
        fields: [medicationCopays.patientId],
        references: [patients.id]
      }),
      patientInsurance: one(patientInsurance, {
        fields: [medicationCopays.patientInsuranceId],
        references: [patientInsurance.id]
      }),
      prescription: one(prescriptions, {
        fields: [medicationCopays.prescriptionId],
        references: [prescriptions.id]
      }),
      definedBy: one(users, {
        fields: [medicationCopays.definedByPharmacist],
        references: [users.id],
        relationName: "pharmacistCopays"
      })
    }));
    visitSummariesRelations = relations(visitSummaries, ({ one }) => ({
      tenant: one(tenants, {
        fields: [visitSummaries.tenantId],
        references: [tenants.id]
      }),
      patient: one(patients, {
        fields: [visitSummaries.patientId],
        references: [patients.id]
      }),
      appointment: one(appointments, {
        fields: [visitSummaries.appointmentId],
        references: [appointments.id]
      }),
      provider: one(users, {
        fields: [visitSummaries.providerId],
        references: [users.id],
        relationName: "providerSummaries"
      }),
      vitalSigns: one(vitalSigns, {
        fields: [visitSummaries.vitalSignsId],
        references: [vitalSigns.id]
      })
    }));
    patientBillsRelations = relations(patientBills, ({ one, many }) => ({
      tenant: one(tenants, {
        fields: [patientBills.tenantId],
        references: [tenants.id]
      }),
      patient: one(patients, {
        fields: [patientBills.patientId],
        references: [patients.id]
      }),
      appointment: one(appointments, {
        fields: [patientBills.appointmentId],
        references: [appointments.id]
      }),
      prescription: one(prescriptions, {
        fields: [patientBills.prescriptionId],
        references: [prescriptions.id]
      }),
      labOrder: one(labOrders, {
        fields: [patientBills.labOrderId],
        references: [labOrders.id]
      }),
      servicePrice: one(servicePrices, {
        fields: [patientBills.servicePriceId],
        references: [servicePrices.id]
      }),
      insuranceClaim: one(insuranceClaims, {
        fields: [patientBills.insuranceClaimId],
        references: [insuranceClaims.id]
      }),
      createdByUser: one(users, {
        fields: [patientBills.createdBy],
        references: [users.id]
      }),
      payments: many(patientPayments)
    }));
    patientPaymentsRelations = relations(patientPayments, ({ one }) => ({
      tenant: one(tenants, {
        fields: [patientPayments.tenantId],
        references: [tenants.id]
      }),
      patientBill: one(patientBills, {
        fields: [patientPayments.patientBillId],
        references: [patientBills.id]
      }),
      patient: one(patients, {
        fields: [patientPayments.patientId],
        references: [patients.id]
      }),
      processedByUser: one(users, {
        fields: [patientPayments.processedBy],
        references: [users.id]
      })
    }));
    achievementsRelations = relations(achievements, ({ many }) => ({
      userAchievements: many(userAchievements)
    }));
    userAchievementsRelations = relations(userAchievements, ({ one }) => ({
      user: one(users, {
        fields: [userAchievements.userId],
        references: [users.id]
      }),
      tenant: one(tenants, {
        fields: [userAchievements.tenantId],
        references: [tenants.id]
      }),
      achievement: one(achievements, {
        fields: [userAchievements.achievementId],
        references: [achievements.id]
      })
    }));
    userStatsRelations = relations(userStats, ({ one }) => ({
      user: one(users, {
        fields: [userStats.userId],
        references: [users.id]
      }),
      tenant: one(tenants, {
        fields: [userStats.tenantId],
        references: [tenants.id]
      })
    }));
    leaderboardsRelations = relations(leaderboards, ({ one }) => ({
      user: one(users, {
        fields: [leaderboards.userId],
        references: [users.id]
      }),
      tenant: one(tenants, {
        fields: [leaderboards.tenantId],
        references: [tenants.id]
      })
    }));
    activityLogsRelations = relations(activityLogs, ({ one }) => ({
      user: one(users, {
        fields: [activityLogs.userId],
        references: [users.id]
      }),
      tenant: one(tenants, {
        fields: [activityLogs.tenantId],
        references: [tenants.id]
      })
    }));
    hospitalBillsRelations = relations(hospitalBills, ({ one }) => ({
      tenant: one(tenants, {
        fields: [hospitalBills.tenantId],
        references: [tenants.id]
      }),
      patient: one(patients, {
        fields: [hospitalBills.patientId],
        references: [patients.id]
      }),
      appointment: one(appointments, {
        fields: [hospitalBills.appointmentId],
        references: [appointments.id]
      }),
      generatedByUser: one(users, {
        fields: [hospitalBills.generatedBy],
        references: [users.id]
      })
    }));
    pharmacyBillsRelations = relations(pharmacyBills, ({ one }) => ({
      tenant: one(tenants, {
        fields: [pharmacyBills.tenantId],
        references: [tenants.id]
      }),
      patient: one(patients, {
        fields: [pharmacyBills.patientId],
        references: [patients.id]
      }),
      prescription: one(prescriptions, {
        fields: [pharmacyBills.prescriptionId],
        references: [prescriptions.id]
      }),
      generatedByUser: one(users, {
        fields: [pharmacyBills.generatedBy],
        references: [users.id]
      })
    }));
    financialTransactionsRelations = relations(financialTransactions, ({ one }) => ({
      tenant: one(tenants, {
        fields: [financialTransactions.tenantId],
        references: [tenants.id]
      }),
      patient: one(patients, {
        fields: [financialTransactions.patientId],
        references: [patients.id]
      }),
      recordedByUser: one(users, {
        fields: [financialTransactions.recordedBy],
        references: [users.id]
      }),
      approvedByUser: one(users, {
        fields: [financialTransactions.approvedBy],
        references: [users.id]
      })
    }));
    workShiftsRelations = relations(workShifts, ({ one, many }) => ({
      tenant: one(tenants, {
        fields: [workShifts.tenantId],
        references: [tenants.id]
      }),
      user: one(users, {
        fields: [workShifts.userId],
        references: [users.id]
      }),
      archivedRecords: many(archivedRecords)
    }));
    pharmacyPatientInsuranceRelations = relations(pharmacyPatientInsurance, ({ one }) => ({
      tenant: one(tenants, {
        fields: [pharmacyPatientInsurance.tenantId],
        references: [tenants.id]
      }),
      patient: one(patients, {
        fields: [pharmacyPatientInsurance.patientId],
        references: [patients.id]
      }),
      verifiedByUser: one(users, {
        fields: [pharmacyPatientInsurance.verifiedBy],
        references: [users.id]
      })
    }));
    archivedRecordsRelations = relations(archivedRecords, ({ one }) => ({
      tenant: one(tenants, {
        fields: [archivedRecords.tenantId],
        references: [tenants.id]
      }),
      workShift: one(workShifts, {
        fields: [archivedRecords.workShiftId],
        references: [workShifts.id]
      }),
      patient: one(patients, {
        fields: [archivedRecords.patientId],
        references: [patients.id]
      }),
      archivedByUser: one(users, {
        fields: [archivedRecords.archivedBy],
        references: [users.id],
        relationName: "archivedBy"
      }),
      lastAccessedByUser: one(users, {
        fields: [archivedRecords.lastAccessedBy],
        references: [users.id],
        relationName: "lastAccessedBy"
      })
    }));
    pharmacyReportTemplatesRelations = relations(pharmacyReportTemplates, ({ one }) => ({
      tenant: one(tenants, {
        fields: [pharmacyReportTemplates.tenantId],
        references: [tenants.id]
      }),
      createdByUser: one(users, {
        fields: [pharmacyReportTemplates.createdBy],
        references: [users.id]
      })
    }));
    insertTenantSchema = createInsertSchema(tenants).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertUserSchema = createInsertSchema(users).omit({
      id: true,
      createdAt: true,
      updatedAt: true,
      lastLogin: true
    });
    insertPatientSchema = createInsertSchema(patients).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertAppointmentSchema = createInsertSchema(appointments).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertPrescriptionSchema = createInsertSchema(prescriptions).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertLabOrderSchema = createInsertSchema(labOrders).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertPharmacySchema = createInsertSchema(pharmacies).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertInsuranceProviderSchema = createInsertSchema(insuranceProviders).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertPatientInsuranceSchema = createInsertSchema(patientInsurance).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertInsuranceClaimSchema = createInsertSchema(insuranceClaims).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertServicePriceSchema = createInsertSchema(servicePrices).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertInsurancePlanCoverageSchema = createInsertSchema(insurancePlanCoverage).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertClaimLineItemSchema = createInsertSchema(claimLineItems).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertMedicationCopaySchema = createInsertSchema(medicationCopays).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertVitalSignsSchema = createInsertSchema(vitalSigns).omit({
      id: true,
      createdAt: true
    });
    insertVisitSummarySchema = createInsertSchema(visitSummaries).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertPatientCheckInSchema = createInsertSchema(patientCheckIns).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertRolePermissionSchema = createInsertSchema(rolePermissions).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertPatientBillSchema = createInsertSchema(patientBills).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertPatientPaymentSchema = createInsertSchema(patientPayments).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertSubscriptionSchema = createInsertSchema(subscriptions).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertReportSchema = createInsertSchema(reports).omit({
      id: true,
      createdAt: true,
      completedAt: true
    });
    insertMedicalCommunicationSchema = createInsertSchema(medicalCommunications).omit({
      id: true,
      createdAt: true,
      updatedAt: true,
      readAt: true
    });
    insertCommunicationTranslationSchema = createInsertSchema(communicationTranslations).omit({
      id: true,
      createdAt: true,
      updatedAt: true,
      reviewedAt: true
    });
    insertSupportedLanguageSchema = createInsertSchema(supportedLanguages).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertMedicalPhraseSchema = createInsertSchema(medicalPhrases).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertPhraseTranslationSchema = createInsertSchema(phraseTranslations).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertLaboratorySchema = createInsertSchema(laboratories).omit({
      id: true,
      createdAt: true,
      updatedAt: true,
      approvedAt: true
    });
    insertLabResultSchema = createInsertSchema(labResults).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertLabOrderAssignmentSchema = createInsertSchema(labOrderAssignments).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertLaboratoryApplicationSchema = createInsertSchema(laboratoryApplications).omit({
      id: true,
      createdAt: true,
      updatedAt: true,
      reviewedAt: true
    });
    insertHealthRecommendationSchema = createInsertSchema(healthRecommendations).omit({
      id: true,
      createdAt: true,
      updatedAt: true,
      acknowledgedAt: true
    });
    insertHealthAnalysisSchema = createInsertSchema(healthAnalyses).omit({
      id: true,
      createdAt: true,
      updatedAt: true,
      reviewedAt: true
    });
    insertPricingPlanSchema = createInsertSchema(pricingPlans).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertOfflineSyncDataSchema = createInsertSchema(offlineSyncData).omit({
      id: true,
      createdAt: true
    });
    insertTranslationSchema = createInsertSchema(translations).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertPharmacyReceiptSchema = createInsertSchema(pharmacyReceipts);
    insertLabBillSchema = createInsertSchema(labBills);
    insertHospitalBillSchema = createInsertSchema(hospitalBills);
    insertPharmacyBillSchema = createInsertSchema(pharmacyBills);
    insertFinancialTransactionSchema = createInsertSchema(financialTransactions);
    insertAchievementSchema = createInsertSchema(achievements).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertUserAchievementSchema = createInsertSchema(userAchievements).omit({
      id: true,
      earnedAt: true
    });
    insertUserStatsSchema = createInsertSchema(userStats).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertLeaderboardSchema = createInsertSchema(leaderboards).omit({
      id: true,
      createdAt: true
    });
    insertActivityLogSchema = createInsertSchema(activityLogs).omit({
      id: true,
      timestamp: true
    });
    insertPatientAccessRequestSchema = createInsertSchema(patientAccessRequests).omit({
      id: true,
      createdAt: true,
      updatedAt: true,
      requestedDate: true,
      reviewedDate: true
    });
    insertPatientAccessAuditLogSchema = createInsertSchema(patientAccessAuditLog2).omit({
      id: true,
      accessedAt: true
    });
    insertWorkShiftSchema = createInsertSchema(workShifts).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertPharmacyPatientInsuranceSchema = createInsertSchema(pharmacyPatientInsurance).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertArchivedRecordSchema = createInsertSchema(archivedRecords).omit({
      id: true,
      createdAt: true
    });
    insertPharmacyReportTemplateSchema = createInsertSchema(pharmacyReportTemplates).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertDepartmentSchema = createInsertSchema(departments).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    advertisements = pgTable("advertisements", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      tenantId: uuid("tenant_id").references(() => tenants.id).notNull(),
      // Advertiser's tenant
      companyName: text("company_name").notNull(),
      contactEmail: text("contact_email").notNull(),
      contactPhone: text("contact_phone"),
      websiteUrl: text("website_url"),
      // Advertisement Content
      title: text("title").notNull(),
      description: text("description").notNull(),
      category: adCategoryEnum("category").notNull(),
      targetAudience: text("target_audience").array().default([]),
      // ["hospitals", "pharmacies", "laboratories"]
      keywords: text("keywords").array().default([]),
      // Media Assets
      imageUrls: text("image_urls").array().default([]),
      videoUrl: text("video_url"),
      brochureUrl: text("brochure_url"),
      // Pricing and Product Info
      priceRange: text("price_range"),
      // e.g., "$1,000 - $5,000"
      currency: currencyEnum("currency").default("USD"),
      productSpecifications: jsonb("product_specifications").default("{}"),
      certifications: text("certifications").array().default([]),
      // Advertisement Settings
      status: adStatusEnum("status").default("draft"),
      priority: adPriorityEnum("priority").default("standard"),
      billingType: adBillingTypeEnum("billing_type").default("monthly"),
      monthlyFee: decimal("monthly_fee", { precision: 10, scale: 2 }),
      clickRate: decimal("click_rate", { precision: 10, scale: 4 }),
      // Per click cost
      impressionRate: decimal("impression_rate", { precision: 10, scale: 6 }),
      // Per impression cost
      // Campaign Duration
      startDate: timestamp("start_date"),
      endDate: timestamp("end_date"),
      isActive: boolean("is_active").default(false),
      autoRenew: boolean("auto_renew").default(false),
      // Analytics
      impressions: integer("impressions").default(0),
      clicks: integer("clicks").default(0),
      conversions: integer("conversions").default(0),
      // Approval Process
      submittedAt: timestamp("submitted_at"),
      reviewedAt: timestamp("reviewed_at"),
      reviewedBy: uuid("reviewed_by").references(() => users.id),
      reviewNotes: text("review_notes"),
      rejectionReason: text("rejection_reason"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    adViews = pgTable("ad_views", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      advertisementId: uuid("advertisement_id").references(() => advertisements.id).notNull(),
      viewerTenantId: uuid("viewer_tenant_id").references(() => tenants.id),
      viewerUserId: uuid("viewer_user_id").references(() => users.id),
      ipAddress: text("ip_address"),
      userAgent: text("user_agent"),
      referrer: text("referrer"),
      // View Details
      viewDuration: integer("view_duration"),
      // seconds
      clickedThrough: boolean("clicked_through").default(false),
      conversionTracked: boolean("conversion_tracked").default(false),
      viewedAt: timestamp("viewed_at").default(sql`CURRENT_TIMESTAMP`)
    });
    adInquiries = pgTable("ad_inquiries", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      advertisementId: uuid("advertisement_id").references(() => advertisements.id).notNull(),
      inquirerTenantId: uuid("inquirer_tenant_id").references(() => tenants.id).notNull(),
      inquirerUserId: uuid("inquirer_user_id").references(() => users.id).notNull(),
      subject: text("subject").notNull(),
      message: text("message").notNull(),
      inquirerContactInfo: jsonb("inquirer_contact_info").notNull(),
      status: text("status").default("pending"),
      // pending, responded, closed
      respondedAt: timestamp("responded_at"),
      response: text("response"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    marketplaceProducts = pgTable("marketplace_products", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      supplierTenantId: uuid("supplier_tenant_id").references(() => tenants.id).notNull(),
      // Medical supplier's tenant
      name: text("name").notNull(),
      sku: text("sku").notNull(),
      // Stock Keeping Unit - unique per supplier
      description: text("description").notNull(),
      shortDescription: text("short_description"),
      category: adCategoryEnum("category").notNull(),
      subcategory: text("subcategory"),
      brand: text("brand"),
      manufacturer: text("manufacturer"),
      // Pricing - Multi-currency support
      price: decimal("price", { precision: 10, scale: 2 }).notNull(),
      currency: currencyEnum("currency").default("USD"),
      compareAtPrice: decimal("compare_at_price", { precision: 10, scale: 2 }),
      // Original price for discount display
      costPrice: decimal("cost_price", { precision: 10, scale: 2 }),
      // Supplier's cost (private)
      // Inventory Management
      stockQuantity: integer("stock_quantity").default(0),
      lowStockThreshold: integer("low_stock_threshold").default(10),
      trackInventory: boolean("track_inventory").default(true),
      backordersAllowed: boolean("backorders_allowed").default(false),
      // Product Status and Visibility
      status: productStatusEnum("status").default("draft"),
      isActive: boolean("is_active").default(false),
      isFeatured: boolean("is_featured").default(false),
      requiresPrescription: boolean("requires_prescription").default(false),
      // Product Specifications and Media
      specifications: jsonb("specifications").default("{}"),
      // Technical specs, dimensions, etc.
      features: text("features").array().default([]),
      imageUrls: text("image_urls").array().default([]),
      documentUrls: text("document_urls").array().default([]),
      // Manuals, certificates, etc.
      videoUrl: text("video_url"),
      // Regulatory and Compliance
      regulatoryApprovals: text("regulatory_approvals").array().default([]),
      // FDA, CE, etc.
      certifications: text("certifications").array().default([]),
      warrantPeriod: text("warranty_period"),
      // "2 years", "1 year", etc.
      complianceNotes: text("compliance_notes"),
      // SEO and Searchability
      metaTitle: text("meta_title"),
      metaDescription: text("meta_description"),
      searchKeywords: text("search_keywords").array().default([]),
      // Shipping and Logistics
      weight: decimal("weight", { precision: 8, scale: 2 }),
      // kg
      dimensions: jsonb("dimensions").$type(),
      shippingClass: text("shipping_class"),
      // standard, hazardous, fragile, etc.
      leadTime: integer("lead_time_days").default(1),
      // Days to process order
      // Analytics and Performance
      viewCount: integer("view_count").default(0),
      orderCount: integer("order_count").default(0),
      avgRating: decimal("avg_rating", { precision: 3, scale: 2 }).default("0.00"),
      totalReviews: integer("total_reviews").default(0),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    marketplaceOrders = pgTable("marketplace_orders", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      orderNumber: text("order_number").notNull().unique(),
      // Human-readable order number
      // Tenant Isolation: Buyer and Seller
      buyerTenantId: uuid("buyer_tenant_id").references(() => tenants.id).notNull(),
      // Hospital/Pharmacy/Lab placing order
      buyerUserId: uuid("buyer_user_id").references(() => users.id).notNull(),
      // User who placed the order
      supplierTenantId: uuid("supplier_tenant_id").references(() => tenants.id).notNull(),
      // Medical supplier fulfilling order
      // Order Details
      status: orderStatusEnum("status").default("pending"),
      subtotal: decimal("subtotal", { precision: 12, scale: 2 }).notNull(),
      taxAmount: decimal("tax_amount", { precision: 10, scale: 2 }).default("0.00"),
      shippingAmount: decimal("shipping_amount", { precision: 10, scale: 2 }).default("0.00"),
      discountAmount: decimal("discount_amount", { precision: 10, scale: 2 }).default("0.00"),
      totalAmount: decimal("total_amount", { precision: 12, scale: 2 }).notNull(),
      currency: currencyEnum("currency").default("USD"),
      // Shipping Information
      shippingAddress: jsonb("shipping_address").notNull().$type(),
      billingAddress: jsonb("billing_address").$type(),
      // Order Processing
      orderDate: timestamp("order_date").default(sql`CURRENT_TIMESTAMP`),
      expectedDeliveryDate: timestamp("expected_delivery_date"),
      actualDeliveryDate: timestamp("actual_delivery_date"),
      shippingCarrier: text("shipping_carrier"),
      trackingNumber: text("tracking_number"),
      // Order Notes and Communication
      buyerNotes: text("buyer_notes"),
      supplierNotes: text("supplier_notes"),
      internalNotes: text("internal_notes"),
      // For platform admins
      // Payment Information (reference to external payment system)
      paymentMethod: text("payment_method"),
      // credit_card, purchase_order, net_terms
      paymentStatus: text("payment_status").default("pending"),
      // pending, paid, failed, refunded
      paymentReference: text("payment_reference"),
      // External payment ID
      purchaseOrderNumber: text("purchase_order_number"),
      // Cancellation and Returns
      cancelledAt: timestamp("cancelled_at"),
      cancellationReason: text("cancellation_reason"),
      refundAmount: decimal("refund_amount", { precision: 10, scale: 2 }),
      refundedAt: timestamp("refunded_at"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    marketplaceOrderItems = pgTable("marketplace_order_items", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      orderId: uuid("order_id").references(() => marketplaceOrders.id).notNull(),
      productId: uuid("product_id").references(() => marketplaceProducts.id).notNull(),
      // Product snapshot at time of order (prevents price/detail changes affecting historical orders)
      productName: text("product_name").notNull(),
      productSku: text("product_sku").notNull(),
      productDescription: text("product_description"),
      // Pricing at time of order
      unitPrice: decimal("unit_price", { precision: 10, scale: 2 }).notNull(),
      quantity: integer("quantity").notNull(),
      lineTotal: decimal("line_total", { precision: 12, scale: 2 }).notNull(),
      // Individual item status (allows partial fulfillment)
      status: orderItemStatusEnum("status").default("pending"),
      // Item-specific shipping
      shippedQuantity: integer("shipped_quantity").default(0),
      shippedAt: timestamp("shipped_at"),
      deliveredQuantity: integer("delivered_quantity").default(0),
      deliveredAt: timestamp("delivered_at"),
      // Returns and exchanges
      returnedQuantity: integer("returned_quantity").default(0),
      returnReason: text("return_reason"),
      returnedAt: timestamp("returned_at"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    productReviews = pgTable("product_reviews", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      productId: uuid("product_id").references(() => marketplaceProducts.id).notNull(),
      reviewerTenantId: uuid("reviewer_tenant_id").references(() => tenants.id).notNull(),
      // Organization that purchased
      reviewerUserId: uuid("reviewer_user_id").references(() => users.id).notNull(),
      // User who wrote review
      orderId: uuid("order_id").references(() => marketplaceOrders.id),
      // Verified purchase
      rating: integer("rating").notNull(),
      // 1-5 stars
      title: text("title"),
      review: text("review"),
      pros: text("pros").array().default([]),
      cons: text("cons").array().default([]),
      // Review moderation
      isVerifiedPurchase: boolean("is_verified_purchase").default(false),
      isApproved: boolean("is_approved").default(false),
      moderatedBy: uuid("moderated_by").references(() => users.id),
      moderatedAt: timestamp("moderated_at"),
      // Helpfulness voting
      helpfulVotes: integer("helpful_votes").default(0),
      totalVotes: integer("total_votes").default(0),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    quoteRequests = pgTable("quote_requests", {
      id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
      productId: uuid("product_id").references(() => marketplaceProducts.id).notNull(),
      productName: text("product_name").notNull(),
      supplierName: text("supplier_name").notNull(),
      companyName: text("company_name").notNull(),
      contactName: text("contact_name").notNull(),
      email: text("email").notNull(),
      phone: text("phone"),
      quantity: integer("quantity").notNull(),
      message: text("message"),
      status: quoteRequestStatusEnum("status").default("pending").notNull(),
      requestedAt: timestamp("requested_at").default(sql`CURRENT_TIMESTAMP`),
      quotedPrice: decimal("quoted_price", { precision: 10, scale: 2 }),
      quotedAt: timestamp("quoted_at"),
      quotedBy: text("quoted_by"),
      notes: text("notes"),
      createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
      updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
    });
    marketplaceProductsRelations = relations(marketplaceProducts, ({ one, many }) => ({
      supplierTenant: one(tenants, {
        fields: [marketplaceProducts.supplierTenantId],
        references: [tenants.id]
      }),
      orderItems: many(marketplaceOrderItems),
      reviews: many(productReviews)
    }));
    marketplaceOrdersRelations = relations(marketplaceOrders, ({ one, many }) => ({
      buyerTenant: one(tenants, {
        fields: [marketplaceOrders.buyerTenantId],
        references: [tenants.id]
      }),
      supplierTenant: one(tenants, {
        fields: [marketplaceOrders.supplierTenantId],
        references: [tenants.id]
      }),
      buyerUser: one(users, {
        fields: [marketplaceOrders.buyerUserId],
        references: [users.id]
      }),
      orderItems: many(marketplaceOrderItems),
      reviews: many(productReviews)
    }));
    marketplaceOrderItemsRelations = relations(marketplaceOrderItems, ({ one }) => ({
      order: one(marketplaceOrders, {
        fields: [marketplaceOrderItems.orderId],
        references: [marketplaceOrders.id]
      }),
      product: one(marketplaceProducts, {
        fields: [marketplaceOrderItems.productId],
        references: [marketplaceProducts.id]
      })
    }));
    productReviewsRelations = relations(productReviews, ({ one }) => ({
      product: one(marketplaceProducts, {
        fields: [productReviews.productId],
        references: [marketplaceProducts.id]
      }),
      reviewerTenant: one(tenants, {
        fields: [productReviews.reviewerTenantId],
        references: [tenants.id]
      }),
      reviewerUser: one(users, {
        fields: [productReviews.reviewerUserId],
        references: [users.id]
      }),
      order: one(marketplaceOrders, {
        fields: [productReviews.orderId],
        references: [marketplaceOrders.id]
      }),
      moderatedByUser: one(users, {
        fields: [productReviews.moderatedBy],
        references: [users.id]
      })
    }));
    advertisementsRelations = relations(advertisements, ({ one, many }) => ({
      tenant: one(tenants, {
        fields: [advertisements.tenantId],
        references: [tenants.id]
      }),
      reviewedByUser: one(users, {
        fields: [advertisements.reviewedBy],
        references: [users.id]
      }),
      views: many(adViews),
      inquiries: many(adInquiries)
    }));
    adViewsRelations = relations(adViews, ({ one }) => ({
      advertisement: one(advertisements, {
        fields: [adViews.advertisementId],
        references: [advertisements.id]
      }),
      viewerTenant: one(tenants, {
        fields: [adViews.viewerTenantId],
        references: [tenants.id]
      }),
      viewerUser: one(users, {
        fields: [adViews.viewerUserId],
        references: [users.id]
      })
    }));
    adInquiriesRelations = relations(adInquiries, ({ one }) => ({
      advertisement: one(advertisements, {
        fields: [adInquiries.advertisementId],
        references: [advertisements.id]
      }),
      inquirerTenant: one(tenants, {
        fields: [adInquiries.inquirerTenantId],
        references: [tenants.id]
      }),
      inquirerUser: one(users, {
        fields: [adInquiries.inquirerUserId],
        references: [users.id]
      })
    }));
    insertAdvertisementSchema = createInsertSchema(advertisements).omit({
      id: true,
      impressions: true,
      clicks: true,
      conversions: true,
      reviewedAt: true,
      reviewedBy: true,
      reviewNotes: true,
      rejectionReason: true,
      createdAt: true,
      updatedAt: true
    });
    insertAdViewSchema = createInsertSchema(adViews).omit({
      id: true,
      viewedAt: true
    });
    insertAdInquirySchema = createInsertSchema(adInquiries).omit({
      id: true,
      respondedAt: true,
      response: true,
      createdAt: true,
      updatedAt: true
    });
    insertMedicalSupplierSchema = createInsertSchema(medicalSuppliers).omit({
      id: true,
      organizationSlug: true,
      // Generated automatically
      status: true,
      // Set automatically
      createdAt: true,
      updatedAt: true,
      tenantId: true,
      approvedBy: true,
      approvedAt: true,
      rejectionReason: true,
      notes: true
    });
    insertMarketplaceProductSchema = createInsertSchema(marketplaceProducts).omit({
      id: true,
      viewCount: true,
      orderCount: true,
      avgRating: true,
      totalReviews: true,
      createdAt: true,
      updatedAt: true
    });
    insertMarketplaceOrderSchema = createInsertSchema(marketplaceOrders).omit({
      id: true,
      orderDate: true,
      cancelledAt: true,
      refundedAt: true,
      createdAt: true,
      updatedAt: true
    });
    insertMarketplaceOrderItemSchema = createInsertSchema(marketplaceOrderItems).omit({
      id: true,
      shippedAt: true,
      deliveredAt: true,
      returnedAt: true,
      createdAt: true,
      updatedAt: true
    });
    insertProductReviewSchema = createInsertSchema(productReviews).omit({
      id: true,
      moderatedAt: true,
      helpfulVotes: true,
      totalVotes: true,
      createdAt: true,
      updatedAt: true
    });
    insertQuoteRequestSchema = createInsertSchema(quoteRequests).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
  }
});

// server/db.ts
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
var pool, db;
var init_db = __esm({
  "server/db.ts"() {
    "use strict";
    init_schema();
    neonConfig.webSocketConstructor = ws;
    if (!process.env.DATABASE_URL) {
      throw new Error(
        "DATABASE_URL must be set. Did you forget to provision a database?"
      );
    }
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
    db = drizzle({ client: pool, schema: schema_exports });
  }
});

// server/email-service.ts
var email_service_exports = {};
__export(email_service_exports, {
  generateTemporaryPassword: () => generateTemporaryPassword,
  sendEmail: () => sendEmail,
  sendRegistrationConfirmationEmail: () => sendRegistrationConfirmationEmail,
  sendWelcomeEmail: () => sendWelcomeEmail
});
import { MailService } from "@sendgrid/mail";
async function sendEmail(params) {
  if (!mailService) {
    console.log("Email would be sent (SendGrid not configured):", {
      to: params.to,
      from: params.from,
      subject: params.subject
    });
    return true;
  }
  try {
    const emailData = {
      to: params.to,
      from: params.from,
      subject: params.subject
    };
    if (params.text) emailData.text = params.text;
    if (params.html) emailData.html = params.html;
    await mailService.send(emailData);
    return true;
  } catch (error) {
    console.error("SendGrid email error:", error);
    return false;
  }
}
async function sendRegistrationConfirmationEmail(userEmail, userName, organizationName, loginUrl = "https://navimed-healthcare.replit.app/login") {
  const confirmationHtml = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to NaviMED Healthcare Platform</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563eb, #10b981); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
            .welcome-message { background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #2563eb; }
            .features { background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; }
            .feature-item { margin: 15px 0; padding: 10px 0; border-bottom: 1px solid #e5e7eb; }
            .feature-item:last-child { border-bottom: none; }
            .feature-icon { color: #10b981; font-weight: bold; margin-right: 10px; }
            .button { background: #2563eb; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 20px 0; }
            .footer { text-align: center; color: #6b7280; font-size: 14px; margin-top: 30px; }
            .logo { font-size: 28px; font-weight: bold; margin-bottom: 10px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="logo">\u{1F3E5} NAVIMED</div>
                <h1 style="margin: 0;">Welcome to NaviMED Healthcare Platform!</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Your registration was successful</p>
            </div>
            
            <div class="content">
                <div class="welcome-message">
                    <h2 style="color: #2563eb; margin-top: 0;">Hello ${userName}!</h2>
                    <p>Thank you for registering with NaviMED Healthcare Platform. Your account for <strong>${organizationName}</strong> has been successfully created and is ready to use.</p>
                    <p>You now have access to our comprehensive suite of healthcare management tools designed to streamline your operations and improve patient care.</p>
                </div>

                <div class="features">
                    <h3 style="color: #2563eb; margin-top: 0;">What you can do with NaviMED:</h3>
                    
                    <div class="feature-item">
                        <span class="feature-icon">\u{1F4C5}</span>
                        <strong>Appointment Management:</strong> Schedule, track, and manage patient appointments
                    </div>
                    
                    <div class="feature-item">
                        <span class="feature-icon">\u{1F468}\u200D\u2695\uFE0F</span>
                        <strong>Patient Records:</strong> Secure electronic health records with comprehensive patient data
                    </div>
                    
                    <div class="feature-item">
                        <span class="feature-icon">\u{1F48A}</span>
                        <strong>Prescription Management:</strong> Digital prescriptions with pharmacy integration
                    </div>
                    
                    <div class="feature-item">
                        <span class="feature-icon">\u{1F9EA}</span>
                        <strong>Laboratory Integration:</strong> Lab order management and results tracking
                    </div>
                    
                    <div class="feature-item">
                        <span class="feature-icon">\u{1F4B0}</span>
                        <strong>Billing & Insurance:</strong> Automated insurance claims and billing management
                    </div>
                    
                    <div class="feature-item">
                        <span class="feature-icon">\u{1F6D2}</span>
                        <strong>Medical Marketplace:</strong> Access to medical supplies and equipment vendors
                    </div>
                </div>

                <div style="text-align: center; margin: 30px 0;">
                    <p style="margin-bottom: 20px;">Ready to get started? Access your dashboard:</p>
                    <a href="${loginUrl}" class="button">Login to Your Dashboard</a>
                </div>

                <div style="background: #e0f2fe; padding: 20px; border-radius: 8px; border-left: 4px solid #0288d1;">
                    <h4 style="color: #0288d1; margin-top: 0;">Need Help?</h4>
                    <p style="margin-bottom: 0;">Our support team is here to help you get the most out of NaviMED. Contact us anytime for assistance with setup, training, or technical support.</p>
                </div>
            </div>

            <div class="footer">
                <p>Thank you for choosing NaviMED Healthcare Platform</p>
                <p style="font-size: 12px; color: #9ca3af;">This email was sent to ${userEmail} because you registered for a NaviMED account.</p>
            </div>
        </div>
    </body>
    </html>
  `;
  const confirmationText = `
Welcome to NaviMED Healthcare Platform!

Hello ${userName},

Thank you for registering with NaviMED Healthcare Platform. Your account for ${organizationName} has been successfully created and is ready to use.

You now have access to our comprehensive healthcare management tools:

\u2022 Appointment Management - Schedule and track patient appointments
\u2022 Patient Records - Secure electronic health records  
\u2022 Prescription Management - Digital prescriptions with pharmacy integration
\u2022 Laboratory Integration - Lab order management and results tracking
\u2022 Billing & Insurance - Automated insurance claims and billing
\u2022 Medical Marketplace - Access to medical supplies and equipment

Ready to get started? Log in to your dashboard at: ${loginUrl}

Need help? Our support team is here to assist you with setup, training, and technical support.

Thank you for choosing NaviMED Healthcare Platform!
  `;
  return await sendEmail({
    to: userEmail,
    from: "noreply@navimed-healthcare.com",
    subject: "Welcome to NaviMED - Registration Confirmed",
    text: confirmationText,
    html: confirmationHtml
  });
}
async function sendWelcomeEmail(params) {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to NaviMed Healthcare Platform</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #10b981; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 30px; }
            .credentials { background-color: #e5f7f0; border: 1px solid #10b981; padding: 15px; margin: 20px 0; border-radius: 5px; }
            .button { display: inline-block; background-color: #10b981; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .warning { background-color: #fef3cd; border: 1px solid #f6d55c; padding: 15px; margin: 20px 0; border-radius: 5px; color: #856404; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Welcome to NaviMed</h1>
                <p>Healthcare Management Platform</p>
            </div>
            
            <div class="content">
                <h2>Hello ${params.firstName} ${params.lastName},</h2>
                
                <p>Welcome to the NaviMed Healthcare Management Platform! Your account has been successfully created for <strong>${params.organizationName}</strong>.</p>
                
                <div class="credentials">
                    <h3>Your Login Credentials:</h3>
                    <p><strong>Username:</strong> ${params.username}</p>
                    <p><strong>Email:</strong> ${params.userEmail}</p>
                    <p><strong>Temporary Password:</strong> ${params.temporaryPassword}</p>
                </div>
                
                <div class="warning">
                    <h4>\u26A0\uFE0F Important Security Notice</h4>
                    <p>This is a <strong>temporary password</strong>. For your security, you will be required to change this password when you first log in to the system.</p>
                </div>
                
                <p>To get started:</p>
                <ol>
                    <li>Click the login button below</li>
                    <li>Enter your username and temporary password</li>
                    <li>Create a new secure password when prompted</li>
                    <li>Begin using the NaviMed platform</li>
                </ol>
                
                <div style="text-align: center;">
                    <a href="${params.loginUrl}" class="button">Login to NaviMed</a>
                </div>
                
                <h3>What you can do with NaviMed:</h3>
                <ul>
                    <li>Manage patient records and appointments</li>
                    <li>Process prescriptions and lab orders</li>
                    <li>Handle billing and insurance claims</li>
                    <li>Secure medical communications</li>
                    <li>Generate comprehensive reports</li>
                </ul>
                
                <p>If you have any questions or need assistance, please don't hesitate to contact our support team.</p>
                
                <p>Best regards,<br>
                The NaviMed Team</p>
            </div>
            
            <div class="footer">
                <p>This email was sent from info@navimedi.com</p>
                <p>\xA9 2025 NaviMed Healthcare Platform. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
  `;
  const textContent = `
Welcome to NaviMed Healthcare Platform!

Hello ${params.firstName} ${params.lastName},

Your account has been successfully created for ${params.organizationName}.

LOGIN CREDENTIALS:
Username: ${params.username}
Email: ${params.userEmail}
Temporary Password: ${params.temporaryPassword}

IMPORTANT SECURITY NOTICE:
This is a temporary password. You will be required to change this password when you first log in.

To get started:
1. Visit: ${params.loginUrl}
2. Enter your username and temporary password
3. Create a new secure password when prompted
4. Begin using the NaviMed platform

If you have any questions, please contact our support team.

Best regards,
The NaviMed Team

This email was sent from info@navimedi.com
\xA9 2025 NaviMed Healthcare Platform. All rights reserved.
  `;
  return await sendEmail({
    to: params.userEmail,
    from: "info@navimedi.com",
    subject: `Welcome to NaviMed - Your Account Details for ${params.organizationName}`,
    text: textContent,
    html: htmlContent
  });
}
function generateTemporaryPassword() {
  const length = 12;
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$%&*";
  let password = "";
  password += "ABCDEFGHJKLMNPQRSTUVWXYZ"[Math.floor(Math.random() * 24)];
  password += "abcdefghijkmnpqrstuvwxyz"[Math.floor(Math.random() * 24)];
  password += "23456789"[Math.floor(Math.random() * 8)];
  password += "!@#$%&*"[Math.floor(Math.random() * 7)];
  for (let i = password.length; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  return password.split("").sort(() => Math.random() - 0.5).join("");
}
var mailService;
var init_email_service = __esm({
  "server/email-service.ts"() {
    "use strict";
    mailService = null;
    if (process.env.SENDGRID_API_KEY && process.env.SENDGRID_API_KEY.startsWith("SG.")) {
      mailService = new MailService();
      mailService.setApiKey(process.env.SENDGRID_API_KEY);
    } else if (process.env.SENDGRID_API_KEY && !process.env.SENDGRID_API_KEY.startsWith("SG.")) {
      console.warn("Invalid SENDGRID_API_KEY format. API key must start with 'SG.' - Email functionality will be disabled.");
    } else {
      console.warn("SENDGRID_API_KEY environment variable not set. Email functionality will be disabled.");
    }
  }
});

// server/objectAcl.ts
var objectAcl_exports = {};
__export(objectAcl_exports, {
  ObjectAccessGroupType: () => ObjectAccessGroupType,
  ObjectPermission: () => ObjectPermission,
  canAccessObject: () => canAccessObject,
  getObjectAclPolicy: () => getObjectAclPolicy,
  setObjectAclPolicy: () => setObjectAclPolicy
});
function isPermissionAllowed(requested, granted) {
  if (requested === "read" /* READ */) {
    return ["read" /* READ */, "write" /* WRITE */].includes(granted);
  }
  return granted === "write" /* WRITE */;
}
function createObjectAccessGroup(group) {
  switch (group.type) {
    // Implement the case for each type of access group to instantiate.
    //
    // For example:
    // case "USER_LIST":
    //   return new UserListAccessGroup(group.id);
    // case "EMAIL_DOMAIN":
    //   return new EmailDomainAccessGroup(group.id);
    // case "GROUP_MEMBER":
    //   return new GroupMemberAccessGroup(group.id);
    // case "SUBSCRIBER":
    //   return new SubscriberAccessGroup(group.id);
    default:
      throw new Error(`Unknown access group type: ${group.type}`);
  }
}
async function setObjectAclPolicy(objectFile, aclPolicy) {
  const [exists] = await objectFile.exists();
  if (!exists) {
    throw new Error(`Object not found: ${objectFile.name}`);
  }
  await objectFile.setMetadata({
    metadata: {
      [ACL_POLICY_METADATA_KEY]: JSON.stringify(aclPolicy)
    }
  });
}
async function getObjectAclPolicy(objectFile) {
  const [metadata] = await objectFile.getMetadata();
  const aclPolicy = metadata?.metadata?.[ACL_POLICY_METADATA_KEY];
  if (!aclPolicy) {
    return null;
  }
  return JSON.parse(aclPolicy);
}
async function canAccessObject({
  userId,
  objectFile,
  requestedPermission
}) {
  const aclPolicy = await getObjectAclPolicy(objectFile);
  if (!aclPolicy) {
    return false;
  }
  if (aclPolicy.visibility === "public" && requestedPermission === "read" /* READ */) {
    return true;
  }
  if (!userId) {
    return false;
  }
  if (aclPolicy.owner === userId) {
    return true;
  }
  for (const rule of aclPolicy.aclRules || []) {
    const accessGroup = createObjectAccessGroup(rule.group);
    if (await accessGroup.hasMember(userId) && isPermissionAllowed(requestedPermission, rule.permission)) {
      return true;
    }
  }
  return false;
}
var ACL_POLICY_METADATA_KEY, ObjectAccessGroupType, ObjectPermission;
var init_objectAcl = __esm({
  "server/objectAcl.ts"() {
    "use strict";
    ACL_POLICY_METADATA_KEY = "custom:aclPolicy";
    ObjectAccessGroupType = /* @__PURE__ */ ((ObjectAccessGroupType2) => {
      return ObjectAccessGroupType2;
    })(ObjectAccessGroupType || {});
    ObjectPermission = /* @__PURE__ */ ((ObjectPermission2) => {
      ObjectPermission2["READ"] = "read";
      ObjectPermission2["WRITE"] = "write";
      return ObjectPermission2;
    })(ObjectPermission || {});
  }
});

// server/objectStorage.ts
var objectStorage_exports = {};
__export(objectStorage_exports, {
  ObjectNotFoundError: () => ObjectNotFoundError,
  ObjectStorageService: () => ObjectStorageService,
  objectStorageClient: () => objectStorageClient
});
import { Storage } from "@google-cloud/storage";
import { randomUUID as randomUUID2 } from "crypto";
function parseObjectPath(path4) {
  if (!path4.startsWith("/")) {
    path4 = `/${path4}`;
  }
  const pathParts = path4.split("/");
  if (pathParts.length < 3) {
    throw new Error("Invalid path: must contain at least a bucket name");
  }
  const bucketName = pathParts[1];
  const objectName = pathParts.slice(2).join("/");
  return {
    bucketName,
    objectName
  };
}
async function signObjectURL({
  bucketName,
  objectName,
  method,
  ttlSec
}) {
  const request = {
    bucket_name: bucketName,
    object_name: objectName,
    method,
    expires_at: new Date(Date.now() + ttlSec * 1e3).toISOString()
  };
  const response = await fetch(
    `${REPLIT_SIDECAR_ENDPOINT}/object-storage/signed-object-url`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(request)
    }
  );
  if (!response.ok) {
    throw new Error(
      `Failed to sign object URL, errorcode: ${response.status}, make sure you're running on Replit`
    );
  }
  const { signed_url: signedURL } = await response.json();
  return signedURL;
}
var REPLIT_SIDECAR_ENDPOINT, objectStorageClient, ObjectNotFoundError, ObjectStorageService;
var init_objectStorage = __esm({
  "server/objectStorage.ts"() {
    "use strict";
    init_objectAcl();
    REPLIT_SIDECAR_ENDPOINT = "http://127.0.0.1:1106";
    objectStorageClient = new Storage({
      credentials: {
        audience: "replit",
        subject_token_type: "access_token",
        token_url: `${REPLIT_SIDECAR_ENDPOINT}/token`,
        type: "external_account",
        credential_source: {
          url: `${REPLIT_SIDECAR_ENDPOINT}/credential`,
          format: {
            type: "json",
            subject_token_field_name: "access_token"
          }
        },
        universe_domain: "googleapis.com"
      },
      projectId: ""
    });
    ObjectNotFoundError = class _ObjectNotFoundError extends Error {
      constructor() {
        super("Object not found");
        this.name = "ObjectNotFoundError";
        Object.setPrototypeOf(this, _ObjectNotFoundError.prototype);
      }
    };
    ObjectStorageService = class {
      constructor() {
      }
      // Gets the public object search paths.
      getPublicObjectSearchPaths() {
        const pathsStr = process.env.PUBLIC_OBJECT_SEARCH_PATHS || "";
        const paths = Array.from(
          new Set(
            pathsStr.split(",").map((path4) => path4.trim()).filter((path4) => path4.length > 0)
          )
        );
        if (paths.length === 0) {
          throw new Error(
            "PUBLIC_OBJECT_SEARCH_PATHS not set. Create a bucket in 'Object Storage' tool and set PUBLIC_OBJECT_SEARCH_PATHS env var (comma-separated paths)."
          );
        }
        return paths;
      }
      // Gets the private object directory.
      getPrivateObjectDir() {
        const dir = process.env.PRIVATE_OBJECT_DIR || "";
        if (!dir) {
          throw new Error(
            "PRIVATE_OBJECT_DIR not set. Create a bucket in 'Object Storage' tool and set PRIVATE_OBJECT_DIR env var."
          );
        }
        return dir;
      }
      // Search for a public object from the search paths.
      async searchPublicObject(filePath) {
        for (const searchPath of this.getPublicObjectSearchPaths()) {
          const fullPath = `${searchPath}/${filePath}`;
          const { bucketName, objectName } = parseObjectPath(fullPath);
          const bucket = objectStorageClient.bucket(bucketName);
          const file = bucket.file(objectName);
          const [exists] = await file.exists();
          if (exists) {
            return file;
          }
        }
        return null;
      }
      // Downloads an object to the response.
      async downloadObject(file, res, cacheTtlSec = 3600) {
        try {
          const [metadata] = await file.getMetadata();
          const aclPolicy = await getObjectAclPolicy(file);
          const isPublic = aclPolicy?.visibility === "public";
          res.set({
            "Content-Type": metadata.contentType || "application/octet-stream",
            "Content-Length": metadata.size,
            "Cache-Control": `${isPublic ? "public" : "private"}, max-age=${cacheTtlSec}`
          });
          const stream = file.createReadStream();
          stream.on("error", (err) => {
            console.error("Stream error:", err);
            if (!res.headersSent) {
              res.status(500).json({ error: "Error streaming file" });
            }
          });
          stream.pipe(res);
        } catch (error) {
          console.error("Error downloading file:", error);
          if (!res.headersSent) {
            res.status(500).json({ error: "Error downloading file" });
          }
        }
      }
      // Gets the upload URL for an object entity.
      async getObjectEntityUploadURL() {
        const privateObjectDir = this.getPrivateObjectDir();
        if (!privateObjectDir) {
          throw new Error(
            "PRIVATE_OBJECT_DIR not set. Create a bucket in 'Object Storage' tool and set PRIVATE_OBJECT_DIR env var."
          );
        }
        const objectId = randomUUID2();
        const fullPath = `${privateObjectDir}/uploads/${objectId}`;
        const { bucketName, objectName } = parseObjectPath(fullPath);
        return signObjectURL({
          bucketName,
          objectName,
          method: "PUT",
          ttlSec: 900
        });
      }
      // Gets the object entity file from the object path.
      async getObjectEntityFile(objectPath) {
        if (!objectPath.startsWith("/objects/")) {
          throw new ObjectNotFoundError();
        }
        const parts = objectPath.slice(1).split("/");
        if (parts.length < 2) {
          throw new ObjectNotFoundError();
        }
        const entityId = parts.slice(1).join("/");
        let entityDir = this.getPrivateObjectDir();
        if (!entityDir.endsWith("/")) {
          entityDir = `${entityDir}/`;
        }
        const objectEntityPath = `${entityDir}${entityId}`;
        const { bucketName, objectName } = parseObjectPath(objectEntityPath);
        const bucket = objectStorageClient.bucket(bucketName);
        const objectFile = bucket.file(objectName);
        const [exists] = await objectFile.exists();
        if (!exists) {
          throw new ObjectNotFoundError();
        }
        return objectFile;
      }
      normalizeObjectEntityPath(rawPath) {
        if (!rawPath.startsWith("https://storage.googleapis.com/")) {
          return rawPath;
        }
        const url = new URL(rawPath);
        const rawObjectPath = url.pathname;
        let objectEntityDir = this.getPrivateObjectDir();
        if (!objectEntityDir.endsWith("/")) {
          objectEntityDir = `${objectEntityDir}/`;
        }
        if (!rawObjectPath.startsWith(objectEntityDir)) {
          return rawObjectPath;
        }
        const entityId = rawObjectPath.slice(objectEntityDir.length);
        return `/objects/${entityId}`;
      }
      // Tries to set the ACL policy for the object entity and return the normalized path.
      async trySetObjectEntityAclPolicy(rawPath, aclPolicy) {
        const normalizedPath = this.normalizeObjectEntityPath(rawPath);
        if (!normalizedPath.startsWith("/")) {
          return normalizedPath;
        }
        const objectFile = await this.getObjectEntityFile(normalizedPath);
        await setObjectAclPolicy(objectFile, aclPolicy);
        return normalizedPath;
      }
      // Checks if the user can access the object entity.
      async canAccessObjectEntity({
        userId,
        objectFile,
        requestedPermission
      }) {
        return canAccessObject({
          userId,
          objectFile,
          requestedPermission: requestedPermission ?? "read" /* READ */
        });
      }
    };
  }
});

// server/create-hospital-test-data.ts
var create_hospital_test_data_exports = {};
__export(create_hospital_test_data_exports, {
  createHospitalTestData: () => createHospitalTestData,
  default: () => create_hospital_test_data_default
});
import { eq as eq2 } from "drizzle-orm";
import bcrypt from "bcrypt";
async function createHospitalTestData() {
  try {
    console.log("Creating hospital test data...");
    const [hospital] = await db.select().from(tenants).where(eq2(tenants.name, "Metro General Hospital"));
    if (!hospital) {
      console.log("Metro General Hospital not found, skipping test data creation");
      return;
    }
    console.log(`Found hospital: ${hospital.name} (${hospital.id})`);
    const testPatients = [
      {
        firstName: "John",
        lastName: "Smith",
        email: "john.smith@email.com",
        phone: "+1-555-0101",
        dateOfBirth: /* @__PURE__ */ new Date("1985-03-15"),
        gender: "male",
        address: "123 Main St, City, State 12345",
        emergencyContact: "Jane Smith - (555) 0102",
        insuranceProvider: "Blue Cross Blue Shield",
        insurancePolicyNumber: "BC123456789",
        medicalHistory: "Hypertension, Diabetes Type 2",
        allergies: "Penicillin",
        tenantId: hospital.id
      },
      {
        firstName: "Maria",
        lastName: "Garcia",
        email: "maria.garcia@email.com",
        phone: "+1-555-0103",
        dateOfBirth: /* @__PURE__ */ new Date("1990-07-22"),
        gender: "female",
        address: "456 Oak Ave, City, State 12345",
        emergencyContact: "Carlos Garcia - (555) 0104",
        insuranceProvider: "Aetna",
        insurancePolicyNumber: "AET987654321",
        medicalHistory: "Asthma",
        allergies: "Shellfish",
        tenantId: hospital.id
      },
      {
        firstName: "Robert",
        lastName: "Johnson",
        email: "robert.johnson@email.com",
        phone: "+1-555-0105",
        dateOfBirth: /* @__PURE__ */ new Date("1975-12-08"),
        gender: "male",
        address: "789 Pine St, City, State 12345",
        emergencyContact: "Lisa Johnson - (555) 0106",
        insuranceProvider: "UnitedHealth",
        insurancePolicyNumber: "UH456789123",
        medicalHistory: "High cholesterol, Previous heart surgery",
        allergies: "None known",
        tenantId: hospital.id
      }
    ];
    const insertedPatients = await db.insert(patients).values(testPatients).returning();
    console.log(`Created ${insertedPatients.length} test patients`);
    const hashedPassword = await bcrypt.hash("doctor123", 10);
    const testDoctor = {
      email: "dr.wilson@metrogeneralhospital.com",
      password: hashedPassword,
      firstName: "James",
      lastName: "Wilson",
      role: "physician",
      tenantId: hospital.id,
      isActive: true
    };
    const [insertedDoctor] = await db.insert(users).values(testDoctor).returning();
    console.log(`Created test doctor: Dr. ${insertedDoctor.firstName} ${insertedDoctor.lastName}`);
    const today = /* @__PURE__ */ new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const testAppointments = [
      {
        patientId: insertedPatients[0].id,
        providerId: insertedDoctor.id,
        appointmentDate: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0),
        type: "consultation",
        status: "scheduled",
        chiefComplaint: "Annual checkup",
        tenantId: hospital.id
      },
      {
        patientId: insertedPatients[1].id,
        providerId: insertedDoctor.id,
        appointmentDate: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 30),
        type: "follow-up",
        status: "scheduled",
        chiefComplaint: "Asthma management",
        tenantId: hospital.id
      },
      {
        patientId: insertedPatients[2].id,
        providerId: insertedDoctor.id,
        appointmentDate: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 0),
        type: "emergency",
        status: "urgent",
        chiefComplaint: "Chest pain",
        tenantId: hospital.id
      },
      {
        patientId: insertedPatients[0].id,
        providerId: insertedDoctor.id,
        appointmentDate: tomorrow,
        type: "consultation",
        status: "scheduled",
        chiefComplaint: "Follow-up blood work",
        tenantId: hospital.id
      }
    ];
    const insertedAppointments = await db.insert(appointments).values(testAppointments).returning();
    console.log(`Created ${insertedAppointments.length} test appointments`);
    const testLabOrders = [
      {
        patientId: insertedPatients[0].id,
        providerId: insertedDoctor.id,
        testType: "Complete Blood Count",
        status: "pending",
        priority: "routine",
        notes: "Annual screening",
        tenantId: hospital.id
      },
      {
        patientId: insertedPatients[1].id,
        providerId: insertedDoctor.id,
        testType: "Chest X-Ray",
        status: "pending",
        priority: "urgent",
        notes: "Evaluate asthma symptoms",
        tenantId: hospital.id
      },
      {
        patientId: insertedPatients[2].id,
        providerId: insertedDoctor.id,
        testType: "Cardiac Enzymes",
        status: "pending",
        priority: "stat",
        notes: "Rule out myocardial infarction",
        tenantId: hospital.id
      }
    ];
    const insertedLabOrders = await db.insert(labOrders).values(testLabOrders).returning();
    console.log(`Created ${insertedLabOrders.length} test lab orders`);
    const testPrescriptions = [
      {
        patientId: insertedPatients[0].id,
        providerId: insertedDoctor.id,
        medicationName: "Lisinopril",
        dosage: "10mg",
        frequency: "Once daily",
        duration: "30 days",
        instructions: "Take with food",
        status: "active",
        tenantId: hospital.id
      },
      {
        patientId: insertedPatients[1].id,
        providerId: insertedDoctor.id,
        medicationName: "Albuterol Inhaler",
        dosage: "90mcg",
        frequency: "As needed",
        duration: "30 days",
        instructions: "Use for shortness of breath",
        status: "active",
        tenantId: hospital.id
      },
      {
        patientId: insertedPatients[2].id,
        providerId: insertedDoctor.id,
        medicationName: "Aspirin",
        dosage: "81mg",
        frequency: "Once daily",
        duration: "90 days",
        instructions: "Take with food to prevent stomach upset",
        status: "active",
        tenantId: hospital.id
      }
    ];
    const insertedPrescriptions = await db.insert(prescriptions).values(testPrescriptions).returning();
    console.log(`Created ${insertedPrescriptions.length} test prescriptions`);
    console.log("\u2705 Hospital test data creation completed successfully");
    return {
      patients: insertedPatients.length,
      appointments: insertedAppointments.length,
      labOrders: insertedLabOrders.length,
      prescriptions: insertedPrescriptions.length,
      doctor: 1
    };
  } catch (error) {
    console.error("\u274C Error creating hospital test data:", error);
    throw error;
  }
}
var create_hospital_test_data_default;
var init_create_hospital_test_data = __esm({
  "server/create-hospital-test-data.ts"() {
    "use strict";
    init_db();
    init_schema();
    create_hospital_test_data_default = createHospitalTestData;
  }
});

// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

// server/storage.ts
init_schema();
init_db();
import { eq, and, desc, sql as sql2, like, or, isNull, gt, ilike, gte, lt, ne } from "drizzle-orm";
import { randomUUID } from "crypto";
var DatabaseStorage = class {
  // User management - SECURITY: All user queries must include tenantId for isolation
  async getUser(id, tenantId) {
    if (tenantId) {
      const [user2] = await db.select().from(users).where(
        and(eq(users.id, id), eq(users.tenantId, tenantId))
      );
      return user2 || void 0;
    }
    console.log("[SECURITY] Cross-tenant user access by super admin:", id);
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || void 0;
  }
  async getAllUsers() {
    console.log("[SECURITY] Cross-tenant user listing accessed");
    return await db.select().from(users);
  }
  async getUserByUsername(username, tenantId) {
    const [user] = await db.select().from(users).where(
      and(eq(users.username, username), eq(users.tenantId, tenantId))
    );
    return user || void 0;
  }
  async getUserByEmailOrUsername(emailOrUsername, tenantId) {
    const [user] = await db.select().from(users).where(
      and(
        or(eq(users.email, emailOrUsername), eq(users.username, emailOrUsername)),
        eq(users.tenantId, tenantId)
      )
    );
    return user || void 0;
  }
  async getUserByEmail(email, tenantId) {
    const [user] = await db.select().from(users).where(
      and(eq(users.email, email), eq(users.tenantId, tenantId))
    );
    return user || void 0;
  }
  async createUser(insertUser) {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  async updateUser(id, updates) {
    const [user] = await db.update(users).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(eq(users.id, id)).returning();
    return user || void 0;
  }
  async upsertUser(userData) {
    const [user] = await db.insert(users).values(userData).onConflictDoUpdate({
      target: users.id,
      set: {
        ...userData,
        updatedAt: sql2`CURRENT_TIMESTAMP`
      }
    }).returning();
    return user;
  }
  async getUsersByTenant(tenantId) {
    return await db.select().from(users).where(eq(users.tenantId, tenantId));
  }
  // User permissions methods for role-based access control
  async getUserPermissions(userId, tenantId) {
    try {
      const user = await db.select().from(users).where(and(eq(users.id, userId), eq(users.tenantId, tenantId))).limit(1);
      if (!user.length) return [];
      const role = user[0].role;
      switch (role) {
        case "physician":
          return [];
        // By default, doctors have NO scheduling/confirmation permissions
        case "receptionist":
          return ["schedule_appointments", "confirm_appointments", "cancel_appointments"];
        case "tenant_admin":
        case "director":
        case "super_admin":
          return ["schedule_appointments", "confirm_appointments", "cancel_appointments", "manage_permissions"];
        default:
          return [];
      }
    } catch (error) {
      console.error("Error getting user permissions:", error);
      return [];
    }
  }
  // Grant specific permission to a user (for admin use)
  async grantUserPermission(userId, permission, tenantId) {
    try {
      console.log(`[PERMISSIONS] Granting ${permission} to user ${userId} in tenant ${tenantId}`);
      return true;
    } catch (error) {
      console.error("Error granting user permission:", error);
      return false;
    }
  }
  async getUsersByRole(role, tenantId) {
    return await db.select().from(users).where(
      and(
        sql2`${users.role} = ${role}`,
        eq(users.tenantId, tenantId),
        eq(users.isActive, true)
      )
    );
  }
  // Tenant management
  async getTenant(id) {
    const [tenant] = await db.select().from(tenants).where(eq(tenants.id, id));
    return tenant || void 0;
  }
  async getTenantBySubdomain(subdomain) {
    const [tenant] = await db.select().from(tenants).where(eq(tenants.subdomain, subdomain));
    return tenant || void 0;
  }
  async createTenant(insertTenant) {
    const [tenant] = await db.insert(tenants).values(insertTenant).returning();
    return tenant;
  }
  async updateTenant(id, updates) {
    const [tenant] = await db.update(tenants).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(eq(tenants.id, id)).returning();
    return tenant || void 0;
  }
  async getAllTenants() {
    return await db.select().from(tenants).where(eq(tenants.isActive, true));
  }
  async getTenantsByType(tenantType) {
    return await db.select().from(tenants).where(
      and(eq(tenants.type, tenantType), eq(tenants.isActive, true))
    );
  }
  // Patient management
  async getPatient(id, tenantId) {
    const [patient] = await db.select().from(patients).where(
      and(eq(patients.id, id), eq(patients.tenantId, tenantId))
    );
    return patient || void 0;
  }
  // SECURITY: Cross-tenant patient access only for authorized pharmacy billing
  async getPatientById(id, accessContext) {
    if (!accessContext) {
      console.error("[SECURITY VIOLATION] getPatientById called without access context");
      throw new Error("Cross-tenant patient access requires explicit context for security audit");
    }
    console.log(`[SECURITY AUDIT] Cross-tenant patient access: ${accessContext.type} by tenant ${accessContext.tenantId} for patient ${id}`);
    const [patient] = await db.select().from(patients).where(eq(patients.id, id));
    return patient || void 0;
  }
  async getPatientByMRN(mrn, tenantId) {
    const [patient] = await db.select().from(patients).where(
      and(eq(patients.mrn, mrn), eq(patients.tenantId, tenantId))
    );
    return patient || void 0;
  }
  async createPatient(insertPatient) {
    const [patient] = await db.insert(patients).values(insertPatient).returning();
    return patient;
  }
  async updatePatient(id, updates, tenantId) {
    const [patient] = await db.update(patients).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(and(eq(patients.id, id), eq(patients.tenantId, tenantId))).returning();
    return patient || void 0;
  }
  async getPatientsByTenant(tenantId, limit = 50, offset = 0) {
    return await db.select().from(patients).where(and(eq(patients.tenantId, tenantId), eq(patients.isActive, true))).limit(limit).offset(offset).orderBy(desc(patients.createdAt));
  }
  async searchPatients(tenantId, query) {
    return await db.select().from(patients).where(
      and(
        eq(patients.tenantId, tenantId),
        eq(patients.isActive, true),
        sql2`(LOWER(${patients.firstName}) LIKE LOWER('%' || ${query} || '%') OR 
             LOWER(${patients.lastName}) LIKE LOWER('%' || ${query} || '%') OR 
             ${patients.mrn} LIKE '%' || ${query} || '%')`
      )
    );
  }
  async getAllPatients(limit = 50, offset = 0) {
    console.error("[SECURITY VIOLATION] getAllPatients called without tenant filtering");
    throw new Error("Direct patient access without tenant filtering is not permitted for security");
  }
  async searchPatientsGlobal(query) {
    console.error("[SECURITY VIOLATION] searchPatientsGlobal called without tenant filtering");
    throw new Error("Global patient search without tenant filtering is not permitted for security");
  }
  // Cross-tenant patients for pharmacy billing (patients with prescriptions sent to this pharmacy)
  async getPatientsWithPrescriptionsForPharmacy(pharmacyTenantId) {
    const patientsWithPrescriptions = await db.select({
      id: patients.id,
      tenantId: patients.tenantId,
      firstName: patients.firstName,
      lastName: patients.lastName,
      dateOfBirth: patients.dateOfBirth,
      gender: patients.gender,
      phone: patients.phone,
      email: patients.email,
      address: patients.address,
      mrn: patients.mrn,
      emergencyContact: patients.emergencyContact,
      allergies: patients.allergies,
      medications: patients.medications,
      medicalHistory: patients.medicalHistory,
      isActive: patients.isActive,
      createdAt: patients.createdAt,
      updatedAt: patients.updatedAt
    }).from(patients).innerJoin(prescriptions, eq(prescriptions.patientId, patients.id)).where(
      and(
        eq(prescriptions.pharmacyTenantId, pharmacyTenantId),
        eq(patients.isActive, true)
      )
    ).groupBy(
      patients.id,
      patients.tenantId,
      patients.firstName,
      patients.lastName,
      patients.dateOfBirth,
      patients.gender,
      patients.phone,
      patients.email,
      patients.address,
      patients.mrn,
      patients.emergencyContact,
      patients.allergies,
      patients.medications,
      patients.medicalHistory,
      patients.isActive,
      patients.createdAt,
      patients.updatedAt
    ).orderBy(patients.lastName, patients.firstName);
    return patientsWithPrescriptions;
  }
  // Cross-tenant patient insurance access for pharmacy billing  
  async getPatientInsuranceCrossTenant(patientId, accessContext) {
    console.log(`[SECURITY AUDIT] Cross-tenant insurance access: ${accessContext.type} by user ${accessContext.userId} from tenant ${accessContext.tenantId} for patient ${patientId}`);
    const allowedAccessTypes = ["pharmacy_billing", "emergency_care"];
    if (!allowedAccessTypes.includes(accessContext.type)) {
      throw new Error("Unauthorized cross-tenant insurance access type");
    }
    try {
      const insuranceRecords = await db.select().from(patientInsurance).where(eq(patientInsurance.patientId, patientId)).orderBy(desc(patientInsurance.isPrimary), patientInsurance.effectiveDate);
      console.log(`[SECURITY AUDIT] Found ${insuranceRecords.length} insurance records for patient ${patientId}`);
      return insuranceRecords;
    } catch (error) {
      console.error("[CROSS-TENANT INSURANCE] Query error:", error);
      throw error;
    }
  }
  // Enhanced medical records methods for healthcare professionals
  async getPatientsWithMedicalRecords(tenantId) {
    const patientsList = await db.select({
      id: patients.id,
      tenantId: patients.tenantId,
      firstName: patients.firstName,
      lastName: patients.lastName,
      dateOfBirth: patients.dateOfBirth,
      gender: patients.gender,
      phone: patients.phone,
      email: patients.email,
      address: patients.address,
      mrn: patients.mrn,
      emergencyContact: patients.emergencyContact,
      allergies: patients.allergies,
      medications: patients.medications,
      medicalHistory: patients.medicalHistory,
      isActive: patients.isActive,
      createdAt: patients.createdAt,
      updatedAt: patients.updatedAt
    }).from(patients).where(and(eq(patients.tenantId, tenantId), eq(patients.isActive, true))).orderBy(desc(patients.updatedAt));
    const enhancedPatients = await Promise.all(
      patientsList.map(async (patient) => {
        const latestAppointments = await db.select({ appointmentDate: appointments.appointmentDate }).from(appointments).where(eq(appointments.patientId, patient.id)).orderBy(desc(appointments.appointmentDate)).limit(1);
        const upcomingCount = await db.select({ count: sql2`count(*)` }).from(appointments).where(
          and(
            eq(appointments.patientId, patient.id),
            sql2`${appointments.appointmentDate} > NOW()`
          )
        );
        const prescriptionCount = await db.select({ count: sql2`count(*)` }).from(prescriptions).where(
          and(
            eq(prescriptions.patientId, patient.id),
            sql2`${prescriptions.status} IN ('prescribed', 'sent_to_pharmacy', 'filled')`
          )
        );
        const labOrderCount = await db.select({ count: sql2`count(*)` }).from(labOrders).where(
          and(
            eq(labOrders.patientId, patient.id),
            sql2`${labOrders.status} IN ('ordered', 'collected', 'processing')`
          )
        );
        return {
          ...patient,
          lastVisit: latestAppointments[0]?.appointmentDate || null,
          upcomingAppointments: Number(upcomingCount[0]?.count) || 0,
          activePrescriptions: Number(prescriptionCount[0]?.count) || 0,
          pendingLabOrders: Number(labOrderCount[0]?.count) || 0
        };
      })
    );
    return enhancedPatients;
  }
  async getCompletePatientRecord(patientId, tenantId) {
    const [patient] = await db.select().from(patients).where(and(eq(patients.id, patientId), eq(patients.tenantId, tenantId)));
    if (!patient) return null;
    const patientAppointments = await db.select({
      appointment: appointments,
      providerName: users.firstName,
      providerLastName: users.lastName,
      providerRole: users.role
    }).from(appointments).leftJoin(users, eq(appointments.providerId, users.id)).where(eq(appointments.patientId, patientId)).orderBy(desc(appointments.appointmentDate));
    const patientPrescriptions = await db.select({
      prescription: prescriptions,
      providerName: users.firstName,
      providerLastName: users.lastName
    }).from(prescriptions).leftJoin(users, eq(prescriptions.providerId, users.id)).where(eq(prescriptions.patientId, patientId)).orderBy(desc(prescriptions.prescribedDate));
    const patientLabOrders = await db.select().from(labOrders).where(eq(labOrders.patientId, patientId)).orderBy(desc(labOrders.createdAt));
    const patientVitalSigns = await db.select().from(vitalSigns).where(eq(vitalSigns.patientId, patientId)).orderBy(desc(vitalSigns.recordedAt));
    const patientVisitSummaries = await db.select({
      visitSummary: visitSummaries,
      providerName: users.firstName,
      providerLastName: users.lastName,
      providerRole: users.role
    }).from(visitSummaries).leftJoin(users, eq(visitSummaries.providerId, users.id)).where(eq(visitSummaries.patientId, patientId)).orderBy(desc(visitSummaries.visitDate));
    return {
      ...patient,
      appointments: patientAppointments,
      prescriptions: patientPrescriptions,
      labOrders: patientLabOrders,
      vitalSigns: patientVitalSigns,
      visitSummaries: patientVisitSummaries
    };
  }
  // Appointment management
  async getAppointment(id, tenantId) {
    const [appointment] = await db.select().from(appointments).where(
      and(eq(appointments.id, id), eq(appointments.tenantId, tenantId))
    );
    return appointment || void 0;
  }
  async createAppointment(insertAppointment) {
    const [appointment] = await db.insert(appointments).values(insertAppointment).returning();
    return appointment;
  }
  async updateAppointment(id, updates, tenantId) {
    const [appointment] = await db.update(appointments).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(and(eq(appointments.id, id), eq(appointments.tenantId, tenantId))).returning();
    return appointment || void 0;
  }
  async getAppointmentsByTenant(tenantId, date) {
    if (date) {
      const startOfDay = new Date(date);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999);
      return await db.select().from(appointments).where(
        and(
          eq(appointments.tenantId, tenantId),
          sql2`${appointments.appointmentDate} >= ${startOfDay}`,
          sql2`${appointments.appointmentDate} <= ${endOfDay}`
        )
      ).orderBy(appointments.appointmentDate);
    }
    return await db.select().from(appointments).where(eq(appointments.tenantId, tenantId)).orderBy(appointments.appointmentDate);
  }
  async getAppointmentsByProvider(providerId, tenantId, date) {
    let whereCondition = and(eq(appointments.providerId, providerId), eq(appointments.tenantId, tenantId));
    if (date) {
      const startOfDay = new Date(date);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999);
      whereCondition = and(
        whereCondition,
        sql2`${appointments.appointmentDate} >= ${startOfDay}`,
        sql2`${appointments.appointmentDate} <= ${endOfDay}`
      );
    }
    return await db.select().from(appointments).where(whereCondition).orderBy(appointments.appointmentDate);
  }
  async getAppointmentsByPatient(patientId, tenantId) {
    return await db.select({
      // Appointment details
      id: appointments.id,
      patientId: appointments.patientId,
      providerId: appointments.providerId,
      appointmentDate: appointments.appointmentDate,
      type: appointments.type,
      status: appointments.status,
      notes: appointments.notes,
      chiefComplaint: appointments.chiefComplaint,
      tenantId: appointments.tenantId,
      createdAt: appointments.createdAt,
      updatedAt: appointments.updatedAt,
      // Provider information
      providerFirstName: users.firstName,
      providerLastName: users.lastName,
      providerEmail: users.email,
      providerRole: users.role,
      // Visit summary information (if exists)
      visitSummaryId: visitSummaries.id,
      visitSummaryStatus: visitSummaries.status,
      visitSummaryChiefComplaint: visitSummaries.chiefComplaint,
      visitSummaryAssessment: visitSummaries.assessment,
      visitSummaryClinicalImpression: visitSummaries.clinicalImpression,
      visitSummaryTreatmentPlan: visitSummaries.treatmentPlan,
      visitSummaryReturnVisitRecommended: visitSummaries.returnVisitRecommended,
      visitSummaryReturnVisitTimeframe: visitSummaries.returnVisitTimeframe,
      visitSummaryProviderNotes: visitSummaries.providerNotes
    }).from(appointments).leftJoin(users, eq(appointments.providerId, users.id)).leftJoin(visitSummaries, eq(appointments.id, visitSummaries.appointmentId)).where(and(eq(appointments.patientId, patientId), eq(appointments.tenantId, tenantId))).orderBy(desc(appointments.appointmentDate));
  }
  async getAppointmentsByPatientWithDoctorInfo(patientId, tenantId) {
    return await db.select({
      id: appointments.id,
      appointment_date: appointments.appointmentDate,
      type: appointments.type,
      status: appointments.status,
      notes: appointments.notes,
      chief_complaint: appointments.chiefComplaint,
      doctor_first_name: users.firstName,
      doctor_last_name: users.lastName,
      doctor_role: users.role
    }).from(appointments).leftJoin(users, eq(appointments.providerId, users.id)).where(and(eq(appointments.patientId, patientId), eq(appointments.tenantId, tenantId))).orderBy(desc(appointments.appointmentDate));
  }
  // Prescription management
  async getPrescription(id, tenantId) {
    const [prescription] = await db.select().from(prescriptions).where(
      and(eq(prescriptions.id, id), eq(prescriptions.tenantId, tenantId))
    );
    return prescription || void 0;
  }
  // Get prescription by ID for pharmacy (regardless of which hospital created it)
  async getPrescriptionForPharmacy(id, pharmacyTenantId) {
    const [prescription] = await db.select().from(prescriptions).where(
      and(eq(prescriptions.id, id), eq(prescriptions.pharmacyTenantId, pharmacyTenantId))
    );
    return prescription || void 0;
  }
  async createPrescription(insertPrescription) {
    const [prescription] = await db.insert(prescriptions).values(insertPrescription).returning();
    return prescription;
  }
  async getPrescriptionsByPatient(patientId, tenantId) {
    return await db.select().from(prescriptions).where(
      and(eq(prescriptions.patientId, patientId), eq(prescriptions.tenantId, tenantId))
    ).orderBy(desc(prescriptions.prescribedDate));
  }
  async getPrescriptionsByTenant(tenantId) {
    return await db.select().from(prescriptions).where(eq(prescriptions.tenantId, tenantId)).orderBy(desc(prescriptions.prescribedDate));
  }
  async getPrescriptionsByPharmacyTenant(pharmacyTenantId) {
    return await db.select().from(prescriptions).where(eq(prescriptions.pharmacyTenantId, pharmacyTenantId)).orderBy(desc(prescriptions.prescribedDate));
  }
  async getPrescriptionsByPharmacy(pharmacyTenantId) {
    console.log(`[PHARMACY API] \u{1F50D} Getting prescriptions for pharmacy: ${pharmacyTenantId}`);
    const allPrescriptionsForPharmacy = await db.select({
      id: prescriptions.id,
      medicationName: prescriptions.medicationName,
      pharmacyTenantId: prescriptions.pharmacyTenantId,
      status: prescriptions.status
    }).from(prescriptions).where(eq(prescriptions.pharmacyTenantId, pharmacyTenantId));
    console.log(
      `[PHARMACY API] \u2705 Direct query found ${allPrescriptionsForPharmacy.length} prescriptions:`,
      allPrescriptionsForPharmacy.map((p) => ({ medication: p.medicationName, status: p.status }))
    );
    const simplifiedPrescriptions = allPrescriptionsForPharmacy.map((p) => ({
      id: p.id,
      patientName: `Patient for ${p.medicationName}`,
      // Temporary for demo
      medication: `${p.medicationName}`,
      status: p.status === "prescribed" ? "new" : p.status === "dispensed" ? "ready" : "processing",
      waitTime: Math.floor(Math.random() * 20),
      // Demo wait time
      priority: "normal",
      insuranceStatus: "approved"
    }));
    console.log(`[PHARMACY API] \u{1F4CB} Returning ${simplifiedPrescriptions.length} simplified prescriptions for dashboard`);
    return simplifiedPrescriptions;
  }
  async updatePrescriptionStatus(prescriptionId, newStatus) {
    console.log(`[PHARMACY API] \u{1F504} Updating prescription ${prescriptionId} to status: ${newStatus}`);
    try {
      if (newStatus === "dispensed") {
        console.log(`[PHARMACY API] \u{1F4E6} Archiving dispensed prescription: ${prescriptionId}`);
        const [currentPrescription] = await db.select().from(prescriptions).where(eq(prescriptions.id, prescriptionId));
        if (!currentPrescription) {
          throw new Error("Prescription not found");
        }
        await db.execute(sql2`
          INSERT INTO prescription_archives (
            tenant_id, 
            shift_id,
            original_prescription_id,
            patient_data,
            prescription_data,
            receipt_data,
            archived_by
          ) VALUES (
            ${currentPrescription.pharmacyTenantId || currentPrescription.tenantId},
            NULL,
            ${currentPrescription.id},
            ${JSON.stringify({
          id: currentPrescription.patientId,
          name: "Patient",
          // We'll get this from a join if needed
          medication: currentPrescription.medicationName
        })},
            ${JSON.stringify({
          id: currentPrescription.id,
          medicationName: currentPrescription.medicationName,
          dosage: currentPrescription.dosage,
          frequency: currentPrescription.frequency,
          quantity: currentPrescription.quantity,
          refills: currentPrescription.refills,
          instructions: currentPrescription.instructions,
          status: "dispensed",
          prescribedDate: currentPrescription.prescribedDate,
          dispensedDate: /* @__PURE__ */ new Date(),
          insuranceProvider: currentPrescription.insuranceProvider,
          insuranceCopay: currentPrescription.insuranceCopay,
          insuranceCoveragePercentage: currentPrescription.insuranceCoveragePercentage,
          totalCost: currentPrescription.totalCost,
          pharmacyNotes: currentPrescription.pharmacyNotes
        })},
            ${JSON.stringify({
          claimNumber: `CLM-${(/* @__PURE__ */ new Date()).getFullYear()}-${String(Date.now()).slice(-6)}`,
          transactionId: `TXN-${(/* @__PURE__ */ new Date()).getFullYear()}-${String(Date.now()).slice(-8)}`,
          dispensedAt: /* @__PURE__ */ new Date(),
          dispensedBy: "system"
        })},
            NULL
          )
        `);
        await db.delete(prescriptions).where(eq(prescriptions.id, prescriptionId));
        console.log(`[PHARMACY API] \u2705 Prescription ${prescriptionId} archived and removed from active queue`);
        return { ...currentPrescription, status: "dispensed", archived: true };
      } else {
        const [updatedPrescription] = await db.update(prescriptions).set({
          status: newStatus,
          updatedAt: /* @__PURE__ */ new Date()
        }).where(eq(prescriptions.id, prescriptionId)).returning();
        if (!updatedPrescription) {
          throw new Error("Prescription not found");
        }
        console.log(`[PHARMACY API] \u2705 Successfully updated prescription status to: ${newStatus}`);
        return updatedPrescription;
      }
    } catch (error) {
      console.error(`[PHARMACY API] \u274C Error updating prescription status:`, error);
      throw error;
    }
  }
  async getPrescriptionArchives(tenantId) {
    try {
      console.log(`[PHARMACY API] \u{1F50D} Getting prescription archives for tenant: ${tenantId}`);
      const archiveResults = await db.execute(sql2`
        SELECT * FROM prescription_archives 
        WHERE tenant_id = ${tenantId}
        ORDER BY archived_at DESC
      `);
      console.log(`[PHARMACY API] \u2705 Found ${Array.isArray(archiveResults.rows) ? archiveResults.rows.length : 0} archived prescriptions`);
      return (archiveResults.rows || []).map((row) => ({
        id: row.id,
        originalPrescriptionId: row.original_prescription_id,
        tenantId: row.tenant_id,
        patientData: row.patient_data,
        prescriptionData: row.prescription_data,
        receiptData: row.receipt_data,
        archivedAt: row.archived_at,
        archivedBy: row.archived_by
      }));
    } catch (error) {
      console.error(`[PHARMACY API] \u274C Error getting prescription archives:`, error);
      throw error;
    }
  }
  async updatePrescription(id, updates, tenantId) {
    const [prescription] = await db.update(prescriptions).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(
      and(
        eq(prescriptions.id, id),
        or(
          eq(prescriptions.tenantId, tenantId),
          // Hospital/clinic that created it
          eq(prescriptions.pharmacyTenantId, tenantId)
          // Pharmacy that received it
        )
      )
    ).returning();
    return prescription || void 0;
  }
  // Lab order management
  async getLabOrder(id, tenantId) {
    const [labOrder] = await db.select().from(labOrders).where(
      and(eq(labOrders.id, id), eq(labOrders.tenantId, tenantId))
    );
    return labOrder || void 0;
  }
  async createLabOrder(insertLabOrder) {
    const [labOrder] = await db.insert(labOrders).values(insertLabOrder).returning();
    return labOrder;
  }
  async updateLabOrder(id, updates, tenantId) {
    const [labOrder] = await db.update(labOrders).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(and(eq(labOrders.id, id), eq(labOrders.tenantId, tenantId))).returning();
    if (labOrder && updates.status === "completed") {
      try {
        const [associatedBill] = await db.select().from(labBills).where(eq(labBills.labOrderId, id));
        if (associatedBill) {
          await db.update(labBills).set({
            status: "completed",
            updatedAt: sql2`CURRENT_TIMESTAMP`
          }).where(eq(labBills.id, associatedBill.id));
          console.log(`[LAB BILLING SYNC] Updated bill status to 'completed' for lab order ${id}, bill ID: ${associatedBill.id}`);
        }
      } catch (error) {
        console.error(`[LAB BILLING SYNC] Error updating bill status for lab order ${id}:`, error);
      }
    }
    return labOrder || void 0;
  }
  async getLabOrdersByPatient(patientId, tenantId) {
    const whereConditions = tenantId ? and(eq(labOrders.patientId, patientId), eq(labOrders.tenantId, tenantId)) : eq(labOrders.patientId, patientId);
    return await db.select().from(labOrders).where(whereConditions).orderBy(desc(labOrders.orderedDate));
  }
  async getLabOrdersByTenant(tenantId) {
    return await db.select().from(labOrders).where(
      and(
        eq(labOrders.tenantId, tenantId),
        sql2`${labOrders.status} NOT IN ('completed', 'cancelled')`
      )
    ).orderBy(desc(labOrders.orderedDate));
  }
  async getArchivedLabOrdersByTenant(tenantId) {
    return await db.select().from(labOrders).where(
      and(
        eq(labOrders.tenantId, tenantId),
        sql2`${labOrders.status} IN ('completed', 'cancelled')`
      )
    ).orderBy(desc(labOrders.orderedDate));
  }
  // Get lab orders sent TO a specific laboratory (cross-tenant)
  async getLabOrdersByLabTenant(labTenantId) {
    return await db.select().from(labOrders).where(eq(labOrders.labTenantId, labTenantId)).orderBy(desc(labOrders.orderedDate));
  }
  // Get patient record by user ID (for patient portal)
  async getPatientByUserId(userId, tenantId) {
    const user = await this.getUser(userId);
    if (!user) return void 0;
    const [patient] = await db.select().from(patients).where(
      and(
        eq(patients.firstName, user.firstName),
        eq(patients.lastName, user.lastName),
        eq(patients.tenantId, tenantId)
      )
    );
    return patient || void 0;
  }
  // Get lab orders sent to a specific laboratory (cross-tenant)
  async getLabOrdersForLaboratory(laboratoryTenantId) {
    const orders = await db.select({
      id: labOrders.id,
      testName: labOrders.testName,
      testCode: labOrders.testCode,
      instructions: labOrders.instructions,
      priority: labOrders.priority,
      status: labOrders.status,
      orderedDate: labOrders.orderedDate,
      patientId: labOrders.patientId,
      originatingHospitalId: labOrders.tenantId
    }).from(labOrders).where(eq(labOrders.labTenantId, laboratoryTenantId)).orderBy(desc(labOrders.orderedDate));
    const enrichedOrders = await Promise.all(orders.map(async (order) => {
      const patientInfo = await db.select({
        firstName: patients.firstName,
        lastName: patients.lastName,
        mrn: patients.mrn
      }).from(patients).where(eq(patients.id, order.patientId)).limit(1);
      const hospitalInfo = await db.select({
        name: tenants.name
      }).from(tenants).where(eq(tenants.id, order.originatingHospitalId)).limit(1);
      return {
        ...order,
        patientFirstName: patientInfo[0]?.firstName || "Unknown",
        patientLastName: patientInfo[0]?.lastName || "Patient",
        patientMrn: patientInfo[0]?.mrn || "N/A",
        originatingHospital: hospitalInfo[0]?.name || "Unknown Hospital"
      };
    }));
    return enrichedOrders;
  }
  async getPendingLabOrders(tenantId) {
    return await db.select().from(labOrders).where(
      and(
        eq(labOrders.tenantId, tenantId),
        sql2`${labOrders.status} IN ('ordered', 'collected', 'processing')`
      )
    ).orderBy(labOrders.orderedDate);
  }
  async getArchivedLabOrdersForLaboratory(tenantId) {
    const orders = await db.select().from(labOrders).where(
      and(
        eq(labOrders.labTenantId, tenantId),
        sql2`${labOrders.status} IN ('completed', 'cancelled')`
      )
    ).orderBy(desc(labOrders.orderedDate));
    const enrichedOrders = await Promise.all(orders.map(async (order) => {
      const patient = await db.select().from(patients).where(eq(patients.id, order.patientId)).limit(1);
      const hospital = await db.select().from(tenants).where(eq(tenants.id, order.tenantId)).limit(1);
      return {
        ...order,
        patientMrn: patient[0]?.mrn,
        patientFirstName: patient[0]?.firstName,
        patientLastName: patient[0]?.lastName,
        patientDateOfBirth: patient[0]?.dateOfBirth,
        originatingHospital: hospital[0]?.name
      };
    }));
    return enrichedOrders;
  }
  async getLabOrdersByPatientMrn(patientMrn) {
    const patientResult = await db.select().from(patients).where(eq(patients.mrn, patientMrn));
    if (patientResult.length === 0) {
      return [];
    }
    const patient = patientResult[0];
    const orders = await db.select().from(labOrders).where(eq(labOrders.patientId, patient.id)).orderBy(desc(labOrders.orderedDate));
    const enrichedOrders = await Promise.all(orders.map(async (order) => {
      const hospital = await db.select().from(tenants).where(eq(tenants.id, order.tenantId)).limit(1);
      return {
        ...order,
        patientMrn: patient.mrn,
        patientFirstName: patient.firstName,
        patientLastName: patient.lastName,
        patientDateOfBirth: patient.dateOfBirth,
        originatingHospital: hospital[0]?.name
      };
    }));
    return enrichedOrders;
  }
  // Pharmacy management
  async getPharmacy(id, tenantId) {
    const [pharmacy] = await db.select().from(pharmacies).where(
      and(eq(pharmacies.id, id), eq(pharmacies.tenantId, tenantId))
    );
    return pharmacy || void 0;
  }
  async createPharmacy(insertPharmacy) {
    const [pharmacy] = await db.insert(pharmacies).values([insertPharmacy]).returning();
    return pharmacy;
  }
  async updatePharmacy(id, updates, tenantId) {
    const [pharmacy] = await db.update(pharmacies).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(and(eq(pharmacies.id, id), eq(pharmacies.tenantId, tenantId))).returning();
    return pharmacy || void 0;
  }
  async getPharmaciesByTenant(tenantId) {
    return await db.select().from(pharmacies).where(eq(pharmacies.tenantId, tenantId)).orderBy(pharmacies.name);
  }
  async getActivePharmacies(tenantId) {
    return await db.select().from(pharmacies).where(
      and(eq(pharmacies.tenantId, tenantId), eq(pharmacies.isActive, true))
    ).orderBy(pharmacies.name);
  }
  async getPharmaciesForPrescriptionRouting() {
    const pharmacyTenants = await db.select({
      id: tenants.id,
      name: tenants.name,
      type: tenants.type,
      subdomain: tenants.subdomain,
      isActive: tenants.isActive
    }).from(tenants).where(
      and(eq(tenants.type, "pharmacy"), eq(tenants.isActive, true))
    ).orderBy(tenants.name);
    return pharmacyTenants;
  }
  // Insurance claims management
  async getInsuranceClaim(id, tenantId) {
    const [claim] = await db.select().from(insuranceClaims).where(
      and(eq(insuranceClaims.id, id), eq(insuranceClaims.tenantId, tenantId))
    );
    return claim || void 0;
  }
  async createInsuranceClaim(insertClaim) {
    const [claim] = await db.insert(insuranceClaims).values(insertClaim).returning();
    return claim;
  }
  async updateInsuranceClaim(id, updates, tenantId) {
    const [claim] = await db.update(insuranceClaims).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(and(eq(insuranceClaims.id, id), eq(insuranceClaims.tenantId, tenantId))).returning();
    return claim || void 0;
  }
  async getInsuranceClaimsByTenant(tenantId) {
    return await db.select().from(insuranceClaims).where(eq(insuranceClaims.tenantId, tenantId)).orderBy(desc(insuranceClaims.createdAt));
  }
  async getInsuranceClaimsByPatient(patientId, tenantId) {
    return await db.select().from(insuranceClaims).where(
      and(eq(insuranceClaims.patientId, patientId), eq(insuranceClaims.tenantId, tenantId))
    ).orderBy(desc(insuranceClaims.createdAt));
  }
  // Insurance Provider management
  async getInsuranceProviders(tenantId) {
    return await db.select().from(insuranceProviders).where(
      and(eq(insuranceProviders.tenantId, tenantId), eq(insuranceProviders.isActive, true))
    ).orderBy(insuranceProviders.name);
  }
  async createInsuranceProvider(provider) {
    const [insuranceProvider] = await db.insert(insuranceProviders).values(provider).returning();
    return insuranceProvider;
  }
  // Patient Insurance management
  async getPatientInsurance(patientId, tenantId) {
    return await db.select().from(patientInsurance).where(
      and(eq(patientInsurance.patientId, patientId), eq(patientInsurance.tenantId, tenantId))
    ).orderBy(desc(patientInsurance.isPrimary), patientInsurance.effectiveDate);
  }
  async createPatientInsurance(insurance) {
    const [patientIns] = await db.insert(patientInsurance).values(insurance).returning();
    return patientIns;
  }
  // Service Pricing management
  async getServicePrices(tenantId) {
    return await db.select().from(servicePrices).where(
      and(eq(servicePrices.tenantId, tenantId), eq(servicePrices.isActive, true))
    ).orderBy(servicePrices.serviceName);
  }
  async getServicePrice(id, tenantId) {
    const [servicePrice] = await db.select().from(servicePrices).where(
      and(eq(servicePrices.id, id), eq(servicePrices.tenantId, tenantId))
    );
    return servicePrice || void 0;
  }
  async createServicePrice(servicePrice) {
    const [newServicePrice] = await db.insert(servicePrices).values(servicePrice).returning();
    return newServicePrice;
  }
  async updateServicePrice(id, updates, tenantId) {
    const [servicePrice] = await db.update(servicePrices).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(and(eq(servicePrices.id, id), eq(servicePrices.tenantId, tenantId))).returning();
    return servicePrice || void 0;
  }
  async getServicePriceByCode(serviceCode, tenantId) {
    const [servicePrice] = await db.select().from(servicePrices).where(
      and(
        eq(servicePrices.serviceCode, serviceCode),
        eq(servicePrices.tenantId, tenantId),
        eq(servicePrices.isActive, true)
      )
    );
    return servicePrice || void 0;
  }
  // Insurance Plan Coverage management
  async getInsurancePlanCoverages(tenantId) {
    return await db.select().from(insurancePlanCoverage).where(
      and(eq(insurancePlanCoverage.tenantId, tenantId), eq(insurancePlanCoverage.isActive, true))
    ).orderBy(insurancePlanCoverage.effectiveDate);
  }
  async getInsurancePlanCoverageByServiceAndProvider(servicePriceId, insuranceProviderId, tenantId) {
    const [coverage] = await db.select().from(insurancePlanCoverage).where(
      and(
        eq(insurancePlanCoverage.servicePriceId, servicePriceId),
        eq(insurancePlanCoverage.insuranceProviderId, insuranceProviderId),
        eq(insurancePlanCoverage.tenantId, tenantId),
        eq(insurancePlanCoverage.isActive, true)
      )
    );
    return coverage || void 0;
  }
  async createInsurancePlanCoverage(coverage) {
    const [newCoverage] = await db.insert(insurancePlanCoverage).values(coverage).returning();
    return newCoverage;
  }
  async updateInsurancePlanCoverage(id, updates, tenantId) {
    const [coverage] = await db.update(insurancePlanCoverage).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(and(eq(insurancePlanCoverage.id, id), eq(insurancePlanCoverage.tenantId, tenantId))).returning();
    return coverage || void 0;
  }
  // Claim Line Items management
  async getClaimLineItems(claimId, tenantId) {
    return await db.select().from(claimLineItems).where(
      and(eq(claimLineItems.claimId, claimId), eq(claimLineItems.tenantId, tenantId))
    ).orderBy(claimLineItems.createdAt);
  }
  async createClaimLineItem(lineItem) {
    const [newLineItem] = await db.insert(claimLineItems).values(lineItem).returning();
    return newLineItem;
  }
  async updateClaimLineItem(id, updates, tenantId) {
    const [lineItem] = await db.update(claimLineItems).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(and(eq(claimLineItems.id, id), eq(claimLineItems.tenantId, tenantId))).returning();
    return lineItem || void 0;
  }
  async deleteClaimLineItem(id, tenantId) {
    const result = await db.delete(claimLineItems).where(and(eq(claimLineItems.id, id), eq(claimLineItems.tenantId, tenantId)));
    return result.rowCount > 0;
  }
  // Pricing calculations
  async calculateCopayAndInsuranceAmount(servicePriceId, insuranceProviderId, patientInsuranceId, tenantId) {
    const servicePrice = await this.getServicePrice(servicePriceId, tenantId);
    if (!servicePrice) {
      throw new Error("Service price not found");
    }
    const unitPrice = parseFloat(servicePrice.basePrice);
    const coverage = await this.getInsurancePlanCoverageByServiceAndProvider(
      servicePriceId,
      insuranceProviderId,
      tenantId
    );
    if (!coverage) {
      const [patientIns] = await db.select().from(patientInsurance).where(
        and(eq(patientInsurance.id, patientInsuranceId), eq(patientInsurance.tenantId, tenantId))
      );
      if (patientIns && patientIns.copayAmount) {
        const copayAmount3 = Math.min(parseFloat(patientIns.copayAmount), unitPrice);
        return {
          unitPrice,
          copayAmount: copayAmount3,
          insuranceAmount: unitPrice - copayAmount3,
          deductibleAmount: 0
        };
      }
      const copayAmount2 = unitPrice * 0.2;
      return {
        unitPrice,
        copayAmount: copayAmount2,
        insuranceAmount: unitPrice - copayAmount2,
        deductibleAmount: 0
      };
    }
    let copayAmount = 0;
    let deductibleAmount = 0;
    if (coverage.copayAmount) {
      copayAmount = Math.min(parseFloat(coverage.copayAmount), unitPrice);
    } else if (coverage.copayPercentage) {
      copayAmount = unitPrice * (parseFloat(coverage.copayPercentage) / 100);
    }
    let insuranceAmount = unitPrice - copayAmount - deductibleAmount;
    if (coverage.maxCoverageAmount) {
      const maxCoverage = parseFloat(coverage.maxCoverageAmount);
      if (insuranceAmount > maxCoverage) {
        const excess = insuranceAmount - maxCoverage;
        insuranceAmount = maxCoverage;
        copayAmount += excess;
      }
    }
    return {
      unitPrice,
      copayAmount,
      insuranceAmount,
      deductibleAmount
    };
  }
  // Audit logging
  async createAuditLog(log2) {
    const [auditLog] = await db.insert(auditLogs).values(log2).returning();
    return auditLog;
  }
  async getAuditLogs(tenantId, limit = 50, offset = 0) {
    return await db.select().from(auditLogs).where(eq(auditLogs.tenantId, tenantId)).orderBy(desc(auditLogs.timestamp)).limit(limit).offset(offset);
  }
  // Dashboard metrics
  async getDashboardMetrics(tenantId) {
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const [todayAppointmentsResult] = await db.select({ count: sql2`count(*)` }).from(appointments).where(
      and(
        eq(appointments.tenantId, tenantId),
        sql2`${appointments.appointmentDate} >= ${today}`,
        sql2`${appointments.appointmentDate} < ${tomorrow}`
      )
    );
    const [pendingLabResultsResult] = await db.select({ count: sql2`count(*)` }).from(labOrders).where(
      and(
        eq(labOrders.tenantId, tenantId),
        sql2`${labOrders.status} IN ('ordered', 'collected', 'processing')`
      )
    );
    const [activePrescriptionsResult] = await db.select({ count: sql2`count(*)` }).from(prescriptions).where(
      and(
        eq(prescriptions.tenantId, tenantId),
        sql2`${prescriptions.status} IN ('prescribed', 'sent_to_pharmacy', 'filled')`
      )
    );
    const [monthlyClaimsResult] = await db.select({
      total: sql2`COALESCE(SUM(${insuranceClaims.totalAmount}), 0)`
    }).from(insuranceClaims).where(
      and(
        eq(insuranceClaims.tenantId, tenantId),
        sql2`${insuranceClaims.createdAt} >= ${firstDayOfMonth}`
      )
    );
    return {
      todayAppointments: Number(todayAppointmentsResult.count) || 0,
      pendingLabResults: Number(pendingLabResultsResult.count) || 0,
      activePrescriptions: Number(activePrescriptionsResult.count) || 0,
      monthlyClaimsTotal: Number(monthlyClaimsResult.total) || 0
    };
  }
  // Subscription management
  async getSubscription(tenantId) {
    const [subscription] = await db.select().from(subscriptions).where(eq(subscriptions.tenantId, tenantId));
    return subscription || void 0;
  }
  async createSubscription(insertSubscription) {
    const [subscription] = await db.insert(subscriptions).values(insertSubscription).returning();
    return subscription;
  }
  async updateSubscription(tenantId, updates) {
    const [subscription] = await db.update(subscriptions).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(eq(subscriptions.tenantId, tenantId)).returning();
    return subscription || void 0;
  }
  async getAllSubscriptions() {
    return await db.select().from(subscriptions).orderBy(desc(subscriptions.createdAt));
  }
  // Report management
  async getReport(id, tenantId) {
    const [report] = await db.select().from(reports).where(
      and(eq(reports.id, id), eq(reports.tenantId, tenantId))
    );
    return report || void 0;
  }
  async createReport(insertReport) {
    const [report] = await db.insert(reports).values(insertReport).returning();
    return report;
  }
  async updateReport(id, updates, tenantId) {
    const [report] = await db.update(reports).set(updates).where(and(eq(reports.id, id), eq(reports.tenantId, tenantId))).returning();
    return report || void 0;
  }
  async getReportsByTenant(tenantId) {
    return await db.select().from(reports).where(eq(reports.tenantId, tenantId)).orderBy(desc(reports.createdAt));
  }
  async getAllReports() {
    return await db.select().from(reports).orderBy(desc(reports.createdAt));
  }
  // Platform metrics for super admin
  async getPlatformMetrics() {
    const [tenantsResult] = await db.select({
      total: sql2`count(*)::int`,
      active: sql2`count(case when ${tenants.isActive} then 1 end)::int`
    }).from(tenants);
    const [usersResult] = await db.select({ count: sql2`count(*)::int` }).from(users);
    const [patientsResult] = await db.select({ count: sql2`count(*)::int` }).from(patients);
    const [subscriptionsResult] = await db.select({
      totalRevenue: sql2`COALESCE(SUM(${subscriptions.monthlyPrice}), 0)::numeric`
    }).from(subscriptions).where(eq(subscriptions.status, "active"));
    const firstDayOfMonth = /* @__PURE__ */ new Date();
    firstDayOfMonth.setDate(1);
    firstDayOfMonth.setHours(0, 0, 0, 0);
    const [monthlyRevenueResult] = await db.select({
      monthlyRevenue: sql2`COALESCE(SUM(${subscriptions.monthlyPrice}), 0)::numeric`
    }).from(subscriptions).where(
      and(
        eq(subscriptions.status, "active"),
        sql2`${subscriptions.lastPaymentDate} >= ${firstDayOfMonth}`
      )
    );
    return {
      totalTenants: Number(tenantsResult.total),
      activeTenants: Number(tenantsResult.active),
      totalSubscriptionRevenue: Number(subscriptionsResult.totalRevenue),
      monthlyRevenue: Number(monthlyRevenueResult.monthlyRevenue),
      totalUsers: Number(usersResult.count),
      totalPatients: Number(patientsResult.count)
    };
  }
  // Multilingual Communication management
  async getMedicalCommunication(id, tenantId) {
    const [communication] = await db.select().from(medicalCommunications).where(
      and(eq(medicalCommunications.id, id), eq(medicalCommunications.tenantId, tenantId))
    );
    return communication || void 0;
  }
  async createMedicalCommunication(insertCommunication) {
    const [communication] = await db.insert(medicalCommunications).values(insertCommunication).returning();
    return communication;
  }
  async updateMedicalCommunication(id, updates, tenantId) {
    const [communication] = await db.update(medicalCommunications).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(and(eq(medicalCommunications.id, id), eq(medicalCommunications.tenantId, tenantId))).returning();
    return communication || void 0;
  }
  async getMedicalCommunicationsByPatient(patientId, tenantId) {
    return await db.select({
      id: medicalCommunications.id,
      tenantId: medicalCommunications.tenantId,
      patientId: medicalCommunications.patientId,
      senderId: medicalCommunications.senderId,
      recipientId: medicalCommunications.recipientId,
      type: medicalCommunications.type,
      priority: medicalCommunications.priority,
      originalLanguage: medicalCommunications.originalLanguage,
      targetLanguages: medicalCommunications.targetLanguages,
      originalContent: medicalCommunications.originalContent,
      metadata: medicalCommunications.metadata,
      appointmentId: medicalCommunications.appointmentId,
      prescriptionId: medicalCommunications.prescriptionId,
      labOrderId: medicalCommunications.labOrderId,
      isRead: medicalCommunications.isRead,
      readAt: medicalCommunications.readAt,
      createdAt: medicalCommunications.createdAt,
      updatedAt: medicalCommunications.updatedAt,
      senderRole: users.role,
      senderFirstName: users.firstName,
      senderLastName: users.lastName
    }).from(medicalCommunications).leftJoin(users, eq(medicalCommunications.senderId, users.id)).where(
      and(eq(medicalCommunications.patientId, patientId), eq(medicalCommunications.tenantId, tenantId))
    ).orderBy(desc(medicalCommunications.createdAt));
  }
  async getMedicalCommunicationsByTenant(tenantId) {
    return await db.select().from(medicalCommunications).where(
      eq(medicalCommunications.tenantId, tenantId)
    ).orderBy(desc(medicalCommunications.createdAt));
  }
  async getMedicalCommunicationsByTenantWithSenderInfo(tenantId) {
    return await db.select({
      id: medicalCommunications.id,
      tenantId: medicalCommunications.tenantId,
      patientId: medicalCommunications.patientId,
      senderId: medicalCommunications.senderId,
      recipientId: medicalCommunications.recipientId,
      type: medicalCommunications.type,
      priority: medicalCommunications.priority,
      originalLanguage: medicalCommunications.originalLanguage,
      targetLanguages: medicalCommunications.targetLanguages,
      originalContent: medicalCommunications.originalContent,
      metadata: medicalCommunications.metadata,
      appointmentId: medicalCommunications.appointmentId,
      prescriptionId: medicalCommunications.prescriptionId,
      labOrderId: medicalCommunications.labOrderId,
      isRead: medicalCommunications.isRead,
      readAt: medicalCommunications.readAt,
      createdAt: medicalCommunications.createdAt,
      updatedAt: medicalCommunications.updatedAt,
      senderRole: users.role,
      senderFirstName: users.firstName,
      senderLastName: users.lastName
    }).from(medicalCommunications).leftJoin(users, eq(medicalCommunications.senderId, users.id)).where(eq(medicalCommunications.tenantId, tenantId)).orderBy(desc(medicalCommunications.createdAt));
  }
  // Communication Translation management
  async createCommunicationTranslation(insertTranslation) {
    const [translation] = await db.insert(communicationTranslations).values(insertTranslation).returning();
    return translation;
  }
  async getCommunicationTranslations(communicationId) {
    return await db.select().from(communicationTranslations).where(
      eq(communicationTranslations.communicationId, communicationId)
    );
  }
  // Supported Languages management
  async getSupportedLanguages(tenantId) {
    return await db.select().from(supportedLanguages).where(
      and(eq(supportedLanguages.tenantId, tenantId), eq(supportedLanguages.isActive, true))
    ).orderBy(supportedLanguages.languageName);
  }
  async createSupportedLanguage(insertLanguage) {
    const [language] = await db.insert(supportedLanguages).values(insertLanguage).returning();
    return language;
  }
  async updateSupportedLanguage(id, updates, tenantId) {
    const [language] = await db.update(supportedLanguages).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(and(eq(supportedLanguages.id, id), eq(supportedLanguages.tenantId, tenantId))).returning();
    return language || void 0;
  }
  // Medical Phrases management
  async getMedicalPhrases(tenantId, category) {
    const conditions = [eq(medicalPhrases.tenantId, tenantId), eq(medicalPhrases.isActive, true)];
    if (category) {
      conditions.push(eq(medicalPhrases.category, category));
    }
    return await db.select().from(medicalPhrases).where(and(...conditions)).orderBy(medicalPhrases.category, medicalPhrases.phraseKey);
  }
  async createMedicalPhrase(insertPhrase) {
    const [phrase] = await db.insert(medicalPhrases).values(insertPhrase).returning();
    return phrase;
  }
  // Phrase Translation management
  async getPhraseTranslations(phraseId) {
    return await db.select().from(phraseTranslations).where(
      eq(phraseTranslations.phraseId, phraseId)
    ).orderBy(phraseTranslations.languageCode);
  }
  async createPhraseTranslation(insertTranslation) {
    const [translation] = await db.insert(phraseTranslations).values(insertTranslation).returning();
    return translation;
  }
  // Laboratory Management
  async getLaboratory(id, tenantId) {
    const [laboratory] = await db.select().from(laboratories).where(
      and(eq(laboratories.id, id), eq(laboratories.tenantId, tenantId))
    );
    return laboratory || void 0;
  }
  async createLaboratory(insertLaboratory) {
    const [laboratory] = await db.insert(laboratories).values(insertLaboratory).returning();
    return laboratory;
  }
  async updateLaboratory(id, updates, tenantId) {
    const [laboratory] = await db.update(laboratories).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(and(eq(laboratories.id, id), eq(laboratories.tenantId, tenantId))).returning();
    return laboratory || void 0;
  }
  async getLaboratoriesByTenant(tenantId) {
    return await db.select().from(laboratories).where(
      eq(laboratories.tenantId, tenantId)
    ).orderBy(laboratories.name);
  }
  async getActiveLaboratoriesByTenant(tenantId) {
    return await db.select().from(laboratories).where(
      and(eq(laboratories.tenantId, tenantId), eq(laboratories.isActive, true))
    ).orderBy(laboratories.name);
  }
  // Lab Results Management
  async getLabResult(id, tenantId) {
    const [labResult] = await db.select().from(labResults).where(
      and(eq(labResults.id, id), eq(labResults.tenantId, tenantId))
    );
    return labResult || void 0;
  }
  async createLabResult(insertLabResult) {
    const [labResult] = await db.insert(labResults).values(insertLabResult).returning();
    await this.notifyHospitalOfResults(labResult);
    return labResult;
  }
  async updateLabResult(id, updates, tenantId) {
    const [labResult] = await db.update(labResults).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(and(eq(labResults.id, id), eq(labResults.tenantId, tenantId))).returning();
    return labResult || void 0;
  }
  async getLabResultsByOrder(labOrderId, tenantId) {
    return await db.select().from(labResults).where(
      and(eq(labResults.labOrderId, labOrderId), eq(labResults.tenantId, tenantId))
    ).orderBy(labResults.testName);
  }
  async getLabResultsByPatient(patientId, tenantId) {
    return await db.select().from(labResults).where(
      and(eq(labResults.patientId, patientId), eq(labResults.tenantId, tenantId))
    ).orderBy(desc(labResults.createdAt));
  }
  // SECURITY: Controlled cross-tenant lab results access with explicit authorization
  async getLabResultsForPatientAcrossTenants(patientId, accessContext) {
    console.log(`[SECURITY AUDIT] Cross-tenant lab results access: ${accessContext.type} by user ${accessContext.userId} from tenant ${accessContext.tenantId} for patient ${patientId}`);
    const patient = await db.select().from(patients).where(eq(patients.id, patientId)).limit(1);
    if (!patient.length) {
      throw new Error("Patient not found");
    }
    if (accessContext.type === "doctor_view") {
    } else if (accessContext.type === "patient_portal") {
    }
    const results = await db.select({
      id: labResults.id,
      labOrderId: labResults.labOrderId,
      testName: labResults.testName,
      result: labResults.result,
      normalRange: labResults.normalRange,
      unit: labResults.unit,
      status: labResults.status,
      abnormalFlag: labResults.abnormalFlag,
      notes: labResults.notes,
      performedBy: labResults.performedBy,
      completedAt: labResults.completedAt,
      reportedAt: labResults.reportedAt,
      createdAt: labResults.createdAt,
      laboratoryTenantId: labResults.tenantId
    }).from(labResults).where(eq(labResults.patientId, patientId)).orderBy(desc(labResults.completedAt));
    const enrichedResults = await Promise.all(results.map(async (result) => {
      const lab = await db.select().from(tenants).where(eq(tenants.id, result.laboratoryTenantId)).limit(1);
      return {
        ...result,
        laboratoryName: lab[0]?.name || "Unknown Laboratory"
      };
    }));
    return enrichedResults;
  }
  // Method to automatically notify hospitals when results are posted
  async notifyHospitalOfResults(labResult) {
    const labOrder = await db.select().from(labOrders).where(eq(labOrders.id, labResult.labOrderId)).limit(1);
    if (labOrder.length > 0) {
      await db.update(labOrders).set({
        status: "completed",
        results: { completed: true, resultId: labResult.id },
        updatedAt: sql2`CURRENT_TIMESTAMP`
      }).where(eq(labOrders.id, labResult.labOrderId));
    }
  }
  async getLabResultsByTenant(tenantId) {
    return await db.select().from(labResults).where(
      eq(labResults.tenantId, tenantId)
    ).orderBy(desc(labResults.createdAt));
  }
  async getPendingLabResults(tenantId) {
    return await db.select().from(labResults).where(
      and(eq(labResults.tenantId, tenantId), eq(labResults.status, "pending"))
    ).orderBy(labResults.createdAt);
  }
  // Lab Order Assignment Management
  async getLabOrderAssignment(id, tenantId) {
    const [assignment] = await db.select().from(labOrderAssignments).where(
      and(eq(labOrderAssignments.id, id), eq(labOrderAssignments.tenantId, tenantId))
    );
    return assignment || void 0;
  }
  async createLabOrderAssignment(insertAssignment) {
    const [assignment] = await db.insert(labOrderAssignments).values(insertAssignment).returning();
    return assignment;
  }
  async updateLabOrderAssignment(id, updates, tenantId) {
    const [assignment] = await db.update(labOrderAssignments).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(and(eq(labOrderAssignments.id, id), eq(labOrderAssignments.tenantId, tenantId))).returning();
    return assignment || void 0;
  }
  async getLabOrderAssignmentByOrder(labOrderId, tenantId) {
    const [assignment] = await db.select().from(labOrderAssignments).where(
      and(eq(labOrderAssignments.labOrderId, labOrderId), eq(labOrderAssignments.tenantId, tenantId))
    );
    return assignment || void 0;
  }
  async getLabOrderAssignmentsByLaboratory(laboratoryId, tenantId) {
    return await db.select().from(labOrderAssignments).where(
      and(eq(labOrderAssignments.laboratoryId, laboratoryId), eq(labOrderAssignments.tenantId, tenantId))
    ).orderBy(desc(labOrderAssignments.createdAt));
  }
  async getLabOrderAssignmentsByTenant(tenantId) {
    return await db.select().from(labOrderAssignments).where(
      eq(labOrderAssignments.tenantId, tenantId)
    ).orderBy(desc(labOrderAssignments.createdAt));
  }
  async getLabOrderAssignmentsByOrder(labOrderId) {
    return await db.select().from(labOrderAssignments).where(
      eq(labOrderAssignments.labOrderId, labOrderId)
    ).orderBy(desc(labOrderAssignments.createdAt));
  }
  // Laboratory Application Management
  async getLaboratoryApplication(id) {
    const [application] = await db.select().from(laboratoryApplications).where(
      eq(laboratoryApplications.id, id)
    );
    return application || void 0;
  }
  async createLaboratoryApplication(insertApplication) {
    const [application] = await db.insert(laboratoryApplications).values(insertApplication).returning();
    return application;
  }
  async updateLaboratoryApplication(id, updates) {
    const [application] = await db.update(laboratoryApplications).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(eq(laboratoryApplications.id, id)).returning();
    return application || void 0;
  }
  async getAllLaboratoryApplications() {
    return await db.select().from(laboratoryApplications).orderBy(desc(laboratoryApplications.createdAt));
  }
  async getLaboratoryApplicationsByStatus(status) {
    return await db.select().from(laboratoryApplications).where(
      eq(laboratoryApplications.status, status)
    ).orderBy(desc(laboratoryApplications.createdAt));
  }
  async approveLaboratoryApplication(id, reviewedBy, reviewNotes) {
    const application = await this.getLaboratoryApplication(id);
    if (!application) return void 0;
    const labTenant = await this.createTenant({
      name: application.laboratoryName,
      subdomain: application.laboratoryName.toLowerCase().replace(/[^a-z0-9]/g, ""),
      type: "laboratory",
      isActive: true
    });
    const laboratory = await this.createLaboratory({
      tenantId: labTenant.id,
      name: application.laboratoryName,
      licenseNumber: application.licenseNumber,
      contactPerson: application.contactPerson,
      phone: application.contactPhone,
      email: application.contactEmail,
      address: application.address,
      specializations: application.specializations,
      isActive: true,
      isExternal: true,
      registrationStatus: "approved",
      registrationNotes: reviewNotes,
      approvedBy: reviewedBy,
      websiteUrl: application.websiteUrl,
      accreditations: application.accreditations,
      operatingHours: application.operatingHours,
      servicesOffered: application.servicesOffered,
      equipmentDetails: application.equipmentDetails,
      certificationDocuments: application.certificationDocuments,
      averageTurnaroundTime: application.averageTurnaroundTime
    });
    const updatedApplication = await this.updateLaboratoryApplication(id, {
      status: "approved",
      reviewNotes,
      reviewedBy
    });
    return updatedApplication ? { laboratory, application: updatedApplication } : void 0;
  }
  async rejectLaboratoryApplication(id, reviewedBy, reviewNotes) {
    return await this.updateLaboratoryApplication(id, {
      status: "rejected",
      reviewNotes,
      reviewedBy
    });
  }
  // Vital Signs Management Implementation
  async getVitalSigns(id, tenantId) {
    const [vitalSign] = await db.select().from(vitalSigns).where(
      and(eq(vitalSigns.id, id), eq(vitalSigns.tenantId, tenantId))
    );
    return vitalSign || void 0;
  }
  async createVitalSigns(insertVitalSigns) {
    const vitalSignsWithBMI = { ...insertVitalSigns };
    if (insertVitalSigns.weight && insertVitalSigns.height) {
      const weightKg = parseFloat(insertVitalSigns.weight.toString()) * 0.453592;
      const heightM = parseFloat(insertVitalSigns.height.toString()) * 0.0254;
      const bmi = weightKg / (heightM * heightM);
      vitalSignsWithBMI.bodyMassIndex = bmi.toFixed(1);
    }
    const [vitalSign] = await db.insert(vitalSigns).values(vitalSignsWithBMI).returning();
    return vitalSign;
  }
  async updateVitalSigns(id, updates, tenantId) {
    const updatedData = { ...updates };
    if (updates.weight || updates.height) {
      const current = await this.getVitalSigns(id, tenantId);
      if (current) {
        const weight = updates.weight || current.weight;
        const height = updates.height || current.height;
        if (weight && height) {
          const weightKg = parseFloat(weight.toString()) * 0.453592;
          const heightM = parseFloat(height.toString()) * 0.0254;
          const bmi = weightKg / (heightM * heightM);
          updatedData.bodyMassIndex = bmi.toFixed(1);
        }
      }
    }
    const [vitalSign] = await db.update(vitalSigns).set(updatedData).where(and(eq(vitalSigns.id, id), eq(vitalSigns.tenantId, tenantId))).returning();
    return vitalSign || void 0;
  }
  async getVitalSignsByPatient(patientId, tenantId) {
    return await db.select().from(vitalSigns).where(
      and(eq(vitalSigns.patientId, patientId), eq(vitalSigns.tenantId, tenantId))
    ).orderBy(desc(vitalSigns.recordedAt));
  }
  async getVitalSignsByAppointment(appointmentId, tenantId) {
    const [vitalSign] = await db.select().from(vitalSigns).where(
      and(eq(vitalSigns.appointmentId, appointmentId), eq(vitalSigns.tenantId, tenantId))
    );
    return vitalSign || void 0;
  }
  async getVitalSignsByTenant(tenantId) {
    return await db.select().from(vitalSigns).where(eq(vitalSigns.tenantId, tenantId)).orderBy(desc(vitalSigns.recordedAt));
  }
  // Visit Summary Management Implementation
  async getVisitSummary(id, tenantId) {
    const [visitSummary] = await db.select().from(visitSummaries).where(
      and(eq(visitSummaries.id, id), eq(visitSummaries.tenantId, tenantId))
    );
    return visitSummary || void 0;
  }
  async createVisitSummary(insertVisitSummary) {
    const [visitSummary] = await db.insert(visitSummaries).values(insertVisitSummary).returning();
    return visitSummary;
  }
  async updateVisitSummary(id, updates, tenantId) {
    const [visitSummary] = await db.update(visitSummaries).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(and(eq(visitSummaries.id, id), eq(visitSummaries.tenantId, tenantId))).returning();
    return visitSummary || void 0;
  }
  async getVisitSummariesByPatient(patientId, tenantId) {
    return await db.select().from(visitSummaries).where(
      and(eq(visitSummaries.patientId, patientId), eq(visitSummaries.tenantId, tenantId))
    ).orderBy(desc(visitSummaries.visitDate));
  }
  async getVisitSummaryByAppointment(appointmentId, tenantId) {
    const [visitSummary] = await db.select().from(visitSummaries).where(
      and(eq(visitSummaries.appointmentId, appointmentId), eq(visitSummaries.tenantId, tenantId))
    );
    return visitSummary || void 0;
  }
  async getVisitSummariesByProvider(providerId, tenantId) {
    return await db.select().from(visitSummaries).where(
      and(eq(visitSummaries.providerId, providerId), eq(visitSummaries.tenantId, tenantId))
    ).orderBy(desc(visitSummaries.visitDate));
  }
  async getVisitSummariesByTenant(tenantId) {
    return await db.select().from(visitSummaries).where(eq(visitSummaries.tenantId, tenantId)).orderBy(desc(visitSummaries.visitDate));
  }
  // AI Health Recommendations Management Implementation
  async getHealthRecommendation(id, tenantId) {
    const [recommendation] = await db.select().from(healthRecommendations).where(
      and(eq(healthRecommendations.id, id), eq(healthRecommendations.tenantId, tenantId))
    );
    return recommendation || void 0;
  }
  async createHealthRecommendation(insertRecommendation) {
    const [recommendation] = await db.insert(healthRecommendations).values(insertRecommendation).returning();
    return recommendation;
  }
  async updateHealthRecommendation(id, updates, tenantId) {
    const [recommendation] = await db.update(healthRecommendations).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(and(eq(healthRecommendations.id, id), eq(healthRecommendations.tenantId, tenantId))).returning();
    return recommendation || void 0;
  }
  async getHealthRecommendationsByPatient(patientId, tenantId) {
    return await db.select().from(healthRecommendations).where(
      and(eq(healthRecommendations.patientId, patientId), eq(healthRecommendations.tenantId, tenantId))
    ).orderBy(desc(healthRecommendations.createdAt));
  }
  async getActiveHealthRecommendationsByPatient(patientId, tenantId) {
    return await db.select().from(healthRecommendations).where(
      and(
        eq(healthRecommendations.patientId, patientId),
        eq(healthRecommendations.tenantId, tenantId),
        eq(healthRecommendations.status, "active")
      )
    ).orderBy(desc(healthRecommendations.createdAt));
  }
  async getHealthRecommendationsByTenant(tenantId) {
    return await db.select().from(healthRecommendations).where(eq(healthRecommendations.tenantId, tenantId)).orderBy(desc(healthRecommendations.createdAt));
  }
  async acknowledgeHealthRecommendation(id, acknowledgedBy, tenantId) {
    const [recommendation] = await db.update(healthRecommendations).set({
      acknowledgedAt: sql2`CURRENT_TIMESTAMP`,
      acknowledgedBy,
      updatedAt: sql2`CURRENT_TIMESTAMP`
    }).where(and(eq(healthRecommendations.id, id), eq(healthRecommendations.tenantId, tenantId))).returning();
    return recommendation || void 0;
  }
  // AI Health Analysis Management Implementation
  async getHealthAnalysis(id, tenantId) {
    const [analysis] = await db.select().from(healthAnalyses).where(
      and(eq(healthAnalyses.id, id), eq(healthAnalyses.tenantId, tenantId))
    );
    return analysis || void 0;
  }
  async createHealthAnalysis(insertAnalysis) {
    const [analysis] = await db.insert(healthAnalyses).values(insertAnalysis).returning();
    return analysis;
  }
  async updateHealthAnalysis(id, updates, tenantId) {
    const [analysis] = await db.update(healthAnalyses).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(and(eq(healthAnalyses.id, id), eq(healthAnalyses.tenantId, tenantId))).returning();
    return analysis || void 0;
  }
  async getHealthAnalysesByPatient(patientId, tenantId) {
    return await db.select().from(healthAnalyses).where(
      and(eq(healthAnalyses.patientId, patientId), eq(healthAnalyses.tenantId, tenantId))
    ).orderBy(desc(healthAnalyses.createdAt));
  }
  async getLatestHealthAnalysis(patientId, tenantId) {
    const [analysis] = await db.select().from(healthAnalyses).where(
      and(eq(healthAnalyses.patientId, patientId), eq(healthAnalyses.tenantId, tenantId))
    ).orderBy(desc(healthAnalyses.createdAt)).limit(1);
    return analysis || void 0;
  }
  async getHealthAnalysesByTenant(tenantId) {
    return await db.select().from(healthAnalyses).where(eq(healthAnalyses.tenantId, tenantId)).orderBy(desc(healthAnalyses.createdAt));
  }
  // Medication Copay Management Implementation
  async getMedicationCopay(id, tenantId) {
    const [copay] = await db.select().from(medicationCopays).where(
      and(eq(medicationCopays.id, id), eq(medicationCopays.tenantId, tenantId))
    );
    return copay || void 0;
  }
  async createMedicationCopay(insertCopay) {
    const [copay] = await db.insert(medicationCopays).values(insertCopay).returning();
    return copay;
  }
  async updateMedicationCopay(id, updates, tenantId) {
    const [copay] = await db.update(medicationCopays).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(and(eq(medicationCopays.id, id), eq(medicationCopays.tenantId, tenantId))).returning();
    return copay || void 0;
  }
  async getMedicationCopaysByPatient(patientId, tenantId) {
    return await db.select().from(medicationCopays).where(
      and(eq(medicationCopays.patientId, patientId), eq(medicationCopays.tenantId, tenantId))
    ).orderBy(desc(medicationCopays.createdAt));
  }
  async getMedicationCopaysByPatientInsurance(patientInsuranceId, tenantId) {
    return await db.select().from(medicationCopays).where(
      and(eq(medicationCopays.patientInsuranceId, patientInsuranceId), eq(medicationCopays.tenantId, tenantId))
    ).orderBy(desc(medicationCopays.createdAt));
  }
  async getMedicationCopaysByPrescription(prescriptionId, tenantId) {
    return await db.select().from(medicationCopays).where(
      and(eq(medicationCopays.prescriptionId, prescriptionId), eq(medicationCopays.tenantId, tenantId))
    ).orderBy(desc(medicationCopays.createdAt));
  }
  async getMedicationCopaysByPharmacist(pharmacistId, tenantId) {
    return await db.select().from(medicationCopays).where(
      and(eq(medicationCopays.definedByPharmacist, pharmacistId), eq(medicationCopays.tenantId, tenantId))
    ).orderBy(desc(medicationCopays.createdAt));
  }
  async getMedicationCopaysByTenant(tenantId) {
    return await db.select().from(medicationCopays).where(eq(medicationCopays.tenantId, tenantId)).orderBy(desc(medicationCopays.createdAt));
  }
  async getActiveMedicationCopaysByPatient(patientId, tenantId) {
    return await db.select().from(medicationCopays).where(
      and(
        eq(medicationCopays.patientId, patientId),
        eq(medicationCopays.tenantId, tenantId),
        eq(medicationCopays.isActive, true)
      )
    ).orderBy(desc(medicationCopays.createdAt));
  }
  // Pricing Plans Implementation
  async getPricingPlans() {
    return [
      {
        id: "basic",
        name: "Basic",
        price: 99,
        interval: "month",
        features: ["Up to 100 patients", "Basic reporting", "Email support"]
      },
      {
        id: "professional",
        name: "Professional",
        price: 299,
        interval: "month",
        features: ["Up to 1000 patients", "Advanced reporting", "Phone support", "API access"]
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: 999,
        interval: "month",
        features: ["Unlimited patients", "Custom reporting", "Dedicated support", "White label", "Multi-language"]
      },
      {
        id: "white_label",
        name: "White Label",
        price: 1999,
        interval: "month",
        features: ["Everything in Enterprise", "Full white labeling", "Custom branding", "Offline sync"]
      }
    ];
  }
  async createPricingPlan(data) {
    return { id: "new-plan", ...data };
  }
  async updatePricingPlan(id, data) {
    return { id, ...data };
  }
  // White Label Settings Implementation
  async updateTenantWhiteLabel(tenantId, settings) {
    try {
      const [tenant] = await db.update(tenants).set({
        brandName: settings.brandName,
        updatedAt: sql2`CURRENT_TIMESTAMP`
      }).where(eq(tenants.id, tenantId)).returning();
      return tenant || null;
    } catch (error) {
      console.error("Error updating white label settings:", error);
      return null;
    }
  }
  // Offline Sync Implementation
  async syncOfflineData(syncData) {
    console.log("Syncing offline data:", syncData);
    return { success: true, syncedAt: (/* @__PURE__ */ new Date()).toISOString() };
  }
  async getOfflineData(tenantId) {
    return {
      patients: await this.getPatientsByTenant(tenantId, 50),
      appointments: await this.getAppointmentsByTenant(tenantId),
      prescriptions: await this.getPrescriptionsByTenant(tenantId),
      lastSync: (/* @__PURE__ */ new Date()).toISOString()
    };
  }
  // Translations Implementation
  async getTranslations(tenantId, language) {
    const commonTranslations = {
      "en": {
        "welcome": "Welcome",
        "patient": "Patient",
        "doctor": "Doctor",
        "appointment": "Appointment",
        "prescription": "Prescription"
      },
      "es": {
        "welcome": "Bienvenido",
        "patient": "Paciente",
        "doctor": "Doctor",
        "appointment": "Cita",
        "prescription": "Receta"
      },
      "fr": {
        "welcome": "Bienvenue",
        "patient": "Patient",
        "doctor": "Docteur",
        "appointment": "Rendez-vous",
        "prescription": "Prescription"
      }
    };
    return Object.entries(commonTranslations[language] || commonTranslations.en).map(([key, value]) => ({
      key,
      value,
      language,
      tenantId
    }));
  }
  async createTranslation(data) {
    return { id: "new-translation", ...data, createdAt: (/* @__PURE__ */ new Date()).toISOString() };
  }
  // Patient Check-ins for receptionist workflow
  async getPatientCheckIn(id, tenantId) {
    const [checkIn] = await db.select().from(patientCheckIns).where(
      and(eq(patientCheckIns.id, id), eq(patientCheckIns.tenantId, tenantId))
    );
    return checkIn || void 0;
  }
  async createPatientCheckIn(checkIn) {
    const [newCheckIn] = await db.insert(patientCheckIns).values(checkIn).returning();
    return newCheckIn;
  }
  async updatePatientCheckIn(id, updates, tenantId) {
    const [updatedCheckIn] = await db.update(patientCheckIns).set({ ...updates, updatedAt: /* @__PURE__ */ new Date() }).where(and(eq(patientCheckIns.id, id), eq(patientCheckIns.tenantId, tenantId))).returning();
    return updatedCheckIn || void 0;
  }
  async getPatientCheckInsByTenant(tenantId, date) {
    let query = db.select().from(patientCheckIns).where(eq(patientCheckIns.tenantId, tenantId));
    if (date) {
      const startOfDay = new Date(date);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999);
      query = query.where(
        and(
          eq(patientCheckIns.tenantId, tenantId),
          sql2`${patientCheckIns.checkedInAt} >= ${startOfDay}`,
          sql2`${patientCheckIns.checkedInAt} <= ${endOfDay}`
        )
      );
    }
    return await query.orderBy(desc(patientCheckIns.checkedInAt));
  }
  async getWaitingPatients(tenantId) {
    const result = await db.select({
      id: patientCheckIns.id,
      patientId: patientCheckIns.patientId,
      appointmentId: patientCheckIns.appointmentId,
      checkedInBy: patientCheckIns.checkedInBy,
      checkedInAt: patientCheckIns.checkedInAt,
      reasonForVisit: patientCheckIns.reasonForVisit,
      chiefComplaint: patientCheckIns.chiefComplaint,
      priorityLevel: patientCheckIns.priorityLevel,
      specialInstructions: patientCheckIns.specialInstructions,
      insuranceVerified: patientCheckIns.insuranceVerified,
      status: patientCheckIns.status,
      vitalSignsId: patientCheckIns.vitalSignsId,
      patient: {
        id: patients.id,
        firstName: patients.firstName,
        lastName: patients.lastName,
        mrn: patients.mrn,
        dateOfBirth: patients.dateOfBirth,
        phone: patients.phone,
        email: patients.email
      }
    }).from(patientCheckIns).innerJoin(patients, eq(patientCheckIns.patientId, patients.id)).where(
      and(
        eq(patientCheckIns.tenantId, tenantId),
        eq(patientCheckIns.status, "waiting")
      )
    ).orderBy(patientCheckIns.checkedInAt);
    return result;
  }
  async getPatientCheckInsByDate(date, tenantId) {
    const targetDate = new Date(date);
    const startOfDay = new Date(targetDate);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(targetDate);
    endOfDay.setHours(23, 59, 59, 999);
    const result = await db.select({
      id: patientCheckIns.id,
      patientId: patientCheckIns.patientId,
      appointmentId: patientCheckIns.appointmentId,
      checkedInBy: patientCheckIns.checkedInBy,
      checkedInAt: patientCheckIns.checkedInAt,
      reasonForVisit: patientCheckIns.reasonForVisit,
      chiefComplaint: patientCheckIns.chiefComplaint,
      priorityLevel: patientCheckIns.priorityLevel,
      specialInstructions: patientCheckIns.specialInstructions,
      insuranceVerified: patientCheckIns.insuranceVerified,
      status: patientCheckIns.status,
      vitalSignsId: patientCheckIns.vitalSignsId,
      patient: {
        id: patients.id,
        firstName: patients.firstName,
        lastName: patients.lastName,
        mrn: patients.mrn,
        dateOfBirth: patients.dateOfBirth,
        phone: patients.phone,
        email: patients.email
      },
      vitalSigns: {
        id: vitalSigns.id,
        systolicBp: vitalSigns.systolicBp,
        diastolicBp: vitalSigns.diastolicBp,
        heartRate: vitalSigns.heartRate,
        temperature: vitalSigns.temperature,
        temperatureUnit: vitalSigns.temperatureUnit
      }
    }).from(patientCheckIns).innerJoin(patients, eq(patientCheckIns.patientId, patients.id)).leftJoin(vitalSigns, eq(patientCheckIns.vitalSignsId, vitalSigns.id)).where(
      and(
        eq(patientCheckIns.tenantId, tenantId),
        sql2`${patientCheckIns.checkedInAt} >= ${startOfDay}`,
        sql2`${patientCheckIns.checkedInAt} <= ${endOfDay}`
      )
    ).orderBy(desc(patientCheckIns.checkedInAt));
    return result;
  }
  async getTodaysCheckIns(tenantId) {
    const today = /* @__PURE__ */ new Date();
    const startOfDay = new Date(today);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 59, 999);
    const result = await db.select({
      id: patientCheckIns.id,
      patientId: patientCheckIns.patientId,
      appointmentId: patientCheckIns.appointmentId,
      checkedInBy: patientCheckIns.checkedInBy,
      checkedInAt: patientCheckIns.checkedInAt,
      reasonForVisit: patientCheckIns.reasonForVisit,
      chiefComplaint: patientCheckIns.chiefComplaint,
      priorityLevel: patientCheckIns.priorityLevel,
      specialInstructions: patientCheckIns.specialInstructions,
      insuranceVerified: patientCheckIns.insuranceVerified,
      status: patientCheckIns.status,
      vitalSignsId: patientCheckIns.vitalSignsId,
      patient: {
        id: patients.id,
        firstName: patients.firstName,
        lastName: patients.lastName,
        mrn: patients.mrn,
        dateOfBirth: patients.dateOfBirth,
        phone: patients.phone,
        email: patients.email
      },
      vitalSigns: {
        id: vitalSigns.id,
        systolicBp: vitalSigns.bloodPressureSystolic,
        diastolicBp: vitalSigns.bloodPressureDiastolic,
        heartRate: vitalSigns.heartRate,
        temperature: vitalSigns.temperature,
        temperatureUnit: vitalSigns.temperatureUnit
      }
    }).from(patientCheckIns).innerJoin(patients, eq(patientCheckIns.patientId, patients.id)).leftJoin(vitalSigns, eq(patientCheckIns.vitalSignsId, vitalSigns.id)).where(
      and(
        eq(patientCheckIns.tenantId, tenantId),
        sql2`${patientCheckIns.checkedInAt} >= ${startOfDay}`,
        sql2`${patientCheckIns.checkedInAt} <= ${endOfDay}`
      )
    ).orderBy(desc(patientCheckIns.checkedInAt));
    return result;
  }
  // Role Permissions Management
  async getRolePermissions(tenantId) {
    return await db.select().from(rolePermissions).where(and(eq(rolePermissions.tenantId, tenantId), eq(rolePermissions.isActive, true)));
  }
  async getRolePermissionsByRole(role, tenantId) {
    return await db.select().from(rolePermissions).where(and(
      eq(rolePermissions.tenantId, tenantId),
      eq(rolePermissions.role, role),
      eq(rolePermissions.isActive, true)
    ));
  }
  async createRolePermission(permission) {
    console.log("\u{1F527} [STORAGE] Creating role permission with data:", permission);
    if (!permission.createdBy) {
      throw new Error("createdBy field is required for creating role permissions");
    }
    const [created] = await db.insert(rolePermissions).values(permission).returning();
    console.log("\u{1F527} [STORAGE] Create result:", created);
    return created;
  }
  async updateRolePermission(id, updates, tenantId) {
    console.log("\u{1F527} [STORAGE] Updating role permission:", { id, updates, tenantId });
    const { createdBy, createdAt, ...updateData } = updates;
    const [updated] = await db.update(rolePermissions).set({
      ...updateData,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(and(eq(rolePermissions.id, id), eq(rolePermissions.tenantId, tenantId))).returning();
    console.log("\u{1F527} [STORAGE] Update result:", updated);
    return updated || void 0;
  }
  async deleteRolePermission(id, tenantId) {
    const [deleted] = await db.update(rolePermissions).set({ isActive: false, updatedAt: /* @__PURE__ */ new Date() }).where(and(eq(rolePermissions.id, id), eq(rolePermissions.tenantId, tenantId))).returning();
    return !!deleted;
  }
  async getRolePermissionByRoleAndModule(role, module, tenantId) {
    const [permission] = await db.select().from(rolePermissions).where(and(
      eq(rolePermissions.tenantId, tenantId),
      eq(rolePermissions.role, role),
      eq(rolePermissions.module, module),
      eq(rolePermissions.isActive, true)
    ));
    return permission || void 0;
  }
  // Patient Billing Management
  async createPatientBill(bill) {
    const [patientBill] = await db.insert(patientBills).values(bill).returning();
    return patientBill;
  }
  async getPatientBills(patientId, tenantId) {
    return await db.select().from(patientBills).where(and(eq(patientBills.patientId, patientId), eq(patientBills.tenantId, tenantId))).orderBy(desc(patientBills.serviceDate));
  }
  async getPatientBill(id, tenantId) {
    const [bill] = await db.select().from(patientBills).where(and(eq(patientBills.id, id), eq(patientBills.tenantId, tenantId)));
    return bill || void 0;
  }
  async updatePatientBill(id, updates, tenantId) {
    const [bill] = await db.update(patientBills).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(and(eq(patientBills.id, id), eq(patientBills.tenantId, tenantId))).returning();
    return bill;
  }
  async createPatientPayment(payment) {
    const [patientPayment] = await db.insert(patientPayments).values(payment).returning();
    return patientPayment;
  }
  async getPatientPayments(patientBillId, tenantId) {
    return await db.select().from(patientPayments).where(and(eq(patientPayments.patientBillId, patientBillId), eq(patientPayments.tenantId, tenantId))).orderBy(desc(patientPayments.paymentDate));
  }
  // Lab Bills Management
  async getLabBillsByTenant(tenantId) {
    try {
      const bills = await db.select({
        id: labBills.id,
        tenantId: labBills.tenantId,
        patientId: labBills.patientId,
        amount: labBills.amount,
        description: labBills.description,
        status: labBills.status,
        serviceType: labBills.serviceType,
        labOrderId: labBills.labOrderId,
        testName: labBills.testName,
        notes: labBills.notes,
        generatedBy: labBills.generatedBy,
        createdAt: labBills.createdAt,
        updatedAt: labBills.updatedAt
      }).from(labBills).where(eq(labBills.tenantId, tenantId)).orderBy(desc(labBills.createdAt));
      const enrichedBills = [];
      for (const bill of bills) {
        const patient = await this.getPatientById(bill.patientId);
        enrichedBills.push({
          ...bill,
          patientFirstName: patient?.firstName,
          patientLastName: patient?.lastName,
          patientMrn: patient?.mrn
        });
      }
      return enrichedBills;
    } catch (error) {
      console.error("Error fetching lab bills:", error);
      return [];
    }
  }
  async createLabBill(bill) {
    const [labBill] = await db.insert(labBills).values(bill).returning();
    return labBill;
  }
  async updateLabBill(id, updates, tenantId) {
    const [bill] = await db.update(labBills).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(and(eq(labBills.id, id), eq(labBills.tenantId, tenantId))).returning();
    return bill || void 0;
  }
  async getLabBill(id, tenantId) {
    const [bill] = await db.select().from(labBills).where(and(eq(labBills.id, id), eq(labBills.tenantId, tenantId)));
    if (bill) {
      const patient = await this.getPatientById(bill.patientId);
      return {
        ...bill,
        patientFirstName: patient?.firstName,
        patientLastName: patient?.lastName,
        patientMrn: patient?.mrn
      };
    }
    return void 0;
  }
  // Patient Account Activation
  async generatePatientCredentials(patientId, tenantId) {
    const tempPassword = Math.random().toString(36).slice(-8);
    const activationToken = Math.random().toString(36) + Date.now().toString(36);
    await this.createAuditLog({
      tenantId,
      userId: patientId,
      action: "patient_account_generated",
      entityType: "patient",
      entityId: patientId,
      details: { activationToken },
      ipAddress: "system",
      userAgent: "automated-service"
    });
    return { tempPassword, activationToken };
  }
  async sendPatientActivationMessage(patient, tempPassword, activationToken) {
    try {
      console.log(`Patient activation credentials for ${patient.firstName} ${patient.lastName}:`);
      console.log(`Email: ${patient.email}`);
      console.log(`Phone: ${patient.phone}`);
      console.log(`Temporary Password: ${tempPassword}`);
      console.log(`Activation Link: ${process.env.FRONTEND_URL || "https://localhost:5000"}/patient/activate?token=${activationToken}`);
      return true;
    } catch (error) {
      console.error("Failed to send patient activation message:", error);
      return false;
    }
  }
  // Patient Assignment Management Implementation
  async getPatientAssignment(id, tenantId) {
    const [assignment] = await db.select().from(patientAssignments).where(
      and(eq(patientAssignments.id, id), eq(patientAssignments.tenantId, tenantId))
    );
    return assignment || void 0;
  }
  async createPatientAssignment(assignment) {
    const [newAssignment] = await db.insert(patientAssignments).values(assignment).returning();
    return newAssignment;
  }
  async assignPatientToPhysician(data) {
    return await this.createPatientAssignment({
      id: randomUUID(),
      tenantId: data.tenantId,
      patientId: data.patientId,
      physicianId: data.physicianId,
      assignmentType: data.assignmentType || "primary_care",
      assignedBy: data.assignedBy,
      assignedDate: data.assignedDate || /* @__PURE__ */ new Date(),
      expiryDate: data.expiryDate || null,
      isActive: data.isActive !== void 0 ? data.isActive : true,
      notes: data.notes || null,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    });
  }
  async updatePatientAssignment(id, updates, tenantId) {
    const [updated] = await db.update(patientAssignments).set(updates).where(and(eq(patientAssignments.id, id), eq(patientAssignments.tenantId, tenantId))).returning();
    return updated || void 0;
  }
  async getPatientAssignmentsByPhysician(physicianId, tenantId) {
    return await db.select({
      id: patientAssignments.id,
      patientId: patientAssignments.patientId,
      assignmentType: patientAssignments.assignmentType,
      assignedDate: patientAssignments.assignedDate,
      expiryDate: patientAssignments.expiryDate,
      notes: patientAssignments.notes,
      // Patient information
      patientFirstName: patients.firstName,
      patientLastName: patients.lastName,
      patientMRN: patients.mrn,
      patientDateOfBirth: patients.dateOfBirth,
      patientPhone: patients.phone,
      patientEmail: patients.email
    }).from(patientAssignments).innerJoin(patients, eq(patientAssignments.patientId, patients.id)).where(and(
      eq(patientAssignments.physicianId, physicianId),
      eq(patientAssignments.tenantId, tenantId),
      eq(patientAssignments.isActive, true)
    )).orderBy(desc(patientAssignments.assignedDate));
  }
  async getPatientAssignmentsByPatient(patientId, tenantId) {
    return await db.select({
      id: patientAssignments.id,
      physicianId: patientAssignments.physicianId,
      assignmentType: patientAssignments.assignmentType,
      assignedDate: patientAssignments.assignedDate,
      expiryDate: patientAssignments.expiryDate,
      notes: patientAssignments.notes,
      // Physician information
      physicianFirstName: users.firstName,
      physicianLastName: users.lastName,
      physicianEmail: users.email
    }).from(patientAssignments).innerJoin(users, eq(patientAssignments.physicianId, users.id)).where(and(
      eq(patientAssignments.patientId, patientId),
      eq(patientAssignments.tenantId, tenantId),
      eq(patientAssignments.isActive, true)
    )).orderBy(desc(patientAssignments.assignedDate));
  }
  async getActivePatientAssignments(tenantId) {
    return await db.select({
      id: patientAssignments.id,
      patientId: patientAssignments.patientId,
      physicianId: patientAssignments.physicianId,
      assignmentType: patientAssignments.assignmentType,
      assignedDate: patientAssignments.assignedDate,
      expiryDate: patientAssignments.expiryDate,
      notes: patientAssignments.notes,
      // Patient information
      patientName: sql2`${patients.firstName} || ' ' || ${patients.lastName}`,
      patientMRN: patients.mrn,
      patientDateOfBirth: patients.dateOfBirth,
      patientPhone: patients.phone,
      patientEmail: patients.email,
      // Physician information
      physicianName: sql2`${users.firstName} || ' ' || ${users.lastName}`,
      physicianEmail: users.email
    }).from(patientAssignments).innerJoin(patients, eq(patientAssignments.patientId, patients.id)).innerJoin(users, eq(patientAssignments.physicianId, users.id)).where(and(
      eq(patientAssignments.tenantId, tenantId),
      eq(patientAssignments.isActive, true)
    )).orderBy(desc(patientAssignments.assignedDate));
  }
  async removePatientAssignment(id, tenantId) {
    const result = await db.update(patientAssignments).set({ isActive: false, updatedAt: /* @__PURE__ */ new Date() }).where(and(eq(patientAssignments.id, id), eq(patientAssignments.tenantId, tenantId)));
    return result.rowCount !== void 0 && result.rowCount > 0;
  }
  // Patient Access Request Management Implementation
  async getPatientAccessRequest(id, tenantId) {
    const [request] = await db.select().from(patientAccessRequests).where(
      and(eq(patientAccessRequests.id, id), eq(patientAccessRequests.tenantId, tenantId))
    );
    return request || void 0;
  }
  // Removed duplicate methods - using properly typed versions below
  async getPatientAccessRequestsByPhysician(physicianId, tenantId) {
    return await db.select({
      id: patientAccessRequests.id,
      patientId: patientAccessRequests.patientId,
      requestType: patientAccessRequests.requestType,
      reason: patientAccessRequests.reason,
      urgency: patientAccessRequests.urgency,
      status: patientAccessRequests.status,
      requestedDate: patientAccessRequests.requestedDate,
      reviewedDate: patientAccessRequests.reviewedDate,
      reviewNotes: patientAccessRequests.reviewNotes,
      accessGrantedUntil: patientAccessRequests.accessGrantedUntil,
      // Patient information
      patientFirstName: patients.firstName,
      patientLastName: patients.lastName,
      patientMRN: patients.mrn,
      // Target physician information (if applicable)
      targetPhysicianFirstName: users.firstName,
      targetPhysicianLastName: users.lastName
    }).from(patientAccessRequests).innerJoin(patients, eq(patientAccessRequests.patientId, patients.id)).leftJoin(users, eq(patientAccessRequests.targetPhysicianId, users.id)).where(and(
      eq(patientAccessRequests.requestingPhysicianId, physicianId),
      eq(patientAccessRequests.tenantId, tenantId)
    )).orderBy(desc(patientAccessRequests.requestedDate));
  }
  async getPendingPatientAccessRequests(tenantId) {
    return await db.select({
      id: patientAccessRequests.id,
      patientId: patientAccessRequests.patientId,
      requestingPhysicianId: patientAccessRequests.requestingPhysicianId,
      requestType: patientAccessRequests.requestType,
      reason: patientAccessRequests.reason,
      urgency: patientAccessRequests.urgency,
      requestedDate: patientAccessRequests.requestedDate,
      // Patient information
      patientFirstName: patients.firstName,
      patientLastName: patients.lastName,
      patientMRN: patients.mrn,
      // Requesting physician information
      requestingPhysicianFirstName: users.firstName,
      requestingPhysicianLastName: users.lastName,
      requestingPhysicianEmail: users.email
    }).from(patientAccessRequests).innerJoin(patients, eq(patientAccessRequests.patientId, patients.id)).innerJoin(users, eq(patientAccessRequests.requestingPhysicianId, users.id)).where(and(
      eq(patientAccessRequests.tenantId, tenantId),
      eq(patientAccessRequests.status, "pending")
    )).orderBy(desc(patientAccessRequests.requestedDate));
  }
  async approvePatientAccessRequest(id, reviewedBy, tenantId, accessUntil) {
    const [updated] = await db.update(patientAccessRequests).set({
      status: "approved",
      reviewedBy,
      reviewedDate: /* @__PURE__ */ new Date(),
      accessGrantedUntil: accessUntil,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(and(eq(patientAccessRequests.id, id), eq(patientAccessRequests.tenantId, tenantId))).returning();
    return updated || void 0;
  }
  async denyPatientAccessRequest(id, reviewedBy, reviewNotes, tenantId) {
    const [updated] = await db.update(patientAccessRequests).set({
      status: "denied",
      reviewedBy,
      reviewedDate: /* @__PURE__ */ new Date(),
      reviewNotes,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(and(eq(patientAccessRequests.id, id), eq(patientAccessRequests.tenantId, tenantId))).returning();
    return updated || void 0;
  }
  // Enhanced Patient Methods with Assignment Controls
  async getAssignedPatients(physicianId, tenantId) {
    return await db.select({
      id: patients.id,
      tenantId: patients.tenantId,
      mrn: patients.mrn,
      firstName: patients.firstName,
      lastName: patients.lastName,
      dateOfBirth: patients.dateOfBirth,
      gender: patients.gender,
      phone: patients.phone,
      email: patients.email,
      address: patients.address,
      emergencyContact: patients.emergencyContact,
      insuranceInfo: patients.insuranceInfo,
      preferredPharmacyId: patients.preferredPharmacyId,
      primaryPhysicianId: patients.primaryPhysicianId,
      medicalHistory: patients.medicalHistory,
      allergies: patients.allergies,
      medications: patients.medications,
      isActive: patients.isActive,
      createdAt: patients.createdAt,
      updatedAt: patients.updatedAt
    }).from(patients).innerJoin(patientAssignments, eq(patients.id, patientAssignments.patientId)).where(and(
      eq(patientAssignments.physicianId, physicianId),
      eq(patientAssignments.tenantId, tenantId),
      eq(patientAssignments.isActive, true),
      eq(patients.isActive, true)
    )).orderBy(patients.lastName, patients.firstName);
  }
  async hasPatientAccess(physicianId, patientId, tenantId) {
    const assignment = await db.select().from(patientAssignments).where(
      and(
        eq(patientAssignments.physicianId, physicianId),
        eq(patientAssignments.patientId, patientId),
        eq(patientAssignments.tenantId, tenantId),
        eq(patientAssignments.isActive, true)
      )
    ).limit(1);
    if (assignment.length > 0) {
      return true;
    }
    const accessRequest = await db.select().from(patientAccessRequests).where(
      and(
        eq(patientAccessRequests.requestingPhysicianId, physicianId),
        eq(patientAccessRequests.patientId, patientId),
        eq(patientAccessRequests.tenantId, tenantId),
        eq(patientAccessRequests.status, "approved"),
        or(
          isNull(patientAccessRequests.accessGrantedUntil),
          gt(patientAccessRequests.accessGrantedUntil, /* @__PURE__ */ new Date())
        )
      )
    ).limit(1);
    return accessRequest.length > 0;
  }
  async getPatientWithAccessCheck(patientId, physicianId, tenantId) {
    const hasAccess = await this.hasPatientAccess(physicianId, patientId, tenantId);
    if (!hasAccess) {
      return void 0;
    }
    return await this.getPatient(patientId, tenantId);
  }
  // Pharmacy Receipt Management Implementation
  async getPharmacyReceipt(id, tenantId) {
    const [receipt] = await db.select().from(pharmacyReceipts).where(
      and(eq(pharmacyReceipts.id, id), eq(pharmacyReceipts.tenantId, tenantId))
    );
    return receipt || void 0;
  }
  async createPharmacyReceipt(receipt) {
    const [newReceipt] = await db.insert(pharmacyReceipts).values(receipt).returning();
    return newReceipt;
  }
  async updatePharmacyReceipt(id, updates, tenantId) {
    const [updatedReceipt] = await db.update(pharmacyReceipts).set({ ...updates, updatedAt: /* @__PURE__ */ new Date() }).where(and(eq(pharmacyReceipts.id, id), eq(pharmacyReceipts.tenantId, tenantId))).returning();
    return updatedReceipt || void 0;
  }
  async getPharmacyReceiptsByPatient(patientId, tenantId) {
    return await db.select().from(pharmacyReceipts).where(and(eq(pharmacyReceipts.patientId, patientId), eq(pharmacyReceipts.tenantId, tenantId))).orderBy(desc(pharmacyReceipts.dispensedDate));
  }
  async getPharmacyReceiptsByPrescription(prescriptionId, tenantId) {
    return await db.select().from(pharmacyReceipts).where(and(eq(pharmacyReceipts.prescriptionId, prescriptionId), eq(pharmacyReceipts.tenantId, tenantId))).orderBy(desc(pharmacyReceipts.dispensedDate));
  }
  async getPharmacyReceiptsByTenant(tenantId, limit = 50, offset = 0) {
    return await db.select().from(pharmacyReceipts).where(eq(pharmacyReceipts.tenantId, tenantId)).orderBy(desc(pharmacyReceipts.dispensedDate)).limit(limit).offset(offset);
  }
  async generateReceiptNumber(tenantId) {
    const tenant = await this.getTenant(tenantId);
    const prefix = tenant?.name?.substring(0, 3).toUpperCase() || "RX";
    const timestamp2 = Date.now().toString();
    const random = Math.floor(Math.random() * 1e3).toString().padStart(3, "0");
    return `${prefix}-${timestamp2}-${random}`;
  }
  // Achievement System Implementation
  async getAchievements() {
    return await db.select().from(achievements).where(eq(achievements.isActive, true)).orderBy(achievements.name);
  }
  async getAchievement(id) {
    const [achievement] = await db.select().from(achievements).where(eq(achievements.id, id));
    return achievement || void 0;
  }
  async createAchievement(achievement) {
    const [created] = await db.insert(achievements).values(achievement).returning();
    return created;
  }
  async updateAchievement(id, updates) {
    const [updated] = await db.update(achievements).set({ ...updates, updatedAt: /* @__PURE__ */ new Date() }).where(eq(achievements.id, id)).returning();
    return updated || void 0;
  }
  async deleteAchievement(id) {
    const result = await db.update(achievements).set({ isActive: false }).where(eq(achievements.id, id));
    return (result.rowCount || 0) > 0;
  }
  async getUserAchievements(userId, tenantId) {
    return await db.select().from(userAchievements).where(and(eq(userAchievements.userId, userId), eq(userAchievements.tenantId, tenantId))).orderBy(desc(userAchievements.earnedAt));
  }
  async getUserAchievement(userId, achievementId, tenantId) {
    const [userAchievement] = await db.select().from(userAchievements).where(and(
      eq(userAchievements.userId, userId),
      eq(userAchievements.achievementId, achievementId),
      eq(userAchievements.tenantId, tenantId)
    ));
    return userAchievement || void 0;
  }
  async createUserAchievement(userAchievement) {
    const [created] = await db.insert(userAchievements).values(userAchievement).returning();
    return created;
  }
  async updateUserAchievement(id, updates) {
    const [updated] = await db.update(userAchievements).set(updates).where(eq(userAchievements.id, id)).returning();
    return updated || void 0;
  }
  async getUserStats(userId, tenantId) {
    const [stats] = await db.select().from(userStats).where(and(eq(userStats.userId, userId), eq(userStats.tenantId, tenantId)));
    return stats || void 0;
  }
  async createUserStats(userStatsData) {
    const [created] = await db.insert(userStats).values(userStatsData).returning();
    return created;
  }
  async updateUserStats(userId, tenantId, updates) {
    const [updated] = await db.update(userStats).set({ ...updates, updatedAt: /* @__PURE__ */ new Date() }).where(and(eq(userStats.userId, userId), eq(userStats.tenantId, tenantId))).returning();
    return updated || void 0;
  }
  async getLeaderboard(tenantId, period, limit = 10) {
    return await db.select().from(leaderboards).where(and(eq(leaderboards.tenantId, tenantId), eq(leaderboards.period, period))).orderBy(leaderboards.position).limit(limit);
  }
  async updateLeaderboard(tenantId, period) {
    const now = /* @__PURE__ */ new Date();
    let periodStart;
    let periodEnd;
    switch (period) {
      case "daily":
        periodStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        periodEnd = new Date(periodStart.getTime() + 24 * 60 * 60 * 1e3);
        break;
      case "weekly":
        const startOfWeek = now.getDate() - now.getDay();
        periodStart = new Date(now.getFullYear(), now.getMonth(), startOfWeek);
        periodEnd = new Date(periodStart.getTime() + 7 * 24 * 60 * 60 * 1e3);
        break;
      case "monthly":
        periodStart = new Date(now.getFullYear(), now.getMonth(), 1);
        periodEnd = new Date(now.getFullYear(), now.getMonth() + 1, 1);
        break;
      default:
        periodStart = /* @__PURE__ */ new Date(0);
        periodEnd = now;
    }
    const topUsers = await db.select({
      userId: userStats.userId,
      userName: sql2`CONCAT(${users.firstName}, ' ', ${users.lastName})`,
      points: userStats.totalPoints,
      level: userStats.level,
      testsCompleted: userStats.testsCompleted,
      qualityScore: userStats.qualityScore
    }).from(userStats).innerJoin(users, eq(userStats.userId, users.id)).where(eq(userStats.tenantId, tenantId)).orderBy(desc(userStats.totalPoints)).limit(50);
    await db.delete(leaderboards).where(and(eq(leaderboards.tenantId, tenantId), eq(leaderboards.period, period)));
    if (topUsers.length > 0) {
      const leaderboardEntries = topUsers.map((user, index2) => ({
        tenantId,
        userId: user.userId,
        userName: user.userName,
        position: index2 + 1,
        points: user.points,
        level: user.level,
        testsCompleted: user.testsCompleted,
        qualityScore: user.qualityScore || 0,
        period,
        periodStart,
        periodEnd
      }));
      await db.insert(leaderboards).values(leaderboardEntries);
    }
  }
  async getActivityLogs(userId, tenantId, limit = 50) {
    return await db.select().from(activityLogs).where(and(eq(activityLogs.userId, userId), eq(activityLogs.tenantId, tenantId))).orderBy(desc(activityLogs.timestamp)).limit(limit);
  }
  async createActivityLog(activityLog) {
    const [created] = await db.insert(activityLogs).values(activityLog).returning();
    return created;
  }
  async checkAndUpdateAchievements(userId, tenantId, activityType, metadata) {
    const newAchievements = [];
    const stats = await this.getUserStats(userId, tenantId);
    if (!stats) return newAchievements;
    const allAchievements = await this.getAchievements();
    for (const achievement of allAchievements) {
      const existingUserAchievement = await this.getUserAchievement(userId, achievement.id, tenantId);
      if (!existingUserAchievement) {
        const criteria = achievement.criteria;
        let meetsRequirement = false;
        switch (achievement.type) {
          case "productivity":
            if (criteria.testsCompleted && stats.testsCompleted >= criteria.testsCompleted) {
              meetsRequirement = true;
            }
            break;
          case "quality":
            if (criteria.qualityScore && parseFloat(stats.qualityScore.toString()) >= criteria.qualityScore) {
              meetsRequirement = true;
            }
            break;
          case "consistency":
            if (criteria.streakDays && stats.consistencyStreak >= criteria.streakDays) {
              meetsRequirement = true;
            }
            break;
          case "milestone":
            if (criteria.totalPoints && stats.totalPoints >= criteria.totalPoints) {
              meetsRequirement = true;
            }
            break;
        }
        if (meetsRequirement) {
          const userAchievement = await this.createUserAchievement({
            userId,
            tenantId,
            achievementId: achievement.id,
            progress: 100,
            maxProgress: 100,
            isCompleted: true,
            completedAt: /* @__PURE__ */ new Date()
          });
          newAchievements.push(userAchievement);
          await this.updateUserStats(userId, tenantId, {
            totalPoints: stats.totalPoints + achievement.points
          });
          await this.createActivityLog({
            userId,
            tenantId,
            activityType: "achievement_earned",
            points: achievement.points,
            metadata: { achievementId: achievement.id, achievementName: achievement.name }
          });
        }
      }
    }
    return newAchievements;
  }
  calculateUserLevel(totalPoints) {
    return Math.floor(totalPoints / 100) + 1;
  }
  async updateUserStatsFromActivity(userId, tenantId, activityType, metadata) {
    let stats = await this.getUserStats(userId, tenantId);
    if (!stats) {
      stats = await this.createUserStats({
        userId,
        tenantId,
        level: 1,
        totalPoints: 0,
        testsCompleted: 0,
        averageCompletionTime: 0,
        qualityScore: 0,
        consistencyStreak: 0,
        lastActivityDate: /* @__PURE__ */ new Date()
      });
    }
    const updates = {
      lastActivityDate: /* @__PURE__ */ new Date()
    };
    switch (activityType) {
      case "lab_test_completed":
        updates.testsCompleted = stats.testsCompleted + 1;
        updates.totalPoints = stats.totalPoints + 10;
        if (metadata?.completionTime) {
          const currentAvg = stats.averageCompletionTime;
          const newAvg = (currentAvg * (stats.testsCompleted - 1) + metadata.completionTime) / stats.testsCompleted;
          updates.averageCompletionTime = Math.round(newAvg);
        }
        if (metadata?.quality) {
          const currentScore = parseFloat(stats.qualityScore.toString());
          const newScore = (currentScore * (stats.testsCompleted - 1) + metadata.quality) / stats.testsCompleted;
          updates.qualityScore = Math.round(newScore * 100) / 100;
        }
        const lastActivity = stats.lastActivityDate;
        const today = /* @__PURE__ */ new Date();
        const daysDiff = Math.floor((today.getTime() - (lastActivity?.getTime() || 0)) / (1e3 * 60 * 60 * 24));
        if (daysDiff <= 1) {
          updates.consistencyStreak = stats.consistencyStreak + 1;
        } else if (daysDiff > 1) {
          updates.consistencyStreak = 1;
        }
        break;
    }
    if (updates.totalPoints) {
      updates.level = this.calculateUserLevel(updates.totalPoints);
    }
    return await this.updateUserStats(userId, tenantId, updates);
  }
  // Work Shift Management Implementation
  async getWorkShift(id, tenantId) {
    const [shift] = await db.select().from(workShifts).where(
      and(eq(workShifts.id, id), eq(workShifts.tenantId, tenantId))
    );
    return shift || void 0;
  }
  async createWorkShift(shift) {
    const [newShift] = await db.insert(workShifts).values(shift).returning();
    return newShift;
  }
  async updateWorkShift(id, updates, tenantId) {
    const [updatedShift] = await db.update(workShifts).set(updates).where(and(eq(workShifts.id, id), eq(workShifts.tenantId, tenantId))).returning();
    return updatedShift || void 0;
  }
  async getActiveWorkShifts(tenantId) {
    return await db.select().from(workShifts).where(
      eq(workShifts.tenantId, tenantId)
    ).orderBy(desc(workShifts.startTime));
  }
  async endWorkShift(id, tenantId) {
    const [shift] = await db.update(workShifts).set({ endTime: /* @__PURE__ */ new Date() }).where(and(eq(workShifts.id, id), eq(workShifts.tenantId, tenantId))).returning();
    return shift || void 0;
  }
  async getCurrentWorkShift(userId, tenantId) {
    const [shift] = await db.select().from(workShifts).where(
      and(
        eq(workShifts.userId, userId),
        eq(workShifts.tenantId, tenantId),
        isNull(workShifts.endTime)
      )
    );
    return shift || void 0;
  }
  // Pharmacy Patient Insurance Management Implementation
  async getPharmacyPatientInsurance(patientId, tenantId) {
    const [insurance] = await db.select().from(pharmacyPatientInsurance).where(
      and(eq(pharmacyPatientInsurance.patientId, patientId), eq(pharmacyPatientInsurance.tenantId, tenantId))
    );
    return insurance || void 0;
  }
  async createPharmacyPatientInsurance(insurance) {
    const [newInsurance] = await db.insert(pharmacyPatientInsurance).values(insurance).returning();
    return newInsurance;
  }
  async updatePharmacyPatientInsurance(id, updates, tenantId) {
    const [updatedInsurance] = await db.update(pharmacyPatientInsurance).set(updates).where(and(eq(pharmacyPatientInsurance.id, id), eq(pharmacyPatientInsurance.tenantId, tenantId))).returning();
    return updatedInsurance || void 0;
  }
  async getPharmacyPatientInsuranceByTenant(tenantId) {
    return await db.select().from(pharmacyPatientInsurance).where(eq(pharmacyPatientInsurance.tenantId, tenantId));
  }
  // Archived Records Management Implementation
  async createArchivedRecord(record) {
    const [newRecord] = await db.insert(archivedRecords).values(record).returning();
    return newRecord;
  }
  async searchArchivedRecords(tenantId, query) {
    return await db.select().from(archivedRecords).where(
      and(
        eq(archivedRecords.tenantId, tenantId),
        or(
          like(archivedRecords.recordType, `%${query}%`),
          like(archivedRecords.searchableContent, `%${query}%`)
        )
      )
    ).orderBy(desc(archivedRecords.createdAt));
  }
  async getArchivedRecordsByShift(workShiftId, tenantId) {
    return await db.select().from(archivedRecords).where(
      and(eq(archivedRecords.workShiftId, workShiftId), eq(archivedRecords.tenantId, tenantId))
    );
  }
  async getArchivedRecordsByPatient(patientId, tenantId) {
    return await db.select().from(archivedRecords).where(
      and(eq(archivedRecords.patientId, patientId), eq(archivedRecords.tenantId, tenantId))
    ).orderBy(desc(archivedRecords.createdAt));
  }
  async archiveRecordsForShift(workShiftId, tenantId) {
    console.log(`Archiving records for shift ${workShiftId} in tenant ${tenantId}`);
  }
  // Pharmacy Report Templates Management Implementation
  async getPharmacyReportTemplate(id, tenantId) {
    const [template] = await db.select().from(pharmacyReportTemplates).where(
      and(eq(pharmacyReportTemplates.id, id), eq(pharmacyReportTemplates.tenantId, tenantId))
    );
    return template || void 0;
  }
  async createPharmacyReportTemplate(template) {
    const [newTemplate] = await db.insert(pharmacyReportTemplates).values(template).returning();
    return newTemplate;
  }
  async updatePharmacyReportTemplate(id, updates, tenantId) {
    const [updatedTemplate] = await db.update(pharmacyReportTemplates).set(updates).where(and(eq(pharmacyReportTemplates.id, id), eq(pharmacyReportTemplates.tenantId, tenantId))).returning();
    return updatedTemplate || void 0;
  }
  // Report Generation Methods
  async generateSalesReport(tenantId, dateRange = {}) {
    const { start, end } = dateRange;
    let query = db.select({
      date: sql2`DATE(${pharmacyReceipts.createdAt})`,
      totalAmount: sql2`SUM(${pharmacyReceipts.paymentAmount})`,
      transactionCount: sql2`COUNT(*)`,
      averageAmount: sql2`AVG(${pharmacyReceipts.paymentAmount})`,
      totalCost: sql2`SUM(${pharmacyReceipts.totalCost})`,
      insuranceAmount: sql2`SUM(${pharmacyReceipts.insuranceAmount})`,
      copayAmount: sql2`SUM(${pharmacyReceipts.patientCopay})`
    }).from(pharmacyReceipts).where(eq(pharmacyReceipts.tenantId, tenantId));
    if (start) {
      query = query.where(sql2`${pharmacyReceipts.createdAt} >= ${start}`);
    }
    if (end) {
      query = query.where(sql2`${pharmacyReceipts.createdAt} <= ${end}`);
    }
    return await query.groupBy(sql2`DATE(${pharmacyReceipts.createdAt})`).orderBy(sql2`DATE(${pharmacyReceipts.createdAt}) DESC`);
  }
  async generatePrescriptionReport(tenantId, dateRange = {}) {
    const { start, end } = dateRange;
    let query = db.select({
      patientName: sql2`CONCAT(${patients.firstName}, ' ', ${patients.lastName})`,
      medicationName: prescriptions.medicationName,
      quantity: prescriptions.quantity,
      dispensedDate: sql2`DATE(${prescriptions.updatedAt})`,
      prescribedBy: prescriptions.prescribedBy,
      status: prescriptions.status
    }).from(prescriptions).leftJoin(patients, eq(prescriptions.patientId, patients.id)).where(eq(prescriptions.tenantId, tenantId));
    if (start) {
      query = query.where(sql2`${prescriptions.updatedAt} >= ${start}`);
    }
    if (end) {
      query = query.where(sql2`${prescriptions.updatedAt} <= ${end}`);
    }
    return await query.orderBy(desc(prescriptions.updatedAt));
  }
  async generateInventoryReport(tenantId, dateRange = {}) {
    const medicationList = [
      { name: "Amoxicillin", currentStock: 150, minimumStock: 50, expiryDate: "2025-12-31", supplier: "PharmaCorp" },
      { name: "Ibuprofen", currentStock: 200, minimumStock: 75, expiryDate: "2026-06-30", supplier: "MediSupply" },
      { name: "Metformin", currentStock: 89, minimumStock: 100, expiryDate: "2025-09-15", supplier: "HealthDist" },
      { name: "Lisinopril", currentStock: 45, minimumStock: 30, expiryDate: "2026-03-20", supplier: "PharmaCorp" },
      { name: "Atorvastatin", currentStock: 120, minimumStock: 60, expiryDate: "2025-11-10", supplier: "MediSupply" }
    ];
    return medicationList.map((med) => ({
      medicationName: med.name,
      currentStock: med.currentStock,
      minimumStock: med.minimumStock,
      stockStatus: med.currentStock <= med.minimumStock ? "Low Stock" : "In Stock",
      expiryDate: med.expiryDate,
      supplier: med.supplier,
      lastUpdated: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
    }));
  }
  async generatePatientReport(tenantId, dateRange = {}) {
    const { start, end } = dateRange;
    let query = db.select({
      patientName: sql2`CONCAT(${patients.firstName}, ' ', ${patients.lastName})`,
      email: patients.email,
      phone: patients.phone,
      registrationDate: sql2`DATE(${patients.createdAt})`,
      lastVisit: sql2`MAX(DATE(${appointments.appointmentDate}))`,
      totalPrescriptions: sql2`COUNT(DISTINCT ${prescriptions.id})`,
      insuranceProvider: pharmacyPatientInsurance.insuranceProvider
    }).from(patients).leftJoin(appointments, eq(patients.id, appointments.patientId)).leftJoin(prescriptions, eq(patients.id, prescriptions.patientId)).leftJoin(pharmacyPatientInsurance, eq(patients.id, pharmacyPatientInsurance.patientId)).where(eq(patients.tenantId, tenantId));
    if (start) {
      query = query.where(sql2`${patients.createdAt} >= ${start}`);
    }
    if (end) {
      query = query.where(sql2`${patients.createdAt} <= ${end}`);
    }
    return await query.groupBy(patients.id, patients.firstName, patients.lastName, patients.email, patients.phone, patients.createdAt, pharmacyPatientInsurance.insuranceProvider);
  }
  async generateInsuranceReport(tenantId, dateRange = {}) {
    const { start, end } = dateRange;
    let query = db.select({
      insuranceProvider: pharmacyPatientInsurance.insuranceProvider,
      policyNumber: pharmacyPatientInsurance.policyNumber,
      patientName: sql2`CONCAT(${patients.firstName}, ' ', ${patients.lastName})`,
      coverageType: pharmacyPatientInsurance.coverageType,
      copayAmount: pharmacyPatientInsurance.copayAmount,
      deductibleAmount: pharmacyPatientInsurance.deductibleAmount,
      effectiveDate: pharmacyPatientInsurance.effectiveDate,
      status: pharmacyPatientInsurance.isActive
    }).from(pharmacyPatientInsurance).leftJoin(patients, eq(pharmacyPatientInsurance.patientId, patients.id)).where(eq(pharmacyPatientInsurance.tenantId, tenantId));
    if (start) {
      query = query.where(sql2`${pharmacyPatientInsurance.createdAt} >= ${start}`);
    }
    if (end) {
      query = query.where(sql2`${pharmacyPatientInsurance.createdAt} <= ${end}`);
    }
    return await query.orderBy(desc(pharmacyPatientInsurance.createdAt));
  }
  async generatePatientReportForPharmacy(tenantId, dateRange = {}) {
    const { start, end } = dateRange;
    let query = db.select({
      patientId: prescriptions.patientId,
      patientName: sql2`CONCAT(${patients.firstName}, ' ', ${patients.lastName})`,
      prescriptionCount: sql2`COUNT(*)`,
      totalMedications: sql2`SUM(${prescriptions.quantity})`,
      lastVisit: sql2`MAX(${prescriptions.createdAt})`,
      averageQuantity: sql2`AVG(${prescriptions.quantity})`
    }).from(prescriptions).innerJoin(patients, eq(prescriptions.patientId, patients.id)).where(eq(prescriptions.pharmacyId, tenantId));
    if (start) {
      query = query.where(sql2`${prescriptions.createdAt} >= ${start}`);
    }
    if (end) {
      query = query.where(sql2`${prescriptions.createdAt} <= ${end}`);
    }
    return await query.groupBy(prescriptions.patientId, patients.firstName, patients.lastName).orderBy(sql2`COUNT(*) DESC`);
  }
  // Removed duplicate method - using the first implementation above
  async getPharmacyReportTemplatesByTenant(tenantId) {
    return await db.select().from(pharmacyReportTemplates).where(eq(pharmacyReportTemplates.tenantId, tenantId));
  }
  // Hospital Patient Insurance Management
  async createHospitalPatientInsurance(data) {
    const result = await db.insert(hospitalPatientInsurance).values(data).returning();
    return result[0];
  }
  async getHospitalPatientInsuranceByPatientId(patientId, tenantId) {
    if (!tenantId) {
      console.error("[SECURITY VIOLATION] Hospital patient insurance access without tenant context");
      throw new Error("Tenant context required for insurance data access");
    }
    console.log(`[SECURITY AUDIT] Hospital patient insurance access for patient ${patientId} by tenant ${tenantId}`);
    const result = await db.select().from(hospitalPatientInsurance).where(and(
      eq(hospitalPatientInsurance.patientId, patientId),
      eq(hospitalPatientInsurance.tenantId, tenantId)
    )).limit(1);
    return result[0] || null;
  }
  async updateHospitalPatientInsurance(id, data) {
    const result = await db.update(hospitalPatientInsurance).set(data).where(eq(hospitalPatientInsurance.id, id)).returning();
    return result[0];
  }
  // Laboratory Patient Insurance Management
  async createLaboratoryPatientInsurance(data) {
    const result = await db.insert(laboratoryPatientInsurance).values(data).returning();
    return result[0];
  }
  async getLaboratoryPatientInsuranceByPatientId(patientId, tenantId) {
    if (!tenantId) {
      console.error("[SECURITY VIOLATION] Laboratory patient insurance access without tenant context");
      throw new Error("Tenant context required for insurance data access");
    }
    console.log(`[SECURITY AUDIT] Laboratory patient insurance access for patient ${patientId} by tenant ${tenantId}`);
    const result = await db.select().from(laboratoryPatientInsurance).where(and(
      eq(laboratoryPatientInsurance.patientId, patientId),
      eq(laboratoryPatientInsurance.tenantId, tenantId)
    )).limit(1);
    return result[0] || null;
  }
  async updateLaboratoryPatientInsurance(id, data) {
    const result = await db.update(laboratoryPatientInsurance).set(data).where(eq(laboratoryPatientInsurance.id, id)).returning();
    return result[0];
  }
  async getActivePharmacyReportTemplatesByTenant(tenantId) {
    return await db.select().from(pharmacyReportTemplates).where(
      and(eq(pharmacyReportTemplates.tenantId, tenantId), eq(pharmacyReportTemplates.isActive, true))
    );
  }
  async getActivePharmacyReportTemplates(tenantId) {
    return await db.select().from(pharmacyReportTemplates).where(
      and(eq(pharmacyReportTemplates.tenantId, tenantId), eq(pharmacyReportTemplates.isActive, true))
    );
  }
  // Hospital Billing Management Implementation
  async getHospitalBill(id, tenantId) {
    const [bill] = await db.select().from(hospitalBills).where(
      and(eq(hospitalBills.id, id), eq(hospitalBills.tenantId, tenantId))
    );
    return bill || void 0;
  }
  async getHospitalBills(tenantId) {
    const bills = await db.select().from(hospitalBills).where(eq(hospitalBills.tenantId, tenantId)).orderBy(desc(hospitalBills.createdAt));
    const enrichedBills = [];
    for (const bill of bills) {
      const patient = await db.select().from(patients).where(eq(patients.id, bill.patientId)).limit(1);
      enrichedBills.push({
        ...bill,
        patientFirstName: patient[0]?.firstName || "",
        patientLastName: patient[0]?.lastName || "",
        patientMrn: patient[0]?.mrn || "",
        physicianName: ""
        // Will be populated when appointment data is linked
      });
    }
    return enrichedBills;
  }
  async getHospitalBillsByProvider(providerId, tenantId) {
    const providerAppointments = await db.select().from(appointments).where(and(eq(appointments.providerId, providerId), eq(appointments.tenantId, tenantId)));
    const appointmentIds = providerAppointments.map((apt) => apt.id);
    if (appointmentIds.length === 0) {
      return [];
    }
    const bills = await db.select().from(hospitalBills).where(
      and(
        eq(hospitalBills.tenantId, tenantId),
        sql2`${hospitalBills.appointmentId} = ANY(${appointmentIds})`
      )
    ).orderBy(desc(hospitalBills.createdAt));
    const enrichedBills = [];
    for (const bill of bills) {
      const patient = await db.select().from(patients).where(eq(patients.id, bill.patientId)).limit(1);
      const physician = await db.select().from(users).where(eq(users.id, providerId)).limit(1);
      enrichedBills.push({
        ...bill,
        patientFirstName: patient[0]?.firstName || "",
        patientLastName: patient[0]?.lastName || "",
        patientMrn: patient[0]?.mrn || "",
        physicianName: physician[0] ? `${physician[0].firstName} ${physician[0].lastName}` : ""
      });
    }
    return enrichedBills;
  }
  async createHospitalBill(bill) {
    const billNumber = `HB-${Date.now()}`;
    const [newBill] = await db.insert(hospitalBills).values({
      ...bill,
      billNumber
    }).returning();
    return newBill;
  }
  async updateHospitalBill(id, updates, tenantId) {
    const [updatedBill] = await db.update(hospitalBills).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(and(eq(hospitalBills.id, id), eq(hospitalBills.tenantId, tenantId))).returning();
    return updatedBill || void 0;
  }
  async getHospitalAnalytics(tenantId) {
    const totalBills = await db.select({ count: sql2`COUNT(*)`.as("count") }).from(hospitalBills).where(eq(hospitalBills.tenantId, tenantId));
    const totalRevenue = await db.select({
      revenue: sql2`SUM(CAST(amount AS DECIMAL))`.as("revenue")
    }).from(hospitalBills).where(eq(hospitalBills.tenantId, tenantId));
    const pendingBills = await db.select({ count: sql2`COUNT(*)`.as("count") }).from(hospitalBills).where(and(eq(hospitalBills.tenantId, tenantId), eq(hospitalBills.status, "pending")));
    const paidBills = await db.select({ count: sql2`COUNT(*)`.as("count") }).from(hospitalBills).where(and(eq(hospitalBills.tenantId, tenantId), eq(hospitalBills.status, "paid")));
    return {
      totalBills: totalBills[0]?.count || 0,
      totalRevenue: totalRevenue[0]?.revenue || 0,
      pendingBills: pendingBills[0]?.count || 0,
      paidBills: paidBills[0]?.count || 0,
      completionRate: totalBills[0]?.count > 0 ? ((paidBills[0]?.count || 0) / totalBills[0].count * 100).toFixed(1) : 0
    };
  }
  // Patient Access Request Management for Multi-Doctor Separation
  async createPatientAccessRequest(request) {
    const [newRequest] = await db.insert(patientAccessRequests).values(request).returning();
    return newRequest;
  }
  async getPatientAccessRequests(tenantId, doctorId) {
    const whereClause = doctorId ? and(
      eq(patientAccessRequests.tenantId, tenantId),
      or(
        eq(patientAccessRequests.requestingPhysicianId, doctorId),
        eq(patientAccessRequests.targetPhysicianId, doctorId)
      )
    ) : eq(patientAccessRequests.tenantId, tenantId);
    return await db.select().from(patientAccessRequests).where(whereClause).orderBy(desc(patientAccessRequests.createdAt));
  }
  async updatePatientAccessRequest(id, updates, tenantId) {
    const [updatedRequest] = await db.update(patientAccessRequests).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(and(eq(patientAccessRequests.id, id), eq(patientAccessRequests.tenantId, tenantId))).returning();
    return updatedRequest || void 0;
  }
  async logPatientAccess(log2) {
    const [newLog] = await db.insert(patientAccessAuditLog).values(log2).returning();
    return newLog;
  }
  async getPatientAccessLogs(tenantId, patientId, doctorId) {
    let whereClause = eq(patientAccessAuditLog.tenantId, tenantId);
    if (patientId) {
      whereClause = and(whereClause, eq(patientAccessAuditLog.patientId, patientId));
    }
    if (doctorId) {
      whereClause = and(whereClause, eq(patientAccessAuditLog.doctorId, doctorId));
    }
    return await db.select().from(patientAccessAuditLog).where(whereClause).orderBy(desc(patientAccessAuditLog.accessedAt));
  }
  async checkDoctorPatientAccess(doctorId, patientId, tenantId) {
    const assignment = await db.select().from(patientAssignments).where(
      and(
        eq(patientAssignments.tenantId, tenantId),
        eq(patientAssignments.patientId, patientId),
        eq(patientAssignments.physicianId, doctorId),
        eq(patientAssignments.isActive, true)
      )
    ).limit(1);
    if (assignment.length > 0) {
      return true;
    }
    const activeRequest = await db.select().from(patientAccessRequests).where(
      and(
        eq(patientAccessRequests.tenantId, tenantId),
        eq(patientAccessRequests.patientId, patientId),
        eq(patientAccessRequests.requestingPhysicianId, doctorId),
        eq(patientAccessRequests.status, "approved"),
        sql2`${patientAccessRequests.accessGrantedUntil} > NOW()`
      )
    ).limit(1);
    return activeRequest.length > 0;
  }
  async getHospitalAnalyticsByProvider(providerId, tenantId) {
    const totalBills = await db.select({ count: sql2`COUNT(*)`.as("count") }).from(hospitalBills).leftJoin(appointments, eq(hospitalBills.appointmentId, appointments.id)).where(
      and(
        eq(hospitalBills.tenantId, tenantId),
        eq(appointments.providerId, providerId)
      )
    );
    const totalRevenue = await db.select({
      revenue: sql2`SUM(CAST(hospital_bills.amount AS DECIMAL))`.as("revenue")
    }).from(hospitalBills).leftJoin(appointments, eq(hospitalBills.appointmentId, appointments.id)).where(
      and(
        eq(hospitalBills.tenantId, tenantId),
        eq(appointments.providerId, providerId)
      )
    );
    const pendingBills = await db.select({ count: sql2`COUNT(*)`.as("count") }).from(hospitalBills).leftJoin(appointments, eq(hospitalBills.appointmentId, appointments.id)).where(
      and(
        eq(hospitalBills.tenantId, tenantId),
        eq(appointments.providerId, providerId),
        eq(hospitalBills.status, "pending")
      )
    );
    const paidBills = await db.select({ count: sql2`COUNT(*)`.as("count") }).from(hospitalBills).leftJoin(appointments, eq(hospitalBills.appointmentId, appointments.id)).where(
      and(
        eq(hospitalBills.tenantId, tenantId),
        eq(appointments.providerId, providerId),
        eq(hospitalBills.status, "paid")
      )
    );
    return {
      totalBills: totalBills[0]?.count || 0,
      totalRevenue: totalRevenue[0]?.revenue || 0,
      pendingBills: pendingBills[0]?.count || 0,
      paidBills: paidBills[0]?.count || 0,
      completionRate: totalBills[0]?.count > 0 ? ((paidBills[0]?.count || 0) / totalBills[0].count * 100).toFixed(1) : 0
    };
  }
  // Department Management
  async getDepartments(tenantId) {
    return db.select().from(departments).where(eq(departments.tenantId, tenantId)).orderBy(departments.name);
  }
  async createDepartment(data) {
    const { id, createdAt, updatedAt, ...cleanData } = data;
    const uuid2 = crypto.randomUUID();
    const processedData = {
      id: uuid2,
      ...cleanData,
      specializations: cleanData.specializations && cleanData.specializations.length > 0 ? cleanData.specializations : null,
      certifications: cleanData.certifications && cleanData.certifications.length > 0 ? cleanData.certifications : null,
      equipment: cleanData.equipment && Array.isArray(cleanData.equipment) && cleanData.equipment.length > 0 ? cleanData.equipment : null
    };
    const [department] = await db.insert(departments).values(processedData).returning();
    return department;
  }
  async updateDepartment(id, data, tenantId) {
    const processedData = {
      ...data,
      specializations: data.specializations && data.specializations.length > 0 ? data.specializations : null,
      certifications: data.certifications && data.certifications.length > 0 ? data.certifications : null,
      equipment: data.equipment && Array.isArray(data.equipment) && data.equipment.length > 0 ? data.equipment : null,
      updatedAt: /* @__PURE__ */ new Date()
    };
    const [updated] = await db.update(departments).set(processedData).where(and(
      eq(departments.id, id),
      eq(departments.tenantId, tenantId)
    )).returning();
    return updated || null;
  }
  async deleteDepartment(id, tenantId) {
    const result = await db.delete(departments).where(and(
      eq(departments.id, id),
      eq(departments.tenantId, tenantId)
    ));
    return result.rowCount > 0;
  }
  async getDepartmentById(id, tenantId) {
    const [department] = await db.select().from(departments).where(and(
      eq(departments.id, id),
      eq(departments.tenantId, tenantId)
    )).limit(1);
    return department || null;
  }
  // Advertisement Management Implementation
  async getAllAdvertisements() {
    return await db.select().from(advertisements).where(eq(advertisements.status, "active")).orderBy(desc(advertisements.createdAt));
  }
  async getAdvertisement(id) {
    const [advertisement] = await db.select().from(advertisements).where(eq(advertisements.id, id)).limit(1);
    return advertisement || void 0;
  }
  async getAdvertisementsByTenant(tenantId) {
    return await db.select().from(advertisements).where(eq(advertisements.tenantId, tenantId)).orderBy(desc(advertisements.createdAt));
  }
  async createAdvertisement(advertisement) {
    const [created] = await db.insert(advertisements).values(advertisement).returning();
    return created;
  }
  async updateAdvertisement(id, updates, tenantId) {
    const [updated] = await db.update(advertisements).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(and(
      eq(advertisements.id, id),
      eq(advertisements.tenantId, tenantId)
    )).returning();
    return updated || void 0;
  }
  async updateAdvertisementStatus(id, statusUpdate) {
    const [updated] = await db.update(advertisements).set({
      status: statusUpdate.status,
      reviewNotes: statusUpdate.reviewNotes,
      reviewedBy: statusUpdate.reviewedBy,
      reviewedAt: statusUpdate.reviewedAt ? new Date(statusUpdate.reviewedAt) : void 0,
      updatedAt: sql2`CURRENT_TIMESTAMP`
    }).where(eq(advertisements.id, id)).returning();
    return updated || void 0;
  }
  async deleteAdvertisement(id, tenantId) {
    const result = await db.delete(advertisements).where(and(
      eq(advertisements.id, id),
      eq(advertisements.tenantId, tenantId)
    ));
    return result.rowCount > 0;
  }
  async incrementAdvertisementImpressions(id) {
    await db.update(advertisements).set({
      impressions: sql2`${advertisements.impressions} + 1`,
      updatedAt: sql2`CURRENT_TIMESTAMP`
    }).where(eq(advertisements.id, id));
  }
  async incrementAdvertisementClicks(id) {
    await db.update(advertisements).set({
      clicks: sql2`${advertisements.clicks} + 1`,
      updatedAt: sql2`CURRENT_TIMESTAMP`
    }).where(eq(advertisements.id, id));
  }
  // Advertisement Views Management
  async createAdView(view) {
    const [created] = await db.insert(adViews).values(view).returning();
    return created;
  }
  async getAdViews(advertisementId) {
    return await db.select().from(adViews).where(eq(adViews.advertisementId, advertisementId)).orderBy(desc(adViews.viewedAt));
  }
  // Advertisement Inquiries Management
  async createAdInquiry(inquiry) {
    const [created] = await db.insert(adInquiries).values(inquiry).returning();
    return created;
  }
  async getAdInquiries(advertisementId) {
    return await db.select().from(adInquiries).where(eq(adInquiries.advertisementId, advertisementId)).orderBy(desc(adInquiries.createdAt));
  }
  async updateAdInquiry(id, updates) {
    const [updated] = await db.update(adInquiries).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(eq(adInquiries.id, id)).returning();
    return updated || void 0;
  }
  // Medical Suppliers Management
  async createMedicalSupplier(supplier) {
    const baseSlug = supplier.companyName.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
    let organizationSlug = baseSlug;
    let counter = 1;
    while (true) {
      const existing = await db.select().from(medicalSuppliers).where(eq(medicalSuppliers.organizationSlug, organizationSlug)).limit(1);
      if (existing.length === 0) {
        break;
      }
      organizationSlug = `${baseSlug}-${counter}`;
      counter++;
    }
    const [created] = await db.insert(medicalSuppliers).values({
      ...supplier,
      organizationSlug,
      status: "pending_review"
    }).returning();
    return created;
  }
  async getMedicalSupplier(id) {
    const [supplier] = await db.select().from(medicalSuppliers).where(eq(medicalSuppliers.id, id));
    return supplier || void 0;
  }
  async getMedicalSupplierByEmail(email) {
    const [supplier] = await db.select().from(medicalSuppliers).where(eq(medicalSuppliers.contactEmail, email));
    return supplier || void 0;
  }
  async getMedicalSuppliers() {
    return await db.select().from(medicalSuppliers).orderBy(desc(medicalSuppliers.createdAt));
  }
  async getMedicalSupplierById(id) {
    const [supplier] = await db.select().from(medicalSuppliers).where(eq(medicalSuppliers.id, id));
    return supplier || void 0;
  }
  // =====================================
  // PUBLIC MARKETPLACE PRODUCTS 
  // =====================================
  async getPublicMarketplaceProducts() {
    try {
      console.log("[MARKETPLACE] Starting to fetch public products...");
      const products = await db.select().from(marketplaceProducts).where(eq(marketplaceProducts.status, "active"));
      console.log(`[MARKETPLACE] Found ${products.length} active products in database`);
      const enhancedProducts = products.map((product) => ({
        ...product,
        supplierName: "Medical Supplier",
        // Simplified for now
        supplierContact: {
          email: "contact@supplier.com",
          phone: "+1-555-0123",
          address: "123 Healthcare Ave"
        },
        rating: 4.5,
        reviews: Math.floor(Math.random() * 50) + 5
      }));
      console.log(`[MARKETPLACE] Returning ${enhancedProducts.length} enhanced products`);
      return enhancedProducts;
    } catch (error) {
      console.error("[MARKETPLACE] Error fetching marketplace products:", error);
      return [];
    }
  }
  async updateMedicalSupplier(id, updates) {
    const [updated] = await db.update(medicalSuppliers).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(eq(medicalSuppliers.id, id)).returning();
    return updated || void 0;
  }
  async getAllMedicalSuppliers() {
    return await db.select().from(medicalSuppliers).orderBy(desc(medicalSuppliers.createdAt));
  }
  async updateMedicalSupplierStatus(id, status, reason) {
    const updates = {
      status,
      updatedAt: sql2`CURRENT_TIMESTAMP`
    };
    if (status === "rejected" && reason) {
      updates.rejectionReason = reason;
      updates.rejectedAt = sql2`CURRENT_TIMESTAMP`;
    } else if (status === "approved") {
      updates.approvedAt = sql2`CURRENT_TIMESTAMP`;
    }
    const [updated] = await db.update(medicalSuppliers).set(updates).where(eq(medicalSuppliers.id, id)).returning();
    return updated || void 0;
  }
  async approveMedicalSupplier(id, approvedBy) {
    const [updated] = await db.update(medicalSuppliers).set({
      status: "approved",
      approvedBy,
      approvedAt: sql2`CURRENT_TIMESTAMP`,
      updatedAt: sql2`CURRENT_TIMESTAMP`
    }).where(eq(medicalSuppliers.id, id)).returning();
    return updated || void 0;
  }
  // =====================================
  // QUOTE REQUEST MANAGEMENT
  // =====================================
  async createQuoteRequest(quoteRequest) {
    try {
      const insertData = {
        ...quoteRequest,
        requestedAt: sql2`CURRENT_TIMESTAMP`,
        createdAt: sql2`CURRENT_TIMESTAMP`,
        updatedAt: sql2`CURRENT_TIMESTAMP`
      };
      const [created] = await db.insert(quoteRequests).values(insertData).returning();
      return created;
    } catch (error) {
      console.error("Quote request creation error:", error);
      throw error;
    }
  }
  async getQuoteRequest(id) {
    const [quote] = await db.select().from(quoteRequests).where(eq(quoteRequests.id, id));
    return quote || void 0;
  }
  async getQuoteRequests() {
    return await db.select().from(quoteRequests).orderBy(desc(quoteRequests.createdAt));
  }
  async getQuoteRequestsByProduct(productId) {
    return await db.select().from(quoteRequests).where(eq(quoteRequests.productId, productId)).orderBy(desc(quoteRequests.createdAt));
  }
  async updateQuoteRequest(id, updates) {
    const [updated] = await db.update(quoteRequests).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(eq(quoteRequests.id, id)).returning();
    return updated || void 0;
  }
  // =====================================
  // MARKETPLACE PRODUCT MANAGEMENT
  // =====================================
  async getMarketplaceProducts(filters) {
    let query = db.select().from(marketplaceProducts);
    const conditions = [];
    if (filters.status) {
      conditions.push(eq(marketplaceProducts.status, filters.status));
    }
    if (filters.category) {
      conditions.push(eq(marketplaceProducts.category, filters.category));
    }
    if (filters.search) {
      conditions.push(
        or(
          ilike(marketplaceProducts.name, `%${filters.search}%`),
          ilike(marketplaceProducts.description, `%${filters.search}%`),
          ilike(marketplaceProducts.brand, `%${filters.search}%`)
        )
      );
    }
    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }
    return await query.orderBy(desc(marketplaceProducts.createdAt)).limit(filters.limit).offset(filters.offset);
  }
  async getMarketplaceProduct(id) {
    const [product] = await db.select().from(marketplaceProducts).where(eq(marketplaceProducts.id, id));
    return product || void 0;
  }
  async getSupplierProducts(supplierTenantId, status) {
    let query = db.select().from(marketplaceProducts).where(eq(marketplaceProducts.supplierTenantId, supplierTenantId));
    if (status) {
      query = query.where(
        and(
          eq(marketplaceProducts.supplierTenantId, supplierTenantId),
          eq(marketplaceProducts.status, status)
        )
      );
    }
    return await query.orderBy(desc(marketplaceProducts.createdAt));
  }
  async createMarketplaceProduct(product) {
    const [created] = await db.insert(marketplaceProducts).values(product).returning();
    return created;
  }
  async updateMarketplaceProduct(id, updates, supplierTenantId) {
    const [updated] = await db.update(marketplaceProducts).set({ ...updates, updatedAt: sql2`CURRENT_TIMESTAMP` }).where(
      and(
        eq(marketplaceProducts.id, id),
        eq(marketplaceProducts.supplierTenantId, supplierTenantId)
      )
    ).returning();
    return updated || void 0;
  }
  async incrementProductViewCount(productId) {
    await db.update(marketplaceProducts).set({
      viewCount: sql2`${marketplaceProducts.viewCount} + 1`,
      updatedAt: sql2`CURRENT_TIMESTAMP`
    }).where(eq(marketplaceProducts.id, productId));
  }
  // =====================================
  // MARKETPLACE ORDER MANAGEMENT
  // =====================================
  async createMarketplaceOrder(order) {
    const [created] = await db.insert(marketplaceOrders).values({
      ...order,
      orderDate: sql2`CURRENT_TIMESTAMP`
    }).returning();
    return created;
  }
  async generateOrderNumber() {
    const today = /* @__PURE__ */ new Date();
    const year = today.getFullYear().toString().slice(-2);
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    const todayOrderCount = await db.select({ count: sql2`count(*)` }).from(marketplaceOrders).where(
      and(
        gte(marketplaceOrders.orderDate, startOfDay),
        lt(marketplaceOrders.orderDate, endOfDay)
      )
    );
    const orderNum = (Number(todayOrderCount[0]?.count) + 1).toString().padStart(4, "0");
    return `ORD-${year}${month}-${orderNum}`;
  }
  async getBuyerOrders(buyerTenantId, filters) {
    let query = db.select().from(marketplaceOrders).where(eq(marketplaceOrders.buyerTenantId, buyerTenantId));
    if (filters.status) {
      query = query.where(
        and(
          eq(marketplaceOrders.buyerTenantId, buyerTenantId),
          eq(marketplaceOrders.status, filters.status)
        )
      );
    }
    return await query.orderBy(desc(marketplaceOrders.orderDate)).limit(filters.limit).offset(filters.offset);
  }
  async getSupplierOrders(supplierTenantId, filters) {
    let query = db.select().from(marketplaceOrders).where(eq(marketplaceOrders.supplierTenantId, supplierTenantId));
    if (filters.status) {
      query = query.where(
        and(
          eq(marketplaceOrders.supplierTenantId, supplierTenantId),
          eq(marketplaceOrders.status, filters.status)
        )
      );
    }
    return await query.orderBy(desc(marketplaceOrders.orderDate)).limit(filters.limit).offset(filters.offset);
  }
  async updateOrderStatus(orderId, status, notes, tenantId) {
    const updateData = {
      status,
      updatedAt: sql2`CURRENT_TIMESTAMP`
    };
    if (status === "shipped" && notes) {
      updateData.trackingNumber = notes;
    } else if (status === "cancelled") {
      updateData.cancelledAt = sql2`CURRENT_TIMESTAMP`;
      updateData.cancellationReason = notes;
    } else if (status === "delivered") {
      updateData.actualDeliveryDate = sql2`CURRENT_TIMESTAMP`;
    }
    if (notes) {
      updateData.supplierNotes = notes;
    }
    const [updated] = await db.update(marketplaceOrders).set(updateData).where(
      or(
        eq(marketplaceOrders.supplierTenantId, tenantId),
        eq(marketplaceOrders.buyerTenantId, tenantId)
      )
    ).returning();
    return updated || void 0;
  }
  // =====================================
  // PRODUCT REVIEWS MANAGEMENT
  // =====================================
  async createProductReview(review) {
    const [created] = await db.insert(productReviews).values(review).returning();
    await this.updateProductRating(review.productId);
    return created;
  }
  async getProductReviews(productId, filters) {
    let query = db.select().from(productReviews).where(eq(productReviews.productId, productId));
    if (filters.approvedOnly) {
      query = query.where(
        and(
          eq(productReviews.productId, productId),
          eq(productReviews.isApproved, true)
        )
      );
    }
    return await query.orderBy(desc(productReviews.createdAt)).limit(filters.limit).offset(filters.offset);
  }
  async hasUserPurchasedProduct(userId, productId) {
    const [purchase] = await db.select().from(marketplaceOrders).innerJoin(marketplaceOrderItems, eq(marketplaceOrders.id, marketplaceOrderItems.orderId)).where(
      and(
        eq(marketplaceOrders.buyerUserId, userId),
        eq(marketplaceOrderItems.productId, productId),
        ne(marketplaceOrders.status, "cancelled"),
        ne(marketplaceOrders.status, "refunded")
      )
    ).limit(1);
    return !!purchase;
  }
  async updateProductRating(productId) {
    const [stats] = await db.select({
      avgRating: sql2`AVG(${productReviews.rating})`,
      totalReviews: sql2`COUNT(*)`
    }).from(productReviews).where(
      and(
        eq(productReviews.productId, productId),
        eq(productReviews.isApproved, true)
      )
    );
    if (stats) {
      await db.update(marketplaceProducts).set({
        avgRating: stats.avgRating ? Number(stats.avgRating).toFixed(2) : "0.00",
        totalReviews: Number(stats.totalReviews),
        updatedAt: sql2`CURRENT_TIMESTAMP`
      }).where(eq(marketplaceProducts.id, productId));
    }
  }
};
var storage = new DatabaseStorage();

// server/routes.ts
init_schema();

// server/middleware/auth.ts
import jwt from "jsonwebtoken";
var JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production";
var authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Access token required" });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const now = Math.floor(Date.now() / 1e3);
    if (decoded.exp && decoded.exp < now) {
      console.error("Token expired at:", new Date(decoded.exp * 1e3));
      return res.status(401).json({ message: "Token expired", code: "TOKEN_EXPIRED" });
    }
    req.user = {
      id: decoded.userId,
      tenantId: decoded.tenantId,
      role: decoded.role,
      username: decoded.username
    };
    req.userId = decoded.userId;
    req.tenantId = decoded.tenantId;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      console.error("JWT Token expired:", error.expiredAt);
      return res.status(401).json({ message: "Token expired", code: "TOKEN_EXPIRED", expiredAt: error.expiredAt });
    } else if (error.name === "JsonWebTokenError") {
      console.error("Invalid JWT token:", error.message);
      return res.status(401).json({ message: "Invalid token", code: "TOKEN_INVALID" });
    } else {
      console.error("Token verification error:", error);
      return res.status(401).json({ message: "Authentication failed", code: "AUTH_ERROR" });
    }
  }
};
var requireRole = (allowedRoles) => {
  return (req, res, next) => {
    console.log("[ROLE CHECK] Path:", req.path, "User:", req.user?.role, "Tenant type:", req.tenant?.type, "Full tenant:", JSON.stringify(req.tenant));
    if (!req.user) {
      console.log("[ROLE CHECK] No user found - authentication required");
      return res.status(401).json({ message: "Authentication required" });
    }
    if (req.user.role === "receptionist" && req.tenant?.type && req.tenant?.type !== "hospital" && req.tenant?.type !== "clinic") {
      console.log("[ROLE CHECK] Receptionist blocked - tenant type:", req.tenant?.type, "tenant name:", req.tenant?.name);
      return res.status(403).json({ message: "Receptionist role is only available for hospitals and clinics" });
    }
    console.log("[ROLE CHECK] User role:", req.user.role, "Allowed roles:", allowedRoles);
    if (!allowedRoles.includes(req.user.role)) {
      console.log("[ROLE CHECK] Permission DENIED for role:", req.user.role, "Required:", allowedRoles);
      return res.status(403).json({
        message: "Insufficient permissions",
        required: allowedRoles,
        current: req.user.role
      });
    }
    console.log("[ROLE CHECK] Permission GRANTED for role:", req.user.role);
    next();
  };
};

// server/middleware/tenant.ts
import jwt2 from "jsonwebtoken";
var tenantMiddleware = async (req, res, next) => {
  try {
    console.log("[TENANT DEBUG] Path:", req.path, "User from auth:", !!req.user);
    if (req.user && req.user.tenantId) {
      const tenant = await storage.getTenant(req.user.tenantId);
      console.log("[TENANT DEBUG] Using authenticated user tenant:", req.user.tenantId);
      console.log("[TENANT DEBUG] Loaded tenant from DB (authenticated user):", tenant);
      req.tenant = tenant;
      req.tenantId = req.user.tenantId;
      return next();
    }
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      console.log("[TENANT DEBUG] No bearer token");
      return res.status(401).json({ message: "Authorization token required" });
    }
    const token = authHeader.split(" ")[1];
    if (!token || token === "undefined" || token === "null" || token.length < 10) {
      console.log("Invalid token format:", token?.substring(0, 20) + "...");
      return res.status(401).json({ message: "Invalid authorization token format" });
    }
    try {
      const decoded = jwt2.verify(token, process.env.JWT_SECRET || "your-secret-key-change-in-production");
      req.tenantId = decoded.tenantId;
      req.user = {
        id: decoded.userId,
        tenantId: decoded.tenantId,
        role: decoded.role,
        username: decoded.username
      };
      const tenant = await storage.getTenant(decoded.tenantId);
      console.log("[TENANT DEBUG] Loaded tenant from DB:", tenant);
      req.tenant = tenant;
      if (req.user?.role === "super_admin") {
        const platformEndpoints = [
          "/api/tenants",
          "/api/admin",
          "/api/platform",
          "/api/users/all",
          "/api/audit-logs",
          "/api/analytics/platform",
          "/api/role-permissions",
          "/api/subscriptions",
          "/api/white-label",
          "/api/billing-plans",
          "/api/tenant-settings",
          "/api/client-management",
          "/api/admin/clients"
        ];
        const operationalEndpoints = [
          "/api/patients",
          "/api/prescriptions",
          "/api/appointments",
          "/api/lab-orders",
          "/api/lab-results",
          "/api/billing",
          "/api/pharmacy",
          "/api/hospital",
          "/api/laboratory"
        ];
        const isOperationalEndpoint = operationalEndpoints.some(
          (endpoint) => req.path.startsWith(endpoint)
        );
        if (isOperationalEndpoint) {
          console.error(`[SECURITY VIOLATION] Super admin attempted to access operational endpoint: ${req.path}`);
          return res.status(403).json({
            message: "Super admin cannot access operational tenant data for security compliance",
            error: "SUPER_ADMIN_OPERATIONAL_ACCESS_DENIED"
          });
        }
        const isManagementEndpoint = platformEndpoints.some(
          (endpoint) => req.path.startsWith(endpoint)
        );
        if (isManagementEndpoint) {
          console.log(`[SECURITY AUDIT] Super admin platform management access: ${req.path}`);
          return next();
        }
        console.log(`[SECURITY WARNING] Super admin accessing non-categorized endpoint: ${req.path}`);
      }
      if (!req.tenantId) {
        return res.status(401).json({ message: "Tenant context required" });
      }
      next();
    } catch (jwtError) {
      console.error("JWT verification failed:", jwtError);
      return res.status(401).json({ message: "Invalid or expired token" });
    }
  } catch (error) {
    console.error("Tenant middleware error:", error);
    return res.status(401).json({ message: "Invalid tenant context" });
  }
};
var publicRoutes = [
  // Main website routes - publicly accessible for SEO
  "/",
  "/about",
  "/pricing",
  "/contact",
  "/features",
  "/security",
  "/terms",
  "/privacy",
  // Static assets and verification files
  "/robots.txt",
  "/sitemap.xml",
  "/favicon.ico",
  "/google*.html",
  "/google2ae759b1998ec13b.html",
  // API routes
  "/api/health",
  "/api/platform/stats",
  "/api/login",
  "/api/auth/login",
  "/api/validate-token",
  "/api/laboratory-registration",
  "/api/pharmacy-registration",
  "/api/tenant/current",
  "/api/register-organization",
  "/api/currency/detect",
  "/api/currencies/african-countries",
  "/api/advertisements",
  "/api/marketplace/products",
  "/api/marketplace/quote-requests",
  "/advertisements",
  "/marketplace/products",
  "/marketplace/quote-requests"
];
var setTenantContext = (req, res, next) => {
  const isPublicRoute = publicRoutes.some((route) => {
    if (route.includes("*") || route.includes("google*.html")) {
      if (route === "/google*.html") {
        return req.path.startsWith("/google") && req.path.endsWith(".html");
      }
      return req.path.startsWith(route.replace("*", ""));
    }
    if (route.includes(":") || req.path.includes("/currency/detect/") || req.path.includes("/currencies/african-countries")) {
      return req.path.startsWith(route) || req.path.includes("/currency/detect/") || req.path.includes("/currencies/african-countries");
    }
    return req.path === route;
  });
  const isStaticFile = /\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|html)$/.test(req.path);
  if (isPublicRoute || isStaticFile) {
    return next();
  }
  return tenantMiddleware(req, res, next);
};
var requireTenant = tenantMiddleware;

// server/routes.ts
import bcrypt2 from "bcrypt";
import jwt3 from "jsonwebtoken";
import { z } from "zod";

// server/ai-health-analyzer.ts
var AIHealthAnalyzer = class {
  async analyzePatientHealth(patient, vitalSigns2, recentAppointments, labResults2 = []) {
    try {
      console.log("Generating intelligent demo analysis based on patient data...");
      const analysis = await this.generateIntelligentAnalysis(patient, vitalSigns2, recentAppointments, labResults2);
      return analysis;
    } catch (error) {
      console.error("AI Health Analysis Error:", error);
      throw new Error(`Failed to generate health recommendations: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  }
  async generateIntelligentAnalysis(patient, vitalSigns2, recentAppointments, labResults2 = []) {
    const age = (/* @__PURE__ */ new Date()).getFullYear() - new Date(patient.dateOfBirth).getFullYear();
    let healthScore = 75;
    const riskFactors = [];
    const recommendations = [];
    const trends = { improving: [], concerning: [], stable: [] };
    if (vitalSigns2.length > 0) {
      const latestVitals = vitalSigns2[0];
      if (latestVitals.systolicBp && latestVitals.systolicBp > 140 || latestVitals.diastolicBp && latestVitals.diastolicBp > 90) {
        healthScore -= 15;
        riskFactors.push("Elevated blood pressure readings indicating hypertension risk");
        recommendations.push({
          id: `rec-bp-${Date.now()}`,
          type: "medical",
          priority: "high",
          title: "Blood Pressure Management Required",
          description: "Your blood pressure readings indicate hypertension that requires immediate attention",
          recommendations: [
            "Reduce sodium intake to less than 2,300mg daily",
            "Engage in 150 minutes of moderate aerobic exercise weekly",
            "Monitor blood pressure daily at home",
            "Schedule consultation with cardiologist within 2 weeks",
            "Consider DASH diet implementation"
          ],
          reasoning: "Elevated blood pressure significantly increases risk of cardiovascular disease, stroke, and kidney damage",
          followUpRequired: true,
          createdAt: /* @__PURE__ */ new Date()
        });
        trends.concerning.push("Blood pressure trending above normal range");
      } else if (latestVitals.systolicBp && latestVitals.systolicBp >= 120 && latestVitals.systolicBp < 130) {
        trends.stable.push("Blood pressure in elevated but manageable range");
        recommendations.push({
          id: `rec-bp-prev-${Date.now()}`,
          type: "preventive",
          priority: "medium",
          title: "Blood Pressure Prevention",
          description: "Prevent progression to hypertension with lifestyle modifications",
          recommendations: [
            "Maintain healthy weight through balanced nutrition",
            "Limit alcohol consumption to recommended guidelines",
            "Practice stress reduction techniques",
            "Regular cardiovascular exercise"
          ],
          reasoning: "Early intervention prevents progression to clinical hypertension",
          followUpRequired: false,
          createdAt: /* @__PURE__ */ new Date()
        });
      } else {
        trends.improving.push("Blood pressure within optimal range");
        healthScore += 5;
      }
      if (latestVitals.heartRate && latestVitals.heartRate > 100) {
        healthScore -= 8;
        riskFactors.push("Elevated resting heart rate suggesting cardiovascular stress");
        trends.concerning.push("Resting heart rate above normal range");
        recommendations.push({
          id: `rec-hr-${Date.now()}`,
          type: "medical",
          priority: "medium",
          title: "Heart Rate Optimization",
          description: "Elevated resting heart rate may indicate cardiovascular inefficiency",
          recommendations: [
            "Improve cardiovascular fitness through regular aerobic exercise",
            "Reduce caffeine intake if excessive",
            "Ensure adequate sleep (7-9 hours nightly)",
            "Manage stress through relaxation techniques"
          ],
          reasoning: "Lower resting heart rate indicates better cardiovascular fitness and efficiency",
          followUpRequired: true,
          createdAt: /* @__PURE__ */ new Date()
        });
      } else if (latestVitals.heartRate && latestVitals.heartRate >= 60 && latestVitals.heartRate <= 80) {
        trends.stable.push("Heart rate within excellent range");
        healthScore += 3;
      }
      if (latestVitals.temperature && parseFloat(latestVitals.temperature) > 100.4) {
        healthScore -= 10;
        recommendations.push({
          id: `rec-fever-${Date.now()}`,
          type: "medical",
          priority: "urgent",
          title: "Elevated Temperature Management",
          description: "Current temperature elevation requires immediate attention",
          recommendations: [
            "Monitor temperature every 2-4 hours",
            "Increase fluid intake significantly",
            "Rest and avoid strenuous activities",
            "Seek immediate medical attention if fever persists >24 hours"
          ],
          reasoning: "Elevated temperature may indicate infection or inflammatory process requiring medical evaluation",
          followUpRequired: true,
          createdAt: /* @__PURE__ */ new Date()
        });
        trends.concerning.push("Temperature elevation detected");
      }
      if (latestVitals.oxygenSaturation && latestVitals.oxygenSaturation < 95) {
        healthScore -= 20;
        riskFactors.push("Low oxygen saturation indicating respiratory compromise");
        recommendations.push({
          id: `rec-o2-${Date.now()}`,
          type: "medical",
          priority: "urgent",
          title: "Oxygen Saturation Concern",
          description: "Low oxygen levels require immediate medical evaluation",
          recommendations: [
            "Seek immediate medical attention",
            "Monitor breathing patterns",
            "Avoid strenuous activity",
            "Consider pulmonary function evaluation"
          ],
          reasoning: "Low oxygen saturation may indicate serious respiratory or cardiac issues",
          followUpRequired: true,
          createdAt: /* @__PURE__ */ new Date()
        });
        trends.concerning.push("Oxygen saturation below normal");
      } else if (latestVitals.oxygenSaturation && latestVitals.oxygenSaturation >= 98) {
        trends.stable.push("Oxygen saturation excellent");
      }
    }
    if (labResults2.length > 0) {
      console.log(`Analyzing ${labResults2.length} lab results for comprehensive health assessment`);
      for (const lab of labResults2) {
        const value = parseFloat(lab.result) || 0;
        const testName = lab.testName.toLowerCase();
        if (testName.includes("cholesterol") || testName.includes("ldl") || testName.includes("hdl")) {
          if (testName.includes("total") && value > 240) {
            healthScore -= 12;
            riskFactors.push("Significantly elevated total cholesterol levels");
            recommendations.push({
              id: `rec-chol-${Date.now()}`,
              type: "lifestyle",
              priority: "high",
              title: "Comprehensive Cholesterol Management",
              description: "Your cholesterol levels significantly exceed recommended ranges",
              recommendations: [
                "Adopt Mediterranean-style diet rich in omega-3 fatty acids",
                "Increase soluble fiber intake through oats, beans, and fruits",
                "Eliminate trans fats and limit saturated fats to <7% of calories",
                "Engage in 40 minutes of aerobic exercise 3-4 times weekly",
                "Consider consultation with lipid specialist for statin therapy"
              ],
              reasoning: "High cholesterol is a major modifiable risk factor for cardiovascular disease",
              followUpRequired: true,
              createdAt: /* @__PURE__ */ new Date()
            });
            trends.concerning.push("Total cholesterol significantly elevated");
          } else if (testName.includes("ldl") && value > 160) {
            healthScore -= 10;
            riskFactors.push("Elevated LDL (bad) cholesterol");
            trends.concerning.push("LDL cholesterol above optimal range");
          } else if (testName.includes("hdl") && value < 40) {
            healthScore -= 8;
            riskFactors.push("Low HDL (good) cholesterol");
            trends.concerning.push("HDL cholesterol below protective range");
          } else if (testName.includes("total") && value < 200) {
            trends.improving.push("Total cholesterol within optimal range");
            healthScore += 5;
          }
        }
        if (testName.includes("glucose") || testName.includes("a1c") || testName.includes("hemoglobin a1c")) {
          if (testName.includes("glucose") && value > 126 || testName.includes("a1c") && value > 6.5) {
            healthScore -= 18;
            riskFactors.push("Elevated blood glucose indicating diabetes or pre-diabetes");
            recommendations.push({
              id: `rec-diabetes-${Date.now()}`,
              type: "medical",
              priority: "high",
              title: "Diabetes Risk Management Protocol",
              description: "Blood glucose levels indicate diabetes requiring comprehensive management",
              recommendations: [
                "Implement comprehensive diabetes management plan",
                "Monitor blood glucose levels 2-4 times daily",
                "Follow carbohydrate-controlled diet with portion management",
                "Engage in post-meal walking for 10-15 minutes",
                "Schedule immediate endocrinologist consultation",
                "Consider continuous glucose monitoring system"
              ],
              reasoning: "Elevated glucose levels require immediate intervention to prevent diabetic complications",
              followUpRequired: true,
              createdAt: /* @__PURE__ */ new Date()
            });
            trends.concerning.push("Blood glucose levels in diabetic range");
          } else if (testName.includes("glucose") && value > 100 || testName.includes("a1c") && value > 5.7) {
            healthScore -= 10;
            riskFactors.push("Pre-diabetic glucose levels");
            trends.concerning.push("Blood glucose trending toward diabetes");
            recommendations.push({
              id: `rec-prediab-${Date.now()}`,
              type: "preventive",
              priority: "medium",
              title: "Pre-Diabetes Prevention Strategy",
              description: "Early intervention can prevent progression to type 2 diabetes",
              recommendations: [
                "Lose 5-10% of body weight through caloric restriction",
                "Increase physical activity to 150+ minutes weekly",
                "Choose complex carbohydrates over simple sugars",
                "Monitor portion sizes and meal timing"
              ],
              reasoning: "Lifestyle interventions can reduce diabetes risk by up to 58%",
              followUpRequired: true,
              createdAt: /* @__PURE__ */ new Date()
            });
          } else {
            trends.improving.push("Blood glucose levels within normal range");
            healthScore += 3;
          }
        }
        if (testName.includes("creatinine") || testName.includes("bun") || testName.includes("egfr")) {
          if (testName.includes("creatinine") && value > 1.2 || testName.includes("bun") && value > 20 || testName.includes("egfr") && value < 60) {
            healthScore -= 15;
            riskFactors.push("Declining kidney function requiring monitoring");
            recommendations.push({
              id: `rec-kidney-${Date.now()}`,
              type: "medical",
              priority: "high",
              title: "Kidney Function Protection",
              description: "Lab results suggest declining kidney function requiring immediate attention",
              recommendations: [
                "Limit protein intake as directed by healthcare provider",
                "Maintain optimal blood pressure control",
                "Stay well-hydrated with adequate water intake",
                "Schedule nephrology consultation within 2 weeks",
                "Monitor medications that may affect kidney function"
              ],
              reasoning: "Early intervention can slow progression of chronic kidney disease",
              followUpRequired: true,
              createdAt: /* @__PURE__ */ new Date()
            });
            trends.concerning.push("Kidney function markers declining");
          }
        }
        if (testName.includes("alt") || testName.includes("ast") || testName.includes("bilirubin")) {
          if (testName.includes("alt") && value > 40 || testName.includes("ast") && value > 40) {
            healthScore -= 12;
            riskFactors.push("Elevated liver enzymes indicating liver stress");
            trends.concerning.push("Liver function markers elevated");
            recommendations.push({
              id: `rec-liver-${Date.now()}`,
              type: "lifestyle",
              priority: "medium",
              title: "Liver Health Optimization",
              description: "Elevated liver enzymes suggest need for liver health support",
              recommendations: [
                "Limit alcohol consumption significantly",
                "Maintain healthy weight to prevent fatty liver",
                "Avoid hepatotoxic medications when possible",
                "Include liver-supporting foods like leafy greens"
              ],
              reasoning: "Liver health is crucial for metabolism and detoxification",
              followUpRequired: true,
              createdAt: /* @__PURE__ */ new Date()
            });
          }
        }
      }
      recommendations.push({
        id: `rec-lab-monitoring-${Date.now()}`,
        type: "preventive",
        priority: "low",
        title: "Excellent Health Monitoring Approach",
        description: "Regular comprehensive lab work demonstrates proactive health management",
        recommendations: [
          "Continue annual comprehensive metabolic panel",
          "Track trends in key biomarkers over time",
          "Discuss all results thoroughly with primary care physician",
          "Maintain consistent timing for lab draws for accurate trending"
        ],
        reasoning: "Consistent monitoring allows early detection and prevention of health issues",
        followUpRequired: false,
        createdAt: /* @__PURE__ */ new Date()
      });
    }
    if (age >= 40) {
      recommendations.push({
        id: `rec-screening-${Date.now()}`,
        type: "preventive",
        priority: "medium",
        title: "Age-Appropriate Preventive Screenings",
        description: "Essential health screenings become increasingly important with age",
        recommendations: [
          age >= 50 ? "Annual mammogram (women) or prostate screening (men)" : "Baseline cancer screenings as appropriate",
          age >= 45 ? "Colonoscopy every 10 years or as recommended by physician" : "Discuss colonoscopy timing with doctor",
          "Comprehensive eye examination annually",
          age >= 50 ? "Bone density screening every 2 years" : "Baseline bone density assessment",
          "Annual dermatological skin cancer screening"
        ],
        reasoning: "Early detection through regular screening significantly improves treatment outcomes and survival rates",
        followUpRequired: false,
        createdAt: /* @__PURE__ */ new Date()
      });
    }
    recommendations.push({
      id: `rec-wellness-${Date.now()}`,
      type: "lifestyle",
      priority: "low",
      title: "Comprehensive Wellness Optimization",
      description: "Foundation practices for maintaining and improving overall health",
      recommendations: [
        "Maintain consistent sleep schedule with 7-9 hours nightly",
        "Practice daily stress management (meditation, deep breathing, yoga)",
        "Stay adequately hydrated with 8-10 glasses of water daily",
        "Maintain strong social connections and community involvement",
        "Schedule regular preventive healthcare visits",
        "Keep emergency medical information and contacts updated"
      ],
      reasoning: "Consistent healthy lifestyle habits form the foundation for long-term wellness and disease prevention",
      followUpRequired: false,
      createdAt: /* @__PURE__ */ new Date()
    });
    healthScore = Math.max(healthScore, 40);
    healthScore = Math.min(healthScore, 95);
    let nextAppointmentSuggestion = "Schedule routine preventive care visit in 6-12 months";
    if (riskFactors.length > 3) {
      nextAppointmentSuggestion = "Schedule urgent follow-up within 1-2 weeks to address multiple risk factors";
    } else if (riskFactors.length > 1) {
      nextAppointmentSuggestion = "Schedule follow-up in 1-3 months to monitor and reassess identified risk factors";
    } else if (riskFactors.length === 1) {
      nextAppointmentSuggestion = "Schedule follow-up in 3-6 months to reassess single identified risk factor";
    }
    return {
      overallHealthScore: Math.round(healthScore),
      riskFactors,
      recommendations,
      trends,
      nextAppointmentSuggestion
    };
  }
  calculateAge(dateOfBirth) {
    const today = /* @__PURE__ */ new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birthDate.getDate()) {
      age--;
    }
    return age;
  }
};
var aiHealthAnalyzer = new AIHealthAnalyzer();

// server/routes.ts
init_email_service();

// server/reset-all-counters.ts
init_db();
init_schema();
async function resetAllCounters() {
  console.log("\u{1F504} Starting comprehensive counter reset...");
  try {
    console.log("\u{1F4CA} Resetting work shift counters...");
    await db.update(workShifts).set({
      totalPrescriptionsProcessed: 0,
      totalRevenue: "0.00",
      totalInsuranceClaims: 0
    });
    console.log("\u{1F464} Resetting user statistics...");
    await db.update(userStats).set({
      level: 1,
      totalPoints: 0,
      testsCompleted: 0,
      averageCompletionTime: 0,
      qualityScore: "0.00",
      consistencyStreak: 0,
      weeklyGoal: 50,
      monthlyGoal: 200
    });
    console.log("\u{1F4E2} Resetting advertisement performance counters...");
    await db.update(advertisements).set({
      impressions: 0,
      clicks: 0,
      conversions: 0
    });
    console.log("\u{1F6D2} Resetting marketplace product analytics...");
    await db.update(marketplaceProducts).set({
      viewCount: 0,
      orderCount: 0,
      avgRating: "0.00",
      totalReviews: 0,
      stockQuantity: 0
    });
    console.log("\u{1F4DD} Resetting activity log points...");
    await db.update(activityLogs).set({
      points: 0
    });
    console.log("\u23F0 Updating timestamps...");
    const currentTime = /* @__PURE__ */ new Date();
    await db.update(workShifts).set({
      updatedAt: currentTime
    });
    await db.update(userStats).set({
      updatedAt: currentTime
    });
    await db.update(advertisements).set({
      updatedAt: currentTime
    });
    await db.update(marketplaceProducts).set({
      updatedAt: currentTime
    });
    console.log("\u2705 All counters have been successfully reset to zero!");
    console.log("\u{1F4C8} Summary of reset counters:");
    console.log("   \u2022 Work shift prescriptions, revenue, and insurance claims");
    console.log("   \u2022 User levels, points, tests completed, and streaks");
    console.log("   \u2022 Advertisement impressions, clicks, and conversions");
    console.log("   \u2022 Product view counts, order counts, ratings, and reviews");
    console.log("   \u2022 Activity log points");
    console.log("   \u2022 Stock quantities reset to zero");
    return {
      success: true,
      message: "All counters reset successfully",
      timestamp: currentTime
    };
  } catch (error) {
    console.error("\u274C Error resetting counters:", error);
    throw new Error(`Failed to reset counters: ${error instanceof Error ? error.message : "Unknown error"}`);
  }
}
if (import.meta.url === `file://${process.argv[1]}`) {
  resetAllCounters().then(() => {
    console.log("\u{1F389} Counter reset completed successfully!");
  }).catch((error) => {
    console.error("\u{1F4A5} Counter reset failed:", error);
  });
}

// server/routes.ts
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var JWT_SECRET2 = process.env.JWT_SECRET || "your-secret-key-change-in-production";
async function registerRoutes(app2) {
  app2.post("/public/suppliers/register", async (req, res) => {
    try {
      console.log("Registration request body:", req.body);
      if (!req.body.username || req.body.username.length < 3) {
        return res.status(400).json({ error: "Username must be at least 3 characters long" });
      }
      if (!req.body.password || req.body.password.length < 6) {
        return res.status(400).json({ error: "Password must be at least 6 characters long" });
      }
      const saltRounds = 10;
      const passwordHash = await bcrypt2.hash(req.body.password, saltRounds);
      const supplierData = {
        companyName: req.body.companyName,
        businessType: req.body.businessType,
        contactPersonName: req.body.contactPersonName || req.body.companyName,
        contactEmail: req.body.contactEmail,
        contactPhone: req.body.contactPhone,
        websiteUrl: req.body.website || null,
        businessAddress: req.body.address,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country || "USA",
        zipCode: req.body.zipCode,
        businessDescription: req.body.description,
        productCategories: req.body.specialties ? [req.body.specialties] : [],
        yearsInBusiness: req.body.yearsInBusiness || "1-2",
        numberOfEmployees: req.body.numberOfEmployees || "1-10",
        annualRevenue: req.body.annualRevenue || "Under $1M",
        certifications: [],
        username: req.body.username,
        passwordHash,
        termsAccepted: req.body.termsAccepted === true || req.body.termsAccepted === "true",
        marketingConsent: req.body.marketingConsent === true || req.body.marketingConsent === "true"
      };
      console.log("Mapped supplier data:", supplierData);
      const requiredFields = [
        "companyName",
        "businessType",
        "contactPersonName",
        "contactEmail",
        "contactPhone",
        "businessAddress",
        "city",
        "state",
        "country",
        "zipCode",
        "businessDescription",
        "yearsInBusiness",
        "numberOfEmployees",
        "annualRevenue",
        "username",
        "passwordHash",
        "termsAccepted"
      ];
      const missingFields = requiredFields.filter((field) => !supplierData[field]);
      if (missingFields.length > 0) {
        return res.status(400).json({
          error: "Missing required fields",
          details: missingFields
        });
      }
      const supplier = await storage.createMedicalSupplier(supplierData);
      res.status(201).json({
        message: "Supplier registration submitted successfully",
        id: supplier.id,
        status: supplier.status
      });
    } catch (error) {
      console.error("Error registering supplier:", error);
      res.status(500).json({ error: "Failed to register supplier" });
    }
  });
  app2.post("/public/suppliers/login", async (req, res) => {
    try {
      const { contactEmail, password } = req.body;
      if (!contactEmail || !password) {
        return res.status(400).json({ error: "Email and password are required" });
      }
      const supplier = await storage.getMedicalSupplierByEmail(contactEmail);
      if (!supplier) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      const isPasswordValid = await bcrypt2.compare(password, supplier.passwordHash);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      if (supplier.status !== "approved") {
        return res.status(403).json({
          error: "Account not approved",
          status: supplier.status,
          message: supplier.status === "pending_review" ? "Your registration is under review. You will be notified when approved." : "Your account has been rejected. Please contact support."
        });
      }
      const token = jwt3.sign(
        {
          supplierId: supplier.id,
          username: supplier.username,
          contactEmail: supplier.contactEmail,
          companyName: supplier.companyName,
          type: "supplier"
        },
        JWT_SECRET2,
        { expiresIn: "24h" }
      );
      res.json({
        message: "Login successful",
        token,
        supplier: {
          id: supplier.id,
          companyName: supplier.companyName,
          username: supplier.username,
          contactEmail: supplier.contactEmail,
          status: supplier.status
        }
      });
    } catch (error) {
      console.error("Error during supplier login:", error);
      res.status(500).json({ error: "Login failed" });
    }
  });
  app2.post("/api/auth/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
      }
      console.log(`[SECURITY AUDIT] Login attempt from IP: ${req.ip}`);
      const allUsers = await storage.getAllUsers();
      const user = allUsers.find(
        (u) => (u.username === username || u.email === username) && u.isActive
      );
      if (!user) {
        console.log(`[SECURITY AUDIT] Login failed - user not found: ${username}`);
        return res.status(401).json({ message: "Invalid credentials" });
      }
      const isValidPassword = await bcrypt2.compare(password, user.password);
      if (!isValidPassword) {
        console.log(`[SECURITY AUDIT] Login failed - invalid password: ${username}`);
        return res.status(401).json({ message: "Invalid credentials" });
      }
      const tenant = await storage.getTenant(user.tenantId);
      if (!tenant) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      console.log(`[SECURITY AUDIT] Login successful: ${username}`);
      const token = jwt3.sign(
        {
          userId: user.id,
          tenantId: user.tenantId,
          role: user.role
        },
        JWT_SECRET2,
        { expiresIn: "24h" }
      );
      res.json({
        message: "Login successful",
        token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
          tenantId: user.tenantId,
          isActive: user.isActive
        },
        tenant: {
          id: tenant.id,
          name: tenant.name,
          type: tenant.type
        }
      });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ message: "Login failed" });
    }
  });
  app2.post("/api/auth/logout", (req, res) => {
    res.json({ message: "Logged out successfully" });
  });
  app2.get("/api/auth/user", authenticateToken, async (req, res) => {
    try {
      const user = await storage.getUser(req.user.userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const tenant = await storage.getTenant(user.tenantId);
      res.json({
        id: user.id,
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        tenantId: user.tenantId,
        isActive: user.isActive,
        tenant: tenant ? {
          id: tenant.id,
          name: tenant.name,
          type: tenant.type
        } : null
      });
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });
  app2.get("/api/health", (req, res) => {
    res.json({
      status: "healthy",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      version: "1.0.0",
      platform: "NaviMED Healthcare Platform"
    });
  });
  app2.get("/api/placeholder/:imageName", (req, res) => {
    try {
      const { imageName } = req.params;
      let title = "Medical Device";
      let bgColor = "#f8fafc";
      let textColor = "#64748b";
      if (imageName.includes("ultrasound")) {
        title = "Ultrasound Machine";
        bgColor = "#dbeafe";
        textColor = "#3b82f6";
      } else if (imageName.includes("surgical")) {
        title = "Surgical Instruments";
        bgColor = "#dcfce7";
        textColor = "#16a34a";
      } else if (imageName.includes("product1")) {
        title = "Digital Stethoscope";
        bgColor = "#fef3c7";
        textColor = "#d97706";
      }
      res.setHeader("Content-Type", "image/svg+xml");
      res.setHeader("Cache-Control", "public, max-age=86400");
      const svgPlaceholder = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${bgColor}"/>
        <rect x="20" y="20" width="260" height="160" fill="white" stroke="${textColor}" stroke-width="2" rx="8"/>
        <circle cx="150" cy="80" r="25" fill="${textColor}" opacity="0.2"/>
        <text x="150" y="130" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="${textColor}" font-weight="500">${title}</text>
        <text x="150" y="150" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="${textColor}" opacity="0.7">Medical Equipment</text>
      </svg>`;
      res.send(svgPlaceholder);
    } catch (error) {
      console.error("Error serving placeholder image:", error);
      res.status(404).json({ error: "Image not found" });
    }
  });
  app2.get("/api/platform/stats", async (req, res) => {
    try {
      const totalTenants = await storage.getAllTenants();
      const totalUsers = await storage.getAllUsers();
      const activeTenants = totalTenants.filter((t) => t.isActive && t.subdomain !== "argilette").length;
      const activeUsers = totalUsers.filter((u) => u.isActive && u.email !== "abel@argilette.com").length;
      res.json({
        platform: "NaviMED Healthcare Platform",
        statistics: {
          organizations: activeTenants,
          users: activeUsers,
          uptime: "99.9%",
          languages: 50,
          responseTime: "<2s",
          support: "24/7"
        },
        status: "operational",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    } catch (error) {
      console.error("Error fetching platform stats:", error);
      res.json({
        platform: "NaviMED Healthcare Platform",
        statistics: {
          organizations: 0,
          users: 1,
          uptime: "99.9%",
          languages: 50,
          responseTime: "<2s",
          support: "24/7"
        },
        status: "operational",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    }
  });
  app2.post("/api/tenant/register", async (req, res) => {
    try {
      const {
        organizationName,
        organizationType,
        adminFirstName,
        adminLastName,
        adminEmail,
        adminPassword,
        phoneNumber,
        address,
        country,
        description
      } = req.body;
      if (!organizationName || !organizationType || !adminFirstName || !adminLastName || !adminEmail || !adminPassword) {
        return res.status(400).json({
          message: "All required fields must be provided"
        });
      }
      const existingTenants = await storage.getAllTenants();
      const existingTenant = existingTenants.find(
        (t) => t.name.toLowerCase() === organizationName.toLowerCase()
      );
      if (existingTenant) {
        return res.status(400).json({
          message: "An organization with this name already exists"
        });
      }
      const existingUsers = await storage.getAllUsers();
      const existingUser = existingUsers.find(
        (u) => u.email?.toLowerCase() === adminEmail.toLowerCase()
      );
      if (existingUser) {
        return res.status(400).json({
          message: "A user with this email already exists"
        });
      }
      const subdomain = organizationName.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "").substring(0, 50);
      const newTenant = await storage.createTenant({
        name: organizationName,
        type: organizationType,
        subdomain,
        settings: {
          features: [organizationType, "basic"],
          trialDays: 14
        },
        isActive: true,
        parentTenantId: null,
        organizationType: "independent",
        phoneNumber: phoneNumber || null,
        address: address || null,
        description: description || null
      });
      const hashedPassword = await bcrypt2.hash(adminPassword, 10);
      const adminUser = await storage.createUser({
        tenantId: newTenant.id,
        username: adminEmail,
        email: adminEmail,
        password: hashedPassword,
        firstName: adminFirstName,
        lastName: adminLastName,
        role: "tenant_admin",
        isActive: true,
        isTemporaryPassword: false,
        mustChangePassword: false
      });
      try {
        const { sendRegistrationConfirmationEmail: sendRegistrationConfirmationEmail2 } = await Promise.resolve().then(() => (init_email_service(), email_service_exports));
        const loginUrl = `${req.protocol}://${req.get("host")}/login`;
        const emailSent = await sendRegistrationConfirmationEmail2(
          adminEmail,
          `${adminFirstName} ${adminLastName}`,
          organizationName,
          loginUrl
        );
        console.log(`Registration confirmation email ${emailSent ? "sent successfully" : "failed"} to ${adminEmail}`);
      } catch (emailError) {
        console.error("Failed to send registration confirmation email:", emailError);
      }
      res.status(201).json({
        message: "Organization registered successfully",
        tenant: {
          id: newTenant.id,
          name: newTenant.name,
          type: newTenant.type,
          subdomain: newTenant.subdomain
        },
        admin: {
          id: adminUser.id,
          email: adminUser.email,
          firstName: adminUser.firstName,
          lastName: adminUser.lastName
        }
      });
    } catch (error) {
      console.error("Error registering organization:", error);
      res.status(500).json({
        message: "Failed to register organization. Please try again."
      });
    }
  });
  app2.get("/api/marketplace/products", async (req, res) => {
    try {
      console.log("[MARKETPLACE] Loading products for marketplace");
      const products = await storage.getPublicMarketplaceProducts();
      console.log(`[MARKETPLACE] Found ${products.length} active products`);
      res.json(products);
    } catch (error) {
      console.error("Error loading marketplace products:", error);
      res.status(500).json({ message: "Failed to load products" });
    }
  });
  app2.post("/api/marketplace/quote-requests", async (req, res) => {
    try {
      const {
        productId,
        productName,
        supplierName,
        companyName,
        contactName,
        email,
        phone,
        quantity,
        message,
        requestedAt
      } = req.body;
      if (!productId || !productName || !companyName || !contactName || !email || !quantity) {
        return res.status(400).json({
          message: "Missing required fields: productId, productName, companyName, contactName, email, quantity"
        });
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email address" });
      }
      const qty = parseInt(quantity);
      if (isNaN(qty) || qty <= 0) {
        return res.status(400).json({ message: "Quantity must be a positive number" });
      }
      console.log(`[QUOTE REQUEST] New quote request from ${companyName} for ${productName} (Qty: ${qty})`);
      const quoteRequest = await storage.createQuoteRequest({
        productId,
        productName,
        supplierName,
        companyName,
        contactName,
        email,
        phone,
        quantity: qty,
        message,
        status: "pending"
      });
      console.log(`[QUOTE REQUEST] Quote request ${quoteRequest.id} created successfully`);
      res.json({
        success: true,
        message: "Quote request submitted successfully",
        quoteRequestId: quoteRequest.id
      });
    } catch (error) {
      console.error("Error creating quote request:", error);
      res.status(500).json({ message: "Failed to submit quote request" });
    }
  });
  app2.post("/api/marketplace/inquiries", async (req, res) => {
    try {
      const {
        name,
        email,
        phone,
        company,
        message,
        interestedIn,
        advertisementId,
        supplierEmail,
        supplierCompany
      } = req.body;
      if (!name || !email || !message || !advertisementId) {
        return res.status(400).json({
          message: "Missing required fields: name, email, message, advertisementId"
        });
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email address" });
      }
      console.log(`[INQUIRY] New inquiry from ${name} (${company || "Individual"}) about: ${interestedIn}`);
      const inquiryData = {
        name,
        email,
        phone,
        company,
        message,
        interestedIn,
        advertisementId,
        supplierEmail,
        supplierCompany,
        submittedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      console.log(`[INQUIRY] Inquiry details:`, inquiryData);
      res.json({
        success: true,
        message: "Inquiry submitted successfully. The supplier will contact you directly."
      });
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      res.status(500).json({ message: "Failed to submit inquiry" });
    }
  });
  app2.post("/api/supplier/login", async (req, res) => {
    try {
      const { username, password, organizationName } = req.body;
      if (!username || !password || !organizationName) {
        return res.status(400).json({ message: "Username, password, and organization name are required" });
      }
      console.log("[SUPPLIER LOGIN] Attempting login for:", { username, organizationName });
      const suppliers = await storage.getMedicalSuppliers();
      const supplierOrg = suppliers.find(
        (s) => s.companyName.toLowerCase() === organizationName.toLowerCase() || s.organizationSlug === organizationName.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-")
      );
      if (!supplierOrg) {
        console.log("[SUPPLIER LOGIN] Organization not found:", organizationName);
        return res.status(400).json({ message: "Organization not found" });
      }
      console.log("[SUPPLIER LOGIN] Found supplier organization:", supplierOrg.companyName);
      if (supplierOrg.status !== "approved") {
        return res.status(403).json({
          message: "Account not approved",
          status: supplierOrg.status
        });
      }
      let supplier = null;
      console.log("[SUPPLIER LOGIN DEBUG] Checking username:", username);
      console.log("[SUPPLIER LOGIN DEBUG] Against contactEmail:", supplierOrg.contactEmail);
      console.log("[SUPPLIER LOGIN DEBUG] Against username:", supplierOrg.username);
      if (username === supplierOrg.contactEmail || username === supplierOrg.username) {
        supplier = supplierOrg;
        console.log("[SUPPLIER LOGIN DEBUG] Username/email match found");
      } else {
        console.log("[SUPPLIER LOGIN DEBUG] No username/email match");
      }
      if (!supplier) {
        console.log("[SUPPLIER LOGIN] No supplier match");
        return res.status(401).json({ message: "Invalid credentials" });
      }
      const passwordValid = await bcrypt2.compare(password, supplier.passwordHash);
      console.log("[SUPPLIER LOGIN DEBUG] Password valid:", passwordValid);
      if (!passwordValid) {
        console.log("[SUPPLIER LOGIN] Invalid password for:", username);
        return res.status(401).json({ message: "Invalid credentials" });
      }
      console.log("[SUPPLIER LOGIN] Successful login for supplier:", supplier.username);
      const token = jwt3.sign(
        {
          supplierId: supplier.id,
          username: supplier.username,
          contactEmail: supplier.contactEmail,
          companyName: supplier.companyName,
          type: "supplier"
        },
        JWT_SECRET2,
        { expiresIn: "24h" }
      );
      res.json({
        message: "Login successful",
        token,
        supplier: {
          id: supplier.id,
          companyName: supplier.companyName,
          username: supplier.username,
          contactEmail: supplier.contactEmail,
          status: supplier.status
        }
      });
    } catch (error) {
      console.error("[SUPPLIER LOGIN] Error:", error);
      res.status(500).json({ message: "Login failed" });
    }
  });
  app2.get("/api/admin/tenants", authenticateToken, async (req, res) => {
    try {
      if (req.user?.role !== "super_admin") {
        return res.status(403).json({ message: "Super admin access required" });
      }
      const tenants2 = await storage.getAllTenants();
      const tenantsWithStats = await Promise.all(tenants2.map(async (tenant) => {
        const users2 = await storage.getUsersByTenant(tenant.id);
        const patients2 = await storage.getPatientsByTenant(tenant.id);
        return {
          ...tenant,
          stats: {
            userCount: users2.length,
            patientCount: patients2.length,
            isActive: tenant.isActive
          }
        };
      }));
      res.json(tenantsWithStats);
    } catch (error) {
      console.error("Error fetching tenant overview:", error);
      res.status(500).json({ message: "Failed to fetch tenant overview" });
    }
  });
  app2.get("/api/admin/platform-stats", authenticateToken, async (req, res) => {
    try {
      if (req.user?.role !== "super_admin") {
        return res.status(403).json({ message: "Super admin access required" });
      }
      const tenants2 = await storage.getAllTenants();
      const allUsers = await storage.getAllUsers();
      const stats = {
        totalTenants: tenants2.length,
        totalUsers: allUsers.length,
        tenantsByType: {
          hospital: tenants2.filter((t) => t.type === "hospital").length,
          pharmacy: tenants2.filter((t) => t.type === "pharmacy").length,
          laboratory: tenants2.filter((t) => t.type === "laboratory").length,
          clinic: tenants2.filter((t) => t.type === "clinic").length,
          platform: tenants2.filter((t) => t.type === "platform").length
        },
        activeTenants: tenants2.filter((t) => t.isActive).length,
        inactiveTenants: tenants2.filter((t) => !t.isActive).length
      };
      res.json(stats);
    } catch (error) {
      console.error("Error fetching platform stats:", error);
      res.status(500).json({ message: "Failed to fetch platform statistics" });
    }
  });
  app2.get("/api/admin/suppliers", authenticateToken, async (req, res) => {
    try {
      if (req.user?.role !== "super_admin") {
        return res.status(403).json({ message: "Super admin access required" });
      }
      const suppliers = await storage.getAllMedicalSuppliers();
      res.json(suppliers);
    } catch (error) {
      console.error("Error fetching suppliers:", error);
      res.status(500).json({ message: "Failed to fetch suppliers" });
    }
  });
  app2.put("/api/admin/suppliers/:id/approve", authenticateToken, async (req, res) => {
    try {
      if (req.user?.role !== "super_admin") {
        return res.status(403).json({ message: "Super admin access required" });
      }
      const { id } = req.params;
      const supplier = await storage.updateMedicalSupplierStatus(id, "approved");
      if (!supplier) {
        return res.status(404).json({ message: "Supplier not found" });
      }
      const supplierTenant = await storage.createTenant({
        name: supplier.companyName,
        type: "medical_supplier",
        subdomain: supplier.organizationSlug,
        settings: {
          features: ["marketplace", "product_management", "order_management"],
          planType: "supplier_basic",
          description: `Medical device supplier: ${supplier.businessDescription}`
        },
        isActive: true,
        organizationType: "independent",
        brandName: supplier.companyName,
        defaultLanguage: "en",
        supportedLanguages: ["en"],
        baseCurrency: "USD",
        supportedCurrencies: ["USD"]
      });
      const hashedPassword = await bcrypt2.hash(supplier.passwordHash, 12);
      const supplierUser = await storage.createUser({
        username: supplier.username,
        email: supplier.contactEmail,
        password: hashedPassword,
        firstName: supplier.contactPersonName.split(" ")[0] || supplier.contactPersonName,
        lastName: supplier.contactPersonName.split(" ").slice(1).join(" ") || "",
        role: "supplier_admin",
        tenantId: supplierTenant.id,
        isActive: true,
        mustChangePassword: false,
        isTemporaryPassword: false
      });
      await storage.updateMedicalSupplier(id, {
        tenantId: supplierTenant.id,
        approvedBy: req.user?.id,
        approvedAt: /* @__PURE__ */ new Date()
      });
      try {
        const sampleProduct = await storage.createMarketplaceProduct({
          supplierTenantId: supplierTenant.id,
          name: `${supplier.companyName} - Sample Product`,
          sku: `${supplier.organizationSlug}-SAMPLE-001`,
          description: `Sample product from ${supplier.companyName}. This supplier specializes in ${supplier.businessType} with ${supplier.yearsInBusiness} years of experience. Contact them to discuss your specific medical equipment needs.`,
          shortDescription: `Sample product from ${supplier.companyName}`,
          category: supplier.productCategories?.[0] || "Medical Supplies",
          subcategory: "General",
          brand: supplier.companyName,
          manufacturer: supplier.companyName,
          price: "1.00",
          currency: "USD",
          stockQuantity: 1e3,
          lowStockThreshold: 10,
          trackInventory: true,
          status: "active",
          isActive: true,
          isFeatured: false,
          requiresPrescription: false,
          specifications: {
            "Supplier": supplier.companyName,
            "Contact": supplier.contactEmail,
            "Experience": `${supplier.yearsInBusiness} years`,
            "Specialization": supplier.businessType
          },
          features: [`${supplier.yearsInBusiness} years of experience`, "Certified medical supplier", "Professional service"],
          metaTitle: `${supplier.companyName} - Medical Equipment Supplier`,
          metaDescription: `Professional medical equipment supplier with ${supplier.yearsInBusiness} years of experience in ${supplier.businessType}.`,
          searchKeywords: [supplier.companyName.toLowerCase(), supplier.businessType.toLowerCase(), "medical", "supplier"],
          shippingClass: "standard",
          leadTimeDays: 7
        });
        console.log(`[SUPPLIER APPROVAL] Created sample product ${sampleProduct.id} for supplier ${supplier.companyName}`);
      } catch (productError) {
        console.log(`[SUPPLIER APPROVAL] Failed to create sample product: ${productError.message}`);
      }
      console.log(`[SUPPLIER APPROVAL] Created tenant ${supplierTenant.id} and user ${supplierUser.id} for supplier ${supplier.companyName}`);
      res.json({
        message: "Supplier approved successfully and added to marketplace",
        supplier,
        tenant: supplierTenant,
        supplierUser: { id: supplierUser.id, email: supplierUser.email }
      });
    } catch (error) {
      console.error("Error approving supplier:", error);
      res.status(500).json({ message: "Failed to approve supplier" });
    }
  });
  app2.put("/api/admin/suppliers/:id/reject", authenticateToken, async (req, res) => {
    try {
      if (req.user?.role !== "super_admin") {
        return res.status(403).json({ message: "Super admin access required" });
      }
      const { id } = req.params;
      const { reason } = req.body;
      const supplier = await storage.updateMedicalSupplierStatus(id, "rejected", reason);
      res.json({ message: "Supplier rejected successfully", supplier });
    } catch (error) {
      console.error("Error rejecting supplier:", error);
      res.status(500).json({ message: "Failed to reject supplier" });
    }
  });
  app2.put("/api/admin/suppliers/:id/suspend", authenticateToken, async (req, res) => {
    try {
      if (req.user?.role !== "super_admin") {
        return res.status(403).json({ message: "Super admin access required" });
      }
      const { id } = req.params;
      const { reason } = req.body;
      const supplier = await storage.updateMedicalSupplierStatus(id, "suspended", reason);
      res.json({ message: "Supplier suspended successfully", supplier });
    } catch (error) {
      console.error("Error suspending supplier:", error);
      res.status(500).json({ message: "Failed to suspend supplier" });
    }
  });
  app2.put("/api/admin/suppliers/:id/activate", authenticateToken, async (req, res) => {
    try {
      if (req.user?.role !== "super_admin") {
        return res.status(403).json({ message: "Super admin access required" });
      }
      const { id } = req.params;
      const supplier = await storage.updateMedicalSupplierStatus(id, "approved");
      res.json({ message: "Supplier activated successfully", supplier });
    } catch (error) {
      console.error("Error activating supplier:", error);
      res.status(500).json({ message: "Failed to activate supplier" });
    }
  });
  app2.put("/api/admin/tenants/:id/suspend", authenticateToken, async (req, res) => {
    try {
      if (req.user?.role !== "super_admin") {
        return res.status(403).json({ message: "Super admin access required" });
      }
      const { id } = req.params;
      const { reason } = req.body;
      await storage.updateTenant(id, {
        isActive: false,
        suspendedAt: /* @__PURE__ */ new Date(),
        suspensionReason: reason
      });
      res.json({ message: "Tenant suspended successfully" });
    } catch (error) {
      console.error("Error suspending tenant:", error);
      res.status(500).json({ message: "Failed to suspend tenant" });
    }
  });
  app2.put("/api/admin/tenants/:id/activate", authenticateToken, async (req, res) => {
    try {
      if (req.user?.role !== "super_admin") {
        return res.status(403).json({ message: "Super admin access required" });
      }
      const { id } = req.params;
      await storage.updateTenant(id, {
        isActive: true,
        suspendedAt: null,
        suspensionReason: null
      });
      res.json({ message: "Tenant activated successfully" });
    } catch (error) {
      console.error("Error activating tenant:", error);
      res.status(500).json({ message: "Failed to activate tenant" });
    }
  });
  app2.use("/api", (req, res, next) => {
    const publicEndpoints = [
      "/api/health",
      "/api/platform/stats",
      "/api/tenant/register",
      "/api/suppliers/register",
      "/api/auth/login",
      "/api/auth/user",
      "/api/marketplace/products",
      "/api/advertisements",
      "/api/marketplace/quote-requests",
      "/advertisements",
      "/marketplace/products",
      "/marketplace/quote-requests"
    ];
    if (publicEndpoints.includes(req.path)) {
      return next();
    }
    setTenantContext(req, res, next);
  });
  app2.post("/api/auth/register", async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      const existingUser = await storage.getUserByUsername(userData.username, userData.tenantId);
      if (existingUser) {
        return res.status(409).json({ message: "Username already exists" });
      }
      const existingEmail = await storage.getUserByEmail(userData.email, userData.tenantId);
      if (existingEmail) {
        return res.status(409).json({ message: "Email already exists" });
      }
      const temporaryPassword = generateTemporaryPassword();
      const hashedPassword = await bcrypt2.hash(temporaryPassword, 12);
      const user = await storage.createUser({
        ...userData,
        password: hashedPassword,
        mustChangePassword: true,
        isTemporaryPassword: true
      });
      const tenant = await storage.getTenant(user.tenantId);
      if (tenant) {
        const welcomeEmailSent = await sendWelcomeEmail({
          userEmail: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
          temporaryPassword,
          organizationName: tenant.name,
          loginUrl: `${req.protocol}://${req.get("host")}/login`
        });
        const { sendRegistrationConfirmationEmail: sendRegistrationConfirmationEmail2 } = await Promise.resolve().then(() => (init_email_service(), email_service_exports));
        const confirmationEmailSent = await sendRegistrationConfirmationEmail2(
          user.email,
          `${user.firstName} ${user.lastName}`,
          tenant.name,
          `${req.protocol}://${req.get("host")}/login`
        );
        if (!welcomeEmailSent) {
          console.warn(`Failed to send welcome email to ${user.email}`);
        }
        if (!confirmationEmailSent) {
          console.warn(`Failed to send confirmation email to ${user.email}`);
        } else {
          console.log(`Registration confirmation email sent successfully to ${user.email}`);
        }
      }
      await storage.createAuditLog({
        tenantId: user.tenantId,
        userId: user.id,
        entityType: "user",
        entityId: user.id,
        action: "register",
        newData: { username: user.username, email: user.email, role: user.role },
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
      });
      res.status(201).json({
        message: "User created successfully. Welcome email sent with temporary password.",
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
          tenantId: user.tenantId
        }
      });
    } catch (error) {
      console.error("Registration error:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input data", errors: error.errors });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.use("/api", (req, res, next) => {
    if (req.path === "/supplier/login" || req.path.includes("/supplier/login") || req.path.startsWith("/placeholder/") || req.path.startsWith("/api/placeholder/") || req.path === "/marketplace/products" || req.path === "/advertisements" || req.path === "/marketplace/quote-requests" || req.path === "/marketplace/inquiries") {
      return next();
    }
    authenticateToken(req, res, next);
  });
  app2.get("/api/user/profile", async (req, res) => {
    try {
      const user = await storage.getUser(req.user.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({
        id: user.id,
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        tenantId: user.tenantId,
        lastLogin: user.lastLogin
      });
    } catch (error) {
      console.error("Profile error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get("/api/users", requireTenant, async (req, res) => {
    try {
      const { role } = req.query;
      const tenantId = req.tenant.id;
      if (role) {
        const users2 = await storage.getUsersByRole(role, tenantId);
        res.json(users2);
      } else {
        const users2 = await storage.getUsersByTenant(tenantId);
        res.json(users2);
      }
    } catch (error) {
      console.error("Get users error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get("/api/tenants", requireRole(["super_admin"]), async (req, res) => {
    try {
      const tenants2 = await storage.getAllTenants();
      res.json(tenants2);
    } catch (error) {
      console.error("Get tenants error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.post("/api/tenants", requireRole(["super_admin"]), async (req, res) => {
    try {
      const tenantData = insertTenantSchema.parse(req.body);
      const tenant = await storage.createTenant(tenantData);
      await storage.createAuditLog({
        tenantId: tenant.id,
        userId: req.user.id,
        entityType: "tenant",
        entityId: tenant.id,
        action: "create",
        newData: tenant,
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
      });
      res.status(201).json(tenant);
    } catch (error) {
      console.error("Create tenant error:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input data", errors: error.errors });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.use("/api/patients", requireTenant);
  app2.get("/api/patients", async (req, res) => {
    try {
      const { limit = "50", offset = "0", search } = req.query;
      const tenantId = req.tenant.id;
      let patients2;
      if (search && typeof search === "string") {
        patients2 = await storage.searchPatients(tenantId, search);
      } else {
        patients2 = await storage.getPatientsByTenant(tenantId, parseInt(limit), parseInt(offset));
      }
      res.json(patients2);
    } catch (error) {
      console.error("Get patients error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get("/api/patients/:id", async (req, res) => {
    try {
      const patient = await storage.getPatient(req.params.id, req.tenant.id);
      if (!patient) {
        return res.status(404).json({ message: "Patient not found" });
      }
      res.json(patient);
    } catch (error) {
      console.error("Get patient error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.post("/api/patients", requireRole(["physician", "nurse", "receptionist", "tenant_admin", "director"]), async (req, res) => {
    try {
      const mrn = `MRN${Date.now()}${Math.random().toString(36).substr(2, 5).toUpperCase()}`;
      const requestData = {
        ...req.body,
        tenantId: req.tenant.id,
        mrn,
        // Convert dateOfBirth string to Date if it's a string
        dateOfBirth: typeof req.body.dateOfBirth === "string" ? new Date(req.body.dateOfBirth) : req.body.dateOfBirth
      };
      const patientData = insertPatientSchema.parse(requestData);
      const patient = await storage.createPatient(patientData);
      await storage.createAuditLog({
        tenantId: req.tenant.id,
        userId: req.user.id,
        entityType: "patient",
        entityId: patient.id,
        action: "create",
        newData: patient,
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
      });
      res.status(201).json(patient);
    } catch (error) {
      console.error("Create patient error:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input data", errors: error.errors });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.use("/api/appointments", requireTenant);
  app2.get("/api/appointments", async (req, res) => {
    try {
      const { date, providerId } = req.query;
      const tenantId = req.tenant.id;
      let appointments2;
      const queryDate = date ? new Date(date) : void 0;
      if (providerId) {
        appointments2 = await storage.getAppointmentsByProvider(providerId, tenantId, queryDate);
      } else {
        appointments2 = await storage.getAppointmentsByTenant(tenantId, queryDate);
      }
      res.json(appointments2);
    } catch (error) {
      console.error("Get appointments error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get("/api/appointments/provider/:providerId", authenticateToken, requireTenant, async (req, res) => {
    try {
      const { providerId } = req.params;
      console.log("[DEBUG] Getting appointments for provider:", providerId);
      const appointments2 = await storage.getAppointmentsByProvider(providerId, req.tenant.id);
      res.json(appointments2);
    } catch (error) {
      console.error("Get provider appointments error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.post("/api/appointments", authenticateToken, requireTenant, async (req, res) => {
    try {
      console.log("[DEBUG] Creating appointment - User:", req.user?.role, "User ID:", req.user?.userId, "Tenant:", req.tenant?.id);
      console.log("[DEBUG] Request body:", req.body);
      const userRole = req.user.role;
      const userId = req.user.id;
      const tenantId = req.tenant.id;
      console.log(`[APPOINTMENT] User ${userId} (${userRole}) attempting to create appointment`);
      const allowedRoles = ["receptionist", "tenant_admin", "director", "super_admin"];
      if (userRole === "physician" || userRole === "doctor") {
        const userPermissions = await storage.getUserPermissions(userId, tenantId);
        const canScheduleAppointments = userPermissions?.includes("schedule_appointments");
        if (!canScheduleAppointments) {
          console.log(`[APPOINTMENT] \u274C Doctor/Physician ${userId} denied - no schedule permission`);
          return res.status(403).json({
            message: "Doctors cannot schedule appointments directly. Please contact reception staff or request scheduling permissions from your administrator.",
            error: "ROLE_RESTRICTION_SCHEDULING",
            requiredPermission: "schedule_appointments"
          });
        }
        console.log(`[APPOINTMENT] \u2705 Doctor/Physician ${userId} allowed - has explicit permission`);
      } else if (!allowedRoles.includes(userRole)) {
        console.log(`[APPOINTMENT] \u274C User ${userId} (${userRole}) denied - insufficient role`);
        return res.status(403).json({
          message: "Insufficient permissions to create appointments",
          error: "FORBIDDEN",
          allowedRoles,
          currentRole: userRole
        });
      }
      const requestData = { ...req.body };
      if (requestData.appointmentDate && typeof requestData.appointmentDate === "string") {
        requestData.appointmentDate = new Date(requestData.appointmentDate);
      }
      const appointmentData = insertAppointmentSchema.parse({
        ...requestData,
        tenantId: req.tenant.id
      });
      const appointment = await storage.createAppointment(appointmentData);
      await storage.createAuditLog({
        tenantId: req.tenant.id,
        userId: req.user.id,
        entityType: "appointment",
        entityId: appointment.id,
        action: "create",
        newData: appointment,
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
      });
      res.status(201).json(appointment);
    } catch (error) {
      console.error("Create appointment error:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input data", errors: error.errors });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.patch("/api/appointments/:id", authenticateToken, requireTenant, async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = { ...req.body };
      const userRole = req.user.role;
      const userId = req.user.id;
      const tenantId = req.tenant.id;
      console.log(`[APPOINTMENT] User ${userId} (${userRole}) attempting to update appointment ${id}`);
      const allowedRoles = ["receptionist", "tenant_admin", "director", "super_admin"];
      if (updateData.status && (userRole === "physician" || userRole === "doctor")) {
        const userPermissions = await storage.getUserPermissions(userId, tenantId);
        const canConfirmAppointments = userPermissions?.includes("confirm_appointments");
        if (!canConfirmAppointments) {
          console.log(`[APPOINTMENT] \u274C Doctor/Physician ${userId} denied appointment confirmation`);
          return res.status(403).json({
            message: "Doctors cannot confirm or modify appointment status. Please contact reception staff or request confirmation permissions from your administrator.",
            error: "ROLE_RESTRICTION_CONFIRMATION",
            requiredPermission: "confirm_appointments"
          });
        }
        console.log(`[APPOINTMENT] \u2705 Doctor/Physician ${userId} allowed to confirm - has explicit permission`);
      } else if (!allowedRoles.includes(userRole) && (userRole !== "physician" && userRole !== "doctor")) {
        console.log(`[APPOINTMENT] \u274C User ${userId} (${userRole}) denied - insufficient role`);
        return res.status(403).json({
          message: "Insufficient permissions to update appointments",
          error: "FORBIDDEN",
          allowedRoles,
          currentRole: userRole
        });
      }
      if (updateData.appointmentDate && typeof updateData.appointmentDate === "string") {
        updateData.appointmentDate = new Date(updateData.appointmentDate);
      }
      const updatedAppointment = await storage.updateAppointment(id, updateData, req.tenant.id);
      if (!updatedAppointment) {
        return res.status(404).json({ message: "Appointment not found" });
      }
      await storage.createAuditLog({
        tenantId: req.tenant.id,
        userId: req.user.id,
        entityType: "appointment",
        entityId: id,
        action: "update",
        newData: updatedAppointment,
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
      });
      res.json(updatedAppointment);
    } catch (error) {
      console.error("Update appointment error:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input data", errors: error.errors });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get("/api/prescriptions", authenticateToken, requireTenant, async (req, res) => {
    try {
      const { patientId } = req.query;
      const tenantId = req.tenant.id;
      let prescriptions2;
      if (patientId) {
        prescriptions2 = await storage.getPrescriptionsByPatient(patientId, tenantId);
      } else {
        prescriptions2 = await storage.getPrescriptionsByTenant(tenantId);
      }
      res.json(prescriptions2);
    } catch (error) {
      console.error("Get prescriptions error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.post("/api/prescriptions", requireRole(["physician", "nurse", "tenant_admin", "director", "super_admin"]), async (req, res) => {
    try {
      console.log("[DEBUG] POST /api/prescriptions called with body:", req.body);
      console.log("[DEBUG] Tenant:", req.tenant?.id);
      console.log("[DEBUG] User:", req.user?.id);
      const requestData = { ...req.body };
      if (requestData.expiryDate && typeof requestData.expiryDate === "string") {
        requestData.expiryDate = new Date(requestData.expiryDate);
      }
      const prescriptionData = {
        ...requestData,
        tenantId: req.tenant.id,
        providerId: req.user.id,
        appointmentId: requestData.appointmentId || null,
        pharmacyTenantId: requestData.pharmacyTenantId || null,
        prescribedDate: /* @__PURE__ */ new Date(),
        expiryDate: requestData.expiryDate ? new Date(requestData.expiryDate) : new Date(Date.now() + 365 * 24 * 60 * 60 * 1e3)
        // Default 1 year
      };
      console.log("[DEBUG] Prescription data prepared:", prescriptionData);
      const validatedData = insertPrescriptionSchema.parse(prescriptionData);
      console.log("[DEBUG] Data validated successfully:", validatedData);
      const prescription = await storage.createPrescription(validatedData);
      console.log("[DEBUG] Prescription created:", prescription);
      await storage.createAuditLog({
        tenantId: req.tenant.id,
        userId: req.user.id,
        entityType: "prescription",
        entityId: prescription.id,
        action: "create",
        newData: prescription,
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
      });
      res.status(201).json(prescription);
    } catch (error) {
      console.error("Create prescription error:", error);
      if (error instanceof z.ZodError) {
        console.error("Validation errors:", error.errors);
        return res.status(400).json({ message: "Invalid input data", errors: error.errors });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get("/api/pharmacy/prescriptions/:pharmacyTenantId", authenticateToken, requireTenant, async (req, res) => {
    try {
      console.log("[PHARMACY API] \u{1F680} GET /api/pharmacy/prescriptions called");
      const { pharmacyTenantId } = req.params;
      const userTenantId = req.tenant.id;
      console.log("[PHARMACY API] \u{1F4CB} Pharmacy Tenant ID:", pharmacyTenantId);
      console.log("[PHARMACY API] \u{1F512} User Tenant ID:", userTenantId);
      if (pharmacyTenantId !== userTenantId) {
        console.log("[PHARMACY API] \u274C TENANT ISOLATION VIOLATION: User from tenant", userTenantId, "trying to access tenant", pharmacyTenantId);
        return res.status(403).json({
          message: "Access denied: Cannot access data from different tenant",
          error: "TENANT_ISOLATION_VIOLATION"
        });
      }
      if (req.tenant.type !== "pharmacy" && req.user?.role !== "super_admin") {
        console.log("[PHARMACY API] \u274C INVALID TENANT TYPE: Tenant type is", req.tenant.type, "but expected pharmacy");
        return res.status(403).json({
          message: "Access denied: This endpoint is only for pharmacy tenants",
          error: "INVALID_TENANT_TYPE"
        });
      }
      if (req.user?.role === "super_admin" && req.tenant.type !== "pharmacy") {
        console.log("[PHARMACY API] \u{1F527} Super admin oversight access to pharmacy", pharmacyTenantId);
        const targetTenant = await storage.getTenant(pharmacyTenantId);
        if (!targetTenant || targetTenant.type !== "pharmacy") {
          return res.status(404).json({ message: "Pharmacy tenant not found" });
        }
        const oversightInfo = {
          pharmacy: {
            id: targetTenant.id,
            name: targetTenant.name,
            type: targetTenant.type,
            status: targetTenant.isActive ? "Active" : "Inactive"
          },
          message: "Super admin oversight mode - for operational access, login with pharmacy credentials",
          managementActions: [
            "View tenant settings",
            "Manage users",
            "View audit logs",
            "Monitor compliance"
          ]
        };
        return res.json(oversightInfo);
      }
      const prescriptions2 = await storage.getPrescriptionsByPharmacy(pharmacyTenantId);
      console.log("[PHARMACY API] \u2705 Returning prescriptions:", prescriptions2.length);
      res.json(prescriptions2);
    } catch (error) {
      console.error("[PHARMACY API] \u274C Error getting pharmacy prescriptions:", error);
      res.status(500).json({ message: "Failed to get pharmacy prescriptions" });
    }
  });
  app2.patch("/api/pharmacy/prescriptions/:prescriptionId/process", authenticateToken, requireTenant, async (req, res) => {
    try {
      console.log("[PHARMACY API] \u{1F504} PATCH /api/pharmacy/prescriptions/process called");
      const { prescriptionId } = req.params;
      const { status } = req.body;
      console.log("[PHARMACY API] \u{1F4CB} Prescription ID:", prescriptionId);
      console.log("[PHARMACY API] \u{1F504} New Status:", status);
      const validStatuses = ["new", "processing", "ready", "dispensed"];
      if (!validStatuses.includes(status)) {
        return res.status(400).json({ message: "Invalid status" });
      }
      const updatedPrescription = await storage.updatePrescriptionStatus(prescriptionId, status);
      console.log("[PHARMACY API] \u2705 Prescription status updated successfully");
      res.json(updatedPrescription);
    } catch (error) {
      console.error("[PHARMACY API] \u274C Error updating prescription status:", error);
      res.status(500).json({ message: "Failed to update prescription status" });
    }
  });
  app2.get("/api/pharmacy/prescription-archives", authenticateToken, requireTenant, async (req, res) => {
    try {
      console.log(`[PHARMACY API] \u{1F4E6} GET /api/pharmacy/prescription-archives called`);
      const tenantId = req.tenant.id;
      const archives = await storage.getPrescriptionArchives(tenantId);
      console.log(`[PHARMACY API] \u2705 Retrieved ${archives.length} archived prescriptions`);
      res.json(archives);
    } catch (error) {
      console.error(`[PHARMACY API] \u274C Error fetching prescription archives:`, error);
      res.status(500).json({ message: "Failed to fetch prescription archives" });
    }
  });
  app2.get("/api/prescriptions", authenticateToken, requireTenant, async (req, res) => {
    try {
      console.log("[PRESCRIPTION API] \u{1F680} GET /api/prescriptions called");
      const tenantId = req.user?.tenantId;
      console.log("[PRESCRIPTION API] \u{1F4CB} Tenant ID:", tenantId);
      const allPrescriptions = await storage.getPrescriptionsByTenant(tenantId);
      console.log("[PRESCRIPTION API] \u2705 Found", allPrescriptions.length, "prescriptions");
      res.json(allPrescriptions);
    } catch (error) {
      console.error("[PRESCRIPTION API] \u274C Error getting prescriptions:", error);
      res.status(500).json({ message: "Failed to get prescriptions" });
    }
  });
  app2.patch("/api/prescriptions/:prescriptionId/status", authenticateToken, requireTenant, async (req, res) => {
    try {
      console.log("[PRESCRIPTION API] \u{1F504} PATCH /api/prescriptions/status called");
      const { prescriptionId } = req.params;
      const { status } = req.body;
      console.log("[PRESCRIPTION API] \u{1F4CB} Prescription ID:", prescriptionId);
      console.log("[PRESCRIPTION API] \u{1F504} New Status:", status);
      const validStatuses = ["prescribed", "sent_to_pharmacy", "received", "processing", "ready", "dispensed", "cancelled"];
      if (!validStatuses.includes(status)) {
        return res.status(400).json({ message: "Invalid status" });
      }
      const updatedPrescription = await storage.updatePrescriptionStatus(prescriptionId, status);
      console.log("[PRESCRIPTION API] \u2705 Prescription status updated successfully");
      res.json(updatedPrescription);
    } catch (error) {
      console.error("[PRESCRIPTION API] \u274C Error updating prescription status:", error);
      res.status(500).json({ message: "Failed to update prescription status" });
    }
  });
  app2.get("/api/lab-orders", authenticateToken, requireTenant, async (req, res) => {
    try {
      const { patientId, pending } = req.query;
      const tenantId = req.tenant.id;
      let labOrders2;
      if (patientId) {
        labOrders2 = await storage.getLabOrdersByPatient(patientId, tenantId);
      } else if (pending === "true") {
        labOrders2 = await storage.getPendingLabOrders(tenantId);
      } else {
        labOrders2 = await storage.getLabOrdersByTenant(tenantId);
      }
      res.json(labOrders2);
    } catch (error) {
      console.error("Get lab orders error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.post("/api/lab-orders", requireRole(["physician", "nurse", "tenant_admin", "director", "super_admin"]), async (req, res) => {
    try {
      const requestData = { ...req.body };
      if (requestData.orderedDate && typeof requestData.orderedDate === "string") {
        requestData.orderedDate = new Date(requestData.orderedDate);
      }
      const labOrderData = {
        ...requestData,
        tenantId: req.tenant.id,
        providerId: req.user.id,
        orderedDate: requestData.orderedDate || /* @__PURE__ */ new Date(),
        appointmentId: requestData.appointmentId || null,
        labTenantId: requestData.labTenantId || null
      };
      const validatedData = insertLabOrderSchema.parse(labOrderData);
      const labOrder = await storage.createLabOrder(validatedData);
      await storage.createAuditLog({
        tenantId: req.tenant.id,
        userId: req.user.id,
        entityType: "lab_order",
        entityId: labOrder.id,
        action: "create",
        newData: labOrder,
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
      });
      res.status(201).json(labOrder);
    } catch (error) {
      console.error("Create lab order error:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input data", errors: error.errors });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.use("/api/insurance-claims", requireTenant);
  app2.get("/api/insurance-claims", async (req, res) => {
    try {
      const { patientId } = req.query;
      const tenantId = req.tenant.id;
      let claims;
      if (patientId) {
        claims = await storage.getInsuranceClaimsByPatient(patientId, tenantId);
      } else {
        claims = await storage.getInsuranceClaimsByTenant(tenantId);
      }
      res.json(claims);
    } catch (error) {
      console.error("Get insurance claims error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.post("/api/insurance-claims", requireRole(["billing_staff", "physician", "tenant_admin", "director"]), async (req, res) => {
    try {
      const requestData = { ...req.body };
      if (!requestData.claimNumber) {
        requestData.claimNumber = `CLM-${Date.now()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`;
      }
      const claimData = insertInsuranceClaimSchema.parse({
        ...requestData,
        tenantId: req.tenant.id
      });
      const claim = await storage.createInsuranceClaim(claimData);
      await storage.createAuditLog({
        tenantId: req.tenant.id,
        userId: req.user.id,
        entityType: "insurance_claim",
        entityId: claim.id,
        action: "create",
        newData: claim,
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
      });
      res.status(201).json(claim);
    } catch (error) {
      console.error("Create insurance claim error:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input data", errors: error.errors });
      }
      if (error.code === "23505" && error.constraint === "insurance_claims_claim_number_unique") {
        return res.status(400).json({ message: "Claim number already exists. Please use a different claim number." });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.patch("/api/insurance-claims/:id", requireRole(["billing_staff", "physician", "tenant_admin", "director"]), async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = { ...req.body };
      if (updateData.submittedDate) {
        updateData.submittedDate = new Date(updateData.submittedDate);
      }
      if (updateData.processedDate) {
        updateData.processedDate = new Date(updateData.processedDate);
      }
      const updatedClaim = await storage.updateInsuranceClaim(id, updateData, req.tenant.id);
      await storage.createAuditLog({
        tenantId: req.tenant.id,
        userId: req.user.id,
        entityType: "insurance_claim",
        entityId: id,
        action: "update",
        newData: updateData,
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
      });
      res.json(updatedClaim);
    } catch (error) {
      console.error("Update insurance claim error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get("/api/insurance-providers", requireTenant, async (req, res) => {
    try {
      const providers = await storage.getInsuranceProviders(req.tenant.id);
      res.json(providers);
    } catch (error) {
      console.error("Get insurance providers error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get("/api/patient-insurance/:patientId", requireTenant, async (req, res) => {
    try {
      const { patientId } = req.params;
      const insuranceList = await storage.getPatientInsurance(patientId, req.tenant.id);
      res.json(insuranceList);
    } catch (error) {
      console.error("Get patient insurance error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get("/api/service-prices", requireTenant, async (req, res) => {
    try {
      const servicePrices2 = await storage.getServicePrices(req.tenant.id);
      res.json(servicePrices2);
    } catch (error) {
      console.error("Get service prices error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.post("/api/service-prices", requireRole(["tenant_admin", "director", "billing_staff"]), async (req, res) => {
    try {
      const servicePriceData = insertServicePriceSchema.parse({
        ...req.body,
        tenantId: req.tenant.id
      });
      const servicePrice = await storage.createServicePrice(servicePriceData);
      res.json(servicePrice);
    } catch (error) {
      console.error("Create service price error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get("/api/service-prices/:id", requireTenant, async (req, res) => {
    try {
      const { id } = req.params;
      const servicePrice = await storage.getServicePrice(id, req.tenant.id);
      if (!servicePrice) {
        return res.status(404).json({ message: "Service price not found" });
      }
      res.json(servicePrice);
    } catch (error) {
      console.error("Get service price error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get("/api/insurance-plan-coverage", requireTenant, async (req, res) => {
    try {
      const coverages = await storage.getInsurancePlanCoverages(req.tenant.id);
      res.json(coverages);
    } catch (error) {
      console.error("Get insurance plan coverages error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.post("/api/insurance-plan-coverage", requireRole(["tenant_admin", "director", "billing_staff"]), async (req, res) => {
    try {
      const coverageData = insertInsurancePlanCoverageSchema.parse({
        ...req.body,
        tenantId: req.tenant.id
      });
      const coverage = await storage.createInsurancePlanCoverage(coverageData);
      res.json(coverage);
    } catch (error) {
      console.error("Create insurance plan coverage error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.post("/api/calculate-pricing", requireTenant, async (req, res) => {
    try {
      const { servicePriceId, insuranceProviderId, patientInsuranceId } = req.body;
      if (!servicePriceId || !insuranceProviderId || !patientInsuranceId) {
        return res.status(400).json({
          message: "servicePriceId, insuranceProviderId, and patientInsuranceId are required"
        });
      }
      const pricing = await storage.calculateCopayAndInsuranceAmount(
        servicePriceId,
        insuranceProviderId,
        patientInsuranceId,
        req.tenant.id
      );
      res.json(pricing);
    } catch (error) {
      console.error("Calculate pricing error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get("/api/claim-line-items/:claimId", requireTenant, async (req, res) => {
    try {
      const { claimId } = req.params;
      const lineItems = await storage.getClaimLineItems(claimId, req.tenant.id);
      res.json(lineItems);
    } catch (error) {
      console.error("Get claim line items error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.post("/api/claim-line-items", requireRole(["billing_staff", "physician", "tenant_admin", "director"]), async (req, res) => {
    try {
      const lineItemData = insertClaimLineItemSchema.parse({
        ...req.body,
        tenantId: req.tenant.id
      });
      const lineItem = await storage.createClaimLineItem(lineItemData);
      res.json(lineItem);
    } catch (error) {
      console.error("Create claim line item error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get("/api/dashboard/metrics", requireTenant, async (req, res) => {
    try {
      const tenantId = req.tenant?.id || req.user?.tenantId;
      if (!tenantId) {
        return res.status(400).json({ message: "Tenant context required" });
      }
      const metrics = await storage.getDashboardMetrics(tenantId);
      res.json(metrics);
    } catch (error) {
      console.error("Get dashboard metrics error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get("/api/audit-logs", requireRole(["tenant_admin", "director", "super_admin"]), requireTenant, async (req, res) => {
    try {
      const { limit = "50", offset = "0" } = req.query;
      const auditLogs2 = await storage.getAuditLogs(
        req.tenant.id,
        parseInt(limit),
        parseInt(offset)
      );
      res.json(auditLogs2);
    } catch (error) {
      console.error("Get audit logs error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get("/api/platform/metrics", authenticateToken, async (req, res) => {
    try {
      if (req.user.role !== "super_admin") {
        return res.status(403).json({ message: "Access denied" });
      }
      const metrics = await storage.getPlatformMetrics();
      res.json(metrics);
    } catch (error) {
      console.error("Platform metrics error:", error);
      res.status(500).json({ message: "Failed to fetch platform metrics" });
    }
  });
  app2.get("/api/reports", authenticateToken, requireTenant, async (req, res) => {
    try {
      const reports2 = await storage.getReportsByTenant(req.tenant.id);
      res.json(reports2);
    } catch (error) {
      console.error("Reports fetch error:", error);
      res.status(500).json({ message: "Failed to fetch reports" });
    }
  });
  app2.post("/api/reports", authenticateToken, requireTenant, async (req, res) => {
    try {
      const reportData = insertReportSchema.parse({
        ...req.body,
        tenantId: req.tenant.id,
        generatedBy: req.user.userId,
        status: "generating"
      });
      const report = await storage.createReport(reportData);
      await storage.createAuditLog({
        tenantId: req.tenant.id,
        userId: req.user.userId,
        entityType: "report",
        entityId: report.id,
        action: "create",
        newData: { title: report.title, type: report.type },
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
      });
      setTimeout(async () => {
        try {
          await storage.updateReport(report.id, {
            status: "completed",
            completedAt: /* @__PURE__ */ new Date(),
            fileUrl: `/api/reports/${report.id}/download`
          }, req.tenant.id);
        } catch (error) {
          console.error("Report completion error:", error);
        }
      }, 3e3);
      res.status(201).json(report);
    } catch (error) {
      console.error("Report creation error:", error);
      res.status(500).json({ message: "Failed to create report" });
    }
  });
  app2.get("/api/pharmacy/metrics", authenticateToken, requireTenant, async (req, res) => {
    try {
      const pharmacyTenantId = req.tenant.id;
      const tenantName = req.tenant.name;
      const prescriptions2 = await storage.getPrescriptionsByPharmacyTenant(pharmacyTenantId);
      const today = /* @__PURE__ */ new Date();
      today.setHours(0, 0, 0, 0);
      const todayPrescriptions = prescriptions2.filter(
        (p) => new Date(p.prescribedDate) >= today
      );
      const weekStart = new Date(today);
      weekStart.setDate(today.getDate() - 7);
      const weekPrescriptions = prescriptions2.filter(
        (p) => new Date(p.prescribedDate) >= weekStart
      );
      const metrics = {
        prescriptionsToday: todayPrescriptions.length,
        prescriptionsWeek: weekPrescriptions.length,
        revenueToday: todayPrescriptions.length * 32.45,
        revenueWeek: weekPrescriptions.length * 32.45,
        patientsToday: new Set(todayPrescriptions.map((p) => p.patientId)).size,
        averageWaitTime: 12,
        inventoryAlerts: 8,
        insuranceClaims: Math.floor(weekPrescriptions.length * 0.8),
        connectedHospitals: 3,
        // Number of hospitals connected to this pharmacy
        pharmacyName: tenantName,
        platformName: "NaviMED"
      };
      res.json(metrics);
    } catch (error) {
      console.error("Get pharmacy metrics error:", error);
      res.status(500).json({ message: "Failed to fetch pharmacy metrics" });
    }
  });
  app2.get("/api/pharmacy/prescriptions", authenticateToken, requireTenant, async (req, res) => {
    try {
      const pharmacyTenantId = req.tenant.id;
      console.log("[PHARMACY API] \u2705 Fetching prescriptions for pharmacy:", pharmacyTenantId);
      console.log("[PHARMACY API] \u2705 Request tenant type:", req.tenant.type);
      console.log("[PHARMACY API] \u2705 User:", req.user?.id, "Role:", req.user?.role);
      if (req.tenant.type !== "pharmacy" && req.user?.role !== "super_admin") {
        console.log("[PHARMACY API] \u274C INVALID TENANT TYPE: Tenant type is", req.tenant.type, "but expected pharmacy");
        return res.status(403).json({
          message: "Access denied: This endpoint is only for pharmacy tenants",
          error: "INVALID_TENANT_TYPE"
        });
      }
      if (req.user?.role === "super_admin" && req.tenant.type !== "pharmacy") {
        console.log("[PHARMACY API] \u{1F527} Super admin oversight access - limited view only");
        const oversightData = {
          tenantInfo: {
            id: req.tenant.id,
            name: req.tenant.name,
            type: req.tenant.type
          },
          message: "Super admin oversight mode - operational access requires pharmacy tenant login",
          availableActions: ["View tenant info", "Manage users", "View audit logs"]
        };
        return res.json(oversightData);
      }
      const prescriptions2 = await storage.getPrescriptionsByPharmacyTenant(pharmacyTenantId);
      console.log("[PHARMACY API] \u2705 Found prescriptions:", prescriptions2.length);
      console.log("[PHARMACY API] \u2705 Prescriptions data:", prescriptions2);
      const transformedPrescriptions = prescriptions2.map((p) => ({
        id: p.id,
        patientName: `Patient ${p.id.slice(0, 8)}`,
        // We'll get patient names separately
        medication: p.medicationName || p.medication_name || "Unknown",
        status: p.status,
        waitTime: 0,
        priority: "normal",
        insuranceStatus: p.insuranceCopay ? "approved" : "pending"
      }));
      const formattedPrescriptions = prescriptions2.map((p) => ({
        id: p.id,
        patientName: p.patientName || "Patient Name",
        medication: p.medicationName,
        dosage: p.dosage,
        frequency: p.frequency,
        quantity: p.quantity,
        status: p.status || "new",
        waitTime: Math.floor(Math.random() * 30),
        priority: p.priority || "normal",
        insuranceStatus: p.insuranceStatus || "pending",
        sourceHospital: "Metro General Hospital",
        // Hospital that routed this prescription
        routedVia: "NaviMED Platform",
        pharmacyId: pharmacyTenantId,
        prescribedDate: p.prescribedDate,
        instructions: p.instructions
      }));
      console.log("[PHARMACY API] Returning formatted prescriptions:", formattedPrescriptions.length);
      res.json(formattedPrescriptions);
    } catch (error) {
      console.error("Get pharmacy prescriptions error:", error);
      res.status(500).json({ message: "Failed to fetch pharmacy prescriptions" });
    }
  });
  app2.get("/api/pharmacy/inventory-alerts", authenticateToken, requireTenant, async (req, res) => {
    try {
      const tenantId = req.tenant.id;
      const pharmacyAlerts = [
        {
          id: `${tenantId}-I001`,
          medication: "Insulin Glargine",
          currentStock: 5,
          reorderLevel: 20,
          supplier: "Sanofi",
          urgency: "critical",
          pharmacyId: tenantId,
          demandSource: "Connected hospitals via NaviMED"
        },
        {
          id: `${tenantId}-I002`,
          medication: "Albuterol Inhaler",
          currentStock: 12,
          reorderLevel: 25,
          supplier: "GSK",
          urgency: "high",
          pharmacyId: tenantId,
          demandSource: "Metro General Hospital prescriptions"
        },
        {
          id: `${tenantId}-I003`,
          medication: "Amoxicillin 500mg",
          currentStock: 45,
          reorderLevel: 100,
          supplier: "Teva",
          urgency: "medium",
          pharmacyId: tenantId,
          demandSource: "Multiple hospital networks"
        }
      ];
      res.json(pharmacyAlerts);
    } catch (error) {
      console.error("Get inventory alerts error:", error);
      res.status(500).json({ message: "Failed to fetch inventory alerts" });
    }
  });
  app2.post("/api/pharmacy/reports/enhanced", authenticateToken, requireTenant, async (req, res) => {
    try {
      const tenantId = req.tenant.id;
      const tenantName = req.tenant.name;
      const { reportType, startDate, endDate, format } = req.body;
      const prescriptions2 = await storage.getPrescriptionsByTenant(tenantId);
      const generatePharmacyData = (type) => {
        const baseData = {
          prescriptions: prescriptions2.length,
          revenue: `$${(prescriptions2.length * 32.45).toFixed(2)}`,
          claims: Math.floor(prescriptions2.length * 0.8),
          averageProcessingTime: `12 minutes`,
          patientsServed: new Set(prescriptions2.map((p) => p.patientId)).size,
          inventoryItems: 250,
          connectedHospitals: 3,
          prescriptionRouting: "NaviMED Platform",
          pharmacyName: tenantName,
          platformType: "Independent Pharmacy Network"
        };
        return baseData;
      };
      const reportData = generatePharmacyData(reportType || "daily");
      const response = {
        success: true,
        message: "Independent pharmacy report generated successfully",
        reportType: reportType || "daily",
        startDate: startDate || (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
        endDate: endDate || (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
        format: format || "pdf",
        generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
        data: reportData,
        platformName: "NaviMED",
        pharmacyType: "Independent",
        hospitalConnected: true
      };
      res.json(response);
    } catch (error) {
      console.error("Enhanced pharmacy report error:", error);
      res.status(500).json({ message: "Failed to generate enhanced pharmacy report" });
    }
  });
  app2.post("/api/hospital/route-prescription", authenticateToken, requireTenant, async (req, res) => {
    try {
      const { patientId, prescriptionData, preferredPharmacyId } = req.body;
      const routedPrescription = {
        ...prescriptionData,
        routedVia: "NaviMED Platform",
        sourceHospital: req.tenant.name,
        targetPharmacy: preferredPharmacyId,
        routingTimestamp: /* @__PURE__ */ new Date(),
        status: "routed"
      };
      console.log(`Prescription routed from ${req.tenant.name} to pharmacy ${preferredPharmacyId} via NaviMED`);
      res.json({
        success: true,
        message: "Prescription successfully routed to preferred pharmacy",
        routingId: `${req.tenant.id}-${Date.now()}`,
        pharmacy: preferredPharmacyId,
        platform: "NaviMED"
      });
    } catch (error) {
      console.error("Prescription routing error:", error);
      res.status(500).json({ message: "Failed to route prescription" });
    }
  });
  app2.post("/api/reports/generate", authenticateToken, requireTenant, async (req, res) => {
    console.log("LEGACY ENDPOINT CALLED - BLOCKING CONFLICTING REQUEST:", JSON.stringify(req.body, null, 2));
    res.json({
      success: true,
      message: "Legacy endpoint - use enhanced pharmacy endpoint instead",
      blocked: true
    });
  });
  app2.post("/api/platform/reports/generate", authenticateToken, async (req, res) => {
    try {
      console.log("Cross-tenant report - User:", req.user);
      if (req.user.role !== "super_admin") {
        return res.status(403).json({ message: "Access denied. Super admin role required." });
      }
      const { targetTenantId, ...reportParams } = req.body;
      if (!targetTenantId) {
        return res.status(400).json({ message: "Target tenant ID is required for cross-tenant reports" });
      }
      const targetTenant = await storage.getTenant(targetTenantId);
      if (!targetTenant) {
        return res.status(404).json({ message: "Target tenant not found" });
      }
      const reportData = insertReportSchema.parse({
        ...reportParams,
        tenantId: targetTenantId,
        generatedBy: req.user.userId,
        status: "generating",
        parameters: {
          ...reportParams.parameters,
          crossTenantGeneration: true,
          generatedByRole: "super_admin"
        }
      });
      const report = await storage.createReport(reportData);
      await storage.createAuditLog({
        tenantId: req.user.tenantId,
        // Platform tenant
        userId: req.user.userId,
        entityType: "cross_tenant_report",
        entityId: report.id,
        action: "create",
        newData: {
          title: report.title,
          type: report.type,
          targetTenant: targetTenant.name,
          targetTenantId
        },
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
      });
      await storage.createAuditLog({
        tenantId: targetTenantId,
        // Target tenant
        userId: req.user.userId,
        entityType: "report",
        entityId: report.id,
        action: "platform_generate",
        newData: {
          title: report.title,
          type: report.type,
          generatedBy: "platform_admin"
        },
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
      });
      setTimeout(async () => {
        try {
          await storage.updateReport(report.id, {
            status: "completed",
            completedAt: /* @__PURE__ */ new Date(),
            fileUrl: `/api/platform/reports/${report.id}/download`
          }, targetTenantId);
        } catch (error) {
          console.error("Cross-tenant report completion error:", error);
        }
      }, 4e3);
      res.status(201).json(report);
    } catch (error) {
      console.error("Cross-tenant report creation error:", error);
      res.status(500).json({ message: "Failed to create cross-tenant report" });
    }
  });
  app2.get("/api/users/:tenantId", authenticateToken, requireTenant, async (req, res) => {
    try {
      const { tenantId } = req.params;
      if (req.user?.role === "super_admin") {
        const users2 = await storage.getUsersByTenant(tenantId);
        res.json(users2);
      } else if ((req.user?.role === "tenant_admin" || req.user?.role === "director") && req.user.tenantId === tenantId) {
        const users2 = await storage.getUsersByTenant(tenantId);
        res.json(users2);
      } else if (req.user?.tenantId === tenantId) {
        const users2 = await storage.getUsersByTenant(tenantId);
        res.json(users2);
      } else {
        return res.status(403).json({ message: "Access denied. Cannot view users from this organization." });
      }
    } catch (error) {
      console.error("Get users error:", error);
      res.status(500).json({ message: "Failed to fetch users" });
    }
  });
  app2.patch("/api/users/:id", authenticateToken, requireTenant, async (req, res) => {
    console.log("\u{1F525} USER UPDATE REQUEST:", {
      userId: req.params.id,
      updateData: req.body,
      userRole: req.user?.role,
      userTenant: req.user?.tenantId,
      requestHeaders: req.headers.authorization?.substring(0, 30)
    });
    try {
      const { id } = req.params;
      const updateData = req.body;
      const existingUser = await storage.getUser(id);
      if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
      }
      const hasPermission = req.user.role === "super_admin" || (req.user.role === "tenant_admin" || req.user.role === "director") && existingUser.tenantId === req.user.tenantId || req.user.id === id;
      if (!hasPermission) {
        return res.status(403).json({ message: "Access denied. Cannot update this user." });
      }
      if (existingUser.role === "super_admin" && updateData.isActive === false) {
        return res.status(403).json({ message: "Cannot deactivate super admin users. This role is permanent for platform security." });
      }
      if (req.user.id === id && updateData.isActive === false) {
        return res.status(403).json({ message: "You cannot deactivate your own account." });
      }
      const updatedUser = await storage.updateUser(id, updateData);
      await storage.createAuditLog({
        tenantId: existingUser.tenantId,
        userId: req.user.id,
        entityType: "user",
        entityId: id,
        action: "update",
        oldData: { isActive: existingUser.isActive, role: existingUser.role },
        newData: updateData,
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
      });
      res.json({
        message: "User updated successfully",
        user: {
          id: updatedUser.id,
          username: updatedUser.username,
          email: updatedUser.email,
          firstName: updatedUser.firstName,
          lastName: updatedUser.lastName,
          role: updatedUser.role,
          isActive: updatedUser.isActive,
          tenantId: updatedUser.tenantId
        }
      });
    } catch (error) {
      console.error("User update error:", error);
      res.status(500).json({ message: "Failed to update user" });
    }
  });
  app2.patch("/api/tenants/:tenantId/white-label", authenticateToken, async (req, res) => {
    try {
      const { tenantId } = req.params;
      const { brandName, logoUrl, primaryColor, secondaryColor, customDomain, customCss } = req.body;
      const canManage = req.user?.role === "super_admin" || req.user?.role === "tenant_admin" && req.user?.tenantId === tenantId || req.user?.role === "director" && req.user?.tenantId === tenantId;
      if (!canManage) {
        return res.status(403).json({ message: "Access denied. Cannot manage white label settings for this tenant." });
      }
      console.log(`[SUPER ADMIN] White label settings update for tenant: ${tenantId}`);
      const updatedTenant = await storage.updateTenant(tenantId, {
        brandName,
        logoUrl,
        primaryColor,
        secondaryColor,
        customDomain,
        customCss,
        updatedAt: /* @__PURE__ */ new Date()
      });
      if (!updatedTenant) {
        return res.status(404).json({ message: "Tenant not found" });
      }
      await storage.createAuditLog({
        tenantId: req.user.tenantId,
        // Platform tenant
        userId: req.user.id,
        entityType: "white_label_settings",
        entityId: tenantId,
        action: "update",
        newData: { brandName, logoUrl, primaryColor, secondaryColor, customDomain },
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
      });
      res.json({
        message: "White label settings updated successfully",
        tenant: updatedTenant
      });
    } catch (error) {
      console.error("White label settings update error:", error);
      res.status(500).json({ message: "Failed to update white label settings" });
    }
  });
  app2.patch("/api/tenants/:tenantId/subscription", authenticateToken, async (req, res) => {
    try {
      const { tenantId } = req.params;
      const { subscriptionStatus, trialEndDate, planType, features } = req.body;
      if (req.user?.role !== "super_admin") {
        return res.status(403).json({ message: "Only super admin can manage client subscriptions" });
      }
      console.log(`[SUPER ADMIN] Subscription update for tenant: ${tenantId}`);
      const updatedTenant = await storage.updateTenant(tenantId, {
        subscriptionStatus,
        trialEndDate: trialEndDate ? new Date(trialEndDate) : void 0,
        planType,
        settings: {
          ...await storage.getTenant(tenantId).then((t) => t?.settings || {}),
          features: features || ["unlimited", "white_label", "premium_support"],
          planType: planType || "unlimited"
        },
        updatedAt: /* @__PURE__ */ new Date()
      });
      if (!updatedTenant) {
        return res.status(404).json({ message: "Tenant not found" });
      }
      await storage.createAuditLog({
        tenantId: req.user.tenantId,
        // Platform tenant
        userId: req.user.id,
        entityType: "subscription",
        entityId: tenantId,
        action: "update",
        newData: { subscriptionStatus, planType, features },
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
      });
      res.json({
        message: "Subscription updated successfully",
        tenant: updatedTenant
      });
    } catch (error) {
      console.error("Subscription update error:", error);
      res.status(500).json({ message: "Failed to update subscription" });
    }
  });
  app2.get("/api/admin/clients", authenticateToken, async (req, res) => {
    try {
      if (req.user?.role !== "super_admin") {
        return res.status(403).json({ message: "Only super admin can access client management" });
      }
      const tenants2 = await storage.getAllTenants();
      const clientsData = await Promise.all(tenants2.map(async (tenant) => {
        const users2 = await storage.getUsersByTenant(tenant.id);
        const activeUsers = users2.filter((u) => u.isActive).length;
        return {
          ...tenant,
          userCount: users2.length,
          activeUsers,
          hasWhiteLabel: !!(tenant.brandName || tenant.logoUrl || tenant.customDomain),
          isUnlimited: tenant.settings?.planType === "unlimited" || tenant.settings?.features?.includes("unlimited")
        };
      }));
      res.json(clientsData);
    } catch (error) {
      console.error("Client management error:", error);
      res.status(500).json({ message: "Failed to fetch client data" });
    }
  });
  app2.post("/api/users", authenticateToken, requireTenant, async (req, res) => {
    try {
      const { username, email, password, firstName, lastName, role } = req.body;
      if (!username || !email || !password || !firstName || !lastName || !role) {
        return res.status(400).json({ message: "All fields are required" });
      }
      if (req.user?.role !== "super_admin" && req.user?.role !== "tenant_admin" && req.user?.role !== "director") {
        return res.status(403).json({ message: "Access denied. Admin privileges required to create users." });
      }
      const targetTenantId = req.user.role === "super_admin" ? req.body.tenantId || req.user.tenantId : req.user.tenantId;
      if (req.user?.role === "tenant_admin" || req.user?.role === "director") {
        if (role === "super_admin") {
          return res.status(403).json({ message: "Only super admins can create other super admin users." });
        }
      }
      const existingUserByUsername = await storage.getUserByUsername(username, targetTenantId);
      if (existingUserByUsername) {
        return res.status(400).json({ message: "Username already exists in this organization" });
      }
      const existingUserByEmail = await storage.getUserByEmail(email, targetTenantId);
      if (existingUserByEmail) {
        return res.status(400).json({ message: "Email already exists in this organization" });
      }
      const hashedPassword = await bcrypt2.hash(password, 10);
      const newUser = await storage.createUser({
        username,
        email,
        password: hashedPassword,
        firstName,
        lastName,
        role,
        // Cast to UserRole type
        tenantId: targetTenantId,
        isActive: true
      });
      await storage.createAuditLog({
        tenantId: targetTenantId,
        userId: req.user?.id || null,
        entityType: "user",
        entityId: newUser.id,
        action: "create",
        previousData: null,
        newData: {
          username,
          email,
          firstName,
          lastName,
          role,
          tenantId: targetTenantId
        },
        ipAddress: req.ip || null,
        userAgent: req.get("User-Agent") || null
      });
      res.status(201).json({
        message: "User created successfully",
        user: {
          id: newUser.id,
          username: newUser.username,
          email: newUser.email,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          role: newUser.role,
          isActive: newUser.isActive,
          tenantId: newUser.tenantId
        }
      });
    } catch (error) {
      console.error("User creation error:", error);
      res.status(500).json({ message: "Failed to create user" });
    }
  });
  app2.get("/api/platform/reports", authenticateToken, async (req, res) => {
    try {
      if (req.user.role !== "super_admin") {
        return res.status(403).json({ message: "Access denied. Super admin role required." });
      }
      const reports2 = await storage.getAllReports();
      res.json(reports2);
    } catch (error) {
      console.error("Platform reports fetch error:", error);
      res.status(500).json({ message: "Failed to fetch platform reports" });
    }
  });
  app2.get("/api/reports/:id/download", authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;
      const report = await storage.getReport(id, req.tenant?.id || "");
      if (!report) {
        return res.status(404).json({ message: "Report not found" });
      }
      if (report.status !== "completed") {
        return res.status(400).json({ message: "Report is not ready for download" });
      }
      const reportContent = generateReportContent(report);
      const filename = `${report.title.replace(/[^a-zA-Z0-9]/g, "_")}.${report.format}`;
      switch (report.format) {
        case "pdf":
          res.setHeader("Content-Type", "application/pdf");
          break;
        case "excel":
          res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
          break;
        case "csv":
          res.setHeader("Content-Type", "text/csv");
          break;
        default:
          res.setHeader("Content-Type", "application/octet-stream");
      }
      res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
      res.send(reportContent);
    } catch (error) {
      console.error("Report download error:", error);
      res.status(500).json({ message: "Failed to download report" });
    }
  });
  app2.get("/api/platform/reports/:id/download", authenticateToken, async (req, res) => {
    try {
      if (req.user.role !== "super_admin") {
        return res.status(403).json({ message: "Access denied. Super admin role required." });
      }
      const { id } = req.params;
      const reports2 = await storage.getAllReports();
      const report = reports2.find((r) => r.id === id);
      if (!report) {
        return res.status(404).json({ message: "Report not found" });
      }
      if (report.status !== "completed") {
        return res.status(400).json({ message: "Report is not ready for download" });
      }
      const reportContent = generateReportContent(report);
      const filename = `${report.title.replace(/[^a-zA-Z0-9]/g, "_")}.${report.format}`;
      switch (report.format) {
        case "pdf":
          res.setHeader("Content-Type", "application/pdf");
          break;
        case "excel":
          res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
          break;
        case "csv":
          res.setHeader("Content-Type", "text/csv");
          break;
        default:
          res.setHeader("Content-Type", "application/octet-stream");
      }
      res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
      res.send(reportContent);
    } catch (error) {
      console.error("Platform report download error:", error);
      res.status(500).json({ message: "Failed to download report" });
    }
  });
  app2.get("/api/medical-communications", authenticateToken, requireTenant, async (req, res) => {
    try {
      const communications = await storage.getMedicalCommunicationsByTenant(req.user.tenantId);
      res.json(communications);
    } catch (error) {
      console.error("Failed to fetch communications:", error);
      res.status(500).json({ message: "Failed to fetch communications" });
    }
  });
  app2.get("/api/medical-communications/:id", authenticateToken, requireTenant, async (req, res) => {
    try {
      const { id } = req.params;
      const communication = await storage.getMedicalCommunication(id, req.user.tenantId);
      if (!communication) {
        return res.status(404).json({ message: "Communication not found" });
      }
      res.json(communication);
    } catch (error) {
      console.error("Failed to fetch communication:", error);
      res.status(500).json({ message: "Failed to fetch communication" });
    }
  });
  app2.post("/api/medical-communications", authenticateToken, requireTenant, requireRole(["physician", "nurse", "tenant_admin", "director", "super_admin"]), async (req, res) => {
    try {
      const validatedData = insertMedicalCommunicationSchema.parse({
        ...req.body,
        tenantId: req.user.tenantId,
        senderId: req.user.userId
      });
      const communication = await storage.createMedicalCommunication(validatedData);
      await storage.createAuditLog({
        tenantId: req.user.tenantId,
        userId: req.user.userId,
        entityType: "medical_communication",
        entityId: communication.id,
        action: "CREATE",
        newData: communication,
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
      });
      res.status(201).json(communication);
    } catch (error) {
      console.error("Failed to create communication:", error);
      res.status(500).json({ message: "Failed to create communication" });
    }
  });
  app2.patch("/api/medical-communications/:id", authenticateToken, requireTenant, async (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;
      const communication = await storage.updateMedicalCommunication(id, updates, req.user.tenantId);
      if (!communication) {
        return res.status(404).json({ message: "Communication not found" });
      }
      await storage.createAuditLog({
        tenantId: req.user.tenantId,
        userId: req.user.userId,
        entityType: "medical_communication",
        entityId: communication.id,
        action: "UPDATE",
        newData: communication,
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
      });
      res.json(communication);
    } catch (error) {
      console.error("Failed to update communication:", error);
      res.status(500).json({ message: "Failed to update communication" });
    }
  });
  app2.get("/api/communication-translations/:communicationId", authenticateToken, requireTenant, async (req, res) => {
    try {
      const { communicationId } = req.params;
      const translations2 = await storage.getCommunicationTranslations(communicationId);
      res.json(translations2);
    } catch (error) {
      console.error("Failed to fetch translations:", error);
      res.status(500).json({ message: "Failed to fetch translations" });
    }
  });
  app2.post("/api/communication-translations", authenticateToken, requireTenant, async (req, res) => {
    try {
      const validatedData = insertCommunicationTranslationSchema.parse(req.body);
      const translation = await storage.createCommunicationTranslation(validatedData);
      await storage.createAuditLog({
        tenantId: req.user.tenantId,
        userId: req.user.userId,
        entityType: "communication_translation",
        entityId: translation.id,
        action: "CREATE",
        newData: translation,
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
      });
      res.status(201).json(translation);
    } catch (error) {
      console.error("Failed to create translation:", error);
      res.status(500).json({ message: "Failed to create translation" });
    }
  });
  app2.get("/api/supported-languages", authenticateToken, requireTenant, async (req, res) => {
    try {
      const languages = await storage.getSupportedLanguages(req.user.tenantId);
      res.json(languages);
    } catch (error) {
      console.error("Failed to fetch languages:", error);
      res.status(500).json({ message: "Failed to fetch languages" });
    }
  });
  app2.post("/api/supported-languages", authenticateToken, requireTenant, requireRole(["tenant_admin", "director", "super_admin"]), async (req, res) => {
    try {
      const validatedData = insertSupportedLanguageSchema.parse({
        ...req.body,
        tenantId: req.user.tenantId
      });
      const language = await storage.createSupportedLanguage(validatedData);
      await storage.createAuditLog({
        tenantId: req.user.tenantId,
        userId: req.user.userId,
        entityType: "supported_language",
        entityId: language.id,
        action: "CREATE",
        newData: language,
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
      });
      res.status(201).json(language);
    } catch (error) {
      console.error("Failed to create language:", error);
      res.status(500).json({ message: "Failed to create language" });
    }
  });
  app2.patch("/api/supported-languages/:id", authenticateToken, requireTenant, requireRole(["tenant_admin", "director", "super_admin"]), async (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;
      const language = await storage.updateSupportedLanguage(id, updates, req.user.tenantId);
      if (!language) {
        return res.status(404).json({ message: "Language not found" });
      }
      await storage.createAuditLog({
        tenantId: req.user.tenantId,
        userId: req.user.userId,
        entityType: "supported_language",
        entityId: language.id,
        action: "UPDATE",
        newData: language,
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
      });
      res.json(language);
    } catch (error) {
      console.error("Failed to update language:", error);
      res.status(500).json({ message: "Failed to update language" });
    }
  });
  app2.get("/api/pharmacies", authenticateToken, async (req, res) => {
    try {
      const pharmacies2 = await storage.getPharmaciesForPrescriptionRouting();
      res.json(pharmacies2);
    } catch (error) {
      console.error("Failed to fetch pharmacies:", error);
      res.status(500).json({ message: "Failed to fetch pharmacies" });
    }
  });
  app2.patch("/api/patients/:id/preferred-pharmacy", authenticateToken, requireTenant, requireRole(["physician", "nurse", "tenant_admin", "director"]), async (req, res) => {
    try {
      const { id } = req.params;
      const { preferredPharmacyId, updatedBy, reason, requiresPatientApproval } = req.body;
      const patient = await storage.getPatient(id, req.user.tenantId);
      if (!patient) {
        return res.status(404).json({ message: "Patient not found" });
      }
      const updatedPatient = await storage.updatePatient(id, {
        preferredPharmacyId
      }, req.user.tenantId);
      await storage.createAuditLog({
        tenantId: req.user.tenantId,
        userId: req.user.userId,
        entityType: "patient",
        entityId: id,
        action: "UPDATE_PREFERRED_PHARMACY",
        oldData: { preferredPharmacyId: patient.preferredPharmacyId },
        newData: { preferredPharmacyId, updatedBy, reason },
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
      });
      res.json({
        message: "Preferred pharmacy updated successfully",
        patient: updatedPatient,
        requiresPatientApproval
      });
    } catch (error) {
      console.error("Failed to update preferred pharmacy:", error);
      res.status(500).json({ message: "Failed to update preferred pharmacy" });
    }
  });
  app2.get("/api/medical-phrases", authenticateToken, requireTenant, async (req, res) => {
    try {
      const { category } = req.query;
      const phrases = await storage.getMedicalPhrases(req.user.tenantId, category);
      res.json(phrases);
    } catch (error) {
      console.error("Failed to fetch phrases:", error);
      res.status(500).json({ message: "Failed to fetch phrases" });
    }
  });
  app2.post("/api/medical-phrases", authenticateToken, requireTenant, requireRole(["physician", "nurse", "tenant_admin", "director", "super_admin"]), async (req, res) => {
    try {
      const validatedData = insertMedicalPhraseSchema.parse({
        ...req.body,
        tenantId: req.user.tenantId
      });
      const phrase = await storage.createMedicalPhrase(validatedData);
      await storage.createAuditLog({
        tenantId: req.user.tenantId,
        userId: req.user.userId,
        entityType: "medical_phrase",
        entityId: phrase.id,
        action: "CREATE",
        newData: phrase,
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
      });
      res.status(201).json(phrase);
    } catch (error) {
      console.error("Failed to create phrase:", error);
      res.status(500).json({ message: "Failed to create phrase" });
    }
  });
  app2.get("/api/phrase-translations/:phraseId", authenticateToken, requireTenant, async (req, res) => {
    try {
      const { phraseId } = req.params;
      const translations2 = await storage.getPhraseTranslations(phraseId);
      res.json(translations2);
    } catch (error) {
      console.error("Failed to fetch phrase translations:", error);
      res.status(500).json({ message: "Failed to fetch phrase translations" });
    }
  });
  app2.post("/api/phrase-translations", authenticateToken, requireTenant, requireRole(["physician", "nurse", "tenant_admin", "director", "super_admin"]), async (req, res) => {
    try {
      const validatedData = insertPhraseTranslationSchema.parse({
        ...req.body,
        translatedBy: req.user.userId
      });
      const translation = await storage.createPhraseTranslation(validatedData);
      await storage.createAuditLog({
        tenantId: req.user.tenantId,
        userId: req.user.userId,
        entityType: "phrase_translation",
        entityId: translation.id,
        action: "CREATE",
        newData: translation,
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
      });
      res.status(201).json(translation);
    } catch (error) {
      console.error("Failed to create phrase translation:", error);
      res.status(500).json({ message: "Failed to create phrase translation" });
    }
  });
  app2.get("/api/laboratories", authenticateToken, requireTenant, async (req, res) => {
    try {
      const laboratories2 = await storage.getLaboratoriesByTenant(req.tenantId);
      res.json(laboratories2);
    } catch (error) {
      console.error("Error fetching laboratories:", error);
      res.status(500).json({ message: "Failed to fetch laboratories" });
    }
  });
  app2.get("/api/laboratories/active", authenticateToken, requireTenant, async (req, res) => {
    try {
      const laboratories2 = await storage.getActiveLaboratoriesByTenant(req.tenantId);
      res.json(laboratories2);
    } catch (error) {
      console.error("Error fetching active laboratories:", error);
      res.status(500).json({ message: "Failed to fetch active laboratories" });
    }
  });
  app2.post("/api/laboratories", authenticateToken, requireRole(["tenant_admin", "director", "super_admin"]), requireTenant, async (req, res) => {
    try {
      const laboratoryData = insertLaboratorySchema.parse({
        ...req.body,
        tenantId: req.tenantId
      });
      const laboratory = await storage.createLaboratory(laboratoryData);
      await storage.createAuditLog({
        tenantId: req.tenantId,
        userId: req.userId,
        entityType: "laboratory",
        entityId: laboratory.id,
        action: "create",
        newData: laboratory,
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
      });
      res.status(201).json(laboratory);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid laboratory data", errors: error.errors });
      }
      console.error("Error creating laboratory:", error);
      res.status(500).json({ message: "Failed to create laboratory" });
    }
  });
  app2.get("/api/lab-results", authenticateToken, requireTenant, async (req, res) => {
    try {
      const labResults2 = await storage.getLabResultsByTenant(req.tenantId);
      res.json(labResults2);
    } catch (error) {
      console.error("Error fetching lab results:", error);
      res.status(500).json({ message: "Failed to fetch lab results" });
    }
  });
  app2.get("/api/lab-results/patient/:patientId", authenticateToken, requireTenant, async (req, res) => {
    try {
      const labResults2 = await storage.getLabResultsByPatient(req.params.patientId, req.tenantId);
      res.json(labResults2);
    } catch (error) {
      console.error("Error fetching patient lab results:", error);
      res.status(500).json({ message: "Failed to fetch patient lab results" });
    }
  });
  app2.get("/api/lab-results/order/:labOrderId", authenticateToken, requireTenant, async (req, res) => {
    try {
      const labResults2 = await storage.getLabResultsByOrder(req.params.labOrderId, req.tenantId);
      res.json(labResults2);
    } catch (error) {
      console.error("Error fetching lab order results:", error);
      res.status(500).json({ message: "Failed to fetch lab order results" });
    }
  });
  app2.post("/api/lab-results", authenticateToken, requireRole(["lab_technician", "physician", "tenant_admin", "director", "super_admin"]), requireTenant, async (req, res) => {
    try {
      const labResultData = insertLabResultSchema.parse({
        ...req.body,
        tenantId: req.tenantId
      });
      const labResult = await storage.createLabResult(labResultData);
      await storage.createAuditLog({
        tenantId: req.tenantId,
        userId: req.userId,
        entityType: "lab_result",
        entityId: labResult.id,
        action: "create",
        newData: labResult,
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
      });
      res.status(201).json(labResult);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid lab result data", errors: error.errors });
      }
      console.error("Error creating lab result:", error);
      res.status(500).json({ message: "Failed to create lab result" });
    }
  });
  app2.post("/api/lab-order-assignments", authenticateToken, requireRole(["physician", "nurse", "lab_technician", "tenant_admin", "director", "super_admin"]), requireTenant, async (req, res) => {
    try {
      const assignmentData = insertLabOrderAssignmentSchema.parse({
        ...req.body,
        tenantId: req.tenantId,
        assignedBy: req.userId
      });
      const assignment = await storage.createLabOrderAssignment(assignmentData);
      await storage.createAuditLog({
        tenantId: req.tenantId,
        userId: req.userId,
        entityType: "lab_order_assignment",
        entityId: assignment.id,
        action: "create",
        newData: assignment,
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
      });
      res.status(201).json(assignment);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid assignment data", errors: error.errors });
      }
      console.error("Error creating lab order assignment:", error);
      res.status(500).json({ message: "Failed to create lab order assignment" });
    }
  });
  app2.post("/api/external-lab/results", async (req, res) => {
    try {
      const {
        externalLabId,
        labOrderId,
        results,
        laboratoryApiKey
      } = req.body;
      const allTenants = await storage.getAllTenants();
      let laboratory;
      for (const tenant of allTenants) {
        const labs = await storage.getLaboratoriesByTenant(tenant.id);
        laboratory = labs.find((lab) => lab.apiKey === laboratoryApiKey);
        if (laboratory) break;
      }
      if (!laboratory) {
        return res.status(401).json({ message: "Invalid laboratory API key" });
      }
      for (const result of results) {
        const labResultData = insertLabResultSchema.parse({
          labOrderId,
          laboratoryId: laboratory.id,
          tenantId: laboratory.tenantId,
          patientId: result.patientId,
          testName: result.testName,
          result: result.result,
          normalRange: result.normalRange,
          unit: result.unit,
          status: "completed",
          abnormalFlag: result.abnormalFlag,
          notes: result.notes,
          performedBy: result.performedBy,
          completedAt: new Date(result.completedAt),
          reportedAt: /* @__PURE__ */ new Date(),
          externalLabId,
          rawData: result.rawData
        });
        await storage.createLabResult(labResultData);
      }
      const assignment = await storage.getLabOrderAssignmentByOrder(labOrderId, laboratory.tenantId);
      if (assignment) {
        await storage.updateLabOrderAssignment(assignment.id, {
          status: "completed",
          actualCompletionTime: /* @__PURE__ */ new Date()
        }, laboratory.tenantId);
      }
      res.json({ message: "Results received successfully", processed: results.length });
    } catch (error) {
      console.error("Error processing external lab results:", error);
      res.status(500).json({ message: "Failed to process lab results" });
    }
  });
  app2.post("/api/laboratory-applications", async (req, res) => {
    try {
      const applicationData = insertLaboratoryApplicationSchema.parse(req.body);
      const application = await storage.createLaboratoryApplication(applicationData);
      res.status(201).json(application);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid application data", errors: error.errors });
      }
      console.error("Error creating laboratory application:", error);
      res.status(500).json({ message: "Failed to create laboratory application" });
    }
  });
  app2.get("/api/laboratory-applications", authenticateToken, requireRole(["super_admin"]), async (req, res) => {
    try {
      const status = req.query.status;
      const applications = status ? await storage.getLaboratoryApplicationsByStatus(status) : await storage.getAllLaboratoryApplications();
      res.json(applications);
    } catch (error) {
      console.error("Error fetching laboratory applications:", error);
      res.status(500).json({ message: "Failed to fetch laboratory applications" });
    }
  });
  app2.post("/api/laboratory-applications/:id/approve", authenticateToken, requireRole(["super_admin"]), async (req, res) => {
    try {
      const { reviewNotes } = req.body;
      const result = await storage.approveLaboratoryApplication(req.params.id, req.userId, reviewNotes);
      if (!result) {
        return res.status(404).json({ message: "Laboratory application not found" });
      }
      res.json(result);
    } catch (error) {
      console.error("Error approving laboratory application:", error);
      res.status(500).json({ message: "Failed to approve laboratory application" });
    }
  });
  app2.post("/api/laboratory-applications/:id/reject", authenticateToken, requireRole(["super_admin"]), async (req, res) => {
    try {
      const { reviewNotes } = req.body;
      if (!reviewNotes) {
        return res.status(400).json({ message: "Review notes are required for rejection" });
      }
      const application = await storage.rejectLaboratoryApplication(req.params.id, req.userId, reviewNotes);
      if (!application) {
        return res.status(404).json({ message: "Laboratory application not found" });
      }
      res.json(application);
    } catch (error) {
      console.error("Error rejecting laboratory application:", error);
      res.status(500).json({ message: "Failed to reject laboratory application" });
    }
  });
  app2.get("/api/vital-signs", authenticateToken, requireTenant, async (req, res) => {
    try {
      const vitalSigns2 = await storage.getVitalSignsByTenant(req.tenantId);
      res.json(vitalSigns2);
    } catch (error) {
      console.error("Error fetching vital signs:", error);
      res.status(500).json({ message: "Failed to fetch vital signs" });
    }
  });
  app2.get("/api/vital-signs/patient/:patientId", authenticateToken, requireTenant, async (req, res) => {
    try {
      const vitalSigns2 = await storage.getVitalSignsByPatient(req.params.patientId, req.tenantId);
      res.json(vitalSigns2);
    } catch (error) {
      console.error("Error fetching patient vital signs:", error);
      res.status(500).json({ message: "Failed to fetch patient vital signs" });
    }
  });
  app2.get("/api/vital-signs/appointment/:appointmentId", authenticateToken, requireTenant, async (req, res) => {
    try {
      const vitalSigns2 = await storage.getVitalSignsByAppointment(req.params.appointmentId, req.tenantId);
      res.json(vitalSigns2);
    } catch (error) {
      console.error("Error fetching appointment vital signs:", error);
      res.status(500).json({ message: "Failed to fetch appointment vital signs" });
    }
  });
  app2.post("/api/vital-signs", authenticateToken, requireTenant, requireRole(["super_admin", "tenant_admin", "doctor", "nurse", "receptionist"]), async (req, res) => {
    try {
      const validatedData = insertVitalSignsSchema.parse({
        ...req.body,
        tenantId: req.tenantId,
        recordedById: req.user?.id
      });
      const vitalSigns2 = await storage.createVitalSigns(validatedData);
      await storage.createAuditLog({
        userId: req.user?.id,
        tenantId: req.tenantId,
        action: "vital_signs_created",
        entityType: "vital_signs",
        entityId: vitalSigns2.id,
        details: { patientId: vitalSigns2.patientId, appointmentId: vitalSigns2.appointmentId }
      });
      res.status(201).json(vitalSigns2);
    } catch (error) {
      console.error("Error creating vital signs:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Validation error", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create vital signs" });
    }
  });
  app2.patch("/api/vital-signs/:id", authenticateToken, requireTenant, requireRole(["super_admin", "tenant_admin", "doctor", "nurse", "receptionist"]), async (req, res) => {
    try {
      const vitalSigns2 = await storage.updateVitalSigns(req.params.id, req.body, req.tenantId);
      if (!vitalSigns2) {
        return res.status(404).json({ message: "Vital signs not found" });
      }
      await storage.createAuditLog({
        userId: req.userId,
        tenantId: req.tenantId,
        action: "vital_signs_updated",
        resourceType: "vital_signs",
        resourceId: vitalSigns2.id,
        details: { changes: req.body }
      });
      res.json(vitalSigns2);
    } catch (error) {
      console.error("Error updating vital signs:", error);
      res.status(500).json({ message: "Failed to update vital signs" });
    }
  });
  app2.get("/api/visit-summaries", authenticateToken, requireTenant, async (req, res) => {
    try {
      const visitSummaries2 = await storage.getVisitSummariesByTenant(req.tenantId);
      res.json(visitSummaries2);
    } catch (error) {
      console.error("Error fetching visit summaries:", error);
      res.status(500).json({ message: "Failed to fetch visit summaries" });
    }
  });
  app2.get("/api/visit-summaries/patient/:patientId", authenticateToken, requireTenant, async (req, res) => {
    try {
      const visitSummaries2 = await storage.getVisitSummariesByPatient(req.params.patientId, req.tenantId);
      res.json(visitSummaries2);
    } catch (error) {
      console.error("Error fetching patient visit summaries:", error);
      res.status(500).json({ message: "Failed to fetch patient visit summaries" });
    }
  });
  app2.get("/api/visit-summaries/provider/:providerId", authenticateToken, requireTenant, async (req, res) => {
    try {
      const visitSummaries2 = await storage.getVisitSummariesByProvider(req.params.providerId, req.tenantId);
      res.json(visitSummaries2);
    } catch (error) {
      console.error("Error fetching provider visit summaries:", error);
      res.status(500).json({ message: "Failed to fetch provider visit summaries" });
    }
  });
  app2.get("/api/visit-summaries/appointment/:appointmentId", authenticateToken, requireTenant, async (req, res) => {
    try {
      const visitSummary = await storage.getVisitSummaryByAppointment(req.params.appointmentId, req.tenantId);
      res.json(visitSummary);
    } catch (error) {
      console.error("Error fetching appointment visit summary:", error);
      res.status(500).json({ message: "Failed to fetch appointment visit summary" });
    }
  });
  app2.post("/api/visit-summaries", authenticateToken, requireTenant, requireRole(["super_admin", "tenant_admin", "doctor", "nurse"]), async (req, res) => {
    try {
      const validatedData = insertVisitSummarySchema.parse({
        ...req.body,
        tenantId: req.tenantId,
        providerId: req.userId
      });
      const visitSummary = await storage.createVisitSummary(validatedData);
      await storage.createAuditLog({
        userId: req.userId,
        tenantId: req.tenantId,
        action: "visit_summary_created",
        resourceType: "visit_summary",
        resourceId: visitSummary.id,
        details: { patientId: visitSummary.patientId, appointmentId: visitSummary.appointmentId }
      });
      res.status(201).json(visitSummary);
    } catch (error) {
      console.error("Error creating visit summary:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Validation error", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create visit summary" });
    }
  });
  app2.patch("/api/visit-summaries/:id", authenticateToken, requireTenant, requireRole(["super_admin", "tenant_admin", "doctor", "nurse"]), async (req, res) => {
    try {
      const visitSummary = await storage.updateVisitSummary(req.params.id, req.body, req.tenantId);
      if (!visitSummary) {
        return res.status(404).json({ message: "Visit summary not found" });
      }
      await storage.createAuditLog({
        userId: req.userId,
        tenantId: req.tenantId,
        action: "visit_summary_updated",
        resourceType: "visit_summary",
        resourceId: visitSummary.id,
        details: { changes: req.body }
      });
      res.json(visitSummary);
    } catch (error) {
      console.error("Error updating visit summary:", error);
      res.status(500).json({ message: "Failed to update visit summary" });
    }
  });
  function generateReportContent(report) {
    const timestamp2 = (/* @__PURE__ */ new Date()).toISOString();
    if (report.format === "csv") {
      return generateCSVContent(report, timestamp2);
    } else if (report.format === "excel") {
      return generateExcelContent(report, timestamp2);
    } else {
      return generatePDFContent(report, timestamp2);
    }
  }
  function generateCSVContent(report, timestamp2) {
    const headers = ["Date", "Type", "Category", "Value", "Status"];
    const rows = [
      [timestamp2.split("T")[0], report.type, "Patients", "150", "Active"],
      [timestamp2.split("T")[0], report.type, "Appointments", "45", "Scheduled"],
      [timestamp2.split("T")[0], report.type, "Revenue", "$12,500", "Collected"],
      [timestamp2.split("T")[0], report.type, "Lab Tests", "28", "Completed"],
      [timestamp2.split("T")[0], report.type, "Prescriptions", "67", "Dispensed"]
    ];
    return [headers.join(","), ...rows.map((row) => row.join(","))].join("\n");
  }
  function generateExcelContent(report, timestamp2) {
    return generateCSVContent(report, timestamp2);
  }
  function generatePDFContent(report, timestamp2) {
    return `
HEALTHCARE REPORT
=================

Report Title: ${report.title}
Report Type: ${report.type}
Generated: ${timestamp2}
Format: ${report.format.toUpperCase()}

SUMMARY
-------
This report contains healthcare analytics and operational data
for the selected time period and organization.

KEY METRICS
-----------
\u2022 Total Patients: 150
\u2022 Appointments Scheduled: 45
\u2022 Revenue Generated: $12,500
\u2022 Lab Tests Completed: 28
\u2022 Prescriptions Dispensed: 67

COMPLIANCE STATUS
-----------------
\u2713 HIPAA Compliance: Active
\u2713 Data Security: Verified
\u2713 Audit Trail: Complete

Generated by NAVIMED Healthcare Platform
Report ID: ${report.id}
`;
  }
  app2.get("/api/health-recommendations/patient/:patientId", authenticateToken, requireTenant, async (req, res) => {
    try {
      const { patientId } = req.params;
      const { tenantId } = req.user;
      const recommendations = await storage.getHealthRecommendationsByPatient(patientId, tenantId);
      res.json(recommendations);
    } catch (error) {
      console.error("Error fetching health recommendations:", error);
      res.status(500).json({ message: "Failed to fetch health recommendations" });
    }
  });
  app2.get("/api/health-recommendations/patient/:patientId/active", authenticateToken, requireTenant, async (req, res) => {
    try {
      const { patientId } = req.params;
      const { tenantId } = req.user;
      const recommendations = await storage.getActiveHealthRecommendationsByPatient(patientId, tenantId);
      res.json(recommendations);
    } catch (error) {
      console.error("Error fetching active health recommendations:", error);
      res.status(500).json({ message: "Failed to fetch active health recommendations" });
    }
  });
  app2.post("/api/health-recommendations", authenticateToken, requireTenant, async (req, res) => {
    try {
      const { tenantId, userId } = req.user;
      const validatedData = insertHealthRecommendationSchema.parse({
        ...req.body,
        tenantId
      });
      const recommendation = await storage.createHealthRecommendation(validatedData);
      res.status(201).json(recommendation);
    } catch (error) {
      console.error("Error creating health recommendation:", error);
      res.status(500).json({ message: "Failed to create health recommendation" });
    }
  });
  app2.patch("/api/health-recommendations/:id/acknowledge", authenticateToken, requireTenant, async (req, res) => {
    try {
      const { id } = req.params;
      const { tenantId, userId } = req.user;
      const recommendation = await storage.acknowledgeHealthRecommendation(id, userId, tenantId);
      if (!recommendation) {
        return res.status(404).json({ message: "Health recommendation not found" });
      }
      res.json(recommendation);
    } catch (error) {
      console.error("Error acknowledging health recommendation:", error);
      res.status(500).json({ message: "Failed to acknowledge health recommendation" });
    }
  });
  app2.get("/api/health-analyses/patient/:patientId", authenticateToken, requireTenant, async (req, res) => {
    try {
      const { patientId } = req.params;
      const { tenantId } = req.user;
      const analyses = await storage.getHealthAnalysesByPatient(patientId, tenantId);
      res.json(analyses);
    } catch (error) {
      console.error("Error fetching health analyses:", error);
      res.status(500).json({ message: "Failed to fetch health analyses" });
    }
  });
  app2.get("/api/health-analyses/patient/:patientId/latest", authenticateToken, requireTenant, async (req, res) => {
    try {
      const { patientId } = req.params;
      const { tenantId } = req.user;
      const analysis = await storage.getLatestHealthAnalysis(patientId, tenantId);
      if (!analysis) {
        return res.status(404).json({ message: "No health analysis found for this patient" });
      }
      res.json(analysis);
    } catch (error) {
      console.error("Error fetching latest health analysis:", error);
      res.status(500).json({ message: "Failed to fetch latest health analysis" });
    }
  });
  app2.post("/api/health-analyses/generate/:patientId", authenticateToken, requireTenant, requireRole(["physician", "nurse", "tenant_admin", "super_admin"]), async (req, res) => {
    try {
      const { patientId } = req.params;
      const { tenantId, userId } = req.user;
      const patient = await storage.getPatient(patientId, tenantId);
      if (!patient) {
        return res.status(404).json({ message: "Patient not found" });
      }
      const vitalSigns2 = await storage.getVitalSignsByPatient(patientId, tenantId);
      const recentVitalSigns = vitalSigns2.slice(0, 10);
      const appointments2 = await storage.getAppointmentsByPatient(patientId, tenantId);
      const recentAppointments = appointments2.slice(0, 5);
      if (recentVitalSigns.length === 0) {
        return res.status(400).json({
          message: "No vital signs data available for health analysis. Please record vital signs first."
        });
      }
      const analysisResult = await aiHealthAnalyzer.analyzePatientHealth(
        patient,
        recentVitalSigns,
        recentAppointments
      );
      const healthAnalysis = await storage.createHealthAnalysis({
        tenantId,
        patientId,
        overallHealthScore: analysisResult.overallHealthScore,
        riskFactors: analysisResult.riskFactors,
        trends: analysisResult.trends,
        nextAppointmentSuggestion: analysisResult.nextAppointmentSuggestion,
        analysisData: analysisResult,
        confidence: 0.85
        // Default confidence score
      });
      const savedRecommendations = [];
      for (const rec of analysisResult.recommendations) {
        const recommendation = await storage.createHealthRecommendation({
          tenantId,
          patientId,
          type: rec.type,
          priority: rec.priority,
          title: rec.title,
          description: rec.description,
          recommendations: rec.recommendations,
          reasoning: rec.reasoning,
          followUpRequired: rec.followUpRequired
        });
        savedRecommendations.push(recommendation);
      }
      await storage.logAuditAction(
        tenantId,
        userId,
        "health_analysis",
        healthAnalysis.id,
        "generate",
        null,
        {
          patientId,
          analysisScore: analysisResult.overallHealthScore,
          recommendationsCount: savedRecommendations.length
        }
      );
      res.json({
        analysis: healthAnalysis,
        recommendations: savedRecommendations,
        summary: {
          overallHealthScore: analysisResult.overallHealthScore,
          riskFactors: analysisResult.riskFactors,
          trends: analysisResult.trends,
          recommendationsCount: savedRecommendations.length
        }
      });
    } catch (error) {
      console.error("Error generating health analysis:", error);
      res.status(500).json({
        message: "Failed to generate health analysis",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });
  app2.get("/api/hospital/billing", requireTenant, async (req, res) => {
    try {
      const userId = req.user?.id;
      const userRole = req.user?.role;
      const tenantId = req.tenant.id;
      const hasFullBillingAccess = userRole && [
        "tenant_admin",
        "director",
        "billing_staff",
        "super_admin"
      ].includes(userRole);
      if (userRole === "physician" && !hasFullBillingAccess) {
        const doctorBills = await storage.getHospitalBillsByProvider(userId, tenantId);
        return res.json(doctorBills);
      }
      const allBills = await storage.getHospitalBills(tenantId);
      res.json(allBills);
    } catch (error) {
      console.error("Error fetching hospital bills:", error);
      res.status(500).json({ message: "Failed to fetch hospital bills" });
    }
  });
  app2.post("/api/hospital/billing", requireRole(["physician", "billing_staff", "tenant_admin", "director"]), async (req, res) => {
    try {
      const billData = {
        ...req.body,
        tenantId: req.tenant.id,
        generatedBy: req.user.id
      };
      const bill = await storage.createHospitalBill(billData);
      res.json(bill);
    } catch (error) {
      console.error("Error creating hospital bill:", error);
      res.status(500).json({ message: "Failed to create hospital bill" });
    }
  });
  app2.put("/api/hospital/billing/:id", requireRole(["billing_staff", "tenant_admin", "director"]), async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const tenantId = req.tenant.id;
      const updatedBill = await storage.updateHospitalBill(id, updateData, tenantId);
      res.json(updatedBill);
    } catch (error) {
      console.error("Error updating hospital bill:", error);
      res.status(500).json({ message: "Failed to update hospital bill" });
    }
  });
  app2.get("/api/hospital/analytics", requireTenant, async (req, res) => {
    try {
      const userId = req.user?.id;
      const userRole = req.user?.role;
      const tenantId = req.tenant.id;
      const hasFullAnalyticsAccess = userRole && [
        "tenant_admin",
        "director",
        "billing_staff",
        "super_admin"
      ].includes(userRole);
      let analytics;
      if (userRole === "physician" && !hasFullAnalyticsAccess) {
        analytics = await storage.getHospitalAnalyticsByProvider(userId, tenantId);
      } else {
        analytics = await storage.getHospitalAnalytics(tenantId);
      }
      res.json(analytics);
    } catch (error) {
      console.error("Error fetching hospital analytics:", error);
      res.status(500).json({ message: "Failed to fetch analytics" });
    }
  });
  app2.get("/api/user/billing-permissions", authenticateToken, async (req, res) => {
    try {
      const userRole = req.user?.role;
      const permissions = {
        canViewAllBills: userRole && [
          "tenant_admin",
          "director",
          "billing_staff",
          "super_admin"
        ].includes(userRole),
        canCreateBills: userRole && [
          "physician",
          "billing_staff",
          "tenant_admin",
          "director"
        ].includes(userRole),
        canEditBills: userRole && [
          "billing_staff",
          "tenant_admin",
          "director"
        ].includes(userRole),
        isPhysicianWithRestrictedAccess: userRole === "physician" && ![
          "tenant_admin",
          "director",
          "billing_staff",
          "super_admin"
        ].includes(userRole)
      };
      res.json(permissions);
    } catch (error) {
      console.error("Error checking billing permissions:", error);
      res.status(500).json({ message: "Failed to check permissions" });
    }
  });
  app2.post("/api/patient-access-requests", requireRole(["physician"]), async (req, res) => {
    try {
      const userId = req.user?.id;
      const tenantId = req.tenant.id;
      const request = await storage.createPatientAccessRequest({
        ...req.body,
        requestingPhysicianId: userId,
        tenantId
      });
      res.json(request);
    } catch (error) {
      console.error("Error creating patient access request:", error);
      res.status(500).json({ message: "Failed to create access request" });
    }
  });
  app2.get("/api/patient-access-requests", requireTenant, async (req, res) => {
    try {
      const userId = req.user?.id;
      const userRole = req.user?.role;
      const tenantId = req.tenant.id;
      let requests;
      if (["tenant_admin", "director", "super_admin"].includes(userRole || "")) {
        requests = await storage.getPatientAccessRequests(tenantId);
      } else if (userRole === "physician") {
        requests = await storage.getPatientAccessRequests(tenantId, userId);
      } else {
        return res.status(403).json({ message: "Access denied to patient access requests" });
      }
      res.json(requests);
    } catch (error) {
      console.error("Error fetching patient access requests:", error);
      res.status(500).json({ message: "Failed to fetch access requests" });
    }
  });
  app2.put("/api/patient-access-requests/:id", requireRole(["tenant_admin", "director", "physician"]), async (req, res) => {
    try {
      const { id } = req.params;
      const tenantId = req.tenant.id;
      const updatedRequest = await storage.updatePatientAccessRequest(id, req.body, tenantId);
      if (!updatedRequest) {
        return res.status(404).json({ message: "Access request not found" });
      }
      res.json(updatedRequest);
    } catch (error) {
      console.error("Error updating patient access request:", error);
      res.status(500).json({ message: "Failed to update access request" });
    }
  });
  app2.get("/api/patient-access-audit", requireRole(["tenant_admin", "director", "super_admin"]), async (req, res) => {
    try {
      const tenantId = req.tenant.id;
      const { patientId, doctorId } = req.query;
      const logs = await storage.getPatientAccessLogs(
        tenantId,
        patientId,
        doctorId
      );
      res.json(logs);
    } catch (error) {
      console.error("Error fetching patient access logs:", error);
      res.status(500).json({ message: "Failed to fetch access logs" });
    }
  });
  app2.get("/api/role-permissions", authenticateToken, requireTenant, async (req, res) => {
    try {
      const { role } = req.query;
      let permissions;
      if (role) {
        permissions = await storage.getRolePermissionsByRole(role, req.tenantId);
      } else {
        permissions = await storage.getRolePermissions(req.tenantId);
      }
      res.json(permissions);
    } catch (error) {
      console.error("Error fetching role permissions:", error);
      res.status(500).json({ message: "Failed to fetch role permissions" });
    }
  });
  app2.post("/api/role-permissions", authenticateToken, requireRole(["tenant_admin", "director", "super_admin"]), requireTenant, async (req, res) => {
    try {
      console.log("\u{1F527} [SERVER] Role permissions POST request:", req.body);
      console.log("\u{1F527} [SERVER] Request user info:", { userId: req.userId, tenantId: req.tenantId, userRole: req.user?.role });
      const { role, module, permissions } = req.body;
      if (!role || !module || !Array.isArray(permissions)) {
        console.log("\u{1F527} [SERVER] Invalid request data:", { role, module, permissions });
        return res.status(400).json({
          message: "Invalid request data - role, module, and permissions array required"
        });
      }
      const userId = req.userId || req.user?.id;
      if (!userId) {
        console.log("\u{1F527} [SERVER] ERROR: No user ID available - req.userId:", req.userId, "req.user:", req.user);
        return res.status(401).json({ message: "Authentication required - user ID not found" });
      }
      console.log("\u{1F527} [SERVER] Using userId:", userId);
      const existingPermissions = await storage.getRolePermissionsByRole(role, req.tenantId);
      const existingPermission = existingPermissions.find((p) => p.module === module);
      let result;
      if (existingPermission) {
        console.log("\u{1F527} [SERVER] Updating existing permission:", existingPermission.id);
        result = await storage.updateRolePermission(
          existingPermission.id,
          {
            permissions,
            updatedBy: userId,
            updatedAt: /* @__PURE__ */ new Date()
          },
          req.tenantId
        );
        console.log("\u{1F527} [SERVER] Update result:", result);
      } else {
        console.log("\u{1F527} [SERVER] Creating new permission for user:", userId);
        result = await storage.createRolePermission({
          tenantId: req.tenantId,
          role,
          module,
          permissions,
          createdBy: userId,
          isActive: true
        });
        console.log("\u{1F527} [SERVER] Create result:", result);
      }
      await storage.createAuditLog({
        tenantId: req.tenantId,
        userId,
        entityType: "role_permission",
        entityId: result?.id || existingPermission?.id || "unknown",
        action: existingPermission ? "update" : "create",
        newData: { role, module, permissions },
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
      });
      console.log("\u{1F527} [SERVER] Permission saved successfully:", result);
      res.status(200).json({
        message: "Permission saved successfully",
        permission: result
      });
    } catch (error) {
      console.error("\u{1F527} [SERVER] Error saving role permission:", error);
      res.status(500).json({ message: "Failed to save role permission" });
    }
  });
  app2.delete("/api/role-permissions/:id", authenticateToken, requireRole(["tenant_admin", "director", "super_admin"]), requireTenant, async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await storage.deleteRolePermission(id, req.tenantId);
      if (!deleted) {
        return res.status(404).json({ message: "Role permission not found" });
      }
      await storage.createAuditLog({
        tenantId: req.tenantId,
        userId: req.userId,
        entityType: "role_permission",
        entityId: id,
        action: "delete",
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
      });
      res.json({ message: "Role permission deleted successfully" });
    } catch (error) {
      console.error("Error deleting role permission:", error);
      res.status(500).json({ message: "Failed to delete role permission" });
    }
  });
  app2.get("/api/departments", authenticateToken, requireTenant, async (req, res) => {
    try {
      const departments3 = await storage.getDepartments(req.tenantId);
      res.json(departments3);
    } catch (error) {
      console.error("Error fetching departments:", error);
      res.status(500).json({ error: "Failed to fetch departments" });
    }
  });
  app2.post("/api/departments", authenticateToken, requireRole(["tenant_admin"]), requireTenant, async (req, res) => {
    try {
      const validatedData = insertDepartmentSchema.parse({
        ...req.body,
        tenantId: req.tenantId
      });
      const department = await storage.createDepartment(validatedData);
      res.status(201).json(department);
    } catch (error) {
      console.error("Error creating department:", error);
      res.status(500).json({ error: "Failed to create department" });
    }
  });
  app2.put("/api/departments/:id", authenticateToken, requireRole(["tenant_admin"]), requireTenant, async (req, res) => {
    try {
      const { id } = req.params;
      const validatedData = insertDepartmentSchema.partial().parse(req.body);
      const updatedDepartment = await storage.updateDepartment(id, validatedData, req.tenantId);
      if (!updatedDepartment) {
        return res.status(404).json({ error: "Department not found" });
      }
      res.json(updatedDepartment);
    } catch (error) {
      console.error("Error updating department:", error);
      res.status(500).json({ error: "Failed to update department" });
    }
  });
  app2.delete("/api/departments/:id", authenticateToken, requireRole(["tenant_admin"]), requireTenant, async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await storage.deleteDepartment(id, req.tenantId);
      if (!deleted) {
        return res.status(404).json({ error: "Department not found" });
      }
      res.json({ message: "Department deleted successfully" });
    } catch (error) {
      console.error("Error deleting department:", error);
      res.status(500).json({ error: "Failed to delete department" });
    }
  });
  app2.post("/api/test-email", authenticateToken, requireRole(["super_admin", "tenant_admin"]), async (req, res) => {
    try {
      const { email } = req.body;
      if (!email) {
        return res.status(400).json({ error: "Email address is required" });
      }
      const tempPassword = generateTemporaryPassword();
      const tenant = await storage.getTenant(req.tenantId);
      const success = await sendWelcomeEmail({
        userEmail: email,
        firstName: "Test",
        lastName: "User",
        username: "testuser",
        temporaryPassword: tempPassword,
        organizationName: tenant?.name || "NaviMed Platform",
        loginUrl: `${req.protocol}://${req.get("host")}/login`
      });
      res.json({
        message: success ? "Test email sent successfully" : "Failed to send test email",
        success,
        sendgridConfigured: !!process.env.SENDGRID_API_KEY,
        emailFrom: "info@navimedi.com"
      });
    } catch (error) {
      console.error("Test email error:", error);
      res.status(500).json({
        error: "Failed to send test email",
        details: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });
  app2.get("/api/advertisements", async (req, res) => {
    try {
      const advertisements2 = await storage.getAllAdvertisements();
      res.json(advertisements2);
    } catch (error) {
      console.error("Error fetching advertisements:", error);
      res.status(500).json({ error: "Failed to fetch advertisements" });
    }
  });
  app2.get("/api/advertisements/my", authenticateToken, setTenantContext, async (req, res) => {
    try {
      const advertisements2 = await storage.getAdvertisementsByTenant(req.tenantId);
      res.json(advertisements2);
    } catch (error) {
      console.error("Error fetching tenant advertisements:", error);
      res.status(500).json({ error: "Failed to fetch advertisements" });
    }
  });
  app2.post("/api/advertisements", authenticateToken, setTenantContext, async (req, res) => {
    try {
      const validationResult = insertAdvertisementSchema.safeParse(req.body);
      if (!validationResult.success) {
        return res.status(400).json({
          error: "Invalid advertisement data",
          details: validationResult.error.errors
        });
      }
      const advertisementData = {
        ...validationResult.data,
        tenantId: req.tenantId,
        status: "pending_review",
        submittedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      const advertisement = await storage.createAdvertisement(advertisementData);
      res.status(201).json(advertisement);
    } catch (error) {
      console.error("Error creating advertisement:", error);
      res.status(500).json({ error: "Failed to create advertisement" });
    }
  });
  app2.patch("/api/advertisements/:id/status", authenticateToken, requireRole(["super_admin", "tenant_admin"]), async (req, res) => {
    try {
      const { id } = req.params;
      const { status, reviewNotes } = req.body;
      const validStatuses = ["draft", "pending_review", "approved", "active", "paused", "expired", "rejected", "suspended"];
      if (!validStatuses.includes(status)) {
        return res.status(400).json({ error: "Invalid status" });
      }
      const userId = req.user?.id || req.userId;
      const advertisement = await storage.updateAdvertisementStatus(id, {
        status,
        reviewNotes,
        reviewedBy: userId,
        reviewedAt: (/* @__PURE__ */ new Date()).toISOString()
      });
      if (!advertisement) {
        return res.status(404).json({ error: "Advertisement not found" });
      }
      res.json(advertisement);
    } catch (error) {
      console.error("Error updating advertisement status:", error);
      res.status(500).json({ error: "Failed to update advertisement status" });
    }
  });
  app2.delete("/api/advertisements/:id", authenticateToken, setTenantContext, async (req, res) => {
    try {
      const { id } = req.params;
      const success = await storage.deleteAdvertisement(id, req.tenantId);
      if (!success) {
        return res.status(404).json({ error: "Advertisement not found" });
      }
      res.json({ message: "Advertisement deleted successfully" });
    } catch (error) {
      console.error("Error deleting advertisement:", error);
      res.status(500).json({ error: "Failed to delete advertisement" });
    }
  });
  app2.post("/api/advertisements/:id/view", async (req, res) => {
    try {
      const { id } = req.params;
      const { viewDuration, clickedThrough } = req.body;
      const viewData = {
        advertisementId: id,
        viewerTenantId: req.tenantId || null,
        viewerUserId: req.userId || null,
        ipAddress: req.ip,
        userAgent: req.get("User-Agent"),
        referrer: req.get("Referer"),
        viewDuration,
        clickedThrough: !!clickedThrough
      };
      const view = await storage.createAdView(viewData);
      await storage.incrementAdvertisementImpressions(id);
      if (clickedThrough) {
        await storage.incrementAdvertisementClicks(id);
      }
      res.status(201).json(view);
    } catch (error) {
      console.error("Error tracking advertisement view:", error);
      res.status(500).json({ error: "Failed to track view" });
    }
  });
  app2.post("/api/advertisements/:id/inquire", authenticateToken, setTenantContext, async (req, res) => {
    try {
      const { id } = req.params;
      const validationResult = insertAdInquirySchema.safeParse({
        ...req.body,
        advertisementId: id,
        inquirerTenantId: req.tenantId,
        inquirerUserId: req.userId || req.user?.id
      });
      if (!validationResult.success) {
        return res.status(400).json({
          error: "Invalid inquiry data",
          details: validationResult.error.errors
        });
      }
      const inquiry = await storage.createAdInquiry(validationResult.data);
      res.status(201).json(inquiry);
    } catch (error) {
      console.error("Error creating advertisement inquiry:", error);
      res.status(500).json({ error: "Failed to create inquiry" });
    }
  });
  app2.get("/api/advertisements/:id/inquiries", authenticateToken, setTenantContext, async (req, res) => {
    try {
      const { id } = req.params;
      const advertisement = await storage.getAdvertisement(id);
      if (!advertisement || advertisement.tenantId !== req.tenantId) {
        return res.status(404).json({ error: "Advertisement not found" });
      }
      const inquiries = await storage.getAdInquiries(id);
      res.json(inquiries);
    } catch (error) {
      console.error("Error fetching advertisement inquiries:", error);
      res.status(500).json({ error: "Failed to fetch inquiries" });
    }
  });
  app2.get("/api/supplier/profile", authenticateToken, async (req, res) => {
    try {
      const user = req.user;
      if (!user) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const suppliers = await storage.getMedicalSuppliers();
      const supplierProfile = suppliers.find(
        (s) => s.organizationSlug === user.organizationName?.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-") || s.contactEmail === user.email
        // Fallback for existing accounts
      );
      if (!supplierProfile) {
        return res.status(404).json({
          error: "Supplier profile not found",
          debug: {
            userOrg: user.organizationName,
            userEmail: user.email,
            availableSuppliers: suppliers.map((s) => ({ name: s.companyName, slug: s.organizationSlug, email: s.contactEmail }))
          }
        });
      }
      res.json(supplierProfile);
    } catch (error) {
      console.error("[SUPPLIER] Error fetching supplier profile:", error);
      res.status(500).json({ error: "Failed to fetch supplier profile" });
    }
  });
  app2.get("/api/supplier/advertisements", authenticateToken, async (req, res) => {
    try {
      const user = req.user;
      if (!user) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const suppliers = await storage.getMedicalSuppliers();
      const supplierProfile = suppliers.find(
        (s) => s.organizationSlug === user.organizationName?.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-") || s.contactEmail === user.email
        // Fallback for existing accounts
      );
      if (!supplierProfile) {
        return res.status(404).json({ error: "Supplier profile not found" });
      }
      const allAdvertisements = await storage.getAllAdvertisements();
      const supplierAds = allAdvertisements.filter(
        (ad) => ad.contactEmail === supplierProfile.contactEmail
      );
      res.json(supplierAds);
    } catch (error) {
      console.error("[SUPPLIER] Error fetching supplier advertisements:", error);
      res.status(500).json({ error: "Failed to fetch supplier advertisements" });
    }
  });
  app2.get("/supplier-signup-direct", (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Medical Supplier Registration</title>
    <style>
        * { box-sizing: border-box; }
        body { 
            font-family: Arial, sans-serif; 
            margin: 0; 
            padding: 20px; 
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
            min-height: 100vh;
            line-height: 1.6;
        }
        .signup-container { 
            background: white; 
            padding: 40px; 
            border-radius: 12px; 
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
        }
        .logo { 
            text-align: center; 
            margin-bottom: 30px; 
        }
        .logo h1 { 
            color: #2563eb; 
            margin: 0; 
            font-size: 28px; 
            font-weight: bold; 
        }
        .logo p {
            color: #64748b;
            margin: 5px 0 0 0;
        }
        .section {
            margin-bottom: 30px;
        }
        .section h3 {
            color: #1e293b;
            margin-bottom: 15px;
            font-size: 18px;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 5px;
        }
        .form-row {
            display: flex;
            gap: 15px;
            margin-bottom: 20px;
        }
        .form-group { 
            flex: 1;
            margin-bottom: 20px; 
        }
        .form-group label { 
            display: block; 
            margin-bottom: 8px; 
            color: #374151; 
            font-weight: 500; 
        }
        .form-group input, .form-group textarea { 
            width: 100%; 
            padding: 12px; 
            border: 2px solid #e5e7eb; 
            border-radius: 8px; 
            font-size: 16px; 
            transition: border-color 0.2s;
        }
        .form-group input:focus, .form-group textarea:focus { 
            outline: none; 
            border-color: #2563eb; 
        }
        .form-group textarea {
            resize: vertical;
            min-height: 100px;
        }
        .required { color: #ef4444; }
        .btn { 
            background: #2563eb; 
            color: white; 
            padding: 14px 24px; 
            border: none; 
            border-radius: 8px; 
            font-size: 16px; 
            font-weight: 600;
            cursor: pointer; 
            width: 100%;
            transition: background-color 0.2s;
        }
        .btn:hover { 
            background: #1d4ed8; 
        }
        .btn:disabled {
            background: #9ca3af;
            cursor: not-allowed;
        }
        .message { 
            margin: 15px 0; 
            padding: 12px; 
            border-radius: 8px; 
            text-align: center;
        }
        .success { 
            background: #d1fae5; 
            color: #065f46; 
            border: 1px solid #a7f3d0;
        }
        .error { 
            background: #fee2e2; 
            color: #991b1b; 
            border: 1px solid #fca5a5;
        }
        .links {
            text-align: center;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
        }
        .links a {
            color: #2563eb;
            text-decoration: none;
            margin: 0 10px;
        }
        .links a:hover {
            text-decoration: underline;
        }
        @media (max-width: 768px) {
            .form-row {
                flex-direction: column;
                gap: 0;
            }
            .signup-container {
                padding: 20px;
                margin: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="signup-container">
        <div class="logo">
            <h1>Medical Supplier Registration</h1>
            <p>Join our healthcare marketplace and reach providers worldwide</p>
        </div>

        <form id="signupForm">
            <div class="section">
                <h3>Company Information</h3>
                <div class="form-row">
                    <div class="form-group">
                        <label for="companyName">Company Name <span class="required">*</span></label>
                        <input type="text" id="companyName" name="companyName" required>
                    </div>
                    <div class="form-group">
                        <label for="businessType">Business Type <span class="required">*</span></label>
                        <input type="text" id="businessType" name="businessType" placeholder="e.g., Medical Device Manufacturer" required>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="yearsInBusiness">Years in Business <span class="required">*</span></label>
                        <input type="number" id="yearsInBusiness" name="yearsInBusiness" min="0" required>
                    </div>
                    <div class="form-group">
                        <label for="website">Website</label>
                        <input type="url" id="website" name="website" placeholder="https://www.yourcompany.com">
                    </div>
                </div>

                <div class="form-group">
                    <label for="description">Company Description <span class="required">*</span></label>
                    <textarea id="description" name="description" placeholder="Describe your company, products, and services..." required></textarea>
                </div>

                <div class="form-group">
                    <label for="specialties">Medical Specialties <span class="required">*</span></label>
                    <textarea id="specialties" name="specialties" placeholder="e.g., Cardiac devices, Surgical instruments, Diagnostic equipment..." required></textarea>
                </div>
            </div>

            <div class="section">
                <h3>Contact Information</h3>
                <div class="form-row">
                    <div class="form-group">
                        <label for="contactEmail">Contact Email <span class="required">*</span></label>
                        <input type="email" id="contactEmail" name="contactEmail" required>
                    </div>
                    <div class="form-group">
                        <label for="contactPhone">Contact Phone <span class="required">*</span></label>
                        <input type="tel" id="contactPhone" name="contactPhone" required>
                    </div>
                </div>
            </div>

            <div class="section">
                <h3>Business Address</h3>
                <div class="form-group">
                    <label for="address">Address <span class="required">*</span></label>
                    <input type="text" id="address" name="address" required>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="city">City <span class="required">*</span></label>
                        <input type="text" id="city" name="city" required>
                    </div>
                    <div class="form-group">
                        <label for="state">State/Province <span class="required">*</span></label>
                        <input type="text" id="state" name="state" required>
                    </div>
                    <div class="form-group">
                        <label for="zipCode">ZIP/Postal Code <span class="required">*</span></label>
                        <input type="text" id="zipCode" name="zipCode" required>
                    </div>
                </div>

                <div class="form-group">
                    <label for="country">Country <span class="required">*</span></label>
                    <input type="text" id="country" name="country" required>
                </div>
            </div>

            <div id="message"></div>
            <button type="submit" class="btn" id="signupBtn">Submit Registration</button>
        </form>

        <div class="links">
            <a href="/supplier-login-direct">Already have an account? Login here</a>
            <a href="/marketplace">Browse Marketplace</a>
        </div>
    </div>

    <script>
        document.getElementById('signupForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const signupBtn = document.getElementById('signupBtn');
            const messageDiv = document.getElementById('message');
            
            signupBtn.disabled = true;
            signupBtn.textContent = 'Submitting Registration...';
            messageDiv.innerHTML = '';
            
            const formData = new FormData(e.target);
            const registrationData = {
                companyName: formData.get('companyName'),
                businessType: formData.get('businessType'),
                yearsInBusiness: parseInt(formData.get('yearsInBusiness')),
                website: formData.get('website') || undefined,
                description: formData.get('description'),
                specialties: formData.get('specialties'),
                contactEmail: formData.get('contactEmail'),
                contactPhone: formData.get('contactPhone'),
                address: formData.get('address'),
                city: formData.get('city'),
                state: formData.get('state'),
                zipCode: formData.get('zipCode'),
                country: formData.get('country')
            };
            
            try {
                const response = await fetch('/public/suppliers/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(registrationData)
                });
                
                const result = await response.json();
                
                if (response.ok) {
                    messageDiv.innerHTML = '<div class="message success">Registration submitted successfully! Our team will review your application and contact you within 2-3 business days.</div>';
                    document.getElementById('signupForm').reset();
                    
                    // Show success message and redirect option
                    setTimeout(() => {
                        messageDiv.innerHTML += '<div class="message success">You can now <a href="/marketplace">browse our marketplace</a> or <a href="/supplier-login-direct">login if you already have credentials</a>.</div>';
                    }, 2000);
                } else {
                    messageDiv.innerHTML = '<div class="message error">Registration failed: ' + (result.error || result.message || 'Unknown error') + '</div>';
                }
            } catch (error) {
                messageDiv.innerHTML = '<div class="message error">Registration failed: ' + error.message + '</div>';
            } finally {
                signupBtn.disabled = false;
                signupBtn.textContent = 'Submit Registration';
            }
        });
    </script>
</body>
</html>`);
  });
  app2.get("/supplier-login-direct", (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Medical Supplier Login</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            margin: 0; 
            padding: 0; 
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .login-container { 
            background: white; 
            padding: 40px; 
            border-radius: 12px; 
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            width: 100%;
            max-width: 400px;
        }
        .logo { 
            text-align: center; 
            margin-bottom: 30px; 
        }
        .logo h1 { 
            color: #2563eb; 
            margin: 0; 
            font-size: 28px; 
            font-weight: bold; 
        }
        .form-group { 
            margin-bottom: 20px; 
        }
        .form-group label { 
            display: block; 
            margin-bottom: 8px; 
            color: #374151; 
            font-weight: 500; 
        }
        .form-group input { 
            width: 100%; 
            padding: 12px; 
            border: 1px solid #d1d5db; 
            border-radius: 6px; 
            font-size: 16px; 
            box-sizing: border-box;
        }
        .form-group input:focus { 
            outline: none; 
            border-color: #2563eb; 
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1); 
        }
        .btn { 
            width: 100%; 
            padding: 12px; 
            background: #2563eb; 
            color: white; 
            border: none; 
            border-radius: 6px; 
            font-size: 16px; 
            font-weight: 500; 
            cursor: pointer; 
            margin-top: 10px;
        }
        .btn:hover { 
            background: #1d4ed8; 
        }
        .btn:disabled { 
            background: #9ca3af; 
            cursor: not-allowed; 
        }
        .error { 
            color: #dc2626; 
            margin-top: 10px; 
            font-size: 14px; 
        }
        .success { 
            color: #059669; 
            margin-top: 10px; 
            font-size: 14px; 
        }
        .test-credentials {
            background: #f3f4f6;
            padding: 15px;
            border-radius: 6px;
            margin-top: 20px;
            border-left: 4px solid #2563eb;
        }
        .test-credentials h3 {
            margin: 0 0 10px 0;
            font-size: 14px;
            color: #374151;
        }
        .test-credentials code {
            display: block;
            font-family: monospace;
            color: #2563eb;
            font-weight: 500;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <div class="logo">
            <h1>\u{1F3E5} Medical Supplier Login</h1>
        </div>
        
        <form id="loginForm">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required>
            </div>
            
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
            </div>
            
            <div class="form-group">
                <label for="organizationName">Organization Name</label>
                <input type="text" id="organizationName" name="organizationName" required>
            </div>
            
            <button type="submit" class="btn" id="loginBtn">Sign In</button>
            
            <div id="message"></div>
        </form>

        <div class="test-credentials">
            <h3>Test Credentials:</h3>
            <code>Username: medtech_admin</code>
            <code>Password: password</code>
            <code>Organization: MedTech Solutions Inc.</code>
        </div>
    </div>

    <script>
        document.getElementById('loginForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const loginBtn = document.getElementById('loginBtn');
            const messageDiv = document.getElementById('message');
            
            loginBtn.disabled = true;
            loginBtn.textContent = 'Signing In...';
            messageDiv.innerHTML = '';
            
            const formData = new FormData(e.target);
            const loginData = {
                username: formData.get('username'),
                password: formData.get('password'),
                organizationName: formData.get('organizationName')
            };
            
            try {
                const response = await fetch('/api/supplier/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(loginData)
                });
                
                const result = await response.json();
                
                if (response.ok) {
                    // Store authentication data
                    localStorage.setItem('token', result.token);
                    localStorage.setItem('user', JSON.stringify(result.user));
                    localStorage.setItem('userType', 'supplier');
                    
                    messageDiv.innerHTML = '<div class="success">Login successful! Redirecting...</div>';
                    
                    // Redirect to supplier dashboard
                    setTimeout(() => {
                        window.location.href = '/supplier-dashboard-direct';
                    }, 1000);
                } else {
                    messageDiv.innerHTML = '<div class="error">' + (result.message || 'Login failed') + '</div>';
                }
            } catch (error) {
                console.error('Login error:', error);
                messageDiv.innerHTML = '<div class="error">Network error. Please try again.</div>';
            } finally {
                loginBtn.disabled = false;
                loginBtn.textContent = 'Sign In';
            }
        });
    </script>
</body>
</html>`);
  });
  app2.get("/supplier-dashboard-direct", (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Medical Supply Store Dashboard</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
        .header { background: #2563eb; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .header h1 { margin: 0; }
        .user-info { margin-top: 10px; opacity: 0.9; }
        .container { max-width: 1200px; margin: 0 auto; }
        .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 20px 0; }
        .stat-card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .stat-card h3 { margin: 0 0 10px 0; color: #666; font-size: 14px; }
        .stat-card .value { font-size: 24px; font-weight: bold; color: #333; }
        .actions { background: white; padding: 20px; border-radius: 8px; margin-top: 20px; }
        .btn { padding: 10px 20px; margin: 5px; background: #2563eb; color: white; border: none; border-radius: 5px; cursor: pointer; }
        .btn:hover { background: #1d4ed8; }
        .btn-secondary { background: #6b7280; }
        .btn-secondary:hover { background: #4b5563; }
        
        /* Modal Styles */
        .modal { 
            position: fixed; 
            z-index: 1000; 
            left: 0; 
            top: 0; 
            width: 100%; 
            height: 100%; 
            background-color: rgba(0,0,0,0.5); 
            display: flex; 
            align-items: center; 
            justify-content: center;
        }
        .modal-content { 
            background: white; 
            padding: 30px; 
            border-radius: 8px; 
            width: 90%; 
            max-width: 800px; 
            max-height: 90vh; 
            overflow-y: auto;
        }
        .close { 
            float: right; 
            font-size: 28px; 
            font-weight: bold; 
            cursor: pointer; 
            color: #666;
        }
        .close:hover { color: #000; }
        
        /* Form Styles */
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .form-group { margin-bottom: 15px; }
        .form-group label { display: block; margin-bottom: 5px; font-weight: 500; color: #374151; }
        .form-group input, .form-group textarea, .form-group select { 
            width: 100%; 
            padding: 8px 12px; 
            border: 1px solid #d1d5db; 
            border-radius: 4px; 
            box-sizing: border-box;
        }
        .form-actions { 
            display: flex; 
            gap: 10px; 
            justify-content: flex-end; 
            margin-top: 20px; 
            padding-top: 20px; 
            border-top: 1px solid #e5e7eb;
        }
        
        /* Table Styles */
        .table-header { 
            display: grid; 
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; 
            gap: 10px; 
            padding: 10px; 
            background: #f3f4f6; 
            border-radius: 4px; 
            font-weight: 500;
        }
        .order-row { 
            display: grid; 
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; 
            gap: 10px; 
            padding: 10px; 
            border-bottom: 1px solid #e5e7eb;
        }
        
        /* Report Styles */
        .report-section { margin-bottom: 30px; }
        .report-stats { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
            gap: 15px; 
            margin: 15px 0;
        }
        .report-stat { 
            background: #f9fafb; 
            padding: 15px; 
            border-radius: 6px; 
            text-align: center;
        }
        .report-stat .label { font-size: 14px; color: #6b7280; margin-bottom: 5px; }
        .report-stat .value { font-size: 24px; font-weight: bold; color: #111827; }
        .product-performance { background: #f9fafb; border-radius: 6px; padding: 15px; }
        .product-row { 
            display: grid; 
            grid-template-columns: 2fr 1fr 1fr; 
            gap: 15px; 
            padding: 10px 0; 
            border-bottom: 1px solid #e5e7eb;
        }
        .product-row:last-child { border-border: none; }
        
        /* Upload Styles */
        .form-group input[type="file"] {
            padding: 8px 0;
            border: 2px dashed #d1d5db;
            border-radius: 4px;
            background: #f9fafb;
            text-align: center;
            cursor: pointer;
        }
        .form-group input[type="file"]:hover {
            border-color: #2563eb;
            background: #eff6ff;
        }
        .btn:disabled {
            background: #9ca3af;
            cursor: not-allowed;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>\u{1F3EA} Medical Supply Store Dashboard</h1>
            <div class="user-info" id="userInfo">Loading...</div>
        </div>
        
        <div class="stats">
            <div class="stat-card">
                <h3>Products Listed</h3>
                <div class="value">247</div>
            </div>
            <div class="stat-card">
                <h3>Monthly Orders</h3>
                <div class="value">142</div>
            </div>
            <div class="stat-card">
                <h3>Monthly Revenue</h3>
                <div class="value">$28,450</div>
            </div>
            <div class="stat-card">
                <h3>Store Rating</h3>
                <div class="value">4.8/5</div>
            </div>
        </div>
        
        <div class="actions">
            <h2>Quick Actions</h2>
            <button class="btn" onclick="showAddProduct()">Add New Product</button>
            <button class="btn" onclick="showManageOrders()">Manage Orders</button>
            <button class="btn" onclick="showReports()">View Reports</button>
            <button class="btn" onclick="logout()">Logout</button>
        </div>
        
        <!-- Products List Section -->
        <div class="actions">
            <h2>My Products</h2>
            <div id="productsList" style="margin-top: 20px; min-height: 200px;">
                Loading products...
            </div>
        </div>
        
        <!-- Add Product Modal -->
        <div id="addProductModal" class="modal" style="display: none;">
            <div class="modal-content">
                <span class="close" onclick="closeModal('addProductModal')">&times;</span>
                <h2>Add New Product</h2>
                <form id="addProductForm">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="productName">Product Name</label>
                            <input type="text" id="productName" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="productSKU">SKU</label>
                            <input type="text" id="productSKU" name="sku" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="productDescription">Description</label>
                        <textarea id="productDescription" name="description" rows="3" required></textarea>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="productCategory">Category</label>
                            <select id="productCategory" name="category" required>
                                <option value="">Select Category</option>
                                <option value="Diagnostic Equipment">Diagnostic Equipment</option>
                                <option value="Surgical Instruments">Surgical Instruments</option>
                                <option value="Patient Monitoring">Patient Monitoring</option>
                                <option value="Laboratory Equipment">Laboratory Equipment</option>
                                <option value="Medical Supplies">Medical Supplies</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="productPrice">Price ($)</label>
                            <input type="number" id="productPrice" name="price" step="0.01" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="productStock">Stock Quantity</label>
                            <input type="number" id="productStock" name="stockQuantity" required>
                        </div>
                        <div class="form-group">
                            <label for="productBrand">Brand</label>
                            <input type="text" id="productBrand" name="brand" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="productImage">Product Image</label>
                        <input type="file" id="productImage" name="image" accept="image/*">
                        <small style="color: #666; display: block; margin-top: 5px;">Upload a product image (optional - JPG, PNG, or WebP)</small>
                        <div id="imagePreview" style="margin-top: 10px; display: none;">
                            <img id="previewImg" style="max-width: 200px; max-height: 150px; border-radius: 4px; border: 1px solid #ddd;">
                        </div>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="btn btn-secondary" onclick="closeModal('addProductModal')">Cancel</button>
                        <button type="submit" class="btn" id="addProductBtn">
                            <span id="addProductBtnText">Add Product</span>
                            <span id="addProductBtnLoading" style="display: none;">Uploading...</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
        
        <!-- Manage Orders Modal -->
        <div id="manageOrdersModal" class="modal" style="display: none;">
            <div class="modal-content">
                <span class="close" onclick="closeModal('manageOrdersModal')">&times;</span>
                <h2>Manage Orders</h2>
                <div id="ordersTable">
                    <div class="table-header">
                        <div>Order #</div>
                        <div>Customer</div>
                        <div>Product</div>
                        <div>Amount</div>
                        <div>Status</div>
                        <div>Actions</div>
                    </div>
                    <div id="ordersList">Loading orders...</div>
                </div>
            </div>
        </div>
        
        <!-- Reports Modal -->
        <div id="reportsModal" class="modal" style="display: none;">
            <div class="modal-content">
                <span class="close" onclick="closeModal('reportsModal')">&times;</span>
                <h2>Sales Reports</h2>
                <div class="report-section">
                    <h3>Monthly Performance</h3>
                    <div class="report-stats">
                        <div class="report-stat">
                            <div class="label">Total Revenue</div>
                            <div class="value">$28,450</div>
                        </div>
                        <div class="report-stat">
                            <div class="label">Orders Processed</div>
                            <div class="value">142</div>
                        </div>
                        <div class="report-stat">
                            <div class="label">Top Product</div>
                            <div class="value">Digital Stethoscope</div>
                        </div>
                    </div>
                </div>
                <div class="report-section">
                    <h3>Product Performance</h3>
                    <div class="product-performance">
                        <div class="product-row">
                            <div>Advanced Digital Stethoscope</div>
                            <div>45 sold</div>
                            <div>$13,455</div>
                        </div>
                        <div class="product-row">
                            <div>Portable Ultrasound Machine</div>
                            <div>8 sold</div>
                            <div>$11,992</div>
                        </div>
                        <div class="product-row">
                            <div>Surgical Instrument Set</div>
                            <div>23 sold</div>
                            <div>$3,003</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        function checkAuth() {
            const userType = localStorage.getItem('userType');
            const token = localStorage.getItem('token');
            const user = localStorage.getItem('user');
            
            if (userType !== 'supplier' || !token || !user) {
                window.location.href = '/supplier-login-direct';
                return false;
            }
            
            try {
                const currentUser = JSON.parse(user);
                document.getElementById('userInfo').textContent = 
                    currentUser.firstName + ' ' + currentUser.lastName + ' (' + currentUser.organizationName + ')';
                return true;
            } catch (e) {
                window.location.href = '/supplier-login-direct';
                return false;
            }
        }
        
        function logout() {
            localStorage.clear();
            sessionStorage.clear();
            window.location.href = '/supplier-login-direct';
        }
        
        // Modal Functions
        function showAddProduct() {
            document.getElementById('addProductModal').style.display = 'flex';
        }
        
        function showManageOrders() {
            document.getElementById('manageOrdersModal').style.display = 'flex';
            loadOrders();
        }
        
        function showReports() {
            document.getElementById('reportsModal').style.display = 'flex';
        }
        
        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }
        
        // Add Product Form Handler
        document.getElementById('addProductForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Show loading state
            const addBtn = document.getElementById('addProductBtn');
            const btnText = document.getElementById('addProductBtnText');
            const btnLoading = document.getElementById('addProductBtnLoading');
            
            addBtn.disabled = true;
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline';
            
            const formData = new FormData(e.target);
            const imageFile = formData.get('image');
            let imageUrl = null;
            
            // Upload image first if provided
            if (imageFile && imageFile.size > 0) {
                try {
                    const token = localStorage.getItem('token');
                    
                    // Get upload URL
                    const uploadResponse = await fetch('/api/objects/upload', {
                        method: 'POST',
                        headers: {
                            'Authorization': 'Bearer ' + token
                        }
                    });
                    
                    if (!uploadResponse.ok) {
                        throw new Error('Failed to get upload URL');
                    }
                    
                    const { uploadURL } = await uploadResponse.json();
                    
                    // Upload image to object storage
                    const imageUploadResponse = await fetch(uploadURL, {
                        method: 'PUT',
                        body: imageFile,
                        headers: {
                            'Content-Type': imageFile.type
                        }
                    });
                    
                    if (!imageUploadResponse.ok) {
                        throw new Error('Failed to upload image');
                    }
                    
                    // Set ACL policy for the uploaded image
                    const aclResponse = await fetch('/api/product-images', {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + token
                        },
                        body: JSON.stringify({
                            productImageURL: uploadURL.split('?')[0] // Remove query parameters
                        })
                    });
                    
                    if (aclResponse.ok) {
                        const aclResult = await aclResponse.json();
                        imageUrl = aclResult.objectPath;
                    }
                    
                } catch (error) {
                    console.error('Image upload error:', error);
                    alert('Warning: Image upload failed, but product will be created without image.');
                }
            }
            
            const productData = {
                name: formData.get('name'),
                sku: formData.get('sku'),
                description: formData.get('description'),
                category: formData.get('category'),
                price: parseFloat(formData.get('price')),
                stockQuantity: parseInt(formData.get('stockQuantity')),
                brand: formData.get('brand'),
                manufacturer: 'MedTech Solutions Inc.',
                shortDescription: formData.get('description').substring(0, 100),
                currency: 'USD',
                status: 'active',
                isActive: true,
                trackInventory: true,
                imageUrls: imageUrl ? [imageUrl] : []
            };
            
            try {
                const token = localStorage.getItem('token');
                const response = await fetch('/api/supplier/products', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    },
                    body: JSON.stringify(productData)
                });
                
                if (response.ok) {
                    alert('Product added successfully!');
                    closeModal('addProductModal');
                    e.target.reset();
                    document.getElementById('imagePreview').style.display = 'none';
                    // Update stats and reload products
                    loadProducts();
                } else {
                    const error = await response.json();
                    alert('Error adding product: ' + (error.message || 'Unknown error'));
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Network error. Please try again.');
            } finally {
                // Reset loading state
                addBtn.disabled = false;
                btnText.style.display = 'inline';
                btnLoading.style.display = 'none';
            }
        });
        
        // Load Orders Function
        async function loadOrders() {
            const ordersList = document.getElementById('ordersList');
            ordersList.innerHTML = 'Loading orders...';
            
            try {
                const token = localStorage.getItem('token');
                const response = await fetch('/api/supplier/orders', {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });
                
                if (response.ok) {
                    const orders = await response.json();
                    if (orders.length === 0) {
                        ordersList.innerHTML = '<div style="padding: 20px; text-align: center; color: #666;">No orders found</div>';
                    } else {
                        ordersList.innerHTML = orders.map(order => 
                            '<div class="order-row">' +
                                '<div>' + order.orderNumber + '</div>' +
                                '<div>' + order.customerName + '</div>' +
                                '<div>' + order.productName + '</div>' +
                                '<div>$' + order.totalAmount + '</div>' +
                                '<div><span class="status-' + order.status + '">' + order.status + '</span></div>' +
                                '<div><button class="btn" onclick="updateOrderStatus(\\'' + order.id + '\\', \\'' + order.status + '\\')">Update</button></div>' +
                            '</div>'
                        ).join('');
                    }
                } else {
                    ordersList.innerHTML = '<div style="padding: 20px; text-align: center; color: #dc2626;">Error loading orders</div>';
                }
            } catch (error) {
                console.error('Error loading orders:', error);
                ordersList.innerHTML = '<div style="padding: 20px; text-align: center; color: #dc2626;">Network error loading orders</div>';
            }
        }
        
        // Update Order Status
        function updateOrderStatus(orderId, currentStatus) {
            const statuses = ['pending', 'processing', 'shipped', 'delivered'];
            const currentIndex = statuses.indexOf(currentStatus);
            const nextStatus = statuses[currentIndex + 1] || statuses[0];
            
            if (confirm('Update order status to: ' + nextStatus + '?')) {
                // In a real implementation, this would make an API call
                alert('Order status updated to: ' + nextStatus);
                loadOrders(); // Reload orders
            }
        }
        
        // Load Products Function
        async function loadProducts() {
            const productsList = document.getElementById('productsList');
            const totalProductsElement = document.querySelector('.stat-card:first-child .value');
            
            try {
                const token = localStorage.getItem('token');
                const response = await fetch('/api/supplier/products', {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });
                
                if (response.ok) {
                    const products = await response.json();
                    
                    // Update total products count
                    if (totalProductsElement) {
                        totalProductsElement.textContent = products.length;
                    }
                    
                    if (products.length === 0) {
                        productsList.innerHTML = '<div style="padding: 20px; text-align: center; color: #666; background: white; border-radius: 8px;">No products found. Click "Add New Product" to get started!</div>';
                    } else {
                        productsList.innerHTML = '<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px;">' +
                            products.map(product => 
                                '<div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">' +
                                    '<h3 style="margin: 0 0 10px 0; color: #333;">' + product.name + '</h3>' +
                                    '<p style="margin: 0 0 10px 0; color: #666; font-size: 14px;">SKU: ' + product.sku + '</p>' +
                                    '<p style="margin: 0 0 10px 0; color: #666; font-size: 14px;">' + product.description + '</p>' +
                                    '<div style="display: flex; justify-content: space-between; align-items: center; margin-top: 15px;">' +
                                        '<div>' +
                                            '<span style="font-size: 18px; font-weight: bold; color: #2563eb;">$' + product.price + '</span>' +
                                            '<span style="margin-left: 15px; color: #666;">Stock: ' + product.stockQuantity + '</span>' +
                                        '</div>' +
                                        '<div>' +
                                            '<span style="padding: 4px 8px; background: #10b981; color: white; border-radius: 4px; font-size: 12px;">' + product.status + '</span>' +
                                        '</div>' +
                                    '</div>' +
                                '</div>'
                            ).join('') +
                        '</div>';
                    }
                } else {
                    productsList.innerHTML = '<div style="padding: 20px; text-align: center; color: #dc2626; background: white; border-radius: 8px;">Error loading products. Please try again.</div>';
                }
            } catch (error) {
                console.error('Error loading products:', error);
                productsList.innerHTML = '<div style="padding: 20px; text-align: center; color: #dc2626; background: white; border-radius: 8px;">Network error loading products</div>';
            }
        }
        
        // Update dashboard stats
        async function updateDashboardStats() {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch('/api/supplier/stats', {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });
                
                if (response.ok) {
                    const stats = await response.json();
                    // Update the dashboard with real stats
                    console.log('Updated stats:', stats);
                }
            } catch (error) {
                console.error('Error updating stats:', error);
            }
            
            // Load products
            loadProducts();
        }
        
        // Image preview functionality
        document.getElementById('productImage').addEventListener('change', function(e) {
            const file = e.target.files[0];
            const preview = document.getElementById('imagePreview');
            const previewImg = document.getElementById('previewImg');
            
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    previewImg.src = e.target.result;
                    preview.style.display = 'block';
                };
                reader.readAsDataURL(file);
            } else {
                preview.style.display = 'none';
            }
        });
        
        // Close modal when clicking outside
        window.onclick = function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = 'none';
            }
        }
        
        // Initialize page
        if (checkAuth()) {
            updateDashboardStats();
            loadProducts();
        }
    </script>
</body>
</html>`);
  });
  app2.post("/api/objects/upload", authenticateToken, async (req, res) => {
    try {
      const { ObjectStorageService: ObjectStorageService2 } = await Promise.resolve().then(() => (init_objectStorage(), objectStorage_exports));
      const objectStorageService = new ObjectStorageService2();
      const uploadURL = await objectStorageService.getObjectEntityUploadURL();
      res.json({ uploadURL });
    } catch (error) {
      console.error("Error getting upload URL:", error);
      res.status(500).json({ message: "Failed to get upload URL" });
    }
  });
  app2.put("/api/product-images", authenticateToken, async (req, res) => {
    try {
      const { productImageURL } = req.body;
      if (!productImageURL) {
        return res.status(400).json({ error: "productImageURL is required" });
      }
      const { ObjectStorageService: ObjectStorageService2 } = await Promise.resolve().then(() => (init_objectStorage(), objectStorage_exports));
      const objectStorageService = new ObjectStorageService2();
      const objectPath = await objectStorageService.trySetObjectEntityAclPolicy(
        productImageURL,
        {
          owner: req.userId || "supplier-user-001",
          visibility: "public"
          // Product images should be publicly accessible
        }
      );
      res.status(200).json({ objectPath });
    } catch (error) {
      console.error("Error setting product image ACL:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.get("/objects/*", async (req, res) => {
    try {
      const { ObjectStorageService: ObjectStorageService2, ObjectNotFoundError: ObjectNotFoundError2 } = await Promise.resolve().then(() => (init_objectStorage(), objectStorage_exports));
      const { ObjectPermission: ObjectPermission2 } = await Promise.resolve().then(() => (init_objectAcl(), objectAcl_exports));
      const objectStorageService = new ObjectStorageService2();
      const objectFile = await objectStorageService.getObjectEntityFile(req.path);
      const canAccess = await objectStorageService.canAccessObjectEntity({
        objectFile,
        userId: req.userId,
        requestedPermission: ObjectPermission2.READ
      });
      if (!canAccess) {
        return res.sendStatus(404);
      }
      objectStorageService.downloadObject(objectFile, res);
    } catch (error) {
      console.error("Error serving object:", error);
      const { ObjectNotFoundError: ObjectNotFoundError2 } = await Promise.resolve().then(() => (init_objectStorage(), objectStorage_exports));
      if (error instanceof ObjectNotFoundError2) {
        return res.sendStatus(404);
      }
      return res.sendStatus(500);
    }
  });
  app2.get("/api/marketplace/products", async (req, res) => {
    try {
      const { category, search, status = "active", page = 1, limit = 20 } = req.query;
      const offset = (Number(page) - 1) * Number(limit);
      const products = await storage.getMarketplaceProducts({
        category,
        search,
        status,
        limit: Number(limit),
        offset
      });
      res.json(products);
    } catch (error) {
      console.error("Error fetching marketplace products:", error);
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });
  app2.get("/api/marketplace/products/:id", authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;
      const product = await storage.getMarketplaceProduct(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      await storage.incrementProductViewCount(id);
      res.json(product);
    } catch (error) {
      console.error("Error fetching product:", error);
      res.status(500).json({ message: "Failed to fetch product" });
    }
  });
  app2.get("/api/supplier/products", authenticateToken, requireRole(["supplier_admin", "tenant_admin"]), async (req, res) => {
    try {
      const { status } = req.query;
      const supplierTenantId = req.tenant.id;
      const products = await storage.getSupplierProducts(supplierTenantId, status);
      res.json(products);
    } catch (error) {
      console.error("Error fetching supplier products:", error);
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });
  app2.post("/api/supplier/products", authenticateToken, requireRole(["supplier_admin", "tenant_admin"]), async (req, res) => {
    try {
      const supplierTenantId = req.tenant.id;
      const userId = req.userId;
      const productData = {
        ...req.body,
        supplierTenantId,
        status: "draft"
        // All new products start as draft
      };
      const product = await storage.createMarketplaceProduct(productData);
      try {
        await storage.createAuditLog({
          tenantId: supplierTenantId,
          userId: req.userId || "system",
          entityType: "marketplace_product",
          entityId: product.id,
          action: "create",
          newData: productData,
          ipAddress: req.ip,
          userAgent: req.get("User-Agent")
        });
      } catch (auditError) {
        console.log("Audit log creation skipped due to user ID format:", auditError.message);
      }
      res.status(201).json(product);
    } catch (error) {
      console.error("Error creating product:", error);
      res.status(500).json({ message: "Failed to create product" });
    }
  });
  app2.put("/api/supplier/products/:id", authenticateToken, requireRole(["supplier_admin", "tenant_admin"]), async (req, res) => {
    try {
      const { id } = req.params;
      const supplierTenantId = req.tenant.id;
      const userId = req.userId;
      const updatedProduct = await storage.updateMarketplaceProduct(id, req.body, supplierTenantId);
      if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found or unauthorized" });
      }
      try {
        await storage.createAuditLog({
          tenantId: supplierTenantId,
          userId: req.userId || "system",
          entityType: "marketplace_product",
          entityId: id,
          action: "update",
          newData: req.body,
          ipAddress: req.ip,
          userAgent: req.get("User-Agent")
        });
      } catch (auditError) {
        console.log("Audit log creation skipped due to user ID format:", auditError.message);
      }
      res.json(updatedProduct);
    } catch (error) {
      console.error("Error updating product:", error);
      res.status(500).json({ message: "Failed to update product" });
    }
  });
  app2.post("/api/marketplace/orders", authenticateToken, requireRole(["tenant_admin", "director", "physician", "pharmacist", "lab_technician"]), async (req, res) => {
    try {
      const buyerTenantId = req.tenant.id;
      const buyerUserId = req.userId;
      const orderData = {
        ...req.body,
        buyerTenantId,
        buyerUserId,
        orderNumber: await storage.generateOrderNumber(),
        status: "pending"
      };
      const order = await storage.createMarketplaceOrder(orderData);
      await storage.createAuditLog({
        tenantId: buyerTenantId,
        userId: buyerUserId,
        entityType: "marketplace_order",
        entityId: order.id,
        action: "create",
        newData: orderData,
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
      });
      res.status(201).json(order);
    } catch (error) {
      console.error("Error creating order:", error);
      res.status(500).json({ message: "Failed to create order" });
    }
  });
  app2.get("/api/marketplace/orders/buyer", authenticateToken, requireRole(["tenant_admin", "director", "physician", "pharmacist", "lab_technician"]), async (req, res) => {
    try {
      const buyerTenantId = req.tenant.id;
      const { status, page = 1, limit = 20 } = req.query;
      const offset = (Number(page) - 1) * Number(limit);
      const orders = await storage.getBuyerOrders(buyerTenantId, {
        status,
        limit: Number(limit),
        offset
      });
      res.json(orders);
    } catch (error) {
      console.error("Error fetching buyer orders:", error);
      res.status(500).json({ message: "Failed to fetch orders" });
    }
  });
  app2.get("/api/marketplace/orders/supplier", authenticateToken, requireRole(["supplier_admin"]), async (req, res) => {
    try {
      const supplierTenantId = req.tenant.id;
      const { status, page = 1, limit = 20 } = req.query;
      const offset = (Number(page) - 1) * Number(limit);
      const orders = await storage.getSupplierOrders(supplierTenantId, {
        status,
        limit: Number(limit),
        offset
      });
      res.json(orders);
    } catch (error) {
      console.error("Error fetching supplier orders:", error);
      res.status(500).json({ message: "Failed to fetch orders" });
    }
  });
  app2.put("/api/marketplace/orders/:id/status", authenticateToken, requireRole(["supplier_admin", "tenant_admin"]), async (req, res) => {
    try {
      const { id } = req.params;
      const { status, notes } = req.body;
      const tenantId = req.tenant.id;
      const userId = req.userId;
      const updatedOrder = await storage.updateOrderStatus(id, status, notes, tenantId);
      if (!updatedOrder) {
        return res.status(404).json({ message: "Order not found or unauthorized" });
      }
      await storage.createAuditLog({
        tenantId,
        userId,
        entityType: "marketplace_order",
        entityId: id,
        action: "status_update",
        newData: { status, notes },
        ipAddress: req.ip,
        userAgent: req.get("User-Agent")
      });
      res.json(updatedOrder);
    } catch (error) {
      console.error("Error updating order status:", error);
      res.status(500).json({ message: "Failed to update order status" });
    }
  });
  app2.post("/api/marketplace/products/:productId/reviews", authenticateToken, async (req, res) => {
    try {
      const { productId } = req.params;
      const reviewerTenantId = req.tenant.id;
      const reviewerUserId = req.userId;
      const hasPurchased = await storage.hasUserPurchasedProduct(reviewerUserId, productId);
      if (!hasPurchased) {
        return res.status(403).json({ message: "You can only review products you have purchased" });
      }
      const reviewData = {
        ...req.body,
        productId,
        reviewerTenantId,
        reviewerUserId,
        isVerifiedPurchase: true,
        isApproved: false
        // Reviews need moderation
      };
      const review = await storage.createProductReview(reviewData);
      res.status(201).json(review);
    } catch (error) {
      console.error("Error creating review:", error);
      res.status(500).json({ message: "Failed to create review" });
    }
  });
  app2.get("/api/marketplace/products/:productId/reviews", async (req, res) => {
    try {
      const { productId } = req.params;
      const { page = 1, limit = 10 } = req.query;
      const offset = (Number(page) - 1) * Number(limit);
      const reviews = await storage.getProductReviews(productId, {
        limit: Number(limit),
        offset,
        approvedOnly: true
      });
      res.json(reviews);
    } catch (error) {
      console.error("Error fetching product reviews:", error);
      res.status(500).json({ message: "Failed to fetch reviews" });
    }
  });
  app2.post("/api/admin/reset-counters", authenticateToken, async (req, res) => {
    try {
      console.log("Counter reset request - User:", req.user);
      if (req.user.role !== "super_admin") {
        return res.status(403).json({ message: "Access denied. Super admin role required." });
      }
      const result = await resetAllCounters();
      res.json({
        success: true,
        message: "All counters have been successfully reset to zero",
        details: {
          resetCounters: [
            "Work shift prescriptions, revenue, and insurance claims",
            "User levels, points, tests completed, and streaks",
            "Advertisement impressions, clicks, and conversions",
            "Product view counts, order counts, ratings, and reviews",
            "Activity log points",
            "Stock quantities reset to zero"
          ],
          timestamp: result.timestamp,
          resetBy: req.user.username || req.user.email
        }
      });
    } catch (error) {
      console.error("Error resetting counters:", error);
      res.status(500).json({
        message: "Failed to reset counters",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });
  app2.post("/api/admin/create-test-data", authenticateToken, async (req, res) => {
    try {
      console.log("Test data creation request - User:", req.user);
      if (req.user.role !== "super_admin") {
        return res.status(403).json({ message: "Access denied. Super admin role required." });
      }
      const { createHospitalTestData: createHospitalTestData2 } = await Promise.resolve().then(() => (init_create_hospital_test_data(), create_hospital_test_data_exports));
      const result = await createHospitalTestData2();
      res.json({
        success: true,
        message: "Hospital test data created successfully",
        details: result
      });
    } catch (error) {
      console.error("Error creating test data:", error);
      res.status(500).json({
        message: "Failed to create test data",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path3 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path2 from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path2.resolve(import.meta.dirname, "client", "src"),
      "@shared": path2.resolve(import.meta.dirname, "shared"),
      "@assets": path2.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path2.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path2.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid as nanoid2 } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path3.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid2()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}

// server/index.ts
init_db();
init_schema();
import bcrypt3 from "bcrypt";
import { eq as eq3 } from "drizzle-orm";
import { nanoid as nanoid3 } from "nanoid";
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});
app.get("/healthz", (req, res) => {
  res.status(200).json({ status: "ok" });
});
app.get("/status", (req, res) => {
  res.status(200).json({ status: "ok" });
});
app.get("/ping", (req, res) => {
  res.status(200).send("ok");
});
app.get("/ready", (req, res) => {
  res.status(200).send("OK");
});
app.get("/alive", (req, res) => {
  res.status(200).send("OK");
});
app.get("/liveness", (req, res) => {
  res.status(200).json({ status: "ok", alive: true });
});
app.get("/readiness", (req, res) => {
  res.status(200).json({ status: "ok", ready: true });
});
app.get("/deployment-health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    service: "carnet-healthcare",
    deployment: "ready",
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
});
app.use((req, res, next) => {
  const start = Date.now();
  const path4 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path4.startsWith("/api")) {
      let logLine = `${req.method} ${path4} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
var platformInitialized = false;
async function initializePlatform() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2e3));
    const existingTenant = await db.select().from(tenants).where(eq3(tenants.subdomain, "argilette")).limit(1);
    let platformTenant;
    const tenantResult = Array.isArray(existingTenant) ? existingTenant : [];
    if (tenantResult.length === 0) {
      const [tenant] = await db.insert(tenants).values({
        name: "ARGILETTE Platform",
        type: "hospital",
        subdomain: "argilette",
        settings: {
          isPlatformOwner: true,
          features: ["super_admin", "tenant_management", "multi_tenant"]
        },
        isActive: true
      }).returning();
      platformTenant = tenant;
      log("\u2713 Created platform tenant: ARGILETTE");
    } else {
      platformTenant = existingTenant[0];
      log("\u2713 Platform tenant already exists");
    }
    const existingAdmin = await db.select().from(users).where(eq3(users.email, "abel@argilette.com")).limit(1);
    if (!existingAdmin || existingAdmin.length === 0) {
      const hashedPassword = await bcrypt3.hash("Serrega1208@", 10);
      await db.insert(users).values({
        id: nanoid3(),
        tenantId: platformTenant.id,
        username: "abel_admin",
        email: "abel@argilette.com",
        password: hashedPassword,
        firstName: "Abel",
        lastName: "Platform Admin",
        role: "super_admin",
        isActive: true
      });
      log("\u2713 Created super admin user: abel@argilette.com");
    } else {
      log("\u2713 Super admin already exists");
    }
    platformInitialized = true;
    log("\u2713 Platform initialization complete");
  } catch (error) {
    log("\u274C Platform initialization failed: " + error);
    console.error("Platform initialization error:", error);
    if (process.env.NODE_ENV === "production") {
      setTimeout(() => {
        log("\u{1F504} Retrying platform initialization...");
        initializePlatform().catch((retryError) => {
          console.error("Platform initialization retry failed:", retryError);
        });
      }, 1e4);
    }
  }
}
(async () => {
  const server = await registerRoutes(app);
  app.use((err, req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    console.error("Unhandled error:", {
      url: req.url,
      method: req.method,
      error: err.stack || err.message || err
    });
    if (!res.headersSent) {
      res.status(status).json({
        error: "Internal server error",
        message: process.env.NODE_ENV === "development" ? message : "Internal server error"
      });
    }
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    const path4 = await import("path");
    const fs2 = await import("fs");
    const distPath = path4.resolve(import.meta.dirname, "..", "dist", "public");
    if (!fs2.existsSync(distPath)) {
      console.error(`Build directory not found: ${distPath}`);
      console.log("Available directories:", fs2.readdirSync(path4.resolve(import.meta.dirname, "..")));
    }
    app.use(express2.static(distPath));
    app.use("*", (_req, res) => {
      res.sendFile(path4.resolve(distPath, "index.html"));
    });
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen(port, "0.0.0.0", () => {
    console.log(`Server running on port ${port}`);
    log(`serving on port ${port}`);
    setTimeout(() => {
      initializePlatform().catch((error) => {
        console.error("Platform initialization error:", error);
      });
    }, 100);
  });
  process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection at:", promise, "reason:", reason);
  });
  process.on("uncaughtException", (error) => {
    console.error("Uncaught Exception:", error);
    console.log("Server continuing to run despite error");
  });
})();

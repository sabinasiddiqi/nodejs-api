const mappings = {
  paramMap: {
    max_discharges: "total_discharges__lte",
    min_discharges: "total_discharges__gte",
    max_average_covered_charges: "avg_covered_charges__lte",
    min_average_covered_charges: "avg_covered_charges__gte",
    max_average_medicare_payments: "avg_medicare_payments__lte",
    min_average_medicare_payments: "avg_medicare_payments__gte",
    state: "state__equals",
    total_discharges__lte: "total_discharges__lte",
    total_discharges__gte: "total_discharges__gte",
    average_covered_charges__lte: "avg_covered_charges__lte",
    average_covered_charges__gte: "avg_covered_charges__gte",
    average_medicare_payments__lte: "avg_medicare_payments__lte",
    average_medicare_payments__gte: "avg_medicare_payments__gte",
    state__equals: "state__equals"
  },
  fieldMap: {
    name: "Provider Name",
    city: "Provider City",
    state: "Provider State",
    zip: "Provider Zip Code",
    hospital_referral_region_desc: "Hospital Referral Region Description",
    total_discharges: "Total Discharges",
    avg_covered_charges: "Average Covered Charges",
    avg_total_payments: "Average Total Payments",
    avg_medicare_payments: "Average Medicare Payments",
  }
}

module.exports = mappings

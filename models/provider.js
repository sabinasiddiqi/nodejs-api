// Dependencies
const restful = require('node-restful');
const mongoose = restful.mongoose;

// Schema
const providerSchema = new mongoose.Schema({
    "name": { type: String, uppercase: true },
    "prov_id": { type: Number },
		"street_address": { type: String, uppercase: true },
		"city": { type: String, uppercase: true },
		"state": { type: String, uppercase: true },
		"zip": { type: String, uppercase: true },
		"hospital_referral_region_desc": { type: String, uppercase: true },
		"total_discharges": Number,
		"avg_covered_charges": Number,
		"avg_total_payments": Number,
		"avg_medicare_payments": Number
})

// Return model
module.exports = restful.model('Provider', providerSchema)

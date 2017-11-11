  // Dependencies
  const express = require('express');
  const router = express.Router();
  const mappings = require('./mappings')


  // Models
  const Provider = require('../models/provider')

  function formatCurr(num) {
    return '$' + num.toLocaleString();
  }

  function isCurr(field) {
    return (field === "avg_covered_charges" || field === "avg_total_payments" || field === "avg_medicare_payments");
  }

  Provider.methods(['get', 'put', 'post', 'delete']);

  Provider.before('get', function(req, res, next) {
    let temp = {}
    for (const key in req.query) {
      if (mappings.paramMap[key]) {
        temp[mappings.paramMap[key]] = req.query[key];
      }
      // any key that is not in the param map is discarded as invalid
    }
    // to sort results by a column
    // temp.sort = 'state';
    req.query = temp;
    next();
  });

  Provider.after('get', function(req, res, next) {
    var data = res.locals.bundle;
    data.forEach((provider, idx) => {
      let temp = {};
      for (const key in mappings.fieldMap) {
        temp[mappings.fieldMap[key]] = provider[key] && isCurr(key) ? formatCurr(provider[key]): provider[key];
      }

      res.locals.bundle[idx] = temp;
    })
    next();
  });

  Provider.register(router, '/providers');
  module.exports = router;

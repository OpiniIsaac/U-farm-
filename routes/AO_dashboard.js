const express = require('express');
const router = express.Router();

router.get("/AO_dashboard",(req,res)=>{
  res.render("AO_dashboard")
  });

  module.exports = router
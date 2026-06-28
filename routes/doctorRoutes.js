const express = require("express");
const router = express.Router();
const doctorModel = require("../models/doctorModel");

router.get("/getDoctors", async (req,res)=>{
  try{

    const doctors = await doctorModel.find()

    res.send({
      success:true,
      data:doctors
    })

  }catch(error){
    res.send({
      success:false,
      message:"Error fetching doctors"
    })
  }
})

module.exports = router
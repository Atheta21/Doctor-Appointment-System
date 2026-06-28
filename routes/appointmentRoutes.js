const express = require("express");
const router = express.Router();
const appointmentModel = require("../models/appointmentModel");


// BOOK APPOINTMENT
router.post("/book-appointment", async (req, res) => {

  try {

    // check if doctor already booked at same time
    const existing = await appointmentModel.findOne({
      doctorId: req.body.doctorId,
      date: req.body.date,
      time: req.body.time
    });

    if(existing){
      return res.status(200).send({
        success:false,
        message:"Doctor is busy at this time"
      });
    }

    const newAppointment = new appointmentModel(req.body);
    await newAppointment.save();

    res.status(200).send({
      success:true,
      message:"Appointment booked successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).send({
      success:false,
      message:"Error booking appointment"
    });

  }

});


// GET USER APPOINTMENTS
router.get("/get-user-appointments/:userId", async (req,res)=>{

  
  try{

    const appointments = await appointmentModel
      .find({ userId:req.params.userId })
      .populate("doctorId");  

    res.status(200).send({
      success:true,
      data:appointments
    });

  }catch(error){

    console.log(error);

    res.status(500).send({
      success:false,
      message:"Error fetching appointments"
    });

  }

});


// UPDATE APPOINTMENT STATUS (admin/doctor)
router.put("/update-status/:id", async (req,res)=>{

  try{

    const appointment = await appointmentModel.findById(req.params.id);

    appointment.status = req.body.status;

    await appointment.save();

    res.status(200).send({
      success:true,
      message:"Appointment status updated"
    });

  }catch(error){

    console.log(error);

    res.status(500).send({
      success:false,
      message:"Error updating appointment"
    });

  }

});

module.exports = router;
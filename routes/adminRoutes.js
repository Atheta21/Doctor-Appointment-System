const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");
const doctorModel = require("../models/doctorModel");
const appointmentModel = require("../models/appointmentModel");
const userModel = require("../models/userModel");
const contactModel = require("../models/contactModel");

// DASHBOARD DATA

router.get("/dashboard", async (req, res) => {
  try {

    const users = await userModel.countDocuments();
    const doctors = await doctorModel.countDocuments();
    const appointments = await appointmentModel.countDocuments();

    // get approved appointments
    const approvedAppointments = await appointmentModel
      .find({ status: "approved" })
      .populate("doctorId");

    let earnings = 0;

    approvedAppointments.forEach((a) => {
      earnings += a.doctorId?.fees || 0;
    });

    res.send({
      success: true,
      data: {
        users,
        doctors,
        appointments,
        earnings
      }
    });

  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Dashboard error"
    });
  }
});
router.get("/doctors", async(req,res)=>{

const doctors = await doctorModel.find();

res.send({
success:true,
data:doctors
});

});

router.post("/add-doctor", async(req,res)=>{

const doctor = new doctorModel({
...req.body,
status:"available"
});

await doctor.save();

res.send({
success:true,
message:"Doctor added"
});

});

router.post("/toggle-doctor", async(req,res)=>{

const doctor = await doctorModel.findById(req.body.doctorId);

doctor.status = doctor.status === "available" ? "busy" : "available";

await doctor.save();

res.send({
success:true
});

});

router.post("/login", async(req,res)=>{

const {email,password} = req.body;

const admin = await userModel.findOne({email});

if(!admin){
return res.send({
success:false,
message:"Admin not found"
});
}

const isMatch = await bcrypt.compare(password,admin.password);

if(!isMatch){
return res.send({
success:false,
message:"Invalid password"
});
}

if(!admin.isAdmin){
return res.send({
success:false,
message:"Not authorized as admin"
});
}

const token = jwt.sign(
{ id: admin._id },
process.env.JWT_SECRET,
{ expiresIn:"1d"}
);

res.send({
success:true,
token
});

});



router.get("/contact-messages", async(req,res)=>{

try{

const messages = await contactModel.find().sort({createdAt:-1});

res.send({
success:true,
data:messages
});

}catch(error){

res.status(500).send({
success:false,
message:"Error fetching messages"
});

}

});

router.get("/appointments", async(req,res)=>{

const appointments = await appointmentModel.find();

res.send({
success:true,
data:appointments
});

});

router.post("/update-appointment", async (req, res) => {
  try {

    const { id, status } = req.body;

    await appointmentModel.findByIdAndUpdate(id, {
      status: status
    });

    res.send({
      success: true,
      message: "Appointment status updated"
    });

  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Error updating appointment"
    });
  }
});

module.exports = router;


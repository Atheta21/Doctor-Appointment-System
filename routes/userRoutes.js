const express = require('express');
const router = express.Router();

const { loginController, registerController, authController } = require('../controllers/userCtrl');
const authMiddleware = require('../middlewares/authMiddleware');
const userModel = require('../models/userModel'); // ⭐ FIX


// LOGIN
router.post('/login', loginController);

// REGISTER
router.post('/register', registerController);

// AUTH USER DATA
router.post('/getUserData', authMiddleware, authController);


// GET USER INFO
router.get("/get-user-info/:id", async (req,res)=>{

try{

const user = await userModel.findById(req.params.id);

if(!user){
return res.send({
success:false,
message:"User not found"
})
}

res.status(200).send({
success:true,
data:user
})

}catch(error){

console.log(error);

res.status(500).send({
success:false,
message:"Error fetching user"
})

}

});


// UPDATE PROFILE
router.put("/update-profile/:id", async (req,res)=>{

try{

const user = await userModel.findByIdAndUpdate(
req.params.id,
{
name:req.body.name,
email:req.body.email,
password:req.body.password
},
{new:true}
);

res.send({
success:true,
message:"Profile updated",
data:user
})

}catch(error){

console.log(error);

res.status(500).send({
success:false,
message:"Error updating profile"
})

}

});

const contactModel = require("../models/contactModel");

router.post("/contact", async(req,res)=>{

try{

const contact = new contactModel(req.body);

await contact.save();

res.send({
success:true,
message:"Message sent successfully"
});

}catch(error){

res.status(500).send({
success:false,
message:"Error sending message"
});

}

});

module.exports = router;
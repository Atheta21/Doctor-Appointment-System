const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
// LOGIN
const loginController = async (req, res) => {
  try {

    const user = await userModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(200).send({
        message: "User not found",
        success: false,
      });
    }

    const isMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isMatch) {
      return res.status(200).send({
        message: "Invalid email or password",
        success: false,
      });
    }
    const token = jwt.sign(
  { id: user._id },
  process.env.JWT_SECRET,
  { expiresIn: "1d" }
);

res.status(200).send({
  message: "Login successful",
  success: true,
  data: user,
  token,
});

  } catch (error) {
    console.log(error);

    res.status(500).send({
      message: "Error in login",
      success: false,
      error,
    });
  }
};



// REGISTER
const registerController = async (req, res) => {
  try {

    const existingUser = await userModel.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(200).send({
        message: "User already exists",
        success: false,
      });
    }

    const password = req.body.password;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    req.body.password = hashedPassword;

    const newUser = new userModel(req.body);

    await newUser.save();

    res.status(201).send({
      message: "User registered successfully",
      success: true,
    });

  } catch (error) {
    console.log(error);

    res.status(500).send({
      message: "Error in registration",
      success: false,
      error,
    });
  }
};

const authController = async (req, res) => {
  try {

    const user = await userModel.findById(req.body.userId);

    if (!user) {
      return res.status(200).send({
        success: false,
        message: "User not found",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "User data fetched successfully",
        data:{
            name:user.name,
            email:user.email
        },
      });
    }

  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Auth error",
      error,
    });
  }
};

module.exports = { loginController, registerController, authController };
const userModel = require("../models/userModel");

module.exports = async (req, res, next) => {
  try {

    const user = await userModel.findById(req.body.userId);

    if (!user.isAdmin) {
      return res.status(401).send({
        success: false,
        message: "Not authorized as admin",
      });
    }

    next();

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Admin auth error",
    });
  }
};
import validateLogin from "../../validation/login_Validation.js";
import AdminModel from "../../models/admin/adminModel.js";
import bcrypt from "bcrypt";

const login = async (req, res) => {
  // Validate inputs

  const validLogin = validateLogin(req.body);
  if (validLogin.error) {
    res.status(400).json({ error: validLogin.error.details[0].message });
  } else {
    //Check if user exist

    AdminModel.findOne({ userEmail: req.body.userEmail })
      .then((user) => {
        if (user) {
          //Check if password match

          bcrypt.compare(req.body.passWord, user.passWord).then((isValid) => {
            if (isValid) {
              res.status(200).json({ message: "PassWord is Valid" });
            } else {
              res.status(200).json({ message: "PassWord is not Valid " });
            }
          });
        } else {
          res.status(404).json({ message: "User not found" });
        }
      })
      .catch((err) => {
        res
          .status(500)
          .json({ message: "Error trying to find the user : " + err });
      });
  }
};

export default login;

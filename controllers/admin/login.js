import validateLogin from "../../validation/login_Validation.js";
import AdminModel from "../../models/admin/adminModel.js";

const login = (req, res) => {
  // Validate inputs

  const validLogin = validateLogin(req.body);
  if (validLogin.error) {
    res.status(400).json({ error: validLogin.error.details[0].message });
  } else {
    //Check if user exist

    const user = AdminModel.findOne({ userEmail: req.body.userEmail })
      .then((user) => {
        if (user) {
          //Check if password match
        
          
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

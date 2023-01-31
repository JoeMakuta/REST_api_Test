import AdminModel from "../../models/admin/adminModel.js";
import signUpValidation from "../../validation/signUp_Validation.js";

const signUp = (req, res) => {
  //Validate input

  const validInput = signUpValidation(req.body);
  if (validInput.error) {
    res.status(400).json({ message: validInput.error.details[0].message });
  } else {
    AdminModel.findOne({ userEmail: req.body.userEmail }).then((user) => {
      if (user) {
        console.log("User exist");
        res.status(403).json({ message: "User exists" });
      } else {
        console.log("User does not exist yet");
        const admin = new AdminModel({
          userName: req.body.userName,
          userEmail: req.body.userEmail,
          passWord: req.body.passWord,
        });
        admin
          .save()
          .then(() => {
            console.log("User saved");
            res.status(200).json({ message: "User saved" });
          })
          .catch(() => {
            console.log("An error occured when trying to save the user");
            res.status(500).json({ message: "Error server" });
          });
      }
    });
  }
};

export default signUp;

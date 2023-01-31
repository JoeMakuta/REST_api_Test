import AdminModel from "../../models/admin/adminModel.js";
import signUpValidation from "../../validation/signUp_Validation.js";
import bcrypt from "bcrypt";

const signUp = async (req, res) => {
  //Crypt the passoword

  const salt = await bcrypt.genSalt(10);
  const cryptedPassword = await bcrypt.hash(req.body.passWord, salt);

  //Validate input

  const validInput = signUpValidation(req.body);
  if (validInput.error) {
    res.status(400).send({ error: validInput.error.details[0].message });
  } else {
    //check if the email is already registered

    AdminModel.findOne({ userEmail: req.body.userEmail }).then((user) => {
      if (user) {
        res.status(403).json({ message: "User exists" });
      } else {
        const admin = new AdminModel({
          userName: req.body.userName,
          userEmail: req.body.userEmail,
          passWord: cryptedPassword,
        });
        admin
          .save()
          .then(() => {
            console.log("User saved");
            res.status(200).json({ message: "User saved" });
          })
          .catch((err) => {
            console.log("An error occured when trying to save the user");
            res.status(500).json({ message: "Error server" + err });
          });
      }
    });
  }
};

export default signUp;

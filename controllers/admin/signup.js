import AdminModel from "../../models/admin/adminModel.js";

const signUp = (req, res) => {
  AdminModel.findOne({ userEmail: req.body.userEmail }).then((user) => {
    if (user) {
      console.log("User exist");
      res.end();
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
        })
        .catch(() => {
          console.log("An error occured when trying to save the user");
        });
      res.end();
    }
  });
};

export default signUp;

import adminModel from "../../models/admin/adminModel.js";

const signUp = (req, res) => {
  //   adminModel.findOne({ userEmail: req.body.userEmail }).then((user) => {
  //     if (user) {
  //       console.log("User exist");
  //     } else {
  console.log("User does not exist yet");
  const admin = new adminModel({
    "userName": req.body.userName,
    "userEmail": req.body.userEmail,
    "passWord": req.body.passWord,
  })
    .save()
    .then(() => {
      console.log("User saved");
    })
    .catch(() => {
      console.log("An error occured when trying to save the user");
    });
};
//   });
// };

export default signUp;

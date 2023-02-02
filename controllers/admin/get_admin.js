import AdminModel from "../../models/admin/adminModel.js";

const getAdmin = (req, res) => {
  AdminModel.find()
    .then((admin) => {
      res.status(200).json({
        admins: admin,
      });
    })
    .catch((err) => {
      res.status(400).json({
        err: err,
      });
    });
};

export default getAdmin;

import validateLogin from "../../validation/login_Validation.js";

const login = (req, res) => {
  // Validate inputs

  const validLogin = validateLogin(req.body);
  if (validLogin.error) {
    res.status(400).json({ error: validLogin.error.details[0].message });
  } else {
    res.status(200).json({ message: "You can login" });
  }

  
};

export default login;

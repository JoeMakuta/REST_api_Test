import Joi from "joi";

const validateLogin = (data) => {
  const loginObject = Joi.object({
    userEmail: Joi.string().pattern(
      new RegExp(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ),
    passWord: Joi.string().required().min(6).max(255),
  });
  return loginObject.validate(data);
};

export default validateLogin;

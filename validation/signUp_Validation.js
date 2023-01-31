import Joi from "joi";

const signUpValidation = (data) => {
  const adminSchema = Joi.object({
    userName: Joi.string().required().min(3).max(255),
    userEmail: Joi.string()
      .required()
      .pattern(
        new RegExp(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ),
    passWord: Joi.string().required().min(6).max(255),
  });

  return adminSchema.validate(data);
};

export default signUpValidation;

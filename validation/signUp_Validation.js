import Joi from "joi";

const signUpValidation = (data) => {
  const adminSchema = Joi.object({
    userName: Joi.string().required().min(3).max(255),
    userEmail: Joi.string()
      .required()
      .min(6)
      .max(255)
      .pattern(new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)),
    passWord: Joi.string().required().min(6).max(255),
  });

  return adminSchema.validate(data);
};

export default signUpValidation;

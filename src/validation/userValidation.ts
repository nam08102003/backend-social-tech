import Joi from 'joi';

export const registerSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  gender: Joi.string().required(),
  birthday: Joi.string().required(),
  password: Joi.string().min(6).required()
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

export const updateSchema = Joi.object({
  firstName: Joi.string().required(),
  fullName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  confirm_password: Joi.string().min(6),
  intro: Joi.string()
});

import Joi from 'joi';

export const post = Joi.object({
  title: Joi.string().min(10).required().messages({
    'string.base': 'Title cannot be empty',
    'string.empty': 'Title cannot be empty',
    'string.null': 'Title cannot be empty'
  }),
  image: Joi.string().required(),
  body: Joi.string().min(10).required()
});
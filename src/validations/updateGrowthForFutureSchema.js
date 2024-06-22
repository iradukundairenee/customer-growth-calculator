import Joi from 'joi';

const updateGrowthForFutureSchema = Joi.object({
  monthIndex: Joi.number().integer().min(0).required(),
  newRate: Joi.number().required(),
});

export default updateGrowthForFutureSchema;

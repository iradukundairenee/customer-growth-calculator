import Joi from 'joi';

const updateGrowthForMonthSchema = Joi.object({
  monthIndex: Joi.number().integer().min(0).required(),
  newRate: Joi.number().required(),
});

export default updateGrowthForMonthSchema;

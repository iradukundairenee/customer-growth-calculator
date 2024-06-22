import Joi from "joi";

const calculateGrowthSchema = Joi.object({
  initialCustomers: Joi.number().required(),
  startDate: Joi.date().required(),
  monthlyGrowthRate: Joi.number().required(),
});

export default calculateGrowthSchema;
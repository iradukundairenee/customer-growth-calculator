// controllers/growthController.js
import Growth from '../models/growthModel.js';
import CustomerGrowthCalculator from '../utils/calculator.js';

export const calculateGrowth = async (req, res) => {
  const { initialCustomers, startDate, monthlyGrowthRate } = req.body;
  const calculator = new CustomerGrowthCalculator(initialCustomers, startDate, monthlyGrowthRate);
  const customersPerMonth = calculator.getCustomersPerMonth();

  const growth = new Growth({
    initialCustomers,
    startDate,
    monthlyGrowthRate,
    customersPerMonth,
  });

  await growth.save();
  res.json(customersPerMonth);
};

export const updateGrowthForMonth = async (req, res) => {
  const { id } = req.params;
  const { monthIndex, newRate } = req.body;
  const growth = await Growth.findById(id);
  const calculator = new CustomerGrowthCalculator(growth.initialCustomers, growth.startDate, growth.monthlyGrowthRate);
  calculator.updateGrowthRateForMonth(monthIndex, newRate);
  growth.customersPerMonth = calculator.getCustomersPerMonth();
  await growth.save();
  res.json(growth.customersPerMonth);
};

export const updateGrowthForFuture = async (req, res) => {
  const { id } = req.params;
  const { yearIndex, newRate } = req.body;
  const growth = await Growth.findById(id);
  const calculator = new CustomerGrowthCalculator(growth.initialCustomers, growth.startDate, growth.monthlyGrowthRate);
  calculator.updateGrowthRateForAllFutureMonths(yearIndex, newRate);
  growth.customersPerMonth = calculator.getCustomersPerMonth();
  await growth.save();
  res.json(growth.customersPerMonth);
};

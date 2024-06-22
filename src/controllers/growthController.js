// controllers/growthController.js
import Growth from "../models/growthModel.js";
import CustomerGrowthCalculator from "../utils/calculator.js";

export const calculateGrowth = async (req, res) => {
  try {
    const { initialCustomers, startDate, monthlyGrowthRate } = req.body;
    const calculator = new CustomerGrowthCalculator(
      initialCustomers,
      startDate,
      monthlyGrowthRate
    );
    const customersPerMonth = calculator.getCustomersPerMonth();

    const growth = new Growth({
      initialCustomers,
      startDate,
      monthlyGrowthRate: calculator.monthlyGrowthRate,
      customersPerMonth,
    });

    await growth.save();
    console.log(customersPerMonth);

    res.json(customersPerMonth);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateGrowthForMonth = async (req, res) => {
  try {
    const { id } = req.params;
    const { monthIndex, newRate } = req.body;
    const growth = await Growth.findById(id);
    if (!growth) {
      return res.status(404).json({ error: "Growth record not found" });
    }
    const calculator = new CustomerGrowthCalculator(
      growth.initialCustomers,
      growth.startDate,
      growth.monthlyGrowthRate
    );
    calculator.updateGrowthRateForMonth(monthIndex, newRate);
    growth.customersPerMonth = calculator.getCustomersPerMonth();
    growth.monthlyGrowthRate = calculator.monthlyGrowthRate;
    await growth.save();
    res.json(growth.customersPerMonth);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateGrowthForFuture = async (req, res) => {
  try {
    const { id } = req.params;
    const { monthIndex, newRate } = req.body;
    const growth = await Growth.findById(id);
    if (!growth) {
      return res.status(404).json({ error: "Growth record not found" });
    }
    const calculator = new CustomerGrowthCalculator(
      growth.initialCustomers,
      growth.startDate,
      growth.monthlyGrowthRate
    );
    calculator.updateGrowthRateForAllFutureMonths(monthIndex, newRate);
    growth.customersPerMonth = calculator.getCustomersPerMonth();
    growth.monthlyGrowthRate = calculator.monthlyGrowthRate;
    await growth.save();
    res.json(growth.customersPerMonth);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// tests/calculator.test.js
import CustomerGrowthCalculator from '../utils/calculator.js';

test('calculates customers correctly for 5 years', () => {
  const calculator = new CustomerGrowthCalculator(200, '2024-06-22', 0.1);
  const customers = calculator.getCustomersPerMonth();
  expect(customers[0]).toBeCloseTo(200);
  expect(customers[11]).toBeCloseTo(627); // End of Year 1
  expect(customers[59]).toBeCloseTo(20480); // End of Year 5
});

test('updates growth rate for a single month', () => {
  const calculator = new CustomerGrowthCalculator(200, '2024-06-22', 0.1);
  calculator.updateGrowthRateForMonth(0, 0.2);
  const customers = calculator.getCustomersPerMonth();
  expect(customers[0]).toBeCloseTo(200);
  expect(customers[1]).toBeCloseTo(240);
});

test('updates growth rate for all future months', () => {
  const calculator = new CustomerGrowthCalculator(200, '2024-06-22', 0.1);
  calculator.updateGrowthRateForAllFutureMonths(1, 0.2);
  const customers = calculator.getCustomersPerMonth();
  expect(customers[12]).toBeCloseTo(240); // Start of Year 2
  expect(customers[24]).toBeCloseTo(1440); // Start of Year 3
});

import { expect } from 'chai';
import CustomerGrowthCalculator from '../utils/calculator.js';

describe('CustomerGrowthCalculator', function() {
  this.timeout(10000);

  it('calculates customers correctly for 5 years', () => {
    const calculator = new CustomerGrowthCalculator(200, '2024-06-26', 0.1);
    const customers = calculator.getCustomersPerMonth();
    expect(customers[0]).to.be.closeTo(200, 0.01); 
    expect(customers[1]).to.be.closeTo(220, 0.01); 
    expect(customers[2]).to.be.closeTo(242, 0.01);
   
  });

  it('updates growth rate for a single month', () => {
    const calculator = new CustomerGrowthCalculator(200, '2024-06-22', 0.1);
    calculator.updateGrowthRateForMonth(0, 0.2);
    const customers = calculator.getCustomersPerMonth();
    expect(customers[0]).to.be.closeTo(200, 0.01); 
    expect(customers[1]).to.be.closeTo(240, 0.01); 
  });

  it('updates growth rate for all future months', () => {
    const calculator = new CustomerGrowthCalculator(1, '2024-06-22', 0.2);
    calculator.updateGrowthRateForAllFutureMonths(12, 0.2);
    const customers = calculator.getCustomersPerMonth();
   
    expect(customers[12]).to.be.closeTo(1.2**12, 0.01); 
    expect(customers[24]).to.be.closeTo((1.2**12) * 1.2**12, 0.01); 
  });
});


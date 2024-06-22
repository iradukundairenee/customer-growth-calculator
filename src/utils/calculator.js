// src/utils/calculator.js
class CustomerGrowthCalculator {
  constructor(initialCustomers, startDate, monthlyGrowthRate) {
    this.initialCustomers = initialCustomers;
    this.startDate = new Date(startDate);
    this.monthlyGrowthRate = new Array(60).fill(monthlyGrowthRate); // Initialize as an array
    this.customersPerMonth = this.calculateCustomersPerMonth();
  }

  calculateCustomersPerMonth() {
    let customers = [this.initialCustomers];
    for (let i = 1; i < 60; i++) {
      customers[i] = customers[i - 1] * (1 + this.monthlyGrowthRate[i - 1]);
    }
    return customers;
  }

  updateGrowthRateForMonth(monthIndex, newRate) {
    this.monthlyGrowthRate[monthIndex] = newRate;
    this.customersPerMonth = this.calculateCustomersPerMonth();
  }

  updateGrowthRateForAllFutureMonths(monthIndex, newRate) {
    for (let i = monthIndex; i < 60; i++) {
      this.monthlyGrowthRate[i] = newRate;
    }
    this.customersPerMonth = this.calculateCustomersPerMonth();
  }

  getCustomersPerMonth() {
    return this.customersPerMonth;
  }
}

export default CustomerGrowthCalculator;

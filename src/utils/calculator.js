// utils/calculator.js
class CustomerGrowthCalculator {
    constructor(initialCustomers, startDate, monthlyGrowthRate) {
      this.initialCustomers = initialCustomers;
      this.startDate = new Date(startDate);
      this.monthlyGrowthRate = monthlyGrowthRate;
      this.customersPerMonth = this.calculateCustomersPerMonth();
    }
  
    calculateCustomersPerMonth() {
      const customers = [];
      let currentCustomers = this.initialCustomers;
      for (let i = 0; i < 60; i++) { // 60 months for 5 years
        customers.push(currentCustomers);
        currentCustomers += currentCustomers * this.monthlyGrowthRate;
      }
      return customers;
    }
  
    updateGrowthRateForMonth(monthIndex, newRate) {
      this.monthlyGrowthRate[monthIndex] = newRate;
      this.customersPerMonth = this.calculateCustomersPerMonth();
    }
  
    updateGrowthRateForAllFutureMonths(yearIndex, newRate) {
      for (let i = yearIndex * 12; i < 60; i++) {
        this.monthlyGrowthRate[i] = newRate;
      }
      this.customersPerMonth = this.calculateCustomersPerMonth();
    }
  
    getCustomersPerMonth() {
      return this.customersPerMonth;
    }
  }
  
  export default CustomerGrowthCalculator;
  
// models/growthModel.js
import mongoose from 'mongoose';

const growthSchema = new mongoose.Schema({
  initialCustomers: Number,
  startDate: Date,
  monthlyGrowthRate: [Number],
  customersPerMonth: [Number],
});

const Growth = mongoose.model('Growth', growthSchema);

export default Growth;

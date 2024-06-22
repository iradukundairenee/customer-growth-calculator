import express from "express";
import {
  calculateGrowth,
  updateGrowthForMonth,
  updateGrowthForFuture,
} from "../controllers/growthController.js";

const router = express.Router();

router.post("/growth", calculateGrowth);
router.put("/growth/:id/month", updateGrowthForMonth);
router.put("/growth/:id/future", updateGrowthForFuture);

export default router;


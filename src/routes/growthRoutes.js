// routes/growthRoutes.js
import express from 'express';
import { calculateGrowth, updateGrowthForMonth, updateGrowthForFuture } from '../controllers/growthController.js';

const router = express.Router();

router.post('/calculate', calculateGrowth);
router.put('/update-month/:id', updateGrowthForMonth);
router.put('/update-future/:id', updateGrowthForFuture);

export default router;

import express from 'express';
import mongoose from 'mongoose';
import growthRoutes from './src/routes/growthRoutes.js';



export async function connectToDatabase() {
    try {
      await mongoose.connect(`mongodb+srv://iradukundairenee9:UFQgElSQPvFygRcs@cluster0.yuqwqlv.mongodb.net/`);
      console.log('Connected to Database ✅');
    } catch (error) {
      console.error('❌ Failed to connect to Database', error);
    }
  }
  
  
  const app = express();
  
  app.use(express.json());
  app.use('/api', growthRoutes);
  
  try {
    connectToDatabase().then(() => {
      app.listen(7000, () => console.log(`app is listening on port 7000`));
    });
  } catch (error) {
    console.error('❌ Failed to connect to Database', error);
  }
  
  
  

// const app = express();
// app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost:27017/customerGrowth', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected successfully'))
//     .catch((error) => console.error('MongoDB connection error:', error));

// app.use('/api', growthRoutes);

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

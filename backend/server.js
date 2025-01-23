import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import productRoutes from './routes/products.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use('/api/products', productRoutes);





app.listen(PORT, () => {
    connectDB();
    console.log('Server started on http://localhost:' + PORT);
})

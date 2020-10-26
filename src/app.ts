import express, {Application} from 'express';
import morgan from 'morgan';

const app:Application = express();

import authRoutes from './routes/auth';

const PORT = process.env.PORT || 4000;


//settings
app.set('port',PORT);


//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/auth',authRoutes);

export default app;
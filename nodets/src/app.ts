import express from 'express';
import logger from 'morgan';
import cors from 'cors';

import indexRoute from './routes/index';
import userRoute from './routes/user';
import { createConnection } from 'typeorm';

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', indexRoute);
app.use('/users', /*verifyToken,*/ userRoute);

createConnection();

export default app;

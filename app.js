import express from "express";
import connectDB from './config/db.js';
import indexRouter from './routes/index.js';

import urlsRouter from './routes/urls.js';

const app = express();

connectDB();

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/api', urlsRouter);

console.log("Logging env ", process.env.PORT);
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})
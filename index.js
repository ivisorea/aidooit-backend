import 'dotenv/config.js';
import './db/mongoose.js';
import express from 'express';
import usersRouter from './routes/usersRouter.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use('/user', usersRouter);
// app.use('/post');
// app.use('/uploads');
app.use('*', (req, res) => {res.send ('aidooit API');
});
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
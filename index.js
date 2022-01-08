import 'dotenv/config.js';
import './db/mongoose.js';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import usersRouter from './routes/usersRouter.js';
import errorHandler from './middleware/errorHandler.js';
import postsRouter from './routes/postsRouter.js';
import imagesUploadRouter from './routes/imagesUploadRouter.js';
import categoriesRouter from './routes/categoriesRouter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, 'public/uploads');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.static(publicDir));
app.use(express.json());
app.use('/user', usersRouter);
app.use('/post', postsRouter);
app.use('/categories', categoriesRouter)
app.use('/imagesuploads', imagesUploadRouter);
app.use('*', (req, res) => {res.send ('aidooit API');
});
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
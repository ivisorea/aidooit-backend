import 'dotenv/config.js';
import './db/mongoose.js';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import usersRouter from './routes/usersRouter.js';
import errorHandler from './middleware/errorHandler.js';
import postsRouter from './routes/postsRouter.js';
import imagesRouter from './routes/imagesRouter.js';
import categoriesRouter from './routes/categoriesRouter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, 'public/uploads');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.static(publicDir));
app.use(express.json());
app.use(cors());
app.use('/user', usersRouter);
app.use('/post', postsRouter);
app.use('/categories', categoriesRouter)
app.use('/images', imagesRouter);
app.use('*', (req, res) => {res.send (
    `
    <h2>Welcome to Aidooit API</h2>
    <h3>Available Routes:</h3>
    <table>
        <tr>
            <td><h4>Get all users -></h4></td>
            <td><h4>GET -></h4></td>
            <td><h4><a href='https://aidooit-app.herokuapp.com/user'>
                https://aidooit-app.herokuapp.com/user</a></h4></td>
        </tr>
        </tr>
            <td><h4>Get Posts by Author -></h4></td>  
            <td><h4>GET -></h4></td>
            <td><h4><a href='https://aidooit-app.herokuapp.com/author/:id'>
            https://aidooit-app.herokuapp.com/author/:id</a></h4></td>
        </tr>
        <tr>
            <td><h4>SingIn User -></h4></td>
            <td><h4>POST -></h4></td>
            <td><h4><a href='https://aidooit-app.herokuapp.com/singin'>
            https://aidooit-app.herokuapp.com/singin</a></h4></td>
            
        </tr>
        <tr>
            <td><h4>SingUp User -></h4></td>
            <td><h4>POST -></h4></td>
            <td><h4><a href='https://aidooit-app.herokuapp.com/singup'>
            https://aidooit-app.herokuapp.com/singup</a></h4></td>
        </tr>
        <tr>
            <td><h4>Get Login User -></h4></td>
            <td><h4>GET -></h4></td>
            <td><h4><a href='https://aidooit-app.herokuapp.com/me'>
            https://aidooit-app.herokuapp.com/me</a></h4></td>
        </tr>
        <tr>
            <td><h4>Get all posts -></h4></td>
            <td><h4>GET -></h4></td>
            <td><h4><a href='https://aidooit-app.herokuapp.com/post'>
            https://aidooit-app.herokuapp.com/post</a></h4></td>
        </tr>
        <tr>
            <td><h4>Create Post -></h4></td>
            <td><h4>POST -></h4></td>
            <td><h4><a href='https://aidooit-app.herokuapp.com/post'>
            https://aidooit-app.herokuapp.com/post</a></h4></td>
        </tr>
        <tr>
            <td><h4>Update, Delete and Get one Post -></h4></td>  
            <td><h4>GET, PUT, DELETE -></h4></td>
            <td><h4><a href='https://aidooit-app.herokuapp.com/post/:id'>
            https://aidooit-app.herokuapp.com/post/:id</a></h4></td>
        </tr>
            <td><h4>Get all categories -></h4></td>  
            <td><h4>GET -></h4></td>
            <td><h4><a href='https://aidooit-app.herokuapp.com/categories'>
            https://aidooit-app.herokuapp.com/categories</a></h4></td>
        </tr>
        </tr>
            <td><h4>Get Posts by Category -></h4></td>  
            <td><h4>GET -></h4></td>
            <td><h4><a href='https://aidooit-app.herokuapp.com/post/category/:id'>
            https://aidooit-app.herokuapp.com/post/category/:id</a></h4></td>
        </tr>
        <tr>
            <td><h4>Upload Image to AWS -></h4></td>
            <td><h4>POST -></h4></td>
            <td><h4><a href='https://aidooit-app.herokuapp.com/images/s3'>
            https://aidooit-app.herokuapp.com/images/s3</a></h4></td>
        </tr>
        <tr>
            <td><h4>Get Image from AWS -></h4></td>
            <td><h4>GET -></h4></td>
            <td><h4><a href='https://aidooit-app.herokuapp.com/images/:Key'>
            https://aidooit-app.herokuapp.com/images/:Key</a></h4></td>
        </tr>
    </table>
    `
);
});
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
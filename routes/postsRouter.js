import { Router } from 'express';
import { 
    createPost, 
    getAllPosts,
    getSinglePost,
    updatePost,
    deletePost,
    getPostsByCategory,
    getPostsByAuthor
} from '../controllers/posts.js';
import verifyToken from '../middleware/verifyToken.js';
import validateJOI from '../middleware/validateJOI.js';
// import { post} from '../joi/schemas.js';

const postsRouter = Router()

postsRouter.route('/').get(getAllPosts).post(verifyToken, createPost)

postsRouter
    .route('/:id')
    .get(getSinglePost)
    .put(verifyToken, updatePost)
    .delete(verifyToken, deletePost)

postsRouter.get('/category/:id', getPostsByCategory)
postsRouter.get('/author/:id', getPostsByAuthor)
    

export default postsRouter

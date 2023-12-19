import express from "express";
import {createTweet,getTweet} from '../controller/tweet-controller.js'
import { signIn, signUp } from "../controller/user-controller.js";
import { togglingLike } from "../controller/like-controller.js";
import { createComment } from "../controller/comment-controller.js";
import { authenticate } from "../middlewares/auth-middleware.js";

const router = express.Router();

router.post('/tweets',createTweet);
router.get('/tweets/:id',getTweet);

router.post('/signUp',signUp);
router.post('/signIn',signIn);
router.post('/like/toggle',authenticate,togglingLike);
router.post('/comments',createComment);
export default router;
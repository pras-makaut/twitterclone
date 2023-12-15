import express from "express";
import {createTweet,getTweet} from '../controller/tweet-controller.js'
import { signIn, signUp } from "../controller/user-controller.js";
import { togglingLike } from "../controller/like-controller.js";

const router = express.Router();

router.post('/tweets',createTweet);
router.get('/tweets/:id',getTweet);

router.post('/signUp',signUp);
router.post('/signIn',signIn);
router.post('/like/toggle',togglingLike)
export default router;
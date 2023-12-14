import express from "express";
import {createTweet,getTweet} from '../controller/tweet-controller.js'
const router = express.Router();

router.post('/tweets',createTweet);
router.get('/tweets/:id',getTweet);
export default router;
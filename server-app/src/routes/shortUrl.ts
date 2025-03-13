import express from 'express'; //convert to es module
import { createUrl, deleteUrl, getAllUrl, getUrl } from '../controllers/shortUrl';

const router = express.Router();

router.post("/shortUrl", createUrl);
router.get("/shortUrl", getAllUrl); 
router.get("/shortUrl/:id", getUrl);
router.delete("/shortUrl/:id", deleteUrl);//createUrl is controller

export default router;
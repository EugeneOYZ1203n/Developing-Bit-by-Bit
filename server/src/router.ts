import express from 'express';
import readContentItems from './controllers/readContentItems';

const router = express.Router();

router.get('/content', readContentItems);

export default router;
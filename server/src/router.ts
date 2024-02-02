import express from 'express';
import readContentItems from './controllers/readContentItems';
import createContentItem from './controllers/createContentItem';

const router = express.Router();

router.get('/content', readContentItems);
router.post('/content', createContentItem);

export default router;
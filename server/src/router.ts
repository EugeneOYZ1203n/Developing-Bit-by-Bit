import express from 'express';
import readContentItems from './controllers/readContentItems';
import createContentItem from './controllers/createContentItem';
import deleteContentItem from './controllers/deleteContentItem';

const router = express.Router();

router.get('/content', readContentItems);
router.post('/content', createContentItem);
router.delete('/content/:id', deleteContentItem);

export default router;
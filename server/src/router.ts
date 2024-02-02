import express from 'express';

import createContentItem from './controllers/createContentItem';
import readContentItems from './controllers/readContentItems';
import updateContentItem from './controllers/updateContentItem';
import deleteContentItem from './controllers/deleteContentItem';
import loginController from './controllers/loginController';

const router = express.Router();

router.post('/login',loginController);

router.post('/content', createContentItem);
router.get('/content', readContentItems);
router.put('/content/:id', updateContentItem);
router.delete('/content/:id', deleteContentItem);

export default router;
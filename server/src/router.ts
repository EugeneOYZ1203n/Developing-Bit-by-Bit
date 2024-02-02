import express from 'express';

import createContentItem from './controllers/createContentItem';
import readContentItems from './controllers/readContentItems';
import updateContentItem from './controllers/updateContentItem';
import deleteContentItem from './controllers/deleteContentItem';
import loginController from './controllers/loginController';
import isLoggedin from './middleware/isLoggedin';
import isAdmin from './middleware/isAdmin';

const router = express.Router();

router.post('/login',loginController);

router.post('/content', isLoggedin, isAdmin, createContentItem);
router.get('/content', isLoggedin, readContentItems);
router.put('/content/:id', isLoggedin, isAdmin, updateContentItem);
router.delete('/content/:id', isLoggedin, isAdmin, deleteContentItem);

export default router;
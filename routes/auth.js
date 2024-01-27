import express from 'express';
import authenticationController from '../controllers/authenticationController.js';

const router = express.Router();

// POST /auth/register
router.post('/register', authenticationController.Register);

// POST /auth/login
router.post('/login', authenticationController.Login); 


export default router;

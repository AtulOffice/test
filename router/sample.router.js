import express from 'express';
export const SampleRouter = express.Router();
import { createUser, deleteUser, updateUserbyname, updateUsername, getUserByname, getUsers } from '../controller/sample.controller.js';

SampleRouter.post('/createusers', createUser);
SampleRouter.get('/findusers', getUsers);
SampleRouter.get('/finduserwithname/:name', getUserByname);
SampleRouter.put('/updataeuserwithname/:name', updateUserbyname);
SampleRouter.put('/updataeuseremail/:id', updateUsername);
SampleRouter.delete('/deleteusers/:id', deleteUser);


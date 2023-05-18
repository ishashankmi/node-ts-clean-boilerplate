import { Router } from 'express';
const router = Router();
router.use('*', (req, resp)=>{
    resp.status(400).end();
})

export {router as InvalidRoute};
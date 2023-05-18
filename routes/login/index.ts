import { Router } from 'express';

const router = Router();


router.get('/', (req, resp)=>{
    resp.json({success:'ok', login: 'success'});
});

export { router as LoginRouter };
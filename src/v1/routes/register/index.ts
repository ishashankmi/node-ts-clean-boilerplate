import {Router} from 'express';
const router = Router();
import { RegisterController } from '../../controller';

router.get('/', (req, resp)=>{
    resp.json({working: true});
})
router.post('/', RegisterController.addUser);


export {router as RegisterRouter};
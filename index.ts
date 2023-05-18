import express, {Request, Response, Express} from 'express';

import { MainRoutes } from './routes';
import { InvalidRoute } from './routes/_middleware/invalidRoute';

console.clear();

let res = [
    {
        a:'might work',
        b:"keyisthis",
    },
    {
        a:'might not work',
        b:'hex',
    },
    {
        a:'will be working',
        b:'die123',
    },
    {
        a:'will not be working',
        b:'keyisthis'
    },
    {
        a:"alone",
        b:"otherkey",
    },
    {
        a:"not",
        b:'die123'
    },{
        a: "fire",
        b: "hex"
    }
]

//console.clear();
class Main{
    private app: Express;
    private port: number;
    constructor(){
        this.app = express();
        this.port = 8000;
    }
    public startServer(): void{
        this.app.use('/api/v1', MainRoutes);
        this.app.use('/', InvalidRoute);
        this.app.listen(this.port, ()=>{ console.log('[!] Server Started on Port', this.port, '\n') });
    }
}

new Main().startServer();
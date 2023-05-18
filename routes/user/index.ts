import express from 'express'

const Router = express.Router();


Router.get('/', (req, resp)=>{
    resp.json({success:'ok', msg:"this is a user route"});
});

export { Router as UserRoute }
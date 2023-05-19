import { Router, Request, Response } from "express";
const morgan = require("morgan");
import express from 'express';

const router = Router();
router.use(express.urlencoded());
router.use(morgan("tiny"));
import { LET_BYPASS_ROUTES } from "../../../../../utils/constants";

router.use(
  "/api/v1/:path",
  (req: Request, resp: Response, next): undefined | null | boolean => {
    const path: string = req.params.path;

    if ([null, undefined, ""].includes(path)) {
      resp.status(400).end();
    }

    if (LET_BYPASS_ROUTES.includes(path)) {
      if(req.body == undefined){
        resp.status(400).json({success:false, msg:'invalid parameters'})
        return;
      }
      next();
      return;
    }

    const { token } = req.query;
    if (!token) {
      resp.status(400).end('invalid authentication token');
      return;
    }
    req.body = {
      ...req.body,
      role_id: 2,
      user:{
        id: 3,
        email: "shashank@gmail.com"
      },
      data: {
        msg: "thisissomethingtopassdata",
      },
    };
    next();
  }
);

export { router as AuthRouter };

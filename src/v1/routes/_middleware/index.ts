import { Router, Request, Response } from "express";
const morgan = require("morgan");
const router = Router();
router.use(morgan("tiny"));
import { LET_BYPASS_ROUTES } from "../../../../utils/constants";

router.use(
  "/:path",
  (req: Request, resp: Response, next): undefined | null | boolean => {
    const path: string = req.params.path;

    if ([null, undefined, ""].includes(path)) {
      resp.status(400).end();
    }

    if (LET_BYPASS_ROUTES.includes(path)) {
      next();
      return;
    }

    const { token } = req.query;
    if (!token) {
      resp.status(400).end();
      return;
    }
    req.body = {
      ...req.body,
      role_id: 1,
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

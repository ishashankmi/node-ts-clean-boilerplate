import { Router } from "express";
import { check_role } from "../../../../utils/roleCheck";
import { Request, Response } from "express";

const route = Router();

route.get("/", check_role(1), (req: Request, resp: Response) => {
  const { user, msg } = req.body;
  console.log(req.body);
  resp.json({ success: "ok", msg: "this is a device route" });
});

export { route as DeviceRoute };

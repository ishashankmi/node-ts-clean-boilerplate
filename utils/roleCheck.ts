import { Request, Response, NextFunction } from "express";
import { ROLES } from "./constants";

export function check_role(role: number | Array<number>): any {
  return async function (req: Request, resp: Response, next: NextFunction) {
    try {
      const { role_id }: any = req.body;
      if (Array.isArray(role)) {
        if (![ROLES.ADMIN, ROLES.USER].includes(role_id)) {
          resp.status(401).end();
          return;
        }
      } else {
        if (role_id !== role || [null, undefined, "", 0].includes(role_id)) {
          resp.status(401).end();
          return;
        }
      }
      next();
    } catch (e: any) {
      console.log(e.message);
      resp.status(500).end();
    }
  };
}

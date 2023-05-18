import { Request, Response } from "express";
import { User } from "../../models/user";
import { asyncHandler } from "../../../../utils/asyncHandler";


class Main {

  public async getById(req: Request, resp: Response) {
    const { user } = req.body;
    const [data, error] = await asyncHandler(
      User.find({
        email: user.email,
      })
    );

    if (error) {
      resp.status(400).json({ success: false, data: "user not found" });
    } else {
      resp.json({ success: "ok", data });
    }
  }

  public async putById(req: Request, resp: Response){
    resp.json({success:"ok"})
  }

}

const UserController = new Main();

export default UserController;
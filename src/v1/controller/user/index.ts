import { Request, Response } from "express";
import { User } from "../../models/user";
import { asyncHandler } from "../../../../utils/asyncHandler";
import { responseHandler } from "../../../../utils/responseHandler";

class Main {
  public async getById(req: Request, resp: Response): Promise<any> {
    const { user } = req.body;
    const [data, error] = await asyncHandler(
      User.find({
        email: user.email,
      })
    );

    return responseHandler({
      resp,
      status_code: error ? 404 : 200,
      data: error ? [] : data,
      success: error ? false : "ok",
    });
  }

  public async putById(req: Request, resp: Response): Promise<any> {
    resp.json({ success: "ok" });
  }
}

const UserController = new Main();

export default UserController;

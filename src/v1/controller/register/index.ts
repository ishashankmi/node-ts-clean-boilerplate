import { Request, Response } from "express";
import is_empty_object from "../../../../utils/checkEmpty";
import { responseHandler } from "../../../../utils/responseHandler";
import { asyncHandler } from "../../../../utils/asyncHandler";
import { User } from "../../models/user";

export class Main {
  public async addUser(req: Request, resp: Response): Promise<any> {
    const { email, first_name, last_name, password } = req.body;

    let is_empty = is_empty_object({ email, first_name, last_name, password });

    if (!is_empty) {
      const [data, error] = await asyncHandler(
        User.create({
          email,
          first_name,
          last_name,
          is_active: 1,
        })
      );

      console.log("data ==>", data);

      responseHandler({
        resp,
        status_code: error == null ? 200 : 400,
        msg: error == null ? "user created successfully" : "something went wrong",
        success: 'ok'
      });
    } else {
      responseHandler({
        resp,
        status_code: 403,
        data: [],
        msg: "Invalid Parameters",
        success: false
      });
    }
  }
}

const RegisterController = new Main();

export default RegisterController;

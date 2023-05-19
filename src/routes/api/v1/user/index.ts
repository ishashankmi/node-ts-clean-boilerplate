import express from "express";
const Router = express.Router();
import { UserController } from "../../../../controller";
import { check_role } from "../../../../../utils/roleCheck";
import { ROLES } from "../../../../../utils/constants";

Router.get("/", check_role(ROLES.USER), UserController.getById);

export { Router as UserRoute };

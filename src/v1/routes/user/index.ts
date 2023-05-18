import express from "express";
const Router = express.Router();

import UserController from "../../controller/user";

Router.get("/", UserController.getById);

export { Router as UserRoute };

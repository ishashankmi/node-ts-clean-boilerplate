import { UserRoute } from "./user";
import express from "express";
const appRoutes = express.Router();
import { DeviceRoute } from "./device";
import { LoginRouter } from "./login";
import { RegisterRouter } from "./register";

appRoutes.use("/user", UserRoute);
appRoutes.use("/device", DeviceRoute);
appRoutes.use("/login", LoginRouter);
appRoutes.use("/register", RegisterRouter);

export { appRoutes as MainRoutes };

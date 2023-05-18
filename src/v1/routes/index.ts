import { UserRoute } from "./user";
import express from "express";
const appRoutes = express.Router();
import { DeviceRoute } from "./device";
import { LoginRouter } from "./login";

appRoutes.use("/user", UserRoute);
appRoutes.use("/device", DeviceRoute);
appRoutes.use("/login", LoginRouter);

export { appRoutes as MainRoutes };

import { UserRoute } from "./user";
import express from "express";
const appRoutes = express.Router();
import { DeviceRoute } from "./device";
import { AuthRouter } from "./_middleware";
import { InvalidRoute } from "./_middleware/invalidRoute";
import { LoginRouter } from "./login";

appRoutes.use(AuthRouter);

appRoutes.use("/user", UserRoute);
appRoutes.use("/device", DeviceRoute);
appRoutes.use("/login", LoginRouter);

appRoutes.use("/", InvalidRoute);

export { appRoutes as MainRoutes };

import { MainRoutes } from "./api/v1";
import { Router } from "express";
import { AuthRouter } from "./api/v1/_middleware";
import { InvalidRoute } from "./api/v1/_middleware/invalidRoute";
import cors from 'cors';

const route = Router();
route.use(cors({
    optionsSuccessStatus: 200,
    origin: '*'
}));


route.use(AuthRouter);
route.use("/api/v1", MainRoutes);
route.use("/", InvalidRoute);

export { route as ApiRoutes };

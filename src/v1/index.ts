import { MainRoutes } from "./routes";
import { Router } from "express";
import { AuthRouter } from "./routes/_middleware";
import { InvalidRoute } from "./routes/_middleware/invalidRoute";
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

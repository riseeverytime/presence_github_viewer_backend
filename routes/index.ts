import { Router } from "express";

import { issueRoutes } from "./issue";

const routes = Router();

routes.use("/issues", issueRoutes);

export { routes };

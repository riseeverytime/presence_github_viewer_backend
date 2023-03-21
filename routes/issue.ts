import { Router } from "express";

import { issueController } from "../controllers/issue";

const issueRoutes = Router();

issueRoutes.get("/", issueController.getIssues);

export { issueRoutes };

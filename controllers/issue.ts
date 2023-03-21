import { Request, Response } from "express";

import { fetchGitHubRepoIssues } from "../services/api";

export const issueController = {
	getIssues: async (req: Request, res: Response) => {
		try {
			const issuesReponse = await fetchGitHubRepoIssues();
			return res.status(200).json(issuesReponse.data);
		} catch (err) {
			return res.status(500).send("Something went wrong");
		}
	},
};

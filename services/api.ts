import axios from "axios";

import { appConfig } from "../config";
import { GitHubIssue } from "../types";

const api = axios.create({
	baseURL: appConfig.apiUrl,
});

// fetch github repo issues
export const fetchGitHubRepoIssues = () => api.get<GitHubIssue[]>("/issues");

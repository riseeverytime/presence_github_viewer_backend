export type GitHubUser = {
	id: number;
	login: string;
	avatar_url: string;
};

export type GitHubIssue = {
	id: number;
	number: number;
	url: string;
	title: string;
	user: GitHubUser & { assignee: GitHubUser };
};

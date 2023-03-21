import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

import { routes } from "./routes";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1/", routes);

app.use("/", (req: Request, res: Response) => {
	return res.send("Welcome to our site!");
});

export { app };

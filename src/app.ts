import "reflect-metadata";
import express from "express";
import { UserRoutes, UserSession } from "./routes";

const app = express();
app.use(express.json());
app.use("/users", UserRoutes);
app.use("/login", UserSession);

export default app;

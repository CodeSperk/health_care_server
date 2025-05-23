import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();
app.use(cors());

app.use("/", (req: Request, res: Response) => {
    res.send({
        Message : "Responding Health Care Server"
    });
});

export default app;
import config from "config";
import express from "express";
import * as fs from "fs";

const PATH: string = config.get("path");

function getHtml(path: string) {
  return fs.readFileSync(path, { flag: "r", encoding: "utf-8" });
}

const appRouter = express.Router();

appRouter.get("/:path", (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.send(getHtml(PATH + "/index.html"));
});

export default appRouter;

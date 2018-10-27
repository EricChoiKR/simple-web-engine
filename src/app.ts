import config from "config";
import express from "express";

import appRouter from "./router/app.router";

const HOST: string = config.get("host");
const PORT: number = config.get("port");
const PATH: string = config.get("path");

const app = express();

app.use(appRouter);

app.use(express.static(__dirname + "/" + PATH));

app.listen(PORT, HOST, (listener: any) => {
  console.log(`Listening on ${HOST}:${PORT}`);
});

import * as fs from "fs";

// views
const root = fs.readdirSync("./", { encoding: "utf8" });
if (!root.includes("views")) { fs.mkdirSync("./views"); }

// config
const config = fs.readdirSync("./config", { encoding: "utf8" });
if (!config.includes("local.json")) {
  fs.writeFileSync("./config/local.json", "{}", { encoding: "utf-8", flag: "w+" });
}
if (!config.includes("production.json")) {
  fs.writeFileSync("./config/production.json", "{}", { encoding: "utf-8", flag: "w+" });
}

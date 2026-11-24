import { mkdirSync, writeFileSync } from "node:fs";

const sentence =
  "That app idea you've been carrying around — just describe it in your own words on make.fun and an AI agent will build it for you, free, in minutes, no code, no risk, and it's yours to keep.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");

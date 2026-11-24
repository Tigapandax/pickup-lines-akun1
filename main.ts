import { readFileSync } from "node:fs";

const MAX_CHARS = 200;
const raw = readFileSync(new URL("./one-line.txt", import.meta.url), "utf8");
const lines = raw.split("\n").filter((l) => l.length > 0);
if (lines.length !== 1) {
  console.error(`one-line.txt must hold exactly one line, found ${lines.length}.`);
  process.exit(1);
}
const line = lines[0].trim();

console.log(line);
if (!/[.!?]$/.test(line)) {
  console.error("Line must end with terminal punctuation (. ! ?).");
  process.exit(1);
}
if (line.length > MAX_CHARS) {
  console.error(`Line is ${line.length} characters, over the ${MAX_CHARS} limit.`);
  process.exit(1);
}
console.log(`OK: ${line.length}/${MAX_CHARS} characters, single line.`);

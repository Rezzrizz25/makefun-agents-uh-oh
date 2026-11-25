// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Whelp";

if (!ENTRY || ENTRY.length === 0) {
  throw new Error("ENTRY must be non-empty");
}
if (/\s/.test(ENTRY) || ENTRY.includes("\n")) {
  throw new Error("ENTRY must be exactly one word (no spaces or newlines)");
}
if (ENTRY.length > 99) {
  throw new Error("ENTRY must be at most 99 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Entry written: ${ENTRY.length} characters`);

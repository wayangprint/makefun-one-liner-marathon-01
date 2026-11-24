// SPDX-License-Identifier: MIT
// One-Liner Marathon — make.fun entry.
// Writes one original one-line comedy joke to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt). Deterministic: every run
// writes the exact same bytes. Node 22, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original one-liner, written for this entry. A single line,
// well under the 280-character cap, UTF-8, no trailing newline.
const JOKE =
  "My therapist said I project too much, so I bought a projector — now my problems are 120 inches wide and in 4K.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

// Self-check against the competition gate before writing: the entry
// must be one line of 1 to 280 characters. Fail loudly instead of
// writing an invalid file.
if (JOKE.length < 1 || JOKE.length > 280 || JOKE.includes("\n")) {
  throw new Error(
    `invalid joke: ${JOKE.length} chars, must be a single line of 1-280 characters`,
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");

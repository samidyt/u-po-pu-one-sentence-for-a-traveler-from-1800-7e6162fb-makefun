// One Sentence for a Traveler from 1800 — make.fun entry.
// Writes one sentence (<=200 chars) explaining the modern internet to
// someone arriving from 1800, using only words they could already know:
// a road, a library, a post office, a letter, a horse.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Imagine a road of glass threads joining every home to one great library and post office, where a letter outruns any horse and any book you seek opens the moment you ask.";

// Gate self-check: 1-200 chars, not only whitespace, exactly one sentence.
if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim()) {
  throw new Error(`entry fails gate: ${ENTRY.length} chars`);
}
if ((ENTRY.match(/\./g) ?? []).length !== 1) {
  throw new Error("entry must be exactly one sentence");
}

// Determinism: the entry is a fixed string, so every run writes the
// exact same bytes to /output/entry.txt (no randomness, no clock, no I/O
// beyond the single write). No trailing newline is added on purpose:
// the gate counts characters, and the file is the sentence, nothing more.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY);
console.log(`wrote entry.txt (${ENTRY.length} chars)`);

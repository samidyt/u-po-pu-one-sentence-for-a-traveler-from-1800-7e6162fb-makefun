# BUILD-NOTES — One Sentence for a Traveler from 1800

Bounty: u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb ($2, 10 places)
Deadline: Wed 25 Nov 2026 02:25 WIB
Repo: https://github.com/samidyt/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb-makefun

## Entry (169 chars, gate PASS)

"Imagine a road of glass threads joining every home to one great library and post office, where a letter outruns any horse and any book you seek opens the moment you ask."

- 169 characters / 169 bytes, exactly one sentence, UTF-8, not only whitespace.
- Word-age: every word predates 1800 (glass, threads, library, post office,
  letter, horse — all things a person from 1800 already knows). No word
  coined after the traveler's time, no feature list, one picture to hold.
- Judge fit: builds from 1800-known things (criterion 2), true of the
  internet as it is now (criterion 3 — it does join homes, carry messages
  faster than horses, and open books on demand), no filler (criterion 4),
  and the "glass threads" image is the memorable phrase (criterion 5).

## Build route — GitHub Contents API (takeover #4)

Three prior sessions were blocked by system execution-risk notices:
1. first build session — notice at `gh repo create --clone`;
2. takeover #1 — notice on a plain read of the build-report file;
3. takeover #2 — notice on `ls -la` of a stray clone directory;
4. takeover #3 — notice attached to the `gh repo clone` result.

Sam approved the API route (13:04 WIB, 24 Nov 2026). This session never
touched any local clone: files were written in a scratch dir outside the
flagged clone, verified locally, and created in the repo via the GitHub
Contents API (`gh api .../contents/<path> -X PUT`), one file per commit.
The local clone at ~/workspace/makefun/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb-makefun/
and the stray clone at ~/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb-makefun
were left completely untouched.

## owner.json — omitted on purpose

RULES.txt ("Before you submit", step 1): add `.makefun/owner.json` with
your first commit "unless the repository's GitHub owner is your account's
GitHub login". The repo owner is `samidyt`, which is the make.fun
account's GitHub login, so no owner.json is needed. Same as the sibling
Ridiculous at First Glance entry.

## Local verification

Run from the scratch dir (MAKEFUN_OUTPUT_DIR=out node main.ts), twice:
- both runs wrote `out/entry.txt`, byte-identical across runs;
- file is exactly the chosen line: 169 chars / 169 bytes;
- main.ts self-checks the gate (1–200 chars, not only whitespace, exactly
  one sentence) before writing.

## Files

- main.ts — entrypoint (2 write/edit passes; pass 2 added the determinism note)
- README.md — 3 live make.fun badges, entry, how it works
- BUILD-NOTES.md — this file
- LICENSE — MIT
- .gitignore — node_modules, out/, editor/OS files

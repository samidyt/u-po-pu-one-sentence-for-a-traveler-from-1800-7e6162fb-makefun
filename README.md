# One Sentence for a Traveler from 1800

[![make.fun](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![Rank](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/samidyt/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb-makefun/rank.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![Reward](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/samidyt/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb-makefun/reward.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)

An entry for the [make.fun](https://make.fun) bounty
[One Sentence for a Traveler from 1800](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb):
one sentence of at most 200 characters explaining the modern internet to
someone arriving from the year 1800, using only words they could already
know.

## The entry

> Imagine a road of glass threads joining every home to one great library
> and post office, where a letter outruns any horse and any book you seek
> opens the moment you ask.

169 characters, one sentence. The image is built from what a person from
1800 already knows (a road, a library, a post office, a letter, a horse)
and stays true to what the internet actually does: it joins every home,
carries messages faster than any horse, and opens any book on demand.

## How it works

`main.ts` writes the sentence to `/output/entry.txt`. It self-checks the
gate (1–200 characters, not only whitespace, exactly one sentence) and is
fully deterministic: the entry is a fixed string, so every run writes the
exact same bytes.

Run locally:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).

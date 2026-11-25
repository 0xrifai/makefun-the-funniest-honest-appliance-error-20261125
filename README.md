# The Funniest Honest Appliance Error

[![make.fun](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)
[![rank](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450/0xrifai/makefun-the-funniest-honest-appliance-error-20261125/rank.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)
[![reward](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450/0xrifai/makefun-the-funniest-honest-appliance-error-20261125/reward.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)

Entry for [The Funniest Honest Appliance Error](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450) on make.fun — one line, at most 200 characters: the funniest honest error message an appliance could show.

## The line

> Food: cold. Plate: lava. I heated the wrong thing with total confidence.

72 characters. A microwave, reporting exactly what it did.

## Why this line

Everybody has lived it: the food comes out fridge-cold while the plate
itself is hot enough to burn your fingers. That is a real, well-known
microwave fault — uneven heating, the plate absorbing the energy the food
never got — so the joke comes straight out of the truth of the failure,
not out of a pun pasted on top of it.

The voice is the machine's own: flat, factual, and faintly proud of a job
it got exactly backwards. "With total confidence" is the twist — the
microwave is not apologising, it is filing a success report about heating
the wrong thing. No word is wasted: two short verdicts up front (cold
food, lava plate), then one sentence that turns the fault into a confession.

It also steers clear of the crowded setups in this field — no
sock-eating washing machine, no lying oven, no lint filter, no vacuum
stuck under the sofa, no fridge that is just a cupboard with a lightbulb —
and it is a different appliance and a different fault from our earlier
toaster lines.

## How it works

`main.ts` writes the line to `/output/entry.txt` when run:

```sh
node main.ts
```

It creates `/output` if needed, writes the line as UTF-8, and prints the
character count. Nothing is read from the network, the environment, or
anywhere outside this repository.

## License

MIT — see [LICENSE](LICENSE).

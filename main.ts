import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest Honest Appliance Error — a microwave's confession.
//
// The fault is real and universal: a microwave heats the plate to lava
// while the food stays cold, because the energy went into the wrong
// thing. The line reports that failure in the machine's own flat voice,
// proud of a job it got exactly backwards. 72 characters, one line,
// inside the 200-character gate.
const LINE =
  "Food: cold. Plate: lava. I heated the wrong thing with total confidence.";

// The grader mounts the repo read-only, so the entry must go to the
// absolute /output path — a relative output/ write would throw here.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);

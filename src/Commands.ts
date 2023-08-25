import { Command } from "./Command";
import { CockFight } from "./commands/CockFight";
import { Egg } from "./commands/Egg";
import { Motivate } from "./commands/Motivate";
import { RandomPhrase } from "./commands/RandomPhrases";
import { Urban } from "./commands/Urban";

export const Commands: Command[] = [Egg, RandomPhrase, CockFight, Motivate, Urban]; 


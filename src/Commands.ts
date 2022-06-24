import { Command } from "./Command";
import { Cdash } from "./commands/Cdash";
import { CockFight } from "./commands/CockFight";
import { Egg } from "./commands/Egg";
import { Gab } from "./commands/Gab";
import { RandomPhrase } from "./commands/RandomPhrases";

export const Commands: Command[] = [Gab, Egg, RandomPhrase, Cdash, CockFight]; 

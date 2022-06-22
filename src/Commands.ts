import { Command } from "./Command";
import { Cdash } from "./commands/Cdash";
import { CockFight } from "./commands/CockFight";
import { Egg } from "./commands/Egg";
import { Gab } from "./commands/Gab";
import { Hello } from "./commands/Hello";
import { RandomPhrase } from "./commands/RandomPhrases";

export const Commands: Command[] = [Hello, Gab, Egg, RandomPhrase, Cdash, CockFight]; 

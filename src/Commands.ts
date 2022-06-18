import { BaseCommandInteraction, ChatInputApplicationCommandData, CommandInteraction } from "discord.js";
import { Command } from "./Command";
import { Egg } from "./commands/Egg";
import { Gab } from "./commands/Gab";
import { Hello } from "./commands/Hello";
import { RandomPhrase } from "./commands/RandomPhrases";

export const Commands: Command[] = [Hello, Gab, Egg, RandomPhrase]; 

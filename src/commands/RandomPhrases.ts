import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../Command";

export const RandomPhrase: Command = {
    name: "random",
    description: "Says a random Joke",
    type: "CHAT_INPUT",

    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const jokes: string[] = [
            `:notes: _Barbies resautant grill..._ :notes:`,
        ];
        const content = jokes[Math.floor(Math.random() * jokes.length)];

        await interaction.followUp({
            ephemeral: true,
            content,
        });
    }
};





import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../Command";

export const Gab: Command = {
    name: "gab",
    description: "Thanks the creator of Avatar",
    type: "CHAT_INPUT",
    
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const content = "Chicken dance for Gabriel Kirouac, the creator of my sick Avatar!";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
}; 
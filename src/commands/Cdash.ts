import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../Command";

export const Cdash: Command = {
    name: "cdash",
    description: "Gives a *caw!* about cdash",
    type: "CHAT_INPUT",
    
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const cdash = client.users.fetch("762728725275738154");
        const content = `We give a fuck about you ${(await cdash)}`;
  
        await interaction.followUp({
            ephemeral: true,
            content,
            files: ["https://media.giphy.com/media/9RNGg4IQiufp6/giphy.gif"]
        });
    }
}; 
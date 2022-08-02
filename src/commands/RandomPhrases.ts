import { BaseCommandInteraction, Client } from "discord.js";
import { roiQuotes, roiUrl } from "../utils/roiQuotes";
import { Command } from "../Command";

export const RandomPhrase: Command = {
    name: "random",
    description: "Phrase random du Roi Heenok",
    type: "CHAT_INPUT",

    run: async (client: Client, interaction: BaseCommandInteraction) => {
        
        const content = `_**"${roiQuotes[Math.floor(Math.random() * roiQuotes.length)]}"**_`;
        const url = roiUrl[Math.floor(Math.random() * roiUrl.length)];
        await interaction.followUp({
            ephemeral: true,
            content,
            files: [url]
        });
    }
};





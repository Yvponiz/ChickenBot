import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../Command";

export const Egg: Command = {
    name: "egg",
    description: "Offers an Egg in time of needs",
    type: "CHAT_INPUT",
    
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const content = `_Can I offer you an Egg in these trying times?_`;
        
        await interaction.followUp({
            ephemeral: true,
            content,
            files: ["https://i.kym-cdn.com/photos/images/newsfeed/001/402/192/398.jpg"]
        });
    }
}; 
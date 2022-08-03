import { BaseCommandInteraction, Client} from "discord.js";
import { Command } from "../Command"
import { IMAGES, OPTIONS } from "../CommandOptions";

export const Egg: Command = {
    name: "egg",
    description: "Offers an Egg in time of needs",
    type: "CHAT_INPUT",
    options: [
        {
            name: OPTIONS.COMMAND_MENTIONED_USER,
            description: "The user you want to offer the egg",
            type: "USER",
            required: true
        }
    ],

    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const taggedUser = interaction.options.getUser(OPTIONS.COMMAND_MENTIONED_USER);
        const content = `_Can I offer you a nice egg in these trying time?_ ${taggedUser}`;

        await interaction.followUp({
            ephemeral: true,
            content,
            files: [IMAGES.COMMAND_EGG]
        });
    }
}
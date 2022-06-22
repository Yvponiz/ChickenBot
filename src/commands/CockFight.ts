import { BaseCommandInteraction, Client} from "discord.js";
import { cockFightingScript } from "../functions/FightSimScript";
import { Command } from "../Command"
import { IMAGES, OPTIONS } from "../CommandOptions";

export const CockFight: Command = {
    name: "fight",
    description: "Cock fight between you and a user of your choice",
    type: "CHAT_INPUT",
    options: [
        {
            name: OPTIONS.COMMAND_MENTIONED_USER,
            description: "The user you want to fight",
            type: "USER",
            required: true
        },
        
    ],

    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const wait = require('node:timers/promises').setTimeout;
        const channel = interaction.guild?.systemChannel;
        const challenger = interaction.user;
        const taggedUser = interaction.options.getUser(OPTIONS.COMMAND_MENTIONED_USER);
        const fighters = [
            challenger,
            taggedUser
        ];
        const winner = fighters[Math.floor(Math.random() * fighters.length)];
        const content =  `**CUCCO! _${challenger.username}_ has challenged you to a cock fight!** ${taggedUser}`  

        await interaction.followUp({
            ephemeral: true,
            content,
            files: [IMAGES.COMMAND_FIGHT],
        });
        cockFightingScript(interaction, channel!, winner!);
    }
}; 


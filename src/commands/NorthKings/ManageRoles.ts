import { Client } from "discord.js";
import { addRoles } from "../../functions/AddRoles";
import { removeRoles } from "../../functions/RemoveRoles";
import * as NorthKingsConfig from "../../configs/NorthKingsConfig";
//import { roles } from "../../functions/RemoveRoles";

export default (client: Client): void => {
    client.on("messageReactionAdd", async (reaction, user) => {
        if (reaction.message.guildId == NorthKingsConfig.SERVER.ID) {
            if (!reaction) {
                return;
            }
            await reaction.fetch();
            const emojis = await reaction.emoji.name;
            const member = reaction.message.guild!.members.fetch(user.id);

            addRoles(await member, emojis!);
        }
    });

    client.on("messageReactionRemove", async (reaction, user) => {
        if (reaction.message.guildId == NorthKingsConfig.SERVER.ID) {
            if (!reaction) {
                return;
            }
            await reaction.fetch();
            const emojis = await reaction.emoji.name;
            const member = reaction.message.guild!.members.fetch(user.id);

            removeRoles(await member, emojis!);
        }
    });
}; 
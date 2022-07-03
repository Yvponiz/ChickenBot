import { Client } from "discord.js";
import * as NorthKingsConfig from "../../configs/NorthKingsConfig";
import { roles } from "../../functions/AddRemoveRoles";

export default (client: Client): void => {
    client.on("messageReactionAdd", async (reaction, user) => {
        if (reaction.message.guildId == NorthKingsConfig.SERVER.ID) {
            if (!reaction) {
                return;
            }
            await reaction.fetch();
            const emojis = await reaction.emoji.name;
            const member = await reaction.message.guild!.members.fetch(user.id);

            roles[emojis ?? '']?.add(member);
        }
    });

    client.on("messageReactionRemove", async (reaction, user) => {
        if (reaction.message.guildId == NorthKingsConfig.SERVER.ID) {
            if (!reaction) {
                return;
            }
            await reaction.fetch();
            const emojis = await reaction.emoji.name;
            const member = await reaction.message.guild!.members.fetch(user.id);

            roles[emojis ?? '']?.remove(member);
        }

    });
}; 
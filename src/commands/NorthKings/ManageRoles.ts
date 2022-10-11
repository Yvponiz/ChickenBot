import { Client } from "discord.js";
import * as NorthKingsConfig from "../../configs/NorthKingsConfig";
import * as S21Config from "../../configs/S21Config"
import { northKingsroles, S21sroles } from "../../functions/AddRemoveRoles";

export default (client: Client): void => {
    client.on("messageReactionAdd", async (reaction, user) => {
        const guildId = reaction.message.guildId;
        if (guildId == NorthKingsConfig.SERVER.ID || guildId == S21Config.SERVER.ID) {
            if (!reaction) {
                return;
            }
            await reaction.fetch();
            const emojis = await reaction.emoji.name;
            const member = await reaction.message.guild!.members.fetch(user.id);

            if (guildId == NorthKingsConfig.SERVER.ID)
                northKingsroles[emojis ?? '']?.add(member);
            S21sroles[emojis ?? ''].add(member);
        }
    });

    client.on("messageReactionRemove", async (reaction, user) => {
        const guildId = reaction.message.guildId;
        if (guildId == NorthKingsConfig.SERVER.ID || guildId == S21Config.SERVER.ID) {
            if (!reaction) {
                return;
            }
            await reaction.fetch();
            const emojis = await reaction.emoji.name;
            const member = await reaction.message.guild!.members.fetch(user.id);

            if (guildId == NorthKingsConfig.SERVER.ID)
                northKingsroles[emojis ?? '']?.remove(member);
            S21sroles[emojis ?? ''].remove(member);
        }
    });
}; 